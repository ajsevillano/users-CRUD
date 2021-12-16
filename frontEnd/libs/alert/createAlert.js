import { alertAnimation } from './animations.js';

const container = document.querySelector('.container');

export function createAlert(response, msg) {
  //Define the messages to be shown
  const msgCreated = `User ${response.payload.first_name} ${response.payload.last_name} has been created 🎉`;
  const msgDeleted = `User ${response.payload.first_name} ${response.payload.last_name} has been deleted 🗑️`;
  const checkMsg = msg === 'create' ? msgCreated : msgDeleted;

  //Create an alert to show user has been delete.
  let alertModal = document.createElement('div');
  alertModal.innerText = checkMsg;
  alertModal.classList.add('alert-dialog');
  container.appendChild(alertModal);
  //We run an animation to show and hide the Alert
  alertAnimation(alertModal);
  //Remove the alertModal alert from the DOM after 0.6sec
  removeAlert(alertModal);
}

//Remove the alertModal alert from the DOM after 0.6sec
function removeAlert(alertModal) {
  setTimeout(() => {
    container.removeChild(alertModal);
  }, 1600);
}
