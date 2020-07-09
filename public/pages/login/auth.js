function authGmail(e) {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  provider.addScope('profile');

  firebase.auth().signInWithPopup(provider)
    .then(
      () => location.hash = 'home',
    )
    .catch(
      error => alert(error),
    );
}

export default authGmail;
