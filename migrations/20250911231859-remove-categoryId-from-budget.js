'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Budgets', 'categoryId');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Budgets', 'categoryId', {
      type: Sequelize.INTEGER,
      references: { model: 'Categories', key: 'id' }
    });
  }
};
