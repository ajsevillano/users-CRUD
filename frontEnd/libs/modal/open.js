import { createFormItems } from './createFormItems.js';

const modalBox = document.querySelector('.modal');
const modalContent = document.createElement('div');
const modalContainer = document.querySelector('.modal-container');

export default function modal(
  id,
  catchphrase,
  firstName,
  lastName,
  email,
  timestamp
) {
  createContentDiv();
  activateDarkBackground();
  createFormItems(
    id,
    catchphrase,
    firstName,
    lastName,
    email,
    modalContent,
    modalBox,
    modalContainer,
    timestamp
  );
}

//CREATE THE DIV THAT CONTAINS THE MODAL CONTENT
function createContentDiv() {
  modalContent.classList.add('modal-content');
  modalBox.appendChild(modalContent);
}

//ACTIVATE THE DARK BACKGROUND WHEN MODAL IS OPEN
function activateDarkBackground() {
  //Show the modal container (black background)
  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('fadein');
  modalBox.classList.add('modal-animation-in');
}
