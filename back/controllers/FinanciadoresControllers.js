const { Financiadores } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getFinanciadores = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Financiador = await Financiadores.findByPk(id);
      if (Financiador) {
        res.status(200).json(Financiador);
      } else {
        res.status(404).json({ message: "Financiador no encontrado" });
      }
    } else {
      const Financiador = await Financiadores.findAll();
      res.status(200).json(Financiador);
    }
  } catch (error) {
    console.error("Error al obtener el Financiador", error);
    res.status(500).json({ message: "Error al obtener el Financiador", error });
  }
};

const createFinanciadores = async (req, res) => {
  const { name, description, active } = req.body;

  try {
    const newFinanciador = await Financiadores.create({
      name,
      description,
      active,
    });

    res
      .status(201)
      .json({
        message: "Datos guardados correctamente",
        Financiador: newFinanciador,
      });
  } catch (error) {
    console.error("Error al guardar la informacion:", error);
    res.status(500).json({ message: "Error al guardar la informacion", error });
  }
};

const updateFinanciadores = async (req, res) => {
  const { id } = req.params;
  const { name, description, active } = req.body;

  try {
    const Financiador = await Financiadores.findByPk(id);
    if (Financiador) {
      Financiador.name = name;
      Financiador.description = description;
      Financiador.active = active;
      await Financiador.save();
      res.status(200).json({ message: "Datos actualizados", Financiador });
    } else {
      res.status(404).json({ message: "Datos no encontrados" });
    }
  } catch (error) {
    console.error("Error al actualizar informacion:", error);
    res.status(500).json({ message: "Error al actualizar informacion", error });
  }
};

const deleteFinanciadores = async (req, res) => {
    console.log(req.params)
  const { id } = req.params;
  const { active } = req.body;

  try {
    const Financiador = await Financiadores.findByPk(id);
    if (Financiador) {
      Financiador.active = active;
      await Financiador.save();
      if (active === true) {
        res.status(200).json({ message: "Datos activada" });
      } else {
        res.status(200).json({ message: "Datos eliminada" });
      }
    } else {
      res.status(404).json({ message: "informacion no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar informacion:", error);
    res.status(500).json({ message: "Error al eliminar datos", error });
  }
};

module.exports = {
  getFinanciadores,
  createFinanciadores,
  updateFinanciadores,
  deleteFinanciadores,
};
