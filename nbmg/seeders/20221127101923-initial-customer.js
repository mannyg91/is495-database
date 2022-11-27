
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('customers',[


{'CustomerID': '4000', 'FirstName': 'Charles', 'LastName': 'Patterson', 'EmailAddress': 'cpatterson@unr.edu', 'PhoneNumber': '7755551212', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5010'}
,
{'CustomerID': '4001', 'FirstName': 'Sam', 'LastName': 'Hawkins', 'EmailAddress': 'shawkins@unr.edu', 'PhoneNumber': '7755551213', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5010'}
,
{'CustomerID': '4002', 'FirstName': 'Raymond', 'LastName': 'Stickland', 'EmailAddress': 'rstickland@unr.edu', 'PhoneNumber': '7755551214', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5010'}
,
{'CustomerID': '4003', 'FirstName': 'John', 'LastName': 'Cunningham', 'EmailAddress': 'jcunningham@unr.edu', 'PhoneNumber': '7755551215', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5009'}
,
{'CustomerID': '4004', 'FirstName': 'Jamie', 'LastName': 'Myers', 'EmailAddress': 'jmyers@unr.edu', 'PhoneNumber': '7755551216', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5002'}
,
{'CustomerID': '4005', 'FirstName': 'Terry', 'LastName': 'Spencer', 'EmailAddress': 'tspencer@unr.edu', 'PhoneNumber': '7755551217', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5009'}
,
{'CustomerID': '4006', 'FirstName': 'Jack', 'LastName': 'Romero', 'EmailAddress': 'jromero@unr.edu', 'PhoneNumber': '7755551218', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5009'}
,
{'CustomerID': '4007', 'FirstName': 'Nelson', 'LastName': 'Austin', 'EmailAddress': 'naustin@unr.edu', 'PhoneNumber': '7755551219', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5009'}
,
{'CustomerID': '4008', 'FirstName': 'Matt', 'LastName': 'Thomas', 'EmailAddress': 'mthomas@unr.edu', 'PhoneNumber': '7755551220', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5009'}
,
{'CustomerID': '4009', 'FirstName': 'Anthony', 'LastName': 'Carey', 'EmailAddress': 'acarey@unr.edu', 'PhoneNumber': '7755551221', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5009'}
,
{'CustomerID': '4010', 'FirstName': 'Albert', 'LastName': 'Cruz', 'EmailAddress': 'acruz@unr.edu', 'PhoneNumber': '7755551222', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5010'}
,
{'CustomerID': '4011', 'FirstName': 'George', 'LastName': 'Hamilton', 'EmailAddress': 'ghamilton@unr.edu', 'PhoneNumber': '7755551223', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5016'}
,
{'CustomerID': '4012', 'FirstName': 'Wyatt', 'LastName': 'Love', 'EmailAddress': 'wlove@unr.edu', 'PhoneNumber': '7755551224', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5016'}
,
{'CustomerID': '4013', 'FirstName': 'Cameron', 'LastName': 'Taylor', 'EmailAddress': 'ctaylor@unr.edu', 'PhoneNumber': '7755551225', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5016'}
,
{'CustomerID': '4014', 'FirstName': 'Camilla', 'LastName': 'Gibbs', 'EmailAddress': 'cgibbs@unr.edu', 'PhoneNumber': '7755551226', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5018'}
,
{'CustomerID': '4015', 'FirstName': 'Wendy', 'LastName': 'McKenna', 'EmailAddress': 'wmckenna@unlv.edu', 'PhoneNumber': '7755551228', 'EmpAddress': '4505 S Maryland Pkwy', 'City': 'Las Vegas', 'EmpState': 'NV', 'ZipCode': '89154-4010', 'DepartmentID': '5010'}
,
{'CustomerID': '4016', 'FirstName': 'Manuel', 'LastName': 'Williamson', 'EmailAddress': 'mwilliamson@minerals.nv.gov', 'PhoneNumber': '7755551229', 'EmpAddress': '400 W King St. Ste. 106', 'City': 'Carson City', 'EmpState': 'NV', 'ZipCode': '897030000', 'DepartmentID': '5008'}
,
{'CustomerID': '4017', 'FirstName': 'Alexander', 'LastName': 'Stanley', 'EmailAddress': 'astanley@udayton.edu', 'PhoneNumber': '7755551230', 'EmpAddress': '300 College Park', 'City': 'Dayton', 'EmpState': 'OH', 'ZipCode': '454690000', 'DepartmentID': '5012'}
,
{'CustomerID': '4018', 'FirstName': 'Sarah', 'LastName': 'Burns', 'EmailAddress': 'sburns@unce.unr.edu', 'PhoneNumber': '7755551232', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0000', 'DepartmentID': '5017'}
,
{'CustomerID': '4019', 'FirstName': 'Lilly', 'LastName': 'Mejia', 'EmailAddress': 'lmejia@unr.edu', 'PhoneNumber': '7755551233', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0178', 'DepartmentID': '5002'}
,
{'CustomerID': '4020', 'FirstName': 'Margarett', 'LastName': 'Stevenson', 'EmailAddress': 'mstevenson@gmail.com', 'PhoneNumber': '7755551234', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5016'}
,
{'CustomerID': '4021', 'FirstName': 'Hannah', 'LastName': 'Palmer', 'EmailAddress': 'hpalmer@unr.nevada.edu', 'PhoneNumber': '7755551235', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0407', 'DepartmentID': '5001'}
,
{'CustomerID': '4022', 'FirstName': 'Jake', 'LastName': 'Alexander', 'EmailAddress': 'jalexander@unr.edu', 'PhoneNumber': '7755551236', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0405', 'DepartmentID': '5012'}
,
{'CustomerID': '4023', 'FirstName': 'Mary', 'LastName': 'Jimenez', 'EmailAddress': 'mjimenez@mines.unr.edu', 'PhoneNumber': '7755551237', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0259', 'DepartmentID': '5013'}
,
{'CustomerID': '4024', 'FirstName': 'Sylvester', 'LastName': 'Jones', 'EmailAddress': 'sjones@unr.edu', 'PhoneNumber': '7755551238', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0006', 'DepartmentID': '5016'}
,
{'CustomerID': '4025', 'FirstName': 'Jacob', 'LastName': 'Mann', 'EmailAddress': 'jmann@usgs.gov', 'PhoneNumber': '7755551239', 'EmpAddress': '2730 N Deer Run Rd', 'City': 'Carson City', 'EmpState': 'NV', 'ZipCode': '897010000', 'DepartmentID': '5009'}
,
{'CustomerID': '4026', 'FirstName': 'Adam', 'LastName': 'Wise', 'EmailAddress': 'awise@govmail.state.nv.us', 'PhoneNumber': '7755551240', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5008'}
,
{'CustomerID': '4027', 'FirstName': 'Emma', 'LastName': 'Sherman', 'EmailAddress': 'esherman@unr.edu', 'PhoneNumber': '7755551241', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5001'}
,
{'CustomerID': '4028', 'FirstName': 'Don', 'LastName': 'Gibson', 'EmailAddress': 'dgibson@unr.edu', 'PhoneNumber': '7755551242', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0311', 'DepartmentID': '5018'}
,
{'CustomerID': '4029', 'FirstName': 'Damian', 'LastName': 'Garrett', 'EmailAddress': 'dgarrett@snwa.com', 'PhoneNumber': '7755551243', 'EmpAddress': '1001 S Valley View Blvd', 'City': 'Las Vegas', 'EmpState': 'NV', 'ZipCode': '891530000', 'DepartmentID': '5012'}
,
{'CustomerID': '4030', 'FirstName': 'Daniel', 'LastName': 'Waters', 'EmailAddress': 'dwaters@govmail.state.nv.us', 'PhoneNumber': '7755551244', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5008'}
,
{'CustomerID': '4031', 'FirstName': 'Malarie', 'LastName': 'Parsons', 'EmailAddress': 'mparsons@unr.edu', 'PhoneNumber': '7755551245', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0472', 'DepartmentID': '5007'}
,
{'CustomerID': '4032', 'FirstName': 'Leon', 'LastName': 'Mcdonald', 'EmailAddress': 'lmcdonald@unr.edu', 'PhoneNumber': '7755551246', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0301', 'DepartmentID': '5006'}
,
{'CustomerID': '4033', 'FirstName': 'David', 'LastName': 'Watson', 'EmailAddress': 'dwatson@dhhamilton.com', 'PhoneNumber': '7755551247', 'EmpAddress': '325 Kentucky Ave', 'City': 'Kevil', 'EmpState': 'KY', 'ZipCode': '420530000', 'DepartmentID': '5005'}
,
{'CustomerID': '4034', 'FirstName': 'Igor', 'LastName': 'Osborne', 'EmailAddress': 'iosborne@unr.edu', 'PhoneNumber': '7755551248', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5004'}
,
{'CustomerID': '4035', 'FirstName': 'Jonathen', 'LastName': 'Thornton', 'EmailAddress': 'jthornton@unr.edu', 'PhoneNumber': '7755551249', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0407', 'DepartmentID': '5002'}
,
{'CustomerID': '4036', 'FirstName': 'Mildred', 'LastName': 'Harmon', 'EmailAddress': 'mharmon@unr.edu', 'PhoneNumber': '7755551250', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0311', 'DepartmentID': '5003'}
,
{'CustomerID': '4037', 'FirstName': 'Richard', 'LastName': 'Park', 'EmailAddress': 'rpark@unr.edu', 'PhoneNumber': '7755551251', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0316', 'DepartmentID': '5004'}
,
{'CustomerID': '4038', 'FirstName': 'Pamela', 'LastName': 'Hunt', 'EmailAddress': 'phunt@unr.edu', 'PhoneNumber': '7755551252', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0403', 'DepartmentID': '5005'}
,
{'CustomerID': '4039', 'FirstName': 'Jerry', 'LastName': 'Gardner', 'EmailAddress': 'jgardner@unr.edu', 'PhoneNumber': '7755551253', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5006'}
,
{'CustomerID': '4040', 'FirstName': 'Jerome', 'LastName': 'Field', 'EmailAddress': 'jfield@unr.edu', 'PhoneNumber': '7755551254', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0407', 'DepartmentID': '5007'}
,
{'CustomerID': '4041', 'FirstName': 'Glen', 'LastName': 'Abbott', 'EmailAddress': 'gabbott@unr.edu', 'PhoneNumber': '7755551255', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0412', 'DepartmentID': '5008'}
,
{'CustomerID': '4042', 'FirstName': 'Kramer', 'LastName': 'Khan', 'EmailAddress': 'kkhan@unr.edu', 'PhoneNumber': '7755551256', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0307', 'DepartmentID': '5009'}
,
{'CustomerID': '4043', 'FirstName': 'Velma', 'LastName': 'Elliott', 'EmailAddress': 'velliott@unr.edu', 'PhoneNumber': '7755551257', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0214', 'DepartmentID': '5010'}
,
{'CustomerID': '4044', 'FirstName': 'Peter', 'LastName': 'Terry', 'EmailAddress': 'pterry@unr.edu', 'PhoneNumber': '7755551258', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0216', 'DepartmentID': '5011'}
,
{'CustomerID': '4045', 'FirstName': 'Samuel', 'LastName': 'Allen', 'EmailAddress': 'sallen@unr.edu', 'PhoneNumber': '7755551259', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5012'}
,
{'CustomerID': '4046', 'FirstName': 'Ryan', 'LastName': 'Barnett', 'EmailAddress': 'rbarnett@unr.edu', 'PhoneNumber': '7755551260', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0402', 'DepartmentID': '5013'}
,
{'CustomerID': '4047', 'FirstName': 'River', 'LastName': 'Herbert', 'EmailAddress': 'rherbert@govmail.state.nv.us', 'PhoneNumber': '7755551261', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5008'}
,
{'CustomerID': '4048', 'FirstName': 'Madison', 'LastName': 'Naylor', 'EmailAddress': 'mnaylor@blm.gov', 'PhoneNumber': '7755551262', 'EmpAddress': '1340 Financial Blvd', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895020000', 'DepartmentID': '5007'}
,
{'CustomerID': '4049', 'FirstName': 'Karen', 'LastName': 'Joyce', 'EmailAddress': 'kjoyce@earthobservatory.nasa.gov', 'PhoneNumber': '7755551263', 'EmpAddress': '8800 Greenbelt Rd', 'City': 'Greenbelt', 'EmpState': 'MD', 'ZipCode': '207710000', 'DepartmentID': '5004'}
,
{'CustomerID': '4050', 'FirstName': 'Kinsley', 'LastName': 'Sharp', 'EmailAddress': 'ksharp@unr.edu', 'PhoneNumber': '7755551264', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0407', 'DepartmentID': '5005'}
,
{'CustomerID': '4051', 'FirstName': 'Kevin', 'LastName': 'Moran', 'EmailAddress': 'kmoran@unr.edu', 'PhoneNumber': '7755551265', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0307', 'DepartmentID': '5004'}
,
{'CustomerID': '4052', 'FirstName': 'Irma', 'LastName': 'Figueroa', 'EmailAddress': 'ifigueroa@unr.edu', 'PhoneNumber': '7755551266', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0311', 'DepartmentID': '5003'}
,
{'CustomerID': '4053', 'FirstName': 'Laura', 'LastName': 'Fuller', 'EmailAddress': 'lfuller@unr.edu', 'PhoneNumber': '7755551267', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0409', 'DepartmentID': '5002'}
,
{'CustomerID': '4054', 'FirstName': 'Mya', 'LastName': 'Reed', 'EmailAddress': 'mreed@unr.edu', 'PhoneNumber': '7755551268', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5007'}
,
{'CustomerID': '4055', 'FirstName': 'Axel', 'LastName': 'Kaye', 'EmailAddress': 'akaye@ucsb.edu', 'PhoneNumber': '7755551269', 'EmpAddress': 'University of California', 'City': ' Santa Barbara', 'EmpState': 'CA', 'ZipCode': '931070000', 'DepartmentID': '5000'}
,
{'CustomerID': '4056', 'FirstName': 'Janice', 'LastName': 'Reynolds', 'EmailAddress': 'jreynolds@mines.unr.edu', 'PhoneNumber': '7755551270', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0305', 'DepartmentID': '5011'}
,
{'CustomerID': '4057', 'FirstName': 'Gloria', 'LastName': 'Rossi', 'EmailAddress': 'grossi@hydro.unr.edu', 'PhoneNumber': '7755551271', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0365', 'DepartmentID': '5014'}
,
{'CustomerID': '4058', 'FirstName': 'Merrick', 'LastName': 'Nicholson', 'EmailAddress': 'mnicholson@minerals.nv.gov', 'PhoneNumber': '7755551272', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '895570000', 'DepartmentID': '5008'}
,
{'CustomerID': '4059', 'FirstName': 'Mason', 'LastName': 'Black', 'EmailAddress': 'mblack@cabnr.unr.edu', 'PhoneNumber': '7755551273', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0132', 'DepartmentID': '5015'}
,
{'CustomerID': '4060', 'FirstName': 'Avery', 'LastName': 'Gallegos', 'EmailAddress': 'agallegos@usgs.gov', 'PhoneNumber': '7755551274', 'EmpAddress': '2730 N Deer Run Rd', 'City': 'Carson City', 'EmpState': 'NV', 'ZipCode': '897010000', 'DepartmentID': '5014'}
,
{'CustomerID': '4061', 'FirstName': 'Prima', 'LastName': 'Parat', 'EmailAddress': 'pparat@unr.edu', 'PhoneNumber': '7755551275', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0247', 'DepartmentID': '5006'}
,
{'CustomerID': '4062', 'FirstName': 'Rowan', 'LastName': 'Petterson', 'EmailAddress': 'rpetterson@unr.edu', 'PhoneNumber': '7755551276', 'EmpAddress': '1664 N Virginia St', 'City': 'Reno', 'EmpState': 'NV', 'ZipCode': '89557-0306', 'DepartmentID': '5013'}


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
