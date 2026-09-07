const resources = [
  { id: 't3', name: 'T3 material set', category: 'Materials', icon: '◈', value: 73.37, depth: 250, unit: 'set', note: 'Eight fine crafting materials' },
  { id: 't4', name: 'T4 material set', category: 'Materials', icon: '◇', value: 81.00, depth: 250, unit: 'set', note: 'Eight masterwork materials' },
  { id: 't5', name: 'T5 material set', category: 'Materials', icon: '⬡', value: 11.68, depth: 250, unit: 'set', note: 'Eight rare crafting materials' },
  { id: 't6', name: 'T6 material set', category: 'Materials', icon: '✦', value: 392.69, depth: 250, unit: 'set', note: 'Eight powerful crafting materials', featured: true },
  { id: 'mc', name: 'Mystic Coin', category: 'Currencies', icon: '◎', value: 1.85, depth: 2500, unit: 'each', note: 'High-volume crafting currency', itemId: 19976 },
  { id: 'ecto', name: 'Glob of Ectoplasm', category: 'Currencies', icon: '●', value: .2083, depth: 2000, unit: 'each', note: '52g 08s per stack', itemId: 19721 },
  { id: 'matrix', name: 'Stabilizing Matrix', category: 'Currencies', icon: '▣', value: .2569, depth: 1000, unit: 'each', note: '64g 23s per stack', itemId: 73248 },
  { id: 'encryption', name: 'Fractal Encryption', category: 'Currencies', icon: '▤', value: .2158, depth: 1000, unit: 'each', note: '53g 95s per stack', itemId: 75919 },
  { id: 'ass', name: 'Antique Summoning Stone', category: 'Materials', icon: '✺', value: 1.2618, depth: 250, unit: 'each', note: '315g 45s per stack', itemId: 96978 },
  { id: 'ambergris', name: 'Chunk of Ancient Ambergris', category: 'Materials', icon: '◒', value: 1.5474, depth: 250, unit: 'each', note: '386g 86s per stack', itemId: 96347 },
  { id: 'jade', name: 'Chunk of Pure Jade', category: 'Materials', icon: '◉', value: .0277, depth: 2000, unit: 'each', note: '6g 93s per stack', itemId: 97102 },
  { id: 'runestone', name: 'Jade Runestone', category: 'Materials', icon: '⬢', value: .4284, depth: 2000, unit: 'each', note: '107g 10s per stack', itemId: 96722 },
  { id: 'aurene-memory', name: 'Memory of Aurene', category: 'Materials', icon: '❖', value: .2705, depth: 2000, unit: 'each', note: '67g 63s per stack', itemId: 96088 },
  { id: 'battle-memory', name: 'Memory of Battle', category: 'Materials', icon: '✹', value: .0472, depth: 2000, unit: 'each', note: '11g 81s per stack', itemId: 71581 },
  { id: 'glory-shard', name: 'Shard of Glory', category: 'Materials', icon: '✧', value: .0349, depth: 5000, unit: 'each', note: '8g 73s per stack', itemId: 70820 },
  { id: 'lamplighter-badge', name: "Lamplighter's Badge", category: 'Materials', icon: '☼', value: 1.2645, depth: 250, unit: 'each', note: '316g 12s per stack', itemId: 97790 },
  { id: 'amalgamated-gemstone', name: 'Amalgamated Gemstone', category: 'Materials', icon: '◆', value: .8955, depth: 2000, unit: 'each', note: '223g 87s per stack', itemId: 68063 },
  { id: 'amalgamated-draconic-lodestone', name: 'Amalgamated Draconic Lodestone', category: 'Materials', icon: '⬟', value: 22.9905, depth: 100, unit: 'each', note: '5,747g 64s per stack', itemId: 92687 },
  { id: 'condensed-gift', name: 'Gifts of Condensed Might & Magic', category: 'Crafted', icon: '✣', value: 111.91, depth: 2000, unit: 'gift', note: 'Built from T6 materials' },
  { id: 'precursor', name: 'Precursor weapons', category: 'Weapons', icon: '⚔', value: 90, depth: 1, unit: '90% sell', note: 'Quote varies by weapon' },
  { id: 'leg', name: 'Legendary weapons', category: 'Weapons', icon: '⚜', value: 85, depth: 1, unit: '85% sell', note: 'Quote varies by weapon' }
];

const materialNames = ['Blood', 'Bones', 'Claws', 'Dust', 'Fangs', 'Scales', 'Totems', 'Venom'];
const snapshot = 'September 7, 2026 · 12:57 UTC';
const app = document.querySelector('#app');
let activeCategory = 'All';
let searchTerm = '';

function gold(value) {
  if (value >= 100) return `${Math.floor(value)}g ${String(Math.round((value % 1) * 100)).padStart(2, '0')}s`;
  if (value >= 1) return `${Math.floor(value)}g ${String(Math.round((value % 1) * 100)).padStart(2, '0')}s`;
  return `${Math.floor(value * 100)}s ${String(Math.round((value * 10000) % 100)).padStart(2, '0')}c`;
}
function tp(value) { return gold(value / .9); }
function money(value) { return value >= 100 ? `${Math.round(value)}g` : gold(value); }
function getResource(id) { return resources.find(resource => resource.id === id) || resources[0]; }
function filteredResources() {
  return resources.filter(resource => (activeCategory === 'All' || resource.category === activeCategory) && `${resource.name} ${resource.category}`.toLowerCase().includes(searchTerm.toLowerCase()));
}
function card(resource) {
  return `<article class="resource-card ${resource.featured ? 'featured' : ''}" data-open="${resource.id}">
    <span class="icon">${resource.icon}</span><h3>${resource.name}</h3><p>${resource.note}</p>
  </article>`;
}
function home() {
  const categories = ['All', 'Materials', 'Currencies', 'Crafted', 'Weapons'];
  const cards = filteredResources().map(card).join('') || '<div class="empty">No resources match that search.</div>';
  app.innerHTML = `<section class="hero"><div><p class="eyebrow">Direct trade intelligence</p><h1>Price with<br><em>context.</em></h1></div><div><p class="hero-copy">A practical market reference for Guild Wars 2. See what an item is worth, how the quote is built, and where the market has resistance.</p><label class="search-wrap"><span class="search-icon">⌕</span><input id="resource-search" type="search" placeholder="Search resources, materials, weapons…" value="${searchTerm}" aria-label="Search resources"></label></div></section>
  <section><div class="section-heading"><div><p class="eyebrow">Live reference shelf</p><h2>Choose a price check</h2></div><span class="section-note">${resources.length} tracked resources</span></div><div class="filter-row">${categories.map(category => `<button class="filter ${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>`).join('')}</div><div class="resource-grid">${cards}</div></section>
  <section class="content-band"><div class="section-heading"><div><p class="eyebrow">Read the number</p><h2>Why depth matters</h2></div><span class="section-note">Prices are snapshots, not promises</span></div><div class="method-grid"><article class="method-card"><h3>90% sell is the midpoint</h3><p>Trading Post sellers receive roughly 85% after tax. Direct trades use 90% of sell as a simple, practical middle ground.</p></article><article class="method-card"><h3>Listings have a shape</h3><p>A depth target skips tiny undercuts and looks for the price level where a meaningful quantity of orders meets the market.</p></article><article class="method-card"><h3>Check the curve</h3><p>When a quote looks strange, compare it with GW2BLTC history. Temporary spikes and event-driven supply can move a snapshot.</p></article></div></section>`;
  document.querySelector('#resource-search').addEventListener('input', event => { searchTerm = event.target.value; home(); document.querySelector('#resource-search').focus(); });
  document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => { activeCategory = button.dataset.category; home(); }));
  document.querySelectorAll('[data-open]').forEach(cardNode => cardNode.addEventListener('click', () => { location.hash = `item/${cardNode.dataset.open}`; }));
}
function depthRows(resource) {
  const depths = resource.depth >= 1000 ? [1, 250, resource.depth, resource.depth * 2, resource.depth * 5] : [1, 50, 100, resource.depth, resource.depth * 2, resource.depth * 4];
  const quotedIndex = depths.indexOf(resource.depth);
  return depths.map((depth, index) => { const variance = 1 + ((index - quotedIndex) * .013); const buy = resource.value * .84 * variance; const sell = resource.value / .9 * variance; const trade = resource.value * variance; return `<tr class="${depth === resource.depth ? 'highlight' : ''}"><td class="mono">${depth.toLocaleString()}</td><td class="price">${gold(buy)}</td><td class="price">${gold(sell)}</td><td class="price">${gold(trade)}</td><td>${depth === resource.depth ? '<strong>quoted depth</strong>' : '—'}</td></tr>`; }).join('');
}
function itemPage(resource) {
  const isWeapon = resource.category === 'Weapons';
  const headline = isWeapon ? `About ${resource.name.toLowerCase()}` : `${resource.name} price check`;
  app.innerHTML = `<section class="quote-page"><div class="breadcrumb"><a href="#home">PRICE CHECKS</a> / ${resource.name.toUpperCase()}</div><div class="quote-header"><div><p class="eyebrow">${resource.category} · market reference</p><h1>${headline}</h1><p class="timestamp">Data valid as of ${snapshot}</p></div><div class="action-row"><button class="btn" id="back-home">← Back</button><button class="btn primary" id="download-csv">↓ CSV</button></div></div><div class="quote-hero"><div><div class="quote-label">Recommended direct-trade quote</div><div class="quote-amount">${isWeapon ? resource.value + '%' : gold(resource.value)} <small>${isWeapon ? 'of lowest sell' : `per ${resource.unit}`}</small></div></div><div class="quote-meta"><strong>${resource.depth.toLocaleString()}</strong> listing depth<br>90% sell methodology</div></div><div class="info-strip"><div class="info-cell"><span>Trading Post buy</span><strong>${isWeapon ? 'varies by item' : gold(resource.value * .84)}</strong></div><div class="info-cell"><span>Trading Post sell</span><strong>${isWeapon ? 'varies by item' : gold(resource.value / .9)}</strong></div><div class="info-cell"><span>Stack reference</span><strong>${isWeapon ? resource.note : resource.unit === 'set' ? '8 materials' : gold(resource.value * 250)}</strong></div></div><div class="section-heading"><div><p class="eyebrow">Order book snapshot</p><h2>${resource.name} at depth</h2></div><span class="section-note">Buyers wait · sellers list · direct trade midpoint</span></div><div class="table-card"><table><thead><tr><th>Depth</th><th>100% buy price</th><th>100% sell price</th><th>90% direct trade</th><th>Signal</th></tr></thead><tbody>${depthRows(resource)}</tbody></table></div><div class="callout"><span>◌</span><span><strong>Market note:</strong> This estimate reads current listings. Check the recurring high point on <a href="https://www.gw2bltc.com/" target="_blank" rel="noreferrer"><u>GW2BLTC</u></a> before trading if the item is volatile or the quote looks unusual.</span></div></section>`;
  document.querySelector('#back-home').addEventListener('click', () => { location.hash = 'home'; });
  document.querySelector('#download-csv').addEventListener('click', () => download(resource));
}
function methodology() { app.innerHTML = `<section class="quote-page"><p class="eyebrow">Documentation</p><h1>Read the market,<br><em>not just the number.</em></h1><div class="method-grid" style="margin-top:45px"><article class="method-card"><h3>Why 90% sell?</h3><p>Instant buyers pay 100% of the sell listing. Sellers who wait receive about 85% after the Trading Post tax. Ninety percent is a clean midpoint for a direct, tax-free exchange.</p></article><article class="method-card"><h3>What is depth?</h3><p>Instead of trusting the first listing, GW2PC walks through the order book until it has seen the requested quantity. The last unit price becomes the quote.</p></article><article class="method-card"><h3>What can go wrong?</h3><p>Events, patches, farming, low volume, and deliberate undercuts can all distort a snapshot. History and recent player trade reviews provide the missing context.</p></article></div><div class="content-band"><div class="section-heading"><div><p class="eyebrow">Exceptions</p><h2>Some markets speak differently</h2></div></div><div class="table-card"><table><thead><tr><th>Market</th><th>Default basis</th><th>Why</th></tr></thead><tbody><tr><td>Legendary weapons</td><td>85% sell</td><td>Buyers compare against post-tax liquidation value.</td></tr><tr><td>Precursor weapons</td><td>90% sell</td><td>Usually trades between buy and sell references.</td></tr><tr><td>Infusions & contracts</td><td>Review trades</td><td>Low-volume markets need human context.</td></tr></tbody></table></div></div></section>`; }
function apiPage() { app.innerHTML = `<section class="quote-page"><p class="eyebrow">Developer tools</p><h1>Data you can<br><em>take with you.</em></h1><p class="hero-copy" style="margin-top:26px">The original project also exposes depth and account exports. This front-end mirrors the depth workflow locally and lets you download any quote table as CSV.</p><div class="api-panel"><p class="eyebrow" style="color:#8ccfbd">Original endpoint shape</p><div class="code-line">GET /api/depth2csv/?items=19721,19976&amp;depths=1,250,2000,10000</div><p>For production integrations, use the official Guild Wars 2 API directly and keep account API keys restricted. Never share an unrestricted key with a third party.</p></div><div class="content-band"><div class="section-heading"><div><p class="eyebrow">Included tools</p><h2>Small, useful exports</h2></div></div><div class="method-grid"><article class="method-card"><h3>Depth CSV</h3><p>Download buy, sell, and direct-trade values from any resource detail page.</p></article><article class="method-card"><h3>Item references</h3><p>Every tracked resource keeps its item identity, quote depth, and stack context visible.</p></article><article class="method-card"><h3>Official data source</h3><p>Live integrations should use api.guildwars2.com/v2/commerce/listings with item IDs.</p></article></div></div></section>`; }
function download(resource) { const lines = [['Resource', 'Depth', 'Buy', 'Sell', 'Direct trade']]; const depths = resource.depth >= 1000 ? [1, 250, resource.depth, resource.depth * 2, resource.depth * 5] : [1, 50, 100, resource.depth, resource.depth * 2, resource.depth * 4]; depths.forEach((depth, index) => { const variance = 1 + ((index - 2) * .013); lines.push([resource.name, depth, gold(resource.value * .84 * variance), gold(resource.value / .9 * variance), gold(resource.value * variance)]); }); const blob = new Blob([lines.map(row => row.join(',')).join('\n')], { type: 'text/csv' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `${resource.id}-price-check.csv`; link.click(); URL.revokeObjectURL(link.href); }
let liveRefreshStarted = false;
async function refreshLivePrices() {
  const liveResources = resources.filter(resource => resource.itemId);
  try {
    const ids = liveResources.map(resource => resource.itemId).join(',');
    const response = await fetch(`https://api.guildwars2.com/v2/commerce/listings?ids=${ids}`);
    if (!response.ok) throw new Error('Trading Post API unavailable');
    const listings = await response.json();
    liveResources.forEach(resource => {
      const item = listings.find(listing => listing.id === resource.itemId);
      if (!item) return;
      let seen = 0;
      const target = item.sells.find(listing => (seen += listing.quantity) >= resource.depth);
      if (target) resource.value = target.unit_price * 0.9 / 10000;
    });
    render();
  } catch (error) {
    console.warn('Using snapshot prices:', error.message);
  }
}
function render() { const [route, id] = location.hash.slice(1).split('/'); document.querySelectorAll('[data-nav]').forEach(nav => nav.classList.toggle('active', nav.dataset.nav === route || (route === 'item' && nav.dataset.nav === 'home'))); if (route === 'item') itemPage(getResource(id)); else if (route === 'methodology') methodology(); else if (route === 'api') apiPage(); else home(); if (!liveRefreshStarted) { liveRefreshStarted = true; refreshLivePrices(); } }
window.addEventListener('hashchange', render); render();
