<!-- mammateetastykitchen.co.uk -->
"Integrate the following color scheme into my existing restaurant website template: For a Nigerian restaurant in the UK, use vibrant warm colors like red, orange, and yellow to encourage appetite and energy. To give a modern, premium feel suitable for a UK city, combine these with black, gold, or deep navy blue. Optionally, use green to reflect Nigerian heritage and fresh ingredients. Adjust buttons, backgrounds, headings, and accents to follow this palette while keeping the layout and structure of my current template intact."

files below
HTMLs{
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | mamateenaija</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* About */
    .about-hero { height: 220px; overflow: hidden; position: relative; }
    .about-hero img { width:100%;height:100%;object-fit:cover;object-position:center 60%; }
    .about-hero::after { content:'';position:absolute;inset:0;background:rgba(0,0,0,0.38); }
    .about-hero-txt { position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center; }
    .about-hero-txt h1 { font-family:var(--ff-serif);font-size:clamp(2rem,5vw,3.5rem);font-weight:600;color:#fff;text-align:center; }

    .split { display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;padding:64px 0; }
    .split.flip { direction:rtl; } .split.flip>*{direction:ltr;}
    .split-img { position:relative;border-radius:2px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12); }
    .split-img img { width:100%;height:520px;object-fit:cover;display:block; }
    .split-txt h2 { font-family:var(--ff-serif);font-size:clamp(1.8rem,3vw,2.5rem);font-weight:600;margin-bottom:20px;color:var(--stone-900); }
    .split-txt p { font-size:0.9rem;line-height:1.8;color:var(--stone-700);margin-bottom:12px; }
    .founder-q { border-left:3px solid var(--stone-300);padding:12px 16px;margin-top:20px;background:var(--stone-50); }
    .founder-q p { font-family:var(--ff-serif);font-style:italic;font-size:1rem;color:var(--stone-700);margin-bottom:6px; }
    .founder-q cite { font-size:0.82rem;font-weight:600;color:var(--stone-500);font-style:normal; }

    .pillars { display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px; }
    .pillar { display:flex;align-items:center;gap:10px; }
    .pillar-dot { width:32px;height:32px;border-radius:50%;background:var(--stone-100);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0; }
    .pillar span { font-size:0.85rem;font-weight:500;color:var(--stone-900); }

    .cta-strip { background:var(--stone-100);padding:60px 24px;text-align:center; }
    .cta-strip h2 { font-family:var(--ff-serif);font-size:clamp(1.8rem,3vw,2.5rem);font-weight:600;margin-bottom:12px; }
    .cta-strip p { font-size:0.9rem;color:var(--stone-700);max-width:540px;margin:0 auto 28px;line-height:1.7; }
    .cta-btns { display:flex;gap:12px;justify-content:center;flex-wrap:wrap; }

    @media(max-width:768px){
      .split{grid-template-columns:1fr;gap:28px;padding:40px 0;}
      .split.flip{direction:ltr;}
      .split-img img{height:300px;}
      .pillars{grid-template-columns:1fr;}
    }
  </style>
</head>
<body>
<div class="ann-bar"><a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a></div>
<nav class="navbar"><div class="nav-inner">
  <a href="index.html" class="nav-logo"><div class="logo-text-wrap"><span class="logo-name">mamateenaija</span><span class="logo-sub">Authentic 9JA Cuisine · UK</span></div></a>
  <div class="nav-links">
    <a href="index.html" class="nav-a">Home</a><a href="pickup.html" class="nav-a">Order For Pickup</a>
    <div class="nav-drop"><button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu"><a href="category.html?cat=proteins">Proteins</a><a href="category.html?cat=stews">Stews</a><a href="category.html?cat=soups">Soups</a><a href="category.html?cat=rice">Rice</a><a href="category.html?cat=sides">Sides</a><a href="category.html?cat=snacks">Snacks &amp; Desserts</a><a href="category.html?cat=specials">Specials</a></div></div>
    <a href="about.html" class="nav-a active">About Us</a><a href="catering.html" class="nav-a">Catering Services</a><a href="feedback.html" class="nav-a">Leave Feedback</a>
    <div class="nav-drop"><button class="drop-btn">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu" style="left:auto;right:0"><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div></div>
  </div>
  <div class="nav-actions"><a href="#" class="nav-login">Log In</a><a href="#" class="nav-cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span class="cart-badge">0</span></a></div>
  <button class="mob-btn" id="mob-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
</div>
<div class="mob-menu" id="mob-menu"><a href="index.html">Home</a><a href="pickup.html">Order For Pickup</a><a href="category.html">Order For Delivery</a><a href="about.html" class="active">About Us</a><a href="catering.html">Catering Services</a><a href="feedback.html">Leave Feedback</a><div class="mob-divider"></div><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div>
</nav>

<div class="about-hero">
  <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1400&h=500&fit=crop&q=85&auto=format" alt="About mamateenaija">
  <div class="about-hero-txt"><h1>About Us</h1></div>
</div>

<div class="container">
  <!-- Our Story -->
  <div class="split reveal">
    <div class="split-img"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700&h=900&fit=crop&q=85&auto=format" alt="mamateenaija kitchen"></div>
    <div class="split-txt">
      <h2>Our Story</h2>
      <p>mamateenaija started from a simple craving for home food. From satisfying a deep longing for the rich authentic Naija food while abroad. It's been almost a decade and we've grown from a little kitchen to a thriving UK-based business.</p>
      <p>We are currently based in Coventry, UK where we continue to serve authentic Nigerian cuisine with passion and pride. We deliver top-notch customer service and bring joy to every bite. mamateenaija isn't just about food — it's home in a bowl. We take pride in putting smiles on faces; one bowl at a time.</p>
      <div class="founder-q">
        <p>"We are currently based in Coventry, UK where we continue to serve authentic Nigerian cuisine with passion and pride. mamateenaija isn't just about food — it's home in a bowl."</p>
        <cite>— Mercy Eitaio-Alao, Founder, mamateenaija</cite>
      </div>
    </div>
  </div>

  <!-- Our Commitment -->
  <div class="split flip reveal">
    <div class="split-img"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&h=900&fit=crop&q=85&auto=format" alt="Quality ingredients"></div>
    <div class="split-txt">
      <h2>Our Commitment to Quality</h2>
      <p>At mamateenaija, we are dedicated to delivering home-cooked Nigerian meals made with the freshest ingredients and a whole lot of love. Whether you're craving Jollof rice, smoky party-style dishes, or traditional soups, we ensure that every dish brings the genuine taste of home.</p>
      <p>Every stew is slow-cooked to perfection, every soup is stirred with care, and every grain of rice is cooked with the expertise that only years of experience can bring. We never cut corners — our customers deserve nothing but the best.</p>
      <div class="pillars">
        <div class="pillar"><div class="pillar-dot">🌿</div><span>Fresh Ingredients</span></div>
        <div class="pillar"><div class="pillar-dot">❤️</div><span>Made with Love</span></div>
        <div class="pillar"><div class="pillar-dot">🏆</div><span>Authentic Recipes</span></div>
        <div class="pillar"><div class="pillar-dot">👨‍👩‍👧</div><span>Family Owned</span></div>
      </div>
    </div>
  </div>
</div>

<div class="cta-strip reveal">
  <h2>Join Us for a Taste of Nigeria</h2>
  <p>Customer satisfaction is at the heart of everything we do. Ready to experience the bold flavours of Nigeria? Place your order today and let us bring the taste of home to your table!</p>
  <div class="cta-btns">
    <a href="pickup.html" class="btn btn-dark">Order For Pickup</a>
    <a href="category.html" class="btn btn-outline">Order For Delivery</a>
  </div>
</div>

<footer class="footer"><div class="footer-inner"><p class="footer-copy">Designed by mamateenaija &copy; 2025</p><nav class="footer-links"><a href="#">Shipping Policy</a><a href="#">Shop Policy</a><a href="contact.html">Contact Us</a></nav><div class="footer-socials"><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a></div></div></footer>
<script src="js/main.js"></script>
</body></html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order For Delivery | mamateenaija</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    .page-layout {
      max-width: 1200px; margin: 0 auto;
      padding: 32px 24px 80px;
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 40px;
    }

    /* Sidebar */
    aside {
      position: sticky;
      top: calc(var(--bar-h) + var(--nav-h) + 24px);
      height: fit-content;
    }
    .sidebar-title {
      font-size: 0.85rem; font-weight: 600;
      color: var(--stone-900); margin-bottom: 10px;
    }
    .sidebar-links { display: flex; flex-direction: column; gap: 2px; }
    .sidebar-links a {
      display: flex; align-items: center; justify-content: space-between;
      padding: 7px 10px;
      font-size: 0.84rem;
      color: var(--stone-700);
      border-radius: var(--radius);
      transition: background var(--trans), color var(--trans);
    }
    .sidebar-links a:hover { background: var(--stone-100); }
    .sidebar-links a.active {
      background: var(--stone-100);
      color: var(--stone-900);
      font-weight: 600;
    }
    .sidebar-links a.active::after {
      content: '•';
      color: var(--stone-900);
      font-size: 0.7rem;
    }

    /* Main */
    main {}
    .breadcrumb {
      display: flex; align-items: center; gap: 6px;
      font-size: 0.78rem; color: var(--stone-500);
      margin-bottom: 20px;
    }
    .breadcrumb a { color: var(--stone-500); transition: color var(--trans); }
    .breadcrumb a:hover { color: var(--stone-900); }
    .breadcrumb svg { width: 12px; height: 12px; }
    .page-title {
      font-family: var(--ff-serif);
      font-size: 2.2rem; font-weight: 600;
      color: var(--stone-900); margin-bottom: 28px;
    }

    @media (max-width: 768px) {
      .page-layout { grid-template-columns: 1fr; }
      aside {
        position: static;
        display: flex; align-items: center; gap: 8px;
        flex-wrap: wrap;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--stone-200);
      }
      .sidebar-title { display: none; }
      .sidebar-links { flex-direction: row; flex-wrap: wrap; gap: 4px; }
      .sidebar-links a { padding: 5px 12px; font-size: 0.78rem; }
    }
  </style>
</head>
<body>

<div class="ann-bar"><a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a></div>

<nav class="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="logo-text-wrap"><span class="logo-name">mamateenaija</span><span class="logo-sub">Authentic 9JA Cuisine · UK</span></div>
    </a>
    <div class="nav-links">
      <a href="index.html" class="nav-a">Home</a>
      <a href="pickup.html" class="nav-a">Order For Pickup</a>
      <div class="nav-drop">
        <button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="drop-menu"><a href="category.html?cat=proteins">Proteins</a><a href="category.html?cat=stews">Stews</a><a href="category.html?cat=soups">Soups</a><a href="category.html?cat=rice">Rice</a><a href="category.html?cat=sides">Sides</a><a href="category.html?cat=snacks">Snacks &amp; Desserts</a><a href="category.html?cat=specials">Specials</a></div>
      </div>
      <a href="about.html" class="nav-a">About Us</a>
      <a href="catering.html" class="nav-a">Catering Services</a>
      <a href="feedback.html" class="nav-a">Leave Feedback</a>
      <div class="nav-drop">
        <button class="drop-btn">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="drop-menu" style="left:auto;right:0"><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div>
      </div>
    </div>
    <div class="nav-actions">
      <a href="#" class="nav-login">Log In</a>
      <a href="#" class="nav-cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span class="cart-badge">0</span></a>
    </div>
    <button class="mob-btn" id="mob-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
  </div>
  <div class="mob-menu" id="mob-menu">
    <a href="index.html">Home</a><a href="pickup.html">Order For Pickup</a><a href="category.html" class="active">Order For Delivery</a><a href="about.html">About Us</a><a href="catering.html">Catering Services</a><a href="feedback.html">Leave Feedback</a><div class="mob-divider"></div><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a>
  </div>
</nav>

<div class="page-layout">
  <!-- Sidebar -->
  <aside>
    <p class="sidebar-title">Browse by</p>
    <nav class="sidebar-links" id="sidebar-nav">
      <a href="category.html" id="l-all">All Foods</a>
      <a href="category.html?cat=proteins" id="l-proteins">Proteins</a>
      <a href="category.html?cat=rice" id="l-rice">Rice</a>
      <a href="category.html?cat=sides" id="l-sides">Sides</a>
      <a href="category.html?cat=snacks" id="l-snacks">Snacks &amp; Desserts</a>
      <a href="category.html?cat=soups" id="l-soups">Soups</a>
      <a href="category.html?cat=specials" id="l-specials">Specials</a>
      <a href="category.html?cat=stews" id="l-stews">Stews</a>
    </nav>
  </aside>

  <!-- Products -->
  <main>
    <nav class="breadcrumb">
      <a href="index.html">Home</a>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      <span id="bc-cat">All Foods</span>
    </nav>
    <h1 class="page-title" id="page-title">All Foods</h1>
    <div id="product-grid" class="grid3" style="gap:20px;"></div>
  </main>
</div>

<footer class="footer">
  <div class="footer-inner">
    <p class="footer-copy">Designed by mamateenaija &copy; 2025</p>
    <nav class="footer-links"><a href="#">Shipping Policy</a><a href="#">Shop Policy</a><a href="contact.html">Contact Us</a></nav>
    <div class="footer-socials">
      <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
      <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
    </div>
  </div>
</footer>

<script src="js/main.js"></script>
<script>
const MENU = {
  proteins:[
    {name:'Turkey Stew',price:65,img:'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Gizdodo',price:50,img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Asun',price:55,img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Beef Suya',price:80,img:'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Grilled Fish',price:55,img:'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Chicken Wings Suya',price:80,img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Beef',price:60,img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Goat Meat',price:60,img:'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Turkey Wings',price:50,img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Chicken',price:50,img:'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Ponmo',price:50,img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Assorted Meat',price:60,img:'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Peppered Snails (3 large pcs)',price:40,img:'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=500&fit=crop&q=80&auto=format'},
  ],
  stews:[
    {name:'Chicken Stew',price:40,img:'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Beef Stew',price:45,img:'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Turkey Stew',price:65,img:'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Assorted Stew',price:48,img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop&q=80&auto=format'},
  ],
  soups:[
    {name:'Egusi Soup',price:48,img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Okra Soup',price:42,img:'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Efo Riro',price:45,img:'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Banga Soup',price:45,img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&h=500&fit=crop&q=80&auto=format'},
  ],
  rice:[
    {name:'Party Jollof Rice',price:35,img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Fried Rice',price:38,img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Coconut Rice',price:36,img:'https://images.unsplash.com/photo-1536304993881-ff86e0c9b9c2?w=500&h=500&fit=crop&q=80&auto=format'},
  ],
  sides:[
    {name:'Fried Plantain (10 pcs)',price:12,img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Moi Moi',price:5,img:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Coleslaw',price:8,img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&q=80&auto=format'},
  ],
  snacks:[
    {name:'Small Chops Platter (25 pcs)',price:25,img:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Puff Puff (12 pcs)',price:10,img:'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Chin Chin',price:8,img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=500&fit=crop&q=80&auto=format'},
  ],
  specials:[
    {name:'Weekend Family Pack',price:85,img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop&q=80&auto=format'},
    {name:'Party Pack (feeds 20)',price:250,img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=500&fit=crop&q=80&auto=format'},
  ],
};

const LABELS = {all:'All Foods',proteins:'Proteins',stews:'Stews',soups:'Soups',rice:'Rice',sides:'Sides',snacks:'Snacks & Desserts',specials:'Specials'};

const params = new URLSearchParams(location.search);
const cat = params.get('cat') || 'all';
const label = LABELS[cat] || 'All Foods';

// Active sidebar
const link = document.getElementById(cat === 'all' ? 'l-all' : `l-${cat}`);
if (link) link.classList.add('active');

document.getElementById('bc-cat').textContent = label;
document.getElementById('page-title').textContent = label;
document.title = label + ' | mamateenaija';

const items = cat === 'all' ? Object.values(MENU).flat() : (MENU[cat] || []);
const grid = document.getElementById('product-grid');

grid.innerHTML = items.length ? items.map((item,i) =>
  `<div class="card reveal ${i%3===1?'d1':i%3===2?'d2':''}">
    <div class="card-thumb"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
    <div class="card-body">
      <p class="card-name">${item.name}</p>
      <p class="card-price">Price&nbsp;&nbsp;<span>£${item.price.toFixed(2)}</span></p>
      <button class="card-add" onclick="addToCart('${item.name.replace(/'/g,"\\'")}',${item.price})">Add to Cart</button>
    </div>
  </div>`
).join('') : '<p style="color:var(--stone-500);grid-column:1/-1">No items in this category yet.</p>';
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catering Services | mamateenaija</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* Full-height hero with floating card */
    .cat-hero {
      position: relative;
      height: 100vh; min-height: 600px;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .cat-hero img { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center; }
    .cat-hero::after { content:'';position:absolute;inset:0;background:rgba(0,0,0,0.62); }
    .cat-hero-card {
      position: relative; z-index: 2;
      background: rgba(255,255,255,0.97);
      border-radius: 4px;
      padding: 44px 48px;
      max-width: 600px; width: 90%;
      text-align: center;
      box-shadow: 0 8px 40px rgba(0,0,0,0.25);
    }
    .cat-hero-card h1 { font-family:var(--ff-serif);font-size:clamp(1.6rem,3vw,2.4rem);font-weight:600;color:var(--stone-900);margin-bottom:14px;line-height:1.2; }
    .cat-hero-card p { font-size:0.88rem;color:var(--stone-700);line-height:1.75; }

    /* Two-column form section */
    .catering-body { max-width:1200px;margin:0 auto;padding:60px 24px 80px;display:grid;grid-template-columns:3fr 2fr;gap:48px; }
    .form-heading { font-family:var(--ff-serif);font-size:1.7rem;font-weight:600;color:var(--stone-900);margin-bottom:28px; }
    .form-group { margin-bottom:18px; }
    .form-row { display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px; }
    .sec-label { font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--stone-500);border-bottom:1px solid var(--stone-200);padding-bottom:8px;margin-bottom:14px; }
    .submit-full { width:100%;padding:14px;font-size:0.88rem;letter-spacing:0.04em; }

    /* Right panel — framed image with card inside */
    .panel { position:sticky;top:calc(var(--bar-h) + var(--nav-h) + 24px);height:fit-content; }
    .panel-frame {
      position:relative;border-radius:4px;overflow:hidden;height:560px;
      box-shadow:0 4px 24px rgba(0,0,0,0.15);
    }
    .panel-frame img { width:100%;height:100%;object-fit:cover; }
    .panel-frame::after { content:'';position:absolute;inset:0;background:rgba(0,0,0,0.42); }
    .panel-card {
      position:absolute;inset:24px;z-index:2;
      background:rgba(255,255,255,0.97);
      border-radius:4px;padding:28px;
      display:flex;flex-direction:column;justify-content:center;
    }
    .panel-card h3 { font-family:var(--ff-serif);font-size:1.5rem;font-weight:600;color:var(--stone-900);margin-bottom:12px;line-height:1.2; }
    .panel-card p { font-size:0.86rem;color:var(--stone-700);line-height:1.75;margin-bottom:10px; }

    @media(max-width:900px){ .catering-body{grid-template-columns:1fr;} .panel{position:static;} .panel-frame{height:360px;} }
    @media(max-width:560px){ .cat-hero-card{padding:28px 20px;} .form-row{grid-template-columns:1fr;} }
  </style>
</head>
<body>
<div class="ann-bar"><a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a></div>
<nav class="navbar"><div class="nav-inner">
  <a href="index.html" class="nav-logo"><div class="logo-text-wrap"><span class="logo-name">mamateenaija</span><span class="logo-sub">Authentic 9JA Cuisine · UK</span></div></a>
  <div class="nav-links">
    <a href="index.html" class="nav-a">Home</a><a href="pickup.html" class="nav-a">Order For Pickup</a>
    <div class="nav-drop"><button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu"><a href="category.html?cat=proteins">Proteins</a><a href="category.html?cat=stews">Stews</a><a href="category.html?cat=soups">Soups</a><a href="category.html?cat=rice">Rice</a><a href="category.html?cat=sides">Sides</a><a href="category.html?cat=snacks">Snacks &amp; Desserts</a><a href="category.html?cat=specials">Specials</a></div></div>
    <a href="about.html" class="nav-a">About Us</a><a href="catering.html" class="nav-a active">Catering Services</a><a href="feedback.html" class="nav-a">Leave Feedback</a>
    <div class="nav-drop"><button class="drop-btn">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu" style="left:auto;right:0"><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div></div>
  </div>
  <div class="nav-actions"><a href="#" class="nav-login">Log In</a><a href="#" class="nav-cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span class="cart-badge">0</span></a></div>
  <button class="mob-btn" id="mob-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
</div>
<div class="mob-menu" id="mob-menu"><a href="index.html">Home</a><a href="pickup.html">Order For Pickup</a><a href="category.html">Order For Delivery</a><a href="about.html">About Us</a><a href="catering.html" class="active">Catering Services</a><a href="feedback.html">Leave Feedback</a><div class="mob-divider"></div><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div>
</nav>

<!-- Hero -->
<section class="cat-hero">
  <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&h=1000&fit=crop&q=85&auto=format" alt="Catering">
  <div class="cat-hero-card reveal">
    <h1>Let Us Cater Your Next Event</h1>
    <p>Thank you for your interest in mamateenaija Catering Services. We're excited to bring the rich, vibrant flavours of Nigeria to your special event. Whether you're planning a wedding, corporate function, birthday celebration, or intimate gathering, our team is here to deliver authentic dishes and exceptional service tailored to your needs. Please fill out the form below with as much detail as possible, and a member of our team will get back to you shortly.</p>
  </div>
</section>

<!-- Body -->
<div class="catering-body">
  <!-- Form -->
  <div>
    <h2 class="form-heading">Enquiry Form</h2>
    <form onsubmit="handleSub(event,'Enquiry submitted! We\'ll be in touch within 24–48 hours.')">
      <div class="sec-label">Your Details</div>
      <div class="form-row">
        <div class="form-group"><label class="label">First name <span class="req">*</span></label><input type="text" class="input" required placeholder="First name"></div>
        <div class="form-group"><label class="label">Last name <span class="req">*</span></label><input type="text" class="input" required placeholder="Last name"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="label">Phone <span class="req">*</span></label><input type="tel" class="input" required placeholder="+44 7700 000000"></div>
        <div class="form-group"><label class="label">Email</label><input type="email" class="input" placeholder="you@email.com"></div>
      </div>

      <div class="sec-label" style="margin-top:8px;">Preferred Method Of Contact <span class="req">*</span></div>
      <div class="check-row" style="margin-bottom:18px;">
        <label class="check-item"><input type="radio" name="contact" value="phone" checked><span>Phone</span></label>
        <label class="check-item"><input type="radio" name="contact" value="email"><span>Email</span></label>
        <label class="check-item"><input type="radio" name="contact" value="whatsapp"><span>WhatsApp</span></label>
      </div>

      <div class="sec-label">Event Type</div>
      <div class="check-row" style="margin-bottom:4px;">
        <label class="check-item"><input type="checkbox" value="wedding"><span>Wedding</span></label>
        <label class="check-item"><input type="checkbox" value="birthday"><span>Birthday</span></label>
        <label class="check-item"><input type="checkbox" value="corporate"><span>Corporate Event</span></label>
        <label class="check-item"><input type="checkbox" value="family"><span>Family Gathering</span></label>
        <label class="check-item"><input type="checkbox" value="private"><span>Private Dinner</span></label>
        <label class="check-item" id="other-wrap"><input type="checkbox" id="other-chk"><span>Other</span></label>
      </div>
      <div class="form-group" style="margin-top:10px;"><input type="text" class="input" id="other-txt" placeholder="If other please specify:" style="display:none;"></div>

      <div class="sec-label" style="margin-top:8px;">Event Date &amp; Start Time <span class="req">*</span></div>
      <div class="form-row">
        <div class="form-group"><label class="label">Date <span class="req">*</span></label><input type="date" class="input" required></div>
        <div class="form-group"><label class="label">Time <span class="req">*</span></label><input type="time" class="input" required></div>
      </div>

      <div class="form-group"><label class="label">Event Location <span class="req">*</span></label><input type="text" class="input" required placeholder="Venue name or full address (include city)"></div>
      <div class="form-row">
        <div class="form-group"><label class="label">Number of Guests <span class="req">*</span></label><input type="number" class="input" required min="1" placeholder="Estimated guest count"></div>
        <div class="form-group">
          <label class="label">Indoor or Outdoor? <span class="req">*</span></label>
          <div class="check-row" style="margin-top:10px;">
            <label class="check-item"><input type="radio" name="venue" value="indoor" checked><span>Indoor</span></label>
            <label class="check-item"><input type="radio" name="venue" value="outdoor"><span>Outdoor</span></label>
          </div>
        </div>
      </div>

      <div class="sec-label">Cuisine Preferences <span class="req">*</span></div>
      <div class="check-row" style="margin-bottom:18px;">
        <label class="check-item"><input type="checkbox"><span>Proteins</span></label>
        <label class="check-item"><input type="checkbox"><span>Stews</span></label>
        <label class="check-item"><input type="checkbox"><span>Soups</span></label>
        <label class="check-item"><input type="checkbox"><span>Rice</span></label>
        <label class="check-item"><input type="checkbox"><span>Small Chops</span></label>
        <label class="check-item"><input type="checkbox"><span>Snacks &amp; Desserts</span></label>
        <label class="check-item"><input type="checkbox"><span>Specials</span></label>
      </div>

      <div class="form-group"><label class="label">Budget Range <span style="font-weight:400;color:var(--stone-500)">(Optional)</span></label><input type="text" class="input" placeholder="Helps us tailor a perfect package for you"></div>
      <div class="form-group"><label class="label">Any Special Requests or Notes?</label><textarea class="textarea" rows="4" placeholder="Allergies, dietary restrictions, setup needs, etc."></textarea></div>

      <button type="submit" class="btn btn-dark submit-full">Submit</button>
    </form>
  </div>

  <!-- Panel -->
  <div class="panel">
    <div class="panel-frame">
      <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=700&h=1000&fit=crop&q=85&auto=format" alt="Food">
      <div class="panel-card">
        <h3>We Can't Wait to Serve You!</h3>
        <p>Thank you for considering mamateenaija Catering Services. Once we receive your enquiry, our team will review the details and get in touch within 24–48 hours to discuss your catering needs.</p>
        <p>If you have any urgent questions in the meantime, feel free to reach out to us directly. We look forward to making your event truly unforgettable with a taste of Naija.</p>
      </div>
    </div>
  </div>
</div>

<footer class="footer"><div class="footer-inner"><p class="footer-copy">Designed by mamateenaija &copy; 2025</p><nav class="footer-links"><a href="#">Shipping Policy</a><a href="#">Shop Policy</a><a href="contact.html">Contact Us</a></nav><div class="footer-socials"><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a></div></div></footer>
<script src="js/main.js"></script>
<script>
  document.getElementById('other-chk').addEventListener('change',function(){
    document.getElementById('other-txt').style.display = this.checked ? 'block' : 'none';
  });
  function handleSub(e, msg){ e.preventDefault(); const b=e.target.querySelector('[type=submit]'); const orig=b.textContent; b.textContent='✓ '+msg; b.style.background='#4a7c59'; setTimeout(()=>{b.textContent=orig;b.style.background='';},3500); }
</script>
</body></html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | mamateenaija</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* Hero — tall portrait bg, floating white card overlay */
    .ct-hero {
      position:relative; min-height:680px;
      display:flex;align-items:flex-start;justify-content:flex-end;
      overflow:hidden; padding:60px 60px 60px 40px;
    }
    .ct-hero img {position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 25%;}
    .ct-hero::after {content:'';position:absolute;inset:0;background:rgba(0,0,0,0.46);}
    .ct-hero-left {
      position:absolute;left:60px;top:50%;transform:translateY(-50%);
      z-index:2;color:#fff;
    }
    .ct-hero-left h1 {font-family:var(--ff-serif);font-size:clamp(2.5rem,6vw,5rem);font-weight:600;line-height:1;}

    /* Floating form card on right */
    .ct-card {
      position:relative;z-index:2;
      background:rgba(255,255,255,0.97);
      border-radius:2px;padding:36px 32px;
      width:380px;max-width:90vw;
      box-shadow:0 8px 36px rgba(0,0,0,0.22);
      flex-shrink:0;
    }
    .ct-card p {font-size:0.85rem;color:var(--stone-700);line-height:1.7;margin-bottom:20px;}
    .ct-card h2 {font-family:var(--ff-serif);font-size:1.3rem;font-weight:600;color:var(--stone-900);margin-bottom:16px;}

    /* Info section */
    .ct-info {
      display:grid;grid-template-columns:1fr 1fr;
      background:var(--stone-900);
      color:#fff;
    }
    .ct-info-left {padding:52px 48px;}
    .ct-info-left h2 {font-family:var(--ff-serif);font-size:1.6rem;font-weight:600;margin-bottom:6px;}
    .ct-info-left p {font-size:0.85rem;opacity:0.7;line-height:1.7;margin-bottom:20px;}
    .ct-tags {display:flex;flex-direction:column;gap:4px;margin-bottom:24px;}
    .ct-tags span {font-size:0.82rem;opacity:0.75;}
    .ct-socials {display:flex;gap:10px;margin-top:4px;}
    .ct-socials a {color:rgba(255,255,255,0.7);transition:color var(--trans);}
    .ct-socials a:hover {color:#fff;}
    .ct-socials svg {width:18px;height:18px;}

    /* Framed photo section */
    .ct-info-right {position:relative;overflow:hidden;min-height:380px;}
    .ct-info-right img {width:100%;height:100%;object-fit:cover;}

    @media(max-width:900px){
      .ct-hero{flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;}
      .ct-hero-left{position:static;transform:none;text-align:center;margin-bottom:24px;}
      .ct-card{width:100%;max-width:480px;}
      .ct-info{grid-template-columns:1fr;}
      .ct-info-right{height:280px;}
    }
  </style>
</head>
<body>
<div class="ann-bar"><a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a></div>
<nav class="navbar"><div class="nav-inner">
  <a href="index.html" class="nav-logo"><div class="logo-text-wrap"><span class="logo-name">mamateenaija</span><span class="logo-sub">Authentic 9JA Cuisine · UK</span></div></a>
  <div class="nav-links">
    <a href="index.html" class="nav-a">Home</a><a href="pickup.html" class="nav-a">Order For Pickup</a>
    <div class="nav-drop"><button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu"><a href="category.html?cat=proteins">Proteins</a><a href="category.html?cat=stews">Stews</a><a href="category.html?cat=soups">Soups</a><a href="category.html?cat=rice">Rice</a><a href="category.html?cat=sides">Sides</a><a href="category.html?cat=snacks">Snacks &amp; Desserts</a><a href="category.html?cat=specials">Specials</a></div></div>
    <a href="about.html" class="nav-a">About Us</a><a href="catering.html" class="nav-a">Catering Services</a><a href="feedback.html" class="nav-a">Leave Feedback</a>
    <div class="nav-drop"><button class="drop-btn" style="color:var(--stone-900);font-weight:600;">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu" style="left:auto;right:0"><a href="contact.html" style="font-weight:600;">Contact Us</a><a href="experiences.html">Experiences</a></div></div>
  </div>
  <div class="nav-actions"><a href="#" class="nav-login">Log In</a><a href="#" class="nav-cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span class="cart-badge">0</span></a></div>
  <button class="mob-btn" id="mob-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
</div>
<div class="mob-menu" id="mob-menu"><a href="index.html">Home</a><a href="pickup.html">Order For Pickup</a><a href="category.html">Order For Delivery</a><a href="about.html">About Us</a><a href="catering.html">Catering Services</a><a href="feedback.html">Leave Feedback</a><div class="mob-divider"></div><a href="contact.html" class="active">Contact Us</a><a href="experiences.html">Experiences</a></div>
</nav>

<!-- Hero -->
<section class="ct-hero">
  <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1400&h=1000&fit=crop&q=85&auto=format" alt="Contact mamateenaija">
  <div class="ct-hero-left">
    <h1>Contact<br>Us</h1>
  </div>
  <div class="ct-card reveal">
    <p>We'd love to hear from you! Whether you have a question about our catering services, want to book for an upcoming event, or just want to chat about our menu, we're here to help. Fill out the form below, and a member of our team will get back to you as soon as possible.</p>
    <h2>Make a Reservation</h2>
    <form onsubmit="handleSub(event)">
      <div class="field" style="margin-bottom:12px;"><label class="label">First name <span class="req">*</span></label><input type="text" class="input" required></div>
      <div class="field" style="margin-bottom:12px;"><label class="label">Last name</label><input type="text" class="input"></div>
      <div class="field" style="margin-bottom:12px;"><label class="label">Email <span class="req">*</span></label><input type="email" class="input" required></div>
      <div class="field" style="margin-bottom:16px;"><label class="label">Write a message</label><textarea class="textarea" rows="3"></textarea></div>
      <button type="submit" class="btn btn-dark" style="width:100%;padding:12px;">Submit</button>
    </form>
  </div>
</section>

<!-- Info section -->
<div class="ct-info">
  <div class="ct-info-left">
    <h2>Authentic 9JA Cuisine</h2>
    <div class="ct-tags">
      <span>Weekly Bowls, Small Parties &amp; Events</span>
      <span>Next-Day Delivery Available</span>
      <span>Based in Coventry, UK</span>
    </div>
    <div class="ct-socials">
      <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
      <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
    </div>
  </div>
  <div class="ct-info-right">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=85&auto=format" alt="Food">
  </div>
</div>

<footer class="footer"><div class="footer-inner"><p class="footer-copy">Designed by mamateenaija &copy; 2025</p><nav class="footer-links"><a href="#">Shipping Policy</a><a href="#">Shop Policy</a><a href="contact.html">Contact Us</a></nav><div class="footer-socials"><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a></div></div></footer>
<script src="js/main.js"></script>
<script>
function handleSub(e){e.preventDefault();const b=e.target.querySelector('[type=submit]');b.textContent='✓ Message sent!';b.style.background='#4a7c59';setTimeout(()=>{b.textContent='Submit';b.style.background='';},3500);}
</script>
</body></html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Experiences | mamateenaija</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    .exp-wrap { max-width:1200px;margin:0 auto;padding:40px 24px 80px; }
    .breadcrumb { display:flex;align-items:center;gap:6px;font-size:0.78rem;color:var(--stone-500);margin-bottom:32px; }
    .breadcrumb a { color:var(--stone-500);transition:color var(--trans); }
    .breadcrumb a:hover { color:var(--stone-900); }
    .breadcrumb svg { width:12px;height:12px; }
    .exp-title { font-family:var(--ff-serif);font-size:2.5rem;font-weight:600;color:var(--stone-900);margin-bottom:20px; }
    .exp-msg { font-size:0.92rem;color:var(--stone-700);line-height:1.7; }
  </style>
</head>
<body>
<div class="ann-bar"><a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a></div>
<nav class="navbar"><div class="nav-inner">
  <a href="index.html" class="nav-logo"><div class="logo-text-wrap"><span class="logo-name">mamateenaija</span><span class="logo-sub">Authentic 9JA Cuisine · UK</span></div></a>
  <div class="nav-links">
    <a href="index.html" class="nav-a">Home</a><a href="pickup.html" class="nav-a">Order For Pickup</a>
    <div class="nav-drop"><button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu"><a href="category.html?cat=proteins">Proteins</a><a href="category.html?cat=stews">Stews</a><a href="category.html?cat=soups">Soups</a><a href="category.html?cat=rice">Rice</a><a href="category.html?cat=sides">Sides</a><a href="category.html?cat=snacks">Snacks &amp; Desserts</a><a href="category.html?cat=specials">Specials</a></div></div>
    <a href="about.html" class="nav-a">About Us</a><a href="catering.html" class="nav-a">Catering Services</a><a href="feedback.html" class="nav-a">Leave Feedback</a>
    <div class="nav-drop"><button class="drop-btn">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu" style="left:auto;right:0"><a href="contact.html">Contact Us</a><a href="experiences.html" style="font-weight:600;">Experiences</a></div></div>
  </div>
  <div class="nav-actions"><a href="#" class="nav-login">Log In</a><a href="#" class="nav-cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span class="cart-badge">0</span></a></div>
  <button class="mob-btn" id="mob-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
</div>
<div class="mob-menu" id="mob-menu"><a href="index.html">Home</a><a href="pickup.html">Order For Pickup</a><a href="category.html">Order For Delivery</a><a href="about.html">About Us</a><a href="catering.html">Catering Services</a><a href="feedback.html">Leave Feedback</a><div class="mob-divider"></div><a href="contact.html">Contact Us</a><a href="experiences.html" class="active">Experiences</a></div>
</nav>

<div class="exp-wrap">
  <nav class="breadcrumb">
    <a href="index.html">Home</a>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    <span>Experiences</span>
  </nav>
  <h1 class="exp-title">Experiences</h1>
  <p class="exp-msg">We're not offering any experiences at the moment. Check back soon.</p>
</div>

<footer class="footer"><div class="footer-inner"><p class="footer-copy">Designed by mamateenaija &copy; 2025</p><nav class="footer-links"><a href="#">Shipping Policy</a><a href="#">Shop Policy</a><a href="contact.html">Contact Us</a></nav><div class="footer-socials"><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a></div></div></footer>
<script src="js/main.js"></script>
</body></html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leave Feedback | mamateenaija</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* Hero: photo left, card right — like tastee9ja */
    .fb-hero {
      display: grid; grid-template-columns: 1fr 1fr;
      min-height: 480px;
    }
    .fb-photo { overflow:hidden; }
    .fb-photo img { width:100%;height:100%;object-fit:cover;object-position:center top; }
    .fb-card-wrap {
      display:flex;align-items:center;justify-content:center;
      padding:48px 40px;
      background:var(--white);
    }
    .fb-card { max-width:420px; }
    .fb-card h1 { font-family:var(--ff-serif);font-size:clamp(1.8rem,3vw,2.5rem);font-weight:600;color:var(--stone-900);margin-bottom:14px; }
    .fb-card p { font-size:0.88rem;color:var(--stone-700);line-height:1.75; }

    .fb-form-section { background:var(--bg);padding:52px 24px 80px; }
    .fb-form { max-width:760px;margin:0 auto;background:var(--white);border:1px solid var(--stone-200);border-radius:2px;padding:40px; }

    .stars { display:flex;gap:6px;margin-top:6px; }
    .star { font-size:1.4rem;cursor:pointer;color:var(--stone-200);transition:color var(--trans);line-height:1; }
    .star.on { color:#f0a500; }

    @media(max-width:700px){
      .fb-hero{grid-template-columns:1fr;}
      .fb-photo{height:56vw;}
      .fb-card-wrap{padding:32px 20px;}
      .fb-form{padding:24px 16px;}
    }
  </style>
</head>
<body>
<div class="ann-bar"><a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a></div>
<nav class="navbar"><div class="nav-inner">
  <a href="index.html" class="nav-logo"><div class="logo-text-wrap"><span class="logo-name">mamateenaija</span><span class="logo-sub">Authentic 9JA Cuisine · UK</span></div></a>
  <div class="nav-links">
    <a href="index.html" class="nav-a">Home</a><a href="pickup.html" class="nav-a">Order For Pickup</a>
    <div class="nav-drop"><button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu"><a href="category.html?cat=proteins">Proteins</a><a href="category.html?cat=stews">Stews</a><a href="category.html?cat=soups">Soups</a><a href="category.html?cat=rice">Rice</a><a href="category.html?cat=sides">Sides</a><a href="category.html?cat=snacks">Snacks &amp; Desserts</a><a href="category.html?cat=specials">Specials</a></div></div>
    <a href="about.html" class="nav-a">About Us</a><a href="catering.html" class="nav-a">Catering Services</a><a href="feedback.html" class="nav-a active">Leave Feedback</a>
    <div class="nav-drop"><button class="drop-btn">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button><div class="drop-menu" style="left:auto;right:0"><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div></div>
  </div>
  <div class="nav-actions"><a href="#" class="nav-login">Log In</a><a href="#" class="nav-cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span class="cart-badge">0</span></a></div>
  <button class="mob-btn" id="mob-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
</div>
<div class="mob-menu" id="mob-menu"><a href="index.html">Home</a><a href="pickup.html">Order For Pickup</a><a href="category.html">Order For Delivery</a><a href="about.html">About Us</a><a href="catering.html">Catering Services</a><a href="feedback.html" class="active">Leave Feedback</a><div class="mob-divider"></div><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div>
</nav>

<!-- Hero -->
<div class="fb-hero">
  <div class="fb-photo"><img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&h=900&fit=crop&q=85&auto=format" alt="mamateenaija food"></div>
  <div class="fb-card-wrap">
    <div class="fb-card reveal">
      <h1>Tell Us How We Did</h1>
      <p>Thank you for choosing mamateenaija — we hope every bite brought you closer to home. Your feedback helps us grow, improve, and keep serving up the flavours you love. Whether you want to rave about your favourite dish or suggest how we can do better, we're all ears. It only takes a minute, and it means the world to us!</p>
    </div>
  </div>
</div>

<!-- Form -->
<section class="fb-form-section">
  <div class="fb-form reveal">
    <form onsubmit="handleFb(event)">
      <div class="grid2" style="gap:16px;margin-bottom:16px;">
        <div class="field"><label class="label">Name <span class="req">*</span></label><input type="text" class="input" required></div>
        <div class="field"><label class="label">Email <span class="req">*</span></label><input type="email" class="input" required></div>
      </div>
      <div class="field" style="margin-bottom:16px;"><label class="label">Phone</label><input type="tel" class="input" placeholder="Optional"></div>
      <div class="field" style="margin-bottom:16px;"><label class="label">What did you order? <span class="req">*</span></label><input type="text" class="input" required placeholder="E.g. Jollof rice & beef suya, Puff puff, Efo Riro, etc."></div>

      <div class="field" style="margin-bottom:16px;">
        <label class="label">How did you receive your food? <span class="req">*</span></label>
        <div class="check-row" style="margin-top:8px;">
          <label class="check-item"><input type="radio" name="rcv" value="pickup" required><span>Pickup</span></label>
          <label class="check-item"><input type="radio" name="rcv" value="delivery"><span>Delivery</span></label>
          <label class="check-item"><input type="radio" name="rcv" value="catering"><span>Catering</span></label>
        </div>
      </div>

      <div class="field" style="margin-bottom:16px;">
        <label class="label">How would you rate the taste?</label>
        <div class="stars" id="stars">
          <span class="star" data-v="1">★</span><span class="star" data-v="2">★</span><span class="star" data-v="3">★</span><span class="star" data-v="4">★</span><span class="star" data-v="5">★</span>
        </div>
        <input type="hidden" id="star-v" name="taste">
      </div>

      <div class="grid2" style="gap:16px;margin-bottom:16px;">
        <div class="field"><label class="label">How was the portion size? <span class="req">*</span></label>
          <select class="select" required><option value="">Select…</option><option>Perfect — just right</option><option>Generous — more than expected</option><option>Small — could be more</option></select>
        </div>
        <div class="field"><label class="label">Was your order well packaged? <span class="req">*</span></label>
          <div class="check-row" style="margin-top:10px;">
            <label class="check-item"><input type="radio" name="pkg" value="yes" required><span>Yes</span></label>
            <label class="check-item"><input type="radio" name="pkg" value="no"><span>No</span></label>
          </div>
        </div>
      </div>

      <div class="field" style="margin-bottom:16px;"><label class="label">What did you love most? <span class="req">*</span></label><textarea class="textarea" required rows="3" placeholder="Tell us what stood out…"></textarea></div>
      <div class="field" style="margin-bottom:16px;"><label class="label">Any suggestions or things we could improve? <span class="req">*</span></label><textarea class="textarea" required rows="3" placeholder="How can we serve you better?"></textarea></div>

      <div class="field" style="margin-bottom:24px;">
        <label class="label">Can we share your feedback on our website or social media? <span class="req">*</span></label>
        <div class="check-row" style="margin-top:8px;">
          <label class="check-item"><input type="radio" name="share" value="yes" required><span>Yes</span></label>
          <label class="check-item"><input type="radio" name="share" value="no"><span>No</span></label>
        </div>
      </div>

      <button type="submit" class="btn btn-dark" style="width:100%;padding:13px;">Submit</button>
    </form>
  </div>
</section>

<footer class="footer"><div class="footer-inner"><p class="footer-copy">Designed by mamateenaija &copy; 2025</p><nav class="footer-links"><a href="#">Shipping Policy</a><a href="#">Shop Policy</a><a href="contact.html">Contact Us</a></nav><div class="footer-socials"><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a><a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a></div></div></footer>
<script src="js/main.js"></script>
<script>
let sv = 0;
const stars = document.querySelectorAll('.star');
stars.forEach(s => {
  s.addEventListener('mouseenter',()=> stars.forEach(x=>x.classList.toggle('on',+x.dataset.v<=+s.dataset.v)));
  s.addEventListener('mouseleave',()=> stars.forEach(x=>x.classList.toggle('on',+x.dataset.v<=sv)));
  s.addEventListener('click',()=>{ sv=+s.dataset.v; document.getElementById('star-v').value=sv; stars.forEach(x=>x.classList.toggle('on',+x.dataset.v<=sv)); });
});
function handleFb(e){e.preventDefault();const b=e.target.querySelector('[type=submit]');b.textContent='✓ Thank you for your feedback!';b.style.background='#4a7c59';setTimeout(()=>{b.textContent='Submit';b.style.background='';},3500);}
</script>
</body></html>
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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order For Pickup | mamateenaija</title>
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* Hero */
    .hero {
      position: relative;
      height: 52vh; min-height: 360px;
      overflow: hidden;
      display: flex; align-items: flex-end;
    }
    .hero img {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      object-fit: cover; object-position: center 40%;
    }
    .hero::after { content:''; position:absolute; inset:0; background: rgba(0,0,0,0.45); }
    .hero-txt {
      position: relative; z-index: 2;
      color: #fff; padding: 0 24px 36px;
      max-width: 600px;
    }
    .hero-txt h1 {
      font-family: var(--ff-serif);
      font-size: clamp(1.8rem, 4vw, 3rem);
      font-weight: 600; line-height: 1.15;
      margin-bottom: 8px;
    }
    .hero-txt p { font-size: 0.9rem; opacity: 0.9; line-height: 1.6; }

    /* Order info bar */
    .order-bar {
      background: var(--white);
      border-bottom: 1px solid var(--stone-200);
      padding: 14px 24px;
      position: sticky;
      top: calc(var(--bar-h) + var(--nav-h));
      z-index: 100;
    }
    .order-bar-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; flex-wrap: wrap; gap: 14px;
      align-items: center; justify-content: space-between;
    }
    .order-left { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
    .order-status { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; }
    .order-min { font-size: 0.82rem; color: var(--stone-500); }
    .order-min strong { color: var(--stone-900); }

    /* Mode tabs */
    .mode-tabs { display: flex; border: 1px solid var(--stone-300); border-radius: 2px; overflow: hidden; }
    .mode-tab {
      padding: 6px 16px;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--stone-500);
      background: var(--white);
      border: none;
      cursor: pointer;
      border-right: 1px solid var(--stone-300);
      transition: background var(--trans), color var(--trans);
      font-family: var(--ff-sans);
    }
    .mode-tab:last-child { border-right: none; }
    .mode-tab.active { background: var(--stone-900); color: var(--white); }

    .order-right { display: flex; gap: 20px; flex-wrap: wrap; }
    .order-meta { font-size: 0.8rem; color: var(--stone-500); display: flex; align-items: center; gap: 5px; }
    .order-meta strong { color: var(--stone-900); font-weight: 500; }
    .order-meta button { color: var(--stone-700); font-size: 0.78rem; text-decoration: underline; font-family: var(--ff-sans); cursor: pointer; }

    /* Category sticky bar */
    .cat-bar {
      background: var(--white);
      border-bottom: 1px solid var(--stone-200);
      position: sticky;
      top: calc(var(--bar-h) + var(--nav-h) + 56px);
      z-index: 90;
    }
    .cat-bar-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; align-items: stretch; justify-content: space-between;
    }
    .cat-tabs { display: flex; overflow-x: auto; scrollbar-width: none; gap: 0; }
    .cat-tabs::-webkit-scrollbar { display: none; }
    .cat-tab {
      flex-shrink: 0;
      padding: 14px 16px;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--stone-500);
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: color var(--trans), border-color var(--trans);
      white-space: nowrap;
      font-family: var(--ff-sans);
    }
    .cat-tab:hover { color: var(--stone-900); }
    .cat-tab.active { color: var(--stone-900); border-bottom-color: var(--stone-900); }
    .cat-cart-btn {
      display: flex; align-items: center;
      padding: 0 24px;
      border-left: 1px solid var(--stone-200);
      flex-shrink: 0;
    }
    .cat-cart-btn a {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--stone-900);
      display: flex; align-items: center; gap: 6px;
    }
    .cat-cart-btn a svg { width: 16px; height: 16px; }

    /* Menu sections */
    .menu-wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px 80px; }
    .menu-section { padding-top: 48px; scroll-margin-top: 200px; }

    /* Category banner */
    .cat-banner {
      position: relative; height: 200px;
      border-radius: 2px; overflow: hidden;
      margin-bottom: 16px;
    }
    .cat-banner img { width: 100%; height: 100%; object-fit: cover; }
    .cat-banner::after { content:''; position:absolute; inset:0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); }
    .cat-banner-txt {
      position: absolute; bottom: 16px; left: 20px;
      z-index: 2; color: #fff;
    }
    .cat-banner-txt h2 { font-family: var(--ff-serif); font-size: 1.8rem; font-weight: 600; }
    .cat-banner-txt p { font-size: 0.8rem; opacity: 0.85; margin-top: 2px; }

    .section-cta { text-align: center; padding: 28px 0 0; }

    @media (max-width: 768px) {
      .cat-cart-btn { display: none; }
      .order-bar { padding: 12px 16px; }
    }
  </style>
</head>
<body>

<div class="ann-bar"><a href="pickup.html">Available For UK Delivery &amp; Local Pickup</a></div>

<nav class="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="logo-text-wrap"><span class="logo-name">mamateenaija</span><span class="logo-sub">Authentic 9JA Cuisine · UK</span></div>
    </a>
    <div class="nav-links">
      <a href="index.html" class="nav-a">Home</a>
      <a href="pickup.html" class="nav-a active">Order For Pickup</a>
      <div class="nav-drop">
        <button class="drop-btn">Order For Delivery <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="drop-menu"><a href="category.html?cat=proteins">Proteins</a><a href="category.html?cat=stews">Stews</a><a href="category.html?cat=soups">Soups</a><a href="category.html?cat=rice">Rice</a><a href="category.html?cat=sides">Sides</a><a href="category.html?cat=snacks">Snacks &amp; Desserts</a><a href="category.html?cat=specials">Specials</a></div>
      </div>
      <a href="about.html" class="nav-a">About Us</a>
      <a href="catering.html" class="nav-a">Catering Services</a>
      <a href="feedback.html" class="nav-a">Leave Feedback</a>
      <div class="nav-drop">
        <button class="drop-btn">More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="drop-menu" style="left:auto;right:0"><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a></div>
      </div>
    </div>
    <div class="nav-actions">
      <a href="#" class="nav-login">Log In</a>
      <a href="#" class="nav-cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span class="cart-badge">0</span></a>
    </div>
    <button class="mob-btn" id="mob-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
  </div>
  <div class="mob-menu" id="mob-menu">
    <a href="index.html">Home</a><a href="pickup.html" class="active">Order For Pickup</a><a href="category.html">Order For Delivery</a><a href="about.html">About Us</a><a href="catering.html">Catering Services</a><a href="feedback.html">Leave Feedback</a><div class="mob-divider"></div><a href="contact.html">Contact Us</a><a href="experiences.html">Experiences</a>
  </div>
</nav>

<!-- Hero -->
<section class="hero">
  <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1400&h=800&fit=crop&q=85&auto=format" alt="Nigerian food">
  <div class="hero-txt">
    <h1>Order For Pickup</h1>
    <p>Experience the authentic taste of Nigeria. Pre-order your favourites and collect at your convenience from Coventry.</p>
  </div>
</section>

<!-- Order info bar -->
<div class="order-bar">
  <div class="order-bar-inner">
    <div class="order-left">
      <div class="order-status"><span class="dot-green"></span> Accepting Orders</div>
      <div class="order-min">Min. order — <strong>£50.00</strong></div>
      <div class="mode-tabs">
        <button class="mode-tab active">Pickup</button>
        <button class="mode-tab" onclick="location.href='category.html'">Delivery</button>
        <button class="mode-tab">Dine-In</button>
      </div>
    </div>
    <div class="order-right">
      <div class="order-meta">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Pickup time: <strong>Today, 09:00 – 18:00</strong>
        <button>Change</button>
      </div>
      <div class="order-meta">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Pickup Address: <strong>Coventry</strong>
        <button>Change</button>
      </div>
    </div>
  </div>
</div>

<!-- Category tab bar -->
<div class="cat-bar">
  <div class="cat-bar-inner">
    <div class="cat-tabs" id="cat-tabs">
      <button class="cat-tab" data-target="proteins">Proteins (2 Litres)</button>
      <button class="cat-tab" data-target="stews">Stews (2 Litres)</button>
      <button class="cat-tab" data-target="soups">Soups (2 Litres)</button>
      <button class="cat-tab" data-target="rice">Rice</button>
      <button class="cat-tab" data-target="sides">Sides</button>
      <button class="cat-tab" data-target="snacks">Snacks &amp; Desserts</button>
      <button class="cat-tab" data-target="specials">Specials</button>
    </div>
    <div class="cat-cart-btn">
      <a href="#">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
        View Cart (<span data-cart-count>0</span>)
      </a>
    </div>
  </div>
</div>

<!-- Menu sections -->
<div class="menu-wrap">

  <!-- PROTEINS -->
  <section id="proteins" class="menu-section">
    <div class="cat-banner">
      <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=400&fit=crop&q=80&auto=format" alt="Proteins">
      <div class="cat-banner-txt"><h2>Proteins (2 Litres)</h2><p>Special combination attracts extra cost</p></div>
    </div>
    <div class="notice" style="margin-bottom:20px;">All protein portions come freshly prepared with our signature spices and marinades.</div>
    <div class="grid3" style="gap:20px;">
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=500&h=500&fit=crop&q=80&auto=format" alt="Turkey Stew" loading="lazy"></div><div class="card-body"><p class="card-name">Turkey Stew</p><p class="card-price">Price<span>  £65.00</span></p><button class="card-add" onclick="addToCart('Turkey Stew',65)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop&q=80&auto=format" alt="Gizdodo" loading="lazy"></div><div class="card-body"><p class="card-name">Gizdodo</p><p class="card-price">Price<span>  £50.00</span></p><button class="card-add" onclick="addToCart('Gizdodo',50)">Add to Cart</button></div></div>
      <div class="card reveal d2"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=500&fit=crop&q=80&auto=format" alt="Asun" loading="lazy"></div><div class="card-body"><p class="card-name">Asun</p><p class="card-price">Price<span>  £55.00</span></p><button class="card-add" onclick="addToCart('Asun',55)">Add to Cart</button></div></div>
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&h=500&fit=crop&q=80&auto=format" alt="Beef Suya" loading="lazy"></div><div class="card-body"><p class="card-name">Beef Suya</p><p class="card-price">Price<span>  £80.00</span></p><button class="card-add" onclick="addToCart('Beef Suya',80)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=500&h=500&fit=crop&q=80&auto=format" alt="Peppered Grilled Fish" loading="lazy"></div><div class="card-body"><p class="card-name">Peppered Grilled Fish</p><p class="card-price">Price<span>  £55.00</span></p><button class="card-add" onclick="addToCart('Peppered Grilled Fish',55)">Add to Cart</button></div></div>
      <div class="card reveal d2"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=500&fit=crop&q=80&auto=format" alt="Peppered Chicken" loading="lazy"></div><div class="card-body"><p class="card-name">Peppered Chicken</p><p class="card-price">Price<span>  £50.00</span></p><button class="card-add" onclick="addToCart('Peppered Chicken',50)">Add to Cart</button></div></div>
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=500&fit=crop&q=80&auto=format" alt="Peppered Beef" loading="lazy"></div><div class="card-body"><p class="card-name">Peppered Beef</p><p class="card-price">Price<span>  £60.00</span></p><button class="card-add" onclick="addToCart('Peppered Beef',60)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&h=500&fit=crop&q=80&auto=format" alt="Peppered Goat Meat" loading="lazy"></div><div class="card-body"><p class="card-name">Peppered Goat Meat</p><p class="card-price">Price<span>  £60.00</span></p><button class="card-add" onclick="addToCart('Peppered Goat Meat',60)">Add to Cart</button></div></div>
      <div class="card reveal d2"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop&q=80&auto=format" alt="Peppered Turkey Wings" loading="lazy"></div><div class="card-body"><p class="card-name">Peppered Turkey Wings</p><p class="card-price">Price<span>  £50.00</span></p><button class="card-add" onclick="addToCart('Peppered Turkey Wings',50)">Add to Cart</button></div></div>
    </div>
    <div class="section-cta"><button class="btn btn-dark">Schedule Pickup Time</button></div>
  </section>

  <!-- STEWS -->
  <section id="stews" class="menu-section">
    <div class="cat-banner">
      <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&h=400&fit=crop&q=80&auto=format" alt="Stews">
      <div class="cat-banner-txt"><h2>Stews (2 Litres)</h2><p>All stews contain at least 12 pieces of assorted protein</p></div>
    </div>
    <div class="notice" style="margin-bottom:20px;">All stews contain at least 12 pieces of assorted protein. Special combination attracts extra cost.</div>
    <div class="grid3" style="gap:20px;">
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=500&fit=crop&q=80&auto=format" alt="Chicken Stew" loading="lazy"></div><div class="card-body"><p class="card-name">Chicken Stew</p><p class="card-price">Price<span>  £40.00</span></p><button class="card-add" onclick="addToCart('Chicken Stew',40)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&h=500&fit=crop&q=80&auto=format" alt="Beef Stew" loading="lazy"></div><div class="card-body"><p class="card-name">Beef Stew</p><p class="card-price">Price<span>  £45.00</span></p><button class="card-add" onclick="addToCart('Beef Stew',45)">Add to Cart</button></div></div>
      <div class="card reveal d2"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop&q=80&auto=format" alt="Turkey Stew" loading="lazy"></div><div class="card-body"><p class="card-name">Assorted Stew</p><p class="card-price">Price<span>  £48.00</span></p><button class="card-add" onclick="addToCart('Assorted Stew',48)">Add to Cart</button></div></div>
    </div>
    <div class="section-cta"><button class="btn btn-dark">Schedule Pickup Time</button></div>
  </section>

  <!-- SOUPS -->
  <section id="soups" class="menu-section">
    <div class="cat-banner">
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=400&fit=crop&q=80&auto=format" alt="Soups">
      <div class="cat-banner-txt"><h2>Soups (2 Litres)</h2><p>All soups contain at least 12 pieces of assorted protein</p></div>
    </div>
    <div class="notice" style="margin-bottom:20px;">All soups contain at least 12 pieces of assorted protein. Special combination attracts extra cost.</div>
    <div class="grid3" style="gap:20px;">
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&q=80&auto=format" alt="Egusi Soup" loading="lazy"></div><div class="card-body"><p class="card-name">Egusi Soup</p><p class="card-price">Price<span>  £48.00</span></p><button class="card-add" onclick="addToCart('Egusi Soup',48)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&h=500&fit=crop&q=80&auto=format" alt="Okra Soup" loading="lazy"></div><div class="card-body"><p class="card-name">Okra Soup</p><p class="card-price">Price<span>  £42.00</span></p><button class="card-add" onclick="addToCart('Okra Soup',42)">Add to Cart</button></div></div>
      <div class="card reveal d2"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&h=500&fit=crop&q=80&auto=format" alt="Efo Riro" loading="lazy"></div><div class="card-body"><p class="card-name">Efo Riro</p><p class="card-price">Price<span>  £45.00</span></p><button class="card-add" onclick="addToCart('Efo Riro',45)">Add to Cart</button></div></div>
    </div>
    <div class="section-cta"><button class="btn btn-dark">Schedule Pickup Time</button></div>
  </section>

  <!-- RICE -->
  <section id="rice" class="menu-section">
    <div class="cat-banner">
      <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200&h=400&fit=crop&q=80&auto=format" alt="Rice">
      <div class="cat-banner-txt"><h2>Rice</h2><p>Content can be adjusted to fit your preferences</p></div>
    </div>
    <div class="notice" style="margin-bottom:20px;">Content can be adjusted to fit your preferences and will attract additional cost.</div>
    <div class="grid3" style="gap:20px;">
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop&q=80&auto=format" alt="Jollof Rice" loading="lazy"></div><div class="card-body"><p class="card-name">Party Jollof Rice</p><p class="card-price">Price<span>  £35.00</span></p><button class="card-add" onclick="addToCart('Party Jollof Rice',35)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop&q=80&auto=format" alt="Fried Rice" loading="lazy"></div><div class="card-body"><p class="card-name">Fried Rice</p><p class="card-price">Price<span>  £38.00</span></p><button class="card-add" onclick="addToCart('Fried Rice',38)">Add to Cart</button></div></div>
    </div>
    <div class="section-cta"><button class="btn btn-dark">Schedule Pickup Time</button></div>
  </section>

  <!-- SIDES -->
  <section id="sides" class="menu-section">
    <div class="cat-banner">
      <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&h=400&fit=crop&q=80&auto=format" alt="Sides">
      <div class="cat-banner-txt"><h2>Sides</h2></div>
    </div>
    <div class="grid3" style="gap:20px;">
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=500&fit=crop&q=80&auto=format" alt="Fried Plantain" loading="lazy"></div><div class="card-body"><p class="card-name">Fried Plantain (10 pcs)</p><p class="card-price">Price<span>  £12.00</span></p><button class="card-add" onclick="addToCart('Fried Plantain',12)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop&q=80&auto=format" alt="Moi Moi" loading="lazy"></div><div class="card-body"><p class="card-name">Moi Moi</p><p class="card-price">Price<span>  £5.00</span></p><button class="card-add" onclick="addToCart('Moi Moi',5)">Add to Cart</button></div></div>
    </div>
    <div class="section-cta"><button class="btn btn-dark">Schedule Pickup Time</button></div>
  </section>

  <!-- SNACKS -->
  <section id="snacks" class="menu-section">
    <div class="cat-banner">
      <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&h=400&fit=crop&q=80&auto=format" alt="Snacks">
      <div class="cat-banner-txt"><h2>Snacks &amp; Desserts</h2></div>
    </div>
    <div class="grid3" style="gap:20px;">
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&h=500&fit=crop&q=80&auto=format" alt="Small Chops" loading="lazy"></div><div class="card-body"><p class="card-name">Small Chops Platter (25 pcs)</p><p class="card-price">Price<span>  £25.00</span></p><button class="card-add" onclick="addToCart('Small Chops',25)">Add to Cart</button></div></div>
      <div class="card reveal d1"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop&q=80&auto=format" alt="Puff Puff" loading="lazy"></div><div class="card-body"><p class="card-name">Puff Puff (12 pcs)</p><p class="card-price">Price<span>  £10.00</span></p><button class="card-add" onclick="addToCart('Puff Puff',10)">Add to Cart</button></div></div>
    </div>
    <div class="section-cta"><button class="btn btn-dark">Schedule Pickup Time</button></div>
  </section>

  <!-- SPECIALS -->
  <section id="specials" class="menu-section">
    <div class="cat-banner">
      <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=400&fit=crop&q=80&auto=format" alt="Specials">
      <div class="cat-banner-txt"><h2>Specials</h2></div>
    </div>
    <div class="grid3" style="gap:20px;">
      <div class="card reveal"><div class="card-thumb"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop&q=80&auto=format" alt="Family Pack" loading="lazy"></div><div class="card-body"><p class="card-name">Weekend Family Pack</p><p class="card-price">Price<span>  £85.00</span></p><button class="card-add" onclick="addToCart('Weekend Family Pack',85)">Add to Cart</button></div></div>
    </div>
    <div class="section-cta"><button class="btn btn-dark">Schedule Pickup Time</button></div>
  </section>

</div>

<footer class="footer">
  <div class="footer-inner">
    <p class="footer-copy">Designed by mamateenaija &copy; 2025</p>
    <nav class="footer-links"><a href="#">Shipping Policy</a><a href="#">Shop Policy</a><a href="contact.html">Contact Us</a></nav>
    <div class="footer-socials">
      <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
      <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
    </div>
  </div>
</footer>

<script src="js/main.js"></script>
<script>
  // Tab active on scroll
  const secs = document.querySelectorAll('.menu-section');
  const tabs = document.querySelectorAll('.cat-tab');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
      }
    });
  }, { rootMargin:'-35% 0px -60% 0px' });
  secs.forEach(s => obs.observe(s));

  tabs.forEach(t => t.addEventListener('click', () => {
    document.getElementById(t.dataset.target)?.scrollIntoView({ behavior:'smooth' });
  }));
</script>
</body>
</html>
}
JS{
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

}
CSS{
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
  --stone-900: #1c1209;
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

}

updates to some of the features there!
the company name is mamateetasykitchen so replace "mamateenaija" with "mamateetasykitchen"
make the boxes in the grid section more stylished
and the white boxes in the writeups shld be glass like like "Glassmorphism"
make the overall website beats https://www.tastee9ja.co.uk/ in UI/UX design!

understood?

FrontendSvelte (with SvelteKit)Nearest "feel" to vanilla JS; ultra-fast.StylingTailwind CSSRapid, custom UI without giant CSS files.UI ComponentsSkeletonPre-made, accessible elements (Cart, Modals).AnimationsGSAPFor that "high-end" professional polish.BackendExpress.jsYour current fluency; great for REST APIs.DatabaseMongoDBFlexible schema for varied food menus.PaymentsStripe / PaystackSecure, developer-friendly, and regional.EDIT...we wiill do backend later let's just generate frontend first