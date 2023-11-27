import { User } from '../models/users';

async function deleteUsersTable() {
  try {
    await User.drop();
    console.log('User table has been deleted.');
  } catch (error) {
    console.error('Unable to delete the table:', error);
  }
}

deleteUsersTable();
