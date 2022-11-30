
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('entrytypes',[

{'EntryTypeID': '1', 'EntryType': 'Regular Time', 'Billable': '1'}
,
{'EntryTypeID': '2', 'EntryType': 'Admin Time', 'Billable': '0'}
,
{'EntryTypeID': '3', 'EntryType': 'Match Time', 'Billable': '0'}
,
{'EntryTypeID': '4', 'EntryType': 'Write Off', 'Billable': '0'}
,
{'EntryTypeID': '5', 'EntryType': 'Adjustment', 'Billable': '1'}
,
{'EntryTypeID': '6', 'EntryType': 'Not Billed', 'Billable': '1'}
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
     await queryInterface.bulkDelete('entrytypes', null, {});
  }
}; 
