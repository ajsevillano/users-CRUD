import { User } from '../models/users.js';

// Sync the model with the database
User.sync({ force: false })
  .then(() => {
    console.log('User table has been created.');
  })
  .catch((error) => {
    console.error('Unable to create the table:', error);
  });
