const express = require("express");
const router = express.Router();
const {
  getPersonalMedico,
  createPersonalMedico,
  updatePersonalMedico,
  logicalDeletePersonalMedico,
  physicalDeletePersonalMedico,
} = require("../controllers/PersonalMedicoControllers");

router.get("/", getPersonalMedico);
router.get("/:id", getPersonalMedico);

router.post("/", createPersonalMedico);

router.put("/:id", updatePersonalMedico);
router.patch("/:id", logicalDeletePersonalMedico);
router.delete("/:id", physicalDeletePersonalMedico);
/**
 * @swagger
 * tags:
 *   name: PersonalMedico
 *   description: Operations related to Personal Medico
 */

/**
 * @swagger
 * /api/v1/personalMedico:
 *   get:
 *     summary: Retrieve all PersonalMedico records
 *     tags: [PersonalMedico]
 *     responses:
 *       200:
 *         description: List of PersonalMedico
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PersonalMedico'
 *   post:
 *     summary: Create a new PersonalMedico record
 *     tags: [PersonalMedico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonalMedico'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PersonalMedico'
 */

/**
 * @swagger
 * /api/v1/personalMedico/{id}:
 *   get:
 *     summary: Retrieve a PersonalMedico record by ID
 *     tags: [PersonalMedico]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: PersonalMedico record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PersonalMedico'
 *   put:
 *     summary: Update a PersonalMedico record by ID
 *     tags: [PersonalMedico]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonalMedico'
 *     responses:
 *       200:
 *         description: Updated
 *   patch:
 *     summary: Logically delete a PersonalMedico record by ID
 *     tags: [PersonalMedico]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Logically deleted
 *   delete:
 *     summary: Physically delete a PersonalMedico record by ID
 *     tags: [PersonalMedico]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PersonalMedico:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for the PersonalMedico
 *         especialidadesId:
 *           type: integer
 *           description: The ID of the specialty
 *         usuariosId:
 *           type: integer
 *           description: The ID of the user
 *         numeroMatricula:
 *           type: string
 *           description: The registration number
 *         active:
 *           type: boolean
 *           description: Whether the record is active
 *       required:
 *         - especialidadesId
 *         - usuariosId
 *         - numeroMatricula
 */
module.exports = router;
