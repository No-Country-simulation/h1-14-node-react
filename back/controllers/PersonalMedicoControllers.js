const { PersonalMedico } = require("../database/db");

async function getPersonalMedico(req, res) {
  const personalMedicoId = req.params.id;

  try {
    if (personalMedicoId) {
      const personalMedico = await PersonalMedico.findByPk(personalMedicoId, {
        attributes: [
          "id",
          "especialidadesId",
          "usuariosId",
          "numeroMatricula",
          "active",
        ],
      });
      if (personalMedico) {
        res.status(200).json(personalMedico);
      } else {
        res.status(404).json({ message: "Personal Médico no encontrado" });
      }
    } else {
      const personalMedico = await PersonalMedico.findAll({
        attributes: [
          "id",
          "especialidadesId",
          "usuariosId",
          "numeroMatricula",
          "active",
        ],
      });
      console.log(personalMedico);
      res.status(200).json(personalMedico);
    }
  } catch (error) {
    console.error("Error al obtener personal médico:", error);
    res
      .status(500)
      .json({ message: "Error al obtener personal médico", error });
  }
}

const createPersonalMedico = async (req, res) => {
  const { especialidadesId, usuariosId, numeroMatricula, active } = req.body;

  try {
    const newPersonalMedico = await PersonalMedico.create({
      especialidadesId,
      usuariosId,
      numeroMatricula,
      active,
    });

    res.status(201).json({
      message: "Personal Medico creado correctamente",
      personalMedico: newPersonalMedico,
    });
  } catch (error) {
    console.error("Error al crear personal médico:", error);
    res.status(500).json({ message: "Error al crear personal médico", error });
  }
};

const updatePersonalMedico = async (req, res) => {
  const personalMedicoId = req.params.id;
  const { especialidadesId, usuariosId, numeroMatricula, active } = req.body;

  try {
    const personalMedico = await PersonalMedico.findByPk(personalMedicoId, {
      attributes: [
        "id",
        "especialidadesId",
        "usuariosId",
        "numeroMatricula",
        "active",
      ],
    });

    if (!personalMedico) {
      return res.status(404).json({ message: "Personal Medico not found" });
    }

    if (especialidadesId !== undefined)
      personalMedico.especialidadesId = especialidadesId;
    if (usuariosId !== undefined) personalMedico.usuariosId = usuariosId;
    if (numeroMatricula !== undefined)
      personalMedico.numeroMatricula = numeroMatricula;
    if (active !== undefined) personalMedico.active = active;

    await personalMedico.save();
    res
      .status(200)
      .json({ message: "Parsonal Médico actualizado", personalMedico });
  } catch (error) {
    console.error("Error al actualizar Personal Médico:", error);
    res.status(500).json({ message: "Error al Personal Médico", error });
  }
};

const logicalDeletePersonalMedico = async (req, res) => {
  const personalMedicoId = req.params.id;
  const { active } = req.body;
  if (typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "El campo 'active' debe ser un valor booleano" });
  }

  try {
    const personalMedico = await PersonalMedico.findByPk(personalMedicoId, {
      attributes: [
        "id",
        "especialidadesId",
        "usuariosId",
        "numeroMatricula",
        "active",
      ],
    });
    if (!personalMedico) {
      return res.status(404).json({ message: "Personal Médico no encontrado" });
    }

    personalMedico.active = active;
    await personalMedico.save();

    const status = personalMedico.active ? "activado" : "desactivado";
    res.status(200).json({ message: `Personal Médico ${status}` });
  } catch (error) {
    console.error("Error al actualizar el estado del Personal Médico:", error);
    res.status(500).json({
      message: "Error al actualizar el estado del Personal Médico",
      error,
    });
  }
};

const physicalDeletePersonalMedico = async (req, res) => {
  const personalMedicoId = req.params.id;

  try {
    const personalMedico = await PersonalMedico.findByPk(personalMedicoId, {
      attributes: [
        "id",
        "especialidadesId",
        "usuariosId",
        "numeroMatricula",
        "active",
      ],
    });
    if (!personalMedico) {
      return res.status(404).json({ message: "Personal Médico no encontrado" });
    }
    await personalMedico.destroy();
    res.status(200).json({ message: "Personal Médico eliminado" });
  } catch (error) {
    console.error("Error al eliminar personal médico:", error);
    res
      .status(500)
      .json({ message: "Error al eliminar personal médico", error });
  }
};

module.exports = {
  getPersonalMedico,
  createPersonalMedico,
  updatePersonalMedico,
  logicalDeletePersonalMedico,
  physicalDeletePersonalMedico,
};
