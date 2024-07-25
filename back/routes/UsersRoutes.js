const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  updateUsers,
  logicalDeleteUsers,
  physicalDeleteUsers,
} = require("../controllers/UserControllers");

/* GET users listing. */
router.get("/", getUsers);
router.get("/:id", getUsers);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.patch("/:id", logicalDeleteUsers);
router.delete('/:id', physicalDeleteUsers);

module.exports = router;
