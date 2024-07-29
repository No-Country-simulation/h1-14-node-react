const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUsers,
  updateUsers,
  logicalDeleteUsers,
  physicalDeleteUsers,
} = require("../controllers/UserControllers");

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *       500:
 *         description: Internal server error
 */
router.get("/", getUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to get
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User object
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getUsers);

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dniType:
 *                 type: string
 *               dni:
 *                 type: string
 *               password:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               role:
 *                 type: string
 *               gender:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               active:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: User created
 *       500:
 *         description: Internal server error
 */
router.post("/", createUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dniType:
 *                 type: string
 *               dni:
 *                 type: string
 *               password:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               role:
 *                 type: string
 *               gender:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", updateUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   patch:
 *     summary: Logically delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to logically delete
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: User logically deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", logicalDeleteUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Physically delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to physically delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User physically deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", physicalDeleteUsers);

module.exports = router;
