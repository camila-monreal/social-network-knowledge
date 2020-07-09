async function homeProfile(container) {
    await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            user.providerData.forEach((userProfile) => {
                const userNameInput = container.querySelector('#user-name');
                const userEmailInput = container.querySelector('#user-email');
                const userPhotoInput = container.querySelector('#user-avatar');

                userNameInput.innerHTML = userProfile.displayName;
                userEmailInput.innerHTML = userProfile.email;
                userPhotoInput.src = userProfile.photoURL;
            });
        }
    });
}

export { homeProfile };