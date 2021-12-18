import query from '../index.js';
import dbConfig from '../dbConfig.js';

const userQuery = `CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                first_name TEXT,
                last_name TEXT,
                email TEXT,
                catchphrase TEXT
                )`;

async function createUserTable() {
  const res = await query(userQuery);
  console.log(res);
}

createUserTable();
