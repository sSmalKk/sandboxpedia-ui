
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor do Sandboxpedia!');
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
