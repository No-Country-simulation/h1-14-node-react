const { Tratamientos } = require("../database/db");

const getTratamientos = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Tratamiento = await Tratamientos.findByPk(id, {
        attributes: [
          "id",
          "description",
          "patologiasId",
          "pacientesId",
          "personalMedicoId",
          "active",
        ],
      });
      if (Tratamiento) {
        res.status(200).json(Tratamiento);
      } else {
        res.status(404).json({ message: "Tratamiento no encontrado" });
      }
    } else {
      const Tratamiento = await Tratamientos.findAll({
        attributes: [
          "id",
          "description",
          "patologiasId",
          "pacientesId",
          "personalMedicoId",
          "active",
        ],
      });
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
  const { description, patologiasId, pacientesId, personalMedicoId, active } =
    req.body;

  try {
    const newTratamiento = await Tratamientos.create({
      description,
      patologiasId,
      pacientesId,
      personalMedicoId,
      active,
    });

    res.status(201).json({
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
  const { description, patologiasId, pacientesId, personalMedicoId, active } =
    req.body;

  try {
    const Tratamiento = await Tratamientos.findByPk(id, {
      attributes: [
        "id",
        "description",
        "patologiasId",
        "pacientesId",
        "personalMedicoId",
        "active",
      ],
    });
    if (Tratamiento) {
      if (description !== undefined) Tratamiento.description = description;
      if (patologiasId !== undefined) Tratamiento.patologiasId = patologiasId;
      if (pacientesId !== undefined) Tratamiento.pacientesId = pacientesId;
      if (personalMedicoId !== undefined)
        Tratamiento.personalMedicoId = personalMedicoId;
      if (active !== undefined) Tratamiento.active = active;
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

const logicalDeleteTratamientos = async (req, res) => {
  const tratamientoId = req.params.id;
  const { active } = req.body;

  if (typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "El campo 'active' debe ser un valor booleano" });
  }

  try {
    const tratamientos = await Tratamientos.findByPk(tratamientoId, {
      attributes: [
        "id",
        "description",
        "patologiasId",
        "pacientesId",
        "personalMedicoId",
        "active",
      ],
    });

    if (!tratamientos) {
      return res.status(404).json({ message: "Tratamiento no encontrado" });
    }

    tratamientos.active = active;
    await tratamientos.save();

    const status = tratamientos.active ? "activado" : "desactivado";
    res.status(200).json({ message: `Traramiento ${status}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al actualizar el estado del tratamiento",
      error,
    });
  }
};

const physicalDeleteTratamientos = async (req, res) => {
  const { id } = req.params;

  try {
    const Tratamiento = await Tratamientos.findByPk(id, {
      attributes: [
        "id",
        "description",
        "patologiasId",
        "pacientesId",
        "personalMedicoId",
        "active",
      ],
    });
    if (Tratamiento) {
      await Tratamiento.destroy();
      res.status(200).json({ message: "Tratamiento eliminado" });
    } else {
      res.status(404).json({ message: "Tratamiento no encontrado" });
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
  logicalDeleteTratamientos,
  physicalDeleteTratamientos,
};
