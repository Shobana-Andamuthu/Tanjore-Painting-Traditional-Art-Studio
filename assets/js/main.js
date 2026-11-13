(function () {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const root = document.documentElement;
  const apply = () => { root.dataset.theme = get('theme') || 'light'; root.dir = get('dir') || 'ltr'; };
  apply();
  const I = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const ICON = {
    moon: I('<path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8z"/>'),
    sun: I('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    swap: I('<path d="M4 8h13M14 5l3 3-3 3"/><path d="M20 16H7M10 13l-3 3 3 3"/>'),
    menu: I('<path d="M4 7h16M4 12h16M4 17h16"/>'), close: I('<path d="M6 6l12 12M18 6L6 18"/>'),
    pin: I('<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    phone: I('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
    mail: I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'), clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    ig: I('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>'),
    fb: I('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>'),
    yt: I('<rect x="2.5" y="6" width="19" height="12" rx="3.5"/><path d="M10 9.5l5 2.5-5 2.5z"/>'),
    wa: I('<path d="M3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/>')
  };
  const logo = href => `<a class="logo" href="${href}" aria-label="Swarnam Tanjore Art Studio home"><img class="l-d" src="assets/img/logo.png" alt="Swarnam Tanjore Art Studio" width="900" height="239"><img class="l-l" src="assets/img/logo-dark.png" alt="" aria-hidden="true" width="900" height="243"></a>`;
  const labelToggles = () => {
    const t = $('#theme'), d = $('#dir'), dk = root.dataset.theme === 'dark';
    if (t) { t.innerHTML = dk ? ICON.sun : ICON.moon; t.setAttribute('aria-label', dk ? 'Switch to light mode' : 'Switch to dark mode'); }
    if (d) { d.innerHTML = ICON.swap; d.setAttribute('aria-label', root.dir === 'rtl' ? 'Switch to left-to-right' : 'Switch to right-to-left'); }
  };
  const bindToggles = () => {
    const t = $('#theme'), d = $('#dir');
    if (t) t.onclick = () => { set('theme', root.dataset.theme === 'dark' ? 'light' : 'dark'); apply(); labelToggles(); };
    if (d) d.onclick = () => { set('dir', root.dir === 'rtl' ? 'ltr' : 'rtl'); apply(); labelToggles(); };
    labelToggles();
  };
  const valid = { email: v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v), phone: v => /^[0-9+\s-]{8,15}$/.test(v) };
  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    const L = (h, k, t) => `<li><a href="${h}" class="${page === k ? 'on' : ''}" ${page === k ? 'aria-current="page"' : ''}>${t}</a></li>`;
    const homeOn = page === 'home1' || page === 'home2';
    $('#site-nav').innerHTML = `<nav class="nav" aria-label="Main"><div class="wrap">${logo('index.html')}
      <button class="icon-btn burger" id="burger" aria-label="Toggle menu" aria-expanded="false">${ICON.menu.replace('<svg', '<svg class="m"')}${ICON.close.replace('<svg', '<svg class="x"')}</button>
      <div class="panel" id="panel"><ul class="links"><li class="dd" id="dd"><button class="dd-btn ${homeOn ? 'on' : ''}" aria-expanded="false">Home <span aria-hidden="true">▾</span></button>
      <ul class="dd-menu"><li><a href="index.html" class="${page === 'home1' ? 'on' : ''}">Home 1<small>Gold-leaf showcase</small></a></li><li><a href="home-2.html" class="${page === 'home2' ? 'on' : ''}">Home 2<small>Studio stories</small></a></li></ul></li>
      ${L('about.html', 'about', 'About')}${L('gallery.html', 'gallery', 'Gallery')}${L('custom-orders.html', 'orders', 'Custom Orders')}${L('contact.html', 'contact', 'Contact')}</ul>
      <div class="actions"><button class="icon-btn" id="theme" title="Light / dark"></button><button class="icon-btn" id="dir" title="Text direction"></button><a class="btn btn-p" href="contact.html#commission">Commission Art</a></div></div></div></nav>`;
    const soc = (l, i) => `<a href="#" aria-label="${l}">${ICON[i]}</a>`;
    $('#site-footer').innerHTML = `<footer class="foot"><div class="strip"></div><div class="wrap"><div class="cols">
      <div>${logo('index.html')}<p style="margin-top:16px">Hand-crafted Tanjore paintings in 22-carat gold leaf, made in Thanjavur by master artists and gifted to homes, temples and collectors worldwide.</p><div class="soc">${soc('Instagram', 'ig')}${soc('Facebook', 'fb')}${soc('YouTube', 'yt')}${soc('WhatsApp', 'wa')}</div></div>
      <div><h4>Explore</h4><ul><li><a href="index.html">Home 1</a></li><li><a href="home-2.html">Home 2</a></li><li><a href="about.html">About</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="custom-orders.html">Custom Orders</a></li><li><a href="contact.html">Contact</a></li></ul></div>
      <div><h4>Visit the studio</h4><ul class="ct"><li>${ICON.pin}<span>Swarnam Tanjore Art Studio, 14 West Main Street, Thanjavur, Tamil Nadu 613001</span></li><li>${ICON.phone}<a href="tel:+914362555018">+91 4362 555 018</a></li><li>${ICON.mail}<a href="mailto:studio@swarnamart.example">studio@swarnamart.example</a></li><li>${ICON.clock}<span>Mon–Sat 10 AM – 7 PM · Sun by appointment</span></li></ul></div>
      <div><h4>Studio notes</h4><p>New collections, festival offers and behind-the-scenes stories, once a month.</p><form class="news" id="news" novalidate><input id="news-e" type="email" placeholder="Email address" aria-label="Email address"><button class="btn btn-p" type="submit">Subscribe</button></form><div class="news-m" id="news-m" role="status"></div></div>
      </div><div class="copy">© 2026 Swarnam Tanjore Art Studio. All rights reserved. · Privacy · Terms · Shipping &amp; returns</div></div></footer><button class="top" id="top" aria-label="Back to top">↑</button>`;
    const panel = $('#panel'), burger = $('#burger'), dd = $('#dd');
    const closeDD = () => { dd.classList.remove('open'); $('.dd-btn', dd).setAttribute('aria-expanded', 'false'); };
    const closeMenu = () => { panel.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); closeDD(); };
    burger.onclick = () => { const o = panel.classList.toggle('open'); burger.setAttribute('aria-expanded', o); if (!o) closeDD(); };
    $('.dd-btn', dd).onclick = e => { e.stopPropagation(); const o = dd.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o); };
    panel.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('click', e => { if (!dd.contains(e.target)) closeDD(); if (!e.target.closest('.nav')) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    const top = $('#top'); addEventListener('scroll', () => top.classList.toggle('show', scrollY > 400), { passive: true }); top.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
    $('#news').addEventListener('submit', e => { e.preventDefault(); $('#news-m').textContent = valid.email($('#news-e').value.trim()) ? 'Thank you for subscribing. Your first studio note arrives this month.' : 'Please enter a valid email address.'; });
    bindToggles();
    $$('details').forEach(d => d.addEventListener('toggle', () => { if (d.open) $$('details').forEach(o => { if (o !== d && o.parentElement === d.parentElement) o.open = false; }); }));
    const cf = $('#commission');
    if (cf) cf.addEventListener('submit', e => {
      e.preventDefault(); let ok = true;
      const chk = (id, test, m) => { const el = $('#' + id), er = $('#' + id + '-e'), bad = !test(el.value.trim()); el.classList.toggle('bad', bad); er.textContent = bad ? m : ''; if (bad) ok = false; };
      chk('c-name', v => v.length > 1, 'Please enter your full name.'); chk('c-email', valid.email, 'Enter a valid email address.'); chk('c-phone', valid.phone, 'Enter a valid phone number.');
      chk('c-theme', v => v !== '', 'Choose a theme or deity.'); chk('c-size', v => v !== '', 'Choose a painting size.');
      const m = $('#c-msg'); m.classList.add('show');
      m.textContent = ok ? 'Thank you, ' + $('#c-name').value.trim().split(' ')[0] + '. Your commission request has been received. Our master artist will reply within two working days with a sketch plan and quotation.' : 'Please fix the highlighted fields.';
    });
    const LD = $('#loader');
    if (LD) { const t0 = performance.now(); let gone = false; const done = () => { if (gone) return; gone = true; setTimeout(() => { LD.classList.add('hide'); setTimeout(() => LD.remove(), 600); }, Math.max(0, 450 - (performance.now() - t0))); };
      done(); setTimeout(done, 1200); }
  });
})();
