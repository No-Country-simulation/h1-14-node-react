const express = require("express");
const router = express.Router();
const {
  getUbicaciones,
  createUbicaciones,
  updateUbicaciones,
  deleteUbicaciones,
} = require("../controllers/UbicacionControllers");

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Ubicaciones
 */

// Ver lista de Ubicaciones.
/**
 * @swagger
 * /api/v1/ubicacion/:
 *   get:
 *     summary: lista de todas las Ubicaciones.
 *     description: Se envia el id de la ubicacion o sin params para la lista completa.
 *     tags: [Ubicaciones]
 *     responses:
 *       200:
 *         description: Lista de Ubicaciones.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getUbicaciones)

  // Informacion de las Ubicaciones.
  /**
   * @swagger
   * /api/v1/ubicacion/{id}:
   *   get:
   *     summary: Informacion de una ubicacion.
   *     description: Se envia el id de la ubicacion o sin params para la lista completa.
   *     tags: [Ubicaciones]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la ubicacion para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Ubicaciones.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getUbicaciones)

  // Crear Ubicaciones.
  /**
   * @swagger
   * /api/v1/ubicacion/:
   *   post:
   *     summary: Crear una nueva ubicacion
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Ubicaciones]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Ubicaciones'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la ubicacion.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la ubicacion.
   *         example: Especialistas en el tratamiento del cancer.
   *       - in: body
   *         name: active
   *         schema:
   *           type: boolean
   *         required: true
   *         description: Estar en false significa eliminado.
   *         example: true
   *     responses:
   *       200:
   *         description: Nueva ubicacion creada.
   *       400:
   *         description: Error al crear la ubicacion.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createUbicaciones)

  /**
   * @swagger
   * /api/v1/ubicacion/:
   *   put:
   *     summary: Actualizar una ubicacion
   *     description: EndPoint para actualizar un registro.
   *     tags: [Ubicaciones]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Ubicaciones'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la ubicacion.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la ubicacion.
   *         example: Especialistas en el tratamiento del cancer.
   *       - in: body
   *         name: active
   *         schema:
   *           type: boolean
   *         required: true
   *         description: Estar en false significa eliminado.
   *         example: true
   *     responses:
   *       200:
   *         description: Nueva ubicacion creada.
   *       400:
   *         description: Error al crear la ubicacion.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateUbicaciones)

  
  .patch("/:id", deleteUbicaciones);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Ubicaciones API.
 *
 * components:
 *   schemas:
 *      Ubicaciones:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la ubicacion
 *         descripcion:
 *            type: string
 *            description: descripcion de la ubicacion
 *         active:
 *           type: boolean
 *           description: al ser false se considera eliminada
 *       required:
 *         - name
 *         - description
 *         - activo
 *       example:
 *         name: Hospital de Oncologia
 *         description: Especialistas en cancer
 *         active: true
 *
 */

module.exports = router;
