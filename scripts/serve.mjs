import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const port = Number(process.env.PORT || 4321);
const host = process.env.HOST || '0.0.0.0';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.ico': 'image/x-icon',
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const normalized = normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const candidate = resolve(join(root, normalized));
  const relation = relative(root, candidate);
  if (
    relation.startsWith('..') ||
    relation.includes(`..${process.platform === 'win32' ? '\\' : '/'}`)
  ) {
    return null;
  }
  return candidate;
}

function sendFile(response, filePath, status = 200, headOnly = false) {
  const stat = statSync(filePath);
  const ext = extname(filePath).toLowerCase();
  const cache =
    ext === '.html' || ext === '.xml' || ext === '.txt' || ext === '.webmanifest'
      ? 'public, max-age=0, must-revalidate'
      : 'public, max-age=3600';

  response.writeHead(status, {
    'Content-Type': mime[ext] || 'application/octet-stream',
    'Content-Length': stat.size,
    'Cache-Control': cache,
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Frame-Options': 'DENY',
  });

  if (headOnly) {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

const server = createServer((request, response) => {
  if (!request.url || !['GET', 'HEAD'].includes(request.method || '')) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }

  const headOnly = request.method === 'HEAD';
  const path = safePath(request.url);

  if (!path) {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Bad request');
    return;
  }

  let filePath = path;

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  }

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    if (!extname(filePath)) {
      const htmlPath = `${filePath}.html`;
      if (existsSync(htmlPath) && statSync(htmlPath).isFile()) {
        sendFile(response, htmlPath, 200, headOnly);
        return;
      }
    }

    const notFound = join(root, '404.html');
    if (existsSync(notFound)) {
      sendFile(response, notFound, 404, headOnly);
      return;
    }

    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  sendFile(response, filePath, 200, headOnly);
});

server.listen(port, host, () => {
  console.log(`Portfolio preview: http://localhost:${port}`);
  console.log(`Network preview:  http://<your-lan-ip>:${port}`);
});
