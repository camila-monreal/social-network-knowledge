async function renderProfile(container) {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.providerData.forEach((profile) => {
        const userNameInput = container.querySelector('#user-name');
        const userEmailInput = container.querySelector('#user-email');
        const userPhotoInput = container.querySelector('#user-avatar');

        userNameInput.value = profile.displayName;
        userEmailInput.value = profile.email;
        userPhotoInput.src = profile.photoURL;
      });
    }
  });
}

export default renderProfile;