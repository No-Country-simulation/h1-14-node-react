const express = require("express");
const router = express.Router();
const {
  getPatologias,
    createPatologias,
    updatePatologias,
    deletePatologias
} = require("../controllers/PatologiasControllers");


/**
 * @swagger
 * tags:
 *   name: Patologias
 *   description: Patologias
 */

// Ver lista de Patologias.
/**
 * @swagger
 * /api/v1/patologia/:
 *   get:
 *     summary: lista de todas las Patologias.
 *     description: Se envia el id de la patologia o sin params para la lista completa.
 *     tags: [Patologias]
 *     responses:
 *       200:
 *         description: Lista de Patologias.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getPatologias)

  // Informacion de las Patologias.
  /**
   * @swagger
   * /api/v1/patologia/{id}:
   *   get:
   *     summary: Informacion de una patologia.
   *     description: Se envia el id de la patologia o sin params para la lista completa.
   *     tags: [Patologias]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la patologia para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Patologias.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getPatologias)

  // Crear Patologias.
  /**
   * @swagger
   * /api/v1/patologia/:
   *   post:
   *     summary: Crear una nueva patologia
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Patologias]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Patologias'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la patologia.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la patologia.
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
   *         description: Nueva patologia creada.
   *       400:
   *         description: Error al crear la patologia.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createPatologias)

  /**
   * @swagger
   * /api/v1/patologia/:
   *   put:
   *     summary: Actualizar una patologia
   *     description: EndPoint para actualizar un registro.
   *     tags: [Patologias]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Patologias'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la patologia.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la patologia.
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
   *         description: Nueva patologia creada.
   *       400:
   *         description: Error al crear la patologia.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updatePatologias)

  /**
   * @swagger
   * /api/v1/patologia/:
   *   patch:
   *     summary: Actualizar una patologia
   *     description: EndPoint para actualizar un registro.
   *     tags: [Patologias]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Patologias'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la patologia.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la patologia.
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
   *         description: Nueva patologia creada.
   *       400:
   *         description: Error al crear la patologia.
   *       500:
   *         description: Error interno del servidor
   */
  .patch("/:id", deletePatologias);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Patologias
 *   description: Patologias API.
 *
 * components:
 *   schemas:
 *      Patologias:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la patologia
 *         descripcion:
 *            type: string
 *            description: descripcion de la patologia
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
