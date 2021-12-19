import users from '../data/users.js';
import query from '../db/index.js';

// GET ALL USERS
export async function getUsers() {
  //Return all the users
  const data = await query(`SELECT * FROM  users;`);
  return data.rows;
}

// GET A USER BY ID
export async function getUserByID(id) {
  //Convert the string id to a number
  let userId = Number(id);
  //Find the user with the id given in the params
  const userById = users.find((user) => user.id === userId);
  //If the user doesn't exist, return the error response
  if (!userById) {
    //Return the response for the error
    return responseHandler(false, errorMsgNotExist(userId));
  }
  //Return the user object for the response
  return responseHandler(true, userById);
}

// CREATE A USER
export async function createUser(newUser) {
  //Check if the body is empty
  const checkbody = checkBodyObjIsEmpty(newUser);
  //If the object sent as body is empty, we return an error message
  if (checkbody) {
    //Return the response for the error
    return responseHandler(false, errorMsgNoBody);
  }

  // Add the next id to the new object
  const NewUserWithId = { id: generateID(), ...newUser };
  //Add the new user to the data
  users.push(NewUserWithId);
  //Find the new user in the array
  const lastUserAdded = users[users.length - 1];
  //Return the new created user for the response
  return responseHandler(true, lastUserAdded);
}

// UPDATE A USER BY ID
export async function updateUserByID(id, updatedUser) {
  //Check if the body is empty
  const checkbody = checkBodyObjIsEmpty(updatedUser);
  //If the object sent as body is empty, we return an error message
  if (checkbody) {
    //Return the response for the error
    return responseHandler(false, errorMsgNoBody);
  }
  //Convert the string id to a number
  let userId = Number(id);
  // Add the Id to the body (updateUser)
  const UpdatedUserWithId = { id: userId, ...updatedUser };
  //Find the position of the user by id
  const foundItem = users.findIndex((user) => user.id === userId);
  //Update the value of the item
  users[foundItem] = UpdatedUserWithId;
  //Return the payload if the update succeded
  return responseHandler(true, users[foundItem]);
}

// DELETE A USER BY ID
export async function deleteUserByID(id) {
  //Convert the string id to a number
  let userId = Number(id);
  //Find the position of the user by id
  const sqlQuery = `DELETE FROM users WHERE id=$1 RETURNING first_name,last_name;`;
  const data = await query(sqlQuery, [userId]);
  return data.rows;
}

//OTHER FUNCTIONS
function generateID() {
  // Find the last user on the array
  const lastUser = users[users.length - 1];
  // Get the last user Id
  let lastUserId = lastUser.id;
  // Generate the next number
  let nextId = ++lastUserId;
  return nextId;
}

function checkBodyObjIsEmpty(body) {
  //Check if the body  sent in the request is empty
  return Object.keys(body).length === 0 ? true : false;
}

const errorMsgNoBody = `The body can't be empty. An object with the fields: 'fist_name','last_name','email' and 'catchphrase' need to be send as body`;

function errorMsgNotExist(userId) {
  return `The user with id ${userId} does not exist.`;
}

function responseHandler(status, statusMsg) {
  return {
    success: status,
    payload: statusMsg,
  };
}
