import { closeModal } from './modal/closeModal.js';
import { fetchUpdate } from './fetch.js';

const modalBox = document.querySelector('.modal');

const modalContainer = document.querySelector('.modal-container');

export default function modal(id, catchphrase, firstName, lastName, email) {
  //Create the modal content:
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalBox.appendChild(modalContent);
  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('fadein');
  modalBox.classList.add('modal-animation-in');

  //Create and h1 with the id inside
  const modalH1 = document.createElement('h1');
  modalH1.innerText = `Update info for the user ${id}`;
  modalContent.appendChild(modalH1);

  //Create labels for name input
  const labelInputName = document.createElement('label');
  labelInputName.innerText = 'Name';
  labelInputName.htmlFor = 'firstName';
  modalContent.appendChild(labelInputName);

  //Create first name input
  const modalInputFirstName = document.createElement('input');
  modalInputFirstName.setAttribute('id', 'firstName');
  modalInputFirstName.value = `${firstName}`;
  modalInputFirstName.type = 'text';
  modalInputFirstName.classList.add('input-modal');
  modalContent.appendChild(modalInputFirstName);

  //Create label for last name input
  const labelInputLastName = document.createElement('label');
  labelInputLastName.innerText = 'Last Name';
  labelInputLastName.htmlFor = 'lastName';
  modalContent.appendChild(labelInputLastName);

  //Create last name input
  const modalInputLastName = document.createElement('input');
  modalInputLastName.setAttribute('id', 'lastName');
  modalInputLastName.value = `${lastName}`;
  modalInputLastName.type = 'text';
  modalInputLastName.classList.add('input-modal');
  modalContent.appendChild(modalInputLastName);

  //Create label for email input
  const labelInputEmail = document.createElement('label');
  labelInputEmail.innerText = 'Email';
  labelInputEmail.htmlFor = 'lastName';
  modalContent.appendChild(labelInputEmail);

  //Create email input
  const modalInputEmail = document.createElement('input');
  modalInputLastName.setAttribute('id', 'email');
  modalInputEmail.value = `${email}`;
  modalInputEmail.type = 'text';
  modalInputEmail.classList.add('input-modal');
  modalContent.appendChild(modalInputEmail);

  //Create label for catchPhrase input
  const labelInputCatchphrase = document.createElement('label');
  labelInputCatchphrase.innerText = 'Catchphrase';
  labelInputCatchphrase.htmlFor = 'lastName';
  modalContent.appendChild(labelInputCatchphrase);

  //Create catchPhrase input
  const modalInputCatchphrase = document.createElement('input');
  modalInputLastName.setAttribute('id', 'catchphrase');
  modalInputCatchphrase.value = `${catchphrase}`;
  modalInputCatchphrase.type = 'text';
  modalInputCatchphrase.classList.add('input-modal');
  modalContent.appendChild(modalInputCatchphrase);

  //Create and button and an event listener to close the modal
  const closeButton = document.createElement('button');
  closeButton.classList.add('button-modal');
  closeButton.innerText = 'Update';
  modalContent.appendChild(closeButton);
  const closeModalParams = [modalBox, modalContent, modalContainer];

  //PUT THE DEFAULT DATA INTO formOject (Formally body response)
  let formOject = {
    first_name: modalInputFirstName.value,
    last_name: modalInputLastName.value,
    email: modalInputEmail.value,
    catchphrase: modalInputCatchphrase.value,
  };

  // closeButton.addEventListener('click', () => closeModal(closeModalParams)); TO MOVE FOR WHEN CLICK ON CLOSE BUTTON
  closeButton.addEventListener('click', () => updateUser(formOject));

  console.log(formOject);

  //UPDATE THE USER
  async function updateUser(formOject) {
    const response = await fetchUpdate(formOject);
    console.log(response);
  }

  function updateFormObjectValues(e, key) {
    let value = '';
    //Easter Egg
    if (key === 'first_name' && e.target.value === 'Mireia') {
      value = `👶 ${e.target.value}`;
    } else {
      value = e.target.value;
    }
    console.log(formOject);
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
