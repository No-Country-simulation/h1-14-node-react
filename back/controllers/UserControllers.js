const User = require('../database/models/users');

async function getUsers(req, res) {
    const userId = req.params.id;
    
    try {
        if (userId) {
            const user = await User.findByPk(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } else {
            const users = await User.findAll();
            res.status(200).json(users);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
}

const createUsers = async (req, res) => {
    const { dniType, dni, password, firstName, lastName, brithday, role, gender, email, phone, active } = req.body;
  
  try {
    const newUser = await User.create({
      dniType,
      dni,
      password,
      firstName,
      lastName,
      brithday,
      role,
      gender,
      email,
      phone,
      active,
    });

    res.status(201).json({ message: 'Usuario creado correctamente', user: newUser });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error al crear usuario', error });
  }
};

const updateUsers = async (req, res) => {
    const userId = req.params.id;
    const { dni, firstName, lastName, eMail, birthdate, gender, password } = req.body;
    try {
        const user = await User.findByPk(userId);
        if (user) {
            user.dni = dni;
            user.firstName = firstName;
            user.lastName = lastName;
            user.eMail = eMail;
            user.birthdate = birthdate;
            user.gender = gender;
            user.password = password;
            await user.save();
            res.status(200).json({ message: 'Usuario actualizado', user });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error });
    }
};

const deleteUsers = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (user) {
            await user.destroy();
            res.status(200).json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error });
    }
};

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};
