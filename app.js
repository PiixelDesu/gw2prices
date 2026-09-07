const resources = [
  { id: 't3', name: 'T3 material set', category: 'Materials', icon: '◈', value: 0, depth: 250, unit: 'set', note: 'Eight fine crafting materials' },
  { id: 't4', name: 'T4 material set', category: 'Materials', icon: '◇', value: 0, depth: 250, unit: 'set', note: 'Eight masterwork materials' },
  { id: 't5', name: 'T5 material set', category: 'Materials', icon: '⬡', value: 0, depth: 250, unit: 'set', note: 'Eight rare crafting materials' },
  { id: 't6', name: 'T6 material set', category: 'Materials', icon: '✦', value: 0, depth: 250, unit: 'set', note: 'Eight powerful crafting materials', featured: true },
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
  { id: 'condensed-gift', name: 'Gift of Condensed Might and Magic', category: 'Crafted', icon: '✣', value: 0, depth: 2000, unit: 'gift', note: 'All condensed gift versions' },
  { id: 'precursor', name: 'Precursor weapons', category: 'Weapons', icon: '⚔', value: 90, depth: 1, unit: '90% sell', note: 'Quote varies by weapon' },
  { id: 'leg', name: 'Legendary weapons', category: 'Weapons', icon: '⚜', value: 85, depth: 1, unit: '85% sell', note: 'Quote varies by weapon' }
];

const precursorWeapons = [
  ['Dawn', 29169], ['Dusk', 29185], ['Zap', 29181], ['The Legend', 29180], ['Storm', 29176], ['The Chosen', 29177], ['The Lover', 29178], ['Tooth of Frostfang', 29166], ['Leaf of Kudzu', 29172], ['Spark', 29167], ['Howl', 29184], ['The Bard', 29168], ['The Hunter', 29175], ['Rodgort\'s Flame', 29182], ['The Colossus', 29170], ['The Energizer', 29173], ['Chaos Gun', 29174], ['Venom', 29183], ['Rage', 29179], ['Carcharias', 29171],
  ["Dragon's Rending", 97449], ["Dragon's Claw", 95967], ["Dragon's Tail", 96827], ["Dragon's Argument", 96915], ["Dragon's Wisdom", 96193], ["Dragon's Fang", 95994], ["Dragon's Gaze", 96303], ["Dragon's Scale", 97691], ["Dragon's Breath", 96925], ["Dragon's Voice", 97513], ["Dragon's Bite", 96357], ["Dragon's Weight", 95920], ["Dragon's Flight", 95834], ["Dragon's Persuasion", 97267], ["Dragon's Wing", 96330], ["Dragon's Insight", 95814]
].map(([name, itemId]) => ({ name, itemId }));
const legendaryWeapons = [
  ['Eternity', 30689], ['Sunrise', 30703], ['Twilight', 30704], ['Bolt', 30699], ['The Bifrost', 30698], ['Meteorlogicus', 30695], ['The Flameseeker Prophecies', 30696], ['The Dreamer', 30686], ['Frostfang', 30684], ['Kudzu', 30685], ['Incinerator', 30687], ['Howler', 30702], ['Minstrel', 30688], ['The Predator', 30694], ['Rodgort', 30700], ['The Juggernaut', 30690], ['The Moot', 30692], ['Quip', 30693], ['Kraitkin', 30701], ['Frenzy', 30697], ["Kamohoali'i Kotaki", 30691],
  ["Aurene's Rending", 96937], ["Aurene's Claw", 96203], ["Aurene's Tail", 95612], ["Aurene's Argument", 95808], ["Aurene's Wisdom", 96221], ["Aurene's Fang", 95675], ["Aurene's Gaze", 97165], ["Aurene's Scale", 96028], ["Aurene's Breath", 97099], ["Aurene's Voice", 97783], ["Aurene's Bite", 96356], ["Aurene's Weight", 95684], ["Aurene's Flight", 97590], ["Aurene's Persuasion", 97377], ["Aurene's Wing", 97077], ["Aurene's Insight", 96652]
].map(([name, itemId]) => ({ name, itemId }));
resources.find(resource => resource.id === 'precursor').weapons = precursorWeapons;
resources.find(resource => resource.id === 'leg').weapons = legendaryWeapons;
const materialSets = {
  t3: [['Blood', 24292], ['Bones', 24344], ['Claws', 24348], ['Dust', 24274], ['Fangs', 24354], ['Scales', 24286], ['Totems', 24298], ['Venom', 24280]],
  t4: [['Blood', 24293], ['Bones', 24345], ['Claws', 24349], ['Dust', 24275], ['Fangs', 24355], ['Scales', 24287], ['Totems', 24363], ['Venom', 24281]],
  t5: [['Blood', 24294], ['Bones', 24341], ['Claws', 24350], ['Dust', 24276], ['Fangs', 24356], ['Scales', 24288], ['Totems', 24299], ['Venom', 24282]],
  t6: [['Blood', 24295], ['Bones', 24358], ['Claws', 24351], ['Dust', 24277], ['Fangs', 24357], ['Scales', 24289], ['Totems', 24300], ['Venom', 24283]]
};
Object.entries(materialSets).forEach(([id, components]) => {
  resources.find(resource => resource.id === id).components = components.map(([name, itemId]) => ({ name, itemId, quantity: 250 }));
});
const condensedGiftComponents = [
  [24351, 100], [24350, 250], [24349, 50], [24348, 50],
  [24289, 100], [24288, 250], [24287, 50], [24286, 50],
  [24358, 100], [24341, 250], [24345, 50], [24344, 50],
  [24357, 100], [24356, 250], [24355, 50], [24354, 50],
  [24295, 100], [24294, 250], [24293, 50], [24292, 50],
  [24283, 100], [24282, 250], [24281, 50], [24280, 50],
  [24300, 100], [24299, 250], [24363, 50], [24298, 50],
  [24277, 100], [24276, 250], [24275, 50], [24274, 50]
].map(([itemId, depth]) => ({ itemId, depth, quantity: 1 }));
const giftRows = [
  ['Gift of Claws', [24351, 100, 24350, 250, 24349, 50, 24348, 50]],
  ['Gift of Scales', [24289, 100, 24288, 250, 24287, 50, 24286, 50]],
  ['Gift of Bones', [24358, 100, 24341, 250, 24345, 50, 24344, 50]],
  ['Gift of Fangs', [24357, 100, 24356, 250, 24355, 50, 24354, 50]],
  ['Gift of Blood', [24295, 100, 24294, 250, 24293, 50, 24292, 50]],
  ['Gift of Venom', [24283, 100, 24282, 250, 24281, 50, 24280, 50]],
  ['Gift of Totems', [24300, 100, 24299, 250, 24363, 50, 24298, 50]],
  ['Gift of Dust', [24277, 100, 24276, 250, 24275, 50, 24274, 50]],
  ['Gift of Condensed Might', condensedGiftComponents.slice(0, 16)],
  ['Gift of Condensed Magic', condensedGiftComponents.slice(16)]
].map(([name, components]) => ({
  name,
  components: typeof components[0] === 'number'
    ? Array.from({ length: components.length / 2 }, (_, index) => ({ itemId: components[index * 2], depth: components[index * 2 + 1], quantity: components[index * 2 + 1] }))
    : components.map(component => ({ ...component, quantity: component.depth })),
  value: 0
}));
resources.find(resource => resource.id === 'condensed-gift').giftRows = giftRows;
const materialNames = ['Blood', 'Bones', 'Claws', 'Dust', 'Fangs', 'Scales', 'Totems', 'Venom'];
const snapshot = 'September 7, 2026 · 12:57 UTC';
const app = document.querySelector('#app');
let activeCategory = 'All';
let searchTerm = '';
const plannerExcluded = new Set();

function gold(value) {
  const copper = Math.round(value * 10000);
  const goldCoins = Math.floor(copper / 10000);
  const silver = Math.floor((copper % 10000) / 100);
  const bronze = copper % 100;
  if (goldCoins) return `${goldCoins}g ${String(silver).padStart(2, '0')}s`;
  if (silver) return `${silver}s ${String(bronze).padStart(2, '0')}c`;
  return `${bronze}c`;
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
function plannerItemKey(item) { return `${item.group}:${item.name}`; }
function plannerItems(includeDisabled = false) {
  const items = [];
  resources.forEach(resource => {
    if (resource.id === 'leg' || resource.id === 'precursor') return;
    if (resource.category === 'Weapons') {
      (resource.weapons || []).forEach(weapon => {
        if (weapon.sellPrice) items.push({ name: weapon.name, value: weapon.sellPrice * .9, group: resource.name });
      });
      return;
    }
    if (resource.giftRows) {
      resource.giftRows.forEach(gift => { if (gift.value > 0) items.push({ name: gift.name, value: gift.value, group: resource.name }); });
      return;
    }
    if (resource.value > 0) items.push({ name: resource.name, value: resource.value, group: resource.category });
  });
  return items.filter(item => Number.isFinite(item.value) && item.value > 0 && (includeDisabled || !plannerExcluded.has(plannerItemKey(item)))).sort((a, b) => b.value - a.value);
}
function combinations(items, size) {
  if (size === 0) return [[]];
  if (items.length < size) return [];
  const results = [];
  const walk = (start, current) => {
    if (current.length === size) {
      results.push([...current]);
      return;
    }
    for (let index = start; index <= items.length - (size - current.length); index++) {
      current.push(items[index]);
      walk(index + 1, current);
      current.pop();
    }
  };
  walk(0, []);
  return results;
}
function plannerRoutes(target) {
  const items = plannerItems().slice(0, 6);
  if (!items.length) return [];
  const routeMap = new Map();
  const maxRouteSize = Math.min(3, items.length);
  const addRoute = (parts, total) => {
    if (total < target) return;
    const key = parts.map(part => `${part.count}×${part.name}`).join(' + ');
    const over = total - target;
    if (!routeMap.has(key) || routeMap.get(key).over > over) {
      routeMap.set(key, { parts, total, over, itemCount: plannerRouteItemCount(parts) });
    }
  };
  for (let routeSize = 1; routeSize <= maxRouteSize; routeSize++) {
    combinations(items, routeSize).forEach(combo => {
      const ordered = [...combo].sort((a, b) => b.value - a.value);
      if (ordered.length === 1) {
        const item = ordered[0];
        const maxCount = Math.min(5000, Math.max(1, Math.ceil(target / item.value)));
        for (let count = 1; count <= maxCount; count++) {
          const total = count * item.value;
          if (total >= target) addRoute([{ name: item.name, count }], total);
        }
        return;
      }
      if (ordered.length === 2) {
        const [first, second] = ordered;
        const maxFirst = Math.min(5000, Math.max(1, Math.ceil(target / first.value)));
        for (let countA = 0; countA <= maxFirst; countA++) {
          const totalA = countA * first.value;
          if (totalA >= target) {
            addRoute([{ name: first.name, count: countA }, { name: second.name, count: 0 }], totalA);
            continue;
          }
          const countB = Math.max(0, Math.ceil((target - totalA) / second.value));
          const total = totalA + (countB * second.value);
          if (total >= target) {
            addRoute([{ name: first.name, count: countA }, { name: second.name, count: countB }], total);
          }
        }
        return;
      }
      const [first, second, third] = ordered;
      const maxFirst = Math.min(300, Math.max(1, Math.ceil(target / first.value)));
      const maxSecond = Math.min(300, Math.max(1, Math.ceil(target / second.value)));
      for (let countA = 0; countA <= maxFirst; countA++) {
        const totalA = countA * first.value;
        if (totalA >= target) {
          addRoute([{ name: first.name, count: countA }, { name: second.name, count: 0 }, { name: third.name, count: 0 }], totalA);
          continue;
        }
        for (let countB = 0; countB <= maxSecond; countB++) {
          const totalB = totalA + (countB * second.value);
          if (totalB >= target) {
            addRoute([{ name: first.name, count: countA }, { name: second.name, count: countB }, { name: third.name, count: 0 }], totalB);
            continue;
          }
          const countC = Math.max(0, Math.ceil((target - totalB) / third.value));
          const total = totalB + (countC * third.value);
          if (total >= target) {
            addRoute([{ name: first.name, count: countA }, { name: second.name, count: countB }, { name: third.name, count: countC }], total);
          }
        }
      }
    });
  }
  return [...routeMap.values()].sort((a, b) => a.over - b.over || a.itemCount - b.itemCount || a.total - b.total).slice(0, 8);
}
function plannerFilterSort(items) {
  const priority = new Map([
    ['T3 material set', 0],
    ['T4 material set', 1],
    ['T5 material set', 2],
    ['T6 material set', 3],
    ['Glob of Ectoplasm', 4],
    ['Mystic Coin', 5]
  ]);
  return items.sort((a, b) => (priority.get(a.name) ?? 100) - (priority.get(b.name) ?? 100) || a.name.localeCompare(b.name));
}
function andyTradePreset() {
  const wanted = new Set([
    'T6 material set',
    'Glob of Ectoplasm',
    'Mystic Coin',
    'Amalgamated Draconic Lodestone',
    'Amalgamated Gemstone',
    'Antique Summoning Stone',
    'Chunk of Pure Jade',
    'Gift of Condensed Might',
    'Gift of Condensed Magic',
    'Jade Runestone',
    'Memory of Battle',
    'Shard of Glory',
    'Stabilizing Matrix'
  ]);
  plannerExcluded.clear();
  plannerItems(true).forEach(item => {
    const key = plannerItemKey(item);
    if (!wanted.has(item.name)) plannerExcluded.add(key);
  });
}
function plannerRouteItemCount(parts) {
  return (parts || []).reduce((total, part) => {
    const isTMaterialSet = /^T[3-6] material set$/i.test(part.name);
    return total + (isTMaterialSet ? part.count * 8 : part.count);
  }, 0);
}
function routeItems(route) {
  return (route.parts || []).map(part => `${part.count.toLocaleString()} × ${part.name}`).join(' + ');
}
function planner() {
  const target = 1000;
  const filterItems = plannerFilterSort(plannerItems(true));
  plannerExcluded.clear();
  filterItems.forEach(item => plannerExcluded.add(plannerItemKey(item)));
  app.innerHTML = `<section class="quote-page"><p class="eyebrow">Piixel tool · live market values</p><h1>Turn gold into<br><em>a route.</em></h1><p class="hero-copy" style="margin-top:26px">Enter a target and compare practical ways to reach it using every currently priced resource. Routes use 90% direct-trade value, then favor the least over-target amount.</p><div class="planner-controls"><label for="gold-target">Target gold</label><div class="search-wrap"><span class="search-icon">◎</span><input id="gold-target" type="number" min="1" step="1" value="${target}" aria-label="Target gold"></div><span class="section-note">Values use the latest available API snapshot.</span></div><div class="planner-filter"><div class="section-heading"><div><p class="eyebrow">Choose your inputs</p><h2>Include items</h2></div><div><span class="section-note">Uncheck anything you do not want to use</span><div class="filter-actions"><button class="btn" id="planner-check-all" type="button">Check all</button><button class="btn" id="planner-uncheck-all" type="button">Uncheck all</button><button class="btn" id="planner-andy-trade" type="button">Andy Trade</button></div></div></div><div class="planner-checks">${filterItems.map(item => `<label><input type="checkbox" data-planner-item="${plannerItemKey(item)}" ${plannerExcluded.has(plannerItemKey(item)) ? '' : 'checked'}><span>${item.name}</span></label>`).join('')}</div></div><div id="planner-results"></div></section>`;
  const update = () => {
    const amount = Math.max(1, Number(document.querySelector('#gold-target').value) || target);
    const routes = plannerRoutes(amount);
    document.querySelector('#planner-results').innerHTML = `<div class="section-heading"><div><p class="eyebrow">${amount.toLocaleString()}g target</p><h2>Best routes right now</h2></div><span class="section-note">${plannerItems().length} priced items considered</span></div><div class="table-card"><table><thead><tr><th>Route</th><th>Estimated cost</th><th>Over target</th><th>Items</th></tr></thead><tbody>${routes.map((route, index) => `<tr class="${index === 0 ? 'highlight' : ''}"><td><strong>${index === 0 ? 'Closest match' : `Option ${index}`}</strong><br><span class="section-note">${routeItems(route)}</span></td><td class="price">${gold(route.total)}</td><td class="price">${gold(route.over)}</td><td class="mono">${(route.itemCount || 0).toLocaleString()}</td></tr>`).join('')}</tbody></table></div><div class="callout"><span>◌</span><span><strong>How it works:</strong> Piixel compares multi-item routes to reach the target. It is a shopping guide, not financial advice; market depth, liquidity, and inventory limits still matter.</span></div>`;
  };
  document.querySelector('#gold-target').addEventListener('input', update);
  document.querySelector('#planner-check-all').addEventListener('click', () => { plannerExcluded.clear(); document.querySelectorAll('[data-planner-item]').forEach(input => { input.checked = true; }); update(); });
  document.querySelector('#planner-uncheck-all').addEventListener('click', () => { filterItems.forEach(item => plannerExcluded.add(plannerItemKey(item))); document.querySelectorAll('[data-planner-item]').forEach(input => { input.checked = false; }); update(); });
  document.querySelector('#planner-andy-trade').addEventListener('click', () => {
    andyTradePreset();
    document.querySelectorAll('[data-planner-item]').forEach(input => {
      const key = input.dataset.plannerItem;
      input.checked = !plannerExcluded.has(key);
    });
    update();
  });
  document.querySelectorAll('[data-planner-item]').forEach(input => input.addEventListener('change', event => {
    const key = event.target.dataset.plannerItem;
    if (event.target.checked) plannerExcluded.delete(key); else plannerExcluded.add(key);
    update();
  }));
  update();
}
function depthRows(resource) {
  const depths = resource.depth >= 1000 ? [1, 250, resource.depth, resource.depth * 2, resource.depth * 5] : [1, 50, 100, resource.depth, resource.depth * 2, resource.depth * 4];
  const quotedIndex = depths.indexOf(resource.depth);
  return depths.map((depth, index) => { const variance = 1 + ((index - quotedIndex) * .013); const buy = resource.value * .84 * variance; const sell = resource.value / .9 * variance; const trade = resource.value * variance; return `<tr class="${depth === resource.depth ? 'highlight' : ''}"><td class="mono">${depth.toLocaleString()}</td><td class="price">${gold(buy)}</td><td class="price">${gold(sell)}</td><td class="price">${gold(trade)}</td><td>${depth === resource.depth ? '<strong>quoted depth</strong>' : '—'}</td></tr>`; }).join('');
}
function weaponRows(resource) {
  const percentage = resource.id === 'leg' ? 0.85 : 0.90;
  return resource.weapons.map(weapon => {
    const buy = weapon.buyPrice;
    const sell = weapon.sellPrice;
    const quote = sell ? sell * percentage : null;
    return `<tr><td><strong>${weapon.name}</strong><br><span class="section-note">Item ${weapon.itemId}</span></td><td class="price">${buy ? gold(buy) : '—'}</td><td class="price">${sell ? gold(sell) : '—'}</td><td class="price">${quote ? gold(quote) : '—'}</td><td>${sell ? 'live' : 'no listing'}</td></tr>`;
  }).join('');
}
function giftRowsTable(resource) {
  return resource.giftRows.map(gift => `<tr><td><strong>${gift.name}</strong></td><td class="price">${gift.value ? gold(gift.value) : '—'}</td><td class="price">${gift.value ? gold(gift.value / .9) : '—'}</td><td class="price">${gift.value ? gold(gift.value) : '—'}</td><td>${gift.value ? 'live' : 'no listing'}</td></tr>`).join('');
}
function itemPage(resource) {
  if (resource.giftRows) return giftPage(resource);
  const isWeapon = resource.category === 'Weapons';
  const headline = isWeapon ? `About ${resource.name.toLowerCase()}` : `${resource.name} price check`;
  app.innerHTML = `<section class="quote-page"><div class="breadcrumb"><a href="#home">PRICE CHECKS</a> / ${resource.name.toUpperCase()}</div><div class="quote-header"><div><p class="eyebrow">${resource.category} · market reference</p><h1>${headline}</h1><p class="timestamp">Data valid as of ${snapshot}</p></div><div class="action-row"><button class="btn" id="back-home">← Back</button><button class="btn primary" id="download-csv">↓ CSV</button></div></div><div class="quote-hero"><div><div class="quote-label">Recommended direct-trade quote</div><div class="quote-amount">${isWeapon ? resource.value + '%' : gold(resource.value)} <small>${isWeapon ? 'of lowest sell' : `per ${resource.unit}`}</small></div></div><div class="quote-meta"><strong>${isWeapon ? resource.weapons.length : resource.depth.toLocaleString()}</strong> ${isWeapon ? 'weapons' : 'listing depth'}<br>${isWeapon ? (resource.id === 'leg' ? '85% sell methodology' : '90% sell methodology') : '90% sell methodology'}</div></div><div class="info-strip"><div class="info-cell"><span>Trading Post buy</span><strong>${isWeapon ? 'per weapon below' : gold(resource.value * .84)}</strong></div><div class="info-cell"><span>Trading Post sell</span><strong>${isWeapon ? 'per weapon below' : gold(resource.value / .9)}</strong></div><div class="info-cell"><span>Stack reference</span><strong>${isWeapon ? resource.note : resource.unit === 'set' ? '8 materials' : gold(resource.value * 250)}</strong></div></div><div class="section-heading"><div><p class="eyebrow">Order book snapshot</p><h2>${resource.name}</h2></div><span class="section-note">${isWeapon ? 'Each row is a separate live Trading Post item' : 'Buyers wait · sellers list · direct trade midpoint'}</span></div><div class="table-card"><table><thead><tr><th>${isWeapon ? 'Weapon' : 'Depth'}</th><th>100% buy price</th><th>100% sell price</th><th>${isWeapon && resource.id === 'leg' ? '85% direct trade' : '90% direct trade'}</th><th>Signal</th></tr></thead><tbody>${isWeapon ? weaponRows(resource) : depthRows(resource)}</tbody></table></div><div class="callout"><span>◌</span><span><strong>Market note:</strong> This estimate reads current listings. Check the recurring high point on <a href="https://www.gw2bltc.com/" target="_blank" rel="noreferrer"><u>GW2BLTC</u></a> before trading if the item is volatile or the quote looks unusual.</span></div></section>`;
  document.querySelector('#back-home').addEventListener('click', () => { location.hash = 'home'; });
  document.querySelector('#download-csv').addEventListener('click', () => download(resource));
}
function giftPage(resource) {
  app.innerHTML = `<section class="quote-page"><div class="breadcrumb"><a href="#home">PRICE CHECKS</a> / ${resource.name.toUpperCase()}</div><div class="quote-header"><div><p class="eyebrow">Crafted · grouped price check</p><h1>${resource.name}</h1><p class="timestamp">Data valid as of ${snapshot}</p></div><div class="action-row"><button class="btn" id="back-home">← Back</button></div></div><div class="quote-hero"><div><div class="quote-label">All gift versions</div><div class="quote-amount">10 <small>crafted gifts</small></div></div><div class="quote-meta"><strong>2,000</strong> listing depth<br>90% direct-trade methodology</div></div><div class="section-heading"><div><p class="eyebrow">Recipe values</p><h2>Condensed gift prices</h2></div><span class="section-note">Each row is a separate planner item</span></div><div class="table-card"><table><thead><tr><th>Gift</th><th>90% direct trade</th><th>100% sell reference</th><th>Quoted value</th><th>Signal</th></tr></thead><tbody>${giftRowsTable(resource)}</tbody></table></div><div class="callout"><span>◌</span><span><strong>Market note:</strong> Each gift is calculated from its recipe components using current Trading Post listings at the original depth targets.</span></div></section>`;
  document.querySelector('#back-home').addEventListener('click', () => { location.hash = 'home'; });
}
function methodology() { app.innerHTML = `<section class="quote-page"><p class="eyebrow">Documentation</p><h1>Read the market,<br><em>not just the number.</em></h1><div class="method-grid" style="margin-top:45px"><article class="method-card"><h3>Why 90% sell?</h3><p>Instant buyers pay 100% of the sell listing. Sellers who wait receive about 85% after the Trading Post tax. Ninety percent is a clean midpoint for a direct, tax-free exchange.</p></article><article class="method-card"><h3>What is depth?</h3><p>Instead of trusting the first listing, Piixel Price Check walks through the order book until it has seen the requested quantity. The last unit price becomes the quote.</p></article><article class="method-card"><h3>What can go wrong?</h3><p>Events, patches, farming, low volume, and deliberate undercuts can all distort a snapshot. History and recent player trade reviews provide the missing context.</p></article></div><div class="content-band"><div class="section-heading"><div><p class="eyebrow">Exceptions</p><h2>Some markets speak differently</h2></div></div><div class="table-card"><table><thead><tr><th>Market</th><th>Default basis</th><th>Why</th></tr></thead><tbody><tr><td>Legendary weapons</td><td>85% sell</td><td>Buyers compare against post-tax liquidation value.</td></tr><tr><td>Precursor weapons</td><td>90% sell</td><td>Usually trades between buy and sell references.</td></tr><tr><td>Infusions & contracts</td><td>Review trades</td><td>Low-volume markets need human context.</td></tr></tbody></table></div></div></section>`; }
function apiPage() { app.innerHTML = `<section class="quote-page"><p class="eyebrow">Developer tools</p><h1>Data you can<br><em>take with you.</em></h1><p class="hero-copy" style="margin-top:26px">Piixel Price Check exposes depth exports in the browser and lets you download any quote table as CSV.</p><div class="api-panel"><p class="eyebrow" style="color:#8ccfbd">Piixel data tool</p><div class="code-line">GET https://api.guildwars2.com/v2/commerce/listings?ids=19721,19976</div><p>For production integrations, use the official Guild Wars 2 API directly and keep account API keys restricted. Never share an unrestricted key with a third party.</p></div><div class="content-band"><div class="section-heading"><div><p class="eyebrow">Included tools</p><h2>Small, useful exports</h2></div></div><div class="method-grid"><article class="method-card"><h3>Depth CSV</h3><p>Download buy, sell, and direct-trade values from any resource detail page.</p></article><article class="method-card"><h3>Item references</h3><p>Every tracked resource keeps its item identity, quote depth, and stack context visible.</p></article><article class="method-card"><h3>Official data source</h3><p>Live integrations use api.guildwars2.com/v2/commerce/listings with item IDs.</p></article></div></div></section>`; }
function download(resource) { const lines = [['Resource', 'Depth', 'Buy', 'Sell', 'Direct trade']]; const depths = resource.depth >= 1000 ? [1, 250, resource.depth, resource.depth * 2, resource.depth * 5] : [1, 50, 100, resource.depth, resource.depth * 2, resource.depth * 4]; depths.forEach((depth, index) => { const variance = 1 + ((index - 2) * .013); lines.push([resource.name, depth, gold(resource.value * .84 * variance), gold(resource.value / .9 * variance), gold(resource.value * variance)]); }); const blob = new Blob([lines.map(row => row.join(',')).join('\n')], { type: 'text/csv' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `${resource.id}-price-check.csv`; link.click(); URL.revokeObjectURL(link.href); }
let liveRefreshStarted = false;
function resourceComponentTotal(resource) {
  if (!resource.components || !resource.components.length) return 0;
  const values = resource.components.filter(component => component.value != null);
  if (values.length !== resource.components.length) return 0;
  return values.reduce((total, component) => total + component.value * component.quantity, 0) * 0.9;
}
async function refreshLivePrices() {
  const liveResources = resources.filter(resource => resource.itemId);
  const liveWeapons = resources.flatMap(resource => (resource.weapons || []).map(weapon => { weapon.parent = resource; return weapon; }));
  const liveComponents = resources.flatMap(resource => [ ...(resource.components || []), ...((resource.giftRows || []).flatMap(gift => gift.components)) ].map(component => { component.parent = resource; return component; }));
  try {
    const itemIds = [...liveResources.map(resource => resource.itemId), ...liveWeapons.map(weapon => weapon.itemId), ...liveComponents.map(component => component.itemId)].filter((itemId, index, all) => all.indexOf(itemId) === index);
    const batches = [];
    for (let index = 0; index < itemIds.length; index += 100) batches.push(itemIds.slice(index, index + 100));
    const listingResponses = await Promise.all(batches.map(batch => fetch(`https://api.guildwars2.com/v2/commerce/listings?ids=${batch.join(',')}`)));
    if (listingResponses.some(response => !response.ok)) throw new Error('Trading Post API unavailable');
    const listings = (await Promise.all(listingResponses.map(response => response.json()))).flat();
    liveResources.forEach(resource => {
      const item = listings.find(listing => listing.id === resource.itemId);
      if (!item) return;
      let seen = 0;
      const target = item.sells.find(listing => (seen += listing.quantity) >= resource.depth);
      if (target) resource.value = target.unit_price * 0.9 / 10000;
    });
    liveWeapons.forEach(weapon => {
      const item = listings.find(listing => listing.id === weapon.itemId);
      if (!item) return;
      let buySeen = 0;
      let sellSeen = 0;
      const buy = item.buys.find(listing => (buySeen += listing.quantity) >= 1);
      const sell = item.sells.find(listing => (sellSeen += listing.quantity) >= 1);
      weapon.buyPrice = buy ? buy.unit_price / 10000 : null;
      weapon.sellPrice = sell ? sell.unit_price / 10000 : null;
    });
    liveComponents.forEach(component => {
      const item = listings.find(listing => listing.id === component.itemId);
      if (!item) return;
      let seen = 0;
      const sell = item.sells.find(listing => (seen += listing.quantity) >= (component.depth || component.parent.depth)) || item.sells[item.sells.length - 1];
      component.value = sell ? sell.unit_price / 10000 : null;
    });
    resources.filter(resource => resource.components).forEach(resource => {
      const total = resourceComponentTotal(resource);
      if (total > 0) resource.value = total;
    });
    resources.filter(resource => resource.giftRows).forEach(resource => resource.giftRows.forEach(gift => {
      const values = gift.components.filter(component => component.value != null);
      if (values.length === gift.components.length) gift.value = values.reduce((total, component) => total + component.value * component.quantity, 0) * 0.9;
    }));
    render();
  } catch (error) {
    console.warn('Using snapshot prices:', error.message);
  }
}
function render() { const [route, id] = location.hash.slice(1).split('/'); document.querySelectorAll('[data-nav]').forEach(nav => nav.classList.toggle('active', nav.dataset.nav === route || (route === 'item' && nav.dataset.nav === 'home'))); if (route === 'item') itemPage(getResource(id)); else if (route === 'planner') planner(); else if (route === 'methodology') methodology(); else if (route === 'api') apiPage(); else home(); if (!liveRefreshStarted) { liveRefreshStarted = true; refreshLivePrices(); } }
window.addEventListener('hashchange', render); render();
