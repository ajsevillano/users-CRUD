import { User } from '../../db/models/users.js';

// GET ALL USERS
export async function getUsers() {
  try {
    const data = await User.findAll();
    return responseHandler(true, data);
  } catch (error) {
    console.error('Unable to get the users:', error);
  }
}

// GET A USER BY ID
export async function getUserByID(id) {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return responseHandler(false, errorMsgNotExist(id));
    } else {
      return responseHandler(true, user);
    }
  } catch (error) {
    console.error('Unable to get the user:', error);
  }
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
  const { firstName, lastName, email, catchphrase } = newUser;
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      catchphrase,
    });
    return responseHandler(true, user);
  } catch (error) {
    return responseHandler(false, 'Unable to create the user');
  }
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
  const { firstName, lastName, email, catchphrase } = updatedUser;

  try {
    // Update the user in the database
    const [numberOfAffectedRows, [updatedUser]] = await User.update(
      {
        firstName,
        lastName,
        email,
        catchphrase,
      },
      {
        where: { id: userId },
        returning: true,
      },
    );

    // Check if the update was successful
    if (numberOfAffectedRows === 0) {
      return responseHandler(false, `User with ID ${userId} not found.`);
    }
    return { success: true, data: updatedUser };
  } catch (error) {
    console.error('Unable to update the user:', error);
    return responseHandler(false, 'Unable to update the user.');
  }
}

// DELETE A USER BY ID
export async function deleteUserByID(id) {
  //Convert the string id to a number
  let userId = Number(id);

  try {
    // Delete the user from the database
    const numberOfDestroyedRows = await User.destroy({
      where: { id: userId },
    });

    // Check if the delete was successful
    if (numberOfDestroyedRows === 0) {
      return responseHandler(true, `User with ID ${id} not found.`);
    }

    return responseHandler(true, `User with ID ${id} deleted`);
  } catch (error) {
    console.error('Unable to delete the user:', error);
    return responseHandler(false, 'Unable to delete the user.');
  }
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
