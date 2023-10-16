const express = require("express");
const morgan = require("morgan");

const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan('dev'))

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

app.listen(port, () => {
  console.log("Project is running on port " + port);
});
