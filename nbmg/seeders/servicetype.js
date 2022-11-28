
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('servicetypes',[

{'ServiceTypeID': '8000', 'ServiceType': 'Books', 'ServiceDescription': 'Publication and Design'}
,
{'ServiceTypeID': '8010', 'ServiceType': 'Figures', 'ServiceDescription': 'Cataloging - Classifying and Categorizing Geological Resources'}
,
{'ServiceTypeID': '8020', 'ServiceType': 'GIS Services', 'ServiceDescription': 'Drafting and GIS Database creation services'}
,
{'ServiceTypeID': '8030', 'ServiceType': 'Topographical Maps', 'ServiceDescription': 'Creation of maps with topographical and elevation data'}
,
{'ServiceTypeID': '8040', 'ServiceType': 'On Demand Printing', 'ServiceDescription': 'Large scale printing of greater than 11" x 17" layouts'}
,
{'ServiceTypeID': '8050', 'ServiceType': 'Photography and Editing Services', 'ServiceDescription': 'Photographical production and editing publication services'}
,
{'ServiceTypeID': '8060', 'ServiceType': 'Platt Map Plotting Services', 'ServiceDescription': 'Production of WGS 84 default standard datum coordinated maps'}
,
{'ServiceTypeID': '8070', 'ServiceType': 'Poster Production', 'ServiceDescription': 'Photography - Editing and Poster creation services'}
,
{'ServiceTypeID': '8080', 'ServiceType': 'Web Design and Web Apps', 'ServiceDescription': 'Creation of Geological Web Applications and Web Design Services'}
,
{'ServiceTypeID': '8081', 'ServiceType': 'Admin', 'ServiceDescription': 'Non billable administrative time entry'}
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
     await queryInterface.bulkDelete('servicetypes', null, {});
  }
}; 
