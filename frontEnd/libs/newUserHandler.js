import { createUser } from '../crud.js';

//GET "ADD NEW USER BUTTON" FROM DOM
const addNewUser = document.querySelector('#add-user-button');
addNewUser.addEventListener('click', () => createUser(formObject));

/// DEFAULT VALUES FOR THE CREATE USER FORM
let formObject = { first_name: '', last_name: '', email: '', catchphrase: '' };

//INSERT USER FORM INPUT INTO AN OBJECT TO BE SEND AS FETCH BODY
export function updateFormObjectValues(e, key) {
  let value = e.target.value;
  return (formObject[key] = value);
}
