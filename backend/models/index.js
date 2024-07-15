const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/config.json').development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

// Definir o modelo User
const User = sequelize.define('User', {
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    phone_number: DataTypes.STRING(14),
    password: { type: DataTypes.STRING, allowNull: false }
});

// Definir o modelo Obra
const Obra = sequelize.define('Obra', {
    Poligono: DataTypes.STRING(50),
    Estacao: { type: DataTypes.STRING(2), validate: { min: 2, max: 2} },
    CNL: { type: DataTypes.INTEGER, validate: { min: 10000, max: 12000 } },
    Localidade: DataTypes.STRING(50),
    Data: DataTypes.DATE,
    Descricao_SGM: DataTypes.STRING(100),
    CTOs: DataTypes.INTEGER,
    FACs: DataTypes.INTEGER,
    Status: DataTypes.STRING(20)
});

// Definir o modelo Caixa
const Caixa = sequelize.define('Caixa', {
    Poligono: DataTypes.STRING(50),
    Estacao: { type: DataTypes.STRING(2), validate: { min: 2, max: 2} } ,
    CNL: { type: DataTypes.INTEGER, validate: { min: 10000, max: 12000 } },
    Localidade: DataTypes.STRING(50),
    Numero: DataTypes.INTEGER,
    Data: DataTypes.DATE,
    Status: DataTypes.STRING(20),
    Coordenada: DataTypes.STRING,
    Caixa_Sinal: DataTypes.STRING,
    Caixa_Reserva: DataTypes.STRING
});

module.exports = {
    sequelize,
    User,
    Obra,
    Caixa
};
