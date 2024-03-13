const express = require('express');
const app = express();

//padrão para receber as requisições: JSON
app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.send({ name, email });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`serve is running on Port ${PORT}`));
