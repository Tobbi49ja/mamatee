/* mamateenaija — main.js */

/* ---- Cart ---- */
const Cart = (() => {
  let items = [];
  try { items = JSON.parse(localStorage.getItem('mtn_cart') || '[]'); } catch(e){}

  const save = () => { try { localStorage.setItem('mtn_cart', JSON.stringify(items)); } catch(e){} };
  const count = () => items.reduce((s,i) => s + i.qty, 0);
  const total = () => items.reduce((s,i) => s + i.price * i.qty, 0);

  const add = (name, price, qty = 1) => {
    const ex = items.find(i => i.name === name);
    if (ex) ex.qty += qty; else items.push({ name, price, qty });
    save(); updateBadges(); toast(`${name} added to cart`);
  };

  const get = () => items;
  const clear = () => { items = []; save(); updateBadges(); };

  return { add, count, total, get, clear };
})();

const updateBadges = () => {
  const n = Cart.count();
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = n;
    b.classList.remove('bump');
    void b.offsetWidth;
    b.classList.add('bump');
  });
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = n);
};

window.addToCart = (name, price) => Cart.add(name, price);
window.Cart = Cart;

/* ---- Toast ---- */
const toast = (msg) => {
  let el = document.getElementById('mtn-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'mtn-toast';
    el.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);background:#1c1209;color:#fff;padding:10px 20px;border-radius:4px;font-size:0.82rem;font-family:inherit;z-index:9999;transition:transform 0.28s ease;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,.2);';
    document.body.appendChild(el);
  }
  el.textContent = '✓  ' + msg;
  el.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.transform = 'translateX(-50%) translateY(80px)'; }, 2600);
};

/* ---- Mobile menu ---- */
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();

  const btn = document.getElementById('mob-btn');
  const menu = document.getElementById('mob-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
  }

  /* Scroll reveal */
  const els = document.querySelectorAll('.reveal');
  if (els.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('vis'));
  }

  /* Active link */
  const p = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-a, .mob-menu a').forEach(a => {
    if (a.getAttribute('href') === p) a.classList.add('active');
  });
});
