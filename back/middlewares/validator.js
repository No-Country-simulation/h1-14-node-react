import { check } from 'express-validator';

const error1 = 'Username o contraseña son incorrectos';
const error2 = 'La contraseña debe tener un mínimo de 10 caracteres y un máximo de 50 caracteres';
const error3 = 'La contraseña no debe contener espacios';
const error4 = 'La contraseña debe contener al menos 1 letra mayúscula, 1 letra minúscula, 1 número y 1 carácter especial';
const error5 = 'DNI debe ser numérico y tener entre 8 y 11 caracteres';

const ValidationsLogin = [
   check('username')
      .exists().withMessage('Ingrese un nombre de usuario')
      .notEmpty().withMessage('Ingrese un nombre de usuario')
      .isLength({ min: 3, max: 12 }).withMessage(error1),
   check('password')
      .exists().withMessage('Ingrese el password')
      .notEmpty().withMessage('Ingrese el password')
      .isLength({ min: 10, max: 50 }).withMessage(error2)
      .matches(/^\S*$/).withMessage(error3)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/).withMessage(error4),
   check('dni')
      .exists().withMessage('Ingrese el DNI')
      .notEmpty().withMessage('Ingrese el DNI')
      .isLength({ min: 8, max: 11 }).withMessage(error5)
      .isNumeric().withMessage(error5)
];

export default ValidationsLogin;
