import closeModal from './close.js';
import { createDomElement } from '../dom.js';

export default function generateSuccesModalContent(modalBox, modalContainer) {
  const modalContentSuccess = document.createElement('div');
  modalContentSuccess.classList.add('modal-content');
  modalBox.appendChild(modalContentSuccess);
  const successMsg = document.createElement('h2');
  successMsg.innerText = 'User updated, Hurray!';
  modalContentSuccess.appendChild(successMsg);

  const closeButton = createDomElement('button', 'Close modal', {
    class: 'button-modal',
    id: 'close-button',
  });

  const closeModalParams = [modalBox, modalContentSuccess, modalContainer];
  closeButton.addEventListener('click', () => closeModal(closeModalParams));
  modalContentSuccess.appendChild(closeButton);
}
