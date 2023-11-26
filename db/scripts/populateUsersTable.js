import { users } from '../mockData/users.js';
import { User } from './createUsersTable.js';

async function populateUsersTable() {
  // Prepara los datos para la inserción masiva
  const userData = users.map((user) => ({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    catchphrase: user.catchphrase,
  }));

  try {
    await User.bulkCreate(userData);
    console.log('Users have been inserted successfully.');
  } catch (error) {
    console.error('Unable to insert the users:', error);
  }
}

populateUsersTable();
