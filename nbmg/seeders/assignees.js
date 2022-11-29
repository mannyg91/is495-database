'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('assignees',[

{'AssigneeID': '1', 'EmployeeID': '105603', 'WorkOrderID': '1698'}
,
{'AssigneeID': '2', 'EmployeeID': '105600', 'WorkOrderID': '1705'}
,
{'AssigneeID': '3', 'EmployeeID': '105601', 'WorkOrderID': '1705'}
,
{'AssigneeID': '4', 'EmployeeID': '105603', 'WorkOrderID': '1705'}
,
{'AssigneeID': '5', 'EmployeeID': '105601', 'WorkOrderID': '1706'}
,
{'AssigneeID': '6', 'EmployeeID': '105602', 'WorkOrderID': '1706'}
,
{'AssigneeID': '7', 'EmployeeID': '105603', 'WorkOrderID': '1706'}
,
{'AssigneeID': '8', 'EmployeeID': '105601', 'WorkOrderID': '1707'}
,
{'AssigneeID': '9', 'EmployeeID': '105600', 'WorkOrderID': '1708'}
,
{'AssigneeID': '10', 'EmployeeID': '105601', 'WorkOrderID': '1708'}
,
{'AssigneeID': '11', 'EmployeeID': '105602', 'WorkOrderID': '1708'}
,
{'AssigneeID': '12', 'EmployeeID': '105603', 'WorkOrderID': '1708'}
,
{'AssigneeID': '13', 'EmployeeID': '105600', 'WorkOrderID': '1710'}
,
{'AssigneeID': '14', 'EmployeeID': '105601', 'WorkOrderID': '1710'}
,
{'AssigneeID': '15', 'EmployeeID': '105603', 'WorkOrderID': '1710'}
,
{'AssigneeID': '16', 'EmployeeID': '105600', 'WorkOrderID': '1711'}
,
{'AssigneeID': '17', 'EmployeeID': '105601', 'WorkOrderID': '1711'}
,
{'AssigneeID': '18', 'EmployeeID': '105602', 'WorkOrderID': '1711'}
,
{'AssigneeID': '19', 'EmployeeID': '105603', 'WorkOrderID': '1711'}
,
{'AssigneeID': '20', 'EmployeeID': '105604', 'WorkOrderID': '1711'}
,
{'AssigneeID': '21', 'EmployeeID': '105600', 'WorkOrderID': '1712'}
,
{'AssigneeID': '22', 'EmployeeID': '105601', 'WorkOrderID': '1712'}
,
{'AssigneeID': '23', 'EmployeeID': '105602', 'WorkOrderID': '1712'}
,
{'AssigneeID': '24', 'EmployeeID': '105603', 'WorkOrderID': '1712'}
,
{'AssigneeID': '25', 'EmployeeID': '105604', 'WorkOrderID': '1712'}
,
{'AssigneeID': '26', 'EmployeeID': '105601', 'WorkOrderID': '1713'}
,
{'AssigneeID': '27', 'EmployeeID': '105603', 'WorkOrderID': '1713'}
,
{'AssigneeID': '28', 'EmployeeID': '105600', 'WorkOrderID': '1714'}
,
{'AssigneeID': '29', 'EmployeeID': '105601', 'WorkOrderID': '1714'}
,
{'AssigneeID': '30', 'EmployeeID': '105602', 'WorkOrderID': '1714'}
,
{'AssigneeID': '31', 'EmployeeID': '105603', 'WorkOrderID': '1714'}
,
{'AssigneeID': '32', 'EmployeeID': '105604', 'WorkOrderID': '1714'}
,
{'AssigneeID': '33', 'EmployeeID': '105604', 'WorkOrderID': '1715'}
,
{'AssigneeID': '34', 'EmployeeID': '105600', 'WorkOrderID': '1716'}
,
{'AssigneeID': '35', 'EmployeeID': '105601', 'WorkOrderID': '1716'}
,
{'AssigneeID': '36', 'EmployeeID': '105602', 'WorkOrderID': '1716'}
,
{'AssigneeID': '37', 'EmployeeID': '105603', 'WorkOrderID': '1716'}
,
{'AssigneeID': '38', 'EmployeeID': '105604', 'WorkOrderID': '1716'}
,
{'AssigneeID': '39', 'EmployeeID': '105600', 'WorkOrderID': '1717'}
,
{'AssigneeID': '40', 'EmployeeID': '105601', 'WorkOrderID': '1717'}
,
{'AssigneeID': '41', 'EmployeeID': '105602', 'WorkOrderID': '1717'}
,
{'AssigneeID': '42', 'EmployeeID': '105603', 'WorkOrderID': '1717'}
,
{'AssigneeID': '43', 'EmployeeID': '105604', 'WorkOrderID': '1717'}
,
{'AssigneeID': '44', 'EmployeeID': '105600', 'WorkOrderID': '1718'}
,
{'AssigneeID': '45', 'EmployeeID': '105601', 'WorkOrderID': '1718'}
,
{'AssigneeID': '46', 'EmployeeID': '105602', 'WorkOrderID': '1718'}
,
{'AssigneeID': '47', 'EmployeeID': '105603', 'WorkOrderID': '1718'}
,
{'AssigneeID': '48', 'EmployeeID': '105604', 'WorkOrderID': '1718'}
,
{'AssigneeID': '49', 'EmployeeID': '105600', 'WorkOrderID': '1719'}
,
{'AssigneeID': '50', 'EmployeeID': '105601', 'WorkOrderID': '1719'}
,
{'AssigneeID': '51', 'EmployeeID': '105604', 'WorkOrderID': '1719'}
,
{'AssigneeID': '52', 'EmployeeID': '105600', 'WorkOrderID': '1720'}
,
{'AssigneeID': '53', 'EmployeeID': '105601', 'WorkOrderID': '1720'}
,
{'AssigneeID': '54', 'EmployeeID': '105602', 'WorkOrderID': '1720'}
,
{'AssigneeID': '55', 'EmployeeID': '105603', 'WorkOrderID': '1720'}
,
{'AssigneeID': '56', 'EmployeeID': '105604', 'WorkOrderID': '1720'}
,
{'AssigneeID': '57', 'EmployeeID': '105600', 'WorkOrderID': '1722'}
,
{'AssigneeID': '58', 'EmployeeID': '105601', 'WorkOrderID': '1722'}
,
{'AssigneeID': '59', 'EmployeeID': '105602', 'WorkOrderID': '1722'}
,
{'AssigneeID': '60', 'EmployeeID': '105603', 'WorkOrderID': '1722'}
,
{'AssigneeID': '61', 'EmployeeID': '105604', 'WorkOrderID': '1722'}
,
{'AssigneeID': '62', 'EmployeeID': '105600', 'WorkOrderID': '1732'}
,
{'AssigneeID': '63', 'EmployeeID': '105602', 'WorkOrderID': '1732'}
,
{'AssigneeID': '64', 'EmployeeID': '105614', 'WorkOrderID': '1744'}
,
{'AssigneeID': '65', 'EmployeeID': '105600', 'WorkOrderID': '1773'}
,
{'AssigneeID': '66', 'EmployeeID': '105609', 'WorkOrderID': '1780'}
,
{'AssigneeID': '67', 'EmployeeID': '105609', 'WorkOrderID': '1781'}
,
{'AssigneeID': '68', 'EmployeeID': '105610', 'WorkOrderID': '1859'}
,
{'AssigneeID': '69', 'EmployeeID': '105600', 'WorkOrderID': '1860'}
,
{'AssigneeID': '70', 'EmployeeID': '105609', 'WorkOrderID': '1860'}
,
{'AssigneeID': '71', 'EmployeeID': '105610', 'WorkOrderID': '1860'}
,
{'AssigneeID': '72', 'EmployeeID': '105613', 'WorkOrderID': '1860'}
,
{'AssigneeID': '73', 'EmployeeID': '105616', 'WorkOrderID': '1860'}
,
{'AssigneeID': '74', 'EmployeeID': '105602', 'WorkOrderID': '1861'}
,
{'AssigneeID': '75', 'EmployeeID': '105609', 'WorkOrderID': '1864'}
,
{'AssigneeID': '76', 'EmployeeID': '105611', 'WorkOrderID': '1864'}
,
{'AssigneeID': '77', 'EmployeeID': '105613', 'WorkOrderID': '1864'}
,
{'AssigneeID': '78', 'EmployeeID': '105616', 'WorkOrderID': '1864'}
,
{'AssigneeID': '79', 'EmployeeID': '105610', 'WorkOrderID': '1896'}
,
{'AssigneeID': '80', 'EmployeeID': '105600', 'WorkOrderID': '1897'}
,
{'AssigneeID': '81', 'EmployeeID': '105613', 'WorkOrderID': '1897'}
,
{'AssigneeID': '82', 'EmployeeID': '105609', 'WorkOrderID': '1898'}
,
{'AssigneeID': '83', 'EmployeeID': '105613', 'WorkOrderID': '1898'}
,
{'AssigneeID': '84', 'EmployeeID': '105600', 'WorkOrderID': '1899'}
,
{'AssigneeID': '85', 'EmployeeID': '105613', 'WorkOrderID': '1899'}
,
{'AssigneeID': '86', 'EmployeeID': '105617', 'WorkOrderID': '1899'}
,
{'AssigneeID': '87', 'EmployeeID': '105600', 'WorkOrderID': '1905'}
,
{'AssigneeID': '88', 'EmployeeID': '105610', 'WorkOrderID': '1905'}
,
{'AssigneeID': '89', 'EmployeeID': '105613', 'WorkOrderID': '1905'}
,
{'AssigneeID': '90', 'EmployeeID': '105600', 'WorkOrderID': '1906'}
,
{'AssigneeID': '91', 'EmployeeID': '105611', 'WorkOrderID': '1906'}
,
{'AssigneeID': '92', 'EmployeeID': '105613', 'WorkOrderID': '1906'}
,
{'AssigneeID': '93', 'EmployeeID': '105611', 'WorkOrderID': '1907'}
,
{'AssigneeID': '94', 'EmployeeID': '105613', 'WorkOrderID': '1907'}
,
{'AssigneeID': '95', 'EmployeeID': '105600', 'WorkOrderID': '1937'}
,
{'AssigneeID': '96', 'EmployeeID': '105611', 'WorkOrderID': '1937'}
,
{'AssigneeID': '97', 'EmployeeID': '105613', 'WorkOrderID': '1937'}
,
{'AssigneeID': '98', 'EmployeeID': '105617', 'WorkOrderID': '1937'}
,
{'AssigneeID': '99', 'EmployeeID': '105600', 'WorkOrderID': '1952'}
,
{'AssigneeID': '100', 'EmployeeID': '105611', 'WorkOrderID': '1952'}
,
{'AssigneeID': '101', 'EmployeeID': '105613', 'WorkOrderID': '1952'}
,
{'AssigneeID': '102', 'EmployeeID': '105600', 'WorkOrderID': '1957'}
,
{'AssigneeID': '103', 'EmployeeID': '105611', 'WorkOrderID': '1957'}
,
{'AssigneeID': '104', 'EmployeeID': '105612', 'WorkOrderID': '1957'}
,
{'AssigneeID': '105', 'EmployeeID': '105613', 'WorkOrderID': '1957'}
,
{'AssigneeID': '106', 'EmployeeID': '105600', 'WorkOrderID': '1958'}
,
{'AssigneeID': '107', 'EmployeeID': '105602', 'WorkOrderID': '1958'}
,
{'AssigneeID': '108', 'EmployeeID': '105609', 'WorkOrderID': '1958'}
,
{'AssigneeID': '109', 'EmployeeID': '105611', 'WorkOrderID': '1958'}
,
{'AssigneeID': '110', 'EmployeeID': '105613', 'WorkOrderID': '1958'}
,
{'AssigneeID': '111', 'EmployeeID': '105617', 'WorkOrderID': '1958'}
,
{'AssigneeID': '112', 'EmployeeID': '105600', 'WorkOrderID': '1969'}
,
{'AssigneeID': '113', 'EmployeeID': '105602', 'WorkOrderID': '1969'}
,
{'AssigneeID': '114', 'EmployeeID': '105609', 'WorkOrderID': '1969'}
,
{'AssigneeID': '115', 'EmployeeID': '105611', 'WorkOrderID': '1969'}
,
{'AssigneeID': '116', 'EmployeeID': '105617', 'WorkOrderID': '1969'}
,
{'AssigneeID': '117', 'EmployeeID': '105600', 'WorkOrderID': '2326'}
,
{'AssigneeID': '118', 'EmployeeID': '105600', 'WorkOrderID': '2347'}
,
{'AssigneeID': '119', 'EmployeeID': '105602', 'WorkOrderID': '2347'}
,
{'AssigneeID': '120', 'EmployeeID': '105600', 'WorkOrderID': '2408'}
,
{'AssigneeID': '121', 'EmployeeID': '105602', 'WorkOrderID': '2408'}
,
{'AssigneeID': '122', 'EmployeeID': '105600', 'WorkOrderID': '2417'}
,
{'AssigneeID': '123', 'EmployeeID': '105602', 'WorkOrderID': '2417'}
,
{'AssigneeID': '124', 'EmployeeID': '105603', 'WorkOrderID': '2417'}
,
{'AssigneeID': '125', 'EmployeeID': '105600', 'WorkOrderID': '2433'}
,
{'AssigneeID': '126', 'EmployeeID': '105601', 'WorkOrderID': '2433'}
,
{'AssigneeID': '127', 'EmployeeID': '105602', 'WorkOrderID': '2433'}
,
{'AssigneeID': '128', 'EmployeeID': '105603', 'WorkOrderID': '2433'}
,
{'AssigneeID': '129', 'EmployeeID': '105600', 'WorkOrderID': '2443'}
,
{'AssigneeID': '130', 'EmployeeID': '105601', 'WorkOrderID': '2443'}
,
{'AssigneeID': '131', 'EmployeeID': '105602', 'WorkOrderID': '2443'}
,
{'AssigneeID': '132', 'EmployeeID': '105603', 'WorkOrderID': '2443'}
,
{'AssigneeID': '133', 'EmployeeID': '105600', 'WorkOrderID': '2466'}
,
{'AssigneeID': '134', 'EmployeeID': '105601', 'WorkOrderID': '2466'}
,
{'AssigneeID': '135', 'EmployeeID': '105603', 'WorkOrderID': '2466'}
,
{'AssigneeID': '136', 'EmployeeID': '105604', 'WorkOrderID': '2466'}
,
{'AssigneeID': '137', 'EmployeeID': '105600', 'WorkOrderID': '2475'}
,
{'AssigneeID': '138', 'EmployeeID': '105601', 'WorkOrderID': '2475'}
,
{'AssigneeID': '139', 'EmployeeID': '105603', 'WorkOrderID': '2475'}
,
{'AssigneeID': '140', 'EmployeeID': '105615', 'WorkOrderID': '2475'}
,
{'AssigneeID': '141', 'EmployeeID': '105600', 'WorkOrderID': '2480'}
,
{'AssigneeID': '142', 'EmployeeID': '105601', 'WorkOrderID': '2480'}
,
{'AssigneeID': '143', 'EmployeeID': '105600', 'WorkOrderID': '2486'}
,
{'AssigneeID': '144', 'EmployeeID': '105601', 'WorkOrderID': '2486'}
,
{'AssigneeID': '145', 'EmployeeID': '105603', 'WorkOrderID': '2486'}
,
{'AssigneeID': '146', 'EmployeeID': '105600', 'WorkOrderID': '2494'}
,
{'AssigneeID': '147', 'EmployeeID': '105603', 'WorkOrderID': '2494'}
,
{'AssigneeID': '148', 'EmployeeID': '105600', 'WorkOrderID': '2502'}
,
{'AssigneeID': '149', 'EmployeeID': '105602', 'WorkOrderID': '2502'}
,
{'AssigneeID': '150', 'EmployeeID': '105603', 'WorkOrderID': '2502'}
,
{'AssigneeID': '151', 'EmployeeID': '105600', 'WorkOrderID': '2507'}
,
{'AssigneeID': '152', 'EmployeeID': '105601', 'WorkOrderID': '2507'}
,
{'AssigneeID': '153', 'EmployeeID': '105600', 'WorkOrderID': '2508'}
,
{'AssigneeID': '154', 'EmployeeID': '105600', 'WorkOrderID': '2513'}
,
{'AssigneeID': '155', 'EmployeeID': '105601', 'WorkOrderID': '2513'}
,
{'AssigneeID': '156', 'EmployeeID': '105601', 'WorkOrderID': '2519'}
,
{'AssigneeID': '157', 'EmployeeID': '105600', 'WorkOrderID': '2523'}
,
{'AssigneeID': '158', 'EmployeeID': '105601', 'WorkOrderID': '2523'}
,
{'AssigneeID': '159', 'EmployeeID': '105602', 'WorkOrderID': '2523'}
,
{'AssigneeID': '160', 'EmployeeID': '105603', 'WorkOrderID': '2523'}
,
{'AssigneeID': '161', 'EmployeeID': '105604', 'WorkOrderID': '2523'}
,
{'AssigneeID': '162', 'EmployeeID': '105600', 'WorkOrderID': '2524'}
,
{'AssigneeID': '163', 'EmployeeID': '105601', 'WorkOrderID': '2524'}
,
{'AssigneeID': '164', 'EmployeeID': '105602', 'WorkOrderID': '2524'}
,
{'AssigneeID': '165', 'EmployeeID': '105603', 'WorkOrderID': '2524'}
,
{'AssigneeID': '166', 'EmployeeID': '105604', 'WorkOrderID': '2524'}
,
{'AssigneeID': '167', 'EmployeeID': '105600', 'WorkOrderID': '2525'}
,
{'AssigneeID': '168', 'EmployeeID': '105603', 'WorkOrderID': '2525'}
,
{'AssigneeID': '169', 'EmployeeID': '105600', 'WorkOrderID': '2526'}
,
{'AssigneeID': '170', 'EmployeeID': '105602', 'WorkOrderID': '2526'}
,
{'AssigneeID': '171', 'EmployeeID': '105600', 'WorkOrderID': '2527'}
,
{'AssigneeID': '172', 'EmployeeID': '105601', 'WorkOrderID': '2527'}
,
{'AssigneeID': '173', 'EmployeeID': '105603', 'WorkOrderID': '2527'}
,
{'AssigneeID': '174', 'EmployeeID': '105600', 'WorkOrderID': '2528'}
,
{'AssigneeID': '175', 'EmployeeID': '105601', 'WorkOrderID': '2528'}
,
{'AssigneeID': '176', 'EmployeeID': '105602', 'WorkOrderID': '2528'}
,
{'AssigneeID': '177', 'EmployeeID': '105603', 'WorkOrderID': '2528'}
,
{'AssigneeID': '178', 'EmployeeID': '105600', 'WorkOrderID': '2529'}
,
{'AssigneeID': '179', 'EmployeeID': '105601', 'WorkOrderID': '2529'}
,
{'AssigneeID': '180', 'EmployeeID': '105602', 'WorkOrderID': '2529'}
,
{'AssigneeID': '181', 'EmployeeID': '105603', 'WorkOrderID': '2529'}
,
{'AssigneeID': '182', 'EmployeeID': '105600', 'WorkOrderID': '2533'}
,
{'AssigneeID': '183', 'EmployeeID': '105601', 'WorkOrderID': '2533'}
,
{'AssigneeID': '184', 'EmployeeID': '105600', 'WorkOrderID': '2534'}
,
{'AssigneeID': '185', 'EmployeeID': '105602', 'WorkOrderID': '2534'}
,
{'AssigneeID': '186', 'EmployeeID': '105603', 'WorkOrderID': '2534'}
,
{'AssigneeID': '187', 'EmployeeID': '105600', 'WorkOrderID': '2535'}
,
{'AssigneeID': '188', 'EmployeeID': '105601', 'WorkOrderID': '2535'}
,
{'AssigneeID': '189', 'EmployeeID': '105603', 'WorkOrderID': '2535'}
,
{'AssigneeID': '190', 'EmployeeID': '105600', 'WorkOrderID': '2536'}
,
{'AssigneeID': '191', 'EmployeeID': '105602', 'WorkOrderID': '2536'}
,
{'AssigneeID': '192', 'EmployeeID': '105603', 'WorkOrderID': '2536'}
,
{'AssigneeID': '193', 'EmployeeID': '105600', 'WorkOrderID': '2537'}
,
{'AssigneeID': '194', 'EmployeeID': '105604', 'WorkOrderID': '2537'}
,
{'AssigneeID': '195', 'EmployeeID': '105600', 'WorkOrderID': '2538'}
,
{'AssigneeID': '196', 'EmployeeID': '105602', 'WorkOrderID': '2538'}
,
{'AssigneeID': '197', 'EmployeeID': '105600', 'WorkOrderID': '2539'}
,
{'AssigneeID': '198', 'EmployeeID': '105602', 'WorkOrderID': '2539'}
,
{'AssigneeID': '199', 'EmployeeID': '105600', 'WorkOrderID': '2542'}
,
{'AssigneeID': '200', 'EmployeeID': '105601', 'WorkOrderID': '2542'}
,
{'AssigneeID': '201', 'EmployeeID': '105603', 'WorkOrderID': '2542'}
,
{'AssigneeID': '202', 'EmployeeID': '105600', 'WorkOrderID': '2543'}
,
{'AssigneeID': '203', 'EmployeeID': '105600', 'WorkOrderID': '2544'}
,
{'AssigneeID': '204', 'EmployeeID': '105601', 'WorkOrderID': '2544'}
,
{'AssigneeID': '205', 'EmployeeID': '105603', 'WorkOrderID': '2544'}
,
{'AssigneeID': '206', 'EmployeeID': '105604', 'WorkOrderID': '2544'}
,
{'AssigneeID': '207', 'EmployeeID': '105600', 'WorkOrderID': '2545'}
,
{'AssigneeID': '208', 'EmployeeID': '105601', 'WorkOrderID': '2545'}
,
{'AssigneeID': '209', 'EmployeeID': '105603', 'WorkOrderID': '2545'}
,
{'AssigneeID': '210', 'EmployeeID': '105600', 'WorkOrderID': '2546'}
,
{'AssigneeID': '211', 'EmployeeID': '105601', 'WorkOrderID': '2546'}
,
{'AssigneeID': '212', 'EmployeeID': '105603', 'WorkOrderID': '2546'}
,
{'AssigneeID': '213', 'EmployeeID': '105604', 'WorkOrderID': '2546'}
,
{'AssigneeID': '214', 'EmployeeID': '105600', 'WorkOrderID': '2547'}
,
{'AssigneeID': '215', 'EmployeeID': '105601', 'WorkOrderID': '2547'}
,
{'AssigneeID': '216', 'EmployeeID': '105603', 'WorkOrderID': '2547'}
,
{'AssigneeID': '217', 'EmployeeID': '105604', 'WorkOrderID': '2547'}
,
{'AssigneeID': '218', 'EmployeeID': '105600', 'WorkOrderID': '2548'}
,
{'AssigneeID': '219', 'EmployeeID': '105601', 'WorkOrderID': '2548'}
,
{'AssigneeID': '220', 'EmployeeID': '105603', 'WorkOrderID': '2548'}
,
{'AssigneeID': '221', 'EmployeeID': '105600', 'WorkOrderID': '2549'}
,
{'AssigneeID': '222', 'EmployeeID': '105601', 'WorkOrderID': '2549'}
,
{'AssigneeID': '223', 'EmployeeID': '105603', 'WorkOrderID': '2549'}
,
{'AssigneeID': '224', 'EmployeeID': '105604', 'WorkOrderID': '2549'}
,
{'AssigneeID': '225', 'EmployeeID': '105600', 'WorkOrderID': '2550'}
,
{'AssigneeID': '226', 'EmployeeID': '105601', 'WorkOrderID': '2550'}
,
{'AssigneeID': '227', 'EmployeeID': '105602', 'WorkOrderID': '2550'}
,
{'AssigneeID': '228', 'EmployeeID': '105603', 'WorkOrderID': '2550'}
,
{'AssigneeID': '229', 'EmployeeID': '105604', 'WorkOrderID': '2550'}
,
{'AssigneeID': '230', 'EmployeeID': '105600', 'WorkOrderID': '2551'}
,
{'AssigneeID': '231', 'EmployeeID': '105602', 'WorkOrderID': '2551'}
,
{'AssigneeID': '232', 'EmployeeID': '105603', 'WorkOrderID': '2551'}
,
{'AssigneeID': '233', 'EmployeeID': '105600', 'WorkOrderID': '2552'}
,
{'AssigneeID': '234', 'EmployeeID': '105603', 'WorkOrderID': '2552'}
,
{'AssigneeID': '235', 'EmployeeID': '105600', 'WorkOrderID': '2553'}
,
{'AssigneeID': '236', 'EmployeeID': '105601', 'WorkOrderID': '2553'}
,
{'AssigneeID': '237', 'EmployeeID': '105603', 'WorkOrderID': '2553'}
,
{'AssigneeID': '238', 'EmployeeID': '105604', 'WorkOrderID': '2553'}
,
{'AssigneeID': '239', 'EmployeeID': '105600', 'WorkOrderID': '2554'}
,
{'AssigneeID': '240', 'EmployeeID': '105601', 'WorkOrderID': '2554'}
,
{'AssigneeID': '241', 'EmployeeID': '105602', 'WorkOrderID': '2554'}
,
{'AssigneeID': '242', 'EmployeeID': '105603', 'WorkOrderID': '2554'}
,
{'AssigneeID': '243', 'EmployeeID': '105604', 'WorkOrderID': '2554'}
,
{'AssigneeID': '244', 'EmployeeID': '105600', 'WorkOrderID': '2556'}
,
{'AssigneeID': '245', 'EmployeeID': '105600', 'WorkOrderID': '2557'}
,
{'AssigneeID': '246', 'EmployeeID': '105600', 'WorkOrderID': '2559'}
,
{'AssigneeID': '247', 'EmployeeID': '105600', 'WorkOrderID': '2560'}
,
{'AssigneeID': '248', 'EmployeeID': '105604', 'WorkOrderID': '2560'}
,
{'AssigneeID': '249', 'EmployeeID': '105600', 'WorkOrderID': '2561'}
,
{'AssigneeID': '250', 'EmployeeID': '105603', 'WorkOrderID': '2561'}
,
{'AssigneeID': '251', 'EmployeeID': '105604', 'WorkOrderID': '2561'}
,
{'AssigneeID': '252', 'EmployeeID': '105600', 'WorkOrderID': '2562'}
,
{'AssigneeID': '253', 'EmployeeID': '105603', 'WorkOrderID': '2562'}
,
{'AssigneeID': '254', 'EmployeeID': '105604', 'WorkOrderID': '2562'}
,
{'AssigneeID': '255', 'EmployeeID': '105600', 'WorkOrderID': '2563'}
,
{'AssigneeID': '256', 'EmployeeID': '105604', 'WorkOrderID': '2563'}
,
{'AssigneeID': '257', 'EmployeeID': '105600', 'WorkOrderID': '2564'}
,
{'AssigneeID': '258', 'EmployeeID': '105604', 'WorkOrderID': '2564'}
,
{'AssigneeID': '259', 'EmployeeID': '105600', 'WorkOrderID': '2565'}
,
{'AssigneeID': '260', 'EmployeeID': '105601', 'WorkOrderID': '2565'}
,
{'AssigneeID': '261', 'EmployeeID': '105604', 'WorkOrderID': '2565'}
,
{'AssigneeID': '262', 'EmployeeID': '105600', 'WorkOrderID': '2566'}
,
{'AssigneeID': '263', 'EmployeeID': '105601', 'WorkOrderID': '2566'}
,
{'AssigneeID': '264', 'EmployeeID': '105604', 'WorkOrderID': '2566'}
,
{'AssigneeID': '265', 'EmployeeID': '105600', 'WorkOrderID': '2567'}
,
{'AssigneeID': '266', 'EmployeeID': '105602', 'WorkOrderID': '2567'}
,
{'AssigneeID': '267', 'EmployeeID': '105600', 'WorkOrderID': '2568'}
,
{'AssigneeID': '268', 'EmployeeID': '105602', 'WorkOrderID': '2568'}
,
{'AssigneeID': '269', 'EmployeeID': '105600', 'WorkOrderID': '2569'}
,
{'AssigneeID': '270', 'EmployeeID': '105601', 'WorkOrderID': '2569'}
,
{'AssigneeID': '271', 'EmployeeID': '105603', 'WorkOrderID': '2569'}
,
{'AssigneeID': '272', 'EmployeeID': '105600', 'WorkOrderID': '2570'}
,
{'AssigneeID': '273', 'EmployeeID': '105601', 'WorkOrderID': '2570'}
,
{'AssigneeID': '274', 'EmployeeID': '105603', 'WorkOrderID': '2570'}
,
{'AssigneeID': '275', 'EmployeeID': '105600', 'WorkOrderID': '2571'}
,
{'AssigneeID': '276', 'EmployeeID': '105604', 'WorkOrderID': '2571'}
,
{'AssigneeID': '277', 'EmployeeID': '105600', 'WorkOrderID': '2572'}
,
{'AssigneeID': '278', 'EmployeeID': '105600', 'WorkOrderID': '2573'}
,
{'AssigneeID': '279', 'EmployeeID': '105602', 'WorkOrderID': '2573'}
,
{'AssigneeID': '280', 'EmployeeID': '105600', 'WorkOrderID': '2574'}
,
{'AssigneeID': '281', 'EmployeeID': '105602', 'WorkOrderID': '2574'}
,
{'AssigneeID': '282', 'EmployeeID': '105600', 'WorkOrderID': '2575'}
,
{'AssigneeID': '283', 'EmployeeID': '105601', 'WorkOrderID': '2575'}
,
{'AssigneeID': '284', 'EmployeeID': '105600', 'WorkOrderID': '2576'}
,
{'AssigneeID': '285', 'EmployeeID': '105601', 'WorkOrderID': '2576'}
,
{'AssigneeID': '286', 'EmployeeID': '105603', 'WorkOrderID': '2576'}
,
{'AssigneeID': '287', 'EmployeeID': '105604', 'WorkOrderID': '2576'}
,
{'AssigneeID': '288', 'EmployeeID': '105600', 'WorkOrderID': '2577'}
,
{'AssigneeID': '289', 'EmployeeID': '105601', 'WorkOrderID': '2577'}
,
{'AssigneeID': '290', 'EmployeeID': '105600', 'WorkOrderID': '2578'}
,
{'AssigneeID': '291', 'EmployeeID': '105604', 'WorkOrderID': '2578'}
,
{'AssigneeID': '292', 'EmployeeID': '105600', 'WorkOrderID': '2579'}
,
{'AssigneeID': '293', 'EmployeeID': '105602', 'WorkOrderID': '2579'}
,
{'AssigneeID': '294', 'EmployeeID': '105603', 'WorkOrderID': '2579'}
,
{'AssigneeID': '295', 'EmployeeID': '105600', 'WorkOrderID': '2580'}
,
{'AssigneeID': '296', 'EmployeeID': '105601', 'WorkOrderID': '2580'}
,
{'AssigneeID': '297', 'EmployeeID': '105602', 'WorkOrderID': '2580'}
,
{'AssigneeID': '298', 'EmployeeID': '105603', 'WorkOrderID': '2580'}
,
{'AssigneeID': '299', 'EmployeeID': '105604', 'WorkOrderID': '2580'}
,
{'AssigneeID': '300', 'EmployeeID': '105600', 'WorkOrderID': '2581'}
,
{'AssigneeID': '301', 'EmployeeID': '105602', 'WorkOrderID': '2581'}
,
{'AssigneeID': '302', 'EmployeeID': '105603', 'WorkOrderID': '2581'}
,
{'AssigneeID': '303', 'EmployeeID': '105600', 'WorkOrderID': '2582'}
,
{'AssigneeID': '304', 'EmployeeID': '105600', 'WorkOrderID': '2583'}
,
{'AssigneeID': '305', 'EmployeeID': '105603', 'WorkOrderID': '2583'}
,
{'AssigneeID': '306', 'EmployeeID': '105601', 'WorkOrderID': '2584'}
,
{'AssigneeID': '307', 'EmployeeID': '105603', 'WorkOrderID': '2584'}
,
{'AssigneeID': '308', 'EmployeeID': '105604', 'WorkOrderID': '2584'}
,
{'AssigneeID': '309', 'EmployeeID': '105600', 'WorkOrderID': '2585'}
,
{'AssigneeID': '310', 'EmployeeID': '105601', 'WorkOrderID': '2585'}
,
{'AssigneeID': '311', 'EmployeeID': '105600', 'WorkOrderID': '2586'}
,
{'AssigneeID': '312', 'EmployeeID': '105601', 'WorkOrderID': '2586'}
,
{'AssigneeID': '313', 'EmployeeID': '105602', 'WorkOrderID': '2586'}
,
{'AssigneeID': '314', 'EmployeeID': '105603', 'WorkOrderID': '2586'}
,
{'AssigneeID': '315', 'EmployeeID': '105604', 'WorkOrderID': '2586'}
,
{'AssigneeID': '316', 'EmployeeID': '105600', 'WorkOrderID': '2587'}
,
{'AssigneeID': '317', 'EmployeeID': '105601', 'WorkOrderID': '2587'}
,
{'AssigneeID': '318', 'EmployeeID': '105603', 'WorkOrderID': '2587'}
,
{'AssigneeID': '319', 'EmployeeID': '105600', 'WorkOrderID': '2588'}
,
{'AssigneeID': '320', 'EmployeeID': '105601', 'WorkOrderID': '2588'}
,
{'AssigneeID': '321', 'EmployeeID': '105602', 'WorkOrderID': '2588'}
,
{'AssigneeID': '322', 'EmployeeID': '105600', 'WorkOrderID': '2589'}
,
{'AssigneeID': '323', 'EmployeeID': '105604', 'WorkOrderID': '2589'}
,
{'AssigneeID': '324', 'EmployeeID': '105600', 'WorkOrderID': '2590'}
,
{'AssigneeID': '325', 'EmployeeID': '105601', 'WorkOrderID': '2590'}
,
{'AssigneeID': '326', 'EmployeeID': '105603', 'WorkOrderID': '2590'}
,
{'AssigneeID': '327', 'EmployeeID': '105604', 'WorkOrderID': '2590'}
,
{'AssigneeID': '328', 'EmployeeID': '105600', 'WorkOrderID': '2591'}
,
{'AssigneeID': '329', 'EmployeeID': '105604', 'WorkOrderID': '2591'}
,
{'AssigneeID': '330', 'EmployeeID': '105600', 'WorkOrderID': '2592'}
,
{'AssigneeID': '331', 'EmployeeID': '105601', 'WorkOrderID': '2592'}
,
{'AssigneeID': '332', 'EmployeeID': '105602', 'WorkOrderID': '2592'}
,
{'AssigneeID': '333', 'EmployeeID': '105603', 'WorkOrderID': '2592'}
,
{'AssigneeID': '334', 'EmployeeID': '105604', 'WorkOrderID': '2592'}
,
{'AssigneeID': '335', 'EmployeeID': '105600', 'WorkOrderID': '2593'}
,
{'AssigneeID': '336', 'EmployeeID': '105601', 'WorkOrderID': '2593'}
,
{'AssigneeID': '337', 'EmployeeID': '105602', 'WorkOrderID': '2593'}
,
{'AssigneeID': '338', 'EmployeeID': '105603', 'WorkOrderID': '2593'}
,
{'AssigneeID': '339', 'EmployeeID': '105604', 'WorkOrderID': '2593'}
,
{'AssigneeID': '340', 'EmployeeID': '105600', 'WorkOrderID': '2594'}
,
{'AssigneeID': '341', 'EmployeeID': '105602', 'WorkOrderID': '2594'}
,
{'AssigneeID': '342', 'EmployeeID': '105603', 'WorkOrderID': '2594'}
,
{'AssigneeID': '343', 'EmployeeID': '105600', 'WorkOrderID': '2595'}
,
{'AssigneeID': '344', 'EmployeeID': '105601', 'WorkOrderID': '2595'}
,
{'AssigneeID': '345', 'EmployeeID': '105603', 'WorkOrderID': '2595'}
,
{'AssigneeID': '346', 'EmployeeID': '105600', 'WorkOrderID': '2596'}
,
{'AssigneeID': '347', 'EmployeeID': '105602', 'WorkOrderID': '2596'}
,
{'AssigneeID': '348', 'EmployeeID': '105603', 'WorkOrderID': '2596'}
,
{'AssigneeID': '349', 'EmployeeID': '105600', 'WorkOrderID': '2597'}
,
{'AssigneeID': '350', 'EmployeeID': '105603', 'WorkOrderID': '2597'}
,
{'AssigneeID': '351', 'EmployeeID': '105600', 'WorkOrderID': '2598'}
,
{'AssigneeID': '352', 'EmployeeID': '105601', 'WorkOrderID': '2598'}
,
{'AssigneeID': '353', 'EmployeeID': '105603', 'WorkOrderID': '2598'}
,
{'AssigneeID': '354', 'EmployeeID': '105604', 'WorkOrderID': '2598'}
,
{'AssigneeID': '355', 'EmployeeID': '105601', 'WorkOrderID': '2599'}
,
{'AssigneeID': '356', 'EmployeeID': '105600', 'WorkOrderID': '2600'}
,
{'AssigneeID': '357', 'EmployeeID': '105600', 'WorkOrderID': '2601'}
,
{'AssigneeID': '358', 'EmployeeID': '105601', 'WorkOrderID': '2601'}
,
{'AssigneeID': '359', 'EmployeeID': '105603', 'WorkOrderID': '2601'}
,
{'AssigneeID': '360', 'EmployeeID': '105604', 'WorkOrderID': '2601'}
,
{'AssigneeID': '361', 'EmployeeID': '105600', 'WorkOrderID': '2602'}
,
{'AssigneeID': '362', 'EmployeeID': '105603', 'WorkOrderID': '2602'}
,
{'AssigneeID': '363', 'EmployeeID': '105604', 'WorkOrderID': '2602'}
,
{'AssigneeID': '364', 'EmployeeID': '105600', 'WorkOrderID': '2603'}
,
{'AssigneeID': '365', 'EmployeeID': '105604', 'WorkOrderID': '2603'}
,
{'AssigneeID': '366', 'EmployeeID': '105600', 'WorkOrderID': '2604'}
,
{'AssigneeID': '367', 'EmployeeID': '105604', 'WorkOrderID': '2604'}
,
{'AssigneeID': '368', 'EmployeeID': '105600', 'WorkOrderID': '2605'}
,
{'AssigneeID': '369', 'EmployeeID': '105604', 'WorkOrderID': '2605'}
,
{'AssigneeID': '370', 'EmployeeID': '105600', 'WorkOrderID': '2606'}
,
{'AssigneeID': '371', 'EmployeeID': '105601', 'WorkOrderID': '2606'}
,
{'AssigneeID': '372', 'EmployeeID': '105600', 'WorkOrderID': '2607'}
,
{'AssigneeID': '373', 'EmployeeID': '105601', 'WorkOrderID': '2607'}
,
{'AssigneeID': '374', 'EmployeeID': '105600', 'WorkOrderID': '2608'}
,
{'AssigneeID': '375', 'EmployeeID': '105604', 'WorkOrderID': '2608'}
,
{'AssigneeID': '376', 'EmployeeID': '105600', 'WorkOrderID': '2609'}
,
{'AssigneeID': '377', 'EmployeeID': '105600', 'WorkOrderID': '2610'}
,
{'AssigneeID': '378', 'EmployeeID': '105602', 'WorkOrderID': '2610'}
,
{'AssigneeID': '379', 'EmployeeID': '105600', 'WorkOrderID': '2611'}
,
{'AssigneeID': '380', 'EmployeeID': '105604', 'WorkOrderID': '2611'}
,
{'AssigneeID': '381', 'EmployeeID': '105600', 'WorkOrderID': '2612'}
,
{'AssigneeID': '382', 'EmployeeID': '105602', 'WorkOrderID': '2612'}
,
{'AssigneeID': '383', 'EmployeeID': '105600', 'WorkOrderID': '2613'}
,
{'AssigneeID': '384', 'EmployeeID': '105602', 'WorkOrderID': '2613'}
,
{'AssigneeID': '385', 'EmployeeID': '105603', 'WorkOrderID': '2613'}
,
{'AssigneeID': '386', 'EmployeeID': '105600', 'WorkOrderID': '2614'}
,
{'AssigneeID': '387', 'EmployeeID': '105602', 'WorkOrderID': '2614'}
,
{'AssigneeID': '388', 'EmployeeID': '105603', 'WorkOrderID': '2614'}
,
{'AssigneeID': '389', 'EmployeeID': '105600', 'WorkOrderID': '2615'}
,
{'AssigneeID': '390', 'EmployeeID': '105600', 'WorkOrderID': '2616'}
,
{'AssigneeID': '391', 'EmployeeID': '105601', 'WorkOrderID': '2616'}
,
{'AssigneeID': '392', 'EmployeeID': '105602', 'WorkOrderID': '2616'}
,
{'AssigneeID': '393', 'EmployeeID': '105604', 'WorkOrderID': '2616'}
,
{'AssigneeID': '394', 'EmployeeID': '105600', 'WorkOrderID': '2617'}
,
{'AssigneeID': '395', 'EmployeeID': '105601', 'WorkOrderID': '2617'}
,
{'AssigneeID': '396', 'EmployeeID': '105600', 'WorkOrderID': '2618'}
,
{'AssigneeID': '397', 'EmployeeID': '105601', 'WorkOrderID': '2618'}
,
{'AssigneeID': '398', 'EmployeeID': '105601', 'WorkOrderID': '2619'}
,
{'AssigneeID': '399', 'EmployeeID': '105600', 'WorkOrderID': '2620'}
,
{'AssigneeID': '400', 'EmployeeID': '105603', 'WorkOrderID': '2620'}
,
{'AssigneeID': '401', 'EmployeeID': '105600', 'WorkOrderID': '2621'}
,
{'AssigneeID': '402', 'EmployeeID': '105602', 'WorkOrderID': '2621'}
,
{'AssigneeID': '403', 'EmployeeID': '105600', 'WorkOrderID': '2622'}
,
{'AssigneeID': '404', 'EmployeeID': '105601', 'WorkOrderID': '2622'}
,
{'AssigneeID': '405', 'EmployeeID': '105602', 'WorkOrderID': '2622'}
,
{'AssigneeID': '406', 'EmployeeID': '105603', 'WorkOrderID': '2622'}
,
{'AssigneeID': '407', 'EmployeeID': '105604', 'WorkOrderID': '2622'}
,
{'AssigneeID': '408', 'EmployeeID': '105600', 'WorkOrderID': '2623'}
,
{'AssigneeID': '409', 'EmployeeID': '105601', 'WorkOrderID': '2623'}
,
{'AssigneeID': '410', 'EmployeeID': '105602', 'WorkOrderID': '2623'}
,
{'AssigneeID': '411', 'EmployeeID': '105603', 'WorkOrderID': '2623'}
,
{'AssigneeID': '412', 'EmployeeID': '105604', 'WorkOrderID': '2623'}
,
{'AssigneeID': '413', 'EmployeeID': '105600', 'WorkOrderID': '2624'}
,
{'AssigneeID': '414', 'EmployeeID': '105603', 'WorkOrderID': '2624'}
,
{'AssigneeID': '415', 'EmployeeID': '105600', 'WorkOrderID': '2625'}
,
{'AssigneeID': '416', 'EmployeeID': '105604', 'WorkOrderID': '2625'}
,
{'AssigneeID': '417', 'EmployeeID': '105604', 'WorkOrderID': '2626'}
,
{'AssigneeID': '418', 'EmployeeID': '105600', 'WorkOrderID': '2627'}
,
{'AssigneeID': '419', 'EmployeeID': '105602', 'WorkOrderID': '2627'}
,
{'AssigneeID': '420', 'EmployeeID': '105602', 'WorkOrderID': '2628'}
,
{'AssigneeID': '421', 'EmployeeID': '105602', 'WorkOrderID': '2629'}
,
{'AssigneeID': '422', 'EmployeeID': '105600', 'WorkOrderID': '2630'}
,
{'AssigneeID': '423', 'EmployeeID': '105601', 'WorkOrderID': '2630'}
,
{'AssigneeID': '424', 'EmployeeID': '105602', 'WorkOrderID': '2630'}
,
{'AssigneeID': '425', 'EmployeeID': '105604', 'WorkOrderID': '2630'}
,
{'AssigneeID': '426', 'EmployeeID': '105600', 'WorkOrderID': '2631'}
,
{'AssigneeID': '427', 'EmployeeID': '105601', 'WorkOrderID': '2631'}
,
{'AssigneeID': '428', 'EmployeeID': '105602', 'WorkOrderID': '2631'}
,
{'AssigneeID': '429', 'EmployeeID': '105604', 'WorkOrderID': '2631'}
,
{'AssigneeID': '430', 'EmployeeID': '105600', 'WorkOrderID': '2632'}
,
{'AssigneeID': '431', 'EmployeeID': '105604', 'WorkOrderID': '2632'}
,
{'AssigneeID': '432', 'EmployeeID': '105600', 'WorkOrderID': '2633'}
,
{'AssigneeID': '433', 'EmployeeID': '105601', 'WorkOrderID': '2633'}
,
{'AssigneeID': '434', 'EmployeeID': '105600', 'WorkOrderID': '2634'}
,
{'AssigneeID': '435', 'EmployeeID': '105603', 'WorkOrderID': '2634'}
,
{'AssigneeID': '436', 'EmployeeID': '105600', 'WorkOrderID': '2635'}
,
{'AssigneeID': '437', 'EmployeeID': '105602', 'WorkOrderID': '2635'}
,
{'AssigneeID': '438', 'EmployeeID': '105603', 'WorkOrderID': '2635'}
,
{'AssigneeID': '439', 'EmployeeID': '105600', 'WorkOrderID': '2636'}
,
{'AssigneeID': '440', 'EmployeeID': '105602', 'WorkOrderID': '2636'}
,
{'AssigneeID': '441', 'EmployeeID': '105603', 'WorkOrderID': '2636'}
,
{'AssigneeID': '442', 'EmployeeID': '105600', 'WorkOrderID': '2637'}
,
{'AssigneeID': '443', 'EmployeeID': '105603', 'WorkOrderID': '2637'}
,
{'AssigneeID': '444', 'EmployeeID': '105600', 'WorkOrderID': '2638'}
,
{'AssigneeID': '445', 'EmployeeID': '105601', 'WorkOrderID': '2638'}
,
{'AssigneeID': '446', 'EmployeeID': '105602', 'WorkOrderID': '2638'}
,
{'AssigneeID': '447', 'EmployeeID': '105603', 'WorkOrderID': '2638'}
,
{'AssigneeID': '448', 'EmployeeID': '105600', 'WorkOrderID': '2639'}
,
{'AssigneeID': '449', 'EmployeeID': '105602', 'WorkOrderID': '2639'}
,
{'AssigneeID': '450', 'EmployeeID': '105603', 'WorkOrderID': '2639'}
,
{'AssigneeID': '451', 'EmployeeID': '105600', 'WorkOrderID': '2641'}
,
{'AssigneeID': '452', 'EmployeeID': '105601', 'WorkOrderID': '2641'}
,
{'AssigneeID': '453', 'EmployeeID': '105602', 'WorkOrderID': '2641'}
,
{'AssigneeID': '454', 'EmployeeID': '105603', 'WorkOrderID': '2641'}
,
{'AssigneeID': '455', 'EmployeeID': '105600', 'WorkOrderID': '2642'}
,
{'AssigneeID': '456', 'EmployeeID': '105601', 'WorkOrderID': '2642'}
,
{'AssigneeID': '457', 'EmployeeID': '105602', 'WorkOrderID': '2642'}
,
{'AssigneeID': '458', 'EmployeeID': '105603', 'WorkOrderID': '2642'}
,
{'AssigneeID': '459', 'EmployeeID': '105600', 'WorkOrderID': '2643'}
,
{'AssigneeID': '460', 'EmployeeID': '105600', 'WorkOrderID': '2644'}
,
{'AssigneeID': '461', 'EmployeeID': '105601', 'WorkOrderID': '2644'}
,
{'AssigneeID': '462', 'EmployeeID': '105602', 'WorkOrderID': '2644'}
,
{'AssigneeID': '463', 'EmployeeID': '105603', 'WorkOrderID': '2644'}
,
{'AssigneeID': '464', 'EmployeeID': '105601', 'WorkOrderID': '2646'}
,
{'AssigneeID': '465', 'EmployeeID': '105603', 'WorkOrderID': '2646'}
,
{'AssigneeID': '466', 'EmployeeID': '105600', 'WorkOrderID': '2647'}
,
{'AssigneeID': '467', 'EmployeeID': '105600', 'WorkOrderID': '2648'}
,
{'AssigneeID': '468', 'EmployeeID': '105603', 'WorkOrderID': '2648'}
,
{'AssigneeID': '469', 'EmployeeID': '105600', 'WorkOrderID': '2649'}
,
{'AssigneeID': '470', 'EmployeeID': '105601', 'WorkOrderID': '2649'}
,
{'AssigneeID': '471', 'EmployeeID': '105601', 'WorkOrderID': '2651'}
,
{'AssigneeID': '472', 'EmployeeID': '105600', 'WorkOrderID': '2652'}
,
{'AssigneeID': '473', 'EmployeeID': '105602', 'WorkOrderID': '2652'}
,
{'AssigneeID': '474', 'EmployeeID': '105600', 'WorkOrderID': '2653'}
,
{'AssigneeID': '475', 'EmployeeID': '105603', 'WorkOrderID': '2653'}
,
{'AssigneeID': '476', 'EmployeeID': '105600', 'WorkOrderID': '2654'}


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
     await queryInterface.bulkDelete('assignees', null, {});
  }
}; 
