//Helper functions
import { alertAnimation, removeRowAnimation } from '../animations.js';
import { fetchDelete, fetchUsers } from '../fetch.js';

const tableRows = document.querySelector('.table-rows');
const container = document.querySelector('.container');

//Start the app
mapGetfetchData();

//Map the data from the get Fetch
async function mapGetfetchData() {
  const response = await fetchUsers();
  // Create every Row in the users table in the DOM.
  response.payload.map((user) =>
    createRow(
      user.id,
      user.first_name,
      user.last_name,
      user.email,
      user.catchphrase
    )
  );
}

function createRow(id, firstName, lastName, email, catchphrase) {
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

  //Create the update button
  const updateButton = document.createElement('div');
  updateButton.classList.add('w-15');
  updateButton.classList.add('align-end');
  updateButton.classList.add('small-button');
  updateButton.classList.add('success-color');
  updateButton.innerText = 'Update';
  lastRow.appendChild(updateButton);

  //Create the delete button
  let deleteButton = document.createElement('div');
  deleteButton.classList.add('delete-button');
  deleteButton.classList.add('w-15');
  deleteButton.classList.add('align-end');
  deleteButton.classList.add('small-button');
  deleteButton.classList.add('alert-color');
  deleteButton.innerText = 'Delete';
  lastRow.appendChild(deleteButton);
  deleteButton.setAttribute('id', id);

  //Add event listener to the button
  deleteButton.addEventListener('click', () => deleteUser(id));
}

async function deleteUser(id) {
  const response = await fetchDelete(id);
  //Create an animation to remove a row from the DOM when is deleted.
  removeRowAnimation(id, tableRows);
  //Create an alert to confirm user has been deleted
  createAlert(response);
}

function createAlert(response) {
  //Create an alert to show user has been delete.
  let deleteAlert = document.createElement('div');
  deleteAlert.innerText = `User ${response.payload.first_name} ${response.payload.last_name} has been deleted`;
  deleteAlert.classList.add('delete-warning');
  container.appendChild(deleteAlert);
  //We run an animation to show and hide the Alert
  alertAnimation(deleteAlert);
  //Remove the deleteAlert alert from the DOM after 0.6sec
  removeAlert(deleteAlert);
}

//Remove the deleteAlert alert from the DOM after 0.6sec
function removeAlert(deleteAlert) {
  setTimeout(() => {
    container.removeChild(deleteAlert);
  }, 1600);
}

/// GET DATA FROM THE ADD USER FORM

let formOject = { firstName: '', lastName: '', email: '', catchphrase: '' };

//Get the first Name
const firstName = document.querySelector('#first-name');
firstName.addEventListener('keyup', getData);
function getData(e) {
  return (formOject.firstName = e.target.value);
}

//Get last name
const lastName = document.querySelector('#last-name');
lastName.addEventListener('keyup', getLastName);
function getLastName(e) {
  return (formOject.lastName = e.target.value);
}

//Get email
const email = document.querySelector('#email');
email.addEventListener('keyup', getEmail);
function getEmail(e) {
  return (formOject.email = e.target.value);
}

//Get catchphrase
const catchphrase = document.querySelector('#catchphrase');
catchphrase.addEventListener('keyup', getCatchphrase);
function getCatchphrase(e) {
  return (formOject.catchphrase = e.target.value);
}

const addToList = document.querySelector('#add-to-list');

addToList.addEventListener('click', showObject);

function showObject() {
  console.log(formOject);
}
