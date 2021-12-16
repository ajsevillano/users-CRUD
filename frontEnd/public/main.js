//Helper functions
import { alertAnimation, removeRowAnimation } from '../alert/animations.js';
import { fetchDelete, fetchUsers } from '../fetch.js';
import { generateTableRow } from '../generateTableRow.js';
import { createAlert } from '../alert/createAlert.js';

const container = document.querySelector('.container');

//Start the app
mapGetfetchData();

//Map the data from the get Fetch
async function mapGetfetchData() {
  const response = await fetchUsers();
  // Create every Row in the users table in the DOM.
  response.payload.map((user) =>
    generateTableRow(
      user.id,
      user.first_name,
      user.last_name,
      user.email,
      user.catchphrase,
      deleteUser
    )
  );
}

async function deleteUser(id) {
  const response = await fetchDelete(id);
  const tableRows = document.querySelector('.table-rows');
  //Create an animation to remove a row from the DOM when is deleted.
  removeRowAnimation(id, tableRows);
  //Create an alert to confirm user has been deleted
  createAlert(response);
}

/// GET DATA FROM THE ADD USER FORM
let formOject = { firstName: '', lastName: '', email: '', catchphrase: '' };

function updateFormObjectValues(e, key) {
  return (formOject[key] = e.target.value);
}

//Get the first Name
const firstName = document.querySelector('#first-name');
firstName.addEventListener('keyup', (e) =>
  updateFormObjectValues(e, 'firstName')
);

//Get last name
const lastName = document.querySelector('#last-name');
lastName.addEventListener('keyup', (e) =>
  updateFormObjectValues(e, 'lastName')
);

//Get email
const email = document.querySelector('#email');
email.addEventListener('keyup', (e) => updateFormObjectValues(e, 'email'));

//Get catchphrase
const catchphrase = document.querySelector('#catchphrase');
catchphrase.addEventListener('keyup', (e) =>
  updateFormObjectValues(e, 'catchphrase')
);

//SEND FORM BUTTON
const addNewUser = document.querySelector('#add-user-button');
addNewUser.addEventListener('click', showObject);

function showObject() {
  console.log(formOject);
}
