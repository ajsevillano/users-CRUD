import { closeModal } from './modal/closeModal.js';
import { fetchUpdate } from './fetch.js';

const modalBox = document.querySelector('.modal');
const modalContent = document.createElement('div');
const modalContainer = document.querySelector('.modal-container');

function createModalForm(id, catchphrase, firstName, lastName, email) {
  const modalInputNodes = [
    { id: 'firstName', value: firstName, label: 'Name' },
    { id: 'lastName', value: lastName, label: 'Last name' },
    { id: 'email', value: email, label: 'Email' },
    { id: 'catchphrase', value: catchphrase, label: 'Catchphrase' },
  ];
  const inputsAndLabels = modalInputNodes.map((inputElement) => {
    createInputsLabels(inputElement.id, inputElement.label);
    const input = document.createElement('input');
    input.setAttribute('id', inputElement.id);
    input.classList.add('input-modal');
    input.value = inputElement.value;
    input.type = 'text';
    modalContent.appendChild(input);
  });
  createUpdateButton();
  return inputsAndLabels;
}

//CREATE THE LABELS FOR THE INPUTS
function createInputsLabels(id, label) {
  const labelInputName = document.createElement('label');
  labelInputName.innerText = label;
  labelInputName.htmlFor = id;
  modalContent.appendChild(labelInputName);
}

//CREATE THE UPDATE BUTTON
function createUpdateButton() {
  const closeButton = document.createElement('button');
  closeButton.classList.add('button-modal');
  closeButton.innerText = 'Update';
  modalContent.appendChild(closeButton);
  closeButton.addEventListener('click', () => updateUser(id, formOject));
}

//UPDATE THE USER
async function updateUser(id, formOject) {
  const response = await fetchUpdate(id, formOject);
  destroyModalContent();
  generateSuccesModalContent();
  return response;
}

export default function modal(id, catchphrase, firstName, lastName, email) {
  //Create the modal content:

  modalContent.classList.add('modal-content');
  modalBox.appendChild(modalContent);
  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('fadein');
  modalBox.classList.add('modal-animation-in');

  createModalForm(id, catchphrase, firstName, lastName, email);

  // //Create and h1 with the id inside
  // const modalH1 = document.createElement('h1');
  // modalH1.innerText = `Update info for the user ${id}`;
  // modalContent.appendChild(modalH1);

  //Create labels for name input
  // const labelInputName = document.createElement('label');
  // labelInputName.innerText = 'Name';
  // labelInputName.htmlFor = 'firstName';
  // modalContent.appendChild(labelInputName);

  // //Create first name input
  // const modalInputFirstName = document.createElement('input');
  // modalInputFirstName.setAttribute('id', 'firstName');
  // modalInputFirstName.value = `${firstName}`;
  // modalInputFirstName.type = 'text';
  // modalInputFirstName.classList.add('input-modal');
  // modalContent.appendChild(modalInputFirstName);

  //Create label for last name input
  // const labelInputLastName = document.createElement('label');
  // labelInputLastName.innerText = 'Last Name';
  // labelInputLastName.htmlFor = 'lastName';
  // modalContent.appendChild(labelInputLastName);

  //Create last name input
  // const modalInputLastName = document.createElement('input');
  // modalInputLastName.setAttribute('id', 'lastName');
  // modalInputLastName.value = `${lastName}`;
  // modalInputLastName.type = 'text';
  // modalInputLastName.classList.add('input-modal');
  // modalContent.appendChild(modalInputLastName);

  //Create label for email input
  // const labelInputEmail = document.createElement('label');
  // labelInputEmail.innerText = 'Email';
  // labelInputEmail.htmlFor = 'lastName';
  // modalContent.appendChild(labelInputEmail);

  //Create email input
  // const modalInputEmail = document.createElement('input');
  // modalInputLastName.setAttribute('id', 'email');
  // modalInputEmail.value = `${email}`;
  // modalInputEmail.type = 'text';
  // modalInputEmail.classList.add('input-modal');
  // modalContent.appendChild(modalInputEmail);

  //Create label for catchPhrase input
  // const labelInputCatchphrase = document.createElement('label');
  // labelInputCatchphrase.innerText = 'Catchphrase';
  // labelInputCatchphrase.htmlFor = 'lastName';
  // modalContent.appendChild(labelInputCatchphrase);

  // //Create catchPhrase input
  // const modalInputCatchphrase = document.createElement('input');
  // modalInputLastName.setAttribute('id', 'catchphrase');
  // modalInputCatchphrase.value = `${catchphrase}`;
  // modalInputCatchphrase.type = 'text';
  // modalInputCatchphrase.classList.add('input-modal');
  // modalContent.appendChild(modalInputCatchphrase);

  // //Create and button and an event listener to close the modal
  // const closeButton = document.createElement('button');
  // closeButton.classList.add('button-modal');
  // closeButton.innerText = 'Update';
  // modalContent.appendChild(closeButton);

  //PUT THE DEFAULT DATA INTO formOject (Formally body response)
  let formOject = {
    first_name: modalInputFirstName.value,
    last_name: modalInputLastName.value,
    email: modalInputEmail.value,
    catchphrase: modalInputCatchphrase.value,
  };

  // closeButton.addEventListener('click', () => closeModal(closeModalParams)); TO MOVE FOR WHEN CLICK ON CLOSE BUTTON
  // closeButton.addEventListener('click', () => updateUser(id, formOject));

  function updateFormObjectValues(e, key) {
    let value = '';
    //Easter Egg
    if (key === 'first_name' && e.target.value === 'Mireia') {
      value = `👶 ${e.target.value}`;
    } else {
      value = e.target.value;
    }
    return (formOject[key] = value);
  }

  //Get the first Name
  modalInputFirstName.addEventListener('keyup', (e) =>
    updateFormObjectValues(e, 'first_name')
  );

  //Get last name
  modalInputLastName.addEventListener('keyup', (e) =>
    updateFormObjectValues(e, 'last_name')
  );

  //Get email
  modalInputEmail.addEventListener('keyup', (e) =>
    updateFormObjectValues(e, 'email')
  );

  //Get catchphrase
  modalInputCatchphrase.addEventListener('keyup', (e) =>
    updateFormObjectValues(e, 'catchphrase')
  );
}

//DESTROY THE CONTENT INSIDE MODAL AND REGENERATE A NEW DIV
function destroyModalContent() {
  modalBox.removeChild(modalContent);
}

function generateSuccesModalContent() {
  const modalContentSuccess = document.createElement('div');
  modalContentSuccess.classList.add('modal-content');
  modalBox.appendChild(modalContentSuccess);
  const successMsg = document.createElement('h2');
  successMsg.innerText = 'User updated, Hurray!';
  modalContentSuccess.appendChild(successMsg);
  const closeButton = document.createElement('button');
  const closeModalParams = [modalBox, modalContentSuccess, modalContainer];
  closeButton.addEventListener('click', () => closeModal(closeModalParams));
  closeButton.classList.add('button-modal');
  closeButton.innerText = 'Close modal';
  modalContentSuccess.appendChild(closeButton);
}
