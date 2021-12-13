const tableRows = document.querySelector('.table-rows');

async function fetchUsers() {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  data.payload.map((user) =>
    createRow(
      user.id,
      user.first_name,
      user.last_name,
      user.email,
      user.catchphrase
    )
  );
}

fetchUsers();

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
  const row = document.querySelector(`#row-${id}`);
  //We send a DELETE fetch and wait for the response
  const fetchResponse = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
  });
  //Store the response.
  const response = await fetchResponse.json();
  //Hide the row with an animation
  row.classList.add('hidden');
  //Remove the row from the DOM after 0.5sec (Like the animation)
  setTimeout(() => {
    tableRows.removeChild(row);
  }, 500);

  // alert(`The user ${response.payload.first_name} has been deleted`);
}
