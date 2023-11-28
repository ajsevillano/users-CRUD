import { responseHandler } from './services.js';
// Check the body is not empty
function checkBodyObjIsEmpty(body) {
  return Object.keys(body).length === 0 ? true : false;
}

function checkBodyObjPropertiesAreEmpty(body) {
  //Check if the body  sent in the request has the right properties
  return body.hasOwnProperty('firstName') &&
    body.hasOwnProperty('lastName') &&
    body.hasOwnProperty('email') &&
    body.hasOwnProperty('catchphrase')
    ? false
    : true;
}

export function validateBody(body) {
  //Check if the body is empty
  const bodyIsEmpty = checkBodyObjIsEmpty(body);
  if (bodyIsEmpty) {
    return responseHandler(
      false,
      `The body can't be empty. An object with the fields: 'fist_name','last_name','email' and 'catchphrase' need to be send as body`,
    );
  }

  //Check if the body has the right properties
  const propertiesAreEmpty = checkBodyObjPropertiesAreEmpty(body);
  if (propertiesAreEmpty) {
    return responseHandler(
      false,
      `The body need to have the properties: 'fist_name','last_name','email' and 'catchphrase'`,
    );
  }
}
