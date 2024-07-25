const express = require( 'express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
   res.send("Hola mundo...");
});

//Users

// Ubicacion

module.exports = router;
