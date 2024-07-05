import { configDotenv } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDb } from "./config/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./utils/swagger.js"
import indexRouter from "./routes/index.js";
// import usersRouter from './routes/UsersRoutes';
// import loginRouter from './routes/LoginRoutes';

configDotenv();

// Inicio de la aplicación
console.log("Starting app");

// Estado de la conexion a MySql
connectDb();
console.log("Connecting to MySql");

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
  }),
);

// Configuracion de Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/", indexRouter);
/*app.use('/api/v1/login', loginRouter);
app.use('/api/v1/user', usersRouter); */

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
  console.log("App running on http://localhost:" + PORT);
});

export default app;
