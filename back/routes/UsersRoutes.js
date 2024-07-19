const express = require('express');
const router = express.Router();
const {
   getUsers,
   createUsers,
   updateUsers,
   deleteUsers
} = require('../controllers/UserControllers');

/* GET users listing. */
router.get('/', getUsers);
router.get('/:id', getUsers); // git 
router.post('/', createUsers);
router.put('/', updateUsers);  // :id body
router.delete('/', deleteUsers); // :id dody

module.exports = router;
 

