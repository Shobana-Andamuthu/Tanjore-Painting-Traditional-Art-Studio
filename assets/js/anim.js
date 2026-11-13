(function(){
  var d=document,r=d.documentElement;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  r.classList.add('js');
  function init(){
    var p=d.createElement('div');p.id='prog';d.body.appendChild(p);
    var groups='.grid,.mosaic,.rowalt,.visits,.split,.spot,.clist,.cap-list';
    var sel='.head,.orn,.card,.art,.tile,.artist,.visit,.slot,.split>*,.spot>*,.mosaic>div,.tbl,.field,.dei,.cta,.btns,.eyebrow+h2,.clist li,.mile,.faq>*,.sec h3';
    var seen=new Set(),els=[];
    d.querySelectorAll('main .sec, main section').forEach(function(sec){
      sec.querySelectorAll(sel).forEach(function(e,i){
        if(seen.has(e)||e.closest('.hero1,.hero2,.phero'))return;
        seen.add(e);
        var par=e.parentElement,idx=Array.prototype.indexOf.call(par.children,e);
        var bt=e.getBoundingClientRect().top;if(bt<innerHeight*0.95)return;
        e.classList.add('rv');
        e.style.setProperty('--d',Math.min(idx,5)*0.05+'s');
        if(e.matches('.split>*:first-child'))e.classList.add(sec.querySelector('.split.rev')?'rv-r':'rv-l');
        else if(e.matches('.split>*:last-child'))e.classList.add(sec.querySelector('.split.rev')?'rv-l':'rv-r');
        els.push(e);
      });
    });
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('rv-in');io.unobserve(x.target)}})},{threshold:0,rootMargin:'0px 0px 120px 0px'});
    els.forEach(function(e){io.observe(e)});
    // safety: reveal anything already in view if the observer misses it
    setInterval(function(){els.forEach(function(e){if(e.classList.contains('rv-in'))return;var t=e.getBoundingClientRect().top;if(t<innerHeight+120)e.classList.add('rv-in')})},500);
    // scroll progress + hero parallax
    var bgs=d.querySelectorAll('.bgslot'),t=false;
    function onS(){t=false;var h=r.scrollHeight-innerHeight;p.style.width=(h>0?scrollY/h*100:0)+'%';
      bgs.forEach(function(b){b.style.backgroundPositionY='calc(50% + '+(scrollY*.25)+'px)'})}
    addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(onS)}},{passive:true});onS();
    // 3D tilt on cards
    if(matchMedia('(hover:hover)').matches)d.querySelectorAll('.art,.tile,.card').forEach(function(c){
      c.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
        c.style.transform='perspective(800px) rotateY('+x*6+'deg) rotateX('+-y*6+'deg) translateY(-6px)'});
      c.addEventListener('mouseleave',function(){c.style.transform=''});
    });
    // re-observe gallery cards rendered later
    var items=d.getElementById('items');
    if(items)new MutationObserver(function(){items.querySelectorAll('.art').forEach(function(a,i){a.style.animation='fadeUp .6s '+(i%6*0.07)+'s backwards'})}).observe(items,{childList:true});
  }
  if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',init);else init();
})();
