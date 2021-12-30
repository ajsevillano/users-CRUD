// Import query from  db/index.js
import query from '../index.js';
// SQL query to drop the table
const sqlString = `DROP TABLE users;`;

// Look  at the books data to decide on columns name
// Use our query function and hand it our SQL string inside of a createBooksTable function
async function deleteUsersTable() {
  const res = await query(sqlString);
  console.log('table users deleted', res);
}

// Call our createBooksTable function
deleteUsersTable();
