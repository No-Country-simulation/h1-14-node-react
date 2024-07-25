const { Users } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let users = await Users.findAll({
      include: {
          association: "domicilio"
      }
    });
    res.json(users);
  },
}; */


const getUsers = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const User = await Users.findByPk(id);
      if (User) {
        res.status(200).json(User);
      } else {
        res.status(404).json({ message: "Users no encontrado" });
      }
    } else {
      const User = await Users.findAll({
        include: {
          association: "domicilio",
        },
      });
      res.status(200).json(User);
    }
  } catch (error) {
    console.error("Error al obtener la Users", error);
    res
      .status(500)
      .json({ message: "Error al obtener las Users", error });
  }
};

const createUsers = async (req, res) => {
  const { name, description, active } = req.body;

  try {
    const newUsers = await Users.create({
      name,
      description,
      active,
    });

    res.status(201).json({
      message: "Users creada correctamente",
      Entidad: newUsers,
    });
  } catch (error) {
    console.error("Error al crear Users:", error);
    res.status(500).json({ message: "Error al crear Users", error });
  }
};

const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { name, description, active } = req.body;

  try {
    const User = await Users.findByPk(id);
    if (User) {
      User.name = name;
      User.description = description;
      User.active = active;
      await User.save();
      res.status(200).json({ message: "Users actualizado", User });
    } else {
      res.status(404).json({ message: "Users no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Users:", error);
    res.status(500).json({ message: "Error al actualizar Users", error });
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    const User = await Users.findByPk(id);
    if (User) {
      User.active = false;
      await User.save();
      res.status(200).json({ message: "Users eliminada" });
    } else {
      res.status(404).json({ message: "Users no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Users:", error);
    res.status(500).json({ message: "Error al eliminar Users", error });
  }
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
