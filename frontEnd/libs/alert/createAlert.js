import { alertAnimation } from './animations.js';
import { createDomElement } from '../dom.js';

const container = document.querySelector('.container');

export function createAlert(msg, bgColor) {
  //Create an alert to show user has been delete.
  const alertModal = createDomElement('div', msg, {
    class: `alert-dialog ${bgColor}`,
  });
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
