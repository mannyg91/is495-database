
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('workorderstatuses',[

{'StatusID': '1', 'StatusType': 'Assigned'}
,
{'StatusID': '2', 'StatusType': 'Unassigned'}
,
{'StatusID': '3', 'StatusType': 'Pending'}
,
{'StatusID': '4', 'StatusType': 'Completed'}
,
{'StatusID': '5', 'StatusType': 'Closed'}
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
     await queryInterface.bulkDelete('workorderstatuses', null, {});
  }
}; 
