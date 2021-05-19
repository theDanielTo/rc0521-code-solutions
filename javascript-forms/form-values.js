const contactForm = document.querySelector('#contact-form');

const userData = {
  name: '',
  email: '',
  message: ''
};

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  userData.name = contactForm.elements.name.value;
  userData.email = contactForm.elements.email.value;
  userData.message = contactForm.elements.message.value;
  console.log(userData);
});
