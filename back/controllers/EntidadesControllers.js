const { Entidades } = require("../database/db");

/* module.exports = {
  async All(req, res) {
    let Entidades = await Entidades.findAll();
    res.json(Entidades);
  },
}; */

const getEntidades = async (req, res) => {
    const {id} = req.params;
    
    try {
        if (id) {
            const Entidad = await Entidades.findByPk(id);
            if (Entidad) {
                res.status(200).json(Entidad);
            } else {
                res.status(404).json({ message: 'Entidad no encontrado' });
            }
        } else {
            const Entidad = await Entidades.findAll();
            res.status(200).json(Entidad);
        }
    } catch (error) {
        console.error('Error al obtener la entidad', error);
        res.status(500).json({ message: 'Error al obtener las entidades', error });
    }
}


const createEntidades = async (req, res) => {
    const { name, description, active } = req.body;
  
    try {
        const newEntidad = await Entidades.create({
            name,
            description,
            active
        });

        res.status(201).json({ message: 'Entidad creada correctamente', Entidad: newEntidad });
    } catch (error) {
        console.error('Error al crear Entidad:', error);
        res.status(500).json({ message: 'Error al crear Entidad', error });
    }
};


const updateEntidades = async (req, res) => {
    const {id} = req.params;
    const { name, description, active } = req.body;
    
    try {
        const Entidad = await Entidades.findByPk(id);
        if (Entidad) {
            Entidad.name = name;
            Entidad.description = description;
            Entidad.active = active;
            await Entidad.save();
            res.status(200).json({ message: 'Entidad actualizado', Entidad });
        } else {
            res.status(404).json({ message: 'Entidad no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar Entidad:', error);
        res.status(500).json({ message: 'Error al actualizar Entidad', error });
    }
};


const deleteEntidades = async (req, res) => {
    const {id} = req.params;
    const { active } = req.body;
    
    try {
        const entidad = await Entidades.findByPk(id);
        if (entidad) {
            entidad.active = active;
            await entidad.save();
            if ((active === true)) {
                res.status(200).json({ message: "Entidad activada" });
              } else {
                res.status(200).json({ message: "Entidad eliminada" });
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
    getEntidades,
    createEntidades,
    updateEntidades,
    deleteEntidades
};