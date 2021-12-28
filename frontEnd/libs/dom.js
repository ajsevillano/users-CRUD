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
export function createDomElement(elementType, styles, attribute, innerText) {
  const element = document.createElement(elementType);

  //Check if the styles are an array or a string
  typeof styles === 'object'
    ? styles.map((style) => element.classList.add(style))
    : element.classList.add(styles);

  //Check if there is an innerText
  if (innerText) {
    element.innerText = innerText;
  }

  //Check if there is an attribute
  if (attribute) {
    const [attributeId, attributeValue] = attribute;
    element.setAttribute(`${attributeId}`, `${attributeValue}`);
  }
  return element;
}
