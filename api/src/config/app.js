import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
//importo las rutas
import users from "../routes/user.Router.js";
import assist from "../routes/assist.router.js";

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ! se puede cambiar "http://localhost:3000" por "*" para habilitar todos los puertos y evitar problemas de CORS
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/user", users);
server.use("/assist", assist)

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
