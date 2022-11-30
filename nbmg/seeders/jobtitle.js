
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('jobtitles',[

{'JobTitleID': '6001', 'JobTitle': 'Cartography Supervisor'}
,
{'JobTitleID': '6002', 'JobTitle': 'Cartographer'}
,
{'JobTitleID': '6003', 'JobTitle': 'Geologist'}
,
{'JobTitleID': '6004', 'JobTitle': 'Manager'}
,
{'JobTitleID': '6005', 'JobTitle': 'Dean'}
,
{'JobTitleID': '6006', 'JobTitle': 'Grad Student'}
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
     await queryInterface.bulkDelete('jobtitles', null, {});
  }
}; 
