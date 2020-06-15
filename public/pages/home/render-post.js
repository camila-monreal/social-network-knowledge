import { eventsPost } from './controller.js';

async function renderPosts() {
    const posts = await firebase.firestore()
        .collection('postagens')
        .orderBy('date', 'desc')
        .get();

    const listPosts = document.querySelector('#list-posts');

    listPosts.innerHTML = '';

    let html = [];

    posts.forEach(
        postRef => {
            const li = document.createElement('li');
            const post = postRef.data();
            
            li.innerHTML = `
                <p class="message-post">${post.text}</p>
                <section class="list-buttons">
                    <button class="like-button">
                        ${post.likes}
                        <i class="icon-heart heart-clicked"></i>
                    <button>
                    <button class="edite-button">
                        <i class="icon-pencil"></i>
                    </button>
                    <button class="delete-button">
                        <i class="icon-bin"></i>
                    </button>
                </section> 
            `;

            li.id = postRef.id;
            li.classList.add('list');
            li.post = post;

            if (postRef.data().private === false) {
                html.push(li);
            } 
            else if (postRef.data().private === true && postRef.data().user === firebase.auth().currentUser.uid) {
                html.push(li);
            }
            
        },
    )


    listPosts.append(...html);

    eventsPost(listPosts);
}

export default renderPosts;