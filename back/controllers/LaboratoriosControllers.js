const { Laboratorios } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getLaboratorios = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Laboratorio = await Laboratorios.findByPk(id);
      if (Laboratorio) {
        res.status(200).json(Laboratorio);
      } else {
        res.status(404).json({ message: "Laboratorio no encontrado" });
      }
    } else {
      const Laboratorio = await Laboratorios.findAll();
      res.status(200).json(Laboratorio);
    }
  } catch (error) {
    console.error("Error al obtener el Laboratorio", error);
    res
      .status(500)
      .json({ message: "Error al obtener los Laboratorios", error });
  }
};

const createLaboratorios = async (req, res) => {
  const { name, description, active } = req.body;

  try {
    const newLaboratorio = await Laboratorios.create({
      name,
      description,
      active,
    });

    res
      .status(201)
      .json({
        message: "Entidad creada correctamente",
        Entidad: newLaboratorio,
      });
  } catch (error) {
    console.error("Error al crear Laboratorio:", error);
    res.status(500).json({ message: "Error al crear Laboratorio", error });
  }
};

const updateLaboratorios = async (req, res) => {
  const { id } = req.params;
  const { name, description, active } = req.body;

  try {
    const Laboratorio = await Laboratorios.findByPk(id);
    if (Laboratorio) {
      Laboratorio.name = name;
      Laboratorio.description = description;
      Laboratorio.active = active;
      await Laboratorio.save();
      res.status(200).json({ message: "Laboratorio actualizado", Laboratorio });
    } else {
      res.status(404).json({ message: "Laboratorio no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Laboratorio:", error);
    res.status(500).json({ message: "Error al actualizar Laboratorio", error });
  }
};

const deleteLaboratorios = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  try {
    const Laboratorio = await Laboratorios.findByPk(id);
    if (Laboratorio) {
      Laboratorio.active = active;
      await Laboratorio.save();
      if (active === true) {
        res.status(200).json({ message: "Laboratorio activada" });
      } else {
        res.status(200).json({ message: "Laboratorio eliminada" });
      }
    } else {
      res.status(404).json({ message: "Laboratorio no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Laboratorio:", error);
    res.status(500).json({ message: "Error al eliminar Laboratorio", error });
  }
};

module.exports = {
  getLaboratorios,
  createLaboratorios,
  updateLaboratorios,
  deleteLaboratorios,
};
