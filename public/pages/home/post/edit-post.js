import renderPosts from './render-post.js'

export async function editPost(e) {
    e.preventDefault();

    const fieldPost = e.target.parentElement.parentElement.parentElement.querySelector('.message-post');
    const db = firebase.firestore();
    const id = e.target.parentElement.parentElement.parentElement.id;

    if (fieldPost.getAttribute('contentEditable', true)) {
        fieldPost.setAttribute('contentEditable', false);
        const textContent = fieldPost.textContent;

        await db.collection('postagens').doc(id).set({
            ...e.target.parentElement.parentElement.parentElement.post,
            text: textContent,
        });
        renderPosts();
    } else {
        fieldPost.setAttribute('contentEditable', true);
        fieldPost.focus();
    }
}

export async function edit(e) {
    e.preventDefault();

    const fieldPost = e.target.parentElement.parentElement.querySelector('.message-comment');
    const db = firebase.firestore();
    const id = e.target.parentElement.parentElement.id;

    if (fieldPost.getAttribute('contentEditable', true)) {
        fieldPost.setAttribute('contentEditable', false);
        const textContent = fieldPost.textContent;

        await db.collection('comentarios').doc(id).set(
            { text: textContent }, { merge: true },
        );

        renderPosts();
    } else {
        fieldPost.setAttribute('contentEditable', true);
        fieldPost.focus();
    }
}

export async function editAudience(e) {
    e.preventDefault();
    const db = firebase.firestore();
    const id = e.target.parentElement.parentElement.parentElement.id;
    await db.collection('postagens').doc(id).get().then((doc) => {
        if (doc.exists) {
            db.collection('postagens').doc(id).set({
                ...e.target.parentElement.parentElement.parentElement.post,
                private: !doc.data().private,
            });
            console.log('The post audience was changed');
        } else {
            console.log('No such document!');
        }
    });
    renderPosts();
}

export async function deletePost(e) {
    e.preventDefault();

    const db = await firebase.firestore();
    const id = e.target.parentElement.parentElement.parentElement.id;

    await db.collection('postagens').doc(id).delete().then(() => {
        console.log('Document successfully deleted!');
    })
        .catch(() => {
            console.error('Error removing document: ', error);
        });

    renderPosts();
}

export async function deletes(e) {
    e.preventDefault();

    const db = await firebase.firestore();
    const id = e.target.parentElement.parentElement.id;

    await db.collection('comentarios').doc(id).delete().then(() => {
        console.log('Document successfully deleted!');
    })
        .catch(() => {
            console.error('Error removing document: ', error);
        });

    renderPosts();
}
