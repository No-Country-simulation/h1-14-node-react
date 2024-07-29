const express = require("express");
const router = express.Router();
const {
  getPatients,
  createPatients,
  updatePatients,
  logicalDeletePatients,
  physicalDeletePatients,
} = require("../controllers/PatientsController");

/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: API for managing patients
 */

/**
 * @swagger
 * /api/v1/pacientes:
 *   get:
 *     summary: Get all patients
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: List of patients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patient'
 */
router.get("/", getPatients);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   get:
 *     summary: Get a patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Patient ID
 *     responses:
 *       200:
 *         description: A single patient
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient'
 *       404:
 *         description: Patient not found
 */
router.get("/:id", getPatients);

/**
 * @swagger
 * /api/v1/pacientes:
 *   post:
 *     summary: Create a new patient
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       201:
 *         description: Patient created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", createPatients);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   put:
 *     summary: Update a patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Patient ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       200:
 *         description: Patient updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Patient not found
 */
router.put("/:id", updatePatients);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   patch:
 *     summary: Logical delete a patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Patient ID
 *     responses:
 *       200:
 *         description: Patient logically deleted successfully
 *       404:
 *         description: Patient not found
 */
router.patch("/:id", logicalDeletePatients);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   delete:
 *     summary: Physically delete a patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Patient ID
 *     responses:
 *       200:
 *         description: Patient deleted successfully
 *       404:
 *         description: Patient not found
 */
router.delete("/:id", physicalDeletePatients);

module.exports = router;

