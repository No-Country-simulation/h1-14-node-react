import { development } from "./config.js";
import { Sequelize } from "sequelize";

const connectMySql = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
    port: development.port
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
