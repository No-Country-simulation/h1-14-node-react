const express = require("express");
const router = express.Router();
const {
  getPrescripcion,
  createPrescripcion,
  updatePrescripcion,
  deletePrescripcion,
} = require("../controllers/PrescripcionControllers");


/**
 * @swagger
 * tags:
 *   name: Prescripcion
 *   description: Prescripcion
 */

// Ver lista de Prescripciones.
router
  .get("/", getPrescripcion)

  // Informacion de las Prescripciones.
  /**
   * @swagger
   * /api/v1/prescripcion{id}:
   *   get:
   *     summary: Informacion de una Prescripcion.
   *     description: Se envia el id del paciente para la lista completa.
   *     tags: [Entidades]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID del paciente para ver sus Prescripciones.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Prescripciones.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .get("/:id", getPrescripciones)

  // Crear Prescripciones.
  /**
   * @swagger
   * /api/v1/prescripcion/:
   *   post:
   *     summary: Crear una nueva Prescripcion
   *     description: EndPoint para crear registro nuevos.
   *     tags: [Prescripcion]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Prescripcion'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name del medicamento.
   *         schema:
   *           type: string
   *         required: true
   *         example: Tacrolimus
   *       - in: body
   *         name: tipoNota
   *         schema:
   *           type: string
   *         required: true
   *         description: tipo de prescripcion.
   *         example: Otras Indicaciones
   *       - in: body
   *         name: descripcion
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la entidad.
   *         example: Otras Indicaciones
   *       - in: body
   *         name: date
   *         schema:
   *           type: date
   *         required: true
   *         description: fecha y hora.
   *         example: Otras Indicaciones
   *       - in: body
   *         name: pacienteId
   *         schema:
   *           type: integer
   *         required: true
   *         description: 01.
   *         example: true
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
  .post("/", createPrescripcion)

  /**
   * @swagger
   * /api/v1/prescripcion/:
   *   put:
   *     summary: Actualizar una Prescripcion
   *     description: EndPoint para actualizar un registro.
   *     tags: [Prescripcion]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Prescripcion'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: name
   *         description: name del medicamento.
   *         schema:
   *           type: string
   *         required: true
   *         example: Tacrolimus
   *       - in: body
   *         name: tipoNota
   *         schema:
   *           type: string
   *         required: true
   *         description: tipo de prescripcion.
   *         example: Otras Indicaciones
   *       - in: body
   *         name: descripcion
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción de la entidad.
   *         example: Otras Indicaciones
   *       - in: body
   *         name: date
   *         schema:
   *           type: date
   *         required: true
   *         description: fecha y hora.
   *         example: Otras Indicaciones
   *       - in: body
   *         name: pacienteId
   *         schema:
   *           type: integer
   *         required: true
   *         description: 01.
   *         example: true
   *       - in: body
   *         name: active
   *         schema:
   *           type: boolean
   *         required: true
   *         description: Estar en false significa eliminado.
   *         example: true
   *     responses:
   *       200:
   *         description: Nueva prescripcion creada.
   *       400:
   *         description: Error al crear la prescripcion.
   *       500:
   *         description: Error interno del servidor
   */

  .put("/:id", updatePrescripcion)
  .patch("/:id", deletePrescripcion);


/**
 * @swagger
 * tags:
 *   name: Prescripcion
 *   description: Prescripcion API.
 *
 * components:
 *   schemas:
 *      Prescripcion:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre del medicamento
 *           example: Tacrolimus
   *       tipoNota:
   *         type: string
   *         description: tipo de prescripcion.
   *         example: Otras Indicaciones
   *      descripcion:
   *         type: string
   *         description: Descripción de la entidad.
   *         example: Otras Indicaciones
   *       date:
   *         type: date
   *         description: fecha y hora.
   *         example: Otras Indicaciones
   *       pacienteId
   *         type: integer
   *         description: 01.
   *         example: true
   *       activo
   *         type: boolean
   *         description: Estar en false significa eliminado.
   *         example: true
 *       required:
 *         - name
 *         - tipoNota
 *         - pacienteId
 *         - date
 *         - description
 *         - activo
 *
 */

module.exports = router;
