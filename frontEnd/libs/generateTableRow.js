import { createDomElement } from '../dom.js';
import modal from '../modal/index.js';
import { deleteUser } from './crud.js';

const tableRows = document.querySelector('.table-rows');

export function generateTableRow(id, firstName, lastName, email, catchphrase) {
  //Create the div element "Row" & append all the colums
  const divRow = createDomElement('div', null, {
    class: 'row',
    id: `row-${id}`,
  });
  tableRows.appendChild(divRow);
  //Create the row with the name element
  const columnName = createDomElement('div', firstName, {
    class: `w-15 bold`,
  });
  divRow.appendChild(columnName);
  //Create the row with the last_name element
  const columnLastName = createDomElement('div', lastName, {
    class: `w-15 bold`,
  });
  divRow.appendChild(columnLastName);
  // //Create the row with the email element
  const columnEmail = createDomElement('div', email, {
    class: `w-25 bold`,
  });
  divRow.appendChild(columnEmail);

  //CREATE LAST COLUMN
  const lastColumn = createDomElement('div', null, {
    class: `table-rows-row with-buttons w-45`,
  });

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
  const columnCatchphrase = createDomElement('div', catchphrase, {
    class: `w-70 bold`,
  });
  lastColumn.appendChild(columnCatchphrase);

  //Create the update button
  const updateButton = createDomElement('button', 'Update', {
    class: `w-15 align-end small-button success-color`,
    id: `row-${id}`,
  });
  //
  lastColumn.appendChild(updateButton);
  //Add event listener to the button
  updateButton.addEventListener('click', () =>
    modal(id, catchphrase, firstName, lastName, email)
  );

  //Create the delete button
  const deleteButton = createDomElement('button', 'Delete', {
    class: `w-15 align-end small-button alert-color`,
    id: `row-${id}`,
  });
  lastColumn.appendChild(deleteButton);

  //Add event listener to the button
  deleteButton.addEventListener('click', () => deleteUser(id));
  return divRow.appendChild(lastColumn);
}
