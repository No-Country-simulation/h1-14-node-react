import { check, validationResult } from "express-validator";
import { resFail } from "../utils/response.js";

export const createUserValidation = [
  check("email")
    .exists()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe ser un correo electrónico valido")
    .isLength({ min: 3, max: 255 })
    .withMessage("El email debe tener entre 3 y 255 caracteres"),
  check("password")
    .exists()
    .withMessage("La contraseña es obligatoria")
    .isString()
    .withMessage("La contraseña debe ser una cadena de texto")
    .isLength({ min: 8, max: 255 })
    .withMessage("La contraseña debe tener entre 8 y 255 caracteres"),
  check("role")
    .exists()
    .withMessage("El rol es obligatorio")
    .isString()
    .withMessage("El rol debe ser una cadena de texto")
    .isLength({ min: 3, max: 255 })
    .withMessage("El rol debe tener entre 3 y 255 caracteres"),
  check("firstName")
    .exists()
    .withMessage("El nombre es obligatorio")
    .isString()
    .withMessage("El nombre debe ser una cadena de texto"),
  check("lastName")
    .exists()
    .withMessage("El apellido es obligatorio")
    .isString()
    .withMessage("El apellido debe ser una cadena de texto"),
  check("phone")
    .exists()
    .withMessage("El telefono es obligatorio")
    .isString()
    .withMessage("El telefono debe ser una cadena de texto"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resFail(res, 400, errors.array());
  }
  next();
};
