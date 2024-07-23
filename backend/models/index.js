require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/config.json')[env];

// Substituir placeholders pelas variáveis de ambiente reais
const config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: dbConfig.dialect
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
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
    poligono: DataTypes.STRING(50),
    estacao: { type: DataTypes.STRING(2), validate: { min: 2, max: 2} },
    cnl: { type: DataTypes.INTEGER, validate: { min: 10000, max: 12000 } },
    localidade: DataTypes.STRING(50),
    data: DataTypes.DATE,
    descricao_sgm: DataTypes.STRING(100),
    ctos: DataTypes.INTEGER,
    facs: DataTypes.INTEGER,
    status: DataTypes.STRING(20)
});

// Definir o modelo Caixa
const Caixa = sequelize.define('Caixa', {
    poligono: DataTypes.STRING(50),
    estacao: { type: DataTypes.STRING(2), validate: { min: 2, max: 2} } ,
    cnl: { type: DataTypes.INTEGER, validate: { min: 10000, max: 12000 } },
    localidade: DataTypes.STRING(50),
    numero: DataTypes.INTEGER,
    data: DataTypes.DATE,
    status: DataTypes.STRING(20),
    coordenada: DataTypes.STRING,
    caixa_sinal: DataTypes.STRING,
    caixa_reserva: DataTypes.STRING,
    distribuicao: {
        type: DataTypes.ENUM,
        values: [
            '1-8', '9-16', '17-24', '25-32', '33-40', '41-48', '49-56', '57-64'
        ],
        allowNull: false
    },
    obraId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Obras',
            key: 'id'
        }
    }
});

// Definir associações
Obra.hasMany(Caixa, { foreignKey: 'obraId', as: 'caixas' });
Caixa.belongsTo(Obra, { foreignKey: 'obraId', as: 'obra' });

module.exports = {
    sequelize,
    User,
    Obra,
    Caixa
};
