import renderPosts from './render-post.js'

export async function countLikes(e) {
    e.preventDefault();

    const doc = await firebase.firestore().collection('postagens')
        .doc(e.target.parentElement.parentElement.id);

    const post = await doc.get();

    const usersId = post.data().usersLikesPerPost;
    const currentUser = firebase.auth().currentUser.uid;
    if (usersId.includes(currentUser)) {
        await doc.update({
            likes: post.data().likes - 1,
            usersLikesPerPost: firebase.firestore.FieldValue.arrayRemove(currentUser),
        });
    } else {
        await doc.update({
            likes: post.data().likes + 1,
            usersLikesPerPost: firebase.firestore.FieldValue.arrayUnion(currentUser),
        });
    }
    renderPosts();
}

export async function likes(e) {
    e.preventDefault();

    const db = firebase.firestore();

    const doc = await db.collection('comentarios').doc(e.target.parentElement.id);

    const comments = await doc.get();

    const usersId = comments.data().usersLikesPerComments;
    const currentUser = firebase.auth().currentUser.uid;
    if (usersId.includes(currentUser)) {
        await doc.update({
            likes: comments.data().likes - 1,
            usersLikesPerComments: firebase.firestore.FieldValue.arrayRemove(currentUser),
        });
    } else {
        await doc.update({
            likes: comments.data().likes + 1,
            usersLikesPerComments: firebase.firestore.FieldValue.arrayUnion(currentUser),
        });
    }
    renderPosts();
}
