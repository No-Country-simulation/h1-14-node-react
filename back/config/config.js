require('dotenv').config();

module.exports = {

    //Conexion
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,

    //Datos para el token
    TOKEN_KEY: process.env.TOKEN_KEY,

    // Configuracion de Seeds
    // seederStorage: "sequelize",
    //seederStorageTableName: "seeds",

    // Configuracion de Migaciones
    // migrationStorage: "sequelize",
    // migrationStorageTableName: "migrations",

    define: {
        timestamps: true
    }
};
