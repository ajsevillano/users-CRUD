import query from '../index.js';

const userQuery = `CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                first_name TEXT,
                last_name TEXT,
                email TEXT,
                catchphrase TEXT,
                timestamp BIGINT
                )`;

async function createUserTable() {
  const res = await query(userQuery);
  console.log(res);
}

createUserTable();
