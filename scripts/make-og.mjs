#!/usr/bin/env node
/**
 * Renders the social preview and Apple touch icon from their SVG sources.
 *
 * The SVGs reference self-hosted brand fonts. resvg needs TrueType/OpenType
 * files, so the build downloads the matching Google Fonts TTFs once into
 * .cache/og-fonts and reuses them afterwards.
 *
 * Run with: npm run build:og
 */
import { Resvg } from '@resvg/resvg-js';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const cacheDir = join(root, '.cache', 'og-fonts');
const publicDir = join(root, 'public');

const fonts = [
  {
    file: 'instrument-serif-400.ttf',
    url: 'https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf',
  },
  {
    file: 'instrument-serif-400-italic.ttf',
    url: 'https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATiw.ttf',
  },
  {
    file: 'ibm-plex-mono-400.ttf',
    url: 'https://fonts.gstatic.com/s/ibmplexmono/v23/-F63fjptAgt5VM-kVkqdyU8n5ig.ttf',
  },
  {
    file: 'ibm-plex-mono-500.ttf',
    url: 'https://fonts.gstatic.com/s/ibmplexmono/v23/-F6qfjptAgt5VM-kVkqdyU8n3twJ8lc.ttf',
  },
  {
    file: 'inter-400.ttf',
    url: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf',
  },
];

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function ensureFonts() {
  await mkdir(cacheDir, { recursive: true });
  const files = [];
  for (const font of fonts) {
    const path = join(cacheDir, font.file);
    if (!(await exists(path))) {
      process.stdout.write(`Downloading ${font.file}…\n`);
      const response = await fetch(font.url);
      if (!response.ok) {
        throw new Error(`Failed to download ${font.file}: HTTP ${response.status}`);
      }
      await writeFile(path, Buffer.from(await response.arrayBuffer()));
    }
    files.push(path);
  }
  return files;
}

async function render({ source, output, width, fontFiles }) {
  const svg = await readFile(join(publicDir, source));
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: {
      fontFiles,
      loadSystemFonts: false,
      defaultFontFamily: 'Inter',
    },
  });
  const png = resvg.render().asPng();
  const target = join(publicDir, output);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, png);
  process.stdout.write(`${output}: ${width}px wide, ${png.byteLength.toLocaleString()} bytes\n`);
}

const fontFiles = await ensureFonts();

await render({ source: 'og.svg', output: 'og.png', width: 1200, fontFiles });
await render({
  source: 'apple-touch-icon.svg',
  output: 'apple-touch-icon.png',
  width: 180,
  fontFiles,
});
