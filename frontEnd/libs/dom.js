export function button(cssClasses, lastRow, id, innerText) {
  let Button = document.createElement('button');
  cssClasses.map((element) => Button.classList.add(`${element}`));
  Button.innerText = innerText;
  lastRow.appendChild(Button);
  Button.setAttribute('id', id);
  return Button;
}
