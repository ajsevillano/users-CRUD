import { fetchUpdate } from '../fetch.js';
import createInputElement from '../input/input.js';
import closeModal from '../modal/close.js';
import generateSuccesModalContent from '../modal/succesContent.js';
import { destroyModalContent } from '../others.js';

const modalBox = document.querySelector('.modal');
const modalContent = document.createElement('div');
const buttonsContainer = document.createElement('div');
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

//CREATE THE BUTTON CONTAINER AND BUTTONS
function createButtons(id) {
  buttonsContainer.classList.add('modal-buttons-container');
  modalContent.appendChild(buttonsContainer);
  //Cancel button
  const buttonCancel = document.createElement('button');
  buttonCancel.classList.add('modal-buttons', 'cancel');
  buttonCancel.innerText = 'Cancel';
  //Update button
  const buttonUpdate = document.createElement('button');
  buttonUpdate.classList.add('modal-buttons', 'confirm');
  buttonUpdate.innerText = 'Update';
  //Append buttons
  buttonsContainer.appendChild(buttonCancel);
  buttonsContainer.appendChild(buttonUpdate);
  const closeModalParams = [modalBox, modalContent, modalContainer];
  //Event Listeners
  buttonUpdate.addEventListener('click', () => updateUser(id, UpdateBody));
  buttonCancel.addEventListener('click', () => closeModal(closeModalParams));
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
  createButtons(id);
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

//UPDATE THE USER
async function updateUser(id, UpdateBody) {
  const response = await fetchUpdate(id, UpdateBody);
  destroyModalContent(modalBox, modalContent);
  //Create a new modal content with a success msg.
  generateSuccesModalContent(modalBox, modalContainer);
  return response;
}
