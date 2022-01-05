import { createDomElement } from '../dom.js';
import modal from '../modal/open.js';
import { deleteUser } from './crud.js';
import avatar from './avatarGenerator.js';

const tableRows = document.querySelector('.table-rows');

export function generateTableRow(
  id,
  firstName,
  lastName,
  email,
  catchphrase,
  timestamp
) {
  //ROW THAT CONTAINS ALL THE COLUMNS
  const divRow = createDomElement('div', null, {
    class: 'row',
    id: `row-${id}`,
  });
  //COLUMN WITH THE AVATAR
  const columnAvatar = createDomElement('img', null, {
    class: `w-3`,
    src: avatar(firstName, lastName),
  });
  //COLUMN WITH THE NAME
  const columnName = createDomElement('div', firstName, {
    class: `w-12 bold`,
  });
  //COLUMN WITH THE LASTNAME
  const columnLastName = createDomElement('div', lastName, {
    class: `w-15 bold`,
  });
  //COLUMN WITH THE EMAIL
  const columnEmail = createDomElement('div', email, {
    class: `w-25 bold`,
  });
  //COLUMN WITH THE CATCHPHRASE AND THE 2 BUTTONS
  const lastColumn = createDomElement('div', null, {
    class: `table-rows-row with-buttons w-45`,
  });

  //APPEND THE DIVS
  tableRows.appendChild(divRow);
  divRow.appendChild(columnAvatar);
  divRow.appendChild(columnName);
  divRow.appendChild(columnLastName);
  divRow.appendChild(columnEmail);

  //CREATE LAST COLUMN CONTENT
  addLastColumnContent(
    divRow,
    lastColumn,
    catchphrase,
    id,
    firstName,
    lastName,
    email,
    timestamp
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
  email,
  timestamp
) {
  //Create the catchphrase column
  const columnCatchphrase = createDomElement('div', catchphrase, {
    class: `w-70 bold`,
  });

  //Create the update button
  const updateButton = createDomElement('button', 'Update', {
    class: `w-15 align-end small-button success-color`,
    id: `row-${id}`,
  });

  //Add event listener to the button
  updateButton.addEventListener('click', () =>
    modal(id, catchphrase, firstName, lastName, email, timestamp)
  );

  //Create the delete button
  const deleteButton = createDomElement('button', 'Delete', {
    class: `w-15 align-end small-button alert-color`,
    id: `row-${id}`,
  });
  lastColumn.appendChild(columnCatchphrase);
  lastColumn.appendChild(updateButton);
  lastColumn.appendChild(deleteButton);

  //Add event listener to the button
  deleteButton.addEventListener('click', () => deleteUser(id));
  return divRow.appendChild(lastColumn);
}
