const { Tratamientos } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Tratamientos = await Tratamientos.findAll();
    res.json(Tratamientos);
  },
}; */

const getTratamientos = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Tratamiento = await Tratamientos.findByPk(id);
      if (Tratamiento) {
        res.status(200).json(Tratamiento);
      } else {
        res.status(404).json({ message: "Tratamiento no encontrado" });
      }
    } else {
      const Tratamiento = await Tratamientos.findAll();
      res.status(200).json(Tratamiento);
    }
  } catch (error) {
    console.error("Error al obtener la Tratamiento", error);
    res
      .status(500)
      .json({ message: "Error al obtener las Tratamientos", error });
  }
};

const createTratamientos = async (req, res) => {
  const { description, patologiasId, pacientesId, active } = req.body;

  try {
    const newTratamiento = await Tratamientos.create({
      description,
      patologiasId,
      pacientesId,
      active,
    });

    res
      .status(201)
      .json({
        message: "Tratamiento creada correctamente",
        Tratamiento: newTratamiento,
      });
  } catch (error) {
    console.error("Error al crear Tratamiento:", error);
    res.status(500).json({ message: "Error al crear Tratamiento", error });
  }
};

const updateTratamientos = async (req, res) => {
  const { id } = req.params;
  const { description, patologiasId, pacientesId, active } = req.body;

  try {
    const Tratamiento = await Tratamientos.findByPk(id);
    if (Tratamiento) {
      Tratamiento.description = description;
      Tratamiento.patologiasId = patologiasId;
      Tratamiento.pacientesId = pacientesId;
      Tratamiento.active = active;
      await Tratamiento.save();
      res.status(200).json({ message: "Tratamiento actualizado", Tratamiento });
    } else {
      res.status(404).json({ message: "Tratamiento no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Tratamiento:", error);
    res.status(500).json({ message: "Error al actualizar Tratamiento", error });
  }
};

const deleteTratamientos = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  try {
    const Tratamiento = await Tratamientos.findByPk(id);
    if (Tratamiento) {
      Tratamiento.active = active;
      await Tratamiento.save();
      if (active === true) {
        res.status(200).json({ message: "Tratamiento activada" });
      } else {
        res.status(200).json({ message: "Tratamiento eliminada" });
      }
    } else {
      res.status(404).json({ message: "Tratamiento no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Tratamiento:", error);
    res.status(500).json({ message: "Error al eliminar Tratamiento", error });
  }
};

module.exports = {
  getTratamientos,
  createTratamientos,
  updateTratamientos,
  deleteTratamientos,
};
