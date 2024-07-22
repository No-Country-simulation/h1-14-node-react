import { check } from 'express-validator';

const nameErrorMessages = {
  required: 'El campo es obligatorio',
  invalid: 'El campo solo puede contener caracteres alfabéticos y espacios (no dos o más seguidos, ni al inicio)',
  length: 'El campo debe tener entre 2 y 30 caracteres'
};

const emailErrorMessages = {
  required: 'El email es obligatorio',
  length: 'El email debe tener entre 6 y 255 caracteres',
  invalid: 'El email no es válido'
};

const passwordErrorMessages = {
  required: 'La contraseña es obligatoria',
  length: 'La contraseña debe tener entre 10 y 50 caracteres',
  invalid: 'La contraseña debe contener al menos 1 letra mayúscula, 1 letra minúscula, 1 número y 1 carácter especial',
  noSpaces: 'La contraseña no debe contener espacios'
};

const dniErrorMessages = {
  required: 'El DNI es obligatorio',
  length: 'El DNI debe tener entre 8 y 11 caracteres',
  invalid: 'El DNI solo puede contener caracteres numéricos'
};

const nameValidationRegex = /^(?! )[A-Za-zñÑáéíóúÁÉÍÓÚ ]{2,30}$/;
const noConsecutiveSpacesRegex = /^(?!.*  )(?! )[A-Za-zñÑáéíóúÁÉÍÓÚ ]{2,30}$/;
const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;

const userValidator = [
  check('nombre')
    .exists().withMessage(nameErrorMessages.required)
    .notEmpty().withMessage(nameErrorMessages.required)
    .isLength({ min: 2, max: 30 }).withMessage(nameErrorMessages.length)
    .matches(noConsecutiveSpacesRegex).withMessage(nameErrorMessages.invalid),

  check('apellido')
    .exists().withMessage(nameErrorMessages.required)
    .notEmpty().withMessage(nameErrorMessages.required)
    .isLength({ min: 2, max: 30 }).withMessage(nameErrorMessages.length)
    .matches(noConsecutiveSpacesRegex).withMessage(nameErrorMessages.invalid),

  check('email')
    .exists().withMessage(emailErrorMessages.required)
    .notEmpty().withMessage(emailErrorMessages.required)
    .isLength({ min: 6, max: 255 }).withMessage(emailErrorMessages.length)
    .matches(emailValidationRegex).withMessage(emailErrorMessages.invalid)
    .custom(value => {
      const [local, domain] = value.split('@');
      if (!local || !domain) {
        throw new Error(emailErrorMessages.invalid);
      }

      const localPartValid = /^[a-zA-Z0-9._%+-]{1,64}$/.test(local) &&
                             !/(\.\.|^\.|\.$)/.test(local);
      const domainPartValid = /^[a-zA-Z0-9.-]{4,255}$/.test(domain) &&
                              domain.includes('.') &&
                              !domain.startsWith('.') &&
                              !domain.endsWith('.') &&
                              domain.split('.').every(part => part.length >= 2 && part.length <= 10);

      if (!localPartValid || !domainPartValid) {
        throw new Error(emailErrorMessages.invalid);
      }

      return true;
    }),

  check('password')
    .exists().withMessage(passwordErrorMessages.required)
    .notEmpty().withMessage(passwordErrorMessages.required)
    .isLength({ min: 10, max: 50 }).withMessage(passwordErrorMessages.length)
    .matches(/^\S*$/).withMessage(passwordErrorMessages.noSpaces)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/).withMessage(passwordErrorMessages.invalid),

  check('dni')
    .exists().withMessage(dniErrorMessages.required)
    .notEmpty().withMessage(dniErrorMessages.required)
    .isLength({ min: 8, max: 11 }).withMessage(dniErrorMessages.length)
    .isNumeric().withMessage(dniErrorMessages.invalid)
];

export default userValidator;


