const express = require("express");
const router = express.Router();
const {
  getEspecialidades,
  createEspecialidades,
  updateEspecialidades,
  deleteEspecialidades,
} = require("../controllers/EspecialidadesControllers");


/**
 * @swagger
 * tags:
 *   name: Especialidades
 *   description: Especialidades
 */

// Ver lista de Especialidades.
/**
 * @swagger
 * /api/v1/especialidad/:
 *   get:
 *     summary: lista de todas las Especialidades.
 *     description: Se envia el id de la especialidad o sin params para la lista completa.
 *     tags: [Especialidades]
 *     responses:
 *       200:
 *         description: Lista de Especialidades.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */

router
  .get("/", getEspecialidades)

  // Informacion de las Especialidades.
  /**
   * @swagger
   * /api/v1/especialidad/{id}:
   *   get:
   *     summary: Informacion de una especialidad.
   *     description: Se envia el id de la especialidad o sin params para la lista completa.
   *     tags: [Especialidades]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID de la especialidad para ver su informacion.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Especialidades.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getEspecialidades)

  // Crear Especialidades.
  /**
   * @swagger
   * /api/v1/especialidad/:
   *   post:
   *     summary: Crear una nueva especialidad
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Especialidades]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Especialidades'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la especialidad.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la especialidad.
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
   *         description: Nueva especialidad creada.
   *       400:
   *         description: Error al crear la especialidad.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createEspecialidades)

  /**
   * @swagger
   * /api/v1/especialidad/{id}:
   *   put:
   *     summary: Actualizar una Especialidades
   *     description: EndPoint para actualizar un registro.
   *     tags: [Especialidades]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Especialidades'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la especialidad.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la especialidad.
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
   *         description: Nueva especialidad creada.
   *       400:
   *         description: Error al crear la especialidad.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updateEspecialidades)

  /**
   * @swagger
   * /api/v1/especialidad/${id}:
   *   patch:
   *     summary: Actualizar una Especialidades
   *     description: EndPoint para actualizar un registro.
   *     tags: [Especialidades]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Especialidades'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name de la especialidad.
   *         schema:
   *           type: string
   *         required: true
   *         example: Hospital Pediatrico
   *       - in: body
   *         name: description
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la especialidad.
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
   *         description: Nueva especialidad creada.
   *       400:
   *         description: Error al crear la especialidad.
   *       500:
   *         description: Error interno del servidor
   */

  .patch("/:id", deleteEspecialidades);
// router.delete('/:id', physicalDeleteUsers);

/**
 * @swagger
 * tags:
 *   name: Especialidades
 *   description: Especialidades API.
 *
 * components:
 *   schemas:
 *      Especialidades:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre de la especialidad
 *         descripcion:
 *            type: string
 *            description: descripcion de la especialidad
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
