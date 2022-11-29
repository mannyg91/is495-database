
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('departments',[

{'DepartmentID': '5000', 'DepartmentName': 'Department of Earth Sciences', 'CompanyID': '127050'}
,
{'DepartmentID': '5001', 'DepartmentName': 'Accounting', 'CompanyID': '127070'}
,
{'DepartmentID': '5002', 'DepartmentName': 'Cartography and Publication Support', 'CompanyID': '126920'}
,
{'DepartmentID': '5003', 'DepartmentName': 'State Geological Services', 'CompanyID': '127010'}
,
{'DepartmentID': '5004', 'DepartmentName': 'Federal Geological Services', 'CompanyID': '126950'}
,
{'DepartmentID': '5005', 'DepartmentName': 'Administration', 'CompanyID': '126910'}
,
{'DepartmentID': '5006', 'DepartmentName': 'Campus Computing', 'CompanyID': '126910'}
,
{'DepartmentID': '5007', 'DepartmentName': 'Department of Mechanical Engineering', 'CompanyID': '127040'}
,
{'DepartmentID': '5008', 'DepartmentName': 'Division of Minerals', 'CompanyID': '127010'}
,
{'DepartmentID': '5009', 'DepartmentName': 'Economic Geology, Geologic Mapping, and Geologic Framework', 'CompanyID': '126930'}
,
{'DepartmentID': '5010', 'DepartmentName': 'Geologic Hazards and Engineering Geology', 'CompanyID': '126960'}
,
{'DepartmentID': '5011', 'DepartmentName': 'Geological Sciences', 'CompanyID': '127030'}
,
{'DepartmentID': '5012', 'DepartmentName': 'Geology', 'CompanyID': '126910'}
,
{'DepartmentID': '5013', 'DepartmentName': 'Great Basin Center for Geothermal Energy', 'CompanyID': '127050'}
,
{'DepartmentID': '5014', 'DepartmentName': 'Mines and Mining Operations', 'CompanyID': '127030'}
,
{'DepartmentID': '5015', 'DepartmentName': 'National Resources & Environmental Sciences', 'CompanyID': '126990'}
,
{'DepartmentID': '5016', 'DepartmentName': 'Nevada Geodetic Laboratory', 'CompanyID': '126910'}
,
{'DepartmentID': '5017', 'DepartmentName': 'Nevada Radon Education Program', 'CompanyID': '126910'}
,
{'DepartmentID': '5018', 'DepartmentName': 'Publication Sales and Information', 'CompanyID': '126910'}
,
{'DepartmentID': '5019', 'DepartmentName': 'Structural Geology Tectonics and Neotectonics', 'CompanyID': '126910'}


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
     await queryInterface.bulkDelete('departments', null, {});
  }
}; 
