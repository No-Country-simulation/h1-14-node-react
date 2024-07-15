// import { query, validationResult } from 'express-validator';
import { check } from 'express-validator';
const error1 = 'Username o contraseña son incorrectos';
const error2 = 'La contraseña debe tener un minimo de 6 caracteres y un maximo de 12';

const ValidationsLogin = [
   check('username', 'Ingrese un nombre de usuario')
      .exists()
      .notEmpty()
      .isLength({ min: 3, max: 12 })
      .withMessage(error1),
   check('password', 'Ingrese el password')
      .exists()
      .notEmpty()
      .isLength({ min: 4, max: 12 })
      .withMessage(error2)
];

export default ValidationsLogin;
