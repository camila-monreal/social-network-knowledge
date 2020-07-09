import routes from './routes.js';

const main = document.querySelector('#root');

const checkUserlogged = () => {
  return firebase.auth().onAuthStateChanged((user) => {
    const internalPages = ['#home', '#profile'];
    if (user != null && internalPages.includes(window.location.hash)) {
      return true;
    }
    return false;
  });
};

function renderPage() {
  let page = window.location.hash.replace('#', '');
  main.innerHTML = '';
  if (!checkUserlogged() || page === '') {
    page = 'login';
  }

  main.appendChild(routes[page]());
}

window.addEventListener('load', renderPage);
window.addEventListener('hashchange', renderPage);
