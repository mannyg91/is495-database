
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('contacts',[

{'ContactID': '1', 'FirstName': 'Axel', 'LastName': 'Kaye', 'EmailAddress': 'akaye@ucsb.edu', 'PhoneNumber': '7755551269'}
,
{'ContactID': '2', 'FirstName': 'Enid', 'LastName': 'Kornish', 'EmailAddress': 'ekornish@ucsb.edu', 'PhoneNumber': '7755551269'}
,
{'ContactID': '3', 'FirstName': 'Emma', 'LastName': 'Sherman', 'EmailAddress': 'esherman@unr.edu', 'PhoneNumber': '7755551241'}
,
{'ContactID': '4', 'FirstName': 'Jamie', 'LastName': 'Myers', 'EmailAddress': 'jmyers@unr.edu', 'PhoneNumber': '7755551216'}
,
{'ContactID': '5', 'FirstName': 'Lilly', 'LastName': 'Mejia', 'EmailAddress': 'lmejia@unr.edu', 'PhoneNumber': '7755551233'}
,
{'ContactID': '6', 'FirstName': 'Jonathen', 'LastName': 'Thornton', 'EmailAddress': 'jthornton@unr.edu', 'PhoneNumber': '7755551249'}
,
{'ContactID': '7', 'FirstName': 'Laura', 'LastName': 'Fuller', 'EmailAddress': 'lfuller@unr.edu', 'PhoneNumber': '7755551267'}
,
{'ContactID': '8', 'FirstName': 'Mildred', 'LastName': 'Harmon', 'EmailAddress': 'mharmon@unr.edu', 'PhoneNumber': '7755551250'}
,
{'ContactID': '9', 'FirstName': 'Irma', 'LastName': 'Figueroa', 'EmailAddress': 'ifigueroa@unr.edu', 'PhoneNumber': '7755551266'}
,
{'ContactID': '10', 'FirstName': 'Igor', 'LastName': 'Osborne', 'EmailAddress': 'iosborne@unr.edu', 'PhoneNumber': '7755551248'}
,
{'ContactID': '11', 'FirstName': 'Richard', 'LastName': 'Park', 'EmailAddress': 'rpark@unr.edu', 'PhoneNumber': '7755551251'}
,
{'ContactID': '12', 'FirstName': 'Karen', 'LastName': 'Joyce', 'EmailAddress': 'kjoyce@earthobservatory.nasa.gov', 'PhoneNumber': '7755551263'}
,
{'ContactID': '13', 'FirstName': 'Kevin', 'LastName': 'Moran', 'EmailAddress': 'kmoran@unr.edu', 'PhoneNumber': '7755551265'}
,
{'ContactID': '14', 'FirstName': 'Bray', 'LastName': 'Walker', 'EmailAddress': 'bwalker@ucsb.edu', 'PhoneNumber': '7755551269'}
,
{'ContactID': '15', 'FirstName': 'Robert', 'LastName': 'Armondson', 'EmailAddress': 'rarmondson@earthobservatory.nasa.gov', 'PhoneNumber': '7755551263'}
,
{'ContactID': '16', 'FirstName': 'David', 'LastName': 'Watson', 'EmailAddress': 'dwatson@dhhamilton.com', 'PhoneNumber': '7755551247'}
,
{'ContactID': '17', 'FirstName': 'Pamela', 'LastName': 'Hunt', 'EmailAddress': 'phunt@unr.edu', 'PhoneNumber': '7755551252'}
,
{'ContactID': '18', 'FirstName': 'Kinsley', 'LastName': 'Sharp', 'EmailAddress': 'ksharp@unr.edu', 'PhoneNumber': '7755551264'}
,
{'ContactID': '19', 'FirstName': 'Leon', 'LastName': 'Mcdonald', 'EmailAddress': 'lmcdonald@unr.edu', 'PhoneNumber': '7755551246'}
,
{'ContactID': '20', 'FirstName': 'Jerry', 'LastName': 'Gardner', 'EmailAddress': 'jgardner@unr.edu', 'PhoneNumber': '7755551253'}
,
{'ContactID': '21', 'FirstName': 'Prima', 'LastName': 'Parat', 'EmailAddress': 'pparat@unr.edu', 'PhoneNumber': '7755551275'}
,
{'ContactID': '22', 'FirstName': 'Malarie', 'LastName': 'Parsons', 'EmailAddress': 'mparsons@unr.edu', 'PhoneNumber': '7755551245'}
,
{'ContactID': '23', 'FirstName': 'Jerome', 'LastName': 'Field', 'EmailAddress': 'jfield@unr.edu', 'PhoneNumber': '7755551254'}
,
{'ContactID': '24', 'FirstName': 'Madison', 'LastName': 'Naylor', 'EmailAddress': 'mnaylor@blm.gov', 'PhoneNumber': '7755551262'}
,
{'ContactID': '25', 'FirstName': 'Mya', 'LastName': 'Reed', 'EmailAddress': 'mreed@unr.edu', 'PhoneNumber': '7755551268'}
,
{'ContactID': '26', 'FirstName': 'Manuel', 'LastName': 'Williamson', 'EmailAddress': 'mwilliamson@minerals.nv.gov', 'PhoneNumber': '7755551229'}
,
{'ContactID': '27', 'FirstName': 'Adam', 'LastName': 'Wise', 'EmailAddress': 'awise@govmail.state.nv.us', 'PhoneNumber': '7755551240'}
,
{'ContactID': '28', 'FirstName': 'Daniel', 'LastName': 'Waters', 'EmailAddress': 'dwaters@govmail.state.nv.us', 'PhoneNumber': '7755551244'}
,
{'ContactID': '29', 'FirstName': 'Glen', 'LastName': 'Abbott', 'EmailAddress': 'gabbott@unr.edu', 'PhoneNumber': '7755551255'}
,
{'ContactID': '30', 'FirstName': 'River', 'LastName': 'Herbert', 'EmailAddress': 'rherbert@govmail.state.nv.us', 'PhoneNumber': '7755551261'}
,
{'ContactID': '31', 'FirstName': 'Merrick', 'LastName': 'Nicholson', 'EmailAddress': 'mnicholson@minerals.nv.gov', 'PhoneNumber': '7755551272'}
,
{'ContactID': '32', 'FirstName': 'John', 'LastName': 'Cunningham', 'EmailAddress': 'jcunningham@unr.edu', 'PhoneNumber': '7755551215'}
,
{'ContactID': '33', 'FirstName': 'Terry', 'LastName': 'Spencer', 'EmailAddress': 'tspencer@unr.edu', 'PhoneNumber': '7755551217'}
,
{'ContactID': '34', 'FirstName': 'Jack', 'LastName': 'Romero', 'EmailAddress': 'jromero@unr.edu', 'PhoneNumber': '7755551218'}
,
{'ContactID': '35', 'FirstName': 'Nelson', 'LastName': 'Austin', 'EmailAddress': 'naustin@unr.edu', 'PhoneNumber': '7755551219'}
,
{'ContactID': '36', 'FirstName': 'Matt', 'LastName': 'Thomas', 'EmailAddress': 'mthomas@unr.edu', 'PhoneNumber': '7755551220'}
,
{'ContactID': '37', 'FirstName': 'Anthony', 'LastName': 'Carey', 'EmailAddress': 'acarey@unr.edu', 'PhoneNumber': '7755551221'}
,
{'ContactID': '38', 'FirstName': 'Jacob', 'LastName': 'Mann', 'EmailAddress': 'jmann@usgs.gov', 'PhoneNumber': '7755551239'}
,
{'ContactID': '39', 'FirstName': 'Kramer', 'LastName': 'Khan', 'EmailAddress': 'kkhan@unr.edu', 'PhoneNumber': '7755551256'}
,
{'ContactID': '40', 'FirstName': 'Charles', 'LastName': 'Patterson', 'EmailAddress': 'cpatterson@unr.edu', 'PhoneNumber': '7755551212'}
,
{'ContactID': '41', 'FirstName': 'Sam', 'LastName': 'Hawkins', 'EmailAddress': 'shawkins@unr.edu', 'PhoneNumber': '7755551213'}
,
{'ContactID': '42', 'FirstName': 'Raymond', 'LastName': 'Stickland', 'EmailAddress': 'rstickland@unr.edu', 'PhoneNumber': '7755551214'}
,
{'ContactID': '43', 'FirstName': 'Albert', 'LastName': 'Cruz', 'EmailAddress': 'acruz@unr.edu', 'PhoneNumber': '7755551222'}
,
{'ContactID': '44', 'FirstName': 'Wendy', 'LastName': 'McKenna', 'EmailAddress': 'wmckenna@unlv.edu', 'PhoneNumber': '7755551228'}
,
{'ContactID': '45', 'FirstName': 'Velma', 'LastName': 'Elliott', 'EmailAddress': 'velliott@unr.edu', 'PhoneNumber': '7755551257'}
,
{'ContactID': '46', 'FirstName': 'Peter', 'LastName': 'Terry', 'EmailAddress': 'pterry@unr.edu', 'PhoneNumber': '7755551258'}
,
{'ContactID': '47', 'FirstName': 'Janice', 'LastName': 'Reynolds', 'EmailAddress': 'jreynolds@mines.unr.edu', 'PhoneNumber': '7755551270'}
,
{'ContactID': '48', 'FirstName': 'Hannah', 'LastName': 'Palmer', 'EmailAddress': 'hpalmer@unr.nevada.edu', 'PhoneNumber': '7755551235'}
,
{'ContactID': '49', 'FirstName': 'Alexander', 'LastName': 'Stanley', 'EmailAddress': 'astanley@udayton.edu', 'PhoneNumber': '7755551230'}
,
{'ContactID': '50', 'FirstName': 'Jake', 'LastName': 'Alexander', 'EmailAddress': 'jalexander@unr.edu', 'PhoneNumber': '7755551236'}
,
{'ContactID': '51', 'FirstName': 'Damian', 'LastName': 'Garrett', 'EmailAddress': 'dgarrett@snwa.com', 'PhoneNumber': '7755551243'}
,
{'ContactID': '52', 'FirstName': 'Samuel', 'LastName': 'Allen', 'EmailAddress': 'sallen@unr.edu', 'PhoneNumber': '7755551259'}
,
{'ContactID': '53', 'FirstName': 'Mary', 'LastName': 'Jimenez', 'EmailAddress': 'mjimenez@mines.unr.edu', 'PhoneNumber': '7755551237'}
,
{'ContactID': '54', 'FirstName': 'Ryan', 'LastName': 'Barnett', 'EmailAddress': 'rbarnett@unr.edu', 'PhoneNumber': '7755551260'}
,
{'ContactID': '55', 'FirstName': 'Rowan', 'LastName': 'Petterson', 'EmailAddress': 'rpetterson@unr.edu', 'PhoneNumber': '7755551276'}
,
{'ContactID': '56', 'FirstName': 'Gloria', 'LastName': 'Rossi', 'EmailAddress': 'grossi@hydro.unr.edu', 'PhoneNumber': '7755551271'}
,
{'ContactID': '57', 'FirstName': 'Avery', 'LastName': 'Gallegos', 'EmailAddress': 'agallegos@usgs.gov', 'PhoneNumber': '7755551274'}
,
{'ContactID': '58', 'FirstName': 'Mason', 'LastName': 'Black', 'EmailAddress': 'mblack@cabnr.unr.edu', 'PhoneNumber': '7755551273'}
,
{'ContactID': '59', 'FirstName': 'George', 'LastName': 'Hamilton', 'EmailAddress': 'ghamilton@unr.edu', 'PhoneNumber': '7755551223'}
,
{'ContactID': '60', 'FirstName': 'Wyatt', 'LastName': 'Love', 'EmailAddress': 'wlove@unr.edu', 'PhoneNumber': '7755551224'}
,
{'ContactID': '61', 'FirstName': 'Cameron', 'LastName': 'Taylor', 'EmailAddress': 'ctaylor@unr.edu', 'PhoneNumber': '7755551225'}
,
{'ContactID': '62', 'FirstName': 'Margarett', 'LastName': 'Stevenson', 'EmailAddress': 'mstevenson@gmail.com', 'PhoneNumber': '7755551234'}
,
{'ContactID': '63', 'FirstName': 'Sylvester', 'LastName': 'Jones', 'EmailAddress': 'sjones@unr.edu', 'PhoneNumber': '7755551238'}
,
{'ContactID': '64', 'FirstName': 'Sarah', 'LastName': 'Burns', 'EmailAddress': 'sburns@unce.unr.edu', 'PhoneNumber': '7755551232'}
,
{'ContactID': '65', 'FirstName': 'Camilla', 'LastName': 'Gibbs', 'EmailAddress': 'cgibbs@unr.edu', 'PhoneNumber': '7755551226'}
,
{'ContactID': '66', 'FirstName': 'Don', 'LastName': 'Gibson', 'EmailAddress': 'dgibson@unr.edu', 'PhoneNumber': '7755551242'}
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
     await queryInterface.bulkDelete('contacts', null, {});
  }
}; 
