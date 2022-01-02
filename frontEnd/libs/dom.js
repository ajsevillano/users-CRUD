export function createInputElement(id, value) {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.classList.add('input-modal');
  input.value = value;
  input.type = 'text';
  return input;
}

//DESTROY THE CONTENT INSIDE MODAL CONTENT DIV
export function destroyContentDiv(modalBox, modalContent) {
  modalBox.removeChild(modalContent);
}

//GET ALL THE INPUTS FROM DOM
export function getAllElements(parent, element) {
  const formContainer = document.querySelector(parent);
  const getAllInputs = [...formContainer.querySelectorAll(element)];
  return getAllInputs;
}

//CREATE A READY TO USE DOM ELEMENT
export function createDomElement(elementType, text, attributes) {
  const element = document.createElement(elementType);
  if (attributes) {
    const keys = Object.keys(attributes);
    keys.forEach((key) => {
      element.setAttribute(`${key}`, `${attributes[key]}`);
    });
  }
  element.innerText = text;
  return element;
}
