import query from '../index.js';
import dbConfig from '../dbConfig.js';

const userQuery = `CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                Name TEXT,
                Surname TEXT,
                Score INT
                )`;

async function createUserTable() {
  const res = await query(userQuery);
  console.log(dbConfig.host);
  console.log(res);
}

createUserTable();
