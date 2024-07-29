const express = require("express");
const router = express.Router();
const {
  getUbicaciones,
  createUbicaciones,
  updateUbicaciones,
  logicalDeleteUbicaciones,
  physicalDeleteUbicaciones,
} = require("../controllers/UbicacionControllers");

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Ubicaciones API.
 */

// Ver lista de Ubicaciones.
/**
 * @swagger
 * /api/v1/ubicacion/:
 *   get:
 *     summary: Lista de todas las Ubicaciones.
 *     description: Se envia el id de la ubicacion o sin params para la lista completa.
 *     tags: [Ubicaciones]
 *     responses:
 *       200:
 *         description: Lista de Ubicaciones.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/", getUbicaciones);

// Informacion de las Ubicaciones.
/**
 * @swagger
 * /api/v1/ubicacion/{id}:
 *   get:
 *     summary: Informacion de una ubicacion.
 *     description: Se envia el id de la ubicacion para ver su informacion.
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID de la ubicacion para ver su informacion.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: Información de la Ubicación.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/:id", getUbicaciones);

// Crear Ubicaciones.
/**
 * @swagger
 * /api/v1/ubicacion/:
 *   post:
 *     summary: Crear una nueva ubicacion.
 *     description: EndPoint para crear registro nuevos.
 *     tags: [Ubicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ubicaciones'
 *     responses:
 *       201:
 *         description: Nueva ubicacion creada.
 *       400:
 *         description: Error al crear la ubicacion.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/", createUbicaciones);

// Actualizar una Ubicacion.
/**
 * @swagger
 * /api/v1/ubicacion/{id}:
 *   put:
 *     summary: Actualizar una ubicacion.
 *     description: EndPoint para actualizar un registro.
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID de la ubicacion a actualizar.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ubicaciones'
 *     responses:
 *       200:
 *         description: Ubicacion actualizada.
 *       400:
 *         description: Error al actualizar la ubicacion.
 *       500:
 *         description: Error interno del servidor.
 */
router.put("/:id", updateUbicaciones);

// Eliminar lógicamente una Ubicacion.
/**
 * @swagger
 * /api/v1/ubicacion/{id}:
 *   patch:
 *     summary: Eliminar lógicamente una ubicacion.
 *     description: EndPoint para eliminar lógicamente un registro.
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID de la ubicacion a eliminar lógicamente.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: Ubicacion eliminada lógicamente.
 *       400:
 *         description: Error al eliminar la ubicacion.
 *       500:
 *         description: Error interno del servidor.
 */
router.patch("/:id", logicalDeleteUbicaciones);

// Eliminar físicamente una Ubicacion.
/**
 * @swagger
 * /api/v1/ubicacion/{id}:
 *   delete:
 *     summary: Eliminar físicamente una ubicacion.
 *     description: EndPoint para eliminar físicamente un registro.
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID de la ubicacion a eliminar físicamente.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: Ubicacion eliminada físicamente.
 *       400:
 *         description: Error al eliminar la ubicacion.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete("/:id", physicalDeleteUbicaciones);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Ubicaciones:
 *       type: object
 *       properties:
 *         usuariosId:
 *           type: integer
 *           description: ID del usuario asociado.
 *         pais:
 *           type: string
 *           description: País de la ubicación.
 *         provincias:
 *           type: string
 *           description: Provincia de la ubicación.
 *         localidad:
 *           type: string
 *           description: Localidad de la ubicación.
 *         direccion:
 *           type: string
 *           description: Dirección de la ubicación.
 *         active:
 *           type: boolean
 *           description: Estado de la ubicación, true si está activa, false si está eliminada.
 *       required:
 *         - usuariosId
 *         - pais
 *         - provincias
 *         - localidad
 *         - direccion
 *       example:
 *         usuariosId: 1
 *         pais: Argentina
 *         provincias: Buenos Aires
 *         localidad: La Plata
 *         direccion: Calle Falsa 123
 *         active: true
 */
