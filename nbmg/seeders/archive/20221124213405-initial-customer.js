'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('customers',[{
       		CustomerID: 4001,
		FirstName:  'Sam', 
		LastName: 'Hawkins',
		EmailAddress: 'shawkins@unr.edu',
		PhoneNumber: '7755551213',
		EmpAddress: '1664 N Virginia St',
		City: 'Reno',
		EmpState: 'NV',
		ZipCode: '89557-0178',
		DepartmentID: '5010',
	        createdAt: new Date(),
	        updatedAt:  new Date(),
       },  { 
	        CustomerID: 4002,
	        FirstName: 'Raymond',
	        LastName:  'Stickland',
	        EmailAddress: 'rstickland@unr.edu',
	        PhoneNumber: '7755551214',
	        EmpAddress: '1664 N Virginia St',
	        City: 'Reno',
	        EmpState: 'NV',
	        ZipCode: '89557-0178',
	        DepartmentID: '5010',
	        createdAt: new Date(),
	        updatedAt: new Date(),
       },  {
		CustomerID: 4003,
	        FirstName: 'John',
	        LastName:  'Cunningham',
	        EmailAddress: 'jcunningham@unr.edu',
	        PhoneNumber: '7755551215',
	        EmpAddress: '1664 N Virginia St',
	        City: 'Reno',
	        EmpState: 'NV',
	        ZipCode: '89557-0178',
	        DepartmentID: '5009',
	        createdAt: new Date(),
	        updatedAt: new Date(),
       
       
       },  {
		CustomerID: 4004,
	        FirstName: 'Jamie',
	        LastName:  'Myers',
	        EmailAddress: 'jmyers@unr.edu',
	        PhoneNumber: '7755551216',
	        EmpAddress: '1664 N Virginia St',
	        City: 'Reno',
	        EmpState: 'NV',
	        ZipCode: '89557-0178',
	        DepartmentID: '5002',
	        createdAt: new Date(),
	        updatedAt: new Date(),
       
       
       },  {
		CustomerID: 4005,
	        FirstName: 'Terry',
	        LastName:  'Spencer',
	        EmailAddress: 'tspencer@unr.edu',
	        PhoneNumber: '7755551217',
	        EmpAddress: '1664 N Virginia St',
	        City: 'Reno',
	        EmpState: 'NV',
	        ZipCode: '89557-0178',
	        DepartmentID: '5009',
	        createdAt: new Date(),
	        updatedAt: new Date(),
       
       
       }
       


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
  }
};


