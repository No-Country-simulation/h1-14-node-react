const express = require("express");
const router = express.Router();
const {
  getEntidades,
  createEntidades,
  updateEntidades,
  deleteEntidades,
} = require("../controllers/EntidadesControllers");


/**
 * @swagger
 * tags:
 *   name: Entidades
 *   description: Entidades
 */

// Ver lista de Entidades.
/**
 * @swagger
 * /api/v1/entidad/:
 *   get:
 *     summary: lista de todas las entidades.
 *     description: Se envia el id de la entidad o sin params para la lista completa.
 *     tags: [Entidades]
 *     responses:
 *       200:
 *         description: Lista de Entidades.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getEntidades)

  // Informacion de las Entidades.
  /**
   * @swagger
   * /api/v1/entidad/{id}:
   *   get:
   *     summary: Informacion de una entidad.
   *     description: Se envia el id de la entidad o sin params para la lista completa.
   *     tags: [Entidades]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la entidad para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Entidades.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getEntidades)

  // Crear Entidades.
  /**
   * @swagger
   * /api/v1/entidad/:
   *   post:
   *     summary: Crear una nueva entidad
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Entidades]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Entidades'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la entidad.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la entidad.
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
   *         description: Nueva entidad creada.
   *       400:
   *         description: Error al crear la entidad.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createEntidades)

  /**
   * @swagger
   * /api/v1/entidad/:
   *   put:
   *     summary: Actualizar una entidad
   *     description: EndPoint para actualizar un registro.
   *     tags: [Entidades]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Entidades'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la entidad.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la entidad.
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
   *         description: Nueva entidad creada.
   *       400:
   *         description: Error al crear la entidad.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateEntidades)
  .patch("/:id", deleteEntidades);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Entidades
 *   description: Entidades API.
 *
 * components:
 *   schemas:
 *      Entidades:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la entidad
 *         descripcion:
 *            type: string
 *            description: descripcion de la entidad
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
