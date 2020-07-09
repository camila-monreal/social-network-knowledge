import { eventsComments } from '../view/events.js';

export async function printComment(li) {
  const comments = await firebase.firestore()
    .collection('comentarios')
    .orderBy('date', 'desc')
    .get();

  const listOfComments = li.querySelector('.list-comments');

  listOfComments.innerHTML = '';

  const html = [];

  comments.forEach(
    (commentRef) => {
      const list = document.createElement('li');
      const commentData = commentRef.data();

      if (commentData.postId === li.id) {
        list.innerHTML = `
          <p class="message-comment">${commentData.text}</p>
          <button class="like-button">
            ${commentData.likes}
            <i class="icon-heart heart-clicked"></i>
          </button>
          <button class="edit-button">
              <i class="icon-pencil"></i>
          </button>
          <button class="delete-button">
              <i class="icon-bin"></i>
          </button>
        `;
        html.push(list);
      }

      list.id = commentRef.id;
      list.classList.add('comment-post');
    },
  );

  listOfComments.append(...html);

  eventsComments(listOfComments);

  if (listOfComments.querySelector('.comment-post') != null) {
    listOfComments.style.height = '90px';
  }
}

async function newComment(e) {
  e.preventDefault();

  const db = firebase.firestore();
  try {
    await db.collection('comentarios').add({
      postId: e.target.parentElement.id,
      user: firebase.auth().currentUser.uid,
      text: e.target.elements.comment.value,
      likes: 0,
      usersLikesPerComments: [],
      date: Date.now(),
    });

    printComment(e.target.parentElement);
  } catch (erro) {
    console.log(erro);
  }
}

export function renderComment() {
  const form = document.querySelectorAll('.comments');

  form.forEach(formClicked => formClicked.addEventListener('submit', newComment));
}
