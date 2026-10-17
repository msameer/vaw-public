// The Jekyll wiki served a page at <path>.html, and released jars, config files and store pages link
// there (customization/configuration.html, after-work.html). Starlight serves it at <path>/, so each
// page gets a <path>.html beside it that sends the reader on, the part after # kept.
import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const dist = 'dist';
let made = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory() || name.startsWith('_') || name === 'pagefind') continue;
    if (existsSync(join(path, 'index.html')) && !existsSync(`${path}.html`)) {
      const to = `${basename(path)}/`;
      writeFileSync(`${path}.html`, `<!doctype html>
<meta charset="utf-8">
<title>Moved</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.hash);</script>
<a href="${to}">This page has moved.</a>
`);
      made++;
    }
    walk(path);
  }
}
walk(dist);
console.log(`html-redirects: ${made} old .html addresses redirected`);
