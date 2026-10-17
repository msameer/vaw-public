// A page drops its "On this page" outline, so it has no outline column, when the outline would be
// its title alone (a page without section headings, whose text then sits in the middle of the page
// rather than beside a wide empty column), or when the page has a supply-chain graph, whose frame
// needs the outline's width to show its legend beside the graph rather than below it.
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const items = route.toc?.items;
  if (!items) return;
  const titleOnly = items.length === 1 && items[0].children.length === 0;
  const graph = route.entry.body?.includes('vaw-fit-frame') ?? false;
  if (titleOnly || graph) route.toc = undefined;
});
