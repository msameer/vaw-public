import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// The pages are this folder's Markdown files, where the wiki has always kept them, not Starlight's
// src/content/docs.
export const collections = {
  docs: defineCollection({
    loader: glob({ base: '.', pattern: ['**/*.md', '!node_modules/**', '!dist/**', '!public/**', '!src/**'] }),
    schema: docsSchema(),
  }),
};
