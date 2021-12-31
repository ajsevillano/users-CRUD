import { getAllElements } from './dom.js';
import { generateTableRow } from './generateTableRow.js';
import { updateFormObjectValues } from './newUserFormHandler.js';

//ORDER THE USERS FECTH BY ID
export function orderFetchUsersById(payload) {
  return payload.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });
}

//MAP USER LIST AND GENERATE THE TABLE
export function mapUsersList(usersListById) {
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
export function createEventListeners() {
  const getAllInputs = getAllElements('.add-user-form-container', 'input');
  return getAllInputs.forEach((element) => {
    element.addEventListener('keyup', (e) =>
      updateFormObjectValues(e, element.id)
    );
  });
}
