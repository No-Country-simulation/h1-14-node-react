const { configDotenv } = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Config de DB
const {connection } = require('./database/db')
require("./database/associations")

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./utils/swagger.js");

// Routers
const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/UsersRoutes.js");
// const loginRouter = require('./routes/LoginRoutes');

configDotenv();

// Inicio de la aplicación
console.log("Starting app");

const PORT = process.env.PORT || 3000;
const app = express();
// const rooturl = 'api/v1'

/// Configuración de CORS
console.log("Configuring CORS");
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Configuracion de Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/v1/", indexRouter);
/*app.use('/api/v1/login', loginRouter);*/
app.use("/api/v1/user", usersRouter);

/* // catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
}); */

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

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Configuración de servidor
console.info("Starting server");

app.listen(PORT, () => {
  // Estado de la conexion a MySql
  connection
    .authenticate()
    .then(() => {
      console.log("Conexion exitosa a la DB");
    })
    .catch((error) => {
      console.error("Se ha producido un error", error);
    });

  console.log("App running on http://localhost:" + PORT);
  console.log(`Documentacio API: http://localhost:${PORT}/api-docs`);
});

module.exports = { app };
