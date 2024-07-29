const { Users, Ubicaciones } = require("../database/db");

const getUsers = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const User = await Users.findByPk(id, {
        attributes: [
          "id",
          "dniType",
          "dni",
          "password",
          "firstName",
          "lastName",
          "birthday",
          "role",
          "gender",
          "email",
          "phone",
          "active",
        ],
        include: [
          {
            model: Ubicaciones,
            as: "domicilio",
            attributes: [
              "id",
              "usuariosId",
              "pais",
              "provincias",
              "localidad",
              "direccion",
              "active",
            ],
          },
        ],
      });

      if (User) {
        res.status(200).json(User);
      } else {
        res.status(404).json({ message: "Users no encontrado" });
      }
    } else {
      const users = await Users.findAll({
        attributes: [
          "id",
          "dniType",
          "dni",
          "password",
          "firstName",
          "lastName",
          "birthday",
          "role",
          "gender",
          "email",
          "phone",
          "active",
        ],
        include: [
          {
            model: Ubicaciones,
            as: "domicilio",
            attributes: [
              "id",
              "usuariosId",
              "pais",
              "provincias",
              "localidad",
              "direccion",
              "active",
            ],
          },
        ],
      });

      res.status(200).json(users);
    }
  } catch (error) {
    console.error("Error al obtener la Users", error);
    res.status(500).json({ message: "Error al obtener las Users", error });
  }
};

const createUsers = async (req, res) => {
  const {
    dniType,
    dni,
    password,
    firstName,
    lastName,
    birthday,
    role,
    gender,
    email,
    phone,
    active,
  } = req.body;

  try {
    const newUser = await Users.create({
      dniType,
      dni,
      password,
      firstName,
      lastName,
      birthday,
      role,
      gender,
      email,
      phone,
      active,
    });

    res
      .status(201)
      .json({ message: "Usuario creado correctamente", user: newUser });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

const updateUsers = async (req, res) => {
  const { id } = req.params;
  const {
    dniType,
    dni,
    password,
    firstName,
    lastName,
    birthday,
    role,
    gender,
    email,
    phone,
    active,
  } = req.body;

  try {
    const User = await Users.findByPk(id, {
      attributes: [
        "id",
        "dniType",
        "dni",
        "password",
        "firstName",
        "lastName",
        "birthday",
        "role",
        "gender",
        "email",
        "phone",
        "active",
      ],
      include: [
        {
          model: Ubicaciones,
          as: "domicilio",
          attributes: [
            "id",
            "usuariosId",
            "pais",
            "provincias",
            "localidad",
            "direccion",
            "active",
          ],
        },
      ],
    });
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }

    if (dniType !== undefined) User.dniType = dniType;
    if (dni !== undefined) User.dni = dni;
    if (password !== undefined) User.password = password;
    if (firstName !== undefined) User.firstName = firstName;
    if (lastName !== undefined) User.lastName = lastName;
    if (birthday !== undefined) User.birthday = birthday;
    if (role !== undefined) User.role = role;
    if (gender !== undefined) User.gender = gender;
    if (email !== undefined) User.email = email;
    if (phone !== undefined) User.phone = phone;
    if (active !== undefined) User.active = active;
    await User.save();
    res.status(200).json({ message: "User actualizado", User });
  } catch (error) {
    console.error("Error al actualizar User:", error);
    res.status(500).json({ message: "Error al actualizar User", error });
  }
};

const logicalDeleteUsers = async (req, res) => {
  const userId = req.params.id;
  const { active } = req.body;

  if (typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "El campo 'active' debe ser un valor booleano" });
  }

  try {
    const user = await Users.findByPk(userId, {
      attributes: [
        "id",
        "dniType",
        "dni",
        "password",
        "firstName",
        "lastName",
        "birthday",
        "role",
        "gender",
        "email",
        "phone",
        "active",
      ],
      include: [
        {
          model: Ubicaciones,
          as: "domicilio",
          attributes: [
            "id",
            "usuariosId",
            "pais",
            "provincias",
            "localidad",
            "direccion",
            "active",
          ],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    user.active = active;
    await user.save();

    const status = user.active ? "activado" : "desactivado";
    res.status(200).json({ message: `Usuario ${status}` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al actualizar el estado del usuario", error });
  }
};

const physicalDeleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    const User = await Users.findByPk(id, {
      attributes: [
        "id",
        "dniType",
        "dni",
        "password",
        "firstName",
        "lastName",
        "birthday",
        "role",
        "gender",
        "email",
        "phone",
        "active",
      ],
      include: [
        {
          model: Ubicaciones,
          as: "domicilio",
          attributes: [
            "id",
            "usuariosId",
            "pais",
            "provincias",
            "localidad",
            "direccion",
            "active",
          ],
        },
      ],
    });
    if (!User) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await User.destroy();
    res.status(200).json({ message: "Users eliminada" });
  } catch (error) {
    console.error("Error al eliminar Users:", error);
    res.status(500).json({ message: "Error al eliminar Users", error });
  }
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  logicalDeleteUsers,
  physicalDeleteUsers,
};
