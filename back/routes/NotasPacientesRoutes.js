const express = require("express");
const router = express.Router();
const {
  getNotasPaciente,
  createNotasPaciente,
  updateNotasPaciente,
  deleteNotasPaciente
} = require("../controllers/NotasPacienteControllers");


/**
 * @swagger
 * tags:
 *   name: Eventos
 *   description: Eventos
 */

// Ver lista de Eventos.
/**
 * @swagger
 * /api/v1/notas/:
 *   get:
 *     summary: lista de todos los Eventos.
 *     description: Se envia el id del evento o sin params para la lista completa.
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de Eventos.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getNotasPaciente)

  // Informacion de los Eventos.
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
  .get("/:id", getNotasPaciente)

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
  .post("/", createNotasPaciente)

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
   *         description: name de la Eventos.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la Eventos.
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

  .put("/:id", updateNotasPaciente)
  .patch("/:id", deleteNotasPaciente);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Eventos
 *   description: Eventos API.
 *
 * components:
 *   schemas:
 *      Eventos:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la Eventos
 *         descripcion:
 *            type: string
 *            description: descripcion de la Eventos
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
