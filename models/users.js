import users from '../data/users.js';

// GET ALL USERS
export async function getUsers() {
  //Return all the users
  return users;
}

// GET A USER BY ID
export async function getUserByID(id) {
  //Convert the string id to a number
  let userId = Number(id);
  //Find the user with the id given in the params
  const userById = users.find((user) => user.id === userId);
  //If the user doesn't exist, return the error response
  if (!userById) {
    return {
      success: false,
      payload: `The user with id ${userId} does not exist.`,
    };
  }
  //Return the user object for the response
  return {
    success: true,
    payload: userById,
  };
}

// CREATE A USER
export async function createUser(newUser) {
  // Add the next id to the new object
  const NewUserWithId = { id: generateID(), ...newUser };
  //Add the new user to the data
  users.push(NewUserWithId);
  //Find the new user in the array
  const lastUserAdded = users[users.length - 1];
  //Return the new created user for the response
  return lastUserAdded;
}

// UPDATE A USER BY ID
export async function updateUserByID(id, updatedUser) {
  //Convert the string id to a number
  let userId = Number(id);
  // Add the Id to the body (updateUser)
  const UpdatedUserWithId = { id: userId, ...updatedUser };
  //Find the position of the user by id
  const foundItem = users.findIndex((user) => user.id === userId);
  //Update the value of the item
  users[foundItem] = UpdatedUserWithId;
  //Return the user for the response
  return users[foundItem];
}

// DELETE A USER BY ID
export async function deleteUserByID(id) {
  //Convert the string id to a number
  let userId = Number(id);
  //Find the position of the user by id
  const foundIndex = users.findIndex((user) => user.id === userId);
  //Store the user in a variable
  const user = users[foundIndex];
  //Remove the user from the data
  users.splice(foundIndex, 1);
  //Return the user for the response
  return user;
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
