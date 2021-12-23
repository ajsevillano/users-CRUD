import { closeModal } from './modal/closeModal.js';
import { fetchUpdate } from './fetch.js';

const modalBox = document.querySelector('.modal');
const modalContent = document.createElement('div');
const modalContainer = document.querySelector('.modal-container');

//CREATE THE MODAL CONTENT WHEN MODAL IS OPEN
function createModalContent() {
  modalContent.classList.add('modal-content');
  modalBox.appendChild(modalContent);
}

//ACTIVATE THE DARK BACKGROUND WHEN MODAL IS OPEN
function activateDarkBackground() {
  //Show the modal container (black background)
  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('fadein');
  modalBox.classList.add('modal-animation-in');
}

let UpdateBody = {};

//CREATE THE MODAL FORM
function createModalForm(id, catchphrase, firstName, lastName, email) {
  const modalInputNodes = [
    { id: 'firstName', value: firstName, label: 'Name' },
    { id: 'lastName', value: lastName, label: 'Last name' },
    { id: 'email', value: email, label: 'Email' },
    { id: 'catchphrase', value: catchphrase, label: 'Catchphrase' },
  ];
  createH1Title(id);
  const inputsAndLabels = modalInputNodes.map((inputElement) => {
    createInputsLabels(inputElement.id, inputElement.label);
    const input = document.createElement('input');
    input.setAttribute('id', inputElement.id);
    input.classList.add('input-modal');
    input.value = inputElement.value;
    input.type = 'text';
    modalContent.appendChild(input);
    //WHEN CREATE THE INPUTS, WE FILL THE UPDATE BODY OBJECT WITH THE CURRENT INPUTS INFORMATION
    UpdateBody = { ...UpdateBody, [inputElement.id]: inputElement.value };
    //ADD EVENT LISTENER TO EVERY INPUT
    input.addEventListener('keyup', (e) => consolelog(e, inputElement.id));
  });

  //CREATE THE UPDATE BUTTON
  createUpdateButton();
  return inputsAndLabels;
}

// let formOject = {
//   first_name: firstName.value,
//   last_name: lastName.value,
//   email: email.value,
//   catchphrase: catchphrase.value,
// };

//UPDATE BODY VALUES OBJECT WHEN INPUT CHANGES
function consolelog(e, key) {
  let value = e.target.value;
  return (UpdateBody[key] = value);
}

// function updateFormObjectValues(e, key) {
//   let value = '';
//   //Easter Egg
//   if (key === 'first_name' && e.target.value === 'Mireia') {
//     value = `👶 ${e.target.value}`;
//   } else {
//     value = e.target.value;
//   }
//   return (formOject[key] = value);
// }

//CREATE THE H1 TITLE
function createH1Title(id) {
  //Create and h1 with the id inside
  const modalH1 = document.createElement('h1');
  modalH1.innerText = `Update info for the user ${id}`;
  modalContent.appendChild(modalH1);
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
  createModalContent();
  activateDarkBackground();
  createModalForm(id, catchphrase, firstName, lastName, email);

  //PUT THE DEFAULT DATA INTO formOject (Formally body response)
  // let formOject = {
  //   first_name: firstName.value,
  //   last_name: lastName.value,
  //   email: email.value,
  //   catchphrase: catchphrase.value,
  // };

  // // closeButton.addEventListener('click', () => closeModal(closeModalParams)); TO MOVE FOR WHEN CLICK ON CLOSE BUTTON
  // // closeButton.addEventListener('click', () => updateUser(id, formOject));

  // function updateFormObjectValues(e, key) {
  //   let value = '';
  //   //Easter Egg
  //   if (key === 'first_name' && e.target.value === 'Mireia') {
  //     value = `👶 ${e.target.value}`;
  //   } else {
  //     value = e.target.value;
  //   }
  //   return (formOject[key] = value);
  // }

  // //Get the first Name
  // firstName.addEventListener('keyup', (e) =>
  //   updateFormObjectValues(e, 'first_name')
  // );

  // //Get last name
  // lastName.addEventListener('keyup', (e) =>
  //   updateFormObjectValues(e, 'last_name')
  // );

  // //Get email
  // email.addEventListener('keyup', (e) => updateFormObjectValues(e, 'email'));

  // //Get catchphrase
  // catchphrase.addEventListener('keyup', (e) =>
  //   updateFormObjectValues(e, 'catchphrase')
  // );
}

// //DESTROY THE CONTENT INSIDE MODAL AND REGENERATE A NEW DIV
// function destroyModalContent() {
//   modalBox.removeChild(modalContent);
// }

// function generateSuccesModalContent() {
//   const modalContentSuccess = document.createElement('div');
//   modalContentSuccess.classList.add('modal-content');
//   modalBox.appendChild(modalContentSuccess);
//   const successMsg = document.createElement('h2');
//   successMsg.innerText = 'User updated, Hurray!';
//   modalContentSuccess.appendChild(successMsg);
//   const closeButton = document.createElement('button');
//   const closeModalParams = [modalBox, modalContentSuccess, modalContainer];
//   closeButton.addEventListener('click', () => closeModal(closeModalParams));
//   closeButton.classList.add('button-modal');
//   closeButton.innerText = 'Close modal';
//   modalContentSuccess.appendChild(closeButton);
// }
