const { CalendarDoctor } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getEventosDoctor = async (req, res) => {
    const {id} = req.params;
    
    try {
        if (id) {
            const Evento = await CalendarDoctor.findAll({where: personalMedicoId === id});
            if (Evento) {
                res.status(200).json(Evento);
            } else {
                res.status(404).json({ message: 'Evento no encontrado' });
            }
        } else {
            const Evento = await CalendarDoctor.findAll();
            res.status(200).json(Evento);
        }
    } catch (error) {
        console.error('Error al obtener la entidad', error);
        res.status(500).json({ message: 'Error al obtener las entidades', error });
    }
}


const createEventosDoctor = async (req, res) => {
    const { personalMedicoId, tipoEvento, evento, dataTime, estado, dias, vecesxdia, activo } = req.body;
  
    try {
        const newEvento = await CalendarDoctor.create({
            personalMedicoId,
            tipoEvento,
            evento,
            dataTime,
            estado,
            dias,
            vecesxdia,
            activo
        });

        res.status(201).json({ message: 'Evento creada correctamente', Entidad: newEntidad });
    } catch (error) {
        console.error('Error al crear Evento:', error);
        res.status(500).json({ message: 'Error al crear Evento', error });
    }
};


const updateEventosDoctor = async (req, res) => {
    const {id} = req.params;
    const { personalMedicoId, tipoEvento, evento, dataTime, estado, activo } = req.body;
    
    try {
        const Evento = await CalendarDoctor.findByPk(id);
        if (Evento) {
            Evento.personalMedicoId = personalMedicoId;
            Evento.tipoEvento = tipoEvento;
            Evento.evento = evento;
            Evento.dataTime = dataTime,
            Evento.estado = estado,
            Evento.activo = activo;
            await Evento.save();
            res.status(200).json({ message: 'Evento actualizado', Entidad });
        } else {
            res.status(404).json({ message: 'Evento no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar Evento:', error);
        res.status(500).json({ message: 'Error al actualizar Evento', error });
    }
};


const deleteEventosDoctor = async (req, res) => {
    const {id} = req.params;
    const { activo } = req.body;
    
    try {
        const Evento = await CalendarDoctor.findByPk(id);
        if (Evento) {
            entidad.activo = activo;
            await Evento.save();
            if ((activo === true)) {
                res.status(200).json({ message: "Evento activada" });
              } else {
                res.status(200).json({ message: "Evento eliminada" });
              }
        } else {
            res.status(404).json({ message: 'Evento no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar Evento:', error);
        res.status(500).json({ message: 'Error al eliminar Evento', error });
    }
};

module.exports = {
    getEventosDoctor,
    createEventosDoctor,
    updateEventosDoctor,
    deleteEventosDoctor
};