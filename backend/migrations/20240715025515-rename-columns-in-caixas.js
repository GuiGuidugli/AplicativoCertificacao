'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Caixas', 'Poligono', 'poligono');
    await queryInterface.renameColumn('Caixas', 'Estacao', 'estacao');
    await queryInterface.renameColumn('Caixas', 'CNL', 'cnl');
    await queryInterface.renameColumn('Caixas', 'Localidade', 'localidade');
    await queryInterface.renameColumn('Caixas', 'Numero', 'numero');
    await queryInterface.renameColumn('Caixas', 'Data', 'data');
    await queryInterface.renameColumn('Caixas', 'Status', 'status');
    await queryInterface.renameColumn('Caixas', 'Coordenada', 'coordenada');
    await queryInterface.renameColumn('Caixas', 'Caixa_Sinal', 'caixa_sinal');
    await queryInterface.renameColumn('Caixas', 'Caixa_Reserva', 'caixa_reserva');
    await queryInterface.renameColumn('Caixas', 'Distribuicao', 'distribuicao');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Caixas', 'poligono', 'Poligono');
    await queryInterface.renameColumn('Caixas', 'estacao', 'Estacao');
    await queryInterface.renameColumn('Caixas', 'cnl', 'CNL');
    await queryInterface.renameColumn('Caixas', 'localidade', 'Localidade');
    await queryInterface.renameColumn('Caixas', 'numero', 'Numero');
    await queryInterface.renameColumn('Caixas', 'data', 'Data');
    await queryInterface.renameColumn('Caixas', 'status', 'Status');
    await queryInterface.renameColumn('Caixas', 'coordenada', 'Coordenada');
    await queryInterface.renameColumn('Caixas', 'caixa_sinal', 'Caixa_Sinal');
    await queryInterface.renameColumn('Caixas', 'caixa_reserva', 'Caixa_Reserva');
    await queryInterface.renameColumn('Caixas', 'distribuicao', 'Distribuicao');
  }
};
