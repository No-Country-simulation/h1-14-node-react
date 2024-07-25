const { Especialidades } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let especialidades = await Especialidades.findAll({
      include: {
      association: "Medicos"
  }});
    res.json(especialidades);
  },
};
 */

const getEspecialidades = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const especialidades = await especialidades.findByPk(id);
      if (especialidades) {
        res.status(200).json(especialidades);
      } else {
        res.status(404).json({ message: "Entidad no encontrado" });
      }
    } else {
      const especialidades = await Especialidades.findAll();
      res.status(200).json(especialidades);
    }
  } catch (error) {
    console.error("Error al obtener la Especialidad", error);
    res.status(500).json({ message: "Error al obtener las Especialidad", error });
  }
};

const createEspecialidades = async (req, res) => {
  const { name, description, active } = req.body;

  try {
    const newEspecialidad = await Especialidades.create({
      name,
      description,
      active,
    });

    res.status(201).json({
      message: "Especialidad creada correctamente",
      Farmacia: newEspecialidad,
    });
  } catch (error) {
    console.error("Error al crear Especialidad:", error);
    res.status(500).json({ message: "Error al crear Especialidad", error });
  }
};

const updateEspecialidades = async (req, res) => {
  const { id } = req.params;
  const { name, description, active } = req.body;

  try {
    const especialidades = await Especialidades.findByPk(id);
    if (especialidades) {
      especialidades.name = name;
      especialidades.description = description;
      especialidades.active = active;
      await especialidades.save();
      res.status(200).json({ message: "Entidad actualizado", especialidades });
    } else {
      res.status(404).json({ message: "Entidad no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Farmacia:", error);
    res.status(500).json({ message: "Error al actualizar Farmacia", error });
  }
};

const deleteEspecialidades = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  try {
    const especialidades = await Especialidades.findByPk(id);
    if (especialidades) {
      especialidades.active = active;
      await especialidades.save();
      if ((active === true)) {
        res.status(200).json({ message: "Especialidad activada" });
      } else {
        res.status(200).json({ message: "Especialidad eliminada" });
      }
    } else {
      res.status(404).json({ message: "Dato no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Farmacia:", error);
    res.status(500).json({ message: "Error al eliminar Farmacia", error });
  }
};

module.exports = {
  getEspecialidades,
  createEspecialidades,
  updateEspecialidades,
  deleteEspecialidades,
};
