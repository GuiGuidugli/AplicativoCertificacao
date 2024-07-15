'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Caixas', 'Distribuicao', {
      type: Sequelize.ENUM,
      values: [
        '1-8', '9-16', '17-24', '25-32', '33-40', '41-48', '49-56', '57-64'
      ],
      allowNull: false
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Caixas', 'Distribuicao');
  }
};
