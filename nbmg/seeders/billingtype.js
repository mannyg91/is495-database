
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('billingtypes',[

{'BillingTypeID': '3000', 'BillingType': 'Annual Time'}
,
{'BillingTypeID': '3001', 'BillingType': 'Credit Adj'}
,
{'BillingTypeID': '3002', 'BillingType': 'Comp Time'}
,
{'BillingTypeID': '3003', 'BillingType': 'Debit Adj'}
,
{'BillingTypeID': '3004', 'BillingType': 'Holiday Time'}
,
{'BillingTypeID': '3005', 'BillingType': 'Leave Without Pay'}
,
{'BillingTypeID': '3006', 'BillingType': 'Sick Time'}
,
{'BillingTypeID': '3007', 'BillingType': 'Work Order Time'}
,
{'BillingTypeID': '3008', 'BillingType': 'Meeting Time'}
,
{'BillingTypeID': '3009', 'BillingType': 'FMLA'}
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
     await queryInterface.bulkDelete('billingtypes', null, {});
  }
}; 
