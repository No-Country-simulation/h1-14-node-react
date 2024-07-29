const { Pacientes } = require("../database/db");

async function getPatients(req, res) {
  const patientId = req.params.id;

  try {
    if (patientId) {
      const patient = await Pacientes.findByPk(patientId, {
        attributes: [
          "id",
          "entidadesId",
          "financiadoresId",
          "personalMedicoId",
          "patologiasId",
          "usuarioId",
          "factorSanguineo",
          "Activo",
        ],
      });
      if (patient) {
        res.status(200).json(patient);
      } else {
        res.status(404).json({ message: "Paciente no encontrado" });
      }
    } else {
      const patients = await Pacientes.findAll({
        attributes: [
          "id",
          "entidadesId",
          "financiadoresId",
          "personalMedicoId",
          "patologiasId",
          "usuarioId",
          "factorSanguineo",
          "Activo",
        ],
      });
      res.status(200).json(patients);
    }
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    res.status(500).json({ message: "Error al obtener pacientes", error });
  }
}

const createPatients = async (req, res) => {
  const {
    entidadesId,
    financiadoresId,
    personalMedicoId,
    patologiasId,
    usuarioID,
    factorSanguineo,
    Activo,
  } = req.body;

  try {
    const newPatient = await Pacientes.create({
      entidadesId,
      financiadoresId,
      personalMedicoId,
      patologiasId,
      usuarioID,
      factorSanguineo,
      Activo,
    });

    res
      .status(201)
      .json({ message: "Paciente creado correctamente", patient: newPatient });
  } catch (error) {
    console.error("Error al crear paciente:", error);
    res.status(500).json({ message: "Error al crear paciente", error });
  }
};

const updatePatients = async (req, res) => {
  const patientId = req.params.id;
  const {
    entidadesId,
    financiadoresId,
    personalMedicoId,
    patologiasId,
    usuarioID,
    factorSanguineo,
    Activo,
  } = req.body;

  try {
    const patient = await Pacientes.findByPk(patientId, {
        attributes: [
          "id",
          "entidadesId",
          "financiadoresId",
          "personalMedicoId",
          "patologiasId",
          "usuarioId",
          "factorSanguineo",
          "Activo",
        ],
      });
    if (patient) {
      if (entidadesId !== undefined) patient.entidadesId = entidadesId;
      if (financiadoresId !== undefined)
        patient.financiadoresId = financiadoresId;
      if (personalMedicoId !== undefined)
        patient.personalMedicoId = personalMedicoId;
      if (patologiasId !== undefined) patient.patologiasId = patologiasId;
      if (usuarioID !== undefined) patient.usuarioID = usuarioID;
      if (factorSanguineo !== undefined)
        patient.factorSanguineo = factorSanguineo;
      if (Activo !== undefined) patient.Activo = Activo;
      await patient.save();
      res.status(200).json({ message: "Paciente actualizado", patient });
    } else {
      res.status(404).json({ message: "Paciente no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar paciente:", error);
    res.status(500).json({ message: "Error al actualizar paciente", error });
  }
};

const logicalDeletePatients = async (req, res) => {
  const patientId = req.params.id;
  const { active } = req.body;
  if (typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "El campo 'active' debe ser un valor booleano" });
  }
  try {
    const patient = await Pacientes.findByPk(patientId, {
        attributes: [
          "id",
          "entidadesId",
          "financiadoresId",
          "personalMedicoId",
          "patologiasId",
          "usuarioId",
          "factorSanguineo",
          "Activo",
        ],
      });
    if (patient) {
        patient.active = active;
        await patient.save();
    
        const status = patient.active ? "activado" : "desactivado";
      res.status(200).json({ message: `Paciente ${status}` });
    } else {
      res.status(404).json({ message: "Paciente no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    res.status(500).json({ message: "Error al eliminar paciente", error });
  }
};

const physicalDeletePatients = async (req, res) => {
  const patientId = req.params.id;

  try {
    const patient = await Pacientes.findByPk(patientId, {
        attributes: [
          "id",
          "entidadesId",
          "financiadoresId",
          "personalMedicoId",
          "patologiasId",
          "usuarioId",
          "factorSanguineo",
          "Activo",
        ],
      });
    if (patient) {
      await patient.destroy();
      res.status(200).json({ message: "Paciente eliminado" });
    } else {
      res.status(404).json({ message: "Paciente no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    res.status(500).json({ message: "Error al eliminar paciente", error });
  }
};

module.exports = {
  getPatients,
  createPatients,
  updatePatients,
  logicalDeletePatients,
  physicalDeletePatients,
};
