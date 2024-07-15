'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Obras', 'Poligono', 'poligono');
    await queryInterface.renameColumn('Obras', 'Estacao', 'estacao');
    await queryInterface.renameColumn('Obras', 'CNL', 'cnl');
    await queryInterface.renameColumn('Obras', 'Localidade', 'localidade');
    await queryInterface.renameColumn('Obras', 'Data', 'data');
    await queryInterface.renameColumn('Obras', 'Descricao_SGM', 'descricao_sgm');
    await queryInterface.renameColumn('Obras', 'CTOs', 'ctos');
    await queryInterface.renameColumn('Obras', 'FACs', 'facs');
    await queryInterface.renameColumn('Obras', 'Status', 'status');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Obras', 'poligono', 'Poligono');
    await queryInterface.renameColumn('Obras', 'estacao', 'Estacao');
    await queryInterface.renameColumn('Obras', 'cnl', 'CNL');
    await queryInterface.renameColumn('Obras', 'localidade', 'Localidade');
    await queryInterface.renameColumn('Obras', 'data', 'Data');
    await queryInterface.renameColumn('Obras', 'descricao_sgm', 'Descricao_SGM');
    await queryInterface.renameColumn('Obras', 'ctos', 'CTOs');
    await queryInterface.renameColumn('Obras', 'facs', 'FACs');
    await queryInterface.renameColumn('Obras', 'status', 'Status');
  }
};
