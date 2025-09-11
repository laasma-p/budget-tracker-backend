'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Budgets', 'userId', {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    });

    await queryInterface.changeColumn('Budgets', 'categoryId', {
      type: Sequelize.INTEGER,
      references: { model: 'Categories', key: 'id' }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Budgets', 'categoryId', {
      type: Sequelize.INTEGER,
      references: null
    });

    await queryInterface.changeColumn('Budgets', 'userId', {
      type: Sequelize.INTEGER,
      references: null
    });
  }
};
