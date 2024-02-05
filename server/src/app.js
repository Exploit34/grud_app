import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectionTest } from "./db.js";

// importacion rutas
import mercado from "./router/mercado_router.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("hola");
  res.status(200);
});


app.use("/mercado", mercado);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


//conexion base de datos
connectionTest();

export default app;

