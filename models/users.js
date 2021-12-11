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

//Test
createUser({
  id: 20,
  first_name: 'pACO',
  last_name: 'Turri',
  email: 'kturri2@washington.edu',
  catchphrase: 'User-centric multimedia collaboration',
});

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {}

// DELETE A USER BY ID
export function deleteUserByID(id) {}
