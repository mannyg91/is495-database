
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('companies',[

{'CompanyID': '126910', 'CompanyName': 'University of Nevada, Reno'}
,
{'CompanyID': '126920', 'CompanyName': 'Nevada Bureau of Mines and Geology'}
,
{'CompanyID': '126930', 'CompanyName': 'University of Nevada, Las Vegas'}
,
{'CompanyID': '126940', 'CompanyName': 'Vegas Geological and Mineralogical Studies'}
,
{'CompanyID': '126950', 'CompanyName': 'United States Geological Services'}
,
{'CompanyID': '126960', 'CompanyName': 'Ohio State University'}
,
{'CompanyID': '126970', 'CompanyName': 'University of Michigan Geological Sciences'}
,
{'CompanyID': '126980', 'CompanyName': 'Chemical and Metalurgical Engineering'}
,
{'CompanyID': '126990', 'CompanyName': 'Frontier Enterprise Geological Systems'}
,
{'CompanyID': '127000', 'CompanyName': 'Southern Nevada Water Authority'}
,
{'CompanyID': '127010', 'CompanyName': 'State of Nevada Commission on Mineral Resources'}
,
{'CompanyID': '127020', 'CompanyName': 'UC Santa Barbara'}
,
{'CompanyID': '127030', 'CompanyName': 'University of Dayton'}
,
{'CompanyID': '127040', 'CompanyName': 'University School of Engineering'}
,
{'CompanyID': '127050', 'CompanyName': 'Great Basin Geological Sciences'}
,
{'CompanyID': '127060', 'CompanyName': 'NASA Earth Observatory'}
,
{'CompanyID': '127070', 'CompanyName': 'University of Nevada, Controllers Office'}
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
     await queryInterface.bulkDelete('companies', null, {});
  }
}; 
