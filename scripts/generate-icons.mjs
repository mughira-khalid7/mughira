import fs from 'fs';
import path from 'path';
import url from 'url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '..', 'public');
const srcSvg = path.join(publicDir, 'favicon.svg');

const outputs = [
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

async function ensureSvgExists() {
  if (!fs.existsSync(srcSvg)) {
    throw new Error(`Missing ${srcSvg}`);
  }
}

async function generatePngs() {
  await Promise.all(
    outputs.map(async ({ name, size }) => {
      const outPath = path.join(publicDir, name);
      // Use sharp to rasterize the SVG at exact square size, with max compression
      const pipeline = sharp(srcSvg, { density: 384 })
        .resize(size, size, { fit: 'cover' })
        .png({ compressionLevel: 9, quality: 90, palette: true });
      await pipeline.toFile(outPath);
      return outPath;
    })
  );
}

async function generateIco() {
  const icoSizes = [16, 32, 48];
  const tmpPngs = await Promise.all(
    icoSizes.map(async (size) => {
      const buf = await sharp(srcSvg, { density: 384 })
        .resize(size, size, { fit: 'cover' })
        .png({ compressionLevel: 9, quality: 90, palette: true })
        .toBuffer();
      return buf;
    })
  );
  const icoBuf = await pngToIco(tmpPngs);
  const icoPath = path.join(publicDir, 'favicon.ico');
  fs.writeFileSync(icoPath, icoBuf);
}

async function main() {
  await ensureSvgExists();
  await generatePngs();
  await generateIco();
  console.log('Icons generated in public/.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


