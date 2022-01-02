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

//DESTROY THE CONTENT INSIDE MODAL CONTENT DIV
export function destroyContentDiv(modalBox, modalContent) {
  modalBox.removeChild(modalContent);
}

//GET ALL THE ELEMENTS FROM A PARENT
export function getAllElements(parent, element) {
  const formContainer = document.querySelector(parent);
  const getAllInputs = [...formContainer.querySelectorAll(element)];
  return getAllInputs;
}
