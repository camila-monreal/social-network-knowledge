import controllerHome from './controller-home.js';

export default () => {
  const template = `
  <header class="nav-home">
  <i id="icon-menu" class="icon-menu menu"></i>
  <nav id="nav" class="container-menu-burguer disable">
    <ul class="list-menu">
      <li id="home">
        <a href="/#home">Home</a>
      </li>
      <li id="profile">
        <a href="/#profile">Edit profile</a>
      </li>
      <li class="logout-button" id="logout">
        Logout
      </li>
    </ul>
  </nav>
  <h1 class="title-knowledge">Knowledge</h1>
</header>
<main class="mainly-home">
  <section class="box__profile">
    <figure class="profile__avatar">
      <img src="" id="user-avatar" alt="Profile Photo">
    </figure>
    <section class="info__profile">
      <h2 id="user-name">User Name</h2>
      <p id="user-email">User E-mail</p>
    </section>
  </section>
  <section class="home-posts">
    <form id="form-post" class="post-form">
      <input class="post-input" type="text" name="post" placeholder="Write your post!" />
      <section class="buttons-post">
        <section>
          <label id="lock" class="private-checkbox" for="private-selector">
            <i id="icon-lock" class="icon-lock-open"></i>
          </label>
          <input class="selector-checkbox" type="checkbox" id="private-selector" name="audience">
        </section>
        <button class="submit-post-button" type="submit">Share</button>
      </section>
    </form>
    <ul id="list-posts" class="post-feed"></ul>
  </section>
</main>
  `;

  return controllerHome(template);
};
