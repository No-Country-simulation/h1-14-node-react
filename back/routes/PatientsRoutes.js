const express = require('express');
const router = express.Router();
const {
   getPatients,
   createPatients,
   updatePatients,
   deletePatients
} = require('../controllers/PatientsController');


router.get('/', getPatients);
router.get('/:id', getPatients); 

router.post('/', createPatients); 

router.put('/:id', updatePatients); 
router.delete('/:id', deletePatients); 

module.exports = router;
