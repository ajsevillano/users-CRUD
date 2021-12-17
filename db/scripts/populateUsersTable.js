import query from '../index.js';
import usersData from '../../data/users.js';

async function populateTableUsers() {
  for (let index = 0; index < usersData.length; index++) {
    const { name, surname, score } = usersData[index];
    //SQL to populate the table.
    const sqlString = `INSERT into users (name,surname,score) VALUES ($1,$2,$3) RETURNING *`;
    const response = await query(sqlString, [name, surname, score]);
    console.log(response);
  }
}

populateTableUsers();
