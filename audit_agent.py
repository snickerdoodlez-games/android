import pandas as pd
import json
import os
import re
import glob
from openai import OpenAI

# 1. Configuration
client = OpenAI(
    api_key="sk-44f28365d1954ad0b3fb23579aeb5e6a", 
    base_url="https://api.deepseek.com"
)

REGISTRY_FILE = "audit_registry.json"
REPORT_FILE = "audit_report.json"

def get_registry():
    return json.load(open(REGISTRY_FILE, 'r')) if os.path.exists(REGISTRY_FILE) else {}

def save_registry(registry):
    with open(REGISTRY_FILE, 'w') as f:
        json.dump(registry, f, indent=4)

def parse_ts_to_dataframe(file_path):
    """Extracts objects from a TS file. Expects standard [{...}, {...}] format."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to extract the array content between brackets
    match = re.search(r'\[.*\]', content, re.DOTALL)
    if match:
        json_str = match.group(0)
        # Clean up common TS syntax (like trailing commas)
        json_str = re.sub(r',\s*]', ']', json_str)
        data = json.loads(json_str)
        return pd.DataFrame(data)
    return pd.DataFrame()

def check_with_deepseek(item, category):
    response = client.chat.completions.create(
        model="deepseek-chat", 
        messages=[
            {"role": "system", "content": "You are a data auditor. Ignore definitions, focus on intent."},
            {"role": "user", "content": f"Does the item '{item}' belong in category '{category}'? Answer ONLY 'yes' or 'no'. If 'no', explain why."}
        ]
    )
    return response.choices[0].message.content

def run_audit():
    registry = get_registry()
    full_report = {}
    
    # Target your specific files
    patterns = ["csvPoolData*.ts", "CSV_SYNONYMS_*.ts", "csvThemeData*.ts", "emojiData.ts"]
    files_to_audit = []
    for p in patterns:
        files_to_audit.extend(glob.glob(p))
    
    for file_path in files_to_audit:
        if file_path in registry: continue
            
        print(f"Auditing: {file_path}...")
        df = parse_ts_to_dataframe(file_path)
        file_issues = []
        
        for index, row in df.iterrows():
            item = str(row.get('Item', ''))
            category = str(row.get('Category', ''))
            
            if not item or not category: continue
            
            # Logic Checks
            length_violation = len(item) > 13
            analysis = check_with_deepseek(item, category)
            mismatch = "no" in analysis.lower()[:5]
            
            if length_violation or mismatch:
                file_issues.append({
                    "row": index, "item": item, "category": category, 
                    "length_violation": length_violation, "reason": analysis
                })
        
        if file_issues:
            full_report[file_path] = file_issues
        
        registry[file_path] = "audited"
        
    with open(REPORT_FILE, 'w') as f:
        json.dump(full_report, f, indent=4)
    save_registry(registry)
    print("Audit complete. Please review audit_report.json.")

if __name__ == "__main__":
    run_audit()