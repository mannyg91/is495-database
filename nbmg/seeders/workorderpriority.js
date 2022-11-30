
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('workorderpriorities',[

{'PriorityID': '1', 'PriorityType': 'Low'}
,
{'PriorityID': '2', 'PriorityType': 'Medium'}
,
{'PriorityID': '3', 'PriorityType': 'High'}
,
{'PriorityID': '4', 'PriorityType': 'Rush'}
,
{'PriorityID': '5', 'PriorityType': 'Other'}
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
     await queryInterface.bulkDelete('workorderpriorities', null, {});
  }
}; 
