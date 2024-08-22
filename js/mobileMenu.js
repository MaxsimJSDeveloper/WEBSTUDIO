const openMobileMenu = document.querySelector('.mobile-menu-open-btn');
const closeMobileMenu = document.querySelector('.mobile-menu-close-btn');
const items = document.querySelectorAll('.mobile-menu-item');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleFunction = () => mobileMenu.classList.toggle('is-open');

openMobileMenu.addEventListener('click', toggleFunction);
closeMobileMenu.addEventListener('click', toggleFunction);
items.forEach(item => item.addEventListener('click', toggleFunction));
