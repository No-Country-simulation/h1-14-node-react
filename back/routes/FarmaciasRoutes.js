const express = require("express");
const router = express.Router();
const {
  getFarmacias,
  createFarmacias,
  updateFarmacias,
  deleteFarmacias,
} = require("../controllers/FarmaciasControllers");


/**
 * @swagger
 * tags:
 *   name: Farmacias
 *   description: Farmacias
 */

// Ver lista de Farmacias.
/**
 * @swagger
 * /api/v1/farmacia/:
 *   get:
 *     summary: lista de todas las Farmacias.
 *     description: Se envia el id de la farmacia o sin params para la lista completa.
 *     tags: [Farmacias]
 *     responses:
 *       200:
 *         description: Lista de Farmacias.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getFarmacias)

  // Informacion de las Farmacias.
  /**
   * @swagger
   * /api/v1/farmacia/{id}:
   *   get:
   *     summary: Informacion de una farmacia.
   *     description: Se envia el id de la farmacia o sin params para la lista completa.
   *     tags: [Farmacias]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la farmacia para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Farmacias.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getFarmacias)

  // Crear Farmacias.
  /**
   * @swagger
   * /api/v1/farmacia/:
   *   post:
   *     summary: Crear una nueva farmacia
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Farmacias]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Farmacias'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la farmacia.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la farmacia.
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
   *         description: Nueva farmacia creada.
   *       400:
   *         description: Error al crear la farmacia.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createFarmacias)

  /**
   * @swagger
   * /api/v1/farmacia/:
   *   put:
   *     summary: Actualizar una farmacia
   *     description: EndPoint para actualizar un registro.
   *     tags: [Farmacias]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Farmacias'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la farmacia.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la farmacia.
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
   *         description: Nueva farmacia creada.
   *       400:
   *         description: Error al crear la farmacia.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateFarmacias)
  .patch("/:id", deleteFarmacias);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Farmacias
 *   description: Farmacias API.
 *
 * components:
 *   schemas:
 *      Farmacias:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la farmacia
 *         descripcion:
 *            type: string
 *            description: descripcion de la farmacia
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
