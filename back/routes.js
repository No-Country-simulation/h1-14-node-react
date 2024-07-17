const express = require('express')
const router = express.Router()
const UserControllers = require('./controllers/UserControllers.js')
const UbicacionControllers = require('./controllers/UbicacionControllers.js')


// Home
router.get("/", function(req, res) {
    res.json({HOLA: " MUNDO"})
    })

//Users
router.get('/api/v1/users', UserControllers.All )
router.get('/api/v1/ubicaciones', UbicacionControllers.All )

module.exports = router