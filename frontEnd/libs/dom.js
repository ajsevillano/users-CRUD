export function createInputElement(id, value) {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.classList.add('input-modal');
  input.value = value;
  input.type = 'text';
  return input;
}

//GET ALL THE INPUTS FROM DOM
export function getAllElements(parent, element) {
  const formContainer = document.querySelector(parent);
  const getAllInputs = formContainer.querySelectorAll(element);
  return getAllInputs;
}

//CREATE A READY TO USE DOM ELEMENT
export function createDomElement(elementType, text, attributes) {
  const element = document.createElement(elementType);
  const keys = Object.keys(attributes);
  keys.forEach((key) => {
    element.setAttribute(`${key}`, `${attributes[key]}`);
  });
  element.innerText = text;
  return element;
}
