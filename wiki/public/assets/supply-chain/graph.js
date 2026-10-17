/*
 * A supply chain graph (wiki: Supply Chain, MCA Reborn, More Villagers at Work). The page sets
 * window.GRAPH before loading this: { eyebrow, title, nodes, edges, legend }. No text under the title (#174, the owner's rule): the room goes to the graph.
 *
 * nodes: [id, name, station, category, what the player stocks on its shelf (optional)]
 * edges: [from, to, what, category], drawn from the wiki's supplier and customer tables. An edge
 *        from a villager to its own kind is listed in its panel, never drawn as an arrow.
 * legend: the categories to explain, in order.
 *
 * Villagers sit on an ellipse; each delivery is a curve from supplier to receiver, bent towards the
 * middle. Hover or click a villager to see what it takes in and sends out.
 */
(function () {
  // Each category's line and fill, from graph.css, which holds a light and a dark set.
  var COLOR = {}, FILL = {};
  ['organic', 'metal', 'craft', 'gear', 'guard', 'more'].forEach(function (c) { COLOR[c] = 'var(--c-' + c + ')'; FILL[c] = 'var(--f-' + c + ')'; });

  // Light or dark as the wiki around the graph is, following its theme switch, else as the system is.
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  function wikiRoot() {
    try { return window.parent !== window ? window.parent.document.documentElement : null; } catch (e) { return null; }
  }
  function applyTheme() {
    var root = wikiRoot(), theme = root && root.dataset.theme;
    document.documentElement.dataset.theme = theme === 'dark' || theme === 'light' ? theme : (system.matches ? 'dark' : 'light');
  }
  applyTheme();
  if (wikiRoot()) new MutationObserver(applyTheme).observe(wikiRoot(), { attributes: true, attributeFilter: ['data-theme'] });
  system.addEventListener('change', applyTheme);
  var LEGEND = {
    organic: 'Crops and animal goods',
    metal: 'Metal and tools',
    craft: 'Paper, lapis, enchanting, potions',
    gear: 'Finished gear for guards',
    more: 'More Villagers at Work'
  };
  var CX = 500, CY = 500, RX = 370, RY = 400, HW = 75, HH = 32, PULL = 0.55, BOW = 60;
  var SVG = 'http://www.w3.org/2000/svg';

  var g = window.GRAPH;
  var nodes = g.nodes.map(function (n, i) {
    var step = 2 * Math.PI / g.nodes.length, a = -Math.PI / 2 + step / 2 + i * step;
    return { id: n[0], name: n[1], station: n[2], cat: n[3], shelf: n[4] || '', x: CX + RX * Math.cos(a), y: CY + RY * Math.sin(a) };
  });
  var byId = {};
  nodes.forEach(function (n) { byId[n.id] = n; });
  var edges = g.edges.map(function (e) { return { from: e[0], to: e[1], what: e[2], cat: e[3] }; });

  function el(tag, attrs, parent, text) {
    var x = tag === 'svg' || tag === 'path' || tag === 'polygon' || tag === 'g' ? document.createElementNS(SVG, tag) : document.createElement(tag);
    for (var k in attrs) x.setAttribute(k, attrs[k]);
    if (text != null) x.textContent = text;
    if (parent) parent.appendChild(x);
    return x;
  }

  // The curve of each delivery, ending at the edge of the receiver's box, and its arrow head.
  function geometry(e) {
    var p = byId[e.from], q = byId[e.to];
    var mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
    var c = [mx + (CX - mx) * PULL, my + (CY - my) * PULL];
    // Two villagers that supply each other: each delivery bows to its own side, so they do not overlap.
    if (edges.some(function (o) { return o.from === e.to && o.to === e.from; })) {
      var cl = Math.hypot(q.x - p.x, q.y - p.y) || 1;
      c = [c[0] + (q.y - p.y) / cl * BOW, c[1] - (q.x - p.x) / cl * BOW];
    }
    function bz(u) {
      return [(1 - u) * (1 - u) * p.x + 2 * (1 - u) * u * c[0] + u * u * q.x, (1 - u) * (1 - u) * p.y + 2 * (1 - u) * u * c[1] + u * u * q.y];
    }
    var u = 1, end = [q.x, q.y];
    while (u > 0.5) { u -= 0.005; end = bz(u); if (Math.abs(end[0] - q.x) > HW + 4 || Math.abs(end[1] - q.y) > HH + 4) break; }
    var dx = 2 * (1 - u) * (c[0] - p.x) + 2 * u * (q.x - c[0]), dy = 2 * (1 - u) * (c[1] - p.y) + 2 * u * (q.y - c[1]);
    var L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
    var tip = [end[0] + ux * 4, end[1] + uy * 4], b = [tip[0] - ux * 13, tip[1] - uy * 13];
    return {
      d: 'M' + p.x + ',' + p.y + ' Q' + c[0] + ',' + c[1] + ' ' + end[0] + ',' + end[1],
      head: tip[0] + ',' + tip[1] + ' ' + (b[0] - uy * 5.5) + ',' + (b[1] + ux * 5.5) + ' ' + (b[0] + uy * 5.5) + ',' + (b[1] - ux * 5.5),
      mid: bz(0.5)
    };
  }

  var page = el('div', { class: 'page' }, document.body);
  var graphCol = el('div', { class: 'graph-col' }, page);
  var stage = el('div', { class: 'stage' }, graphCol);
  var svg = el('svg', { viewBox: '0 0 1000 1000', class: 'edges' }, stage);
  var side = el('div', { class: 'side' }, page);

  var head = el('div', { class: 'head' }, side);
  el('div', { class: 'eyebrow' }, head, g.eyebrow);
  el('div', { class: 'title' }, head, g.title);
  var panel = el('div', { class: 'panel', hidden: '' }, side);
  var legend = el('div', { class: 'legend' }, side);
  el('div', { class: 'caps' }, legend, 'Legend');
  (g.legend || []).forEach(function (cat) {
    var row = el('div', { class: 'legend-row' }, legend);
    el('span', { class: 'swatch', style: 'background:' + COLOR[cat] }, row);
    row.appendChild(document.createTextNode(LEGEND[cat]));
  });
  var stock = el('div', { class: 'legend-row stock' }, legend);
  el('span', { class: 'diamond' }, stock, '◆');
  stock.appendChild(document.createTextNode('You stock this on the shelf'));

  var drawn = edges.filter(function (e) { return e.from !== e.to; }).map(function (e) {
    var geo = geometry(e);
    var group = el('g', { class: 'edge' }, svg);
    var path = el('path', { d: geo.d, fill: 'none', style: 'stroke:' + COLOR[e.cat], 'stroke-width': 1.6, 'stroke-linecap': 'round' }, group);
    el('polygon', { points: geo.head, style: 'fill:' + COLOR[e.cat] }, group);
    var label = el('div', { class: 'edge-label', style: 'left:' + geo.mid[0] / 10 + '%;top:' + geo.mid[1] / 10 + '%;color:' + COLOR[e.cat] }, stage, e.what);
    return { e: e, group: group, path: path, label: label };
  });

  var boxes = nodes.map(function (n) {
    var box = el('div', {
      class: 'node',
      style: 'left:' + n.x / 10 + '%;top:' + n.y / 10 + '%;background:' + FILL[n.cat] + ';border-color:' + COLOR[n.cat]
    }, stage);
    el('div', { class: 'name' }, box, n.name);
    el('div', { class: 'station' }, box, n.station);
    box.addEventListener('mouseenter', function () { hover = n.id; render(); });
    box.addEventListener('mouseleave', function () { hover = null; render(); });
    box.addEventListener('click', function (ev) { ev.stopPropagation(); selected = selected === n.id ? null : n.id; render(); });
    return { n: n, box: box };
  });
  stage.addEventListener('click', function () { selected = null; render(); });

  var hover = null, selected = null;

  function list(parent, heading, rows, none) {
    var block = el('div', { class: 'block' }, parent);
    el('div', { class: 'caps' }, block, heading + ' · ' + rows.length);
    rows.forEach(function (r) {
      var row = el('div', { class: 'row' }, block);
      el('span', { class: 'dot', style: 'background:' + COLOR[r.cat] }, row);
      el('span', { class: 'item' }, row, r.what);
      el('span', { class: 'other' }, row, r.other);
    });
    if (!rows.length) el('div', { class: 'none' }, block, none);
  }

  function render() {
    var focus = hover || selected;
    var near = {};
    if (focus) {
      near[focus] = true;
      edges.forEach(function (e) { if (e.from === focus) near[e.to] = true; if (e.to === focus) near[e.from] = true; });
    }
    drawn.forEach(function (d) {
      var on = focus && (d.e.from === focus || d.e.to === focus);
      d.group.setAttribute('opacity', focus ? (on ? 1 : 0.1) : 0.8);
      d.path.setAttribute('stroke-width', on ? 2.6 : 1.6);
      d.label.style.display = on ? 'block' : 'none';
    });
    boxes.forEach(function (b) {
      var c = COLOR[b.n.cat];
      b.box.style.opacity = focus && !near[b.n.id] ? 0.25 : 1;
      b.box.style.boxShadow = selected === b.n.id || hover === b.n.id ? '0 0 0 3px var(--bg), 0 0 0 5px ' + c : 'none';
    });

    panel.textContent = '';
    if (!focus) { panel.setAttribute('hidden', ''); return; }
    panel.removeAttribute('hidden');
    var n = byId[focus];
    var top = el('div', { class: 'focus' }, panel);
    el('div', { class: 'focus-name', style: 'color:' + COLOR[n.cat] }, top, n.name);
    el('div', { class: 'focus-station' }, top, n.station);
    if (n.shelf) el('div', { class: 'focus-shelf' }, top, '◆ you stock ' + n.shelf);
    list(panel, 'Receives', edges.filter(function (e) { return e.to === focus; })
      .map(function (e) { return { what: e.what, cat: e.cat, other: 'from ' + byId[e.from].name }; }), 'Nothing — gathers its own inputs');
    list(panel, 'Supplies', edges.filter(function (e) { return e.from === focus; })
      .map(function (e) { return { what: e.what, cat: e.cat, other: 'to ' + byId[e.to].name }; }), 'Nothing — end of chain');
  }
  render();
})();
