import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (['node_modules', 'dist', '.git'].includes(entry.name)) return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function run(label, command, args) {
  console.log(`\n▸ ${label}`);
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.status !== 0) {
    console.error(`\n✕ ${label} failed`);
    process.exit(result.status || 1);
  }
  console.log(`✓ ${label}`);
}

const scripts = walk(join(root, 'src'))
  .concat(walk(join(root, 'scripts')))
  .concat(walk(join(root, 'tests')))
  .filter((file) => ['.js', '.mjs'].includes(extname(file)));

for (const script of scripts) {
  const relative = script.slice(root.length);
  run(`syntax: ${relative}`, process.execPath, ['--check', script]);
}

run('production build', process.execPath, ['scripts/build.mjs']);
run('HTML validation', process.execPath, [
  join(root, 'node_modules/html-validate/bin/html-validate.mjs'),
  'dist/index.html',
  'dist/404.html',
]);
run('format check', process.execPath, [
  join(root, 'node_modules/prettier/bin/prettier.cjs'),
  '--check',
  '.',
]);
run('test suite', process.execPath, ['--test', 'tests/site.test.mjs']);

if (process.argv.includes('--links')) {
  run('external link check', process.execPath, ['scripts/check-links.mjs']);
}

console.log('\nAll checks passed.');
