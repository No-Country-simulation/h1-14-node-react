const { Patologias } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getPatologias = async (req, res) => {
    const {id} = req.params;
    
    try {
        if (id) {
            const Patologia = await Patologias.findByPk(id);
            if (Patologia) {
                res.status(200).json(Patologia);
            } else {
                res.status(404).json({ message: 'Patologia no encontrado' });
            }
        } else {
            const Patologia = await Patologias.findAll();
            res.status(200).json(Patologia);
        }
    } catch (error) {
        console.error('Error al obtener la Patologia', error);
        res.status(500).json({ message: 'Error al obtener las Patologias', error });
    }
}


const createPatologias = async (req, res) => {
    const { name, description,especialidadesId, active } = req.body;
  
    try {
        const newPatologia = await Patologias.create({
            name,
            description,
            especialidadesId,
            active
        });

        res.status(201).json({ message: 'Patologia creada correctamente', Entidad: newPatologia });
    } catch (error) {
        console.error('Error al crear Patologia:', error);
        res.status(500).json({ message: 'Error al crear Patologia', error });
    }
};


const updatePatologias = async (req, res) => {
    const {id} = req.params;
    const { name, description,especialidadesId, active } = req.body;
    
    try {
        const Patologia = await Patologias.findByPk(id);
        if (Patologia) {
            Patologia.name = name;
            Patologia.description = description;
            Patologia.especialidadesId = especialidadesId;
            Patologia.active = active;
            await Patologia.save();
            res.status(200).json({ message: 'Patologia actualizado', Patologia });
        } else {
            res.status(404).json({ message: 'Patologia no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar Patologia:', error);
        res.status(500).json({ message: 'Error al actualizar Patologia', error });
    }
};


const deletePatologias = async (req, res) => {
    const {id} = req.params;
    const { active } = req.body;
    
    try {
        const Patologia = await Patologias.findByPk(id);
        if (Patologia) {
            Patologia.active = active;
            await Patologia.save();
            if ((active === true)) {
                res.status(200).json({ message: "Patologia activada" });
              } else {
                res.status(200).json({ message: "Patologia eliminada" });
              }
        } else {
            res.status(404).json({ message: 'Entidad no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar Entidad:', error);
        res.status(500).json({ message: 'Error al eliminar Entidad', error });
    }
};

module.exports = {
    getPatologias,
    createPatologias,
    updatePatologias,
    deletePatologias
};