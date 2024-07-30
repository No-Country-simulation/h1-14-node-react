const { NotaPacientes } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getNotasPaciente = async (req, res) => {
    const {id} = req.params;
    
    try {
        if (id) {
            const Nota = await NotaPacientes.findByPk(id);
            if (Nota) {
                res.status(200).json(Nota);
            } else {
                res.status(404).json({ message: 'Nota no encontrado' });
            }
        } else {
            const Nota = await NotaPacientes.findAll();
            res.status(200).json(Nota);
        }
    } catch (error) {
        console.error('Error al obtener la Nota', error);
        res.status(500).json({ message: 'Error al obtener las Notas', error });
    }
}


const createNotasPaciente = async (req, res) => {
    const { tipoNota, descripcion, dataTime, marcado, activo } = req.body;
  
    try {
        const newNota = await NotaPacientes.create({
            tipoNota,
            descripcion,
            dataTime,
            marcado,
            activo
        });

        res.status(201).json({ message: 'Nota creada correctamente', Entidad: newEntidad });
    } catch (error) {
        console.error('Error al crear Nota:', error);
        res.status(500).json({ message: 'Error al crear Nota', error });
    }
};


const updateNotasPaciente = async (req, res) => {
    const {id} = req.params;
    const { tipoNota, descripcion, dataTime, marcado, activo } = req.body;
    
    try {
        const Nota = await NotaPacientes.findByPk(id);
        if (Nota) {
            Nota.tipoNota = tipoNota;
            Nota.descripcion = descripcion;
            Nota.dataTime = dataTime,
            Nota.marcado = marcado,
            Nota.activo = activo;
            await Nota.save();
            res.status(200).json({ message: 'Nota actualizado', Entidad });
        } else {
            res.status(404).json({ message: 'Nota no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar Nota:', error);
        res.status(500).json({ message: 'Error al actualizar Nota', error });
    }
};


const deleteNotasPaciente = async (req, res) => {
    const {id} = req.params;
    const { activo } = req.body;
    
    try {
        const Nota = await NotaPacientes.findByPk(id);
        if (Nota) {
            Nota.activo = activo;
            await Nota.save();
            if ((activo === true)) {
                res.status(200).json({ message: "Nota activada" });
              } else {
                res.status(200).json({ message: "Nota eliminada" });
              }
        } else {
            res.status(404).json({ message: 'Nota no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar Nota:', error);
        res.status(500).json({ message: 'Error al eliminar Nota', error });
    }
};

module.exports = {
    getNotasPaciente,
    createNotasPaciente,
    updateNotasPaciente,
    deleteNotasPaciente
};