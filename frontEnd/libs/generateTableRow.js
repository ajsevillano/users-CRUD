import { createDomElement } from '../dom.js';
import modal from '../modal/index.js';
import { deleteUser } from './crud.js';

const tableRows = document.querySelector('.table-rows');

export function generateTableRow(id, firstName, lastName, email, catchphrase) {
  //Create the div element "Row" & append all the colums
  const divRow = createDomElement('div', 'row', ['id', `row-${id}`]);
  tableRows.appendChild(divRow);
  //Create the row with the name element
  const columnName = createDomElement('div', ['w-15', 'bold'], null, firstName);
  divRow.appendChild(columnName);
  //Create the row with the last_name element
  const columnLastName = createDomElement(
    'div',
    ['w-15', 'bold'],
    null,
    lastName
  );
  divRow.appendChild(columnLastName);
  // //Create the row with the email element
  const columnEmail = createDomElement('div', ['w-25', 'bold'], null, email);
  divRow.appendChild(columnEmail);

  //CREATE LAST COLUMN
  const lastColumn = createDomElement(
    'div',
    ['table-rows-row', 'with-buttons', 'w-45'],
    null
  );

  //CREATE LAST COLUMN CONTENT
  addLastColumnContent(
    divRow,
    lastColumn,
    catchphrase,
    id,
    firstName,
    lastName,
    email
  );
}

//Create last column content:
function addLastColumnContent(
  divRow,
  lastColumn,
  catchphrase,
  id,
  firstName,
  lastName,
  email
) {
  //Create the catchphrase column
  const columnCatchphrase = createDomElement(
    'div',
    ['w-70', 'bold'],
    null,
    catchphrase
  );
  lastColumn.appendChild(columnCatchphrase);

  //Create the update button
  const updateButton = createDomElement(
    'button',
    ['w-15', 'align-end', 'small-button', 'success-color'],
    ['id', `row-${id}`],
    'Update'
  );
  //
  lastColumn.appendChild(updateButton);
  //Add event listener to the button
  updateButton.addEventListener('click', () =>
    modal(id, catchphrase, firstName, lastName, email)
  );

  //Create the delete button
  const deleteButton = createDomElement(
    'button',
    ['w-15', 'align-end', 'small-button', 'alert-color'],
    ['id', `row-${id}`],
    'Delete'
  );
  lastColumn.appendChild(deleteButton);

  //Add event listener to the button
  deleteButton.addEventListener('click', () => deleteUser(id));
  return divRow.appendChild(lastColumn);
}
