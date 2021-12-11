import users from '../data/users.js';

// GET ALL USERS
export function getUsers() {
  //Return the users
  return users;
}

// GET A USER BY ID
export function getUserByID(id) {
  //Find the user with the id given in the params
  const userById = users.find((user) => user.id === id);
  //Return the user object
  return userById;
}

getUserByID(1);

// CREATE A USER
export function createUser(newUser) {}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {}

// DELETE A USER BY ID
export function deleteUserByID(id) {}
