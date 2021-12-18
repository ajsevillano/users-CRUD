const dbConfig = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
};

export default dbConfig;
