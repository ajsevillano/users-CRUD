import { createUser } from '../crud.js';
import { getAllElements } from './dom.js';

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

//EMPTY FORM VALUES
export function emptyNewUserForm() {
  const getAllInputs = getAllElements('.add-user-form-container', 'input');
  return getAllInputs.map((element) => {
    element.value = '';
  });
}

//CHECK IF THERE ARE EMPTY VALUES IN THE FORMOBJECT OBJECT
export function checkEmptyInputs() {
  let result = Object.keys(formObject).filter(
    (key) => formObject[key] === '' || formObject[key] === null
  );
  return result.length === 0 ? null : result;
}

//ADD A BORDER TO THE UNFILLED INPUT
export function addWarningBorder(unfilledInputs) {
  const getAllInputs = getAllElements('.add-user-form-container', 'input');
  getAllInputs.map((input) => {
    unfilledInputs.includes(input.id)
      ? input.classList.add('input-warning')
      : input.classList.remove('input-warning');
  });
}

//AFTER SEND THE FORM, CLEAR ALL THE WARNING BORDER
export function removeAllWarningBorders() {
  const getAllInputs = getAllElements('.add-user-form-container', 'input');
  getAllInputs.map((input) => input.classList.remove('input-warning'));
}

//EMPTY THE FORMOBJECT TO BE SEND AGAIN
export function emptyformObject() {
  formObject = { first_name: '', last_name: '', email: '', catchphrase: '' };
}
