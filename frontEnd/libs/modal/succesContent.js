import closeModal from './close.js';

export default function generateSuccesModalContent(modalBox, modalContainer) {
  const modalContentSuccess = document.createElement('div');
  modalContentSuccess.classList.add('modal-content');
  modalBox.appendChild(modalContentSuccess);
  const successMsg = document.createElement('h2');
  successMsg.innerText = 'User updated, Hurray!';
  modalContentSuccess.appendChild(successMsg);
  const closeButton = document.createElement('button');
  const closeModalParams = [modalBox, modalContentSuccess, modalContainer];
  closeButton.addEventListener('click', () => closeModal(closeModalParams));
  closeButton.classList.add('button-modal');
  closeButton.innerText = 'Close modal';
  modalContentSuccess.appendChild(closeButton);
}
