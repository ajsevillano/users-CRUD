import query from '../db/index.js';

// GET ALL USERS
export async function getUsers() {
  //Return all the users
  const data = await query(`SELECT * FROM  users;`);
  return responseHandler(true, data.rows);
}

// GET A USER BY ID (UNUSED YET)
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
  //Destructuring the body
  const { first_name, last_name, email, catchphrase } = newUser;
  //Add the new user to the data
  const sqlQuery = `INSERT into users (first_name,last_name,email,catchphrase) VALUES ($1,$2,$3,$4) RETURNING *;`;
  const data = await query(sqlQuery, [
    first_name,
    last_name,
    email,
    catchphrase,
  ]);
  return responseHandler(true, data.rows);
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
  //Destructuring the body
  const { first_name, last_name, email, catchphrase } = updatedUser;
  //Add the new user to the data
  const sqlQuery = `UPDATE users SET first_name = $1,last_name=$2,email=$3,catchphrase=$4 WHERE id=$5  RETURNING *;`;
  const data = await query(sqlQuery, [
    first_name,
    last_name,
    email,
    catchphrase,
    userId,
  ]);
  return responseHandler(true, data.rows);
}

// DELETE A USER BY ID
export async function deleteUserByID(id) {
  //Convert the string id to a number
  let userId = Number(id);
  //Find the position of the user by id
  const sqlQuery = `DELETE FROM users WHERE id=$1 RETURNING *;`;
  const data = await query(sqlQuery, [userId]);
  return responseHandler(true, data.rows);
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
