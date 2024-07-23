'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Caixas', 'obraId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Obras',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Caixas', 'obraId');
  }
};
