const cssClasses = {
  formButton: 'button',
  modalWindow: 'modal-window-container',
  closeButton: 'close-button',
  toggleClass: 'is-open',
};

const formMenu = document.querySelector(`.${cssClasses.formButton}`);
const modal = document.querySelector(`.${cssClasses.modalWindow}`);
const closeButton = document.querySelector(`.${cssClasses.closeButton}`);
const menuButtons = document.querySelectorAll(`.${cssClasses.menuButtons}`);

const toggle = () => modal.classList.toggle(cssClasses.toggleClass);

formMenu.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);
menuButtons.forEach(button => button.addEventListener('click', toggle));
