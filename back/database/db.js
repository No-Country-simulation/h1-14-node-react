const {Sequelize, DataTypes} = require('sequelize')
const config = require('../config/database.js')
const db = {}

db.connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
  });

  // Vinculamos nuestos modelos a DB
  db.Users = require('./models/Users.js')(db.connection, DataTypes)
  db.Ubicaciones = require('./models/Ubicaciones.js')(db.connection, DataTypes)
  db.Tratamientos = require('./models/Tratamientos.js')(db.connection, DataTypes)
  db.Recetas = require('./models/Recetas.js')(db.connection, DataTypes)
  db.CalendarioMedicamentos = require('./models/CalendarioMedicamentos.js')(db.connection, DataTypes)
  db.Entidades = require('./models/Entidades.js')(db.connection, DataTypes)
  db.Especialidades = require('./models/Especialidades.js')(db.connection, DataTypes)
  db.Farmacias = require('./models/Farmacias.js')(db.connection, DataTypes)
  db.Financiadores = require('./models/Financiadores.js')(db.connection, DataTypes)
  db.FinanciadoresUsuarios = require('./models/FinanciadoresUsuarios.js')(db.connection, DataTypes)
  db.Laboratorios = require('./models/Laboratorios.js')(db.connection, DataTypes)  
  db.Medicamentos = require('./models/Medicamentos.js')(db.connection, DataTypes)  
  db.Pacientes = require('./models/Pacientes.js')(db.connection, DataTypes)
  db.Patologias = require('./models/Patologias.js')(db.connection, DataTypes)
  db.PersonalMedico = require('./models/PersonalMedico.js')(db.connection, DataTypes)
  db.PersonalMedicoPaciente = require('./models/PersonalMedico.js')(db.connection, DataTypes)

  // Asociar los modelos
 db.Users.associate(db)
 db.Ubicaciones.associate(db)
 db.Tratamientos.associate(db)
 db.Recetas.associate(db)
 db.Entidades.associate(db)
 db.Especialidades.associate(db)
 db.Farmacias.associate(db)
 db.Financiadores.associate(db)
 db.FinanciadoresUsuarios.associate(db)
 db.Laboratorios.associate(db)
 db.Medicamentos.associate(db)
 db.Pacientes.associate(db)
 db.Patologias.associate(db) 
 db.PersonalMedico.associate(db)
 db.PersonalMedicoPaciente.associate(db)

  module.exports = db