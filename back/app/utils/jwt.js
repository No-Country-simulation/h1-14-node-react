import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

const SECRET_KEY = process.env.JWT_SECRET;

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Token inválido", error);
  }
};
