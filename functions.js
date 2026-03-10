/* ══════════════════════
   DATA
══════════════════════ */
const CATS=[
  {id:'fish',label:'Fish & Chips',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M2 12c0 0 4-8 10-8s10 8 10 8-4 8-10 8S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`},
  {id:'burgers',label:'Burgers & Wraps',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M3 9h18M3 15h18M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/></svg>`},
  {id:'salads',label:'Salads & Sides',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M12 22V12M12 12C12 12 7 8 4 8s-3 4 0 6 8 6 8 6 5-4 8-4 3 4 0 6-8 6-8 6"/></svg>`},
  {id:'platters',label:'Sharing Platters',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2v20"/></svg>`},
  {id:'sauces',label:'Sauces & Dips',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M10 2v6l-2 3h8l-2-3V2"/><path d="M8 11v9a2 2 0 004 0v-9"/></svg>`},
  {id:'drinks',label:'Cold Drinks',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg>`},
];

const products=[
  {id:1,name:"Classic Battered Hake",cat:"fish",price:89,desc:"Golden crispy batter, thick-cut chips & tartar sauce",img:"https://images.unsplash.com/photo-1680678605629-278edc5fe99d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"popular"},
  {id:2,name:"Grilled Linefish of the Day",cat:"fish",price:109,desc:"Fresh daily catch, lemon butter, served with chips",img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=85",badge:"new"},
  {id:3,name:"Fish Fillet Basket",cat:"fish",price:95,desc:"Three crispy fillets with seasoned chips & coleslaw",img:"https://images.unsplash.com/photo-1700760933394-976f1d27dff2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:4,name:"Calamari & Chips",cat:"fish",price:99,desc:"Tender rings of calamari, crumbed & fried golden",img:"https://images.unsplash.com/photo-1734771219838-61863137b117?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"popular"},
  {id:5,name:"Prawn Basket",cat:"fish",price:135,desc:"Juicy prawns in beer batter with chips & aioli",img:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=85"},
  {id:6,name:"Fish Cake & Chips",cat:"fish",price:79,desc:"House-made fish cakes, mushy peas & chips",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=85"},
  {id:7,name:"Chip Roll (Slap Chips)",cat:"fish",price:35,desc:"Thick-cut chips in a soft roll with tomato sauce",img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=85"},
  {id:8,name:"Crispy Fish Burger",cat:"burgers",price:85,desc:"Beer-battered fillet, slaw, gherkins & house sauce",img:"https://images.unsplash.com/photo-1643133277733-66a476f7f32e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"popular"},
  {id:9,name:"Prawn Wrap",cat:"burgers",price:95,desc:"Panko prawns, avocado, lettuce & chilli mayo wrap",img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=85",badge:"new"},
  {id:10,name:"Double Beef Smashburger",cat:"burgers",price:99,desc:"Two smashed patties, cheese, pickles & special sauce",img:"https://images.unsplash.com/photo-1696935302123-372d54ab941e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:11,name:"Calamari Wrap",cat:"burgers",price:79,desc:"Fried calamari, tzatziki, cucumber & fresh herbs",img:"https://images.unsplash.com/photo-1655895176036-bf1a11326e5c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:12,name:"Classic Greek Salad",cat:"salads",price:65,desc:"Feta, olives, cucumber, tomato & red onion",img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=85",badge:"popular"},
  {id:13,name:"Coleslaw",cat:"salads",price:35,desc:"Creamy house-made coleslaw with red cabbage",img:"https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=85"},
  {id:14,name:"Garden Side Salad",cat:"salads",price:45,desc:"Mixed greens, cherry tomatoes & balsamic dressing",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=85"},
  {id:15,name:"Mushy Peas",cat:"salads",price:28,desc:"Classic British side, buttered & seasoned",img:"https://images.unsplash.com/photo-1595016111459-799a195e7452?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"new"},
  {id:16,name:"Corn on the Cob",cat:"salads",price:32,desc:"Grilled corn, herb butter & sea salt",img:"https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=85"},
  {id:17,name:"Family Fish Platter",cat:"platters",price:299,desc:"4 fillets, calamari rings, prawns, chips & 4 sides",img:"https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=600&q=85",badge:"popular"},
  {id:18,name:"Mixed Seafood Platter",cat:"platters",price:349,desc:"Grilled & fried selection for two with all the sides",img:"https://images.unsplash.com/photo-1727198826762-8a2bd0cb107b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:19,name:"Chip Bucket (1kg)",cat:"platters",price:79,desc:"Seasoned thick-cut chips for the whole table",img:"https://images.unsplash.com/photo-1630431341973-02e1b662ec35?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"popular"},
  {id:20,name:"Tartar Sauce",cat:"sauces",price:18,desc:"Classic creamy tartar with capers & dill",img:"https://images.unsplash.com/photo-1734772257288-d53770c7707f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"popular"},
  {id:21,name:"Peri-Peri Dip",cat:"sauces",price:18,desc:"Smoky, fiery peri-peri chilli sauce",img:"https://images.pexels.com/photos/12339111/pexels-photo-12339111.jpeg"},
  {id:22,name:"Garlic Aioli",cat:"sauces",price:18,desc:"Roasted garlic whipped aioli, smooth & rich",img:"https://images.pexels.com/photos/5848055/pexels-photo-5848055.jpeg"},
  {id:23,name:"Sweet Chilli Sauce",cat:"sauces",price:18,desc:"House-made sweet chilli for dipping",img:"https://images.pexels.com/photos/33980002/pexels-photo-33980002.jpeg",badge:"new"},
  {id:24,name:"Coca-Cola",cat:"drinks",price:28,desc:"Ice-cold 330ml can",img:"https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=85"},
  {id:25,name:"Still Water",cat:"drinks",price:18,desc:"500ml spring water",img:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=85"},
  {id:26,name:"Fresh Lemonade",cat:"drinks",price:35,desc:"Freshly squeezed with mint & ice",img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=85",badge:"popular"},
  {id:27,name:"Iced Tea",cat:"drinks",price:32,desc:"Peach or lemon flavoured iced tea",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=85"},
];

/* ══════════════════════
   STATE
══════════════════════ */
let cart=[];
let currentProduct=null;
let currentSugar=0;
let currentSizeExtra=0;
let currentCoffeeType='Black';
let currentQty=1;
let currentExtras=[];
let selectedBranch='Sandton Central';
let currentFilter='all';
let favourites=new Set();

/* ══════════════════════
   RENDER — HORIZONTAL ROWS WITH SEE ALL
══════════════════════ */
const VISIBLE_PER_ROW = 4; // how many show by default

function renderMenu(){
  const content=document.getElementById('menuContent');
  let html='';
  CATS.forEach(catInfo=>{
    const items=products.filter(p=>p.cat===catInfo.id);
    if(!items.length)return;
    const visible=items.slice(0,VISIBLE_PER_ROW);
    const extra=items.slice(VISIBLE_PER_ROW);
    const hasExtra=extra.length>0;
    html+=`
      <div class="category-group" id="cat-${catInfo.id}">
        <div class="category-group-header">
          <div class="cat-group-title-wrap">
            
            <div class="cat-group-title">${catInfo.label}</div>
          </div>
        </div>
        <div class="products-row">
          ${visible.map((p,i)=>productCardHTML(p,i)).join('')}
        </div>
        ${hasExtra?`<div class="products-extra" id="extra-${catInfo.id}">
          ${extra.map((p,i)=>productCardHTML(p,i+VISIBLE_PER_ROW)).join('')}
        </div>`:''}
        ${hasExtra?`<div class="see-all-wrap">
          <button class="see-all-btn" id="seeall-${catInfo.id}" onclick="toggleSeeAll('${catInfo.id}')">
            <span class="see-all-label">See all ${items.length} items</span>
            <span class="see-all-arrow"><svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
          </button>
        </div>`:''}
      </div>
    `;
  });
  content.innerHTML=html||'<p style="color:var(--text-muted);padding:40px 0;">No items found.</p>';
  observeReveal();
}

function toggleSeeAll(catId){
  const extra=document.getElementById('extra-'+catId);
  const btn=document.getElementById('seeall-'+catId);
  if(!extra||!btn)return;
  const isOpen=extra.classList.contains('expanded');
  extra.classList.toggle('expanded',!isOpen);
  btn.classList.toggle('open',!isOpen);
  const label=btn.querySelector('.see-all-label');
  if(label){
    const items=products.filter(p=>p.cat===catId);
    label.textContent=isOpen?`See all ${items.length} items`:'See less';
  }
  if(!isOpen){setTimeout(()=>observeReveal(),50);}
}

/* ══════════════════════
   REAL-TIME SEARCH
══════════════════════ */
function handleSearch(query){
  const results=document.getElementById('pkc-search-results');
  const inner=document.getElementById('pkc-search-results-inner');
  const q=query.trim().toLowerCase();
  if(!q){results.classList.remove('visible');return;}
  const matches=products.filter(p=>
    p.name.toLowerCase().includes(q)||
    p.desc.toLowerCase().includes(q)||
    (CATS.find(c=>c.id===p.cat)||{}).label.toLowerCase().includes(q)
  ).slice(0,8);
  if(!matches.length){
    inner.innerHTML='<div class="pkc-search-no-results">No results for "'+query+'"</div>';
    results.classList.add('visible');
    return;
  }
  inner.innerHTML=matches.map(p=>{
    const cat=(CATS.find(c=>c.id===p.cat)||{}).label||'';
    return `<div class="pkc-search-result-item" onclick="openOrderModal(${p.id});closeSearch()">
      <img class="pkc-search-result-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="pkc-search-result-info">
        <div class="pkc-search-result-name">${p.name}</div>
        <div class="pkc-search-result-cat">${cat}</div>
      </div>
      <span class="pkc-search-result-price">R${p.price}</span>
    </div>`;
  }).join('');
  results.classList.add('visible');
}
function closeSearch(){
  const input=document.getElementById('pkc-search-input');
  const results=document.getElementById('pkc-search-results');
  if(input)input.value='';
  if(results)results.classList.remove('visible');
}
// Close search on outside click
document.addEventListener('click',function(e){
  const wrap=document.getElementById('pkc-search-input');
  const results=document.getElementById('pkc-search-results');
  if(wrap&&results&&!wrap.contains(e.target)&&!results.contains(e.target)){
    results.classList.remove('visible');
  }
});

function productCardHTML(p,i){
  const isFav=favourites.has(p.id);
  return `
    <div class="product-card reveal" data-delay="${(i%3)+1}" onclick="openOrderModal(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <button class="fav-btn ${isFav?'active':''}" onclick="toggleFav(event,${p.id})" title="Add to favourites">
          <svg width="14" height="14" fill="${isFav?'var(--accent)':'none'}" stroke="${isFav?'var(--accent)':'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <div class="quick-add" onclick="event.stopPropagation();openOrderModal(${p.id})">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Customise &amp; Add
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">R${p.price}<span> / S</span></div>
        </div>
      </div>
    </div>
  `;
}

function filterMenu(cat,btnEl){
  currentFilter=cat;
  // Update desktop sidebar
  document.querySelectorAll('.sidebar-filter').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat));
  // Update mobile tabs
  document.querySelectorAll('.pkc-mobile-filter-tab').forEach(b=>{
    const match=(cat==='all'&&b.textContent.trim()==='All')||(b.getAttribute('onclick')&&b.getAttribute('onclick').includes(`'${cat}'`));
    b.classList.toggle('active',match);
  });
  if(btnEl){
    if(btnEl.classList.contains('pkc-mobile-filter-tab')){
      document.querySelectorAll('.pkc-mobile-filter-tab').forEach(b=>b.classList.remove('active'));
      btnEl.classList.add('active');
    }
  }
  renderMenu();
}

/* ══════════════════════
   FAVOURITES
══════════════════════ */
function toggleFav(e,id){
  e.stopPropagation();
  if(favourites.has(id)){
    favourites.delete(id);
    showToast('Removed from favourites');
  }else{
    favourites.add(id);
    showToast('Added to favourites ♥');
  }
  document.getElementById('pkc-fav-btn').classList.toggle('fav-active',favourites.size>0);
  renderMenu();
}
function toggleFavPanel(){
  openFavPanel();
}
function openFavPanel(){
  renderFavPanel();
  document.getElementById('favOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeFavPanel(){
  document.getElementById('favOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeFavPanelOnBg(e){if(e.target.id==='favOverlay')closeFavPanel();}
function renderFavPanel(){
  const body=document.getElementById('favPanelBody');
  if(!favourites.size){
    body.innerHTML=`<div class="fav-empty">
      <svg width="48" height="48" fill="none" stroke="var(--border)" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      <p>No favourites yet</p><small>Tap the ♥ on any item to save it here</small>
    </div>`;
    return;
  }
  const favItems=products.filter(p=>favourites.has(p.id));
  body.innerHTML=favItems.map(p=>`
    <div class="fav-item-row">
      <div class="fav-item-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="fav-item-details">
        <div class="fav-item-name">${p.name}</div>
        <div class="fav-item-desc">${p.desc}</div>
        <div class="fav-item-price">R${p.price}</div>
        <button class="fav-remove-btn" onclick="removeFav(${p.id})">Remove</button>
      </div>
      <button class="fav-order-btn" onclick="closeFavPanel();openOrderModal(${p.id})">Order</button>
    </div>
  `).join('');
}
function removeFav(id){
  favourites.delete(id);
  document.getElementById('pkc-fav-btn').classList.toggle('fav-active',favourites.size>0);
  renderMenu();
  renderFavPanel();
  if(!favourites.size)showToast('No more favourites');
}

/* ══════════════════════
   ORDER MODAL
══════════════════════ */
function openOrderModal(id){
  currentProduct=products.find(p=>p.id===id);
  if(!currentProduct)return;
  currentSugar=0;currentSizeExtra=0;currentCoffeeType='Black';currentQty=1;currentExtras=[];
  // populate
  document.getElementById('orderModalPhoto').src=currentProduct.img;
  document.getElementById('orderModalName').textContent=currentProduct.name;
  document.getElementById('orderModalSub').textContent=currentProduct.desc;
  // badge
  const badgeEl=document.getElementById('orderModalBadge');
  if(currentProduct.badge){
    badgeEl.textContent=currentProduct.badge==='popular'?'Popular': 'New';
    badgeEl.style.display='block';
  } else {
    badgeEl.style.display='none';
  }
  // reset options
  document.querySelectorAll('.size-btn').forEach((b,i)=>b.classList.toggle('selected',i===0));
  document.querySelectorAll('.coffee-type-option').forEach((b,i)=>b.classList.toggle('selected',i===0));
  document.querySelectorAll('.extra-option').forEach(b=>b.classList.remove('checked'));
  document.getElementById('sugarFill').style.width='0%';
  document.getElementById('sugarDisplay').textContent='No sugar';
  document.getElementById('qtyDisplay').textContent='1';
  document.getElementById('orderNotes').value='';
  // hide coffee-specific sections for non-coffee items
  const isCoffee=currentProduct.coffee;
  document.getElementById('coffeeTypeSection').style.display=isCoffee?'':'none';
  document.getElementById('sugarSection').style.display=isCoffee?'':'none';
  document.getElementById('sizeSection').style.display=isCoffee?'':'none';
  // scroll right pane to top
  document.getElementById('orderModalScroll').scrollTop=0;
  updateAddBtn();
  document.getElementById('orderOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeOrderModal(){
  document.getElementById('orderOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeOnBg(e,id){
  // Only close if clicking directly on the dark overlay, not the sheet
  if(e.target.id===id)closeOrderModal();
}

function selectSize(btn,s,extra){
  currentSizeExtra=extra;
  document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
  updateAddBtn();
}
function selectCoffeeType(el,type){
  currentCoffeeType=type;
  document.querySelectorAll('.coffee-type-option').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
}
function adjustSugar(d){
  currentSugar=Math.max(0,Math.min(5,currentSugar+d));
  document.getElementById('sugarFill').style.width=(currentSugar/5*100)+'%';
  document.getElementById('sugarDisplay').textContent=currentSugar===0?'No sugar':currentSugar===1?'1 tsp':currentSugar+' tsp';
}
function toggleExtra(el,name,price){
  el.classList.toggle('checked');
  if(el.classList.contains('checked')){currentExtras.push({name,price});}
  else{currentExtras=currentExtras.filter(e=>e.name!==name);}
  updateAddBtn();
}
function adjustQty(d){
  currentQty=Math.max(1,Math.min(20,currentQty+d));
  document.getElementById('qtyDisplay').textContent=currentQty;
  updateAddBtn();
}
function updateAddBtn(){
  if(!currentProduct)return;
  const base=currentProduct.price*(1+currentSizeExtra);
  const extras=currentExtras.reduce((s,e)=>s+e.price,0);
  const total=Math.round((base+extras)*currentQty);
  document.getElementById('addBtnPrice').textContent='R'+total;
}
function addToCart(){
  if(!currentProduct)return;
  const base=currentProduct.price*(1+currentSizeExtra);
  const extras=currentExtras.reduce((s,e)=>s+e.price,0);
  const itemPrice=Math.round((base+extras)*currentQty);
  const notes=document.getElementById('orderNotes').value.trim();
  const parts=[];
  if(currentProduct.coffee){
    const sizes={0:'Small',0.2:'Medium',0.4:'Large'};
    parts.push(sizes[currentSizeExtra]||'Small');
    parts.push(currentCoffeeType);
    parts.push(currentSugar===0?'No sugar':currentSugar+' tsp sugar');
  }
  currentExtras.forEach(e=>parts.push(e.name));
  if(notes)parts.push(notes);
  cart.push({
    id:Date.now()+Math.random(),
    productId:currentProduct.id,
    name:currentProduct.name,
    img:currentProduct.img,
    qty:currentQty,
    price:itemPrice,
    custom:parts.join(' · ')||'Standard'
  });
  closeOrderModal();
  updateCartUI();
  showToast(currentProduct.name+' added to your order');
}

/* ══════════════════════
   CART
══════════════════════ */
function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeOnBg2(e,id){if(e.target.id===id)closeCart();}

function updateCartUI(){
  const count=cart.reduce((s,i)=>s+i.qty,0);
  const subtotal=cart.reduce((s,i)=>s+i.price,0);
  const total=subtotal+5;
  // Badges
  const hb=document.getElementById('headerCartBadge');
  hb.textContent=count;
  hb.style.display=count>0?'flex':'none';
  document.getElementById('cartBadge').textContent=count;
  document.getElementById('cartTotalLabel').textContent=count>0?'R'+total+' Order':'My Order';
  // Summary
  document.getElementById('cartSubtotal').textContent='R'+subtotal;
  document.getElementById('cartTotal').textContent='R'+total;
  document.getElementById('checkoutSubtotal').textContent='R'+subtotal;
  document.getElementById('checkoutTotal').textContent='R'+total;
  document.getElementById('cartSummary').style.display=cart.length?'block':'none';
  renderCartItems();
}
function renderCartItems(){
  const body=document.getElementById('cartBody');
  if(!cart.length){
    body.innerHTML=`<div class="cart-empty">
      <div class="cart-empty-icon">
        <svg width="52" height="52" fill="none" stroke="var(--border)" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      </div>
      <p>Your order is empty</p><small>Add something delicious!</small>
    </div>`;
    return;
  }
  body.innerHTML=cart.map(item=>`
    <div class="cart-item-row">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-customization">${item.custom}</div>
        <div class="cart-item-actions">
          <div class="cart-qty-ctrl">
            <button class="cart-qty-btn" onclick="changeCartQty(${item.id},-1)">−</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" onclick="changeCartQty(${item.id},1)">+</button>
          </div>
          <span class="cart-item-price">R${item.price}</span>
        </div>
        <button class="cart-remove" onclick="removeCartItem(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');
}
function changeCartQty(id,d){
  const item=cart.find(i=>i.id===id);
  if(!item)return;
  const unit=item.price/item.qty;
  item.qty=Math.max(1,item.qty+d);
  item.price=Math.round(unit*item.qty);
  updateCartUI();
}
function removeCartItem(id){
  cart=cart.filter(i=>i.id!==id);
  updateCartUI();
}

/* ══════════════════════
   CHECKOUT
══════════════════════ */
function openCheckout(){
  if(!cart.length){showToast('Your order is empty!');return;}
  closeCart();
  document.getElementById('checkoutBranch').textContent=selectedBranch;
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeCheckout(){
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeOnBg3(e,id){if(e.target.id===id)closeCheckout();}
function selectPay(el){
  document.querySelectorAll('.pay-icon').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
}
function formatCard(el){
  let v=el.value.replace(/\D/g,'').substring(0,16);
  el.value=v.replace(/(.{4})/g,'$1 ').trim();
}
function formatExpiry(el){
  let v=el.value.replace(/[^0-9]/g,'');
  if(v.length>2)v=v.substring(0,2)+' / '+v.substring(2,4);
  el.value=v;
}
function placeOrder(){
  const name=document.getElementById('chkName').value.trim();
  if(!name){showToast('Please fill in your name');return;}
  closeCheckout();
  cart=[];
  updateCartUI();
  setTimeout(()=>showToast('Order placed! Ready in ~15 min at '+selectedBranch),300);
}

/* ══════════════════════
   BRANCH
══════════════════════ */
function selectBranch(branch){
  selectedBranch=branch;
  setBranchUI();
  showToast('Branch set to '+branch);
}
function selectBranchInCart(branch){
  selectedBranch=branch;
  setBranchUI();
}
function setBranchUI(){
  const n=document.getElementById('currentBranchName');
  n.innerHTML=selectedBranch+' <span class="loc-chevron"><svg width="12" height="12" fill="none" stroke="var(--text-muted)" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>';
  document.getElementById('branchOpt1').classList.toggle('selected',selectedBranch==='Sandton Central');
  document.getElementById('branchOpt2').classList.toggle('selected',selectedBranch==='Rosebank Village');
}
function openBranchSelect(){
  document.getElementById('branchSelectOverlay').classList.add('open');
}
function closeBranchSelect(){
  document.getElementById('branchSelectOverlay').classList.remove('open');
}
function closeBranchSelectOnBg(e){if(e.target.id==='branchSelectOverlay')closeBranchSelect();}
function confirmBranchSelect(name,activeId,inactiveId){
  selectedBranch=name;
  document.getElementById(activeId).classList.add('selected');
  document.getElementById(inactiveId).classList.remove('selected');
  setBranchUI();
}

/* ══════════════════════
   VIDEO MODAL
══════════════════════ */
function openVideoModal(){
  document.getElementById('videoModalOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
  // Real coffee shop video from YouTube
  document.getElementById('videoIframe').src='https://www.youtube.com/embed/mNBTFDsEFi0?autoplay=1&rel=0';
}
function closeVideoModal(){
  document.getElementById('videoModalOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
  document.getElementById('videoIframe').src='';
}
function closeVideoOnBg(e){if(e.target.id==='videoModalOverlay')closeVideoModal();}

/* ══════════════════════
   MOBILE NAV
══════════════════════ */
function toggleMobileNav(){
  document.getElementById('pkc-mobile-nav').classList.toggle('open');
}

/* ══════════════════════
   MOBILE SEARCH
══════════════════════ */
function openMobileSearch(){
  document.getElementById('pkc-mobile-search-overlay').classList.add('open');
  document.getElementById('pkc-mobile-search-panel').classList.add('open');
  document.getElementById('pkc-mobile-search-dim').classList.add('open');
  setTimeout(()=>{
    const inp=document.getElementById('pkc-mobile-search-input');
    if(inp){inp.focus();inp.value='';}
    document.getElementById('pkc-mobile-search-panel-inner').innerHTML=
      '<div class="search-empty"><svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg><p>Start typing to search</p><span>Fish, chips, burgers &amp; more…</span></div>';
  },60);
}
function closeMobileSearch(){
  document.getElementById('pkc-mobile-search-overlay').classList.remove('open');
  document.getElementById('pkc-mobile-search-panel').classList.remove('open');
  document.getElementById('pkc-mobile-search-dim').classList.remove('open');
  const inp=document.getElementById('pkc-mobile-search-input');
  if(inp){inp.value='';inp.blur();}
}
function handleMobileSearch(query){
  const inner=document.getElementById('pkc-mobile-search-panel-inner');
  if(!inner)return;
  const q=query.trim().toLowerCase();
  if(!q){
    inner.innerHTML='<div class="search-empty"><svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg><p>Start typing to search</p><span>Fish, chips, burgers &amp; more…</span></div>';
    return;
  }
  const matches=products.filter(p=>
    p.name.toLowerCase().includes(q)||
    p.desc.toLowerCase().includes(q)||
    (CATS.find(c=>c.id===p.cat)||{}).label.toLowerCase().includes(q)
  ).slice(0,12);
  if(!matches.length){
    inner.innerHTML='<div class="search-empty"><svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg><p>No results for "'+query+'"</p><span>Try a different search term</span></div>';
    return;
  }
  inner.innerHTML=matches.map(p=>{
    const cat=(CATS.find(c=>c.id===p.cat)||{}).label||'';
    return `<div class="pkc-search-result-item" onclick="closeMobileSearch();openOrderModal(${p.id})">
      <img class="pkc-search-result-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="pkc-search-result-info">
        <div class="pkc-search-result-name">${p.name}</div>
        <div class="pkc-search-result-cat">${cat}</div>
      </div>
      <span class="pkc-search-result-price">R${p.price}</span>
    </div>`;
  }).join('');
}
let lastScrollY=0;
let scrollTicking=false;
function handleHeaderScroll(){
  const page=document.getElementById('pkc-page');
  const scrollY=page?page.scrollTop:window.scrollY;
  const header=document.getElementById('pkc-main-header');
  if(!header)return;
  // Hide when scrolling DOWN past 80px; show when scrolling UP
  if(scrollY>lastScrollY&&scrollY>80){
    header.classList.add('hidden');
  }else{
    header.classList.remove('hidden');
  }
  lastScrollY=scrollY;
  header.classList.toggle('scrolled',scrollY>60);
  // Update mobile filter bar top
  const bar=document.getElementById('pkc-mobile-filter-bar');
  if(bar&&window.innerWidth<=900){
    bar.style.top=header.offsetHeight+'px';
  }
  // Track active category on scroll (mobile)
  if(window.innerWidth<=900){
    const cats=['fish','burgers','salads','platters','sauces','drinks'];
    for(const cat of cats){
      const el=document.getElementById('cat-'+cat);
      if(!el)continue;
      if(el.getBoundingClientRect().top<=160){
        // active cat tracking (no sidebar to update, kept for future use)
      }
    }
  }
  scrollTicking=false;
}
// Attach to pkc-page (the real scroll container)
const _page=document.getElementById('pkc-page');
if(_page){
  _page.addEventListener('scroll',()=>{
    if(!scrollTicking){
      requestAnimationFrame(handleHeaderScroll);
      scrollTicking=true;
    }
  },{passive:true});
}
// Fallback for window scroll (in case pkc-page isn't the scroller)
window.addEventListener('scroll',()=>{
  if(!scrollTicking){
    requestAnimationFrame(handleHeaderScroll);
    scrollTicking=true;
  }
},{passive:true});

/* ══════════════════════
   TOAST
══════════════════════ */
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');
  clearTimeout(toastTimer);
  t.textContent=msg;
  t.classList.add('show');
  toastTimer=setTimeout(()=>t.classList.remove('show'),3000);
}

/* ══════════════════════
   INTERSECTION OBSERVER
══════════════════════ */
let obs;
function observeReveal(){
  if(obs)obs.disconnect();
  obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)e.target.classList.add('visible');
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el=>obs.observe(el));
}

window.addEventListener('DOMContentLoaded',()=>{
  renderMenu();
  updateCartUI();
  setBranchUI();
  observeReveal();
  const track=document.getElementById('marqueeTrack');
  if(track){track.innerHTML+=track.innerHTML;}
});

/* ══════════════════════
   FOOTER ACCORDION
═════════�





/* ══════════════════════
   FOOTER ACCORDION
══════════════════════ */
function toggleFooterCol(headEl){
  if(window.innerWidth>768)return;
  const col=headEl.closest('.pkc-footer-col');
  const isOpen=col.classList.contains('open');
  // Close all
  document.querySelectorAll('.pkc-footer-col.open').forEach(c=>c.classList.remove('open'));
  // Open clicked if it was closed
  if(!isOpen)col.classList.add('open');}