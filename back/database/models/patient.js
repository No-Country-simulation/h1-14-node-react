import connectDb from "../config/db.js";
import { DataTypes } from "sequelize";

export const UserModel = connectDb.define(
  "Patient",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    entidadesId: { type: DataTypes.INTEGER },
    financiadoresId: { type: DataTypes.INTEGER },
    personalMedicoId: { type: DataTypes.INTEGER },
    patologiasId: { type: DataTypes.INTEGER },
    usuarioID: { type: DataTypes.INTEGER },
    factorSanguineo: { type: DataTypes.INTEGER },
    Activo: { type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
  }
);
