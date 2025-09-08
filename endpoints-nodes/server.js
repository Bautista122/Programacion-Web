import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

//GET
app.get("/", (req, res) => {
  res.send("Este es el primer endpoint hecho con express");
});

//endpoint con parametro
app.get("/api/user/:id", (req, res) => {
  //destructuracion
  const { id } = req.params;
  if (typeof id === "string") {
    const idInt = parseInt(id); //parseInt  convierte de string en int
    console.log(idInt);
  }
  res.json({ message: `Este es el id dado ${id}` });
});

//Iniciar server
app.listen(port, () => {
  console.log(`El servidor corriendo en ${port}`);
});

//POST
app.post("/api/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: "Usuario creado", datos: { name, email } });
});

//query params
app.get("/api/search", (req, res) => {
  const { name, lastname } = req.query;
  res.json({
    firstName: name, //renombramos
    lastname, //reutilizamos
  });
  //http://localhost:3000/api/search?name=Bautista&lastname=Moyano
});
