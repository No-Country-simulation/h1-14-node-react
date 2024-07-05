const express = require('express');
const router = express.Router();
const {
   getUsers,
   createUsers,
   updateUsers,
   deleteUsers
} = require('../controllers/UsersController');

/* GET users listing. */
router.get('/', getUsers);
router.get('/:id', getUsers); // 
router.post('/', createUsers);
router.put('/', updateUsers);  // :id body
router.delete('/', deleteUsers); // :id dody

module.exports = router;
