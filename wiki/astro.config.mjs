// @ts-check
// The wiki (Technical Reference §1.5): Starlight, built from the Markdown pages in this folder. Where
// it is served is set by the build: WIKI_BASE is the path under msameer.github.io, /vaw-public for the
// published wiki and /villagers-at-work for the draft, and WIKI_DRAFT=true adds the draft's note.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import rehypeBase from './src/plugins/rehype-base.mjs';

const base = process.env.WIKI_BASE || '/';
const draft = process.env.WIKI_DRAFT === 'true';

export default defineConfig({
  site: 'https://msameer.github.io',
  base,
  markdown: { rehypePlugins: [[rehypeBase, { base }]] },
  integrations: [
    starlight({
      title: 'Villagers at Work',
      description: 'Bring life to villager professions through automation.',
      // A broken link between pages fails the build. The home page's buttons are relative, since
      // Starlight gives them no base: they are checked by eye.
      plugins: [starlightLinksValidator({ exclude: ['general-mechanics/', 'supply-chain/'] })],
      customCss: ['./src/styles/wiki.css'],
      head: [{ tag: 'script', attrs: { src: `${base.replace(/\/$/, '')}/scripts/wiki.js`, defer: true } }],
      components: draft ? { Banner: './src/components/DraftBanner.astro' } : {},
      routeMiddleware: './src/route-data.ts',
      // Its order is the wiki's; a folder's pages are ordered by their sidebar.order.
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'General Mechanics', items: [{ autogenerate: { directory: 'general-mechanics' } }] },
        { label: 'Progression', items: [{ autogenerate: { directory: 'progression' } }] },
        { label: 'Supply Chain', items: [{ autogenerate: { directory: 'supply-chain' } }] },
        { label: 'Other entities', items: [{ autogenerate: { directory: 'other-entities' } }] },
        { label: 'Integrations', items: [{ autogenerate: { directory: 'integrations' } }] },
        { label: 'Customization', items: [{ autogenerate: { directory: 'customization' } }] },
        'indicators',
        'installation',
        'after-work',
        { label: 'More Villagers at Work', items: [{ autogenerate: { directory: 'more-villagers' } }] },
      ],
    }),
  ],
});
