(function(){
var b=document.getElementById('burger'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'סגירת תפריט':'פתיחת תפריט');});
n.addEventListener('click',function(e){if(e.target.tagName==='A'&&!e.target.hasAttribute('data-demo')){n.classList.remove('open');b.setAttribute('aria-expanded','false');}});
var m=document.getElementById('modal'),mp=document.getElementById('m-p'),mc=document.getElementById('m-close'),last=null;
function open_(t){last=document.activeElement;mp.textContent='"'+t+'" הוא חלק מאתר בית ספר פיקטיבי, ולכן הקישור עדיין לא מוביל לשום מקום.';m.hidden=false;mc.focus();}
function close_(){m.hidden=true;if(last)last.focus();}
document.addEventListener('click',function(e){var a=e.target.closest('[data-demo]');if(!a)return;e.preventDefault();var t=(a.querySelector('b')||a).textContent.trim().replace(/\s+/g,' ');n.classList.remove('open');b.setAttribute('aria-expanded','false');open_(t);});
mc.addEventListener('click',close_);m.addEventListener('click',function(e){if(e.target===m)close_();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden)close_();});
var tt=document.querySelector('.to-top');window.addEventListener('scroll',function(){tt.classList.toggle('show',window.scrollY>700);},{passive:true});
})();