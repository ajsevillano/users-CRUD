//Helper functions
import { removeRowAnimation } from '../alert/animations.js';
import { fetchDelete, fetchUsers, fetchCreate } from '../fetch.js';
import { generateTableRow } from '../generateTableRow.js';
import { createAlert } from '../alert/createAlert.js';

//Start the app
startApp();

//Map the data from the get Fetch
async function startApp() {
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

function updateFormObjectValues(e, key) {
  let value = '';
  //Easter Egg
  if (key === 'first_name' && e.target.value === 'Mireia') {
    value = `👶 ${e.target.value}`;
  } else {
    value = e.target.value;
  }

  return (formOject[key] = value);
}

//Get the first Name
const firstName = document.querySelector('#first-name');
createEventListeners(firstName);

//Get last name
const lastName = document.querySelector('#last-name');
createEventListeners(lastName);

//Get email
const email = document.querySelector('#email');
createEventListeners(email);

//Get catchphrase
const catchphrase = document.querySelector('#catchphrase');
createEventListeners(catchphrase);

//CREATE THE EVENT LISTENERS
function createEventListeners(formInput) {
  formInput.addEventListener('keyup', (e) =>
    updateFormObjectValues(e, `'${formInput}'`)
  );
}

//SEND FORM BUTTON
const addNewUser = document.querySelector('#add-user-button');
addNewUser.addEventListener('click', createUser);

/// GET DATA FROM THE ADD USER FORM
let formOject = { first_name: '', last_name: '', email: '', catchphrase: '' };

//POST THE NEW USER
async function createUser() {
  const response = await fetchCreate(formOject);
  //Create an alert to confirm user has been deleted
  console.log(response);
  // createAlert(response, 'create');
}

//DELETE AN USER BY ID
async function deleteUser(id) {
  const response = await fetchDelete(id);
  const tableRows = document.querySelector('.table-rows');
  //Create an animation to remove a row from the DOM when is deleted.
  removeRowAnimation(id, tableRows);
  //Create an alert to confirm user has been deleted
  createAlert(response);
}
