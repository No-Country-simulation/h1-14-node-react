import "./config.js";
import { Sequelize } from "sequelize";

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

export async function connectDb() {
  try {
    await connectMySql.authenticate();
    await connectMySql.sync();
    // await import("./database/seeders/index.js");
    console.log("Conexion exitosa a la DB");
  } catch (error) {
    console.log("Error de conexion a la DB =", error);
  }
}
