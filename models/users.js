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

// CREATE A USER
export function createUser(newUser) {
  //Add the new user to the data
  users.push(newUser);
  //Find the new user in the array
  const lastUserAdded = users[users.length - 1];
  //Return the new created user
  return lastUserAdded;
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
  // Find the position of the item
  const foundItem = users.findIndex((user) => user.id === id);
  //Change the value of the item
  users[foundItem] = updatedUser;
  //Debug
  console.log(users);
  //Return the item
  return users[foundItem];
}

//Test the function
updateUserByID(3, {
  first_name: 'Manolo',
  last_name: 'Turri',
  email: 'kturri2@washington.edu',
  catchphrase: 'User-centric multimedia collaboration',
});

// DELETE A USER BY ID
export function deleteUserByID(id) {}
