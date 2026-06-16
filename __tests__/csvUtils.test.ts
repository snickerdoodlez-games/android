import { shuffleArray, parseCSVLine, parseCSV } from '../services/csvUtils';

// ==========================================
// shuffleArray
// ==========================================
describe('shuffleArray', () => {
  it('should preserve array length after shuffle', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result).toHaveLength(input.length);
  });

  it('should contain all the same elements after shuffle', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);
    expect(result.sort()).toEqual(input.sort());
  });

  it('should not mutate the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const original = [...input];
    shuffleArray(input);
    expect(input).toEqual(original);
  });

  it('should return an empty array when given an empty array', () => {
    expect(shuffleArray([])).toEqual([]);
  });

  it('should return a single-element array unchanged', () => {
    expect(shuffleArray([42])).toEqual([42]);
  });

  it('should handle arrays of strings', () => {
    const input = ['apple', 'banana', 'cherry'];
    const result = shuffleArray(input);
    expect(result).toHaveLength(3);
    expect(result.sort()).toEqual(input.sort());
  });
});

// ==========================================
// parseCSVLine
// ==========================================
describe('parseCSVLine', () => {
  it('should parse a simple comma-separated line without quotes', () => {
    const result = parseCSVLine('hello,world,test');
    expect(result).toEqual(['hello', 'world', 'test']);
  });

  it('should handle quoted fields with commas inside', () => {
    const result = parseCSVLine('1,"Category Name","A description, with a comma"');
    expect(result).toEqual(['1', 'Category Name', 'A description, with a comma']);
  });

  it('should handle double-quote pair escaping ("" toggles)', () => {
    const result = parseCSVLine('1,""hello"",""world""');
    expect(result).toEqual(['1', 'hello', 'world']);
  });

  it('should handle empty fields', () => {
    const result = parseCSVLine('a,,c');
    expect(result).toEqual(['a', '', 'c']);
  });

  it('should handle trailing empty fields', () => {
    const result = parseCSVLine('a,b,');
    expect(result).toEqual(['a', 'b', '']);
  });

  it('should handle leading empty fields', () => {
    const result = parseCSVLine(',b,c');
    expect(result).toEqual(['', 'b', 'c']);
  });

  it('should handle an empty string', () => {
    const result = parseCSVLine('');
    expect(result).toEqual(['']);
  });

  it('should handle a single field', () => {
    const result = parseCSVLine('justOneField');
    expect(result).toEqual(['justOneField']);
  });
});

// ==========================================
// parseCSV
// ==========================================
describe('parseCSV', () => {
  const OLD_FORMAT_CSV = `id,Category Name,Word1,Word2,Word3,Word4,Difficulty,BroadCategory
1,Colors,Red,Blue,Green,Yellow,1,Art
2,Animals,Dog,Cat,Bird,Fish,1,Animals`;

  it('should parse old format CSV correctly', () => {
    const rows = parseCSV(OLD_FORMAT_CSV);
    expect(rows).toHaveLength(2);
    expect(rows[0].id).toBe('1');
    expect(rows[0].name).toBe('Colors');
    expect(rows[0].words).toEqual(['Red', 'Blue', 'Green', 'Yellow']);
    expect(rows[0].difficulty).toBe(1);
    expect(rows[0].broadCategory).toBe('Art');
    expect(rows[0].definitions).toBeUndefined();
  });

  it('should detect broadCategory and difficulty from last columns', () => {
    const rows = parseCSV(OLD_FORMAT_CSV);
    expect(rows[1].name).toBe('Animals');
    expect(rows[1].broadCategory).toBe('Animals');
    expect(rows[1].difficulty).toBe(1);
  });

  const NEW_FORMAT_CSV = `id,Category Name,CATDICT,Word1,Def1,Word2,Def2,Word3,Def3,Word4,Def4,Difficulty,BroadCategory
1,Colors,"Colors description",Red,"A primary color",Blue,"A primary color too",Green,"The color of grass",Yellow,"The color of sun",1,Art`;

  it('should parse new format CSV with catDict correctly', () => {
    const rows = parseCSV(NEW_FORMAT_CSV);
    expect(rows).toHaveLength(1);
    expect(rows[0].id).toBe('1');
    expect(rows[0].name).toBe('Colors');
    expect(rows[0].catDict).toBe('Colors description');
    expect(rows[0].words).toEqual(['Red', 'Blue', 'Green', 'Yellow']);
    expect(rows[0].definitions).toEqual(['A primary color', 'A primary color too', 'The color of grass', 'The color of sun']);
    expect(rows[0].difficulty).toBe(1);
    expect(rows[0].broadCategory).toBe('Art');
  });

  it('should return empty array for empty input', () => {
    expect(parseCSV('')).toEqual([]);
  });

  it('should return empty array for header-only CSV', () => {
    expect(parseCSV('id,name,word1,word2,word3,word4,difficulty,broadCategory')).toEqual([]);
  });

  it('should skip rows with fewer than 5 parts', () => {
    const csv = `id,name,word1,word2,broadCategory
1,Test,Only,two,words`;
    expect(parseCSV(csv)).toEqual([]);
  });

  it('should skip empty lines', () => {
    const csv = `id,Category Name,Word1,Word2,Word3,Word4,Difficulty,BroadCategory

1,Colors,Red,Blue,Green,Yellow,1,Art

2,Animals,Dog,Cat,Bird,Fish,1,Animals`;
    const rows = parseCSV(csv);
    expect(rows).toHaveLength(2);
  });

  it('should filter out words exceeding MAX_WORD_LENGTH', () => {
    const longWord = 'A'.repeat(51);
    const csv = `id,Category Name,Word1,Word2,Word3,Word4,Difficulty,BroadCategory
1,Test,${longWord},Short,Medium,Longer,1,Art`;
    const rows = parseCSV(csv);
    // The long word is filtered out (51 chars > 50), but Short, Medium, Longer remain
    // parseCSV keeps rows with >= 3 valid words, so this row is kept
    expect(rows).toHaveLength(1);
    expect(rows[0].words).toEqual(['Short', 'Medium', 'Longer']);
  });

  it('should skip rows with fewer than 3 words', () => {
    const csv = `id,Category Name,Word1,Word2,Word3,Word4,Difficulty,BroadCategory
1,Test,Word1,Word2,Difficulty,Art`;
    const rows = parseCSV(csv);
    expect(rows).toHaveLength(0);
  });
});
