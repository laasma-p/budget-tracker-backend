'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Transactions', 'userId', {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    });

    await queryInterface.changeColumn('Transactions', 'categoryId', {
      type: Sequelize.INTEGER,
      references: { model: 'Categories', key: 'id' }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Transactions', 'categoryId', {
      type: Sequelize.INTEGER,
      references: null
    });

    await queryInterface.changeColumn('Transactions', 'userId', {
      type: Sequelize.INTEGER,
      references: null
    });
  }
};
