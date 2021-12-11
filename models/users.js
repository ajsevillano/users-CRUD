import users from '../data/users.js';

// GET ALL USERS
export function getUsers() {
  //Return all the users
  return users;
}

// GET A USER BY ID
export function getUserByID(id) {
  //Find the user with the id given in the params
  const userById = users.find((user) => user.id === id);
  //Return the user object for the response
  return userById;
}

// CREATE A USER
export function createUser(newUser) {
  //Add the new user to the data
  users.push(newUser);
  //Find the new user in the array
  const lastUserAdded = users[users.length - 1];
  //Return the new created user for the response
  return lastUserAdded;
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
  //Find the position of the user by id
  const foundItem = users.findIndex((user) => user.id === id);
  //Update the value of the item
  users[foundItem] = updatedUser;
  //Return the user for the response
  return users[foundItem];
}

// DELETE A USER BY ID
export function deleteUserByID(id) {
  //Find the position of the user by id
  const foundIndex = users.findIndex((user) => user.id === id);
  //Store the user in a variable
  const user = users[foundIndex];
  //Remove the user from the data
  users.splice(foundIndex, 1);
  //Debug
  console.log(user);
  console.log(users);
  //Return the user for the response
  return user;
}

//Test the function
deleteUserByID(21);
