const express = require("express");
const router = express.Router();
const {
  getFinanciadores,
  createFinanciadores,
  updateFinanciadores,
  deleteFinanciadores,
} = require("../controllers/FinanciadoresControllers");

/**
 * @swagger
 * tags:
 *   name: Financiadores
 *   description: Financiadores
 */

// Ver lista de Financiadores.
/**
 * @swagger
 * /api/v1/financiadores/:
 *   get:
 *     summary: lista de todas los Financiadores.
 *     description: sin params para la lista completa.
 *     tags: [Financiadores]
 *     responses:
 *       200:
 *         description: Lista de Financiadores.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getFinanciadores)

  // Informacion de los Financiadores.
  /**
   * @swagger
   * /api/v1/financiador/{id}:
   *   get:
   *     summary: Informacion de un Financiador.
   *     description: Se envia el id del Financiador
   *     tags: [Financiadores]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la financiador para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Financiadores.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getFinanciadores)

  // Crear Financiadores.
  /**
   * @swagger
   * /api/v1/financiador/:
   *   post:
   *     summary: Crear una nueva financiador
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Financiadores]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Financiadores'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la financiador.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la financiador.
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
   *         description: Nueva financiador creada.
   *       400:
   *         description: Error al crear la financiador.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createFinanciadores)

  /**
   * @swagger
   * /api/v1/financiador/:
   *   put:
   *     summary: Actualizar una financiador
   *     description: EndPoint para actualizar un registro.
   *     tags: [Financiadores]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Financiadores'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la financiador.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la financiador.
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
   *         description: Nueva financiador creada.
   *       400:
   *         description: Error al crear la financiador.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateFinanciadores)
  .patch("/:id", deleteFinanciadores);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Financiadores
 *   description: Financiadores API.
 *
 * components:
 *   schemas:
 *      Financiadores:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la financiador
 *         descripcion:
 *            type: string
 *            description: descripcion de la financiador
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
