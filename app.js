let menuBtn = document.querySelector('.menuBtn');
let navMenu = document.querySelector('.navMenu');
menuBtn.addEventListener('click',()=>{
        navMenu.classList.toggle('active');
})

ScrollReveal().reveal('.newsCards',{delay: 500});