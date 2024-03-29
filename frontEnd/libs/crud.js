import { fetchCreate, fetchDelete, fetchUsers, fetchUpdate } from './fetch.js';
import { createAlert } from './alert/createAlert.js';
import { removeRowAnimation } from './alert/animations.js';
import { destroyContentDiv } from './dom.js';
import generateSuccesModalContent from './modal/succesContent.js';
import {
  emptyNewUserForm,
  checkEmptyInputs,
  removeAllWarningBorders,
  addWarningBorder,
  emptyformObject,
} from './newUserFormHandler.js';

//GET ALL THE USERS
export async function getUsers() {
  const response = await fetchUsers();
  return response;
}

//POST THE NEW USER
export async function createUser(formObject) {
  const unfilledInputs = checkEmptyInputs();
  if (!unfilledInputs) {
    const response = await fetchCreate(formObject);
    const { firstName, lastName } = response.payload;
    removeAllWarningBorders();
    emptyNewUserForm();
    createAlert(`🎉 User ${firstName} ${lastName} created`, 'success-color');
    emptyformObject();
  } else {
    addWarningBorder(unfilledInputs);
    createAlert(`You must fill all the fields in the form`, 'alert-color');
  }
}

//UPDATE THE USER
export async function updateUser(updateUserParams) {
  const [id, UpdateBody, modalBox, modalContainer, modalContent] =
    updateUserParams;
  const response = await fetchUpdate(id, UpdateBody);
  destroyContentDiv(modalBox, modalContent);
  //Create a new modal content with a success msg.
  generateSuccesModalContent(modalBox, modalContainer);
  return response;
}

//DELETE AN USER BY ID
export async function deleteUser(id) {
  const response = await fetchDelete(id);
  const tableRows = document.querySelector('.table-rows');
  //Invoke an animation that fade out and remove the row that has been deleted.
  removeRowAnimation(id, tableRows);
  //Show an alert showing a confirmation the user has been deleted
  createAlert(`🗑️ ${response.payload}`, 'success-color');
}
