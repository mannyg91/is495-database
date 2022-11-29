
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('ipos',[

{'IPOID': '10035', 'IPODate': '2016-06-25', 'CreationDate': '2016-06-13', 'PaymentDate': '2016-07-25', 'IPOStatusID': '200'}
,
{'IPOID': '10124', 'IPODate': '2018-07-21', 'CreationDate': '2018-07-09', 'PaymentDate': '2018-08-20', 'IPOStatusID': '200'}
,
{'IPOID': '10125', 'IPODate': '2018-07-14', 'CreationDate': '2018-07-02', 'PaymentDate': '2018-08-13', 'IPOStatusID': '200'}
,
{'IPOID': '10126', 'IPODate': '2018-07-14', 'CreationDate': '2018-07-02', 'PaymentDate': '2018-08-13', 'IPOStatusID': '200'}
,
{'IPOID': '10127', 'IPODate': '2018-07-21', 'CreationDate': '2018-07-09', 'PaymentDate': '2018-08-20', 'IPOStatusID': '200'}
,
{'IPOID': '10222', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '10310', 'IPODate': '2018-07-22', 'CreationDate': '2018-07-10', 'PaymentDate': '2018-08-21', 'IPOStatusID': '200'}
,
{'IPOID': '10311', 'IPODate': '2018-07-29', 'CreationDate': '2018-07-17', 'PaymentDate': '2018-08-28', 'IPOStatusID': '200'}
,
{'IPOID': '10312', 'IPODate': '2018-07-22', 'CreationDate': '2018-07-10', 'PaymentDate': '2018-08-21', 'IPOStatusID': '200'}
,
{'IPOID': '10382', 'IPODate': '2018-08-04', 'CreationDate': '2018-07-23', 'PaymentDate': '2018-09-03', 'IPOStatusID': '200'}
,
{'IPOID': '10396', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '10401', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '10427', 'IPODate': '2018-07-18', 'CreationDate': '2018-07-06', 'PaymentDate': '2018-08-17', 'IPOStatusID': '200'}
,
{'IPOID': '10428', 'IPODate': '2018-07-22', 'CreationDate': '2018-07-10', 'PaymentDate': '2018-08-21', 'IPOStatusID': '200'}
,
{'IPOID': '10510', 'IPODate': '2018-08-05', 'CreationDate': '2018-07-24', 'PaymentDate': '2018-09-04', 'IPOStatusID': '200'}
,
{'IPOID': '10514', 'IPODate': '2018-08-12', 'CreationDate': '2018-07-31', 'PaymentDate': '2018-09-11', 'IPOStatusID': '200'}
,
{'IPOID': '10525', 'IPODate': '2018-08-04', 'CreationDate': '2018-07-23', 'PaymentDate': '2018-09-03', 'IPOStatusID': '200'}
,
{'IPOID': '10542', 'IPODate': '2018-08-12', 'CreationDate': '2018-07-31', 'PaymentDate': '2018-09-11', 'IPOStatusID': '200'}
,
{'IPOID': '10545', 'IPODate': '2018-08-13', 'CreationDate': '2018-08-01', 'PaymentDate': '2018-09-12', 'IPOStatusID': '200'}
,
{'IPOID': '10572', 'IPODate': '2017-07-24', 'CreationDate': '2017-07-12', 'PaymentDate': '2017-08-23', 'IPOStatusID': '200'}
,
{'IPOID': '10574', 'IPODate': '2019-07-31', 'CreationDate': '2019-07-09', 'PaymentDate': '2019-08-30', 'IPOStatusID': '200'}
,
{'IPOID': '10575', 'IPODate': '2019-07-31', 'CreationDate': '2019-07-01', 'PaymentDate': '2019-08-30', 'IPOStatusID': '200'}
,
{'IPOID': '10581', 'IPODate': '2019-07-31', 'CreationDate': '2019-07-24', 'PaymentDate': '2019-08-30', 'IPOStatusID': '200'}
,
{'IPOID': '10593', 'IPODate': '2019-07-31', 'CreationDate': '2019-07-09', 'PaymentDate': '2019-08-30', 'IPOStatusID': '200'}
,
{'IPOID': '10603', 'IPODate': '2019-08-01', 'CreationDate': '2019-07-24', 'PaymentDate': '2019-08-31', 'IPOStatusID': '200'}
,
{'IPOID': '10606', 'IPODate': '2019-08-01', 'CreationDate': '2019-07-18', 'PaymentDate': '2019-08-31', 'IPOStatusID': '200'}
,
{'IPOID': '10611', 'IPODate': '2019-08-01', 'CreationDate': '2019-07-18', 'PaymentDate': '2019-08-31', 'IPOStatusID': '200'}
,
{'IPOID': '10679', 'IPODate': '2018-08-14', 'CreationDate': '2018-08-02', 'PaymentDate': '2018-09-13', 'IPOStatusID': '200'}
,
{'IPOID': '10680', 'IPODate': '2018-08-18', 'CreationDate': '2018-08-06', 'PaymentDate': '2018-09-17', 'IPOStatusID': '200'}
,
{'IPOID': '10684', 'IPODate': '2018-08-19', 'CreationDate': '2018-08-07', 'PaymentDate': '2018-09-18', 'IPOStatusID': '200'}
,
{'IPOID': '10687', 'IPODate': '2017-07-19', 'CreationDate': '2017-07-07', 'PaymentDate': '2017-08-18', 'IPOStatusID': '200'}
,
{'IPOID': '10695', 'IPODate': '2017-07-23', 'CreationDate': '2017-07-11', 'PaymentDate': '2017-08-22', 'IPOStatusID': '200'}
,
{'IPOID': '10711', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '10755', 'IPODate': '2017-07-18', 'CreationDate': '2017-07-06', 'PaymentDate': '2017-08-17', 'IPOStatusID': '200'}
,
{'IPOID': '10757', 'IPODate': '2017-07-25', 'CreationDate': '2017-07-13', 'PaymentDate': '2017-08-24', 'IPOStatusID': '200'}
,
{'IPOID': '10759', 'IPODate': '2019-08-12', 'CreationDate': '2019-08-07', 'PaymentDate': '2019-09-11', 'IPOStatusID': '200'}
,
{'IPOID': '10760', 'IPODate': '2019-08-12', 'CreationDate': '2019-08-08', 'PaymentDate': '2019-09-11', 'IPOStatusID': '200'}
,
{'IPOID': '10785', 'IPODate': '2017-07-18', 'CreationDate': '2017-07-06', 'PaymentDate': '2017-08-17', 'IPOStatusID': '200'}
,
{'IPOID': '10786', 'IPODate': '2017-07-24', 'CreationDate': '2017-07-12', 'PaymentDate': '2017-08-23', 'IPOStatusID': '200'}
,
{'IPOID': '10859', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '10860', 'IPODate': '2017-07-30', 'CreationDate': '2017-07-18', 'PaymentDate': '2017-08-29', 'IPOStatusID': '200'}
,
{'IPOID': '10952', 'IPODate': '2018-08-25', 'CreationDate': '2018-08-13', 'PaymentDate': '2018-09-24', 'IPOStatusID': '200'}
,
{'IPOID': '10958', 'IPODate': '2018-08-25', 'CreationDate': '2018-08-13', 'PaymentDate': '2018-09-24', 'IPOStatusID': '200'}
,
{'IPOID': '10969', 'IPODate': '2018-07-23', 'CreationDate': '2018-07-11', 'PaymentDate': '2018-08-22', 'IPOStatusID': '200'}
,
{'IPOID': '10974', 'IPODate': '2018-08-28', 'CreationDate': '2018-08-16', 'PaymentDate': '2018-09-27', 'IPOStatusID': '200'}
,
{'IPOID': '10984', 'IPODate': '2018-07-31', 'CreationDate': '2018-07-19', 'PaymentDate': '2018-08-30', 'IPOStatusID': '200'}
,
{'IPOID': '10995', 'IPODate': '2018-08-26', 'CreationDate': '2018-08-14', 'PaymentDate': '2018-09-25', 'IPOStatusID': '200'}
,
{'IPOID': '10998', 'IPODate': '2017-08-01', 'CreationDate': '2017-07-20', 'PaymentDate': '2017-08-31', 'IPOStatusID': '200'}
,
{'IPOID': '11000', 'IPODate': '2017-08-01', 'CreationDate': '2017-07-20', 'PaymentDate': '2017-08-31', 'IPOStatusID': '200'}
,
{'IPOID': '11001', 'IPODate': '2017-07-30', 'CreationDate': '2017-07-18', 'PaymentDate': '2017-08-29', 'IPOStatusID': '200'}
,
{'IPOID': '11061', 'IPODate': '2019-08-26', 'CreationDate': '2019-07-16', 'PaymentDate': '2019-09-25', 'IPOStatusID': '200'}
,
{'IPOID': '11062', 'IPODate': '2019-08-26', 'CreationDate': '2019-08-07', 'PaymentDate': '2019-09-25', 'IPOStatusID': '200'}
,
{'IPOID': '11063', 'IPODate': '2019-08-26', 'CreationDate': '2019-08-05', 'PaymentDate': '2019-09-25', 'IPOStatusID': '200'}
,
{'IPOID': '11066', 'IPODate': '2019-08-26', 'CreationDate': '2019-08-12', 'PaymentDate': '2019-09-25', 'IPOStatusID': '200'}
,
{'IPOID': '11093', 'IPODate': '2019-08-28', 'CreationDate': '2019-08-15', 'PaymentDate': '2019-09-27', 'IPOStatusID': '200'}
,
{'IPOID': '11097', 'IPODate': '2019-08-28', 'CreationDate': '2019-08-07', 'PaymentDate': '2019-09-27', 'IPOStatusID': '200'}
,
{'IPOID': '11115', 'IPODate': '2019-08-28', 'CreationDate': '2019-08-27', 'PaymentDate': '2019-09-27', 'IPOStatusID': '200'}
,
{'IPOID': '11145', 'IPODate': '2017-08-06', 'CreationDate': '2017-07-25', 'PaymentDate': '2017-09-05', 'IPOStatusID': '200'}
,
{'IPOID': '11146', 'IPODate': '2017-07-31', 'CreationDate': '2017-07-19', 'PaymentDate': '2017-08-30', 'IPOStatusID': '200'}
,
{'IPOID': '11168', 'IPODate': '2019-08-30', 'CreationDate': '2019-07-01', 'PaymentDate': '2019-09-29', 'IPOStatusID': '200'}
,
{'IPOID': '11169', 'IPODate': '2019-08-30', 'CreationDate': '2019-08-29', 'PaymentDate': '2019-09-29', 'IPOStatusID': '200'}
,
{'IPOID': '11170', 'IPODate': '2019-08-30', 'CreationDate': '2019-08-26', 'PaymentDate': '2019-09-29', 'IPOStatusID': '200'}
,
{'IPOID': '11171', 'IPODate': '2019-08-30', 'CreationDate': '2019-08-13', 'PaymentDate': '2019-09-29', 'IPOStatusID': '200'}
,
{'IPOID': '11172', 'IPODate': '2019-08-30', 'CreationDate': '2019-07-11', 'PaymentDate': '2019-09-29', 'IPOStatusID': '200'}
,
{'IPOID': '11256', 'IPODate': '2018-09-03', 'CreationDate': '2018-08-22', 'PaymentDate': '2018-10-03', 'IPOStatusID': '200'}
,
{'IPOID': '11262', 'IPODate': '2018-09-02', 'CreationDate': '2018-08-21', 'PaymentDate': '2018-10-02', 'IPOStatusID': '200'}
,
{'IPOID': '11283', 'IPODate': '2018-07-28', 'CreationDate': '2018-07-16', 'PaymentDate': '2018-08-27', 'IPOStatusID': '200'}
,
{'IPOID': '11285', 'IPODate': '2018-09-05', 'CreationDate': '2018-08-24', 'PaymentDate': '2018-10-05', 'IPOStatusID': '200'}
,
{'IPOID': '11323', 'IPODate': '2017-08-12', 'CreationDate': '2017-07-31', 'PaymentDate': '2017-09-11', 'IPOStatusID': '200'}
,
{'IPOID': '11327', 'IPODate': '2017-08-12', 'CreationDate': '2017-07-31', 'PaymentDate': '2017-09-11', 'IPOStatusID': '200'}
,
{'IPOID': '11329', 'IPODate': '2018-08-13', 'CreationDate': '2018-08-01', 'PaymentDate': '2018-09-12', 'IPOStatusID': '200'}
,
{'IPOID': '11341', 'IPODate': '2018-07-30', 'CreationDate': '2018-07-18', 'PaymentDate': '2018-08-29', 'IPOStatusID': '200'}
,
{'IPOID': '11342', 'IPODate': '2018-07-28', 'CreationDate': '2018-07-16', 'PaymentDate': '2018-08-27', 'IPOStatusID': '200'}
,
{'IPOID': '11413', 'IPODate': '2017-07-25', 'CreationDate': '2017-07-13', 'PaymentDate': '2017-08-24', 'IPOStatusID': '200'}
,
{'IPOID': '11458', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '11506', 'IPODate': '2018-09-17', 'CreationDate': '2018-09-05', 'PaymentDate': '2018-10-17', 'IPOStatusID': '200'}
,
{'IPOID': '11510', 'IPODate': '2018-09-18', 'CreationDate': '2018-09-06', 'PaymentDate': '2018-10-18', 'IPOStatusID': '200'}
,
{'IPOID': '11522', 'IPODate': '2017-08-14', 'CreationDate': '2017-08-02', 'PaymentDate': '2017-09-13', 'IPOStatusID': '200'}
,
{'IPOID': '11535', 'IPODate': '2017-08-19', 'CreationDate': '2017-08-07', 'PaymentDate': '2017-09-18', 'IPOStatusID': '200'}
,
{'IPOID': '11545', 'IPODate': '2018-09-24', 'CreationDate': '2018-09-12', 'PaymentDate': '2018-10-24', 'IPOStatusID': '200'}
,
{'IPOID': '11572', 'IPODate': '2017-08-20', 'CreationDate': '2017-08-08', 'PaymentDate': '2017-09-19', 'IPOStatusID': '200'}
,
{'IPOID': '11602', 'IPODate': '2018-09-26', 'CreationDate': '2018-09-14', 'PaymentDate': '2018-10-26', 'IPOStatusID': '200'}
,
{'IPOID': '11650', 'IPODate': '2018-09-30', 'CreationDate': '2018-09-18', 'PaymentDate': '2018-10-30', 'IPOStatusID': '200'}
,
{'IPOID': '11657', 'IPODate': '2018-10-01', 'CreationDate': '2018-09-19', 'PaymentDate': '2018-10-31', 'IPOStatusID': '200'}
,
{'IPOID': '11669', 'IPODate': '2018-10-02', 'CreationDate': '2018-09-20', 'PaymentDate': '2018-11-01', 'IPOStatusID': '200'}
,
{'IPOID': '11681', 'IPODate': '2018-10-03', 'CreationDate': '2018-09-21', 'PaymentDate': '2018-11-02', 'IPOStatusID': '200'}
,
{'IPOID': '11767', 'IPODate': '2017-08-26', 'CreationDate': '2017-08-14', 'PaymentDate': '2017-09-25', 'IPOStatusID': '200'}
,
{'IPOID': '11771', 'IPODate': '2017-08-19', 'CreationDate': '2017-08-07', 'PaymentDate': '2017-09-18', 'IPOStatusID': '200'}
,
{'IPOID': '11880', 'IPODate': '2016-08-15', 'CreationDate': '2016-08-03', 'PaymentDate': '2016-09-14', 'IPOStatusID': '200'}
,
{'IPOID': '11938', 'IPODate': '2018-09-08', 'CreationDate': '2018-08-27', 'PaymentDate': '2018-10-08', 'IPOStatusID': '200'}
,
{'IPOID': '11942', 'IPODate': '2017-08-27', 'CreationDate': '2017-08-15', 'PaymentDate': '2017-09-26', 'IPOStatusID': '200'}
,
{'IPOID': '11944', 'IPODate': '2017-08-29', 'CreationDate': '2017-08-17', 'PaymentDate': '2017-09-28', 'IPOStatusID': '200'}
,
{'IPOID': '11949', 'IPODate': '2017-09-02', 'CreationDate': '2017-08-21', 'PaymentDate': '2017-10-02', 'IPOStatusID': '200'}
,
{'IPOID': '11965', 'IPODate': '2017-08-15', 'CreationDate': '2017-08-03', 'PaymentDate': '2017-09-14', 'IPOStatusID': '200'}
,
{'IPOID': '11967', 'IPODate': '2017-08-19', 'CreationDate': '2017-08-07', 'PaymentDate': '2017-09-18', 'IPOStatusID': '200'}
,
{'IPOID': '11972', 'IPODate': '2017-07-30', 'CreationDate': '2017-07-18', 'PaymentDate': '2017-08-29', 'IPOStatusID': '200'}
,
{'IPOID': '12009', 'IPODate': '2017-09-02', 'CreationDate': '2017-08-21', 'PaymentDate': '2017-10-02', 'IPOStatusID': '200'}
,
{'IPOID': '12029', 'IPODate': '2018-09-16', 'CreationDate': '2018-09-04', 'PaymentDate': '2018-10-16', 'IPOStatusID': '200'}
,
{'IPOID': '12049', 'IPODate': '2018-10-14', 'CreationDate': '2018-10-02', 'PaymentDate': '2018-11-13', 'IPOStatusID': '200'}
,
{'IPOID': '12078', 'IPODate': '2017-09-05', 'CreationDate': '2017-08-24', 'PaymentDate': '2017-10-05', 'IPOStatusID': '200'}
,
{'IPOID': '12079', 'IPODate': '2017-09-05', 'CreationDate': '2017-08-24', 'PaymentDate': '2017-10-05', 'IPOStatusID': '200'}
,
{'IPOID': '12080', 'IPODate': '2017-08-07', 'CreationDate': '2017-07-26', 'PaymentDate': '2017-09-06', 'IPOStatusID': '200'}
,
{'IPOID': '12338', 'IPODate': '2018-10-17', 'CreationDate': '2018-10-05', 'PaymentDate': '2018-11-16', 'IPOStatusID': '200'}
,
{'IPOID': '12371', 'IPODate': '2017-09-06', 'CreationDate': '2017-08-25', 'PaymentDate': '2017-10-06', 'IPOStatusID': '200'}
,
{'IPOID': '12372', 'IPODate': '2016-08-28', 'CreationDate': '2016-08-16', 'PaymentDate': '2016-09-27', 'IPOStatusID': '200'}
,
{'IPOID': '12383', 'IPODate': '2018-11-06', 'CreationDate': '2018-10-25', 'PaymentDate': '2018-12-06', 'IPOStatusID': '200'}
,
{'IPOID': '12389', 'IPODate': '2017-09-10', 'CreationDate': '2017-08-29', 'PaymentDate': '2017-10-10', 'IPOStatusID': '200'}
,
{'IPOID': '12390', 'IPODate': '2017-09-11', 'CreationDate': '2017-08-30', 'PaymentDate': '2017-10-11', 'IPOStatusID': '200'}
,
{'IPOID': '12426', 'IPODate': '2017-08-14', 'CreationDate': '2017-08-02', 'PaymentDate': '2017-09-13', 'IPOStatusID': '200'}
,
{'IPOID': '12428', 'IPODate': '2018-11-12', 'CreationDate': '2018-10-31', 'PaymentDate': '2018-12-12', 'IPOStatusID': '200'}
,
{'IPOID': '12430', 'IPODate': '2018-11-13', 'CreationDate': '2018-11-01', 'PaymentDate': '2018-12-13', 'IPOStatusID': '200'}
,
{'IPOID': '12552', 'IPODate': '2017-09-17', 'CreationDate': '2017-09-05', 'PaymentDate': '2017-10-17', 'IPOStatusID': '200'}
,
{'IPOID': '12554', 'IPODate': '2017-09-13', 'CreationDate': '2017-09-01', 'PaymentDate': '2017-10-13', 'IPOStatusID': '200'}
,
{'IPOID': '12555', 'IPODate': '2017-09-12', 'CreationDate': '2017-08-31', 'PaymentDate': '2017-10-12', 'IPOStatusID': '200'}
,
{'IPOID': '12569', 'IPODate': '2018-10-27', 'CreationDate': '2018-10-15', 'PaymentDate': '2018-11-26', 'IPOStatusID': '200'}
,
{'IPOID': '12605', 'IPODate': '2018-11-13', 'CreationDate': '2018-11-01', 'PaymentDate': '2018-12-13', 'IPOStatusID': '200'}
,
{'IPOID': '12606', 'IPODate': '2018-10-14', 'CreationDate': '2018-10-02', 'PaymentDate': '2018-11-13', 'IPOStatusID': '200'}
,
{'IPOID': '12676', 'IPODate': '2016-09-11', 'CreationDate': '2016-08-30', 'PaymentDate': '2016-10-11', 'IPOStatusID': '200'}
,
{'IPOID': '12716', 'IPODate': '2018-11-26', 'CreationDate': '2018-11-14', 'PaymentDate': '2018-12-26', 'IPOStatusID': '200'}
,
{'IPOID': '12718', 'IPODate': '2018-12-01', 'CreationDate': '2018-11-19', 'PaymentDate': '2018-12-31', 'IPOStatusID': '200'}
,
{'IPOID': '12719', 'IPODate': '2018-11-25', 'CreationDate': '2018-11-13', 'PaymentDate': '2018-12-25', 'IPOStatusID': '200'}
,
{'IPOID': '12728', 'IPODate': '2018-11-19', 'CreationDate': '2018-11-07', 'PaymentDate': '2018-12-19', 'IPOStatusID': '200'}
,
{'IPOID': '12734', 'IPODate': '2018-10-27', 'CreationDate': '2018-10-15', 'PaymentDate': '2018-11-26', 'IPOStatusID': '200'}
,
{'IPOID': '12740', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '12766', 'IPODate': '2018-11-04', 'CreationDate': '2018-10-23', 'PaymentDate': '2018-12-04', 'IPOStatusID': '200'}
,
{'IPOID': '12767', 'IPODate': '2017-09-23', 'CreationDate': '2017-09-11', 'PaymentDate': '2017-10-23', 'IPOStatusID': '200'}
,
{'IPOID': '12826', 'IPODate': '2018-07-15', 'CreationDate': '2018-07-03', 'PaymentDate': '2018-08-14', 'IPOStatusID': '200'}
,
{'IPOID': '12830', 'IPODate': '2018-09-25', 'CreationDate': '2018-09-13', 'PaymentDate': '2018-10-25', 'IPOStatusID': '200'}
,
{'IPOID': '12841', 'IPODate': '2017-09-04', 'CreationDate': '2017-08-23', 'PaymentDate': '2017-10-04', 'IPOStatusID': '200'}
,
{'IPOID': '12843', 'IPODate': '2017-07-29', 'CreationDate': '2017-07-17', 'PaymentDate': '2017-08-28', 'IPOStatusID': '200'}
,
{'IPOID': '12846', 'IPODate': '2017-09-18', 'CreationDate': '2017-09-06', 'PaymentDate': '2017-10-18', 'IPOStatusID': '200'}
,
{'IPOID': '12856', 'IPODate': '2017-09-17', 'CreationDate': '2017-09-05', 'PaymentDate': '2017-10-17', 'IPOStatusID': '200'}
,
{'IPOID': '12880', 'IPODate': '2018-09-26', 'CreationDate': '2018-09-14', 'PaymentDate': '2018-10-26', 'IPOStatusID': '200'}
,
{'IPOID': '12939', 'IPODate': '2018-08-28', 'CreationDate': '2018-08-16', 'PaymentDate': '2018-09-27', 'IPOStatusID': '200'}
,
{'IPOID': '12950', 'IPODate': '2018-12-10', 'CreationDate': '2018-11-28', 'PaymentDate': '2019-01-09', 'IPOStatusID': '200'}
,
{'IPOID': '12955', 'IPODate': '2018-12-15', 'CreationDate': '2018-12-03', 'PaymentDate': '2019-01-14', 'IPOStatusID': '200'}
,
{'IPOID': '12957', 'IPODate': '2018-12-15', 'CreationDate': '2018-12-03', 'PaymentDate': '2019-01-14', 'IPOStatusID': '200'}
,
{'IPOID': '12958', 'IPODate': '2018-12-15', 'CreationDate': '2018-12-03', 'PaymentDate': '2019-01-14', 'IPOStatusID': '200'}
,
{'IPOID': '12960', 'IPODate': '2017-09-27', 'CreationDate': '2017-09-15', 'PaymentDate': '2017-10-27', 'IPOStatusID': '200'}
,
{'IPOID': '13018', 'IPODate': '2018-08-12', 'CreationDate': '2018-07-31', 'PaymentDate': '2018-09-11', 'IPOStatusID': '200'}
,
{'IPOID': '13019', 'IPODate': '2018-12-25', 'CreationDate': '2018-12-13', 'PaymentDate': '2019-01-24', 'IPOStatusID': '200'}
,
{'IPOID': '13021', 'IPODate': '2018-12-25', 'CreationDate': '2018-12-13', 'PaymentDate': '2019-01-24', 'IPOStatusID': '200'}
,
{'IPOID': '13022', 'IPODate': '2018-12-11', 'CreationDate': '2018-11-29', 'PaymentDate': '2019-01-10', 'IPOStatusID': '200'}
,
{'IPOID': '13023', 'IPODate': '2018-12-29', 'CreationDate': '2018-12-17', 'PaymentDate': '2019-01-28', 'IPOStatusID': '200'}
,
{'IPOID': '13041', 'IPODate': '2017-10-01', 'CreationDate': '2017-09-19', 'PaymentDate': '2017-10-31', 'IPOStatusID': '200'}
,
{'IPOID': '13097', 'IPODate': '2017-10-04', 'CreationDate': '2017-09-22', 'PaymentDate': '2017-11-03', 'IPOStatusID': '200'}
,
{'IPOID': '13134', 'IPODate': '2019-01-07', 'CreationDate': '2018-12-26', 'PaymentDate': '2019-02-06', 'IPOStatusID': '200'}
,
{'IPOID': '13164', 'IPODate': '2016-08-29', 'CreationDate': '2016-08-17', 'PaymentDate': '2016-09-28', 'IPOStatusID': '200'}
,
{'IPOID': '13350', 'IPODate': '2017-09-30', 'CreationDate': '2017-09-18', 'PaymentDate': '2017-10-30', 'IPOStatusID': '200'}
,
{'IPOID': '13353', 'IPODate': '2017-10-14', 'CreationDate': '2017-10-02', 'PaymentDate': '2017-11-13', 'IPOStatusID': '200'}
,
{'IPOID': '13354', 'IPODate': '2017-09-20', 'CreationDate': '2017-09-08', 'PaymentDate': '2017-10-20', 'IPOStatusID': '200'}
,
{'IPOID': '13807', 'IPODate': '2018-12-24', 'CreationDate': '2018-12-12', 'PaymentDate': '2019-01-23', 'IPOStatusID': '200'}
,
{'IPOID': '13808', 'IPODate': '2019-01-28', 'CreationDate': '2019-01-16', 'PaymentDate': '2019-02-27', 'IPOStatusID': '200'}
,
{'IPOID': '13811', 'IPODate': '2019-01-15', 'CreationDate': '2019-01-03', 'PaymentDate': '2019-02-14', 'IPOStatusID': '200'}
,
{'IPOID': '13822', 'IPODate': '2017-10-22', 'CreationDate': '2017-10-10', 'PaymentDate': '2017-11-21', 'IPOStatusID': '200'}
,
{'IPOID': '13833', 'IPODate': '2017-09-19', 'CreationDate': '2017-09-07', 'PaymentDate': '2017-10-19', 'IPOStatusID': '200'}
,
{'IPOID': '13834', 'IPODate': '2017-10-01', 'CreationDate': '2017-09-19', 'PaymentDate': '2017-10-31', 'IPOStatusID': '200'}
,
{'IPOID': '13844', 'IPODate': '2017-07-22', 'CreationDate': '2017-07-10', 'PaymentDate': '2017-08-21', 'IPOStatusID': '200'}
,
{'IPOID': '13850', 'IPODate': '2017-10-16', 'CreationDate': '2017-10-04', 'PaymentDate': '2017-11-15', 'IPOStatusID': '200'}
,
{'IPOID': '13998', 'IPODate': '2017-10-08', 'CreationDate': '2017-09-26', 'PaymentDate': '2017-11-07', 'IPOStatusID': '200'}
,
{'IPOID': '14021', 'IPODate': '2017-11-07', 'CreationDate': '2017-10-26', 'PaymentDate': '2017-12-07', 'IPOStatusID': '200'}
,
{'IPOID': '14022', 'IPODate': '2017-11-12', 'CreationDate': '2017-10-31', 'PaymentDate': '2017-12-12', 'IPOStatusID': '200'}
,
{'IPOID': '14118', 'IPODate': '2019-01-27', 'CreationDate': '2019-01-15', 'PaymentDate': '2019-02-26', 'IPOStatusID': '200'}
,
{'IPOID': '14124', 'IPODate': '2018-12-16', 'CreationDate': '2018-12-04', 'PaymentDate': '2019-01-15', 'IPOStatusID': '200'}
,
{'IPOID': '14125', 'IPODate': '2019-01-15', 'CreationDate': '2019-01-03', 'PaymentDate': '2019-02-14', 'IPOStatusID': '200'}
,
{'IPOID': '14131', 'IPODate': '2019-01-02', 'CreationDate': '2018-12-21', 'PaymentDate': '2019-02-01', 'IPOStatusID': '200'}
,
{'IPOID': '14137', 'IPODate': '2017-10-30', 'CreationDate': '2017-10-18', 'PaymentDate': '2017-11-29', 'IPOStatusID': '200'}
,
{'IPOID': '14151', 'IPODate': '2018-09-26', 'CreationDate': '2018-09-14', 'PaymentDate': '2018-10-26', 'IPOStatusID': '200'}
,
{'IPOID': '14152', 'IPODate': '2019-01-02', 'CreationDate': '2018-12-21', 'PaymentDate': '2019-02-01', 'IPOStatusID': '200'}
,
{'IPOID': '14226', 'IPODate': '2018-12-19', 'CreationDate': '2018-12-07', 'PaymentDate': '2019-01-18', 'IPOStatusID': '200'}
,
{'IPOID': '14227', 'IPODate': '2019-03-17', 'CreationDate': '2019-03-05', 'PaymentDate': '2019-04-16', 'IPOStatusID': '200'}
,
{'IPOID': '14228', 'IPODate': '2019-03-17', 'CreationDate': '2019-03-05', 'PaymentDate': '2019-04-16', 'IPOStatusID': '200'}
,
{'IPOID': '14298', 'IPODate': '2017-11-15', 'CreationDate': '2017-11-03', 'PaymentDate': '2017-12-15', 'IPOStatusID': '200'}
,
{'IPOID': '14302', 'IPODate': '2017-08-01', 'CreationDate': '2017-07-20', 'PaymentDate': '2017-08-31', 'IPOStatusID': '200'}
,
{'IPOID': '14303', 'IPODate': '2017-11-20', 'CreationDate': '2017-11-08', 'PaymentDate': '2017-12-20', 'IPOStatusID': '200'}
,
{'IPOID': '14313', 'IPODate': '2017-11-06', 'CreationDate': '2017-10-25', 'PaymentDate': '2017-12-06', 'IPOStatusID': '200'}
,
{'IPOID': '14330', 'IPODate': '2016-07-25', 'CreationDate': '2016-07-13', 'PaymentDate': '2016-08-24', 'IPOStatusID': '200'}
,
{'IPOID': '14434', 'IPODate': '2019-04-02', 'CreationDate': '2019-03-21', 'PaymentDate': '2019-05-02', 'IPOStatusID': '200'}
,
{'IPOID': '14435', 'IPODate': '2019-03-31', 'CreationDate': '2019-03-19', 'PaymentDate': '2019-04-30', 'IPOStatusID': '200'}
,
{'IPOID': '14436', 'IPODate': '2019-03-13', 'CreationDate': '2019-03-01', 'PaymentDate': '2019-04-12', 'IPOStatusID': '200'}
,
{'IPOID': '14484', 'IPODate': '2019-02-20', 'CreationDate': '2019-02-08', 'PaymentDate': '2019-03-22', 'IPOStatusID': '200'}
,
{'IPOID': '14496', 'IPODate': '2019-02-15', 'CreationDate': '2019-02-03', 'PaymentDate': '2019-03-17', 'IPOStatusID': '200'}
,
{'IPOID': '14607', 'IPODate': '2019-04-13', 'CreationDate': '2019-04-01', 'PaymentDate': '2019-05-13', 'IPOStatusID': '200'}
,
{'IPOID': '14613', 'IPODate': '2018-11-26', 'CreationDate': '2018-11-14', 'PaymentDate': '2018-12-26', 'IPOStatusID': '200'}
,
{'IPOID': '14639', 'IPODate': '2017-10-31', 'CreationDate': '2017-10-19', 'PaymentDate': '2017-11-30', 'IPOStatusID': '200'}
,
{'IPOID': '14688', 'IPODate': '2017-11-26', 'CreationDate': '2017-11-14', 'PaymentDate': '2017-12-26', 'IPOStatusID': '200'}
,
{'IPOID': '14689', 'IPODate': '2017-11-27', 'CreationDate': '2017-11-15', 'PaymentDate': '2017-12-27', 'IPOStatusID': '200'}
,
{'IPOID': '14690', 'IPODate': '2017-11-13', 'CreationDate': '2017-11-01', 'PaymentDate': '2017-12-13', 'IPOStatusID': '200'}
,
{'IPOID': '14691', 'IPODate': '2017-11-26', 'CreationDate': '2017-11-14', 'PaymentDate': '2017-12-26', 'IPOStatusID': '200'}
,
{'IPOID': '14692', 'IPODate': '2017-11-19', 'CreationDate': '2017-11-07', 'PaymentDate': '2017-12-19', 'IPOStatusID': '200'}
,
{'IPOID': '14726', 'IPODate': '2019-04-21', 'CreationDate': '2019-04-09', 'PaymentDate': '2019-05-21', 'IPOStatusID': '200'}
,
{'IPOID': '14727', 'IPODate': '2019-04-14', 'CreationDate': '2019-04-02', 'PaymentDate': '2019-05-14', 'IPOStatusID': '200'}
,
{'IPOID': '14729', 'IPODate': '2019-04-27', 'CreationDate': '2019-04-15', 'PaymentDate': '2019-05-27', 'IPOStatusID': '200'}
,
{'IPOID': '14733', 'IPODate': '2019-03-22', 'CreationDate': '2019-03-10', 'PaymentDate': '2019-04-21', 'IPOStatusID': '200'}
,
{'IPOID': '14741', 'IPODate': '2019-02-13', 'CreationDate': '2019-02-01', 'PaymentDate': '2019-03-15', 'IPOStatusID': '200'}
,
{'IPOID': '14742', 'IPODate': '2019-01-25', 'CreationDate': '2019-01-13', 'PaymentDate': '2019-02-24', 'IPOStatusID': '200'}
,
{'IPOID': '14745', 'IPODate': '2019-04-15', 'CreationDate': '2019-04-03', 'PaymentDate': '2019-05-15', 'IPOStatusID': '200'}
,
{'IPOID': '14748', 'IPODate': '2019-03-09', 'CreationDate': '2019-02-25', 'PaymentDate': '2019-04-08', 'IPOStatusID': '200'}
,
{'IPOID': '14757', 'IPODate': '2017-11-20', 'CreationDate': '2017-11-08', 'PaymentDate': '2017-12-20', 'IPOStatusID': '200'}
,
{'IPOID': '14779', 'IPODate': '2017-10-23', 'CreationDate': '2017-10-11', 'PaymentDate': '2017-11-22', 'IPOStatusID': '200'}
,
{'IPOID': '14780', 'IPODate': '2019-01-14', 'CreationDate': '2019-01-02', 'PaymentDate': '2019-02-13', 'IPOStatusID': '200'}
,
{'IPOID': '14786', 'IPODate': '2018-12-31', 'CreationDate': '2018-12-19', 'PaymentDate': '2019-01-30', 'IPOStatusID': '200'}
,
{'IPOID': '14816', 'IPODate': '2019-05-05', 'CreationDate': '2019-04-23', 'PaymentDate': '2019-06-04', 'IPOStatusID': '200'}
,
{'IPOID': '14840', 'IPODate': '2019-05-05', 'CreationDate': '2019-04-23', 'PaymentDate': '2019-06-04', 'IPOStatusID': '200'}
,
{'IPOID': '14842', 'IPODate': '2019-05-05', 'CreationDate': '2019-04-23', 'PaymentDate': '2019-06-04', 'IPOStatusID': '200'}
,
{'IPOID': '14845', 'IPODate': '2017-11-25', 'CreationDate': '2017-11-13', 'PaymentDate': '2017-12-25', 'IPOStatusID': '200'}
,
{'IPOID': '14846', 'IPODate': '2017-12-16', 'CreationDate': '2017-12-04', 'PaymentDate': '2018-01-15', 'IPOStatusID': '200'}
,
{'IPOID': '14847', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '14848', 'IPODate': '2017-12-16', 'CreationDate': '2017-12-04', 'PaymentDate': '2018-01-15', 'IPOStatusID': '200'}
,
{'IPOID': '14850', 'IPODate': '2018-10-13', 'CreationDate': '2018-10-01', 'PaymentDate': '2018-11-12', 'IPOStatusID': '200'}
,
{'IPOID': '14852', 'IPODate': '2019-03-27', 'CreationDate': '2019-03-15', 'PaymentDate': '2019-04-26', 'IPOStatusID': '200'}
,
{'IPOID': '14857', 'IPODate': '2017-12-17', 'CreationDate': '2017-12-05', 'PaymentDate': '2018-01-16', 'IPOStatusID': '200'}
,
{'IPOID': '14928', 'IPODate': '2017-12-11', 'CreationDate': '2017-11-29', 'PaymentDate': '2018-01-10', 'IPOStatusID': '200'}
,
{'IPOID': '14929', 'IPODate': '2017-09-10', 'CreationDate': '2017-08-29', 'PaymentDate': '2017-10-10', 'IPOStatusID': '200'}
,
{'IPOID': '14941', 'IPODate': '2017-12-23', 'CreationDate': '2017-12-11', 'PaymentDate': '2018-01-22', 'IPOStatusID': '200'}
,
{'IPOID': '14987', 'IPODate': '2019-05-12', 'CreationDate': '2019-04-30', 'PaymentDate': '2019-06-11', 'IPOStatusID': '200'}
,
{'IPOID': '14989', 'IPODate': '2019-05-11', 'CreationDate': '2019-04-29', 'PaymentDate': '2019-06-10', 'IPOStatusID': '200'}
,
{'IPOID': '15024', 'IPODate': '2018-10-06', 'CreationDate': '2018-09-24', 'PaymentDate': '2018-11-05', 'IPOStatusID': '200'}
,
{'IPOID': '15025', 'IPODate': '2019-05-20', 'CreationDate': '2019-05-08', 'PaymentDate': '2019-06-19', 'IPOStatusID': '200'}
,
{'IPOID': '15034', 'IPODate': '2017-12-23', 'CreationDate': '2017-12-11', 'PaymentDate': '2018-01-22', 'IPOStatusID': '200'}
,
{'IPOID': '15041', 'IPODate': '2017-12-17', 'CreationDate': '2017-12-05', 'PaymentDate': '2018-01-16', 'IPOStatusID': '200'}
,
{'IPOID': '15045', 'IPODate': '2017-12-23', 'CreationDate': '2017-12-11', 'PaymentDate': '2018-01-22', 'IPOStatusID': '200'}
,
{'IPOID': '15116', 'IPODate': '2018-12-22', 'CreationDate': '2018-12-10', 'PaymentDate': '2019-01-21', 'IPOStatusID': '200'}
,
{'IPOID': '15119', 'IPODate': '2019-05-20', 'CreationDate': '2019-05-08', 'PaymentDate': '2019-06-19', 'IPOStatusID': '200'}
,
{'IPOID': '15120', 'IPODate': '2019-05-20', 'CreationDate': '2019-05-08', 'PaymentDate': '2019-06-19', 'IPOStatusID': '200'}
,
{'IPOID': '15125', 'IPODate': '2018-12-08', 'CreationDate': '2018-11-26', 'PaymentDate': '2019-01-07', 'IPOStatusID': '200'}
,
{'IPOID': '15127', 'IPODate': '2017-12-31', 'CreationDate': '2017-12-19', 'PaymentDate': '2018-01-30', 'IPOStatusID': '200'}
,
{'IPOID': '15130', 'IPODate': '2017-12-30', 'CreationDate': '2017-12-18', 'PaymentDate': '2018-01-29', 'IPOStatusID': '200'}
,
{'IPOID': '15136', 'IPODate': '2017-11-19', 'CreationDate': '2017-11-07', 'PaymentDate': '2017-12-19', 'IPOStatusID': '200'}
,
{'IPOID': '15137', 'IPODate': '2017-09-17', 'CreationDate': '2017-09-05', 'PaymentDate': '2017-10-17', 'IPOStatusID': '200'}
,
{'IPOID': '15138', 'IPODate': '2017-12-31', 'CreationDate': '2017-12-19', 'PaymentDate': '2018-01-30', 'IPOStatusID': '200'}
,
{'IPOID': '15169', 'IPODate': '2016-11-13', 'CreationDate': '2016-11-01', 'PaymentDate': '2016-12-13', 'IPOStatusID': '200'}
,
{'IPOID': '15185', 'IPODate': '2019-05-21', 'CreationDate': '2019-05-09', 'PaymentDate': '2019-06-20', 'IPOStatusID': '200'}
,
{'IPOID': '15231', 'IPODate': '2019-05-28', 'CreationDate': '2019-05-16', 'PaymentDate': '2019-06-27', 'IPOStatusID': '200'}
,
{'IPOID': '15232', 'IPODate': '2019-06-03', 'CreationDate': '2019-05-22', 'PaymentDate': '2019-07-03', 'IPOStatusID': '200'}
,
{'IPOID': '15233', 'IPODate': '2019-06-01', 'CreationDate': '2019-05-20', 'PaymentDate': '2019-07-01', 'IPOStatusID': '200'}
,
{'IPOID': '15380', 'IPODate': '2018-01-14', 'CreationDate': '2018-01-02', 'PaymentDate': '2018-02-13', 'IPOStatusID': '200'}
,
{'IPOID': '15381', 'IPODate': '2018-01-15', 'CreationDate': '2018-01-03', 'PaymentDate': '2018-02-14', 'IPOStatusID': '200'}
,
{'IPOID': '15416', 'IPODate': '2019-06-10', 'CreationDate': '2019-05-29', 'PaymentDate': '2019-07-10', 'IPOStatusID': '200'}
,
{'IPOID': '15418', 'IPODate': '2019-06-10', 'CreationDate': '2019-05-29', 'PaymentDate': '2019-07-10', 'IPOStatusID': '200'}
,
{'IPOID': '15419', 'IPODate': '2019-06-09', 'CreationDate': '2019-05-28', 'PaymentDate': '2019-07-09', 'IPOStatusID': '200'}
,
{'IPOID': '15420', 'IPODate': '2019-06-09', 'CreationDate': '2019-05-28', 'PaymentDate': '2019-07-09', 'IPOStatusID': '200'}
,
{'IPOID': '15456', 'IPODate': '2018-01-15', 'CreationDate': '2018-01-03', 'PaymentDate': '2018-02-14', 'IPOStatusID': '200'}
,
{'IPOID': '15466', 'IPODate': '2017-12-30', 'CreationDate': '2017-12-18', 'PaymentDate': '2018-01-29', 'IPOStatusID': '200'}
,
{'IPOID': '15536', 'IPODate': '2017-12-26', 'CreationDate': '2017-12-14', 'PaymentDate': '2018-01-25', 'IPOStatusID': '200'}
,
{'IPOID': '15537', 'IPODate': '2018-01-20', 'CreationDate': '2018-01-08', 'PaymentDate': '2018-02-19', 'IPOStatusID': '200'}
,
{'IPOID': '15538', 'IPODate': '2017-12-25', 'CreationDate': '2017-12-13', 'PaymentDate': '2018-01-24', 'IPOStatusID': '200'}
,
{'IPOID': '15548', 'IPODate': '2019-06-18', 'CreationDate': '2019-06-06', 'PaymentDate': '2019-07-18', 'IPOStatusID': '200'}
,
{'IPOID': '15550', 'IPODate': '2019-06-16', 'CreationDate': '2019-06-04', 'PaymentDate': '2019-07-16', 'IPOStatusID': '200'}
,
{'IPOID': '15551', 'IPODate': '2019-06-02', 'CreationDate': '2019-05-21', 'PaymentDate': '2019-07-02', 'IPOStatusID': '200'}
,
{'IPOID': '15552', 'IPODate': '2019-06-17', 'CreationDate': '2019-06-05', 'PaymentDate': '2019-07-17', 'IPOStatusID': '200'}
,
{'IPOID': '15554', 'IPODate': '2019-06-17', 'CreationDate': '2019-06-05', 'PaymentDate': '2019-07-17', 'IPOStatusID': '200'}
,
{'IPOID': '15652', 'IPODate': '2018-01-08', 'CreationDate': '2017-12-27', 'PaymentDate': '2018-02-07', 'IPOStatusID': '200'}
,
{'IPOID': '15711', 'IPODate': '2018-01-28', 'CreationDate': '2018-01-16', 'PaymentDate': '2018-02-27', 'IPOStatusID': '200'}
,
{'IPOID': '15727', 'IPODate': '2019-05-14', 'CreationDate': '2019-05-02', 'PaymentDate': '2019-06-13', 'IPOStatusID': '200'}
,
{'IPOID': '15728', 'IPODate': '2019-06-22', 'CreationDate': '2019-06-10', 'PaymentDate': '2019-07-22', 'IPOStatusID': '200'}
,
{'IPOID': '15729', 'IPODate': '2019-06-18', 'CreationDate': '2019-06-06', 'PaymentDate': '2019-07-18', 'IPOStatusID': '200'}
,
{'IPOID': '15730', 'IPODate': '2019-06-22', 'CreationDate': '2019-06-10', 'PaymentDate': '2019-07-22', 'IPOStatusID': '200'}
,
{'IPOID': '15731', 'IPODate': '2019-06-23', 'CreationDate': '2019-06-11', 'PaymentDate': '2019-07-23', 'IPOStatusID': '200'}
,
{'IPOID': '15732', 'IPODate': '2019-06-18', 'CreationDate': '2019-06-06', 'PaymentDate': '2019-07-18', 'IPOStatusID': '200'}
,
{'IPOID': '15733', 'IPODate': '2019-06-22', 'CreationDate': '2019-06-10', 'PaymentDate': '2019-07-22', 'IPOStatusID': '200'}
,
{'IPOID': '15779', 'IPODate': '2019-06-26', 'CreationDate': '2019-06-14', 'PaymentDate': '2019-07-26', 'IPOStatusID': '200'}
,
{'IPOID': '15807', 'IPODate': '2018-01-20', 'CreationDate': '2018-01-08', 'PaymentDate': '2018-02-19', 'IPOStatusID': '200'}
,
{'IPOID': '15808', 'IPODate': '2018-01-28', 'CreationDate': '2018-01-16', 'PaymentDate': '2018-02-27', 'IPOStatusID': '200'}
,
{'IPOID': '15814', 'IPODate': '2017-12-17', 'CreationDate': '2017-12-05', 'PaymentDate': '2018-01-16', 'IPOStatusID': '200'}
,
{'IPOID': '15823', 'IPODate': '2018-01-31', 'CreationDate': '2018-01-19', 'PaymentDate': '2018-03-02', 'IPOStatusID': '200'}
,
{'IPOID': '15824', 'IPODate': '2018-01-08', 'CreationDate': '2017-12-27', 'PaymentDate': '2018-02-07', 'IPOStatusID': '200'}
,
{'IPOID': '15829', 'IPODate': '2019-06-29', 'CreationDate': '2019-06-17', 'PaymentDate': '2019-07-29', 'IPOStatusID': '200'}
,
{'IPOID': '15830', 'IPODate': '2019-06-29', 'CreationDate': '2019-06-17', 'PaymentDate': '2019-07-29', 'IPOStatusID': '200'}
,
{'IPOID': '15831', 'IPODate': '2019-06-29', 'CreationDate': '2019-06-17', 'PaymentDate': '2019-07-29', 'IPOStatusID': '200'}
,
{'IPOID': '15832', 'IPODate': '2019-06-30', 'CreationDate': '2019-06-18', 'PaymentDate': '2019-07-30', 'IPOStatusID': '200'}
,
{'IPOID': '15833', 'IPODate': '2019-06-29', 'CreationDate': '2019-06-17', 'PaymentDate': '2019-07-29', 'IPOStatusID': '200'}
,
{'IPOID': '15870', 'IPODate': '2019-07-02', 'CreationDate': '2019-06-20', 'PaymentDate': '2019-08-01', 'IPOStatusID': '200'}
,
{'IPOID': '15871', 'IPODate': '2019-07-03', 'CreationDate': '2019-06-21', 'PaymentDate': '2019-08-02', 'IPOStatusID': '200'}
,
{'IPOID': '15872', 'IPODate': '2019-07-06', 'CreationDate': '2019-06-24', 'PaymentDate': '2019-08-05', 'IPOStatusID': '200'}
,
{'IPOID': '15873', 'IPODate': '2019-07-03', 'CreationDate': '2019-06-21', 'PaymentDate': '2019-08-02', 'IPOStatusID': '200'}
,
{'IPOID': '15887', 'IPODate': '2018-07-21', 'CreationDate': '2018-07-09', 'PaymentDate': '2018-08-20', 'IPOStatusID': '200'}
,
{'IPOID': '15934', 'IPODate': '2019-07-08', 'CreationDate': '2019-06-26', 'PaymentDate': '2019-08-07', 'IPOStatusID': '200'}
,
{'IPOID': '15936', 'IPODate': '2019-07-07', 'CreationDate': '2019-06-25', 'PaymentDate': '2019-08-06', 'IPOStatusID': '200'}
,
{'IPOID': '15937', 'IPODate': '2018-07-21', 'CreationDate': '2018-07-09', 'PaymentDate': '2018-08-20', 'IPOStatusID': '200'}
,
{'IPOID': '16010', 'IPODate': '2016-10-02', 'CreationDate': '2016-09-20', 'PaymentDate': '2016-11-01', 'IPOStatusID': '200'}
,
{'IPOID': '16033', 'IPODate': '2016-11-28', 'CreationDate': '2016-11-16', 'PaymentDate': '2016-12-28', 'IPOStatusID': '200'}
,
{'IPOID': '16044', 'IPODate': '2017-09-10', 'CreationDate': '2017-08-29', 'PaymentDate': '2017-10-10', 'IPOStatusID': '200'}
,
{'IPOID': '16045', 'IPODate': '2018-02-07', 'CreationDate': '2018-01-26', 'PaymentDate': '2018-03-09', 'IPOStatusID': '200'}
,
{'IPOID': '16046', 'IPODate': '2018-02-10', 'CreationDate': '2018-01-29', 'PaymentDate': '2018-03-12', 'IPOStatusID': '200'}
,
{'IPOID': '16047', 'IPODate': '2018-01-30', 'CreationDate': '2018-01-18', 'PaymentDate': '2018-03-01', 'IPOStatusID': '200'}
,
{'IPOID': '16099', 'IPODate': '2018-01-29', 'CreationDate': '2018-01-17', 'PaymentDate': '2018-02-28', 'IPOStatusID': '200'}
,
{'IPOID': '16225', 'IPODate': '2016-12-27', 'CreationDate': '2016-12-15', 'PaymentDate': '2017-01-26', 'IPOStatusID': '200'}
,
{'IPOID': '16252', 'IPODate': '2018-02-07', 'CreationDate': '2018-01-26', 'PaymentDate': '2018-03-09', 'IPOStatusID': '200'}
,
{'IPOID': '16386', 'IPODate': '2018-02-24', 'CreationDate': '2018-02-12', 'PaymentDate': '2018-03-26', 'IPOStatusID': '200'}
,
{'IPOID': '16426', 'IPODate': '2018-02-10', 'CreationDate': '2018-01-29', 'PaymentDate': '2018-03-12', 'IPOStatusID': '200'}
,
{'IPOID': '16610', 'IPODate': '2018-02-17', 'CreationDate': '2018-02-05', 'PaymentDate': '2018-03-19', 'IPOStatusID': '200'}
,
{'IPOID': '16624', 'IPODate': '2018-02-14', 'CreationDate': '2018-02-02', 'PaymentDate': '2018-03-16', 'IPOStatusID': '200'}
,
{'IPOID': '16626', 'IPODate': '2018-03-04', 'CreationDate': '2018-02-20', 'PaymentDate': '2018-04-03', 'IPOStatusID': '200'}
,
{'IPOID': '16628', 'IPODate': '2018-03-04', 'CreationDate': '2018-02-20', 'PaymentDate': '2018-04-03', 'IPOStatusID': '200'}
,
{'IPOID': '16774', 'IPODate': '2018-03-13', 'CreationDate': '2018-03-01', 'PaymentDate': '2018-04-12', 'IPOStatusID': '200'}
,
{'IPOID': '16820', 'IPODate': '2018-03-05', 'CreationDate': '2018-02-21', 'PaymentDate': '2018-04-04', 'IPOStatusID': '200'}
,
{'IPOID': '16825', 'IPODate': '2018-03-13', 'CreationDate': '2018-03-01', 'PaymentDate': '2018-04-12', 'IPOStatusID': '200'}
,
{'IPOID': '17012', 'IPODate': '2018-03-21', 'CreationDate': '2018-03-09', 'PaymentDate': '2018-04-20', 'IPOStatusID': '200'}
,
{'IPOID': '17026', 'IPODate': '2018-01-20', 'CreationDate': '2018-01-08', 'PaymentDate': '2018-02-19', 'IPOStatusID': '200'}
,
{'IPOID': '17027', 'IPODate': '2018-03-26', 'CreationDate': '2018-03-14', 'PaymentDate': '2018-04-25', 'IPOStatusID': '200'}
,
{'IPOID': '17028', 'IPODate': '2018-03-24', 'CreationDate': '2018-03-12', 'PaymentDate': '2018-04-23', 'IPOStatusID': '200'}
,
{'IPOID': '17216', 'IPODate': '2018-02-04', 'CreationDate': '2018-01-23', 'PaymentDate': '2018-03-06', 'IPOStatusID': '200'}
,
{'IPOID': '17220', 'IPODate': '2018-04-02', 'CreationDate': '2018-03-21', 'PaymentDate': '2018-05-02', 'IPOStatusID': '200'}
,
{'IPOID': '17263', 'IPODate': '2018-04-02', 'CreationDate': '2018-03-21', 'PaymentDate': '2018-05-02', 'IPOStatusID': '200'}
,
{'IPOID': '17267', 'IPODate': '2018-04-04', 'CreationDate': '2018-03-23', 'PaymentDate': '2018-05-04', 'IPOStatusID': '200'}
,
{'IPOID': '17450', 'IPODate': '2018-04-04', 'CreationDate': '2018-03-23', 'PaymentDate': '2018-05-04', 'IPOStatusID': '200'}
,
{'IPOID': '17480', 'IPODate': '2018-02-10', 'CreationDate': '2018-01-29', 'PaymentDate': '2018-03-12', 'IPOStatusID': '200'}
,
{'IPOID': '17535', 'IPODate': '2018-04-07', 'CreationDate': '2018-03-26', 'PaymentDate': '2018-05-07', 'IPOStatusID': '200'}
,
{'IPOID': '17536', 'IPODate': '2018-04-28', 'CreationDate': '2018-04-16', 'PaymentDate': '2018-05-28', 'IPOStatusID': '200'}
,
{'IPOID': '17538', 'IPODate': '2018-04-21', 'CreationDate': '2018-04-09', 'PaymentDate': '2018-05-21', 'IPOStatusID': '200'}
,
{'IPOID': '17587', 'IPODate': '2018-03-04', 'CreationDate': '2018-02-20', 'PaymentDate': '2018-04-03', 'IPOStatusID': '200'}
,
{'IPOID': '17595', 'IPODate': '2017-12-31', 'CreationDate': '2017-12-19', 'PaymentDate': '2018-01-30', 'IPOStatusID': '200'}
,
{'IPOID': '17596', 'IPODate': '2018-04-07', 'CreationDate': '2018-03-26', 'PaymentDate': '2018-05-07', 'IPOStatusID': '200'}
,
{'IPOID': '17608', 'IPODate': '2018-04-14', 'CreationDate': '2018-04-02', 'PaymentDate': '2018-05-14', 'IPOStatusID': '200'}
,
{'IPOID': '17642', 'IPODate': '2018-05-05', 'CreationDate': '2018-04-23', 'PaymentDate': '2018-06-04', 'IPOStatusID': '200'}
,
{'IPOID': '17643', 'IPODate': '2018-05-09', 'CreationDate': '2018-04-27', 'PaymentDate': '2018-06-08', 'IPOStatusID': '200'}
,
{'IPOID': '17644', 'IPODate': '2018-04-22', 'CreationDate': '2018-04-10', 'PaymentDate': '2018-05-22', 'IPOStatusID': '200'}
,
{'IPOID': '17750', 'IPODate': '2018-05-06', 'CreationDate': '2018-04-24', 'PaymentDate': '2018-06-05', 'IPOStatusID': '200'}
,
{'IPOID': '17751', 'IPODate': '2018-05-12', 'CreationDate': '2018-04-30', 'PaymentDate': '2018-06-11', 'IPOStatusID': '200'}
,
{'IPOID': '17823', 'IPODate': '2018-05-14', 'CreationDate': '2018-05-02', 'PaymentDate': '2018-06-13', 'IPOStatusID': '200'}
,
{'IPOID': '17824', 'IPODate': '2018-05-19', 'CreationDate': '2018-05-07', 'PaymentDate': '2018-06-18', 'IPOStatusID': '200'}
,
{'IPOID': '17834', 'IPODate': '2017-02-05', 'CreationDate': '2017-01-24', 'PaymentDate': '2017-03-07', 'IPOStatusID': '200'}
,
{'IPOID': '18007', 'IPODate': '2018-05-19', 'CreationDate': '2018-05-07', 'PaymentDate': '2018-06-18', 'IPOStatusID': '200'}
,
{'IPOID': '18011', 'IPODate': '2018-05-22', 'CreationDate': '2018-05-10', 'PaymentDate': '2018-06-21', 'IPOStatusID': '200'}
,
{'IPOID': '18012', 'IPODate': '2018-01-30', 'CreationDate': '2018-01-18', 'PaymentDate': '2018-03-01', 'IPOStatusID': '200'}
,
{'IPOID': '18053', 'IPODate': '2018-05-14', 'CreationDate': '2018-05-02', 'PaymentDate': '2018-06-13', 'IPOStatusID': '200'}
,
{'IPOID': '18090', 'IPODate': '2018-05-27', 'CreationDate': '2018-05-15', 'PaymentDate': '2018-06-26', 'IPOStatusID': '200'}
,
{'IPOID': '18094', 'IPODate': '2018-06-10', 'CreationDate': '2018-05-29', 'PaymentDate': '2018-07-10', 'IPOStatusID': '200'}
,
{'IPOID': '18099', 'IPODate': '2018-05-13', 'CreationDate': '2018-05-01', 'PaymentDate': '2018-06-12', 'IPOStatusID': '200'}
,
{'IPOID': '18100', 'IPODate': '2018-05-27', 'CreationDate': '2018-05-15', 'PaymentDate': '2018-06-26', 'IPOStatusID': '200'}
,
{'IPOID': '18102', 'IPODate': '2018-05-16', 'CreationDate': '2018-05-04', 'PaymentDate': '2018-06-15', 'IPOStatusID': '200'}
,
{'IPOID': '18103', 'IPODate': '2018-06-10', 'CreationDate': '2018-05-29', 'PaymentDate': '2018-07-10', 'IPOStatusID': '200'}
,
{'IPOID': '18111', 'IPODate': '2017-02-26', 'CreationDate': '2017-02-14', 'PaymentDate': '2017-03-28', 'IPOStatusID': '200'}
,
{'IPOID': '18191', 'IPODate': '2018-06-18', 'CreationDate': '2018-06-06', 'PaymentDate': '2018-07-18', 'IPOStatusID': '200'}
,
{'IPOID': '18197', 'IPODate': '2018-06-16', 'CreationDate': '2018-06-04', 'PaymentDate': '2018-07-16', 'IPOStatusID': '200'}
,
{'IPOID': '18198', 'IPODate': '2018-06-16', 'CreationDate': '2018-06-04', 'PaymentDate': '2018-07-16', 'IPOStatusID': '200'}
,
{'IPOID': '18215', 'IPODate': '2018-06-16', 'CreationDate': '2018-06-04', 'PaymentDate': '2018-07-16', 'IPOStatusID': '200'}
,
{'IPOID': '18265', 'IPODate': '2018-04-21', 'CreationDate': '2018-04-09', 'PaymentDate': '2018-05-21', 'IPOStatusID': '200'}
,
{'IPOID': '18281', 'IPODate': '2018-06-19', 'CreationDate': '2018-06-07', 'PaymentDate': '2018-07-19', 'IPOStatusID': '200'}
,
{'IPOID': '18282', 'IPODate': '2018-06-12', 'CreationDate': '2018-05-31', 'PaymentDate': '2018-07-12', 'IPOStatusID': '200'}
,
{'IPOID': '18313', 'IPODate': '2018-05-31', 'CreationDate': '2018-05-19', 'PaymentDate': '2018-06-30', 'IPOStatusID': '200'}
,
{'IPOID': '18331', 'IPODate': '2018-06-25', 'CreationDate': '2018-06-13', 'PaymentDate': '2018-07-25', 'IPOStatusID': '200'}
,
{'IPOID': '18332', 'IPODate': '2018-06-26', 'CreationDate': '2018-06-14', 'PaymentDate': '2018-07-26', 'IPOStatusID': '200'}
,
{'IPOID': '18333', 'IPODate': '2018-06-25', 'CreationDate': '2018-06-13', 'PaymentDate': '2018-07-25', 'IPOStatusID': '200'}
,
{'IPOID': '18334', 'IPODate': '2018-06-23', 'CreationDate': '2018-06-11', 'PaymentDate': '2018-07-23', 'IPOStatusID': '200'}
,
{'IPOID': '18335', 'IPODate': '2018-06-20', 'CreationDate': '2018-06-08', 'PaymentDate': '2018-07-20', 'IPOStatusID': '200'}
,
{'IPOID': '18336', 'IPODate': '2018-05-13', 'CreationDate': '2018-05-01', 'PaymentDate': '2018-06-12', 'IPOStatusID': '200'}
,
{'IPOID': '18360', 'IPODate': '2018-06-24', 'CreationDate': '2018-06-12', 'PaymentDate': '2018-07-24', 'IPOStatusID': '200'}
,
{'IPOID': '18362', 'IPODate': '2018-06-25', 'CreationDate': '2018-06-13', 'PaymentDate': '2018-07-25', 'IPOStatusID': '200'}
,
{'IPOID': '18382', 'IPODate': '2018-06-30', 'CreationDate': '2018-06-18', 'PaymentDate': '2018-07-30', 'IPOStatusID': '200'}
,
{'IPOID': '18397', 'IPODate': '2018-05-20', 'CreationDate': '2018-05-08', 'PaymentDate': '2018-06-19', 'IPOStatusID': '200'}
,
{'IPOID': '18401', 'IPODate': '2018-06-27', 'CreationDate': '2018-06-15', 'PaymentDate': '2018-07-27', 'IPOStatusID': '200'}
,
{'IPOID': '18402', 'IPODate': '2018-07-02', 'CreationDate': '2018-06-20', 'PaymentDate': '2018-08-01', 'IPOStatusID': '200'}
,
{'IPOID': '18403', 'IPODate': '2018-06-30', 'CreationDate': '2018-06-18', 'PaymentDate': '2018-07-30', 'IPOStatusID': '200'}
,
{'IPOID': '18426', 'IPODate': '2018-07-03', 'CreationDate': '2018-06-21', 'PaymentDate': '2018-08-02', 'IPOStatusID': '200'}
,
{'IPOID': '18435', 'IPODate': '2018-07-03', 'CreationDate': '2018-06-21', 'PaymentDate': '2018-08-02', 'IPOStatusID': '200'}
,
{'IPOID': '18448', 'IPODate': '2018-07-03', 'CreationDate': '2018-06-21', 'PaymentDate': '2018-08-02', 'IPOStatusID': '200'}
,
{'IPOID': '18449', 'IPODate': '2018-06-30', 'CreationDate': '2018-06-18', 'PaymentDate': '2018-07-30', 'IPOStatusID': '200'}
,
{'IPOID': '18454', 'IPODate': '2017-03-12', 'CreationDate': '2017-02-28', 'PaymentDate': '2017-04-11', 'IPOStatusID': '200'}
,
{'IPOID': '18488', 'IPODate': '2018-06-17', 'CreationDate': '2018-06-05', 'PaymentDate': '2018-07-17', 'IPOStatusID': '200'}
,
{'IPOID': '18489', 'IPODate': '2018-06-30', 'CreationDate': '2018-06-18', 'PaymentDate': '2018-07-30', 'IPOStatusID': '200'}
,
{'IPOID': '18515', 'IPODate': '2018-07-07', 'CreationDate': '2018-06-25', 'PaymentDate': '2018-08-06', 'IPOStatusID': '200'}
,
{'IPOID': '18516', 'IPODate': '2018-07-07', 'CreationDate': '2018-06-25', 'PaymentDate': '2018-08-06', 'IPOStatusID': '200'}
,
{'IPOID': '18517', 'IPODate': '2018-07-07', 'CreationDate': '2018-06-25', 'PaymentDate': '2018-08-06', 'IPOStatusID': '200'}
,
{'IPOID': '18531', 'IPODate': '2018-05-08', 'CreationDate': '2018-04-26', 'PaymentDate': '2018-06-07', 'IPOStatusID': '200'}
,
{'IPOID': '18585', 'IPODate': '2018-05-01', 'CreationDate': '2018-04-19', 'PaymentDate': '2018-05-31', 'IPOStatusID': '200'}
,
{'IPOID': '18596', 'IPODate': '2018-07-09', 'CreationDate': '2018-06-27', 'PaymentDate': '2018-08-08', 'IPOStatusID': '200'}
,
{'IPOID': '18600', 'IPODate': '2018-07-09', 'CreationDate': '2018-06-27', 'PaymentDate': '2018-08-08', 'IPOStatusID': '200'}
,
{'IPOID': '18609', 'IPODate': '2018-07-09', 'CreationDate': '2018-06-27', 'PaymentDate': '2018-08-08', 'IPOStatusID': '200'}
,
{'IPOID': '18610', 'IPODate': '2018-07-10', 'CreationDate': '2018-06-28', 'PaymentDate': '2018-08-09', 'IPOStatusID': '200'}
,
{'IPOID': '18611', 'IPODate': '2018-06-18', 'CreationDate': '2018-06-06', 'PaymentDate': '2018-07-18', 'IPOStatusID': '200'}
,
{'IPOID': '18613', 'IPODate': '2018-07-08', 'CreationDate': '2018-06-26', 'PaymentDate': '2018-08-07', 'IPOStatusID': '200'}
,
{'IPOID': '18813', 'IPODate': '2017-03-19', 'CreationDate': '2017-03-07', 'PaymentDate': '2017-04-18', 'IPOStatusID': '200'}
,
{'IPOID': '18998', 'IPODate': '2017-03-26', 'CreationDate': '2017-03-14', 'PaymentDate': '2017-04-25', 'IPOStatusID': '200'}
,
{'IPOID': '19203', 'IPODate': '2017-04-08', 'CreationDate': '2017-03-27', 'PaymentDate': '2017-05-08', 'IPOStatusID': '200'}
,
{'IPOID': '19474', 'IPODate': '2017-02-21', 'CreationDate': '2017-02-09', 'PaymentDate': '2017-03-23', 'IPOStatusID': '200'}
,
{'IPOID': '19772', 'IPODate': '2017-03-28', 'CreationDate': '2017-03-16', 'PaymentDate': '2017-04-27', 'IPOStatusID': '200'}
,
{'IPOID': '20140', 'IPODate': '2017-04-23', 'CreationDate': '2017-04-11', 'PaymentDate': '2017-05-23', 'IPOStatusID': '200'}
,
{'IPOID': '20237', 'IPODate': '2017-05-07', 'CreationDate': '2017-04-25', 'PaymentDate': '2017-06-06', 'IPOStatusID': '200'}
,
{'IPOID': '20434', 'IPODate': '2017-05-14', 'CreationDate': '2017-05-02', 'PaymentDate': '2017-06-13', 'IPOStatusID': '200'}
,
{'IPOID': '20558', 'IPODate': '2017-05-13', 'CreationDate': '2017-05-01', 'PaymentDate': '2017-06-12', 'IPOStatusID': '200'}
,
{'IPOID': '20629', 'IPODate': '2017-05-13', 'CreationDate': '2017-05-01', 'PaymentDate': '2017-06-12', 'IPOStatusID': '200'}
,
{'IPOID': '20651', 'IPODate': '2017-05-21', 'CreationDate': '2017-05-09', 'PaymentDate': '2017-06-20', 'IPOStatusID': '200'}
,
{'IPOID': '20671', 'IPODate': '2017-05-14', 'CreationDate': '2017-05-02', 'PaymentDate': '2017-06-13', 'IPOStatusID': '200'}
,
{'IPOID': '20847', 'IPODate': '2017-05-09', 'CreationDate': '2017-04-27', 'PaymentDate': '2017-06-08', 'IPOStatusID': '200'}
,
{'IPOID': '20851', 'IPODate': '2017-05-28', 'CreationDate': '2017-05-16', 'PaymentDate': '2017-06-27', 'IPOStatusID': '200'}
,
{'IPOID': '21063', 'IPODate': '2017-05-27', 'CreationDate': '2017-05-15', 'PaymentDate': '2017-06-26', 'IPOStatusID': '200'}
,
{'IPOID': '21174', 'IPODate': '2017-05-29', 'CreationDate': '2017-05-17', 'PaymentDate': '2017-06-28', 'IPOStatusID': '200'}
,
{'IPOID': '21185', 'IPODate': '2017-04-15', 'CreationDate': '2017-04-03', 'PaymentDate': '2017-05-15', 'IPOStatusID': '200'}
,
{'IPOID': '21282', 'IPODate': '2017-06-04', 'CreationDate': '2017-05-23', 'PaymentDate': '2017-07-04', 'IPOStatusID': '200'}
,
{'IPOID': '21407', 'IPODate': '2017-06-14', 'CreationDate': '2017-06-02', 'PaymentDate': '2017-07-14', 'IPOStatusID': '200'}
,
{'IPOID': '21408', 'IPODate': '2017-06-13', 'CreationDate': '2017-06-01', 'PaymentDate': '2017-07-13', 'IPOStatusID': '200'}
,
{'IPOID': '21435', 'IPODate': '2017-06-18', 'CreationDate': '2017-06-06', 'PaymentDate': '2017-07-18', 'IPOStatusID': '200'}
,
{'IPOID': '21437', 'IPODate': '2017-06-07', 'CreationDate': '2017-05-26', 'PaymentDate': '2017-07-07', 'IPOStatusID': '200'}
,
{'IPOID': '21524', 'IPODate': '2017-06-18', 'CreationDate': '2017-06-06', 'PaymentDate': '2017-07-18', 'IPOStatusID': '200'}
,
{'IPOID': '21649', 'IPODate': '2017-06-21', 'CreationDate': '2017-06-09', 'PaymentDate': '2017-07-21', 'IPOStatusID': '200'}
,
{'IPOID': '21714', 'IPODate': '2017-06-25', 'CreationDate': '2017-06-13', 'PaymentDate': '2017-07-25', 'IPOStatusID': '200'}
,
{'IPOID': '21759', 'IPODate': '2017-06-24', 'CreationDate': '2017-06-12', 'PaymentDate': '2017-07-24', 'IPOStatusID': '200'}
,
{'IPOID': '21777', 'IPODate': '2017-06-19', 'CreationDate': '2017-06-07', 'PaymentDate': '2017-07-19', 'IPOStatusID': '200'}
,
{'IPOID': '21784', 'IPODate': '2017-06-28', 'CreationDate': '2017-06-16', 'PaymentDate': '2017-07-28', 'IPOStatusID': '200'}
,
{'IPOID': '21786', 'IPODate': '2017-06-19', 'CreationDate': '2017-06-07', 'PaymentDate': '2017-07-19', 'IPOStatusID': '200'}
,
{'IPOID': '21787', 'IPODate': '2017-06-19', 'CreationDate': '2017-06-07', 'PaymentDate': '2017-07-19', 'IPOStatusID': '200'}
,
{'IPOID': '21814', 'IPODate': '2017-06-29', 'CreationDate': '2017-06-17', 'PaymentDate': '2017-07-29', 'IPOStatusID': '200'}
,
{'IPOID': '21902', 'IPODate': '2017-07-02', 'CreationDate': '2017-06-20', 'PaymentDate': '2017-08-01', 'IPOStatusID': '200'}
,
{'IPOID': '21911', 'IPODate': '2017-04-30', 'CreationDate': '2017-04-18', 'PaymentDate': '2017-05-30', 'IPOStatusID': '200'}
,
{'IPOID': '21960', 'IPODate': '2017-07-04', 'CreationDate': '2017-06-22', 'PaymentDate': '2017-08-03', 'IPOStatusID': '200'}
,
{'IPOID': '21965', 'IPODate': '2017-06-21', 'CreationDate': '2017-06-09', 'PaymentDate': '2017-07-21', 'IPOStatusID': '200'}
,
{'IPOID': '22066', 'IPODate': '2017-07-08', 'CreationDate': '2017-06-26', 'PaymentDate': '2017-08-07', 'IPOStatusID': '200'}
,
{'IPOID': '22115', 'IPODate': '2017-06-24', 'CreationDate': '2017-06-12', 'PaymentDate': '2017-07-24', 'IPOStatusID': '200'}
,
{'IPOID': '22116', 'IPODate': '2017-07-10', 'CreationDate': '2017-06-28', 'PaymentDate': '2017-08-09', 'IPOStatusID': '200'}
,
{'IPOID': '77191', 'IPODate': '2014-10-12', 'CreationDate': '2014-09-30', 'PaymentDate': '2014-11-11', 'IPOStatusID': '200'}
,
{'IPOID': '78968', 'IPODate': '2015-01-21', 'CreationDate': '2015-01-09', 'PaymentDate': '2015-02-20', 'IPOStatusID': '200'}
,
{'IPOID': '80764', 'IPODate': '2015-03-28', 'CreationDate': '2015-03-16', 'PaymentDate': '2015-04-27', 'IPOStatusID': '200'}
,
{'IPOID': '84778', 'IPODate': '2015-08-17', 'CreationDate': '2015-08-05', 'PaymentDate': '2015-09-16', 'IPOStatusID': '200'}
,
{'IPOID': '86559', 'IPODate': '2015-09-13', 'CreationDate': '2015-09-01', 'PaymentDate': '2015-10-13', 'IPOStatusID': '200'}
,
{'IPOID': '87072', 'IPODate': '2015-09-12', 'CreationDate': '2015-08-31', 'PaymentDate': '2015-10-12', 'IPOStatusID': '200'}
,
{'IPOID': '88279', 'IPODate': '2015-10-31', 'CreationDate': '2015-10-19', 'PaymentDate': '2015-11-30', 'IPOStatusID': '200'}
,
{'IPOID': '90841', 'IPODate': '2015-12-01', 'CreationDate': '2015-11-19', 'PaymentDate': '2015-12-31', 'IPOStatusID': '200'}
,
{'IPOID': '91407', 'IPODate': '2016-02-06', 'CreationDate': '2016-01-25', 'PaymentDate': '2016-03-07', 'IPOStatusID': '200'}
,
{'IPOID': '91536', 'IPODate': '2016-02-20', 'CreationDate': '2016-02-08', 'PaymentDate': '2016-03-21', 'IPOStatusID': '200'}
,
{'IPOID': '91986', 'IPODate': '2016-02-28', 'CreationDate': '2016-02-16', 'PaymentDate': '2016-03-29', 'IPOStatusID': '200'}
,
{'IPOID': '92238', 'IPODate': '2015-12-30', 'CreationDate': '2015-12-18', 'PaymentDate': '2016-01-29', 'IPOStatusID': '200'}
,
{'IPOID': '92537', 'IPODate': '2016-03-13', 'CreationDate': '2016-03-01', 'PaymentDate': '2016-04-12', 'IPOStatusID': '200'}
,
{'IPOID': '92889', 'IPODate': '2016-04-10', 'CreationDate': '2016-03-29', 'PaymentDate': '2016-05-10', 'IPOStatusID': '200'}
,
{'IPOID': '93354', 'IPODate': '2016-04-16', 'CreationDate': '2016-04-04', 'PaymentDate': '2016-05-16', 'IPOStatusID': '200'}
,
{'IPOID': '94160', 'IPODate': '2016-04-27', 'CreationDate': '2016-04-15', 'PaymentDate': '2016-05-27', 'IPOStatusID': '200'}
,
{'IPOID': '94515', 'IPODate': '2016-05-21', 'CreationDate': '2016-05-09', 'PaymentDate': '2016-06-20', 'IPOStatusID': '200'}
,
{'IPOID': '94727', 'IPODate': '2016-05-03', 'CreationDate': '2016-04-21', 'PaymentDate': '2016-06-02', 'IPOStatusID': '200'}
,
{'IPOID': '94728', 'IPODate': '2016-05-29', 'CreationDate': '2016-05-17', 'PaymentDate': '2016-06-28', 'IPOStatusID': '200'}
,
{'IPOID': '94988', 'IPODate': '2016-06-04', 'CreationDate': '2016-05-23', 'PaymentDate': '2016-07-04', 'IPOStatusID': '200'}
,
{'IPOID': '95084', 'IPODate': '2015-10-19', 'CreationDate': '2015-10-07', 'PaymentDate': '2015-11-18', 'IPOStatusID': '200'}
,
{'IPOID': '95613', 'IPODate': '2016-06-12', 'CreationDate': '2016-05-31', 'PaymentDate': '2016-07-12', 'IPOStatusID': '200'}
,
{'IPOID': '95996', 'IPODate': '2016-06-25', 'CreationDate': '2016-06-13', 'PaymentDate': '2016-07-25', 'IPOStatusID': '200'}
,
{'IPOID': '100373', 'IPODate': '2017-07-31', 'CreationDate': '2017-07-19', 'PaymentDate': '2017-08-30', 'IPOStatusID': '200'}
,
{'IPOID': '101193', 'IPODate': '2016-07-17', 'CreationDate': '2016-07-05', 'PaymentDate': '2016-08-16', 'IPOStatusID': '200'}
,
{'IPOID': '102205', 'IPODate': '2017-07-17', 'CreationDate': '2017-07-05', 'PaymentDate': '2017-08-16', 'IPOStatusID': '200'}
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
     await queryInterface.bulkDelete('ipos', null, {});
  }
}; 
