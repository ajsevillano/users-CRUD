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

  //Order the response by id
  const orderedResponseById = response.payload.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });

  // Create every Row in the users table in the DOM.
  orderedResponseById.map((user) =>
    generateTableRow(
      user.id,
      user.first_name,
      user.last_name,
      user.email,
      user.catchphrase,
      deleteUser
    )
  );
  //CREATE EVENT LISTENERS FOR THE INPUTS
  createEvenTListeners();
}

const inputElements = [
  { id: 'first_name', element: '#first-name' },
  { id: 'last_name', element: '#last-name' },
  { id: 'email', element: '#email' },
  { id: 'catchphrase', element: '#catchphrase' },
];

function createEvenTListeners() {
  inputElements.map((element) => {
    const inputElement = document.querySelector(element.element);
    inputElement.addEventListener('keyup', (e) =>
      updateFormObjectValues(e, element.id)
    );
  });
}

//INSERT USER FORM INPUT INTO AN OBJECT TO BE SEND AS FETCH BODY
function updateFormObjectValues(e, key) {
  let value = e.target.value;
  return (formOject[key] = value);
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
  createAlert(response, 'create');
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
