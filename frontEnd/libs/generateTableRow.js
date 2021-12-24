import { button } from '../button.js';
import modal from '../modal/index.js';

const tableRows = document.querySelector('.table-rows');

export function generateTableRow(
  id,
  firstName,
  lastName,
  email,
  catchphrase,
  deleteUser
) {
  //Create the row div and attach it to table Rows div
  const divRow = document.createElement('div');
  divRow.classList.add('row');
  divRow.setAttribute('id', `row-${id}`);
  tableRows.appendChild(divRow);

  //Create the row with the name element
  generateColums(firstName, divRow, ['w-15', 'bold']);

  //Create the row with the last_name element
  generateColums(lastName, divRow, ['w-15', 'bold']);

  //Create the row with the email element
  generateColums(email, divRow, ['w-25']);

  //Create the last row element  <div class="table-rows-row with-buttons w-50">
  generateLastColumn(
    divRow,
    catchphrase,
    id,
    deleteUser,
    firstName,
    lastName,
    email
  );
}

function generateLastColumn(
  divRow,
  catchphrase,
  id,
  deleteUser,
  firstName,
  lastName,
  email
) {
  const lastRow = document.createElement('div');
  //Create the last row element  <div class="table-rows-row with-buttons w-50">
  lastRow.classList.add('table-rows-row', 'with-buttons', 'w-45');
  //Create the catchphrase column
  generateColums(catchphrase, lastRow, ['w-70']);

  //Create the update button
  const updateButton = button(
    ['w-15', 'align-end', 'small-button', 'success-color'],
    lastRow,
    id,
    'Update'
  );
  //Add event listener to the button
  updateButton.addEventListener('click', () =>
    modal(id, catchphrase, firstName, lastName, email)
  );

  //Create the delete button
  const deleteButton = button(
    ['w-15', 'align-end', 'small-button', 'alert-color'],
    lastRow,
    id,
    'Delete'
  );
  //Add event listener to the button
  deleteButton.addEventListener('click', () => deleteUser(id));
  return divRow.appendChild(lastRow);
}

function generateColums(innerText = '', divRow, styles) {
  const nameElement = document.createElement('div');
  styles.map((element) => nameElement.classList.add(`${element}`));
  nameElement.innerText = innerText;
  divRow.appendChild(nameElement);
  return nameElement;
}
