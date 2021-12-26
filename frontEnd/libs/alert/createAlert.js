import { alertAnimation } from './animations.js';

const container = document.querySelector('.container');

export function createAlert(response, msg) {
  //Destructure the response
  const { first_name, last_name } = response.payload[0];
  //Define the messages to be shown
  const msgCreated = `🎉 ${first_name} ${last_name} created`;
  const msgDeleted = `🗑️ User ${first_name} ${last_name} has been deleted `;
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
