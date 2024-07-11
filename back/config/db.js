const {database,
username,
password,host, dialect, port} = require( "./config.js");
const Sequelize  =  require("sequelize");

const connectMySql = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    dialect: dialect,
    port: port
  },
);

module.exports = async function connectDb() {
  try {
    await connectMySql.authenticate();
    await connectMySql.sync();
    // await import("./database/seeders/index.js");
    console.log("Conexion exitosa a la DB");
  } catch (error) {
    console.log("Error de conexion a la DB =", error);
  }
}
