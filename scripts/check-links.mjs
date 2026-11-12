import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const html = readFileSync(fileURLToPath(new URL('../dist/index.html', import.meta.url)), 'utf8');
const urls = [
  ...new Set(
    [...html.matchAll(/<a\b[^>]*href="(https:\/\/[^"]+)"/g)].map((match) =>
      match[1].replaceAll('&amp;', '&'),
    ),
  ),
].sort();

let failures = 0;
let warnings = 0;

for (const url of urls) {
  process.stdout.write(`${url}\n  → `);
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent': 'chaitanya-portfolio-link-check/1.0',
        Accept: 'text/html,application/xhtml+xml',
      },
      signal: AbortSignal.timeout(20000),
    });
    await response.body?.cancel();

    if (response.status >= 400 && response.status !== 403 && response.status !== 429) {
      failures += 1;
      console.log(`${response.status} ${response.statusText} (FAIL)`);
    } else if (response.status === 403 || response.status === 429) {
      warnings += 1;
      console.log(`${response.status} (blocked by remote host; verify manually)`);
    } else {
      console.log(`${response.status} ${response.statusText || 'OK'}`);
    }
  } catch (error) {
    failures += 1;
    console.log(`ERROR ${error.message} (FAIL)`);
  }
}

console.log(
  `\n${urls.length} external links checked · ${failures} failures · ${warnings} warnings`,
);
if (failures) process.exit(1);
