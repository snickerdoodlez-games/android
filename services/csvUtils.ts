
import { CSVRow } from '../types';

export const MAX_WORD_LENGTH = 50;

// Fisher-Yates shuffle algorithm for unbiased randomization
// This ensures every element has an equal probability of being selected.
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const parseCSV = (csv: string): CSVRow[] => {
  const lines = csv.trim().split('\n');
  const rawData: CSVRow[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Handle potential quotes in CSV
    const parts: string[] = [];
    let current = '';
    let inQuote = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        if (inQuote && line[j+1] === '"') {
          current += '"';
          j++;
        } else {
          inQuote = !inQuote;
        }
      } else if (char === ',' && !inQuote) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current);

    if (parts.length < 3) continue;

    const id = parts[0].trim();
    const name = parts[1].trim(); 
    
    const words = parts.slice(2)
        .map(w => w.trim())
        .filter(w => w.length > 0 && w.length <= MAX_WORD_LENGTH);

    if (words.length >= 4) {
      rawData.push({ id, name, words });
    }
  }
  return rawData;
};

// Parser for "Category, "Word, Word, Word", Intensity" format
export const parseClusterCSV = (csv: string, startId: number = 80000): CSVRow[] => {
  const lines = csv.trim().split('\n');
  const rawData: CSVRow[] = [];
  let idCounter = startId; // Distinct ID range for clustered data

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts: string[] = [];
    let current = '';
    let inQuote = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuote = !inQuote;
      } else if (char === ',' && !inQuote) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current);

    if (parts.length < 2) continue;

    const name = parts[0].trim().replace(/^"|"$/g, '');
    const cluster = parts[1].trim().replace(/^"|"$/g, '');
    
    const words = cluster.split(',')
        .map(w => w.trim())
        .filter(w => w.length > 0 && w.length <= MAX_WORD_LENGTH);

    if (words.length >= 4) {
      rawData.push({ 
          id: (idCounter++).toString(), 
          name, 
          words 
      });
    }
  }
  return rawData;
};
