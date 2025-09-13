'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Transportation' },
      { name: 'Groceries' },
      { name: 'Utilities' },
      { name: 'Housing' },
      { name: 'Healthcare' },
      { name: 'Entertainment' },
      { name: 'Education' },
      { name: 'Shopping' },
      { name: 'Miscellaneous' },
      { name: 'Other' }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
