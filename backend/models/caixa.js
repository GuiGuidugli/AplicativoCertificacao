'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caixa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Caixa.init({
    poligono: DataTypes.STRING(50),
    estacao: DataTypes.STRING(2),
    cnl: DataTypes.INTEGER,
    localidade: DataTypes.STRING(50),
    numero: DataTypes.INTEGER,
    distribuicao: {
      type: DataTypes.ENUM,
      values: [
        '1-8', '9-16', '17-24', '25-32', '33-40', '41-48', '49-56', '57-64'
      ],
      allowNull: false
    },
    data: DataTypes.DATE,
    status: DataTypes.STRING(20),
    coordenada: DataTypes.STRING,
    caixa_sinal: DataTypes.STRING,
    caixa_reserva: DataTypes.STRING,
    obraId: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'Obra',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Caixa',
  });

  Caixa.associate = function(models) {
    Caixa.belongsTo(models.Obra, {
      foreignKey: 'obraId',
      as: 'obra'
    });
  };

  return Caixa;
};