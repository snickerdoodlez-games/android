import { readFileSync, writeFileSync } from 'fs';

function fixFile(filePath) {
  let content = readFileSync(filePath, 'utf8');
  const original = content;
  
  // Find ""content,with commas"" patterns and fix to """content,with commas""",
  // The inner content: any non-quote chars, a comma, any non-quote chars (to only match fields that actually have commas)
  content = content.replace(/""([^"]*,[^"]*)""/g, '"""$1"""');
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf8');
    const changes = (content.match(/"""/g) || []).length - (original.match(/"""/g) || []).length;
    console.log(`Fixed: ${filePath} (${changes > 0 ? '+' : ''}${changes} triple-quote changes)`);
  } else {
    console.log(`No changes: ${filePath}`);
  }
}

fixFile('c:/Users/DD/New folder/gitttt/services/csvPoolData9.ts');
fixFile('c:/Users/DD/New folder/gitttt/services/csvPoolData11.ts');
