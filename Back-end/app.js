//NÃO ME ALTERE!!!!

//NÃO ME ALTERE!!!!


//NÃO ME ALTERE!!!!

//NÃO ME ALTERE!!!!


const express = require("express");
//NÃO ME ALTERE!!!!
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor do projeto Crochê funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//NÃO ME ALTERE!!!!

//NÃO ME ALTERE!!!!

//NÃO ME ALTERE!!!!

//NÃO ME ALTERE!!!!