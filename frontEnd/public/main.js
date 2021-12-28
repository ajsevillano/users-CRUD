import { generateTableRow } from '../generateTableRow.js';
import { getUsers, createUser } from '../crud.js';
import { getAllElements } from '../dom.js';

async function runApp() {
  //GET ALL USERS
  const usersList = await getUsers();
  //ORDER USERS BY ID
  const usersListById = orderFetchUsersById(usersList.payload);
  // CREATE THE TABLE ROWS
  mapUsersList(usersListById);
  //CREATE EVENT LISTENERS FOR THE INPUTS
  createEventListeners();
}

runApp();

function orderFetchUsersById(payload) {
  return payload.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });
}

function mapUsersList(usersListById) {
  return usersListById.map((user) =>
    generateTableRow(
      user.id,
      user.first_name,
      user.last_name,
      user.email,
      user.catchphrase
    )
  );
}

//CREATE THE EVENT LISTENERS
function createEventListeners() {
  const getAllInputs = getAllElements('.add-user-form-container', 'input');
  return getAllInputs.forEach((element) => {
    element.addEventListener('keyup', (e) =>
      updateFormObjectValues(e, element.id)
    );
  });
}

/// DEFAULT VALUES FOR THE CREATE USER FORM
let formObject = { first_name: '', last_name: '', email: '', catchphrase: '' };

//INSERT USER FORM INPUT INTO AN OBJECT TO BE SEND AS FETCH BODY
function updateFormObjectValues(e, key) {
  let value = e.target.value;
  return (formObject[key] = value);
}

//GRAB SEND FORM BUTTON
const addNewUser = document.querySelector('#add-user-button');
addNewUser.addEventListener('click', () => createUser(formObject));
