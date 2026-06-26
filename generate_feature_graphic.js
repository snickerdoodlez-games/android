/**
 * Google Play Store Feature Graphic Generator
 * 
 * Converts distribution/playstore/feature_graphic.svg to feature_graphic.png (1024x500)
 * 
 * Usage:
 *   node generate_feature_graphic.js
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SVG_INPUT = join(__dirname, 'distribution', 'playstore', 'feature_graphic.svg');
const PNG_OUTPUT = join(__dirname, 'distribution', 'playstore', 'feature_graphic.png');

async function main() {
  // Check if sharp is available
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.log('[INFO] sharp not installed. Installing...');
    execSync('npm install sharp --no-save', { stdio: 'inherit' });
    sharp = (await import('sharp')).default;
  }

  // Read SVG
  if (!existsSync(SVG_INPUT)) {
    console.error(`[ERROR] SVG input not found: ${SVG_INPUT}`);
    process.exit(1);
  }

  const svgBuffer = readFileSync(SVG_INPUT);

  console.log('[INFO] Converting SVG to PNG (1024x500)...');
  
  await sharp(svgBuffer)
    .resize(1024, 500)
    .png({ compressionLevel: 9 })
    .toFile(PNG_OUTPUT);

  console.log(`[OK] Feature graphic saved: ${PNG_OUTPUT}`);
  console.log(`     Dimensions: 1024x500`);
  
  const stats = statSync(PNG_OUTPUT);
  console.log(`     Size: ${(stats.size / 1024).toFixed(1)} KB`);
}

main().catch(err => {
  console.error('[ERROR]', err.message);
  process.exit(1);
});