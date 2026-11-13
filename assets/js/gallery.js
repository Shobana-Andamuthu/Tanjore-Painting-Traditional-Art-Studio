(function () {
  const ART = [
    [1, 'Krishna with the Flute', 'Krishna', 'Krishna', '18 × 24 in', 48500, 'Krishna in tribhanga pose beneath a gold-leaf mandapam, set with ruby and emerald stones.', '4 weeks'],
    [2, 'Ganesha on Lotus', 'Ganesha', 'Ganesha', '15 × 18 in', 32000, 'Seated Ganesha on a raised lotus with a jewelled prabhavali and 22k gold relief work.', '3 weeks'],
    [3, 'Gajalakshmi Seated', 'Lakshmi', 'Goddesses', '24 × 30 in', 78000, 'Goddess Lakshmi flanked by two elephants pouring holy water, with detailed gesso ornaments.', '6 weeks'],
    [4, 'Balaji in the Gold Mandapam', 'Balaji', 'Vishnu & Rama', '30 × 40 in', 135000, 'Lord Venkateswara standing in an ornate arch with embossed pillars and semi-precious stones.', '8 weeks'],
    [5, 'Meenakshi Amman', 'Meenakshi', 'Goddesses', '20 × 26 in', 62000, 'The green goddess of Madurai holding the parrot, in a classic Tanjore crimson and gold palette.', '5 weeks'],
    [6, 'Radha Krishna Raasa', 'Radha-Krishna', 'Krishna', '24 × 36 in', 92000, 'Radha and Krishna under a flowering tree, with gopikas and richly raised gold foliage.', '7 weeks'],
    [7, 'Saraswati with Veena', 'Saraswati', 'Goddesses', '16 × 20 in', 41000, 'Goddess of learning seated on a white lotus playing the veena, finished with pearl-like beads.', '4 weeks'],
    [8, 'Murugan with Peacock', 'Murugan', 'Shiva family', '18 × 24 in', 52000, 'Lord Murugan with his vel and peacock mount, framed by a deep teal border.', '5 weeks'],
    [9, 'Baby Krishna with Butter Pot', 'Krishna', 'Krishna', '12 × 15 in', 24000, 'Playful Bala Krishna with a butter pot, a popular gift for nurseries and new homes.', '2 weeks'],
    [10, 'Dancing Ganesha', 'Ganesha', 'Ganesha', '12 × 15 in', 22500, 'A lively Nritya Ganapati with swirling gold drapery and a bold red background.', '2 weeks'],
    [11, 'Ashtalakshmi Panel', 'Lakshmi', 'Goddesses', '36 × 48 in', 185000, 'Eight forms of Lakshmi in a single grand panel with hand-embossed temple architecture.', '12 weeks'],
    [12, 'Venkateswara Face Study', 'Balaji', 'Vishnu & Rama', '15 × 18 in', 36000, 'A close portrait of Lord Venkateswara with a gem-set crown and sacred tilak in gold.', '3 weeks'],
    [13, 'Rama Pattabhishekam', 'Rama', 'Vishnu & Rama', '30 × 36 in', 112000, 'The coronation of Rama with Sita, Lakshmana and Hanuman, in a symmetrical royal court.', '9 weeks'],
    [14, 'Nataraja Cosmic Dance', 'Nataraja', 'Shiva family', '24 × 30 in', 74000, 'Lord Shiva as Nataraja within a ring of fire, with fine gold lines on a deep blue field.', '6 weeks'],
    [15, 'Kamadhenu and Calf', 'Kamadhenu', 'Goddesses', '20 × 24 in', 46000, 'The divine cow with her calf, with deities painted along her body in traditional style.', '4 weeks'],
    [16, 'Annapoorani Devi', 'Annapoorani', 'Goddesses', '18 × 24 in', 44000, 'Goddess of nourishment holding a golden ladle and bowl, in warm gold and saffron tones.', '4 weeks'],
    [17, 'Govardhana Krishna', 'Krishna', 'Krishna', '20 × 26 in', 58000, 'Krishna lifting Govardhana hill on his little finger, with villagers sheltering beneath in raised gold.', '5 weeks'],
    [18, 'Ganesha with Modak', 'Ganesha', 'Ganesha', '15 × 18 in', 31000, 'Ganesha holding a golden modak, seated on a cushion of lotus petals with gem-set ornaments.', '3 weeks'],
    [19, 'Vinayaka in Mandapam', 'Ganesha', 'Ganesha', '24 × 30 in', 69000, 'A grand Vinayaka beneath an embossed temple arch with elephant-head pillars and fine gold work.', '6 weeks'],
    [20, 'Durga on Lion', 'Durga', 'Goddesses', '22 × 28 in', 66000, 'Goddess Durga astride her lion with eight arms raised, in a fiery red and gold palette.', '5 weeks'],
    [21, 'Padmavati Thayar', 'Padmavati', 'Goddesses', '18 × 24 in', 49000, 'The lotus-born consort of Balaji seated on a golden lotus with raised jewellery.', '4 weeks'],
    [22, 'Anantha Shayana Vishnu', 'Vishnu', 'Vishnu & Rama', '24 × 36 in', 88000, 'Vishnu reclining on the serpent Adisesha with Lakshmi at his feet, in deep teal and gold.', '7 weeks'],
    [23, 'Shiva Parvati Family', 'Shiva', 'Shiva family', '24 × 30 in', 76000, 'Shiva and Parvati with Ganesha and Murugan on Mount Kailasa, with gem-set crowns.', '6 weeks'],
    [24, 'Dakshinamurthy', 'Shiva', 'Shiva family', '18 × 24 in', 54000, 'Shiva as the divine teacher beneath a banyan tree, with fine gold line work.', '4 weeks']];

  const IMG = {
    1: ['assets/img/photos/krishna-with-flute.jpg', 'Tanjore painting: Krishna with the Flute'],
    2: ['assets/img/photos/ganesha-on-lotus.jpg', 'Tanjore painting: Ganesha on Lotus'],
    3: ['assets/img/photos/gajalakshmi-seated.jpg', 'Tanjore painting: Gajalakshmi Seated'],
    4: ['assets/img/photos/balaji-gold-mandapam.jpg', 'Tanjore painting: Balaji in the Gold Mandapam'],
    5: ['assets/img/photos/meenakshi-amman.jpg', 'Tanjore painting: Meenakshi Amman'],
    6: ['assets/img/photos/image-16-radha-krishna-tile.jpg', 'Tanjore painting: Radha Krishna Raasa'],
    7: ['assets/img/photos/saraswati-with-veena.jpg', 'Tanjore painting: Saraswati with Veena'],
    8: ['assets/img/photos/murugan-with-peacock.jpg', 'Tanjore painting: Murugan with Peacock'],
    9: ['assets/img/photos/baby-krishna-butter-pot.jpg', 'Tanjore painting: Baby Krishna with Butter Pot'],
    10: ['assets/img/photos/dancing-ganesha.jpg', 'Tanjore painting: Dancing Ganesha'],
    11: ['assets/img/photos/ashtalakshmi-panel.jpg', 'Tanjore painting: Ashtalakshmi Panel'],
    12: ['assets/img/photos/venkateswara-face-study.jpg', 'Tanjore painting: Venkateswara Face Study'],
    13: ['assets/img/photos/rama-pattabhishekam.jpg', 'Tanjore painting: Rama Pattabhishekam'],
    14: ['assets/img/photos/nataraja-cosmic-dance.jpg', 'Tanjore painting: Nataraja Cosmic Dance'],
    15: ['assets/img/photos/kamadhenu-and-calf.jpg', 'Tanjore painting: Kamadhenu and Calf'],
    16: ['assets/img/photos/annapoorani-devi.jpg', 'Tanjore painting: Annapoorani Devi'],
    17: ['assets/img/photos/govardhana-krishna.jpg', 'Tanjore painting: Govardhana Krishna'],
    18: ['assets/img/photos/ganesha-with-modak.jpg', 'Tanjore painting: Ganesha with Modak'],
    19: ['assets/img/photos/vinayaka-in-mandapam.jpg', 'Tanjore painting: Vinayaka in Mandapam'],
    20: ['assets/img/photos/durga-on-lion-v2.jpg', 'Tanjore painting: Durga on Lion'],
    21: ['assets/img/photos/padmavati-thayar.jpg', 'Tanjore painting: Padmavati Thayar'],
    22: ['assets/img/photos/anantha-shayana-vishnu-v2.jpg', 'Tanjore painting: Anantha Shayana Vishnu'],
    23: ['assets/img/photos/shiva-parvati-family-v2.jpg', 'Tanjore painting: Shiva Parvati Family'],
    24: ['assets/img/photos/dakshinamurthy.jpg', 'Tanjore painting: Dakshinamurthy']
  };
  const slot = a => IMG[a[0]] ? `<span class="slot arch r45"><img src="${IMG[a[0]][0]}" alt="${IMG[a[0]][1]}" loading="lazy" decoding="async"></span>` : `<span class="slot arch r45" data-slot="${a[1]}" aria-hidden="true"></span>`;
  const $ = (s, r = document) => r.querySelector(s);
  const rup = n => '₹' + n.toLocaleString('en-IN');
  const st = { f: 'All', q: '', s: 'featured' };
  const cats = ['All', 'Krishna', 'Ganesha', 'Goddesses', 'Vishnu & Rama', 'Shiva family'];
  const area = n => { const m = n.match(/(\d+) × (\d+)/); return m ? m[1] * m[2] : 0; };
  function render() {
    let list = ART.filter(a => (st.f === 'All' || a[3] === st.f) && (!st.q || (a[1] + ' ' + a[2]).toLowerCase().includes(st.q.toLowerCase())));
    if (st.s === 'low') list.sort((a, b) => a[5] - b[5]); else if (st.s === 'high') list.sort((a, b) => b[5] - a[5]); else if (st.s === 'size') list.sort((a, b) => area(b[4]) - area(a[4]));
    $('#count').textContent = list.length + ' of ' + ART.length + ' artworks';
    $('#items').innerHTML = list.length ? list.map(a => `<article class="art">${slot(a)}<span class="chip" style="align-self:center">${a[2]}</span><h3>${a[1]}</h3><p class="meta">${a[4]} · 22k gold leaf</p><div class="price">${rup(a[5])}</div><button class="btn" data-id="${a[0]}">View details</button></article>`).join('') : '<div class="empty">No artworks match your search. Try another theme or keyword.</div>';
  }
  document.addEventListener('DOMContentLoaded', () => {
    $('#filters').innerHTML = cats.map(c => `<button class="${c === 'All' ? 'on' : ''}" data-f="${c}">${c}</button>`).join('');
    $('#filters').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; st.f = b.dataset.f; document.querySelectorAll('#filters button').forEach(x => x.classList.toggle('on', x === b)); render(); });
    $('#q').addEventListener('input', e => { st.q = e.target.value; render(); }); $('#sort').addEventListener('change', e => { st.s = e.target.value; render(); });
    const modal = $('#modal');
    $('#items').addEventListener('click', e => {
      const b = e.target.closest('[data-id]'); if (!b) return; const a = ART.find(x => x[0] === +b.dataset.id);
      $('#mbox').innerHTML = `<button class="x" aria-label="Close" id="mx">×</button>${IMG[a[0]] ? slot(a) : '<span class="slot arch r45" aria-hidden="true"></span>'}<div><span class="chip">${a[2]}</span><h3 style="margin-top:12px;font-size:2rem">${a[1]}</h3><p style="color:var(--muted);margin-top:10px">${a[6]}</p><dl><dt>Size</dt><dd>${a[4]}</dd><dt>Material</dt><dd>22k gold leaf on teak board</dd><dt>Stones</dt><dd>Semi-precious, hand-set</dd><dt>Time</dt><dd>${a[7]}</dd></dl><div class="price-tag"><span>Price</span><b>${rup(a[5])}</b></div><div class="btns"><a class="btn btn-p" href="contact.html#commission">Commission similar</a></div></div>`;
      modal.classList.add('on'); $('#mx').focus();
    });
    modal.addEventListener('click', e => { if (e.target === modal || e.target.id === 'mx') modal.classList.remove('on'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('on'); });
    render();
  });
})();
