const { Farmacias } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getFarmacias = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const farmacias = await Farmacias.findByPk(id);
      if (farmacias) {
        res.status(200).json(farmacias);
      } else {
        res.status(404).json({ message: "Entidad no encontrado" });
      }
    } else {
      const farmacias = await Farmacias.findAll();
      res.status(200).json(farmacias);
    }
  } catch (error) {
    console.error("Error al obtener la Farmacia", error);
    res.status(500).json({ message: "Error al obtener las Farmacias", error });
  }
};

const createFarmacias = async (req, res) => {
  const { name, description, active } = req.body;

  try {
    const newFarmacia = await Farmacias.create({
      name,
      description,
      active,
    });

    res.status(201).json({
      message: "Farmacia creada correctamente",
      Farmacia: newFarmacia,
    });
  } catch (error) {
    console.error("Error al crear Farmacia:", error);
    res.status(500).json({ message: "Error al crear Farmacia", error });
  }
};

const updateFarmacias = async (req, res) => {
  const { id } = req.params;
  const { name, description, active } = req.body;

  try {
    const farmacias = await Farmacias.findByPk(id);
    if (farmacias) {
      farmacias.name = name;
      farmacias.description = description;
      farmacias.active = active;
      await farmacias.save();
      res.status(200).json({ message: "Entidad actualizado", farmacias });
    } else {
      res.status(404).json({ message: "Entidad no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Farmacia:", error);
    res.status(500).json({ message: "Error al actualizar Farmacia", error });
  }
};

const deleteFarmacias = async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  console.log(active);
  try {
    const farmacias = await Farmacias.findByPk(id);
    if (farmacias) {
      farmacias.active = active;
      await farmacias.save();
      if ((active === true)) {
        res.status(200).json({ message: "Farmacia activada" });
      } else {
        res.status(200).json({ message: "Farmacia eliminada" });
      }
    } else {
      res.status(404).json({ message: "Farmacia no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Farmacia:", error);
    res.status(500).json({ message: "Error al eliminar Farmacia", error });
  }
};

module.exports = {
  getFarmacias,
  createFarmacias,
  updateFarmacias,
  deleteFarmacias,
};
