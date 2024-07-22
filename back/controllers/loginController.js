const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const { User } = require('../models'); 

const register = async (req, res) => {
  const { tipoDNI, dni, password } = req.body;

  if (!tipoDNI || !dni || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    
    const existingUser = await User.findOne({ where: { dni, tipoDNI } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = await User.create({ tipoDNI, dni, password: hashedPassword });

    return res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

const login = async (req, res) => {
  const { tipoDNI, dni, password } = req.body;

  if (!tipoDNI || !dni || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    
    const user = await User.findOne({ where: { dni, tipoDNI } });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    
    const token = jwt.sign({ id: user.id, tipoDNI: user.tipoDNI }, process.env.JWT_SECRET, { expiresIn: '2h' });

    return res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

module.exports = {
  register,
  login,
};
