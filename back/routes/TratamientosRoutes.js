const express = require("express");
const router = express.Router();
const {
  getTratamientos,
  createTratamientos,
  updateTratamientos,
  logicalDeleteTratamientos,
  physicalDeleteTratamientos,
} = require("../controllers/TratamientosControllers");

/**
 * @swagger
 * tags:
 *   name: Tratamientos
 *   description: API para la gestión de tratamientos.
 */

// Ver lista de Tratamientos.
/**
 * @swagger
 * /api/v1/tratamiento/:
 *   get:
 *     summary: Lista de todos los tratamientos.
 *     description: Se obtiene la lista de tratamientos, con o sin parámetros.
 *     tags: [Tratamientos]
 *     responses:
 *       200:
 *         description: Lista de tratamientos obtenida con éxito.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/", getTratamientos);

// Información de un Tratamiento.
/**
 * @swagger
 * /api/v1/tratamiento/{id}:
 *   get:
 *     summary: Información de un tratamiento.
 *     description: Se obtiene la información de un tratamiento por ID.
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del tratamiento para ver su información.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: Información del tratamiento obtenida con éxito.
 *       400:
 *         description: Error con el ID.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/:id", getTratamientos);

// Crear Tratamientos.
/**
 * @swagger
 * /api/v1/tratamiento/:
 *   post:
 *     summary: Crear un nuevo tratamiento.
 *     description: Endpoint para crear un nuevo tratamiento.
 *     tags: [Tratamientos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tratamientos'
 *     responses:
 *       201:
 *         description: Nuevo tratamiento creado con éxito.
 *       400:
 *         description: Error al crear el tratamiento.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/", createTratamientos);

// Actualizar un Tratamiento.
/**
 * @swagger
 * /api/v1/tratamiento/{id}:
 *   put:
 *     summary: Actualizar un tratamiento.
 *     description: Endpoint para actualizar un tratamiento existente.
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del tratamiento a actualizar.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tratamientos'
 *     responses:
 *       200:
 *         description: Tratamiento actualizado con éxito.
 *       400:
 *         description: Error al actualizar el tratamiento.
 *       500:
 *         description: Error interno del servidor.
 */
router.put("/:id", updateTratamientos);

// Eliminar lógicamente un Tratamiento.
/**
 * @swagger
 * /api/v1/tratamiento/{id}:
 *   patch:
 *     summary: Eliminar lógicamente un tratamiento.
 *     description: Endpoint para eliminar lógicamente un tratamiento existente.
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del tratamiento a eliminar lógicamente.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: Tratamiento eliminado lógicamente con éxito.
 *       400:
 *         description: Error al eliminar el tratamiento.
 *       500:
 *         description: Error interno del servidor.
 */
router.patch("/:id", logicalDeleteTratamientos);

// Eliminar físicamente un Tratamiento.
/**
 * @swagger
 * /api/v1/tratamiento/{id}:
 *   delete:
 *     summary: Eliminar físicamente un tratamiento.
 *     description: Endpoint para eliminar físicamente un tratamiento existente.
 *     tags: [Tratamientos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: El ID del tratamiento a eliminar físicamente.
 *         schema:
 *           type: integer
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: Tratamiento eliminado físicamente con éxito.
 *       400:
 *         description: Error al eliminar el tratamiento.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete("/:id", physicalDeleteTratamientos);

/**
 * @swagger
 * components:
 *   schemas:
 *     Tratamientos:
 *       type: object
 *       properties:
 *         usuariosId:
 *           type: integer
 *           description: ID del usuario asociado.
 *         nombre:
 *           type: string
 *           description: Nombre del tratamiento.
 *         descripcion:
 *           type: string
 *           description: Descripción del tratamiento.
 *         active:
 *           type: boolean
 *           description: Estado del tratamiento, true si está activo, false si está eliminado.
 *       required:
 *         - usuariosId
 *         - nombre
 *         - descripcion
 *         - active
 *       example:
 *         usuariosId: 1
 *         nombre: Tratamiento de Oncología
 *         descripcion: Especialistas en cáncer.
 *         active: true
 */

module.exports = router;
