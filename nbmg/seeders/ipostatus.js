
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('ipostatuses',[

{'IPOstatusID': '100', 'IPOStatus': 'Pending'}
,
{'IPOstatusID': '200', 'IPOStatus': 'Paid'}
,
{'IPOstatusID': '300', 'IPOStatus': 'Null'}
,

  ],{});

     /*
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('ipostatuses', null, {});
  }
}; 
