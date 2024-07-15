'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Caixas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Poligono: {
        type: Sequelize.STRING(50)
      },
      Estacao: {
        type: Sequelize.STRING(2)
      },
      CNL: {
        type: Sequelize.INTEGER
      },
      Localidade: {
        type: Sequelize.STRING(50)
      },
      Numero: {
        type: Sequelize.INTEGER
      },
      Distribuicao: {
        type: DataTypes.ENUM,
        values: [
          '1-8', '9-16', '17-24', '25-32', '33-40', '41-48', '49-56', '57-64'
        ],
        allowNull: false
      },
      Data: {
        type: Sequelize.DATE
      },
      Status: {
        type: Sequelize.STRING(20)
      },
      Coordenada: {
        type: Sequelize.STRING
      },
      Caixa_Sinal: {
        type: Sequelize.STRING
      },
      Caixa_Reserva: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Caixas');
  }
};