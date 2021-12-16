import { createDeleteButton } from '../createButtons.js';

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
  const nameElement = document.createElement('div');
  nameElement.classList.add('w-15');
  nameElement.classList.add('bold');
  nameElement.innerText = firstName;
  divRow.appendChild(nameElement);

  //Create the row with the last_name element
  const lastNameElement = document.createElement('div');
  lastNameElement.classList.add('w-15');
  lastNameElement.classList.add('bold');
  lastNameElement.innerText = lastName;
  divRow.appendChild(lastNameElement);

  //Create the row with the email element
  const emailElement = document.createElement('div');
  emailElement.classList.add('w-25');
  emailElement.innerText = email;
  divRow.appendChild(emailElement);

  //Create the last row element  <div class="table-rows-row with-buttons w-50">
  const lastRow = document.createElement('div');
  lastRow.classList.add('table-rows-row');
  lastRow.classList.add('with-buttons');
  lastRow.classList.add('w-45');
  divRow.appendChild(lastRow);

  //Create the element with the cathphrase element
  const catchPhrase = document.createElement('div');
  catchPhrase.classList.add('w-70');
  catchPhrase.innerText = catchphrase;
  lastRow.appendChild(catchPhrase);

  const dangerButtonClasses = [
    'w-15',
    'align-end',
    'small-button',
    'alert-color',
  ];

  const updateButtonClasses = [
    'w-15',
    'align-end',
    'small-button',
    'success-color',
  ];

  //Create the update button
  createDeleteButton(updateButtonClasses, lastRow, id);
  //Create the delete button
  const deleteButton = createDeleteButton(dangerButtonClasses, lastRow, id);
  //Add event listener to the button
  deleteButton.addEventListener('click', () => deleteUser(id));
}
