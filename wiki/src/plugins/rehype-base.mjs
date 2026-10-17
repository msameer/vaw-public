// Links between pages are written from the site's root (/supply-chain/armorer/), as they read in the
// Markdown; this puts the path the site is served under in front of them, raw HTML's included, such
// as the graphs' frames.
import { visit } from 'unist-util-visit';

export default function rehypeBase({ base }) {
  const prefix = base.replace(/\/$/, '');
  const rebase = (url) => (prefix && typeof url === 'string' && url.startsWith('/') && !url.startsWith('//') ? prefix + url : url);
  return (tree) => {
    if (!prefix) return;
    visit(tree, (node) => {
      if (node.type === 'element') {
        if (node.properties?.href) node.properties.href = rebase(node.properties.href);
        if (node.properties?.src) node.properties.src = rebase(node.properties.src);
      } else if (node.type === 'raw') {
        node.value = node.value.replace(/\b(href|src)="(\/[^/"][^"]*)"/g, (_, attr, url) => `${attr}="${rebase(url)}"`);
      }
    });
  };
}
