import { User } from '../models/users';

// Sync the model with the database
User.sync({ force: false })
  .then(() => {
    console.log('User table has been created.');
    sequelize.close();
  })
  .catch((error) => {
    console.error('Unable to create the table:', error);
    sequelize.close();
  });
