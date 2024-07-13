const express = require('express');
const router = express.Router();
const {
   getAllUsers,
   createUsers,
   updateUsers,
   deleteUsers
} = require('../controllers/UsersController.js');

/* GET users listing. */
router.get('/', getAllUsers);
/* router.get('/:id', getUsers); // 
router.post('/', createUsers);
router.put('/', updateUsers);  // :id body
router.delete('/', deleteUsers); // :id dody */

module.exports = router;
