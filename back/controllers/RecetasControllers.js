const { Recetas } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Recetas = await Recetas.findAll();
    res.json(Recetas);
  },
}; */

const getRecetas = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Receta = await Recetas.findByPk(id);
      if (Receta) {
        res.status(200).json(Receta);
      } else {
        res.status(404).json({ message: "Receta no encontrado" });
      }
    } else {
      const Receta = await Recetas.findAll();
      res.status(200).json(Receta);
    }
  } catch (error) {
    console.error("Error al obtener la Receta", error);
    res.status(500).json({ message: "Error al obtener las Recetas", error });
  }
};

const createRecetas = async (req, res) => {
  const {
    description,
    tratamientosId,
    medicamentosId,
    personalMedicoId,
    active,
  } = req.body;

  try {
    const newReceta = await Recetas.create({
      description,
      tratamientosId,
      medicamentosId,
      personalMedicoId,
      active,
    });

    res
      .status(201)
      .json({ message: "Receta creada correctamente", Receta: newReceta });
  } catch (error) {
    console.error("Error al crear Receta:", error);
    res.status(500).json({ message: "Error al crear Receta", error });
  }
};

const updateRecetas = async (req, res) => {
  const { id } = req.params;
  const {
    description,
    tratamientosId,
    medicamentosId,
    personalMedicoId,
    active,
  } = req.body;

  try {
    const Receta = await Recetas.findByPk(id);
    if (Receta) {      
      Receta.description = description;
      Receta.tratamientosId = tratamientosId;      
      Receta.medicamentosId = medicamentosId;
      Receta.personalMedicoId = personalMedicoId;
      Receta.active = active;
      await Receta.save();
      res.status(200).json({ message: "Receta actualizado", Receta });
    } else {
      res.status(404).json({ message: "Receta no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Receta:", error);
    res.status(500).json({ message: "Error al actualizar Receta", error });
  }
};

const deleteRecetas = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  try {
    const Receta = await Recetas.findByPk(id);
    if (Receta) {
      Receta.active = active;
      await Receta.save();
      if (active === true) {
        res.status(200).json({ message: "Receta activada" });
      } else {
        res.status(200).json({ message: "Receta eliminada" });
      }
    } else {
      res.status(404).json({ message: "Receta no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Receta:", error);
    res.status(500).json({ message: "Error al eliminar Receta", error });
  }
};

module.exports = {
  getRecetas,
  createRecetas,
  updateRecetas,
  deleteRecetas,
};
