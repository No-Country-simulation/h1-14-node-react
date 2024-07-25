const swaggerJsdoc = require("swagger-jsdoc");


// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
      info: {
        title: "h1-14-node-react API",
        version: "1.0.0",
        description: "API del grupo h1-14-node-react de No Country",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};
  
const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerDocs;
