const { Prescripciones } = require("../database/db");


const getPrescripcion = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Prescripcion = await Prescripciones.findAll({ where: pacienteId === id });
      if (Prescripcion) {
        res.status(200).json(Prescripcion);
      } else {
        res.status(404).json({ message: "Prescripcion no encontrado" });
      }
    } else {
      const Receta = await Prescripciones.findAll();
      res.status(200).json(Receta);
    }
  } catch (error) {
    console.error("Error al obtener la Prescripcion", error);
    res.status(500).json({ message: "Error al obtener las Prescripciones", error });
  }
};

const createPrescripcion = async (req, res) => {
  const {
    name,
    tipoNota,
    description,
    date,
    pacienteId,
    active,
  } = req.body;

  try {
    const newPrescripcion = await Prescripciones.create({
      name,
      tipoNota,
      description,
      date,
      pacienteId,
      active,
    });

    res
      .status(201)
      .json({ message: "Prescripcion creada correctamente", Prescripcion: newPrescripcion });
  } catch (error) {
    console.error("Error al crear Prescripcion:", error);
    res.status(500).json({ message: "Error al crear Prescripcion", error });
  }
};

const updatePrescripcion = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    tipoNota,
    description,
    date,
    pacienteId,
    activo,
  } = req.body;

  try {
    const Prescripcion = await Prescripciones.findByPk(id);
    if (Prescripcion) {
      Prescripcion.name = name;
      Prescripcion.tipoNota = tipoNota;
      Prescripcion.description = description;
      Prescripcion.date = date;
      Prescripcion.pacienteId = pacienteId;
      Prescripcion.activo = activo;
      await Prescripcion.save();
      res.status(200).json({ message: "Prescripcion actualizado", Prescripcion });
    } else {
      res.status(404).json({ message: "Prescripcion no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Prescripcion:", error);
    res.status(500).json({ message: "Error al actualizar Prescripcion", error });
  }
};

const deletePrescripcion = async (req, res) => {
  const { id } = req.params;
  const { activo } = req.body;

  try {
    const Prescripcion = await Prescripciones.findByPk(id);
    if (Prescripcion) {
      Prescripcion.activo = activo;
      await Prescripcion.save();
      if (activo === true) {
        res.status(200).json({ message: "Prescripcion activada" });
      } else {
        res.status(200).json({ message: "Prescripcion eliminada" });
      }
    } else {
      res.status(404).json({ message: "Prescripcion no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Prescripcion:", error);
    res.status(500).json({ message: "Error al eliminar Prescripcion", error });
  }
};

module.exports = {
  getPrescripcion,
  createPrescripcion,
  updatePrescripcion,
  deletePrescripcion,
};
