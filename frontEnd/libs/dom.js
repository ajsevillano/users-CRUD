export function button(cssClasses, lastRow, id, innerText) {
  let Button = document.createElement('button');
  cssClasses.map((element) => Button.classList.add(`${element}`));
  Button.innerText = innerText;
  lastRow.appendChild(Button);
  Button.setAttribute('id', id);
  return Button;
}

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
