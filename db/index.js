import dbConfig from './dbConfig.js';

import { Sequelize } from 'sequelize';

// INITIALIZE SEQUELIZE
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dbtype,
  },
);

export default sequelize;
