//ANIMATIONS
export function alertAnimation(deleteAlert) {
  //After show the deleteAlert wait and move the deleteAlert down
  setTimeout(() => {
    deleteAlert.classList.add('slide-down-animation');
  }, 10);
  //After 1.5s hide the deleteAlert up
  setTimeout(() => {
    deleteAlert.classList.add('slide-up-animation');
  }, 1500);
}

export function removeRowAnimation(id, tableRows) {
  const row = document.querySelector(`#row-${id}`);
  //Hide the row with an Fade out animation
  row.classList.add('hidden');
  //Remove the row from the DOM after 0.5sec
  setTimeout(() => {
    tableRows.removeChild(row);
  }, 500);
}
