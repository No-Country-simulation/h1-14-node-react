const { Ubicaciones } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getUbicaciones = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Ubicacion = await Ubicaciones.findByPk(id);
      if (Ubicacion) {
        res.status(200).json(Ubicacion);
      } else {
        res.status(404).json({ message: "Ubicacion no encontrado" });
      }
    } else {
      const Ubicacion = await Ubicaciones.findAll({
        include: {
          association: "residente",
        },
      });
      res.status(200).json(Ubicacion);
    }
  } catch (error) {
    console.error("Error al obtener la Ubicacion", error);
    res
      .status(500)
      .json({ message: "Error al obtener las Ubicaciones", error });
  }
};

const createUbicaciones = async (req, res) => {
  const { name, description, active } = req.body;

  try {
    const newUbicacion = await Ubicaciones.create({
      name,
      description,
      active,
    });

    res.status(201).json({
      message: "Ubicacion creada correctamente",
      Entidad: newUbicacion,
    });
  } catch (error) {
    console.error("Error al crear Ubicacion:", error);
    res.status(500).json({ message: "Error al crear Ubicacion", error });
  }
};

const updateUbicaciones = async (req, res) => {
  const { id } = req.params;
  const { name, description, active } = req.body;

  try {
    const Ubicacion = await Ubicaciones.findByPk(id);
    if (Ubicacion) {
      Ubicacion.name = name;
      Ubicacion.description = description;
      Ubicacion.active = active;
      await Ubicacion.save();
      res.status(200).json({ message: "Entidad actualizado", Ubicacion });
    } else {
      res.status(404).json({ message: "Entidad no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Entidad:", error);
    res.status(500).json({ message: "Error al actualizar Entidad", error });
  }
};

const deleteUbicaciones = async (req, res) => {
  const { id } = req.params;

  try {
    const Ubicacion = await Ubicaciones.findByPk(id);
    if (Ubicacion) {
      Ubicacion.description = "Inactivo";
      await Ubicacion.save();
      res.status(200).json({ message: "Entidad eliminada" });
    } else {
      res.status(404).json({ message: "Entidad no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Entidad:", error);
    res.status(500).json({ message: "Error al eliminar Entidad", error });
  }
};

module.exports = {
  getUbicaciones,
  createUbicaciones,
  updateUbicaciones,
  deleteUbicaciones,
};
