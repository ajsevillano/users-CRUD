import query from '../index.js';
import { users } from '../../data/users.js';

async function populateTableUsers() {
  for (let index = 0; index < users.length; index++) {
    const { first_name, last_name, email, catchphrase } = users[index];
    //SQL to populate the table.
    const sqlString = `INSERT into users (first_name,last_name,email,catchphrase) VALUES ($1,$2,$3,$4) RETURNING *`;
    const response = await query(sqlString, [
      first_name,
      last_name,
      email,
      catchphrase,
    ]);
    console.log(response);
  }
}

populateTableUsers();
