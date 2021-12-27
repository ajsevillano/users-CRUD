import { fetchCreate, fetchDelete, fetchUsers } from './fetch.js';
import { createAlert } from './alert/createAlert.js';
import { removeRowAnimation } from './alert/animations.js';

//GET ALL THE USERS
export async function getUsers() {
  const response = await fetchUsers();
  console.log(response);
  return response;
}

//POST THE NEW USER
export async function createUser(formObject) {
  const response = await fetchCreate(formObject);
  //Create an alert to confirm user has been deleted
  console.log(response);
  createAlert(response, 'create');
}

//DELETE AN USER BY ID
export async function deleteUser(id) {
  const response = await fetchDelete(id);
  const tableRows = document.querySelector('.table-rows');
  //Create an animation to remove a row from the DOM when is deleted.
  removeRowAnimation(id, tableRows);
  //Create an alert to confirm user has been deleted
  createAlert(response);
}
