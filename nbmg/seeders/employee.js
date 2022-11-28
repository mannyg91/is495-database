
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('employees',[

{'EmployeeID': '105600', 'FirstName': 'Beverly', 'LastName': 'Sandstrom', 'Email': 'bsandstrom@unr.edu', 'Phone': '7755551211', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6001', 'EmployeeTypeID': '1000'}
,
{'EmployeeID': '105601', 'FirstName': 'Carol', 'LastName': 'Burnette', 'Email': 'cburnette@unr.edu', 'Phone': '7755551212', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1000'}
,
{'EmployeeID': '105602', 'FirstName': 'Jonathan', 'LastName': 'Front', 'Email': 'jfront@unr.edu', 'Phone': '7755551213', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1000'}
,
{'EmployeeID': '105603', 'FirstName': 'Brenda', 'LastName': 'Beardsley', 'Email': 'bbeardsley@unr.edu', 'Phone': '7755551214', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1000'}
,
{'EmployeeID': '105604', 'FirstName': 'Robert', 'LastName': 'Langley', 'Email': 'rlangley@unr.edu', 'Phone': '7755551215', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1000'}
,
{'EmployeeID': '105605', 'FirstName': 'Charles', 'LastName': 'Montgomery', 'Email': 'cmontgomery@unr.edu', 'Phone': '7755551216', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5000', 'JobTitleID': '6003', 'EmployeeTypeID': '1000'}
,
{'EmployeeID': '105606', 'FirstName': 'Victoria', 'LastName': 'Chambers', 'Email': 'vchambers@unr.edu', 'Phone': '7755551217', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5006', 'JobTitleID': '6004', 'EmployeeTypeID': '1004'}
,
{'EmployeeID': '105607', 'FirstName': 'Daniel', 'LastName': 'Huntington', 'Email': 'dhuntington@unr.edu', 'Phone': '7755551218', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5006', 'JobTitleID': '6005', 'EmployeeTypeID': '1004'}
,
{'EmployeeID': '105608', 'FirstName': 'Patrick', 'LastName': 'Nelson', 'Email': 'pnelson@nevada.unr.edu', 'Phone': '7755551219', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5010', 'JobTitleID': '6006', 'EmployeeTypeID': '1005'}
,
{'EmployeeID': '105609', 'FirstName': 'Carol', 'LastName': 'Aguilar', 'Email': 'caguilar@unr.edu', 'Phone': '7755551301', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105610', 'FirstName': 'George', 'LastName': 'Jimenez', 'Email': 'gljimenez@unr.edu', 'Phone': '7555551302', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105611', 'FirstName': 'Hanna', 'LastName': 'Aurora', 'Email': 'hsaurora@unr.edu', 'Phone': '7555551303', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105612', 'FirstName': 'Jonathan', 'LastName': 'Beach', 'Email': 'jcbeach@unr.edu', 'Phone': '7555551304', 'EmpAddress': '1665 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105613', 'FirstName': 'Jack', 'LastName': 'Hastings', 'Email': 'jhastings@unr.edu', 'Phone': '7555551305', 'EmpAddress': '1666 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5002', 'JobTitleID': '6002', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105614', 'FirstName': 'Karen', 'LastName': 'Pepper', 'Email': 'kapepper@unr.edu', 'Phone': '7555551306', 'EmpAddress': '1667 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5012', 'JobTitleID': '6003', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105615', 'FirstName': 'Kevin', 'LastName': 'Rasthmus', 'Email': 'krasthmus@unr.edu', 'Phone': '7555551307', 'EmpAddress': '1668 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5013', 'JobTitleID': '6004', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105616', 'FirstName': 'Loraine', 'LastName': 'Crowley', 'Email': 'lvcrowley@nevada.unr.edu', 'Phone': '7555551308', 'EmpAddress': '1669 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5017', 'JobTitleID': '6006', 'EmployeeTypeID': '1006'}
,
{'EmployeeID': '105617', 'FirstName': 'Mike', 'LastName': 'Rogers', 'Email': 'mcrogers@unr.edu', 'Phone': '7555551309', 'EmpAddress': '1670 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557', 'DepartmentID': '5019', 'JobTitleID': '6003', 'EmployeeTypeID': '1006'}
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
     await queryInterface.bulkDelete('employees', null, {});
  }
}; 
