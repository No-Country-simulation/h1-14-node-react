import connectDb from "../config/db.js";
import { DataTypes } from "sequelize";

export const UserModel = connectDb.define(
  "Users",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dni: {type: DataTypes.INTEGER},
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    role: {
      type: DataTypes.ENUM("ADMINISTRADOR", "MEDICO", "PACIENTE"),
      defaultValue: "PACIENTE",
      allowNull: false,
    },
    email: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
  },
  {
    timestamps: true,
  }
);