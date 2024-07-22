import { check } from "express-validator";

const errorMessages = {
  usernameLength: "Username o contraseña son incorrectos",
  passwordLength:
    "La contraseña debe tener un mínimo de 10 caracteres y un máximo de 50 caracteres",
  passwordNoSpaces: "La contraseña no debe contener espacios",
  passwordStrength:
    "La contraseña debe contener al menos 1 letra mayúscula, 1 letra minúscula, 1 número y 1 carácter especial",
  dniNumeric: "DNI debe ser numérico y tener entre 8 y 11 caracteres",
};

const loginValidator = [
  check("username")
    .exists()
    .withMessage("Ingrese un nombre de usuario")
    .notEmpty()
    .withMessage("Ingrese un nombre de usuario")
    .isLength({ min: 3, max: 12 })
    .withMessage(errorMessages.usernameLength),

  check("password")
    .exists()
    .withMessage("Ingrese el password")
    .notEmpty()
    .withMessage("Ingrese el password")
    .isLength({ min: 10, max: 50 })
    .withMessage(errorMessages.passwordLength)
    .matches(/^\S*$/)
    .withMessage(errorMessages.passwordNoSpaces)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    )
    .withMessage(errorMessages.passwordStrength),

  check("dni")
    .exists()
    .withMessage("Ingrese el DNI")
    .notEmpty()
    .withMessage("Ingrese el DNI")
    .isLength({ min: 8, max: 11 })
    .withMessage(errorMessages.dniNumeric)
    .isNumeric()
    .withMessage(errorMessages.dniNumeric),
];

export default loginValidator;
