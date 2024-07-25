const express = require("express");
const router = express.Router();
const {
  getTratamientos,
  createTratamientos,
  updateTratamientos,
  deleteTratamientos,
} = require("../controllers/TratamientosControllers");


/**
 * @swagger
 * tags:
 *   name: Tratamientos
 *   description: Tratamientos
 */

// Ver lista de Tratamientos.
/**
 * @swagger
 * /api/v1/tratamiento/:
 *   get:
 *     summary: lista de todas las Tratamientos.
 *     description: Se envia el id de la tratamiento o sin params para la lista completa.
 *     tags: [Tratamientos]
 *     responses:
 *       200:
 *         description: Lista de Tratamientos.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getTratamientos)

  // Informacion de las Tratamientos.
  /**
   * @swagger
   * /api/v1/tratamiento/{id}:
   *   get:
   *     summary: Informacion de una tratamiento.
   *     description: Se envia el id de la tratamiento o sin params para la lista completa.
   *     tags: [Tratamientos]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la tratamiento para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Tratamientos.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getTratamientos)

  // Crear Tratamientos.
  /**
   * @swagger
   * /api/v1/tratamiento/:
   *   post:
   *     summary: Crear una nueva tratamiento
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Tratamientos]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Tratamientos'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la tratamiento.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la tratamiento.
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
   *         description: Nueva tratamiento creada.
   *       400:
   *         description: Error al crear la tratamiento.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createTratamientos)

  /**
   * @swagger
   * /api/v1/tratamiento/:
   *   put:
   *     summary: Actualizar una tratamiento
   *     description: EndPoint para actualizar un registro.
   *     tags: [Tratamientos]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Tratamientos'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la tratamiento.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la tratamiento.
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
   *         description: Nueva tratamiento creada.
   *       400:
   *         description: Error al crear la tratamiento.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateTratamientos)
  .patch("/:id", deleteTratamientos);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Tratamientos
 *   description: Tratamientos API.
 *
 * components:
 *   schemas:
 *      Tratamientos:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la tratamiento
 *         descripcion:
 *            type: string
 *            description: descripcion de la tratamiento
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
