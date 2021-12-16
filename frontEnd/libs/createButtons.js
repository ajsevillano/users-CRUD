export function createDeleteButton(cssClasses, lastRow, id) {
  let Button = document.createElement('div');
  cssClasses.map((element) => Button.classList.add(`${element}`));
  Button.innerText = 'Delete';
  lastRow.appendChild(Button);
  Button.setAttribute('id', id);
  return Button;
}
