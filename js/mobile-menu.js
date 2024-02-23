const openMobileMenu = document.querySelector('.mobile-menu-open-btn');
const closeMobileMenu = document.querySelector('.mobile-menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleFunction = () => mobileMenu.classList.toggle('is-open');

openMobileMenu.addEventListener('click', toggleFunction);
closeMobileMenu.addEventListener('click', toggleFunction);
