import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

//GET
app.get("/", (req, res) => {
  res.send("Este es el primer endpoint hecho con express");
});

//Iniciar server
app.listen(port, () => {
  console.log(`El servidor corriendo en ${port}`);
});
