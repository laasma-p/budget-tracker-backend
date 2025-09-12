'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Transactions', 'userId');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Transactions', 'userId', {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    });
  }
};
