const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/LoginController');

/* GET users listing. */
router.get('/', login);
router.post('/', register);

module.exports = router;
