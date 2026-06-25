/**
 * Google Play Store Feature Graphic Generator
 * 
 * Converts distribution/playstore/feature_graphic.svg to feature_graphic.png (1024x500)
 * 
 * Prerequisites:
 *   npm install sharp
 * 
 * Usage:
 *   node generate_feature_graphic.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SVG_INPUT = path.join(__dirname, 'distribution', 'playstore', 'feature_graphic.svg');
const PNG_OUTPUT = path.join(__dirname, 'distribution', 'playstore', 'feature_graphic.png');

async function main() {
  // Check if sharp is available
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.log('[INFO] sharp not installed. Installing...');
    execSync('npm install sharp --no-save', { stdio: 'inherit' });
    sharp = require('sharp');
  }

  // Read SVG
  if (!fs.existsSync(SVG_INPUT)) {
    console.error(`[ERROR] SVG input not found: ${SVG_INPUT}`);
    process.exit(1);
  }

  const svgBuffer = fs.readFileSync(SVG_INPUT);

  console.log('[INFO] Converting SVG to PNG (1024x500)...');
  
  await sharp(svgBuffer)
    .resize(1024, 500)
    .png({ compressionLevel: 9 })
    .toFile(PNG_OUTPUT);

  console.log(`[OK] Feature graphic saved: ${PNG_OUTPUT}`);
  console.log(`     Dimensions: 1024x500`);
  
  const stats = fs.statSync(PNG_OUTPUT);
  console.log(`     Size: ${(stats.size / 1024).toFixed(1)} KB`);
}

main().catch(err => {
  console.error('[ERROR]', err.message);
  process.exit(1);
});