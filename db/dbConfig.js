const dbConfig = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
  dbtype: process.env.DBTYPE,
};

export default dbConfig;
