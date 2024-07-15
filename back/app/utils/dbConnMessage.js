const { sequelize } = require('../database/models/index');
const debug = require('debug')('backend:db');

async function dbConnectMessage() {
   try {
      await sequelize.authenticate();
      debug('Connection to database successful!');
   } catch (error) {
      debug('Failed to connect the database:', '\x1b[31m', error.message, '\x1b[0m');
   }
}

module.exports = dbConnectMessage;
