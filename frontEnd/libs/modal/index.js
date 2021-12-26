import { fetchUpdate } from '../fetch.js';
import createInputElement from '../input/input.js';
import closeModal from '../modal/close.js';

const modalBox = document.querySelector('.modal');
const modalContent = document.createElement('div');
const modalContainer = document.querySelector('.modal-container');
let UpdateBody = {};

export default function modal(id, catchphrase, firstName, lastName, email) {
  createModalContentDiv();
  activateDarkBackground();
  createFormItems(id, catchphrase, firstName, lastName, email);
}

//CREATE THE MODAL CONTENT
function createModalContentDiv() {
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

//CREATE THE MODAL FORM
function createFormItems(id, catchphrase, firstName, lastName, email) {
  const modalInputNodes = [
    { id: 'first_name', value: firstName, label: 'Name' },
    { id: 'last_name', value: lastName, label: 'Last name' },
    { id: 'email', value: email, label: 'Email' },
    { id: 'catchphrase', value: catchphrase, label: 'Catchphrase' },
  ];
  createH1Title(id);
  createFormInputs(modalInputNodes);
  createUpdateButton(id);
}

//CREATE THE INPUTS
function createFormInputs(modalInputNodes) {
  //CREATE THE INPUTS ELEMENTS
  modalInputNodes.map((inputElement) => {
    createInputsLabels(inputElement.id, inputElement.label);
    const input = createInputElement(inputElement.id, inputElement.value);
    modalContent.appendChild(input);
    //WHEN CREATE THE INPUTS, WE FILL THE UPDATE BODY OBJECT WITH THE CURRENT INPUTS INFORMATION
    UpdateBody = { ...UpdateBody, [inputElement.id]: inputElement.value };
    //ADD EVENT LISTENER TO EVERY INPUT
    input.addEventListener('keyup', (e) => consolelog(e, inputElement.id));
  });
}

//UPDATE BODY VALUES OBJECT WHEN INPUT CHANGES
function consolelog(e, key) {
  let value = e.target.value;
  return (UpdateBody[key] = value);
}

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
function createUpdateButton(id) {
  const closeButton = document.createElement('button');
  closeButton.classList.add('button-modal');
  closeButton.innerText = 'Update';
  modalContent.appendChild(closeButton);
  closeButton.addEventListener('click', () => updateUser(id, UpdateBody));
}

//UPDATE THE USER
async function updateUser(id, UpdateBody) {
  const response = await fetchUpdate(id, UpdateBody);
  destroyModalContent();
  generateSuccesModalContent();
  return response;
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
