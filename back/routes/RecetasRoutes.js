const express = require("express");
const router = express.Router();
const {
  getRecetas,
  createRecetas,
  updateRecetas,
  deleteRecetas,
} = require("../controllers/RecetasControllers");


/**
 * @swagger
 * tags:
 *   name: Recetas
 *   description: Recetas
 */

// Ver lista de Recetas.
/**
 * @swagger
 * /api/v1/receta/:
 *   get:
 *     summary: lista de todas las Recetas.
 *     description: Se envia el id de la Receta o sin params para la lista completa.
 *     tags: [Recetas]
 *     responses:
 *       200:
 *         description: Lista de Recetas.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getRecetas)

  // Informacion de las Recetas.
  /**
   * @swagger
   * /api/v1/receta/{id}:
   *   get:
   *     summary: Informacion de una Receta.
   *     description: Se envia el id de la Receta o sin params para la lista completa.
   *     tags: [Recetas]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la Receta para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Recetas.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getRecetas)

  // Crear Recetas.
  /**
   * @swagger
   * /api/v1/receta/:
   *   post:
   *     summary: Crear una nueva Receta
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Recetas]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Recetas'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la Receta.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la Receta.
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
   *         description: Nueva Receta creada.
   *       400:
   *         description: Error al crear la Receta.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createRecetas)

  /**
   * @swagger
   * /api/v1/receta/:
   *   put:
   *     summary: Actualizar una Receta
   *     description: EndPoint para actualizar un registro.
   *     tags: [Recetas]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Recetas'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la Receta.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la Receta.
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
   *         description: Nueva Receta creada.
   *       400:
   *         description: Error al crear la Receta.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateRecetas)
  .patch("/:id", deleteRecetas);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Recetas
 *   description: Recetas API.
 *
 * components:
 *   schemas:
 *      Recetas:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la Receta
 *         descripcion:
 *            type: string
 *            description: descripcion de la Receta
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
