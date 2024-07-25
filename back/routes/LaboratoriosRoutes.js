const express = require("express");
const router = express.Router();
const {
  getLaboratorios,
    createLaboratorios,
    updateLaboratorios,
    deleteLaboratorios
} = require("../controllers/LaboratoriosControllers");


/**
 * @swagger
 * tags:
 *   name: Laboratorios
 *   description: Laboratorios
 */

// Ver lista de Laboratorios.
/**
 * @swagger
 * /api/v1/laboratorio/:
 *   get:
 *     summary: lista de todas las Laboratorios.
 *     description: Se envia el id de la laboratorio o sin params para la lista completa.
 *     tags: [Laboratorios]
 *     responses:
 *       200:
 *         description: Lista de Laboratorios.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getLaboratorios)

  // Informacion de las Laboratorios.
  /**
   * @swagger
   * /api/v1/laboratorio/{id}:
   *   get:
   *     summary: Informacion de una laboratorio.
   *     description: Se envia el id de la laboratorio o sin params para la lista completa.
   *     tags: [Laboratorios]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la laboratorio para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Laboratorios.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", createLaboratorios)

  // Crear Laboratorios.
  /**
   * @swagger
   * /api/v1/laboratorio/:
   *   post:
   *     summary: Crear una nueva laboratorio
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Laboratorios]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Laboratorios'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la laboratorio.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la laboratorio.
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
   *         description: Nueva laboratorio creada.
   *       400:
   *         description: Error al crear la laboratorio.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createLaboratorios)

  /**
   * @swagger
   * /api/v1/laboratorio/:
   *   put:
   *     summary: Actualizar una Laboratorios
   *     description: EndPoint para actualizar un registro.
   *     tags: [Laboratorios]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Laboratorios'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la laboratorio.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la laboratorio.
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
   *         description: Nueva laboratorio creada.
   *       400:
   *         description: Error al crear la laboratorio.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateLaboratorios)
  .patch("/:id", deleteLaboratorios);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Laboratorios
 *   description: Laboratorios API.
 *
 * components:
 *   schemas:
 *      Laboratorios:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la laboratorio
 *         descripcion:
 *            type: string
 *            description: descripcion de la laboratorio
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
