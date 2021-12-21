const modalBox = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalContainer = document.querySelector('.modal-container');

export default function modal(id, catchphrase, firstName, lastName, email) {
  console.log(id, catchphrase, firstName, lastName, email);
  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('fadein');
  modalBox.classList.add('modal-animation-in');

  //Create and h1 with the id inside
  const modalH1 = document.createElement('h1');
  modalH1.innerText = `Update info for the user ${id}`;
  modalContent.appendChild(modalH1);

  //Create first name input
  const modalInputFirstName = document.createElement('input');
  modalInputFirstName.value = `${firstName}`;
  modalInputFirstName.type = 'text';
  modalInputFirstName.classList.add('input-modal');
  modalContent.appendChild(modalInputFirstName);

  //Create last name input
  const modalInputLastName = document.createElement('input');
  modalInputLastName.value = `${lastName}`;
  modalInputLastName.type = 'text';
  modalInputLastName.classList.add('input-modal');
  modalContent.appendChild(modalInputLastName);

  //Create email input
  const modalInputEmail = document.createElement('input');
  modalInputEmail.value = `${email}`;
  modalInputEmail.type = 'text';
  modalInputEmail.classList.add('input-modal');
  modalContent.appendChild(modalInputEmail);

  //Create catchPhrase input
  const modalInputCatchphrase = document.createElement('input');
  modalInputCatchphrase.value = `${catchphrase}`;
  modalInputCatchphrase.type = 'text';
  modalInputCatchphrase.classList.add('input-modal');
  modalContent.appendChild(modalInputCatchphrase);

  //Create and button and an event listener to close the modal
  const closeButton = document.createElement('button');
  closeButton.classList.add('add-to-list-button');
  closeButton.innerText = 'close';
  modalContent.appendChild(closeButton);
  closeButton.addEventListener('click', () =>
    closeModal(
      modalH1,
      closeButton,
      modalInputFirstName,
      modalInputLastName,
      modalInputEmail,
      modalInputCatchphrase
    )
  );
}

function closeModal(
  modalH1,
  closeButton,
  modalInputFirstName,
  modalInputLastName,
  modalInputEmail,
  modalInputCatchphrase
) {
  modalBox.classList.add('modal-animation-out');
  modalBox.classList.remove('modal-animation-in');
  modalContainer.classList.remove('fadein');
  modalContainer.classList.add('hidden');

  //Remove the previous h1 and button
  modalContent.removeChild(modalH1);
  modalContent.removeChild(closeButton);
  modalContent.removeChild(modalInputFirstName);
  modalContent.removeChild(modalInputLastName);
  modalContent.removeChild(modalInputEmail);
  modalContent.removeChild(modalInputCatchphrase);

  setTimeout(() => {
    modalBox.classList.remove('modal-animation-out');
  }, 1000);
}
