const cssClasses = {
  formButton: 'button',
  modalWindow: 'modal-window-container',
  closeButton: 'close-button',
  toggleClass: 'is-open',
};

const formMenu = document.querySelector(`.${cssClasses.formButton}`);
const modal = document.querySelector(`.${cssClasses.modalWindow}`);
const closeButton = document.querySelector(`.${cssClasses.closeButton}`);
const menuButtons = document.querySelectorAll(`.${cssClasses.formButton}`);

const toggle = () => modal.classList.toggle(cssClasses.toggleClass);

formMenu.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);
menuButtons.forEach(button => button.addEventListener('click', toggle));

const form = document.querySelector('.modal-form');

// Надіслати данні з форми
form.addEventListener('input', saveFormData);

function saveFormData(event) {
  const formData = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    formData[key] = value.trim();
  });

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.addEventListener('load', loadFormData);

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { name, phone, email, comment } = JSON.parse(savedData);
    form.elements.email.value = email;
    form.elements.phone.value = phone;
    form.elements.name.value = name;
    form.elements.comment.value = comment;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const emailValue = form.elements.email.value.trim();
  const nameValue = form.elements.name.value.trim();
  const phoneValue = form.elements.phone.value.trim();
  const commentValue = form.elements.comment.value.trim();

  if (
    emailValue === '' ||
    nameValue === '' ||
    phoneValue === '' ||
    commentValue === ''
  ) {
    console.log('Please enter your email and message!');
    return;
  }

  console.log({
    name: nameValue,
    phone: phoneValue,
    email: emailValue,
    comment: commentValue,
  });

  form.reset();
}
