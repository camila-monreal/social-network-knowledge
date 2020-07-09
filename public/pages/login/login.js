import authGmail from './auth.js';

function error(e) {
  console.log(e);
}

function success() {
  window.location.hash = '#home';
}

async function login(e) {
  try {
    e.preventDefault();

    const form = e.target.elements;
    const email = form.email.value;
    const password = form.password.value;


    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    await firebase.auth().signInWithEmailAndPassword(email, password);

    success();
  } catch (erro) {
    error(erro);
  }
}

function controllerLogin(template) {
  const container = document.createElement('section');
  container.classList.add('container__form');
  container.innerHTML = template;

  const form = container.querySelector('#form-login');
  const gmail = container.querySelector('#gmail-auth');

  form.addEventListener('submit', login);
  gmail.addEventListener('click', e => authGmail(e));

  return container;
}

export default controllerLogin;
