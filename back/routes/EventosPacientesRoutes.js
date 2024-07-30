const express = require("express");
const router = express.Router();
const {
  getEventosPaciente,
  createEventosPaciente,
  updateEventosPaciente,
  deleteEventosPaciente
} = require("../controllers/CalendarioPacienteControllers");


/**
 * @swagger
 * tags:
 *   name: CalendarioPacientes
 *   description: Eventos de los pacientes
 */

// Ver lista de Eventos.
router
  .get("/", getEventosPaciente)

  // Informacion de los Eventos.
  /**
   * @swagger
   * /api/v1/eventospaciente/{id}:
   *   get:
   *     summary: Lista de eventos de un paciente.
   *     description: Se envia el id del paciente se retorna la lista completa de sus eventos.
   *     tags: [CalendarioPaciente]
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
  .get("/:id", getEventosPaciente)

  // Crear Entidades.
  /**
   * @swagger
   * /api/v1/entidadpaciente/:
   *   post:
   *     summary: Crear una nuevo evento
   *     description: EndPoint para crear registro nuevos.
   *     tags: [CalendarioPaciente]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CalendarioPaciente'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: pacienteId
   *         description: Id del Paciente.
   *         schema:
   *           type: Integer
   *         required: true
   *         example: 01
   *       - in: body
   *         name: tipoEvento
   *         description: tipo de evento.
   *         schema:
   *           type: string
   *         required: true
   *         example: Consulta
   *       - in: body
   *         name: evento
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción del evento.
   *         example: Paciente con deficiencia renal.
   *       - in: body
   *         name: dataTime
   *         schema:
   *           type: date
   *         required: true
   *         description: Fecha y hora del evento
   *         example: 2024-10-10:10:10
   *       - in: body
   *         name: estado
   *         schema:
   *           type: string
   *         required: true
   *         description: Estado del evento reflejando el ciclo de vida.
   *         example: Pending.
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
  .post("/", createEventosPaciente)

  /**
   * @swagger
   * /api/v1/eventopaciente/:
   *   put:
   *     summary: Actualizar un evento
   *     description: EndPoint para actualizar un registro.
   *     tags: [CalendarioPaciente]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CalendarioPaciente'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: pacienteId
   *         description: Id del Paciente.
   *         schema:
   *           type: Integer
   *         required: true
   *         example: 01
   *       - in: body
   *         name: tipoEvento
   *         description: tipo de evento.
   *         schema:
   *           type: string
   *         required: true
   *         example: Consulta
   *       - in: body
   *         name: evento
   *         schema:
   *           type: string
   *         required: true
   *         description: Descripción del evento.
   *         example: Paciente con deficiencia renal.
   *       - in: body
   *         name: dataTime
   *         schema:
   *           type: date
   *         required: true
   *         description: Fecha y hora del evento
   *         example: 2024-10-10:10:10
   *       - in: body
   *         name: estado
   *         schema:
   *           type: string
   *         required: true
   *         description: Estado del evento reflejando el ciclo de vida.
   *         example: Pending.
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

  .put("/:id", updateEventosPaciente)

    /**
   * @swagger
   * /api/v1/eventospaciente/{id}:
   *   patch:
   *     summary: Eliminar eventos de un Paciente.
   *     description: Se envia el id del evento.
   *     tags: [CalendarioPaciente]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID del Paciente para ver sus eventos.
   *         schema:
   *           type: string
   *         required: false
   *         example: 1
   *     responses:
   *       200:
   *         description: Lista de Eventos.
   *       400:
   *         description: Error con el ID.
   *       500:
   *         description: Error interno del servidor.
   */
  .patch("/:id", deleteEventosPaciente);
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
