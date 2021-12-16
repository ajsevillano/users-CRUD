import { alertAnimation } from './animations.js';

const container = document.querySelector('.container');

export function createAlert(response) {
  //Create an alert to show user has been delete.
  let deleteAlert = document.createElement('div');
  deleteAlert.innerText = `User ${response.payload.first_name} ${response.payload.last_name} has been deleted`;
  deleteAlert.classList.add('delete-warning');
  container.appendChild(deleteAlert);
  //We run an animation to show and hide the Alert
  alertAnimation(deleteAlert);
  //Remove the deleteAlert alert from the DOM after 0.6sec
  removeAlert(deleteAlert);
}

//Remove the deleteAlert alert from the DOM after 0.6sec
function removeAlert(deleteAlert) {
  setTimeout(() => {
    container.removeChild(deleteAlert);
  }, 1600);
}
