import { editName, editEmail, editPwd, uploadAvatar } from '../profile/edit-profile.js';
import renderProfile from '../profile/render-profile.js';
import renderOnlyUserPosts from '../profile/personal-feed.js';
import menu from '../../menu/menu.js';
import logout from '../../logout/logout.js';

function controllerProfile(template) {
    const container = document.createElement('section');
    container.classList.add('profile-section');
    container.innerHTML = template;
    const iconMenu = container.querySelector('#icon-menu');
    const buttonLogout = container.querySelector('#logout')

    container.querySelector('#update-user-name').addEventListener('click', editName);
    container.querySelector('#update-user-email').addEventListener('click', editEmail);
    container.querySelector('#update-user-pwd').addEventListener('click', editPwd);
    container.querySelector('#update-user-photo').addEventListener('click', uploadAvatar);
    iconMenu.addEventListener('click', menu);
    buttonLogout.addEventListener('click', logout);


    renderOnlyUserPosts();
    renderProfile(container);

    return container;
}

export default controllerProfile;
