const express = require("express");
const router = express.Router();
const {
  getEventosDoctor,
  createEventosDoctor,
  updateEventosDoctor,
  deleteEventosDoctor
} = require("../controllers/CalendarioDoctoresControllers");


/**
 * @swagger
 * tags:
 *   name: Calendario Doctores
 *   description: Eventos para los doctores
 */

// Todos los eventos de los doctores
router
  .get("/", getEventosDoctor)

  // Informacion de los Eventos de un doctor.
  /**
   * @swagger
   * /api/v1/eventosdoctor/{id}:
   *   get:
   *     summary: Informacion de los eventos de un doctor.
   *     description: Se envia el id de un doctor y retorna la lista completa de sus eventos.
   *     tags: [CalendarioDoctor]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID del Doctor para ver sus eventos.
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
  .get("/:id", getEventosDoctor)

  // Crear Eventos.
  /**
   * @swagger
   * /api/v1/eventosdoctor/:
   *   post:
   *     summary: Crear una nuevo evento
   *     description: EndPoint para crear registro nuevos.
   *     tags: [CalendarioDoctor]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CalendarioDoctor'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: personalMedicoId
   *         description: Id del Doctor.
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
   *         description: Nueva evento creado.
   *       400:
   *         description: Error al crear el Evento.
   *       500:
   *         description: Error interno del servidor
   */
  .post("/", createEventosDoctor)

  /**
   * @swagger
   * /api/v1/eventodoctor/:
   *   put:
   *     summary: Actualizar un evento
   *     description: EndPoint para actualizar un evento.
   *     tags: [CalendarioDoctor]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CalendarioDoctor'
   *       required: true
   *     parameters:
   *       - in: body
   *         name: personalMedicoId
   *         description: Id del Doctor.
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

  .put("/:id", updateEventosDoctor)

   /**
   * @swagger
   * /api/v1/eventosdoctor/{id}:
   *   patch:
   *     summary: Eliminar eventos de un Doctor.
   *     description: Se envia el id del evento.
   *     tags: [CalendarioDoctor]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: El ID del Doctor para ver sus eventos.
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
  .patch("/:id", deleteEventosDoctor);

/**
 * @swagger
 * tags:
 *   name: CalendarioDoctor
 *   description: Eventos para Doctores API.
 *
 * components:
 *   schemas:
 *      CalendarioDoctor:
 *       type: object
 *       properties:
 *         personalMedicoId:
 *           type: integer
 *           description: 01
 *         tipoEvento:
 *           type: string
 *           description: Consulta
 *         evento:
 *            type: string
 *            description: descripcion de la Eventos
 *         dataTime:
 *            type: data
 *            description: fecha y hora del Eventos
 *         estado:
 *            type: string
 *            description: descripe en que parte del ciclo se encuentra el evento
 *         active:
 *           type: boolean
 *           description: al ser false se considera eliminada
 *       required:
 *         - personalMedicoId
 *         - tipoEvento
 *         - evento
 *         - dataTime
 *         - estado
 *         - activo
 *       example:
 *         personalMedicoId: 01
 *         name: Consulta
 *         evento: Paciente con daño epatico
 *         dataTimem: 2024-10-10:10:10
 *         estado: Pending
 *         active: true
 *
 */

module.exports = router;
