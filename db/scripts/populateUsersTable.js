import query from '../index.js';
import { users } from '../mockData/users.js';

async function populateTableUsers() {
  for (let index = 0; index < users.length; index++) {
    const { first_name, last_name, email, catchphrase, timestamp } =
      users[index];

    //SQL to populate the table.
    const sqlString = `INSERT into users (first_name,last_name,email,catchphrase,timestamp) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
    const response = await query(sqlString, [
      first_name,
      last_name,
      email,
      catchphrase,
      timestamp,
    ]);
    console.log(response);
  }
}

populateTableUsers();
