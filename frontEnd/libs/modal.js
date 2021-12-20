const modalBox = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');

export default function modal(id) {
  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('fadein');
  modalBox.classList.add('modal-animation-in');

  //Create and h1 with the id inside
  const modalH1 = document.createElement('h1');
  modalH1.innerText = `Modal for the user with id ${id}`;
  modalBox.appendChild(modalH1);

  //Create and button and an event listener to close the modal
  const closeButton = document.createElement('button');
  closeButton.innerText = 'close';
  modalBox.appendChild(closeButton);
  closeButton.addEventListener('click', () => closeModal(modalH1, closeButton));
}

function closeModal(modalH1, closeButton) {
  modalBox.classList.add('modal-animation-out');
  modalBox.classList.remove('modal-animation-in');
  modalContainer.classList.remove('fadein');
  modalContainer.classList.add('hidden');

  //Remove the previous h1 and button
  modalBox.removeChild(modalH1);
  modalBox.removeChild(closeButton);
  setTimeout(() => {
    modalBox.classList.remove('modal-animation-out');
  }, 1000);
}
