//DESTROY THE CONTENT INSIDE MODAL CONTENT DIV
export function destroyContentDiv(modalBox, modalContent) {
  modalBox.removeChild(modalContent);
}

//CREATE THE MODAL CONTENT
export function createContentDiv(modalBox, modalContent) {
  modalContent.classList.add('modal-content');
  modalBox.appendChild(modalContent);
}
