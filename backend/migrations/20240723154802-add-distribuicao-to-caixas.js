'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Caixas', 'distribuicao', {
      type: Sequelize.ENUM,
      values: [
        '1-8', '9-16', '17-24', '25-32', '33-40', '41-48', '49-56', '57-64'
      ],
      allowNull: false
    }, {
      after: 'numero'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Caixas', 'distribuicao');
  }
};
