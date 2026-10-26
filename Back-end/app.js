
const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Express funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
