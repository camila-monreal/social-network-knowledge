import renderPosts from './render-post.js'

export async function newPost(e) {
    e.preventDefault();

    const db = firebase.firestore();
    try {
        await db.collection('postagens').add({
            user: firebase.auth().currentUser.uid,
            text: e.target.elements.post.value,
            private: e.target.elements.audience.checked,
            likes: 0,
            usersLikesPerPost: [],
            date: Date.now(),
        });
        renderPosts();
    } catch (erro) {
        console.log(erro);
    }
}

export function privatePost() {
    const checkbox = document.querySelector('#private-selector');
    const iconLock = document.querySelector('#icon-lock');

    if (checkbox.checked === true) {
        iconLock.classList.remove('icon-lock-closed');
        iconLock.classList.add('icon-lock-open');
    } else {
        iconLock.classList.remove('icon-lock-open');
        iconLock.classList.add('icon-lock-closed');
    }
}
