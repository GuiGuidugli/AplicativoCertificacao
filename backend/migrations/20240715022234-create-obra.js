'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Obras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Poligono: {
        type: Sequelize.STRING(50),
      },
      Estacao: {
        type: Sequelize.STRING(2),
      },
      CNL: {
        type: Sequelize.INTEGER
      },
      Localidade: {
        type: Sequelize.STRING(50),
      },
      Data: {
        type: Sequelize.DATE
      },
      Descricao_SGM: {
        type: Sequelize.STRING(100),
      },
      CTOs: {
        type: Sequelize.INTEGER
      },
      FACs: {
        type: Sequelize.INTEGER
      },
      Status: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable('Obras');
  }
};