export function closeModal(closeModalParams) {
  //Destructuring the params
  const [modalBox, modalContent, modalContainer] = closeModalParams;

  //CLOSE THE MODAL AND SHOW ANIMATION
  modalBox.classList.add('modal-animation-out');
  modalBox.classList.remove('modal-animation-in');
  modalContainer.classList.remove('fadein');
  modalContainer.classList.add('hidden');

  setTimeout(() => {
    modalBox.classList.remove('modal-animation-out');
    //REMOVE THE MODAL CONTENT DIV
    modalBox.removeChild(modalContent);
  }, 1000);
}