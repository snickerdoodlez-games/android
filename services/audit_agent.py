import pandas as pd
import json
import os
import glob
import re
from openai import OpenAI

# 1. Configuration
client = OpenAI(
    api_key="sk-44f28365d1954ad0b3fb23579aeb5e6a", 
    base_url="https://api.deepseek.com"
)

BASE_DIR = "." 
REGISTRY_FILE = "audit_registry.json"
session_history = set()

def get_registry():
    return json.load(open(REGISTRY_FILE, 'r')) if os.path.exists(REGISTRY_FILE) else {}

def save_registry(registry):
    with open(REGISTRY_FILE, 'w') as f:
        json.dump(registry, f, indent=4)

def delete_row_from_file(file_path, row_id):
    """Deletes only the specific row matching the exact row_id at the start of the line."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Match the exact ID followed by a comma (the CSV separator)
        target = f"{row_id},"
        new_lines = [line for line in lines if not line.strip().startswith(target)]
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"    [OK] Deleted exact row ID '{row_id}'")
    except Exception as e:
        print(f"    [Error] Could not delete row: {e}")

def get_suggestion(category, old_item, row_words):
    forbidden = list(set(row_words + [category] + list(session_history)))
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "Suggest a simple, common word and a clear, 1-sentence definition. Do not use quotes. Format: WORD|DEFINITION"},
            {"role": "user", "content": f"Category: '{category}'. DO NOT use: {', '.join(forbidden)}. Replace '{old_item}' with a relevant word."}
        ]
    )
    sugg = response.choices[0].message.content
    new_w = sugg.split('|')[0].strip()
    session_history.add(new_w)
    return sugg

def apply_replacement(file_path, old_item, new_item, old_def, new_def):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = content.replace(f'"{old_item}"', f'"{new_item}"').replace(f'"{old_def}"', f'"{new_def}"')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"    [OK] Updated: '{old_item}' -> '{new_item}'")

def parse_ts_as_csv(file_path):
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    match = re.search(r'`(.*)`', content, re.DOTALL)
    if not match: return pd.DataFrame()
    lines = match.group(1).strip().splitlines()
    header = [h.strip() for h in lines[0].split(',')]
    rows = []
    pattern = re.compile(r',(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)')
    for line in lines[1:]:
        if not line.strip(): continue
        parts = pattern.split(line)
        cleaned_parts = [p.strip().strip('"') for p in parts]
        if len(cleaned_parts) >= len(header):
            rows.append(cleaned_parts[:len(header)])
    return pd.DataFrame(rows, columns=header)

def ai_gatekeeper(category, items):
    try:
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[{
                "role": "system", 
                "content": "You are a strict data auditor. If there is doubt about an item's quality, spelling, or relevance, flag as 'no'. Only flag as 'yes' if the data is perfect."
            }, {
                "role": "user", 
                "content": f"Category: '{category}'. Items: {', '.join(items)}. Is this data perfect? Answer ONLY 'yes' or 'no'."
            }]
        )
        return "yes" in response.choices[0].message.content.lower()
    except: return False 

def run_audit():
    # Diagnostic: Print all files in the directory so you can confirm the script sees them
    print(f"DEBUG: Scanning directory: {os.getcwd()}")
    all_files_in_dir = os.listdir('.')
    print(f"DEBUG: Files found: {all_files_in_dir}")
    
    registry = get_registry()
    patterns = ["csvPoolData*.ts", "CSV_SYNONYMS_*.ts", "csvThemeData*.ts", "emojiData.ts"]
    search_paths = [os.path.join(BASE_DIR, p) for p in patterns]
    all_files = [f for p in search_paths for f in glob.glob(p)]
    unaudited = [f for f in all_files if f not in registry]

    if not unaudited:
        print("\nNo new files found to audit.")
        return

    print("\n--- Files to Audit ---")
    for i, f in enumerate(unaudited): print(f"{i+1}: {f}")
    
    choice = input("\nSelect file number: ")
    selected_file = unaudited[int(choice)-1]
    df = parse_ts_as_csv(selected_file)

    cat_col = next((c for c in df.columns if c.lower() in ['category', 'theme', 'cat']), df.columns[1])
    word_cols = [c for c in df.columns if re.match(r'^WORD\d$', c.upper())]
    
    for index, row in df.iterrows():
        category = str(row.get(cat_col, ''))
        row_id = row.iloc[0] 
        row_words = [str(row.get(col, '')).strip('"') for col in word_cols if str(row.get(col, '')) != 'nan']
        
        if ai_gatekeeper(category, row_words): continue
        
        for col in word_cols:
            item = str(row.get(col, '')).strip('"')
            if not item or item.lower() == 'nan' or len(item) > 13: continue
            
            print(f"\n[!] Flagged: '{item}' in '{category}'")
            action = input("    Replace (r), Delete row (d), Ignore (i), or Skip (s)? ").strip().lower()
            
            if action == 'r':
                while True:
                    sugg = get_suggestion(category, item, row_words)
                    try:
                        new_w, new_d = sugg.split('|', 1)
                        print(f"\n    Proposed: Word: {new_w} | Def: {new_d}")
                        confirm = input("    Confirm (y/n/another/d=delete)? ").lower()
                        if confirm == 'y':
                            def_col = col.replace("WORD", "WORDDEF")
                            old_def = str(row.get(def_col, ''))
                            apply_replacement(selected_file, item, new_w, old_def, new_d)
                            break
                        elif confirm == 'd':
                            delete_row_from_file(selected_file, row_id)
                            break
                        elif confirm == 'n': break
                    except: continue 
            elif action == 'd':
                delete_row_from_file(selected_file, row_id)
                break
            elif action == 'i':
                continue
            elif action == 's':
                break

    registry[selected_file] = "audited"
    save_registry(registry)
    print(f"\nFinished {selected_file}.")

if __name__ == "__main__":
    run_audit()