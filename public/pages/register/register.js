import authGmail from '../login/auth.js';

function success() {
  window.location.hash = 'home';
}

function error(erro) {
  console.log(erro);
}

async function registerEmailAndPassword(e) {
  try {
    e.preventDefault();

    const form = e.target.elements;
    const email = form.email.value;
    const password = form.password.value;

    await firebase.auth().createUserWithEmailAndPassword(email, password);

    success();
  } catch (erro) {
    error(erro);
  }
}

function controllerRegister(template) {
  const container = document.createElement('div');
  container.classList.add('container__form');
  container.innerHTML = template;

  const form = container.querySelector('#form-register');
  const gmail = container.querySelector('#gmail-auth');

  form.addEventListener('submit', registerEmailAndPassword);

  gmail.addEventListener('click', e => authGmail(e));

  return container;
}

export default controllerRegister;
