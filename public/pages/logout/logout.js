function error(e) {
    console.log(e);
}

function success() {
    window.location.hash = 'login';
}

async function logout(e) {
    try {
        e.preventDefault();

        await firebase.auth().signOut();

        success();
    } catch (erro) {
        error(e);
    }
}

export default logout;