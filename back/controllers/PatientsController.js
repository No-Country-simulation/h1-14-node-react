const Patients = require('../database/models/patients');

async function getPatients(req, res) {
    const patientId = req.params.id;
    
    try {
        if (patientId) {
            const patient = await Patients.findByPk(patientId);
            if (patient) {
                res.status(200).json(patient);
            } else {
                res.status(404).json({ message: 'Paciente no encontrado' });
            }
        } else {
            const patients = await Patients.findAll();
            res.status(200).json(patients);
        }
    } catch (error) {
        console.error('Error al obtener pacientes:', error);
        res.status(500).json({ message: 'Error al obtener pacientes', error });
    }
}


const createPatients = async (req, res) => {
    const { entidadesId, financiadoresId, personalMedicoId, patologiasId, usuarioID, factorSanguineo, Activo } = req.body;
  
    try {
        const newPatient = await Patients.create({
            entidadesId,
            financiadoresId,
            personalMedicoId,
            patologiasId,
            usuarioID,
            factorSanguineo,
            Activo,
        });

        res.status(201).json({ message: 'Paciente creado correctamente', patient: newPatient });
    } catch (error) {
        console.error('Error al crear paciente:', error);
        res.status(500).json({ message: 'Error al crear paciente', error });
    }
};


const updatePatients = async (req, res) => {
    const patientId = req.params.id;
    const { entidadesId, financiadoresId, personalMedicoId, patologiasId, usuarioID, factorSanguineo, Activo } = req.body;
    
    try {
        const patient = await Patients.findByPk(patientId);
        if (patient) {
            patient.entidadesId = entidadesId;
            patient.financiadoresId = financiadoresId;
            patient.personalMedicoId = personalMedicoId;
            patient.patologiasId = patologiasId;
            patient.usuarioID = usuarioID;
            patient.factorSanguineo = factorSanguineo;
            patient.Activo = Activo;
            await patient.save();
            res.status(200).json({ message: 'Paciente actualizado', patient });
        } else {
            res.status(404).json({ message: 'Paciente no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar paciente:', error);
        res.status(500).json({ message: 'Error al actualizar paciente', error });
    }
};


const deletePatients = async (req, res) => {
    const patientId = req.params.id;
    
    try {
        const patient = await Patients.findByPk(patientId);
        if (patient) {
            await patient.destroy();
            res.status(200).json({ message: 'Paciente eliminado' });
        } else {
            res.status(404).json({ message: 'Paciente no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar paciente:', error);
        res.status(500).json({ message: 'Error al eliminar paciente', error });
    }
};

module.exports = {
    getPatients,
    createPatients,
    updatePatients,
    deletePatients
};
