// Navigation
const openNav = document.querySelector('.nav__burger');
const closeNav = document.querySelector('.close-toggle');
const menu = document.querySelector('.nav__menu');
const navContainer = document.querySelector('.nav__menu');
openNav.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left = '0';
    navContainer.style.width = '80%';
})
closeNav.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left = '-480px';
    navContainer.style.width = '0';
})




// AOS
AOS.init()