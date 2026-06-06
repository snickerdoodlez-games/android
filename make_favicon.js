const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const svgPath = path.join(__dirname, 'public', 'logo.svg');
  const icoPath = path.join(__dirname, 'public', 'favicon.ico');

  console.log(`Reading SVG from: ${svgPath}`);

  // Read SVG
  const svgBuffer = fs.readFileSync(svgPath);
  console.log(`SVG size: ${svgBuffer.length} bytes`);

  // Convert SVG to PNG at 256x256 using sharp
  const pngBuffer = await sharp(svgBuffer)
    .resize(256, 256)
    .png()
    .toBuffer();
  console.log(`PNG size: ${pngBuffer.length} bytes`);

  // Create resized versions for different ICO sizes
  const sizes = [16, 32, 48];
  const buffers = [];
  for (const size of sizes) {
    const buf = await sharp(pngBuffer)
      .resize(size, size)
      .png()
      .toBuffer();
    buffers.push(buf);
    console.log(`Size ${size}x${size}: ${buf.length} bytes`);
  }

  // Write ICO manually (PNG-based ICO)
  // ICO file format:
  // - 6 byte header
  // - 16 byte directory entry per image
  // - Image data follows

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);     // Reserved
  icoHeader.writeUInt16LE(1, 2);     // Type = ICO
  icoHeader.writeUInt16LE(sizes.length, 4); // Image count

  // Directory entries (16 bytes each)
  let dataOffset = 6 + sizes.length * 16;
  const dirEntries = [];
  const imageData = [];

  for (let i = 0; i < sizes.length; i++) {
    const imgBuf = buffers[i];
    const size = sizes[i];

    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);  // Width
    entry.writeUInt8(size >= 256 ? 0 : size, 1);  // Height
    entry.writeUInt8(0, 2);   // Colors (0 = no palette)
    entry.writeUInt8(0, 3);   // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(imgBuf.length, 8);  // Image size
    entry.writeUInt32LE(dataOffset, 12);    // Image offset

    dirEntries.push(entry);
    imageData.push(imgBuf);
    dataOffset += imgBuf.length;
  }

  // Write ICO file
  const fd = fs.openSync(icoPath, 'w');
  fs.writeSync(fd, icoHeader);
  for (const entry of dirEntries) {
    fs.writeSync(fd, entry);
  }
  for (const img of imageData) {
    fs.writeSync(fd, img);
  }
  fs.closeSync(fd);

  console.log(`\nICO created: ${icoPath}`);
  console.log(`File size: ${fs.statSync(icoPath).size} bytes`);
  console.log(`Sizes: ${sizes.map(s => `${s}x${s}`).join(', ')}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
