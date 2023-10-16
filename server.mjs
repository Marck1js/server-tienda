import express from "express";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();


// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/nosotros", (req, res) => {
  res.sendFile(__dirname + "/views/nosotros.html");
});

app.get("/tienda", (req, res) => {
  res.sendFile(__dirname + "/views/tienda.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/views/contacto.html");
});

app.listen(3000, () => {
  console.log("Project is running");
});
