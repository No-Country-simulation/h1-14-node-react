const express = require("express");
const app = express();
const { connection } = require("./database/db.js");
const { configDotenv } = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes/index.js");
configDotenv();

const PORT = process.env.PORT || 4321;

/// Configuración de CORS
console.log("Configuring CORS");
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./utils/swagger.js");

// Middleware para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuracion de Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Middleware para manejar JSON inválido
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("Invalid JSON received");
    resFail(res, 400, "Invalid JSON received");
  } else {
    next(err);
  }
});

// Middleware para capturar todos los errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  resFail(res, 500, "Internal server error");
  next();
});

// Documentacion API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
app.use("/", routes);

// Arranca el servidor
app.listen(PORT, function () {
  console.log(`La app ha arrancado en http://localhost:${PORT}`);
  console.log(`Documentacio API: http://localhost:${PORT}/api-docs`);

  connection
    .authenticate()
    // .sync({ force: false })
    .then(() => {
      console.log("Nos hemos conectado a la DB");
    })
    .catch((error) => {
      console.error("Se ha producido un error", error);
    });
});

