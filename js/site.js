document.querySelectorAll('[data-menu]').forEach(button=>button.addEventListener('click',()=>{const nav=document.querySelector('.nav');const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open))}));
document.querySelectorAll('[data-language]').forEach(link=>link.addEventListener('click',()=>localStorage.setItem('ts-language',link.dataset.language)));
