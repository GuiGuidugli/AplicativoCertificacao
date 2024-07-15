require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User, Obra, Caixa } = require('./models'); // Importar os modelos e a instância do sequelize
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sincronizar o banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
