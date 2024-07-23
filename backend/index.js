require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User, Obra, Caixa } = require('./models'); // Importar os modelos e a instância do sequelize
const app = express();
const port = process.env.PORT || 5432;

const requiredEnvVars = ['DB_USERNAME', 'DB_PASSWORD', 'DB_DATABASE', 'DB_HOST'];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Error: Missing required environment variable ${envVar}`);
    process.exit(1);
  }
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sincronizar o banco de dados
sequelize.sync().then(() => {
  console.log("Database & tables created!");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
