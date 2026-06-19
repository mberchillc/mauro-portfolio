document.querySelectorAll('[data-menu]').forEach(button=>button.addEventListener('click',()=>{const nav=document.querySelector('.nav');const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open))}));
document.querySelectorAll('[data-language]').forEach(link=>link.addEventListener('click',()=>localStorage.setItem('ts-language',link.dataset.language)));

if(document.querySelector('.hero')){const refinements=document.createElement('link');refinements.rel='stylesheet';refinements.href=new URL('../css/hero-refinements.css',document.currentScript.src).href;document.head.appendChild(refinements)}

const activeTag=new URLSearchParams(window.location.search).get('tag');
if(activeTag){
  const categoryLinks=[...document.querySelectorAll('.nav a[href*="?tag="]')];
  const activeLink=categoryLinks.find(link=>new URL(link.href,window.location.href).searchParams.get('tag')===activeTag);
  categoryLinks.forEach(link=>link.removeAttribute('aria-current'));
  if(activeLink)activeLink.setAttribute('aria-current','page');

  const items=[...document.querySelectorAll('.filterable[data-tags]')];
  items.forEach(item=>item.hidden=!item.dataset.tags.split(' ').includes(activeTag));
  document.querySelectorAll('[data-filter-section]').forEach(section=>{
    section.hidden=!section.querySelector('.filterable[data-tags]:not([hidden])');
  });

  const hero=document.querySelector('.hero');
  if(hero){
    const notice=document.createElement('div');
    notice.className='filter-notice';
    const label=activeLink?activeLink.textContent:activeTag;
    const resetLabel=document.documentElement.lang==='es'?'Ver todo':'View all';
    notice.innerHTML=`<div class="shell"><strong>${label}</strong> · <a href="${window.location.pathname}">${resetLabel}</a></div>`;
    hero.insertAdjacentElement('afterend',notice);
  }
}

