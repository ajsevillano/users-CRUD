import { generateTableRow } from '../generateTableRow.js';
import { createUser } from '../crud.js';
import { getUsers } from '../crud.js';

//Start the app
startApp();

async function startApp() {
  //GET ALL USERS
  const usersList = await getUsers();

  //Order the response by id
  const usersListById = usersList.payload.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });

  // CREATE THE TABLE ROWS
  usersListById.map((user) =>
    generateTableRow(
      user.id,
      user.first_name,
      user.last_name,
      user.email,
      user.catchphrase
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
  return (formObject[key] = value);
}

//GRAB SEND FORM BUTTON
const addNewUser = document.querySelector('#add-user-button');
addNewUser.addEventListener('click', () => createUser(formObject));

/// GET DATA FROM THE ADD USER FORM
let formObject = { first_name: '', last_name: '', email: '', catchphrase: '' };
