
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('iporates',[

{'IPORateID': '10', 'ServiceRateID': '9001', 'IPOID': '77191'}
,
{'IPORateID': '20', 'ServiceRateID': '9001', 'IPOID': '78968'}
,
{'IPORateID': '30', 'ServiceRateID': '9001', 'IPOID': '80764'}
,
{'IPORateID': '40', 'ServiceRateID': '9002', 'IPOID': '10035'}
,
{'IPORateID': '50', 'ServiceRateID': '9002', 'IPOID': '21174'}
,
{'IPORateID': '60', 'ServiceRateID': '9002', 'IPOID': '84778'}
,
{'IPORateID': '70', 'ServiceRateID': '9002', 'IPOID': '86559'}
,
{'IPORateID': '80', 'ServiceRateID': '9002', 'IPOID': '87072'}
,
{'IPORateID': '90', 'ServiceRateID': '9002', 'IPOID': '88279'}
,
{'IPORateID': '100', 'ServiceRateID': '9002', 'IPOID': '90841'}
,
{'IPORateID': '110', 'ServiceRateID': '9002', 'IPOID': '91407'}
,
{'IPORateID': '120', 'ServiceRateID': '9002', 'IPOID': '91536'}
,
{'IPORateID': '130', 'ServiceRateID': '9002', 'IPOID': '91986'}
,
{'IPORateID': '140', 'ServiceRateID': '9002', 'IPOID': '92238'}
,
{'IPORateID': '150', 'ServiceRateID': '9002', 'IPOID': '92537'}
,
{'IPORateID': '160', 'ServiceRateID': '9002', 'IPOID': '92889'}
,
{'IPORateID': '170', 'ServiceRateID': '9002', 'IPOID': '93354'}
,
{'IPORateID': '180', 'ServiceRateID': '9002', 'IPOID': '94160'}
,
{'IPORateID': '190', 'ServiceRateID': '9002', 'IPOID': '94515'}
,
{'IPORateID': '200', 'ServiceRateID': '9002', 'IPOID': '94727'}
,
{'IPORateID': '210', 'ServiceRateID': '9002', 'IPOID': '94728'}
,
{'IPORateID': '220', 'ServiceRateID': '9002', 'IPOID': '94988'}
,
{'IPORateID': '230', 'ServiceRateID': '9002', 'IPOID': '95084'}
,
{'IPORateID': '240', 'ServiceRateID': '9002', 'IPOID': '95613'}
,
{'IPORateID': '250', 'ServiceRateID': '9002', 'IPOID': '95996'}
,
{'IPORateID': '260', 'ServiceRateID': '9003', 'IPOID': '11880'}
,
{'IPORateID': '270', 'ServiceRateID': '9003', 'IPOID': '12372'}
,
{'IPORateID': '280', 'ServiceRateID': '9003', 'IPOID': '12676'}
,
{'IPORateID': '290', 'ServiceRateID': '9003', 'IPOID': '13164'}
,
{'IPORateID': '300', 'ServiceRateID': '9003', 'IPOID': '14330'}
,
{'IPORateID': '310', 'ServiceRateID': '9003', 'IPOID': '15169'}
,
{'IPORateID': '320', 'ServiceRateID': '9003', 'IPOID': '16010'}
,
{'IPORateID': '330', 'ServiceRateID': '9003', 'IPOID': '16033'}
,
{'IPORateID': '340', 'ServiceRateID': '9003', 'IPOID': '16225'}
,
{'IPORateID': '350', 'ServiceRateID': '9003', 'IPOID': '17834'}
,
{'IPORateID': '360', 'ServiceRateID': '9003', 'IPOID': '18111'}
,
{'IPORateID': '370', 'ServiceRateID': '9003', 'IPOID': '18454'}
,
{'IPORateID': '380', 'ServiceRateID': '9003', 'IPOID': '18813'}
,
{'IPORateID': '390', 'ServiceRateID': '9003', 'IPOID': '18998'}
,
{'IPORateID': '400', 'ServiceRateID': '9003', 'IPOID': '19203'}
,
{'IPORateID': '410', 'ServiceRateID': '9003', 'IPOID': '19474'}
,
{'IPORateID': '420', 'ServiceRateID': '9003', 'IPOID': '19772'}
,
{'IPORateID': '430', 'ServiceRateID': '9003', 'IPOID': '20140'}
,
{'IPORateID': '440', 'ServiceRateID': '9003', 'IPOID': '20237'}
,
{'IPORateID': '450', 'ServiceRateID': '9003', 'IPOID': '20434'}
,
{'IPORateID': '460', 'ServiceRateID': '9003', 'IPOID': '20558'}
,
{'IPORateID': '470', 'ServiceRateID': '9003', 'IPOID': '20629'}
,
{'IPORateID': '480', 'ServiceRateID': '9003', 'IPOID': '20651'}
,
{'IPORateID': '490', 'ServiceRateID': '9003', 'IPOID': '20671'}
,
{'IPORateID': '500', 'ServiceRateID': '9003', 'IPOID': '20847'}
,
{'IPORateID': '510', 'ServiceRateID': '9003', 'IPOID': '20851'}
,
{'IPORateID': '520', 'ServiceRateID': '9003', 'IPOID': '21063'}
,
{'IPORateID': '530', 'ServiceRateID': '9003', 'IPOID': '21174'}
,
{'IPORateID': '540', 'ServiceRateID': '9003', 'IPOID': '21185'}
,
{'IPORateID': '550', 'ServiceRateID': '9003', 'IPOID': '21282'}
,
{'IPORateID': '560', 'ServiceRateID': '9003', 'IPOID': '21407'}
,
{'IPORateID': '570', 'ServiceRateID': '9003', 'IPOID': '21408'}
,
{'IPORateID': '580', 'ServiceRateID': '9003', 'IPOID': '21435'}
,
{'IPORateID': '590', 'ServiceRateID': '9003', 'IPOID': '21437'}
,
{'IPORateID': '600', 'ServiceRateID': '9003', 'IPOID': '21524'}
,
{'IPORateID': '610', 'ServiceRateID': '9003', 'IPOID': '21649'}
,
{'IPORateID': '620', 'ServiceRateID': '9003', 'IPOID': '21714'}
,
{'IPORateID': '630', 'ServiceRateID': '9003', 'IPOID': '21759'}
,
{'IPORateID': '640', 'ServiceRateID': '9003', 'IPOID': '21777'}
,
{'IPORateID': '650', 'ServiceRateID': '9003', 'IPOID': '21784'}
,
{'IPORateID': '660', 'ServiceRateID': '9003', 'IPOID': '21786'}
,
{'IPORateID': '670', 'ServiceRateID': '9003', 'IPOID': '21787'}
,
{'IPORateID': '680', 'ServiceRateID': '9003', 'IPOID': '21814'}
,
{'IPORateID': '690', 'ServiceRateID': '9003', 'IPOID': '21902'}
,
{'IPORateID': '700', 'ServiceRateID': '9003', 'IPOID': '21911'}
,
{'IPORateID': '710', 'ServiceRateID': '9003', 'IPOID': '21960'}
,
{'IPORateID': '720', 'ServiceRateID': '9003', 'IPOID': '21965'}
,
{'IPORateID': '730', 'ServiceRateID': '9003', 'IPOID': '22066'}
,
{'IPORateID': '740', 'ServiceRateID': '9003', 'IPOID': '22115'}
,
{'IPORateID': '750', 'ServiceRateID': '9003', 'IPOID': '22116'}
,
{'IPORateID': '760', 'ServiceRateID': '9003', 'IPOID': '91986'}
,
{'IPORateID': '770', 'ServiceRateID': '9003', 'IPOID': '101193'}
,
{'IPORateID': '780', 'ServiceRateID': '9004', 'IPOID': '10222'}
,
{'IPORateID': '790', 'ServiceRateID': '9004', 'IPOID': '10396'}
,
{'IPORateID': '800', 'ServiceRateID': '9004', 'IPOID': '10401'}
,
{'IPORateID': '810', 'ServiceRateID': '9004', 'IPOID': '10572'}
,
{'IPORateID': '820', 'ServiceRateID': '9004', 'IPOID': '10687'}
,
{'IPORateID': '830', 'ServiceRateID': '9004', 'IPOID': '10695'}
,
{'IPORateID': '840', 'ServiceRateID': '9004', 'IPOID': '10711'}
,
{'IPORateID': '850', 'ServiceRateID': '9004', 'IPOID': '10755'}
,
{'IPORateID': '860', 'ServiceRateID': '9004', 'IPOID': '10757'}
,
{'IPORateID': '870', 'ServiceRateID': '9004', 'IPOID': '10785'}
,
{'IPORateID': '880', 'ServiceRateID': '9004', 'IPOID': '10786'}
,
{'IPORateID': '890', 'ServiceRateID': '9004', 'IPOID': '10859'}
,
{'IPORateID': '900', 'ServiceRateID': '9004', 'IPOID': '10860'}
,
{'IPORateID': '910', 'ServiceRateID': '9004', 'IPOID': '10998'}
,
{'IPORateID': '920', 'ServiceRateID': '9004', 'IPOID': '11000'}
,
{'IPORateID': '930', 'ServiceRateID': '9004', 'IPOID': '11001'}
,
{'IPORateID': '940', 'ServiceRateID': '9004', 'IPOID': '11145'}
,
{'IPORateID': '950', 'ServiceRateID': '9004', 'IPOID': '11146'}
,
{'IPORateID': '960', 'ServiceRateID': '9004', 'IPOID': '11323'}
,
{'IPORateID': '970', 'ServiceRateID': '9004', 'IPOID': '11327'}
,
{'IPORateID': '980', 'ServiceRateID': '9004', 'IPOID': '11413'}
,
{'IPORateID': '990', 'ServiceRateID': '9004', 'IPOID': '11458'}
,
{'IPORateID': '1000', 'ServiceRateID': '9004', 'IPOID': '11522'}
,
{'IPORateID': '1010', 'ServiceRateID': '9004', 'IPOID': '11535'}
,
{'IPORateID': '1020', 'ServiceRateID': '9004', 'IPOID': '11572'}
,
{'IPORateID': '1030', 'ServiceRateID': '9004', 'IPOID': '11767'}
,
{'IPORateID': '1040', 'ServiceRateID': '9004', 'IPOID': '11771'}
,
{'IPORateID': '1050', 'ServiceRateID': '9004', 'IPOID': '11942'}
,
{'IPORateID': '1060', 'ServiceRateID': '9004', 'IPOID': '11944'}
,
{'IPORateID': '1070', 'ServiceRateID': '9004', 'IPOID': '11949'}
,
{'IPORateID': '1080', 'ServiceRateID': '9004', 'IPOID': '11965'}
,
{'IPORateID': '1090', 'ServiceRateID': '9004', 'IPOID': '11967'}
,
{'IPORateID': '1100', 'ServiceRateID': '9004', 'IPOID': '11972'}
,
{'IPORateID': '1110', 'ServiceRateID': '9004', 'IPOID': '12009'}
,
{'IPORateID': '1120', 'ServiceRateID': '9004', 'IPOID': '12078'}
,
{'IPORateID': '1130', 'ServiceRateID': '9004', 'IPOID': '12079'}
,
{'IPORateID': '1140', 'ServiceRateID': '9004', 'IPOID': '12080'}
,
{'IPORateID': '1150', 'ServiceRateID': '9004', 'IPOID': '12371'}
,
{'IPORateID': '1160', 'ServiceRateID': '9004', 'IPOID': '12389'}
,
{'IPORateID': '1170', 'ServiceRateID': '9004', 'IPOID': '12390'}
,
{'IPORateID': '1180', 'ServiceRateID': '9004', 'IPOID': '12426'}
,
{'IPORateID': '1190', 'ServiceRateID': '9004', 'IPOID': '12552'}
,
{'IPORateID': '1200', 'ServiceRateID': '9004', 'IPOID': '12554'}
,
{'IPORateID': '1210', 'ServiceRateID': '9004', 'IPOID': '12555'}
,
{'IPORateID': '1220', 'ServiceRateID': '9004', 'IPOID': '12740'}
,
{'IPORateID': '1230', 'ServiceRateID': '9004', 'IPOID': '12767'}
,
{'IPORateID': '1240', 'ServiceRateID': '9004', 'IPOID': '12841'}
,
{'IPORateID': '1250', 'ServiceRateID': '9004', 'IPOID': '12843'}
,
{'IPORateID': '1260', 'ServiceRateID': '9004', 'IPOID': '12846'}
,
{'IPORateID': '1270', 'ServiceRateID': '9004', 'IPOID': '12856'}
,
{'IPORateID': '1280', 'ServiceRateID': '9004', 'IPOID': '12960'}
,
{'IPORateID': '1290', 'ServiceRateID': '9004', 'IPOID': '13041'}
,
{'IPORateID': '1300', 'ServiceRateID': '9004', 'IPOID': '13097'}
,
{'IPORateID': '1310', 'ServiceRateID': '9004', 'IPOID': '13350'}
,
{'IPORateID': '1320', 'ServiceRateID': '9004', 'IPOID': '13353'}
,
{'IPORateID': '1330', 'ServiceRateID': '9004', 'IPOID': '13354'}
,
{'IPORateID': '1340', 'ServiceRateID': '9004', 'IPOID': '13822'}
,
{'IPORateID': '1350', 'ServiceRateID': '9004', 'IPOID': '13833'}
,
{'IPORateID': '1360', 'ServiceRateID': '9004', 'IPOID': '13834'}
,
{'IPORateID': '1370', 'ServiceRateID': '9004', 'IPOID': '13844'}
,
{'IPORateID': '1380', 'ServiceRateID': '9004', 'IPOID': '13850'}
,
{'IPORateID': '1390', 'ServiceRateID': '9004', 'IPOID': '13998'}
,
{'IPORateID': '1400', 'ServiceRateID': '9004', 'IPOID': '14021'}
,
{'IPORateID': '1410', 'ServiceRateID': '9004', 'IPOID': '14022'}
,
{'IPORateID': '1420', 'ServiceRateID': '9004', 'IPOID': '14137'}
,
{'IPORateID': '1430', 'ServiceRateID': '9004', 'IPOID': '14298'}
,
{'IPORateID': '1440', 'ServiceRateID': '9004', 'IPOID': '14302'}
,
{'IPORateID': '1450', 'ServiceRateID': '9004', 'IPOID': '14303'}
,
{'IPORateID': '1460', 'ServiceRateID': '9004', 'IPOID': '14313'}
,
{'IPORateID': '1470', 'ServiceRateID': '9004', 'IPOID': '14639'}
,
{'IPORateID': '1480', 'ServiceRateID': '9004', 'IPOID': '14688'}
,
{'IPORateID': '1490', 'ServiceRateID': '9004', 'IPOID': '14689'}
,
{'IPORateID': '1500', 'ServiceRateID': '9004', 'IPOID': '14690'}
,
{'IPORateID': '1510', 'ServiceRateID': '9004', 'IPOID': '14691'}
,
{'IPORateID': '1520', 'ServiceRateID': '9004', 'IPOID': '14692'}
,
{'IPORateID': '1530', 'ServiceRateID': '9004', 'IPOID': '14757'}
,
{'IPORateID': '1540', 'ServiceRateID': '9004', 'IPOID': '14779'}
,
{'IPORateID': '1550', 'ServiceRateID': '9004', 'IPOID': '14845'}
,
{'IPORateID': '1560', 'ServiceRateID': '9004', 'IPOID': '14846'}
,
{'IPORateID': '1570', 'ServiceRateID': '9004', 'IPOID': '14847'}
,
{'IPORateID': '1580', 'ServiceRateID': '9004', 'IPOID': '14848'}
,
{'IPORateID': '1590', 'ServiceRateID': '9004', 'IPOID': '14857'}
,
{'IPORateID': '1600', 'ServiceRateID': '9004', 'IPOID': '14928'}
,
{'IPORateID': '1610', 'ServiceRateID': '9004', 'IPOID': '14929'}
,
{'IPORateID': '1620', 'ServiceRateID': '9004', 'IPOID': '14941'}
,
{'IPORateID': '1630', 'ServiceRateID': '9004', 'IPOID': '15034'}
,
{'IPORateID': '1640', 'ServiceRateID': '9004', 'IPOID': '15041'}
,
{'IPORateID': '1650', 'ServiceRateID': '9004', 'IPOID': '15045'}
,
{'IPORateID': '1660', 'ServiceRateID': '9004', 'IPOID': '15127'}
,
{'IPORateID': '1670', 'ServiceRateID': '9004', 'IPOID': '15130'}
,
{'IPORateID': '1680', 'ServiceRateID': '9004', 'IPOID': '15136'}
,
{'IPORateID': '1690', 'ServiceRateID': '9004', 'IPOID': '15137'}
,
{'IPORateID': '1700', 'ServiceRateID': '9004', 'IPOID': '15138'}
,
{'IPORateID': '1710', 'ServiceRateID': '9004', 'IPOID': '15380'}
,
{'IPORateID': '1720', 'ServiceRateID': '9004', 'IPOID': '15381'}
,
{'IPORateID': '1730', 'ServiceRateID': '9004', 'IPOID': '15456'}
,
{'IPORateID': '1740', 'ServiceRateID': '9004', 'IPOID': '15466'}
,
{'IPORateID': '1750', 'ServiceRateID': '9004', 'IPOID': '15536'}
,
{'IPORateID': '1760', 'ServiceRateID': '9004', 'IPOID': '15537'}
,
{'IPORateID': '1770', 'ServiceRateID': '9004', 'IPOID': '15538'}
,
{'IPORateID': '1780', 'ServiceRateID': '9004', 'IPOID': '15652'}
,
{'IPORateID': '1790', 'ServiceRateID': '9004', 'IPOID': '15711'}
,
{'IPORateID': '1800', 'ServiceRateID': '9004', 'IPOID': '15807'}
,
{'IPORateID': '1810', 'ServiceRateID': '9004', 'IPOID': '15808'}
,
{'IPORateID': '1820', 'ServiceRateID': '9004', 'IPOID': '15814'}
,
{'IPORateID': '1830', 'ServiceRateID': '9004', 'IPOID': '15823'}
,
{'IPORateID': '1840', 'ServiceRateID': '9004', 'IPOID': '15824'}
,
{'IPORateID': '1850', 'ServiceRateID': '9004', 'IPOID': '16044'}
,
{'IPORateID': '1860', 'ServiceRateID': '9004', 'IPOID': '16045'}
,
{'IPORateID': '1870', 'ServiceRateID': '9004', 'IPOID': '16046'}
,
{'IPORateID': '1880', 'ServiceRateID': '9004', 'IPOID': '16047'}
,
{'IPORateID': '1890', 'ServiceRateID': '9004', 'IPOID': '16099'}
,
{'IPORateID': '1900', 'ServiceRateID': '9004', 'IPOID': '16252'}
,
{'IPORateID': '1910', 'ServiceRateID': '9004', 'IPOID': '16386'}
,
{'IPORateID': '1920', 'ServiceRateID': '9004', 'IPOID': '16426'}
,
{'IPORateID': '1930', 'ServiceRateID': '9004', 'IPOID': '16610'}
,
{'IPORateID': '1940', 'ServiceRateID': '9004', 'IPOID': '16624'}
,
{'IPORateID': '1950', 'ServiceRateID': '9004', 'IPOID': '16626'}
,
{'IPORateID': '1960', 'ServiceRateID': '9004', 'IPOID': '16628'}
,
{'IPORateID': '1970', 'ServiceRateID': '9004', 'IPOID': '16774'}
,
{'IPORateID': '1980', 'ServiceRateID': '9004', 'IPOID': '16820'}
,
{'IPORateID': '1990', 'ServiceRateID': '9004', 'IPOID': '16825'}
,
{'IPORateID': '2000', 'ServiceRateID': '9004', 'IPOID': '17012'}
,
{'IPORateID': '2010', 'ServiceRateID': '9004', 'IPOID': '17026'}
,
{'IPORateID': '2020', 'ServiceRateID': '9004', 'IPOID': '17027'}
,
{'IPORateID': '2030', 'ServiceRateID': '9004', 'IPOID': '17028'}
,
{'IPORateID': '2040', 'ServiceRateID': '9004', 'IPOID': '17216'}
,
{'IPORateID': '2050', 'ServiceRateID': '9004', 'IPOID': '17220'}
,
{'IPORateID': '2060', 'ServiceRateID': '9004', 'IPOID': '17263'}
,
{'IPORateID': '2070', 'ServiceRateID': '9004', 'IPOID': '17267'}
,
{'IPORateID': '2080', 'ServiceRateID': '9004', 'IPOID': '17450'}
,
{'IPORateID': '2090', 'ServiceRateID': '9004', 'IPOID': '17480'}
,
{'IPORateID': '2100', 'ServiceRateID': '9004', 'IPOID': '17535'}
,
{'IPORateID': '2110', 'ServiceRateID': '9004', 'IPOID': '17536'}
,
{'IPORateID': '2120', 'ServiceRateID': '9004', 'IPOID': '17538'}
,
{'IPORateID': '2130', 'ServiceRateID': '9004', 'IPOID': '17587'}
,
{'IPORateID': '2140', 'ServiceRateID': '9004', 'IPOID': '17595'}
,
{'IPORateID': '2150', 'ServiceRateID': '9004', 'IPOID': '17596'}
,
{'IPORateID': '2160', 'ServiceRateID': '9004', 'IPOID': '17608'}
,
{'IPORateID': '2170', 'ServiceRateID': '9004', 'IPOID': '17642'}
,
{'IPORateID': '2180', 'ServiceRateID': '9004', 'IPOID': '17643'}
,
{'IPORateID': '2190', 'ServiceRateID': '9004', 'IPOID': '17644'}
,
{'IPORateID': '2200', 'ServiceRateID': '9004', 'IPOID': '17750'}
,
{'IPORateID': '2210', 'ServiceRateID': '9004', 'IPOID': '17751'}
,
{'IPORateID': '2220', 'ServiceRateID': '9004', 'IPOID': '17823'}
,
{'IPORateID': '2230', 'ServiceRateID': '9004', 'IPOID': '17824'}
,
{'IPORateID': '2240', 'ServiceRateID': '9004', 'IPOID': '18007'}
,
{'IPORateID': '2250', 'ServiceRateID': '9004', 'IPOID': '18011'}
,
{'IPORateID': '2260', 'ServiceRateID': '9004', 'IPOID': '18012'}
,
{'IPORateID': '2270', 'ServiceRateID': '9004', 'IPOID': '18053'}
,
{'IPORateID': '2280', 'ServiceRateID': '9004', 'IPOID': '18090'}
,
{'IPORateID': '2290', 'ServiceRateID': '9004', 'IPOID': '18094'}
,
{'IPORateID': '2300', 'ServiceRateID': '9004', 'IPOID': '18099'}
,
{'IPORateID': '2310', 'ServiceRateID': '9004', 'IPOID': '18100'}
,
{'IPORateID': '2320', 'ServiceRateID': '9004', 'IPOID': '18102'}
,
{'IPORateID': '2330', 'ServiceRateID': '9004', 'IPOID': '18103'}
,
{'IPORateID': '2340', 'ServiceRateID': '9004', 'IPOID': '18191'}
,
{'IPORateID': '2350', 'ServiceRateID': '9004', 'IPOID': '18197'}
,
{'IPORateID': '2360', 'ServiceRateID': '9004', 'IPOID': '18198'}
,
{'IPORateID': '2370', 'ServiceRateID': '9004', 'IPOID': '18215'}
,
{'IPORateID': '2380', 'ServiceRateID': '9004', 'IPOID': '18265'}
,
{'IPORateID': '2390', 'ServiceRateID': '9004', 'IPOID': '18281'}
,
{'IPORateID': '2400', 'ServiceRateID': '9004', 'IPOID': '18282'}
,
{'IPORateID': '2410', 'ServiceRateID': '9004', 'IPOID': '18313'}
,
{'IPORateID': '2420', 'ServiceRateID': '9004', 'IPOID': '18331'}
,
{'IPORateID': '2430', 'ServiceRateID': '9004', 'IPOID': '18332'}
,
{'IPORateID': '2440', 'ServiceRateID': '9004', 'IPOID': '18333'}
,
{'IPORateID': '2450', 'ServiceRateID': '9004', 'IPOID': '18334'}
,
{'IPORateID': '2460', 'ServiceRateID': '9004', 'IPOID': '18335'}
,
{'IPORateID': '2470', 'ServiceRateID': '9004', 'IPOID': '18336'}
,
{'IPORateID': '2480', 'ServiceRateID': '9004', 'IPOID': '18360'}
,
{'IPORateID': '2490', 'ServiceRateID': '9004', 'IPOID': '18362'}
,
{'IPORateID': '2500', 'ServiceRateID': '9004', 'IPOID': '18382'}
,
{'IPORateID': '2510', 'ServiceRateID': '9004', 'IPOID': '18397'}
,
{'IPORateID': '2520', 'ServiceRateID': '9004', 'IPOID': '18401'}
,
{'IPORateID': '2530', 'ServiceRateID': '9004', 'IPOID': '18402'}
,
{'IPORateID': '2540', 'ServiceRateID': '9004', 'IPOID': '18403'}
,
{'IPORateID': '2550', 'ServiceRateID': '9004', 'IPOID': '18426'}
,
{'IPORateID': '2560', 'ServiceRateID': '9004', 'IPOID': '18435'}
,
{'IPORateID': '2570', 'ServiceRateID': '9004', 'IPOID': '18448'}
,
{'IPORateID': '2580', 'ServiceRateID': '9004', 'IPOID': '18449'}
,
{'IPORateID': '2590', 'ServiceRateID': '9004', 'IPOID': '18488'}
,
{'IPORateID': '2600', 'ServiceRateID': '9004', 'IPOID': '18489'}
,
{'IPORateID': '2610', 'ServiceRateID': '9004', 'IPOID': '18515'}
,
{'IPORateID': '2620', 'ServiceRateID': '9004', 'IPOID': '18516'}
,
{'IPORateID': '2630', 'ServiceRateID': '9004', 'IPOID': '18517'}
,
{'IPORateID': '2640', 'ServiceRateID': '9004', 'IPOID': '18531'}
,
{'IPORateID': '2650', 'ServiceRateID': '9004', 'IPOID': '18585'}
,
{'IPORateID': '2660', 'ServiceRateID': '9004', 'IPOID': '18596'}
,
{'IPORateID': '2670', 'ServiceRateID': '9004', 'IPOID': '18600'}
,
{'IPORateID': '2680', 'ServiceRateID': '9004', 'IPOID': '18609'}
,
{'IPORateID': '2690', 'ServiceRateID': '9004', 'IPOID': '18610'}
,
{'IPORateID': '2700', 'ServiceRateID': '9004', 'IPOID': '18611'}
,
{'IPORateID': '2710', 'ServiceRateID': '9004', 'IPOID': '18613'}
,
{'IPORateID': '2720', 'ServiceRateID': '9004', 'IPOID': '100373'}
,
{'IPORateID': '2730', 'ServiceRateID': '9004', 'IPOID': '102205'}
,
{'IPORateID': '2740', 'ServiceRateID': '9005', 'IPOID': '10124'}
,
{'IPORateID': '2750', 'ServiceRateID': '9005', 'IPOID': '10125'}
,
{'IPORateID': '2760', 'ServiceRateID': '9005', 'IPOID': '10126'}
,
{'IPORateID': '2770', 'ServiceRateID': '9005', 'IPOID': '10127'}
,
{'IPORateID': '2780', 'ServiceRateID': '9005', 'IPOID': '10310'}
,
{'IPORateID': '2790', 'ServiceRateID': '9005', 'IPOID': '10311'}
,
{'IPORateID': '2800', 'ServiceRateID': '9005', 'IPOID': '10312'}
,
{'IPORateID': '2810', 'ServiceRateID': '9005', 'IPOID': '10382'}
,
{'IPORateID': '2820', 'ServiceRateID': '9005', 'IPOID': '10427'}
,
{'IPORateID': '2830', 'ServiceRateID': '9005', 'IPOID': '10428'}
,
{'IPORateID': '2840', 'ServiceRateID': '9005', 'IPOID': '10510'}
,
{'IPORateID': '2850', 'ServiceRateID': '9005', 'IPOID': '10514'}
,
{'IPORateID': '2860', 'ServiceRateID': '9005', 'IPOID': '10525'}
,
{'IPORateID': '2870', 'ServiceRateID': '9005', 'IPOID': '10542'}
,
{'IPORateID': '2880', 'ServiceRateID': '9005', 'IPOID': '10545'}
,
{'IPORateID': '2890', 'ServiceRateID': '9005', 'IPOID': '10679'}
,
{'IPORateID': '2900', 'ServiceRateID': '9005', 'IPOID': '10680'}
,
{'IPORateID': '2910', 'ServiceRateID': '9005', 'IPOID': '10684'}
,
{'IPORateID': '2920', 'ServiceRateID': '9005', 'IPOID': '10687'}
,
{'IPORateID': '2930', 'ServiceRateID': '9005', 'IPOID': '10952'}
,
{'IPORateID': '2940', 'ServiceRateID': '9005', 'IPOID': '10958'}
,
{'IPORateID': '2950', 'ServiceRateID': '9005', 'IPOID': '10969'}
,
{'IPORateID': '2960', 'ServiceRateID': '9005', 'IPOID': '10974'}
,
{'IPORateID': '2970', 'ServiceRateID': '9005', 'IPOID': '10984'}
,
{'IPORateID': '2980', 'ServiceRateID': '9005', 'IPOID': '10995'}
,
{'IPORateID': '2990', 'ServiceRateID': '9005', 'IPOID': '11256'}
,
{'IPORateID': '3000', 'ServiceRateID': '9005', 'IPOID': '11262'}
,
{'IPORateID': '3010', 'ServiceRateID': '9005', 'IPOID': '11283'}
,
{'IPORateID': '3020', 'ServiceRateID': '9005', 'IPOID': '11285'}
,
{'IPORateID': '3030', 'ServiceRateID': '9005', 'IPOID': '11329'}
,
{'IPORateID': '3040', 'ServiceRateID': '9005', 'IPOID': '11341'}
,
{'IPORateID': '3050', 'ServiceRateID': '9005', 'IPOID': '11342'}
,
{'IPORateID': '3060', 'ServiceRateID': '9005', 'IPOID': '11413'}
,
{'IPORateID': '3070', 'ServiceRateID': '9005', 'IPOID': '11506'}
,
{'IPORateID': '3080', 'ServiceRateID': '9005', 'IPOID': '11510'}
,
{'IPORateID': '3090', 'ServiceRateID': '9005', 'IPOID': '11545'}
,
{'IPORateID': '3100', 'ServiceRateID': '9005', 'IPOID': '11602'}
,
{'IPORateID': '3110', 'ServiceRateID': '9005', 'IPOID': '11650'}
,
{'IPORateID': '3120', 'ServiceRateID': '9005', 'IPOID': '11657'}
,
{'IPORateID': '3130', 'ServiceRateID': '9005', 'IPOID': '11669'}
,
{'IPORateID': '3140', 'ServiceRateID': '9005', 'IPOID': '11681'}
,
{'IPORateID': '3150', 'ServiceRateID': '9005', 'IPOID': '11938'}
,
{'IPORateID': '3160', 'ServiceRateID': '9005', 'IPOID': '12029'}
,
{'IPORateID': '3170', 'ServiceRateID': '9005', 'IPOID': '12049'}
,
{'IPORateID': '3180', 'ServiceRateID': '9005', 'IPOID': '12338'}
,
{'IPORateID': '3190', 'ServiceRateID': '9005', 'IPOID': '12383'}
,
{'IPORateID': '3200', 'ServiceRateID': '9005', 'IPOID': '12428'}
,
{'IPORateID': '3210', 'ServiceRateID': '9005', 'IPOID': '12430'}
,
{'IPORateID': '3220', 'ServiceRateID': '9005', 'IPOID': '12552'}
,
{'IPORateID': '3230', 'ServiceRateID': '9005', 'IPOID': '12555'}
,
{'IPORateID': '3240', 'ServiceRateID': '9005', 'IPOID': '12569'}
,
{'IPORateID': '3250', 'ServiceRateID': '9005', 'IPOID': '12605'}
,
{'IPORateID': '3260', 'ServiceRateID': '9005', 'IPOID': '12606'}
,
{'IPORateID': '3270', 'ServiceRateID': '9005', 'IPOID': '12716'}
,
{'IPORateID': '3280', 'ServiceRateID': '9005', 'IPOID': '12718'}
,
{'IPORateID': '3290', 'ServiceRateID': '9005', 'IPOID': '12719'}
,
{'IPORateID': '3300', 'ServiceRateID': '9005', 'IPOID': '12728'}
,
{'IPORateID': '3310', 'ServiceRateID': '9005', 'IPOID': '12734'}
,
{'IPORateID': '3320', 'ServiceRateID': '9005', 'IPOID': '12766'}
,
{'IPORateID': '3330', 'ServiceRateID': '9005', 'IPOID': '12826'}
,
{'IPORateID': '3340', 'ServiceRateID': '9005', 'IPOID': '12830'}
,
{'IPORateID': '3350', 'ServiceRateID': '9005', 'IPOID': '12880'}
,
{'IPORateID': '3360', 'ServiceRateID': '9005', 'IPOID': '12939'}
,
{'IPORateID': '3370', 'ServiceRateID': '9005', 'IPOID': '12950'}
,
{'IPORateID': '3380', 'ServiceRateID': '9005', 'IPOID': '12955'}
,
{'IPORateID': '3390', 'ServiceRateID': '9005', 'IPOID': '12957'}
,
{'IPORateID': '3400', 'ServiceRateID': '9005', 'IPOID': '12958'}
,
{'IPORateID': '3410', 'ServiceRateID': '9005', 'IPOID': '13018'}
,
{'IPORateID': '3420', 'ServiceRateID': '9005', 'IPOID': '13019'}
,
{'IPORateID': '3430', 'ServiceRateID': '9005', 'IPOID': '13021'}
,
{'IPORateID': '3440', 'ServiceRateID': '9005', 'IPOID': '13022'}
,
{'IPORateID': '3450', 'ServiceRateID': '9005', 'IPOID': '13023'}
,
{'IPORateID': '3460', 'ServiceRateID': '9005', 'IPOID': '13134'}
,
{'IPORateID': '3470', 'ServiceRateID': '9005', 'IPOID': '13807'}
,
{'IPORateID': '3480', 'ServiceRateID': '9005', 'IPOID': '13808'}
,
{'IPORateID': '3490', 'ServiceRateID': '9005', 'IPOID': '13811'}
,
{'IPORateID': '3500', 'ServiceRateID': '9005', 'IPOID': '14118'}
,
{'IPORateID': '3510', 'ServiceRateID': '9005', 'IPOID': '14124'}
,
{'IPORateID': '3520', 'ServiceRateID': '9005', 'IPOID': '14125'}
,
{'IPORateID': '3530', 'ServiceRateID': '9005', 'IPOID': '14131'}
,
{'IPORateID': '3540', 'ServiceRateID': '9005', 'IPOID': '14151'}
,
{'IPORateID': '3550', 'ServiceRateID': '9005', 'IPOID': '14152'}
,
{'IPORateID': '3560', 'ServiceRateID': '9005', 'IPOID': '14226'}
,
{'IPORateID': '3570', 'ServiceRateID': '9005', 'IPOID': '14227'}
,
{'IPORateID': '3580', 'ServiceRateID': '9005', 'IPOID': '14228'}
,
{'IPORateID': '3590', 'ServiceRateID': '9005', 'IPOID': '14434'}
,
{'IPORateID': '3600', 'ServiceRateID': '9005', 'IPOID': '14435'}
,
{'IPORateID': '3610', 'ServiceRateID': '9005', 'IPOID': '14436'}
,
{'IPORateID': '3620', 'ServiceRateID': '9005', 'IPOID': '14484'}
,
{'IPORateID': '3630', 'ServiceRateID': '9005', 'IPOID': '14496'}
,
{'IPORateID': '3640', 'ServiceRateID': '9005', 'IPOID': '14607'}
,
{'IPORateID': '3650', 'ServiceRateID': '9005', 'IPOID': '14613'}
,
{'IPORateID': '3660', 'ServiceRateID': '9005', 'IPOID': '14726'}
,
{'IPORateID': '3670', 'ServiceRateID': '9005', 'IPOID': '14727'}
,
{'IPORateID': '3680', 'ServiceRateID': '9005', 'IPOID': '14729'}
,
{'IPORateID': '3690', 'ServiceRateID': '9005', 'IPOID': '14733'}
,
{'IPORateID': '3700', 'ServiceRateID': '9005', 'IPOID': '14741'}
,
{'IPORateID': '3710', 'ServiceRateID': '9005', 'IPOID': '14742'}
,
{'IPORateID': '3720', 'ServiceRateID': '9005', 'IPOID': '14745'}
,
{'IPORateID': '3730', 'ServiceRateID': '9005', 'IPOID': '14748'}
,
{'IPORateID': '3740', 'ServiceRateID': '9005', 'IPOID': '14780'}
,
{'IPORateID': '3750', 'ServiceRateID': '9005', 'IPOID': '14786'}
,
{'IPORateID': '3760', 'ServiceRateID': '9005', 'IPOID': '14816'}
,
{'IPORateID': '3770', 'ServiceRateID': '9005', 'IPOID': '14840'}
,
{'IPORateID': '3780', 'ServiceRateID': '9005', 'IPOID': '14842'}
,
{'IPORateID': '3790', 'ServiceRateID': '9005', 'IPOID': '14845'}
,
{'IPORateID': '3800', 'ServiceRateID': '9005', 'IPOID': '14846'}
,
{'IPORateID': '3810', 'ServiceRateID': '9005', 'IPOID': '14850'}
,
{'IPORateID': '3820', 'ServiceRateID': '9005', 'IPOID': '14852'}
,
{'IPORateID': '3830', 'ServiceRateID': '9005', 'IPOID': '14987'}
,
{'IPORateID': '3840', 'ServiceRateID': '9005', 'IPOID': '14989'}
,
{'IPORateID': '3850', 'ServiceRateID': '9005', 'IPOID': '15024'}
,
{'IPORateID': '3860', 'ServiceRateID': '9005', 'IPOID': '15025'}
,
{'IPORateID': '3870', 'ServiceRateID': '9005', 'IPOID': '15116'}
,
{'IPORateID': '3880', 'ServiceRateID': '9005', 'IPOID': '15119'}
,
{'IPORateID': '3890', 'ServiceRateID': '9005', 'IPOID': '15120'}
,
{'IPORateID': '3900', 'ServiceRateID': '9005', 'IPOID': '15125'}
,
{'IPORateID': '3910', 'ServiceRateID': '9005', 'IPOID': '15185'}
,
{'IPORateID': '3920', 'ServiceRateID': '9005', 'IPOID': '15231'}
,
{'IPORateID': '3930', 'ServiceRateID': '9005', 'IPOID': '15232'}
,
{'IPORateID': '3940', 'ServiceRateID': '9005', 'IPOID': '15233'}
,
{'IPORateID': '3950', 'ServiceRateID': '9005', 'IPOID': '15416'}
,
{'IPORateID': '3960', 'ServiceRateID': '9005', 'IPOID': '15418'}
,
{'IPORateID': '3970', 'ServiceRateID': '9005', 'IPOID': '15419'}
,
{'IPORateID': '3980', 'ServiceRateID': '9005', 'IPOID': '15420'}
,
{'IPORateID': '3990', 'ServiceRateID': '9005', 'IPOID': '15548'}
,
{'IPORateID': '4000', 'ServiceRateID': '9005', 'IPOID': '15550'}
,
{'IPORateID': '4010', 'ServiceRateID': '9005', 'IPOID': '15551'}
,
{'IPORateID': '4020', 'ServiceRateID': '9005', 'IPOID': '15552'}
,
{'IPORateID': '4030', 'ServiceRateID': '9005', 'IPOID': '15554'}
,
{'IPORateID': '4040', 'ServiceRateID': '9005', 'IPOID': '15727'}
,
{'IPORateID': '4050', 'ServiceRateID': '9005', 'IPOID': '15728'}
,
{'IPORateID': '4060', 'ServiceRateID': '9005', 'IPOID': '15729'}
,
{'IPORateID': '4070', 'ServiceRateID': '9005', 'IPOID': '15730'}
,
{'IPORateID': '4080', 'ServiceRateID': '9005', 'IPOID': '15731'}
,
{'IPORateID': '4090', 'ServiceRateID': '9005', 'IPOID': '15732'}
,
{'IPORateID': '4100', 'ServiceRateID': '9005', 'IPOID': '15733'}
,
{'IPORateID': '4110', 'ServiceRateID': '9005', 'IPOID': '15779'}
,
{'IPORateID': '4120', 'ServiceRateID': '9005', 'IPOID': '15829'}
,
{'IPORateID': '4130', 'ServiceRateID': '9005', 'IPOID': '15830'}
,
{'IPORateID': '4140', 'ServiceRateID': '9005', 'IPOID': '15831'}
,
{'IPORateID': '4150', 'ServiceRateID': '9005', 'IPOID': '15832'}
,
{'IPORateID': '4160', 'ServiceRateID': '9005', 'IPOID': '15833'}
,
{'IPORateID': '4170', 'ServiceRateID': '9005', 'IPOID': '15870'}
,
{'IPORateID': '4180', 'ServiceRateID': '9005', 'IPOID': '15871'}
,
{'IPORateID': '4190', 'ServiceRateID': '9005', 'IPOID': '15872'}
,
{'IPORateID': '4200', 'ServiceRateID': '9005', 'IPOID': '15873'}
,
{'IPORateID': '4210', 'ServiceRateID': '9005', 'IPOID': '15887'}
,
{'IPORateID': '4220', 'ServiceRateID': '9005', 'IPOID': '15934'}
,
{'IPORateID': '4230', 'ServiceRateID': '9005', 'IPOID': '15936'}
,
{'IPORateID': '4240', 'ServiceRateID': '9005', 'IPOID': '15937'}
,
{'IPORateID': '4250', 'ServiceRateID': '9006', 'IPOID': '10574'}
,
{'IPORateID': '4260', 'ServiceRateID': '9006', 'IPOID': '10575'}
,
{'IPORateID': '4270', 'ServiceRateID': '9006', 'IPOID': '10581'}
,
{'IPORateID': '4280', 'ServiceRateID': '9006', 'IPOID': '10593'}
,
{'IPORateID': '4290', 'ServiceRateID': '9006', 'IPOID': '10603'}
,
{'IPORateID': '4300', 'ServiceRateID': '9006', 'IPOID': '10606'}
,
{'IPORateID': '4310', 'ServiceRateID': '9006', 'IPOID': '10611'}
,
{'IPORateID': '4320', 'ServiceRateID': '9006', 'IPOID': '10755'}
,
{'IPORateID': '4330', 'ServiceRateID': '9006', 'IPOID': '10759'}
,
{'IPORateID': '4340', 'ServiceRateID': '9006', 'IPOID': '10760'}
,
{'IPORateID': '4350', 'ServiceRateID': '9006', 'IPOID': '11061'}
,
{'IPORateID': '4360', 'ServiceRateID': '9006', 'IPOID': '11062'}
,
{'IPORateID': '4370', 'ServiceRateID': '9006', 'IPOID': '11063'}
,
{'IPORateID': '4380', 'ServiceRateID': '9006', 'IPOID': '11066'}
,
{'IPORateID': '4390', 'ServiceRateID': '9006', 'IPOID': '11093'}
,
{'IPORateID': '4400', 'ServiceRateID': '9006', 'IPOID': '11097'}
,
{'IPORateID': '4410', 'ServiceRateID': '9006', 'IPOID': '11115'}
,
{'IPORateID': '4420', 'ServiceRateID': '9006', 'IPOID': '11168'}
,
{'IPORateID': '4430', 'ServiceRateID': '9006', 'IPOID': '11169'}
,
{'IPORateID': '4440', 'ServiceRateID': '9006', 'IPOID': '11170'}
,
{'IPORateID': '4450', 'ServiceRateID': '9006', 'IPOID': '11171'}
,
{'IPORateID': '4460', 'ServiceRateID': '9006', 'IPOID': '11172'}
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
     await queryInterface.bulkDelete('iporates', null, {});
  }
}; 
