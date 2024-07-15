import { check, validationResult } from "express-validator";
import { resFail } from "../utils/response.js";

export const registerValidation = [
  check("email").isEmail().withMessage("Debe ser un correo válido"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
];

export const loginValidation = [
  check("email").isEmail().withMessage("Debe ser un correo válido"),
  check("password").exists().withMessage("La contraseña es requerida"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resFail(res, 400, errors.array());
  }
  next();
};
