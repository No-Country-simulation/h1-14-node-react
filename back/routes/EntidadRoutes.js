const express = require('express');
const router = express.Router();
const {
   getEntidades,
    createEntidades,
    updateEntidades,
    deleteEntidades
} = require('../controllers/EntidadesControllers');

/* GET users listing. */

router.get('/', getEntidades)
.get('/:id', getEntidades)
.post('/', createEntidades)
.put('/:id', updateEntidades)
.patch('/:id', deleteEntidades); 
// router.delete('/:id', physicalDeleteUsers); 

module.exports = router;
 

