import controllerProfile from './controller-profile.js';

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

  <section class="user__edit">
    <figure class="user__avatar">
      <img src="" id="user-avatar" alt="Profile Photo">
    </figure>

    <div class="user__data">
      <div class="profile-edits">
        <label class="label-photo" for="user-photo">Choose photo</label>
        <input type="file" name="avatar" class="choose-photo" id="user-photo" accept="image/png, image/jpeg" />
        <button type="submit" class="profile__button" id="update-user-photo">Update photo</button>
      </div>
      <div class="profile-edits">
        <input value="Name" class="profile__field" id="user-name" />
        <button type="submit" class="profile__button" id="update-user-name">Update name</button>
      </div>
      <div class="profile-edits">
        <input value="Email" class="profile__field" id="user-email" />
        <button type="submit" class="profile__button" id="update-user-email">Update email</button>
      </div>
      <div class="profile-edits">
        <input value="Password" class="profile__field" type="password" id="user-pwd" />
        <button type="submit" class="profile__button" id="update-user-pwd">Update pwd</button>
      </div>
    </div>

  </section>

  <section class="post-profile">
    <ul id="personal-posts" class="post-feed"></ul>
  </section>

</main>
    `;

  return controllerProfile(template);
};
