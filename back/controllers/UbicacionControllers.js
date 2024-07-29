const { Ubicaciones } = require("../database/db");

const getUbicaciones = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const Ubicacion = await Ubicaciones.findByPk(id, {
        attributes: [
          "id",
          "usuariosId",
          "pais",
          "provincias",
          "localidad",
          "direccion",
          "active",
        ],
      });
      if (Ubicacion) {
        res.status(200).json(Ubicacion);
      } else {
        res.status(404).json({ message: "Ubicacion no encontrado" });
      }
    } else {
      const Ubicacion = await Ubicaciones.findAll({
        attributes: [
          "id",
          "usuariosId",
          "pais",
          "provincias",
          "localidad",
          "direccion",
          "active",
        ],
      });
      res.status(200).json(Ubicacion);
    }
  } catch (error) {
    console.error("Error al obtener la Ubicacion", error);
    res
      .status(500)
      .json({ message: "Error al obtener las Ubicaciones", error });
  }
};

const createUbicaciones = async (req, res) => {
  const { usuariosId, pais, provincias, localidad, direccion } = req.body;

  try {
    const newUbicacion = await Ubicaciones.create({
      usuariosId,
      pais,
      provincias,
      localidad,
      direccion,
    });

    res.status(201).json({
      message: "Ubicacion creada correctamente",
      Entidad: newUbicacion,
    });
  } catch (error) {
    console.error("Error al crear Ubicacion:", error);
    res.status(500).json({ message: "Error al crear Ubicacion", error });
  }
};

const updateUbicaciones = async (req, res) => {
  const { id } = req.params;
  const { usuariosId, pais, provincias, localidad, direccion, active } =
    req.body;

  try {
    const Ubicacion = await Ubicaciones.findByPk(id, {
      attributes: [
        "id",
        "usuariosId",
        "pais",
        "provincias",
        "localidad",
        "direccion",
        "active",
      ],
    });
    if (Ubicacion) {
      if (usuariosId !== undefined) Ubicacion.usuariosId = usuariosId;
      if (pais !== undefined) Ubicacion.pais = pais;
      if (provincias !== undefined) Ubicacion.provincias = provincias;
      if (localidad !== undefined) Ubicacion.localidad = localidad;
      if (direccion !== undefined) Ubicacion.direccion = direccion;
      if (active !== undefined) Ubicacion.active = active;
      await Ubicacion.save();
      res.status(200).json({ message: "Ubicación actualizado", Ubicacion });
    } else {
      res.status(404).json({ message: "Ubicación no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar Ubicación:", error);
    res.status(500).json({ message: "Error al actualizar Ubicación", error });
  }
};

const logicalDeleteUbicaciones = async (req, res) => {
  const ubicacionesId = req.params.id;
  const { active } = req.body;

  if (typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "El campo 'active' debe ser un valor booleano" });
  }

  try {
    const ubicaciones = await Ubicaciones.findByPk(ubicacionesId, {
      attributes: [
        "id",
        "usuariosId",
        "pais",
        "provincias",
        "localidad",
        "direccion",
        "active",
      ],
    });

    if (!ubicaciones) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    ubicaciones.active = active;
    await ubicaciones.save();

    const status = ubicaciones.active ? "activado" : "desactivado";
    res.status(200).json({ message: `Ubicación ${status}` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error al actualizar el estado de la ubicación",
        error,
      });
  }
};

const physicalDeleteUbicaciones = async (req, res) => {
  const { id } = req.params;

  try {
    const Ubicacion = await Ubicaciones.findByPk(id, {
      attributes: [
        "id",
        "usuariosId",
        "pais",
        "provincias",
        "localidad",
        "direccion",
        "active",
      ],
    });
    if (Ubicacion) {
      await Ubicacion.destroy();
      res.status(200).json({ message: "Ubicación eliminada" });
    } else {
      res.status(404).json({ message: "Ubicación no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar Ubicación:", error);
    res.status(500).json({ message: "Error al eliminar Ubicación", error });
  }
};

module.exports = {
  getUbicaciones,
  createUbicaciones,
  updateUbicaciones,
  logicalDeleteUbicaciones,
  physicalDeleteUbicaciones,
};
