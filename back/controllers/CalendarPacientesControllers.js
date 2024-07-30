const { CalendarPacientes } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getEventosPaciente = async (req, res) => {
    const {id} = req.params;
    
    try {
        if (id) {
            const Evento = await CalendarPacientes.findAll({where: pacienteId === id});
            if (Evento) {
                res.status(200).json(Evento);
            } else {
                res.status(404).json({ message: 'Evento no encontrado' });
            }
        } else {
            const Evento = await CalendarPacientes.findAll();
            res.status(200).json(Evento);
        }
    } catch (error) {
        console.error('Error al obtener la entidad', error);
        res.status(500).json({ message: 'Error al obtener las entidades', error });
    }
}


const createEventosPaciente = async (req, res) => {
    const { pacienteId, tipoEvento, evento, dataTime, estado, dias, vecesxdia, activo } = req.body;
  
    try {
        const newEvento = await CalendarPacientes.create({
            pacienteId,
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


const updateEventosPaciente = async (req, res) => {
    const {id} = req.params;
    const { pacienteId, tipoEvento, evento, dataTime, estado, activo } = req.body;
    
    try {
        const Evento = await CalendarPacientes.findByPk(id);
        if (Evento) {
            Evento.pacienteId = pacienteId;
            Evento.tipoEvento = tipoEvento;
            Evento.evento = evento;
            Evento.dataTime = dataTime,
            Evento.estado = estado,
            Evento.dias = dias,
            Evento.vecesxdia = vecesxdia,
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


const deleteEventosPaciente = async (req, res) => {
    const {id} = req.params;
    const { activo } = req.body;
    
    try {
        const Evento = await CalendarPacientes.findByPk(id);
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
    getEventosPaciente,
    createEventosPaciente,
    updateEventosPaciente,
    deleteEventosPaciente
};