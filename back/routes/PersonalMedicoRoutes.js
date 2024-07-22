const express = require('express');
const router = express.Router();
const {
   getPersonalMedico,
   createPersonalMedico,
   updatePersonalMedico,
   deletePersonalMedico
} = require('../controllers/PersonalMedicoControllers');

router.get('/', getPersonalMedico);
router.get('/:id', getPersonalMedico);

router.post('/', createPersonalMedico); 

router.put('/:id', updatePersonalMedico);
router.delete('/:id', deletePersonalMedico);

module.exports = router;
