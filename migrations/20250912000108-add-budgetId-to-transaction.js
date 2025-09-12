'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Transactions', 'budgetId', {
      type: Sequelize.INTEGER,
      references: { model: 'Budgets', key: 'id' }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Transactions', 'budgetId');
  }
};
