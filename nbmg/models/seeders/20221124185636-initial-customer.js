'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },
  async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert('customer',[	
	{
		CustomerID: 4000,
		FirstName: Charles,
		LastName: Patterson,
		EmailAddress: cpatterson@unr.edu,
		PhoneNumber: 7755551212,
		EmpAddress: 1664 N Virginia St,
		City: Reno,
		EmpState NV,
		ZipCode: 89557-0178,
		DepartmentID: 5010
	},
	{
		CustomerID: 4001,
		FirstName:  Sam, 
		LastName: Hawkins,
		EmailAddress: shawkins@unr.edu,
		PhoneNumber: 7755551213,
		EmpAddress: 1664 N Virginia St,
		City: Reno,
		EmpState NV,
		ZipCode: 89557-0178,
		DepartmentID: 5010
	},
	{
		CustomerID: 4002,
		FirstName:  Raymond, 
		LastName: Stickland,
		EmailAddress: rstickland@unr.edu,
		PhoneNumber: 7755551214,
		EmpAddress: 1664 N Virginia St,
		City: Reno,
		EmpState NV,
		ZipCode: 89557-0178,
		DepartmentID: 5010
	},
	{
		CustomerID: 4003,
		FirstName:  John, 
		LastName: Cunningham,
		EmailAddress: jcunningham@unr.edu,
		PhoneNumber: 7755551214,
		EmpAddress: 1664 N Virginia St,
		City: Reno,
		EmpState NV,
		ZipCode: 89557-0178,
		DepartmentID: 5009
	},


}

