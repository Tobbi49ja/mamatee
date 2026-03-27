<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>mamateenaija | Authentic Nigerian Cuisine — UK</title>
  <meta name="description" content="Authentic Nigerian cuisine in the UK. Order for pickup or delivery. Jollof rice, soups, stews and more.">
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* HOME — splits into portrait photo left, logo+CTA right, like tastee9ja */
    body { display: flex; flex-direction: column; min-height: 100vh; }

    .home-main {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: calc(100vh - var(--bar-h) - var(--nav-h) - 57px); /* minus footer */
    }

    /* Left — large portrait food photo */
    .home-photo {
      position: relative;
      overflow: hidden;
    }
    .home-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
    }

    /* Right — logo + tagline + buttons */
    .home-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 48px;
      background: var(--white);
      text-align: center;
    }

    .home-logo {
      width: 220px;
      margin: 0 auto 16px;
    }
    /* If no actual image, show text logo */
    .home-logo-text {
      font-family: var(--ff-serif);
      font-size: 2.8rem;
      font-weight: 700;
      color: var(--stone-900);
      line-height: 1;
      margin-bottom: 10px;
    }
    .home-tagline {
      font-size: 0.72rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--stone-500);
      font-weight: 600;
      margin-bottom: 40px;
    }
    .home-btns {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      max-width: 260px;
    }
    .home-btns .btn {
      width: 100%;
      padding: 14px 28px;
      font-size: 0.85rem;
    }

    /* Mobile: stack vertically */
    @media (max-width: 768px) {
      .home-main {
        grid-template-columns: 1fr;
        grid-template-rows: 55vw auto;
        min-height: auto;
      }
      .home-photo { height: 55vw; min-height: 260px; }
      .home-content { padding: 40px 24px; }
      .home-logo-text { font-size: 2rem; }
      .home-btns { flex-direction: row; }
      .home-btns .btn { flex: 1; }
    }
    @media (max-width: 440px) {
      .home-btns { flex-direction: column; }
    }
  </style>
</head>
<body>

<!-- Announcement bar -->
<div class="ann-bar">
  <a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a>
</div>

<!-- Navbar -->
<nav class="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="logo-text-wrap">
        <span class="logo-name">mamateenaija</span>
        <span class="logo-sub">Authentic 9JA Cuisine · UK</span>
      </div>
    </a>

    <div class="nav-links">
      <a href="index.html" class="nav-a active">Home</a>
      <a href="pickup.html" class="nav-a">Order For Pickup</a>
      <div class="nav-drop">
        <button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="drop-menu">
          <a href="category.html?cat=proteins">Proteins</a>
          <a href="category.html?cat=stews">Stews</a>
          <a href="category.html?cat=soups">Soups</a>
          <a href="category.html?cat=rice">Rice</a>
          <a href="category.html?cat=sides">Sides</a>
          <a href="category.html?cat=snacks">Snacks &amp; Desserts</a>
          <a href="category.html?cat=specials">Specials</a>
        </div>
      </div>
      <a href="about.html" class="nav-a">About Us</a>
      <a href="catering.html" class="nav-a">Catering Services</a>
      <a href="feedback.html" class="nav-a">Leave Feedback</a>
      <div class="nav-drop">
        <button class="drop-btn">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="drop-menu" style="left:auto;right:0">
          <a href="contact.html">Contact Us</a>
          <a href="experiences.html">Experiences</a>
        </div>
      </div>
    </div>

    <div class="nav-actions">
      <a href="#" class="nav-login">Log In</a>
      <a href="#" class="nav-cart" aria-label="Cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <span class="cart-badge">0</span>
      </a>
    </div>

    <button class="mob-btn" id="mob-btn" aria-label="Menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>
  <div class="mob-menu" id="mob-menu">
    <a href="index.html" class="active">Home</a>
    <a href="pickup.html">Order For Pickup</a>
    <a href="category.html">Order For Delivery</a>
    <a href="about.html">About Us</a>
    <a href="catering.html">Catering Services</a>
    <a href="feedback.html">Leave Feedback</a>
    <div class="mob-divider"></div>
    <a href="contact.html">Contact Us</a>
    <a href="experiences.html">Experiences</a>
  </div>
</nav>

<!-- HOME HERO — two-column like tastee9ja -->
<main class="home-main">
  <!-- Left: tall portrait food photo -->
  <div class="home-photo">
    <img
      src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=900&h=1200&fit=crop&q=85&auto=format"
      alt="Nigerian cuisine"
    >
  </div>

  <!-- Right: logo + CTA -->
  <div class="home-content">
    <p class="home-logo-text">mamateenaija</p>
    <p class="home-tagline">Authentic 9JA Cuisine</p>
    <div class="home-btns">
      <a href="pickup.html" class="btn btn-dark">Order For Pickup</a>
      <a href="category.html" class="btn btn-outline">Order For Delivery</a>
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="footer">
  <div class="footer-inner">
    <p class="footer-copy">Designed by mamateenaija &copy; 2025</p>
    <nav class="footer-links">
      <a href="#">Shipping Policy</a>
      <a href="#">Shop Policy</a>
      <a href="contact.html">Contact Us</a>
    </nav>
    <div class="footer-socials">
      <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
      <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
    </div>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
/* ===========================================
   mamateenaija — Global Styles
   Matching: tastee9ja.co.uk visual language
   Clean white, warm stone, green accents
   =========================================== */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap');

/* ---- Variables ---- */
:root {
  --white:     #ffffff;
  --bg:        #f9f7f4;
  --stone-50:  #faf9f7;
  --stone-100: #f3efe9;
  --stone-200: #e8e0d5;
  --stone-300: #d4c8b8;
  --stone-500: #9a8870;
  --stone-700: #5c4d3c;
  --stone-900: #ff7f1f;
  --green:     #4a7c59;
  --green-lt:  #e8f0eb;
  --gold:      #b8860b;

  --ff-serif:  'Cormorant Garamond', Georgia, serif;
  --ff-sans:   'Jost', system-ui, sans-serif;

  --bar-h:  38px;
  --nav-h:  80px;
  --trans:  0.2s ease;
  --radius: 4px;
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
}

/* ---- Reset ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--ff-sans);
  background: var(--white);
  color: var(--stone-900);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
img { display: block; max-width: 100%; }
a { text-decoration: none; color: inherit; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
ul { list-style: none; }

/* ============================
   ANNOUNCEMENT BAR
   ============================ */
.ann-bar {
  background: var(--stone-900);
  color: rgba(255,255,255,0.9);
  text-align: center;
  height: var(--bar-h);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  position: sticky;
  top: 0;
  z-index: 300;
}
.ann-bar a {
  color: inherit;
  transition: color var(--trans);
}
.ann-bar a:hover { color: #fff; text-decoration: underline; }

/* ============================
   NAVBAR
   ============================ */
.navbar {
  background: var(--white);
  border-bottom: 1px solid var(--stone-200);
  height: var(--nav-h);
  position: sticky;
  top: var(--bar-h);
  z-index: 200;
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav-logo { display: flex; align-items: center; flex-shrink: 0; }
.logo-img {
  height: 52px;
  width: auto;
  object-fit: contain;
}
.logo-text-wrap { display: flex; flex-direction: column; }
.logo-name {
  font-family: var(--ff-serif);
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--stone-900);
  letter-spacing: 0.01em;
  line-height: 1;
}
.logo-sub {
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--stone-500);
  margin-top: 3px;
}

/* Desktop links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}
.nav-a {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--stone-700);
  padding: 6px 10px;
  border-radius: var(--radius);
  transition: color var(--trans), background var(--trans);
  white-space: nowrap;
}
.nav-a:hover, .nav-a.active { color: var(--stone-900); }

/* Dropdown */
.nav-drop { position: relative; }
.drop-btn {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--stone-700);
  padding: 6px 10px;
  border-radius: var(--radius);
  display: flex; align-items: center; gap: 4px;
  transition: color var(--trans);
  white-space: nowrap;
}
.drop-btn svg { width: 12px; height: 12px; transition: transform var(--trans); }
.nav-drop:hover .drop-btn { color: var(--stone-900); }
.nav-drop:hover .drop-btn svg { transform: rotate(180deg); }
.drop-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: var(--white);
  border: 1px solid var(--stone-200);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  min-width: 180px;
  padding: 6px 0;
  opacity: 0; visibility: hidden;
  transform: translateY(-4px);
  transition: opacity var(--trans), transform var(--trans), visibility var(--trans);
}
.nav-drop:hover .drop-menu,
.nav-drop:focus-within .drop-menu {
  opacity: 1; visibility: visible; transform: translateY(0);
}
.drop-menu a {
  display: block;
  padding: 8px 16px;
  font-size: 0.82rem;
  color: var(--stone-700);
  transition: background var(--trans), color var(--trans);
}
.drop-menu a:hover { background: var(--stone-100); color: var(--stone-900); }

/* Nav actions */
.nav-actions { display: flex; align-items: center; gap: 16px; }
.nav-login {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--stone-700);
  transition: color var(--trans);
}
.nav-login:hover { color: var(--stone-900); }
.nav-cart { position: relative; color: var(--stone-900); }
.nav-cart svg { width: 22px; height: 22px; display: block; }
.cart-badge {
  position: absolute;
  top: -7px; right: -8px;
  background: var(--stone-900);
  color: var(--white);
  font-size: 0.6rem;
  font-weight: 700;
  min-width: 16px; height: 16px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  padding: 0 3px;
  border: 2px solid var(--white);
}
.cart-badge.bump { animation: cbump 0.22s ease; }
@keyframes cbump { 0%,100%{transform:scale(1)} 50%{transform:scale(1.35)} }

/* Mobile button */
.mob-btn {
  display: none;
  color: var(--stone-900);
  padding: 6px;
}
.mob-btn svg { width: 24px; height: 24px; }

/* Mobile menu */
.mob-menu {
  display: none;
  background: var(--white);
  border-top: 1px solid var(--stone-200);
  padding: 12px 16px 20px;
}
.mob-menu.open { display: block; }
.mob-menu a {
  display: block;
  padding: 10px 12px;
  font-size: 0.9rem;
  color: var(--stone-700);
  border-radius: var(--radius);
  transition: background var(--trans);
}
.mob-menu a:hover, .mob-menu a.active { background: var(--stone-100); color: var(--stone-900); }
.mob-divider { height: 1px; background: var(--stone-200); margin: 8px 0; }

/* ============================
   FOOTER
   ============================ */
.footer {
  background: var(--white);
  border-top: 1px solid var(--stone-200);
  padding: 18px 24px;
}
.footer-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; flex-wrap: wrap;
  align-items: center; justify-content: space-between;
  gap: 12px;
}
.footer-copy { font-size: 0.78rem; color: var(--stone-500); }
.footer-links { display: flex; gap: 20px; }
.footer-links a { font-size: 0.78rem; color: var(--stone-500); transition: color var(--trans); }
.footer-links a:hover { color: var(--stone-900); }
.footer-socials { display: flex; gap: 10px; }
.footer-socials a { color: var(--stone-500); transition: color var(--trans); }
.footer-socials a:hover { color: var(--stone-900); }
.footer-socials svg { width: 18px; height: 18px; }

/* ============================
   SHARED UTILITIES
   ============================ */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* Buttons */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-family: var(--ff-sans);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: 2px;
  padding: 12px 28px;
  transition: background var(--trans), color var(--trans), transform var(--trans);
  cursor: pointer;
  white-space: nowrap;
}
.btn-dark {
  background: var(--stone-900);
  color: var(--white);
}
.btn-dark:hover { background: var(--stone-700); transform: translateY(-1px); }
.btn-outline {
  background: transparent;
  color: var(--stone-900);
  border: 1.5px solid var(--stone-900);
}
.btn-outline:hover { background: var(--stone-900); color: var(--white); }
.btn-green {
  background: var(--green);
  color: var(--white);
}
.btn-green:hover { background: #3d6649; }

/* Form fields */
.field { display: flex; flex-direction: column; gap: 5px; }
.label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--stone-700);
  letter-spacing: 0.03em;
}
.req { color: var(--stone-900); }
.input, .textarea, .select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--stone-300);
  border-radius: var(--radius);
  font-size: 0.88rem;
  color: var(--stone-900);
  background: var(--white);
  outline: none;
  font-family: var(--ff-sans);
  transition: border-color var(--trans);
  appearance: none;
}
.input:focus, .textarea:focus, .select:focus { border-color: var(--stone-700); }
.textarea { resize: vertical; min-height: 90px; }
.select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%235c4d3c' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
  cursor: pointer;
}
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

/* Radio/Checkbox */
.check-row { display: flex; flex-wrap: wrap; gap: 6px 16px; }
.check-item { display: flex; align-items: center; gap: 6px; cursor: pointer; }
.check-item input { width: 15px; height: 15px; accent-color: var(--stone-900); cursor: pointer; }
.check-item span { font-size: 0.86rem; color: var(--stone-700); }

/* Status dot */
.dot-green {
  display: inline-block; width: 8px; height: 8px;
  border-radius: 50%; background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34,197,94,0.18);
  animation: glow 2s infinite;
  flex-shrink: 0;
}
@keyframes glow {0%,100%{box-shadow:0 0 0 3px rgba(34,197,94,.18)}50%{box-shadow:0 0 0 5px rgba(34,197,94,.08)}}

/* Product card — matches tastee9ja exactly */
.card {
  background: var(--white);
  border: 1px solid var(--stone-200);
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow var(--trans);
}
.card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.10); }
.card-thumb { width: 100%; aspect-ratio: 1; overflow: hidden; }
.card-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s ease; }
.card:hover .card-thumb img { transform: scale(1.04); }
.card-body { padding: 14px 16px 16px; }
.card-name { font-size: 0.9rem; font-weight: 600; color: var(--stone-900); margin-bottom: 4px; line-height: 1.3; }
.card-price { font-size: 0.88rem; color: var(--stone-700); margin-bottom: 10px; }
.card-price span { font-weight: 600; }
.card-add {
  width: 100%;
  padding: 9px;
  background: var(--stone-900);
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: var(--radius);
  transition: background var(--trans);
  font-family: var(--ff-sans);
}
.card-add:hover { background: var(--stone-700); }

/* Notice bar */
.notice {
  background: #fef9ec;
  border: 1px solid #f0d990;
  border-radius: var(--radius);
  padding: 10px 14px;
  font-size: 0.82rem;
  color: #7a5c00;
  line-height: 1.5;
}

/* Scroll reveal */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; }
.reveal.vis { opacity: 1; transform: translateY(0); }
.d1 { transition-delay: 0.1s; }
.d2 { transition-delay: 0.2s; }
.d3 { transition-delay: 0.3s; }

/* ============================
   RESPONSIVE
   ============================ */
@media (max-width: 1024px) {
  .nav-links, .nav-actions { display: none; }
  .mob-btn { display: flex; align-items: center; justify-content: center; }
  .grid3 { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .grid2, .grid3 { grid-template-columns: 1fr; }
}
