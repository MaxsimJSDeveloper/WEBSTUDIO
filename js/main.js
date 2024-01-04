const cssClasses = {
  formButton: 'button',
  modal: 'modal-window-container',
  closeButton: 'close-button',
  toggleClass: 'is-open',
};

const burgerMenu = document.querySelector(`.${cssClasses.formButton}`);
const modal = document.querySelector(`.${cssClasses.modal}`);
const closeButton = document.querySelector(`.${cssClasses.closeButton}`);
const menuButtons = document.querySelectorAll(`.${cssClasses.menuButtons}`);

const toggle = () => modal.classList.toggle(cssClasses.toggleClass);

burgerMenu.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);
menuButtons.forEach(button => button.addEventListener('click', toggle));
