/* The profession pages list tools, suppliers and customers in tables right after a bold label such
   as "Tools:". Those tables have no header: their first Markdown row is data, so they are marked and
   drawn with every row alike (wiki.css). */
document.querySelectorAll('.sl-markdown-content p').forEach(function (p) {
  var label = p.firstElementChild;
  if (!label || p.firstChild !== label || label.nodeName !== 'STRONG' || !/:\s*$/.test(label.textContent)) return;
  var next = p.nextElementSibling;
  if (next && next.nodeName === 'TABLE') next.classList.add('vaw-headerless');
  else if (next && next.querySelector(':scope > table')) next.querySelector(':scope > table').classList.add('vaw-headerless');
});

/* A frame marked vaw-fit-frame, such as the supply-chain graph, is as wide as the page's main pane,
   beyond the text column, so a wide screen shows the graph large and its panel beside it; and as tall
   as the page inside it, which unpacks itself after loading, reflows with the width and grows when
   a villager is selected. */
document.querySelectorAll('iframe.vaw-fit-frame').forEach(function (frame) {
  var pending = false;
  var pane = frame.closest('.main-pane');
  var column = frame.parentNode;
  function widen() {
    frame.style.width = '100%';
    frame.style.marginInlineStart = '';
    if (!pane) return;
    var p = pane.getBoundingClientRect(), c = column.getBoundingClientRect();
    var pad = parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.5;
    var width = p.width - 2 * pad;
    if (width <= c.width) return;
    frame.style.width = width + 'px';
    frame.style.marginInlineStart = (p.left + pad - c.left) + 'px';
  }
  function fit() {
    pending = false;
    widen();
    var doc = frame.contentDocument;
    if (!doc || !doc.documentElement) return;
    var holder = frame.parentNode, before = frame.style.height;
    holder.style.minHeight = holder.offsetHeight + 'px';
    frame.style.height = '0px';
    var height = doc.documentElement.scrollHeight;
    frame.style.height = height > 0 ? height + 'px' : before;
    holder.style.minHeight = '';
  }
  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(fit); }
  }
  function watch() {
    fit();
    new MutationObserver(schedule).observe(frame.contentDocument,
      { subtree: true, childList: true, attributes: true, characterData: true });
  }
  var loaded = frame.contentDocument;
  if (loaded && loaded.readyState === 'complete' && loaded.URL !== 'about:blank') watch();
  frame.addEventListener('load', watch);
  window.addEventListener('resize', schedule);
});
