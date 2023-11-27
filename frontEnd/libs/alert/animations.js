const ANIMATIONS_CONFIG = {
  alertShowDelay: 10,
  alertHideAfter: 2500,
  alertRemovedFromDomAfter: 2600,
  tableRowRemovedFromDomAfter: 500,
};

//ANIMATIONS
export function alertAnimation(deleteAlert) {
  //After show the deleteAlert wait and move the deleteAlert down
  setTimeout(() => {
    deleteAlert.classList.add('slide-down-animation');
  }, ANIMATIONS_CONFIG.alertShowDelay);
  //After 1.5s hide the deleteAlert up
  setTimeout(() => {
    deleteAlert.classList.add('slide-up-animation');
  }, ANIMATIONS_CONFIG.alertHideAfter);
}

//Remove the alertModal alert from the DOM
export function removeAlert(alertModal) {
  setTimeout(() => {
    container.removeChild(alertModal);
  }, ANIMATIONS_CONFIG.alertRemovedFromDomAfter);
}

export function removeRowAnimation(id, tableRows) {
  const row = document.querySelector(`#row-${id}`);
  //Hide the row with an Fade out animation
  row.classList.add('hidden');
  //Remove the row from the DOM after 0.5sec
  setTimeout(() => {
    tableRows.removeChild(row);
  }, ANIMATIONS_CONFIG.tableRowRemovedFromDomAfter);
}
