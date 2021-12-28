import closeModal from './close.js';
import { createInputElement, createDomElement } from '../dom.js';
import { updateUser } from '../crud.js';

let UpdateBody = {};
const buttonsContainer = document.createElement('div');

//CREATE THE UPDATE FORM ITEMS
export function createFormItems(
  id,
  catchphrase,
  firstName,
  lastName,
  email,
  modalContent,
  modalBox,
  modalContainer
) {
  const modalInputNodes = [
    { id: 'first_name', value: firstName, label: 'Name' },
    { id: 'last_name', value: lastName, label: 'Last name' },
    { id: 'email', value: email, label: 'Email' },
    { id: 'catchphrase', value: catchphrase, label: 'Catchphrase' },
  ];
  createH1Title(firstName, modalContent);
  createFormInputs(modalInputNodes, modalContent);
  createButtons(id, modalContent, modalBox, modalContainer);
}

//CREATE THE INPUTS
function createFormInputs(modalInputNodes, modalContent) {
  //CREATE THE INPUTS ELEMENTS
  modalInputNodes.map((inputElement) => {
    createInputsLabels(inputElement.id, inputElement.label, modalContent);
    const input = createInputElement(inputElement.id, inputElement.value);
    modalContent.appendChild(input);
    //WHEN CREATE THE INPUTS, WE FILL THE UPDATE BODY OBJECT WITH THE CURRENT INPUTS INFORMATION
    UpdateBody = { ...UpdateBody, [inputElement.id]: inputElement.value };
    //ADD EVENT LISTENER TO EVERY INPUT
    input.addEventListener('keyup', (e) => updatePutBody(e, inputElement.id));
  });
}

//UPDATE BODY VALUES OBJECT WHEN INPUT CHANGES
function updatePutBody(e, key) {
  let value = e.target.value;
  return (UpdateBody[key] = value);
}

//CREATE THE H1 TITLE
function createH1Title(firstName, modalContent) {
  //Create and h1 with the id inside
  const modalH1 = document.createElement('h1');
  modalH1.innerText = `Update info for the user ${firstName}`;
  modalContent.appendChild(modalH1);
}

//CREATE THE LABELS FOR THE INPUTS
function createInputsLabels(id, label, modalContent) {
  const labelInputName = document.createElement('label');
  labelInputName.innerText = label;
  labelInputName.htmlFor = id;
  modalContent.appendChild(labelInputName);
}

//CREATE THE BUTTON CONTAINER AND BUTTONS --- ESTO SE PUEDE DIVIDIR EN UNA FUNCION QUE CREE EL CONTAINER Y OTRA QUE GENERE LOS 2 BOTONES PASANDOLE PARAMETROS
function createButtons(id, modalContent, modalBox, modalContainer) {
  buttonsContainer.classList.add('modal-buttons-container');
  modalContent.appendChild(buttonsContainer);
  //Cancel button
  const buttonCancel = createDomElement(
    'button',
    ['modal-buttons', 'cancel'],
    ['id', 'cancel-button'],
    'Cancel'
  );

  //Update button
  const buttonUpdate = createDomElement(
    'button',
    ['modal-buttons', 'confirm'],
    ['id', 'update-button'],
    'Update'
  );

  //Append buttons
  buttonsContainer.appendChild(buttonCancel);
  buttonsContainer.appendChild(buttonUpdate);
  const closeModalParams = [modalBox, modalContent, modalContainer];
  //Event Listeners
  buttonUpdate.addEventListener('click', () =>
    updateUser(id, UpdateBody, modalBox, modalContainer, modalContent)
  );
  buttonCancel.addEventListener('click', () => closeModal(closeModalParams));
}
