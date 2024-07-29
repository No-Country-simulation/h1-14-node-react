const express = require("express");
const router = express.Router();

// Routes 
const userRouter = require("./UsersRoutes");
const personalMedicoRouter = require("./PersonalMedicoRoutes");
const patientRouter = require("./PatientsRoutes");
// const usersRouter = require('./UsersRoutes');
const loginRouter = require('./LoginRoutes');
const entidadRouter = require("./EntidadesRoutes");
const fianciadoresRouter = require("./FinanciadoresRoutes");
const ubicacionRouter = require("./UbicacionRoutes");
const farmaciasRouter = require("./FarmaciasRoutes");
const especialidadesRouter = require("./EspecialidadesRoutes");
const laboratoriosRouter = require("./LaboratoriosRoutes");
const patologiasRouter = require("./PatologiasRoutes");
const tratamientosRouter = require("./TratamientosRoutes");
const recetasRouter = require("./RecetasRoutes");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Bienvenidos a Justina.io backend deploy...");
});

//Users
router.use("/api/v1/users", userRouter);

//PeronalMedico
router.use("/api/v1/personalMedico", personalMedicoRouter);

// Pacientes
router.use("/api/v1/pacientes", patientRouter);

// Login
router.use('/api/v1/login', loginRouter);

// Entidades
router.use("/api/v1/entidad", entidadRouter);

// Finaciadores
router.use("/api/v1/financiador", fianciadoresRouter);

// Ubicacion
router.use("/api/v1/ubicacion", ubicacionRouter);

// Farmacias
router.use("/api/v1/farmacia", farmaciasRouter);

// Especialidades
router.use("/api/v1/especialidad", especialidadesRouter);

// Especialidades
router.use("/api/v1/laboratorio", laboratoriosRouter);

// Patologias
router.use("/api/v1/patologia", patologiasRouter);

// Tratamientos
router.use("/api/v1/tratamiento", tratamientosRouter);

// Recetas
router.use("/api/v1/recetas", recetasRouter);

module.exports = router;
