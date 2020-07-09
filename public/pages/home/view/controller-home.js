import renderPosts from '../post/render-post.js';
import { newPost, privatePost } from '../post/new-post.js';
import { homeProfile } from '../../profile/profile/profile.js';
import logout from '../../logout/logout.js';
import menu from '../../menu/menu.js';

function controllerHome(template) {
  const container = document.createElement('div');
  container.classList.add('home');
  container.innerHTML = template;

  const formPost = container.querySelector('#form-post');
  const buttonLogout = container.querySelector('#logout');
  const iconMenu = container.querySelector('#icon-menu');
  const lock = container.querySelector('#lock');

  renderPosts();

  homeProfile(container);

  formPost.addEventListener('submit', newPost);
  buttonLogout.addEventListener('click', logout);
  iconMenu.addEventListener('click', menu);
  lock.addEventListener('click', privatePost);

  return container;
}

export default controllerHome;