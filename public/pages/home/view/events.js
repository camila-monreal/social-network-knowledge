import { countLikes, likes } from '../post/likes.js'
import { editPost, edit, editAudience, deletePost, deletes, } from '../post/edit-post.js'


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

function eventsPost(listPosts) {
    listPosts.querySelectorAll('button.like-button').forEach(button => button.addEventListener('click', countLikes));
    listPosts.querySelectorAll('button.edit-button').forEach(button => button.addEventListener('click', editPost));
    listPosts.querySelectorAll('button.delete-button').forEach(button => button.addEventListener('click', deletePost));
    listPosts.querySelectorAll('button.audience-button').forEach(button => button.addEventListener('click', editAudience));
}

function eventsComments(listComments) {
    listComments.querySelectorAll('button.like-button').forEach(button => button.addEventListener('click', likes));
    listComments.querySelectorAll('button.edit-button').forEach(button => button.addEventListener('click', edit));
    listComments.querySelectorAll('button.delete-button').forEach(button => button.addEventListener('click', deletes));
}

export { logout, eventsPost, eventsComments };