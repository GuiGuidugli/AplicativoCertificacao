'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Obra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  const Obra = sequelize.define('Obra', {
    poligono: DataTypes.STRING(50),
    estacao: DataTypes.STRING(2),
    cnl: DataTypes.INTEGER,
    localidade: DataTypes.STRING(50),
    data: DataTypes.DATE,
    descricao_sgm: DataTypes.STRING(100),
    ctos: DataTypes.INTEGER,
    facs: DataTypes.INTEGER,
    status: DataTypes.STRING(20)
  }, {});
  return Obra;
};