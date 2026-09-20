const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.section,.project').forEach(el=>observer.observe(el));
const style=document.createElement('style');
style.textContent='.section,.project{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}.visible{opacity:1!important;transform:translateY(0)!important}@media(prefers-reduced-motion:reduce){.section,.project{opacity:1;transform:none;transition:none}}';
document.head.appendChild(style);