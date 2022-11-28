
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('workorders',[

{'WorkOrderID': '1698', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2019-01-01', 'WorkOrderDescription': 'To track Family Medical Leave of Absence', 'StartDate': '2019-01-01', 'DueDate': '2020-01-01', 'ClosedDate': '2020-02-03', 'Notes': 'Continuous WO', 'ProjectName': ' do not close', None: ['FMLA']}
,
{'WorkOrderID': '1699', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '2016-01-01', 'DueDate': '2016-12-31', 'ClosedDate': '2016-12-31', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': 'Meetings (P&M) FY16'}
,
{'WorkOrderID': '1700', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '2016-01-01', 'DueDate': '2016-12-31', 'ClosedDate': '2016-12-31', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY16'}
,
{'WorkOrderID': '1701', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '2016-01-01', 'DueDate': '2016-12-31', 'ClosedDate': '2016-12-31', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY16'}
,
{'WorkOrderID': '1702', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '2016-01-01', 'DueDate': '2016-12-31', 'ClosedDate': '2016-12-31', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY16'}
,
{'WorkOrderID': '1703', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '2016-01-01', 'DueDate': '2016-12-31', 'ClosedDate': '2016-12-31', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY16'}
,
{'WorkOrderID': '1704', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '2016-01-01', 'DueDate': '2016-12-31', 'ClosedDate': '2016-12-31', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY16'}
,
{'WorkOrderID': '1705', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '2017-01-01', 'DueDate': '2017-06-30', 'ClosedDate': '2017-06-30', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': 'Meetings (P&M) FY17'}
,
{'WorkOrderID': '1706', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '2017-01-01', 'DueDate': '2017-06-30', 'ClosedDate': '2017-06-30', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY17'}
,
{'WorkOrderID': '1707', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '2017-01-01', 'DueDate': '2017-06-30', 'ClosedDate': '2017-06-30', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY17'}
,
{'WorkOrderID': '1708', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '2017-01-01', 'DueDate': '2017-06-30', 'ClosedDate': '2017-06-30', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY17'}
,
{'WorkOrderID': '1709', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '2017-01-01', 'DueDate': '2017-06-30', 'ClosedDate': '2017-06-30', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY17'}
,
{'WorkOrderID': '1710', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '2017-01-01', 'DueDate': '2017-06-30', 'ClosedDate': '2017-06-30', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY17'}
,
{'WorkOrderID': '1711', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '2017-07-01', 'DueDate': '2018-06-30', 'ClosedDate': '2018-06-30', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': 'Meetings (P&M) FY18'}
,
{'WorkOrderID': '1712', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '2017-07-01', 'DueDate': '2018-06-30', 'ClosedDate': '2018-06-30', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY18'}
,
{'WorkOrderID': '1713', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '2017-07-01', 'DueDate': '2018-06-30', 'ClosedDate': '2018-06-30', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY18'}
,
{'WorkOrderID': '1714', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '2017-07-01', 'DueDate': '2018-06-30', 'ClosedDate': '2018-06-30', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY18'}
,
{'WorkOrderID': '1715', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '2017-07-01', 'DueDate': '2018-06-30', 'ClosedDate': '2018-06-30', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY18'}
,
{'WorkOrderID': '1716', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '2017-07-01', 'DueDate': '2018-06-30', 'ClosedDate': '2018-06-30', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY18'}
,
{'WorkOrderID': '1717', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '2018-07-01', 'DueDate': '2019-06-30', 'ClosedDate': '2019-07-06', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': None}
,
{'WorkOrderID': 'Created in error.  Not necessary.', 'EmployeeID': 'Meetings (P&M) FY19', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1718', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '2018-07-01', 'DueDate': '2019-06-30', 'ClosedDate': '2019-07-06', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY19'}
,
{'WorkOrderID': '1719', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '2018-07-01', 'DueDate': '2019-06-30', 'ClosedDate': '2019-07-06', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY19'}
,
{'WorkOrderID': '1720', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '2018-07-01', 'DueDate': '2019-06-30', 'ClosedDate': '2019-07-06', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY19'}
,
{'WorkOrderID': '1721', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '2018-07-01', 'DueDate': '2019-06-30', 'ClosedDate': '2019-07-06', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY19'}
,
{'WorkOrderID': '1722', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '2018-07-01', 'DueDate': '2019-06-30', 'ClosedDate': '2019-07-06', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY19'}
,
{'WorkOrderID': '1723', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-04-12', 'WorkOrderDescription': '', 'StartDate': '2006-04-12', 'DueDate': '2006-04-26', 'ClosedDate': '2006-04-26', 'Notes': '<! 2006-04-12 09:26:26 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>i started this but nothing is done yet.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>I took a nap today.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-08-30 12:37:15 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '8/29/2007 per Liz Crouse', 'EmployeeID': ' this was cancelled.', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'ChartViewer programming in ArcMap', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1724', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-04-12', 'WorkOrderDescription': '', 'StartDate': '2006-04-12', 'DueDate': '2006-04-14', 'ClosedDate': '2006-04-14', 'Notes': '<! 2006-04-12 07:46:11 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'John wants us to modify his Illustrator  files for his new Insar web page. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-04-12 09:57:46 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'John wants an HTML web page designed to post on the web using his AI mockup.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-04-', 'EmployeeID': 'Design Insar web page', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1725', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-04-12', 'WorkOrderDescription': '', 'StartDate': '2005-04-12', 'DueDate': '2005-04-12', 'ClosedDate': '2005-04-12', 'Notes': 'Dead number', 'ProjectName': 'Dead Number'}
,
{'WorkOrderID': '1726', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-04-19', 'WorkOrderDescription': '', 'StartDate': '2006-04-19', 'DueDate': '2006-04-21', 'ClosedDate': '2006-04-21', 'Notes': '<! 2006-05-03 09:28:52 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>layout list of sponsors and scholarship recipients with nice graphic of Mackay statue then plot and mount on foam core</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Two hours spent cartographic services</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'MSESE Scholarship and Sponsors poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1727', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-05-03', 'WorkOrderDescription': '', 'StartDate': '2006-05-03', 'DueDate': '2006-05-31', 'ClosedDate': '2006-05-31', 'Notes': '<! 2006-05-03 11:55:04 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'Scan/edit/print at high quality 32 aerial photos for mappers', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Stockton Well Quad air photos', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1728', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-05-08', 'WorkOrderDescription': '', 'StartDate': '2006-05-08', 'DueDate': '2007-05-08', 'ClosedDate': '2007-05-08', 'Notes': '<! 2006-05-08 09:15:07 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>typeset and publish</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-27 11:04:17 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'drafts reviewed by Dick 7/25', 'EmployeeID': ' drafts reviewed by Jon 7/26', 'CustomerID': ' to Copy Center 7/27', 'PriorityID': '', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-14 11:20:57 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'received 8/10/06', 'EmployeeID': '', 'CustomerID': 'Major Mines 2005 SP P-17', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1729', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-05-16', 'WorkOrderDescription': '', 'StartDate': '2006-05-16', 'DueDate': '2006-05-31', 'ClosedDate': '2006-05-31', 'Notes': '<! 2006-05-16 10:37:38 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare figures for PowerPoint&nbsp;presentation&nbsp;from NV Fault Map and Pyramid Lake&nbsp;map that Gary is preparing. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-05-17 10:11:29 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Changed color of lines and added new shapefil', 'EmployeeID': 'Figures for PPT presentation', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1730', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-05-11', 'WorkOrderDescription': '', 'StartDate': '2006-05-11', 'DueDate': '2006-06-30', 'ClosedDate': '2006-06-30', 'Notes': '<! 2006-05-17 07:15:40 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Support on 3D mapping and assistance to Mark Walker&#39;s students involved with research on a small pond in the South Lake Tahoe area of the influence of Dog poop draining into this pond. He is asking for GIS Support in mapp', 'EmployeeID': 'Dog Poop project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1731', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-05-17', 'WorkOrderDescription': '', 'StartDate': '2006-05-17', 'DueDate': '2006-06-06', 'ClosedDate': '2006-06-06', 'Notes': '<! 2006-05-17 09:35:06 glj >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Download from the web the data and organize the data on a CD</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-05 14:40:54 pattiw >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (maintenance)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'OF 06-4 Creat a CD for The Timing and Evolution of Cenozoic Extensional Normal Faulting in Southern Tobin Range', 'CustomerID': ' pershing County', 'PriorityID': ' Nevada', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1732', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-05-18', 'WorkOrderDescription': '', 'StartDate': '2006-05-18', 'DueDate': '2007-05-18', 'ClosedDate': '2007-05-18', 'Notes': '<! 2006-05-18 09:23:10 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Geology map', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-08 10:36:11 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Final draft of text to Dick 8/8', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-05 15:10:06 pattiw >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from Map Creation to Maps per L Crouse (maintenance)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Sant Renia Fields Quad geology map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1733', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-05-23', 'WorkOrderDescription': '', 'StartDate': '2006-05-23', 'DueDate': '2006-05-26', 'ClosedDate': '2006-05-26', 'Notes': '<! 2006-05-23 08:53:42 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Export faults for the Nixon &amp; Wadsorth maps to a single shapefile. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-05-23 08:55:53 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Liz exported her Nixon faults and put in the Nixon_Wadsworth --&gt; FAULTSONLY folder on the L driv', 'EmployeeID': 'Nixon & Wadsworth faults', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1734', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-05-30', 'WorkOrderDescription': '', 'StartDate': '2006-05-30', 'DueDate': '2006-06-02', 'ClosedDate': '2006-06-02', 'Notes': '<! 2006-05-30 10:29:11 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Put together poster using Jon&#39;s guidelines and files provided. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-30 14:25:06 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>File is out on web', 'EmployeeID': ' and Charlotte as sent out an email release', 'CustomerID': ' but keeping work order open until we', 'PriorityID': 'Poster for Division of Minerals - White Pine County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1735', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-05-31', 'WorkOrderDescription': '', 'StartDate': '2006-05-31', 'DueDate': '2007-05-31', 'ClosedDate': '2007-05-31', 'Notes': '<! 2006-05-31 11:14:09 glj >', 'ProjectName': None}
,
{'WorkOrderID': '<P>GIS data editing and management of data.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Data is located on the Library Geothermal &#34;T&#34; drive.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-06-06 08:19:51 glj >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2 account numbers are&#58;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1320 114 1668</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1320 11', 'EmployeeID': 'Geothermal GIS project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1736', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-06-13', 'WorkOrderDescription': '', 'StartDate': '2006-06-13', 'DueDate': '2006-08-25', 'ClosedDate': '2006-08-25', 'Notes': '<! 2006-06-12 11:14:45 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'typeset and print', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-13 12:14:36 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '.pdf files to Copy Center 1-17-07', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-13 12:16:18 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>draft approved 2-7-07</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-13 12:20:42 jhursh /*EC*', 'EmployeeID': 'The Nevada Mineral Industry 2005', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1737', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-06-13', 'WorkOrderDescription': '', 'StartDate': '2006-06-13', 'DueDate': '2006-07-01', 'ClosedDate': '2006-07-01', 'Notes': '<! 2006-06-12 11:43:07 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Make edits and print 40 copies in color', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-15 12:30:50 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Approved by Dick 6/15', 'EmployeeID': ' to Kinko&#39;s 6/15', 'CustomerID': '</P>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-07 10:32:16 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Proof made 6/14', 'EmployeeID': ' approved by Jon ', 'CustomerID': 'NPS Field Trip Guide', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1738', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-06-12', 'WorkOrderDescription': '', 'StartDate': '2006-06-12', 'DueDate': '2006-07-12', 'ClosedDate': '2006-07-12', 'Notes': '<! 2006-06-13 07:29:08 glj >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Convert Illustrator file to GIS Layers. Original Illustrator files found on NBMG PUB Zip disk # 1.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Data is on Library drive&#92;statemap&#92;2006&#92;0498_Reveille</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Gary set folders', 'EmployeeID': 'State Map Project (Reveille Map 104)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1739', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-06-20', 'WorkOrderDescription': '', 'StartDate': '2006-06-20', 'DueDate': '2006-07-20', 'ClosedDate': '2006-07-20', 'Notes': '<! 2006-06-20 08:43:13 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert Illustrator file to GIS Layers', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 14:40:06 pattiw /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (maintenance)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-08-31 14:21:57 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Project cancelled.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map Map 106 Fire Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1740', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-06-20', 'WorkOrderDescription': '', 'StartDate': '2006-06-20', 'DueDate': '2006-06-30', 'ClosedDate': '2006-06-30', 'Notes': '<! 2006-06-20 10:21:07 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Design poster using ArcView generated maps', 'EmployeeID': ' captions and tables&nbsp;provided by Ron', 'CustomerID': ' etc.&nbsp;that is similar to the White Pine County Poster (w/o # 1734)', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-22 14:42:27 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1st draft comp', 'EmployeeID': 'Poster for Division of Minerals - Pershing County', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1741', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-06-20', 'WorkOrderDescription': '', 'StartDate': '2006-06-20', 'DueDate': '2006-06-30', 'ClosedDate': '2006-06-30', 'Notes': '<! 2006-06-20 10:23:31 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Design poster using ArcView generated maps', 'EmployeeID': ' captions', 'CustomerID': ' &amp; tables provided by Ron', 'PriorityID': ' etc. that is similar to the White Pine County poster (w/o # 1734)', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-22 14:41:42 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1st draft complete', 'EmployeeID': 'Poster for Division of Minerals - Lyon County', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1742', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-06-19', 'WorkOrderDescription': '', 'StartDate': '2006-06-19', 'DueDate': '2006-06-30', 'ClosedDate': '2006-06-30', 'Notes': '<! 2006-06-21 16:37:30 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'register mining claims to the Township and Range information', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 15:09:46 pattiw /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from Map Creation to Maps per L Crouse (maintenance)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-02-14 11:24:43 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Eureka County Mining Claims location map for MSESE', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1743', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-07-03', 'WorkOrderDescription': '', 'StartDate': '2006-07-03', 'DueDate': '2006-07-30', 'ClosedDate': '2006-07-30', 'Notes': '<! 2006-07-03 08:44:49 glj >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Convert Illustrator file to GIS layers for State Map 2006', 'EmployeeID': '</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Files are located on gary12/D-drive/workspace/655Castle Mountain</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-05 14:39:44 pattiw >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data ', 'EmployeeID': 'State Map 2006 - Map 108 Castle Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1744', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-07-05', 'WorkOrderDescription': '', 'StartDate': '2006-07-05', 'DueDate': '2006-08-01', 'ClosedDate': '2006-08-01', 'Notes': '<! 2006-07-05 10:19:26 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'Edit and print 80 aerial photographs', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Lahontan Mountains statemap 2006', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1745', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-07-12', 'WorkOrderDescription': '', 'StartDate': '2006-07-12', 'DueDate': '2006-07-12', 'ClosedDate': '2006-07-12', 'Notes': '<! 2006-07-12 11:23:57 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'scan text for Map 101 and Map 105 and create .pdf', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-13 16:11:33 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'to Dick 7/12/06', 'EmployeeID': ' done. Archived 7/13/06.', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-07-13 16:27:02 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Archived on CD218 and BCD218</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Map 101 and M105 text to .pdf', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1746', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-07-14', 'WorkOrderDescription': '', 'StartDate': '2006-07-14', 'DueDate': '2006-08-14', 'ClosedDate': '2006-08-14', 'Notes': '<! 2006-07-14 11:07:16 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Retrieve information from publications so D.D. Lapointe can develop Earthcache activity', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-14 11:08:07 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Information on several topics e-mailed to D.D. 7/14/06', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-14 11:25:26', 'EmployeeID': 'Earthcache information for DD', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1747', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-07-25', 'WorkOrderDescription': '', 'StartDate': '2006-07-25', 'DueDate': '2006-08-25', 'ClosedDate': '2006-08-25', 'Notes': '<! 2006-07-25 15:17:21 glj >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Initial data folder is found on the Library drive&#92;statemap&#92;2006&#92;0820MormanJackPass</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-05 14:39:19 pattiw >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (mainte', 'EmployeeID': 'State Map 2006 (Morman Jack Pass)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1748', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-07-25', 'WorkOrderDescription': '', 'StartDate': '2006-07-25', 'DueDate': '2006-08-25', 'ClosedDate': '2006-08-25', 'Notes': '<! 2006-07-25 15:19:32 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Data located on the Library drive', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 14:38:59 pattiw /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (maintenance)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-08-31 14:23:18 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Project cancelled.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 (Mount Moriah_', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1749', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-07-25', 'WorkOrderDescription': '', 'StartDate': '2006-07-25', 'DueDate': '2006-08-25', 'ClosedDate': '2006-08-25', 'Notes': '<! 2006-07-25 15:21:53 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Data located on the Library drive', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-05 14:38:38 pattiw >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to&nbsp;GIS_Services per L Crouse (maintenance)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 (FS 20 Little Horse Canyon)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1750', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-08-08', 'WorkOrderDescription': '', 'StartDate': '2006-08-08', 'DueDate': '2007-08-08', 'ClosedDate': '2007-08-08', 'Notes': '<! 2006-08-08 10:40:18 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert the following publications to .pdf form for the web&#58; FS-16 text', 'EmployeeID': ' FS-17 text', 'CustomerID': ' B110', 'PriorityID': ' R49', 'StatusID': ' SP33 IM proceedings', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-08 11:46:46 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'and B111', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-04-02 12:06:28 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>B110', 'EmployeeID': ' B1', 'CustomerID': 'Convert older pubs to .pdf', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1751', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-08-09', 'WorkOrderDescription': '', 'StartDate': '2006-08-09', 'DueDate': '2007-08-09', 'ClosedDate': '2007-08-09', 'Notes': '<! 2006-08-09 15:04:09 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>reprint estimates on NPS4', 'EmployeeID': ' 6', 'CustomerID': ' 8', 'PriorityID': ' 9', 'StatusID': ' 12', 'SubmittedDate': '13', 'WorkOrderDescription': '16', 'StartDate': ' and Field trip guidebook</P>', 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-04-23 08:57:54 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'received from Copy Center 1-4-07', 'EmployeeID': ' all copies made from hard copy originals', 'CustomerID': ' no digital archive', 'PriorityID': ' done.', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Nevada Petroleum Society reprints', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1752', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-08-09', 'WorkOrderDescription': '', 'StartDate': '2006-08-09', 'DueDate': '2007-08-09', 'ClosedDate': '2007-08-09', 'Notes': '<! 2006-08-09 15:22:52 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>reformat word file into a table for publishing</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-16 10:30:19 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'draft to John Bell 8/11/06', 'EmployeeID': ' approved by John 8/14/06', 'CustomerID': ' .pdf to John 8/14/06', 'PriorityID': ' done.', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-05 15:10:39 pattiw >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Chan', 'EmployeeID': 'John Bell Mono-Inyo Craters radiocarbon data', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1753', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-08-11', 'WorkOrderDescription': '', 'StartDate': '2006-08-11', 'DueDate': '2006-09-08', 'ClosedDate': '2006-09-08', 'Notes': '<! 2006-08-11 14:27:24 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'layout poster 4&#39;x8&#39;', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-02-14 11:26:34 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'to Lisa 8/21/06', 'EmployeeID': ' done.', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Great Basin Center for Geothermal Energy poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1754', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-08-14', 'WorkOrderDescription': '', 'StartDate': '2006-08-14', 'DueDate': '2006-09-14', 'ClosedDate': '2006-09-14', 'Notes': '<! 2006-08-15 07:44:44 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Create a digital page sized map for the selected area from the USGS MF-2260 Monte Cristo Range geologic map on a 1&#58;24', 'EmployeeID': '000 base.&nbsp; Scan and redigitize the geology.&nbsp; Place lat/long and or UTM grid ticks.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prepare map of Monte Cristo Range/Blair Junction for EarthCache', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1755', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-08-15', 'WorkOrderDescription': '', 'StartDate': '2006-08-15', 'DueDate': '2006-09-15', 'ClosedDate': '2006-09-15', 'Notes': '<! 2006-08-15 07:46:49 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert the Geothermal map M141 to ArcGIS using excel files attached to email 08/14/06 from Lisa. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 15:08:52 pattiw /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from Map Update to Maps per L Crouse (maintenanc', 'EmployeeID': 'Convert M141 to ArcMap', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1756', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-08-29', 'WorkOrderDescription': '', 'StartDate': '2006-08-29', 'DueDate': '2006-10-15', 'ClosedDate': '2006-10-15', 'Notes': '<! 2006-08-29 08:08:33 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'The old geology on the Ivanpah Valley area individual 24', 'EmployeeID': '000 geologic maps that are OF needs to be replaced with the geology in the Ivanpah_u83_final.mdb from the Library drive in Kyle_House/Ivanpah_Project', 'CustomerID': ' using the same', 'PriorityID': 'Replace geology in 24K Ivanpah area OF maps', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1757', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-08-15', 'WorkOrderDescription': '', 'StartDate': '2006-08-15', 'DueDate': '2006-09-15', 'ClosedDate': '2006-09-15', 'Notes': '<! 2006-08-29 08:17:06 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Charge $38 per hour.&nbsp; Waiting for Linda Newman to get a better scan from Storey County original', 'EmployeeID': ' then I need to georeference it and perhaps reprint it.&nbsp; Tiffany has already scanned&nbsp;(per John&#39;s first requ', 'CustomerID': 'Georeference John Benips map of Virginia Gold Hill and Devils Gate mining district', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1758', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-08-10', 'WorkOrderDescription': '', 'StartDate': '2006-08-10', 'DueDate': '2006-09-07', 'ClosedDate': '2006-09-07', 'Notes': '<! 2006-08-29 08:38:20 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Need to convert STATEMAP figures to GIS.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 proposal figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1759', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-08-29', 'WorkOrderDescription': '', 'StartDate': '2006-08-29', 'DueDate': '2006-09-06', 'ClosedDate': '2006-09-06', 'Notes': '<! 2006-08-29 08:50:05 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>from goldfield area in nye county into esmeralda and mineral county vicinity of hawthorne.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>any plans to convert&nbsp;1 x 2 degree sheets of walker&nbsp;and tonopah USGS pubs to digital to clean it u', 'EmployeeID': 'Nevada State Geologic map --OF first??', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1760', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-08-09', 'WorkOrderDescription': '', 'StartDate': '2006-08-09', 'DueDate': '2006-09-01', 'ClosedDate': '2006-09-01', 'Notes': '<! 2006-08-29 09:21:01 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'I am going to need the following digital orthoquad airphotos &nbsp;for &nbsp;&nbsp;the &nbsp;Jerritt Project to cover the extremities of the map area', 'EmployeeID': ' &nbsp;&nbsp;which the &nbsp;mine&#39;s &nbsp;orthophoto does not cover.', 'CustomerID': 'Jerritt Canyon DOQQs reprojected to Jerritt Grid', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1761', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-08-08', 'WorkOrderDescription': '', 'StartDate': '2006-08-08', 'DueDate': '2006-09-01', 'ClosedDate': '2006-09-01', 'Notes': '<! 2006-08-29 09:27:38 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Liz', 'EmployeeID': '<BR><BR>A month or so ago', 'CustomerID': ' John Bell asked you to scan a copy of an old map of the Lahontan Mtn area. We need to have that map georeferenced to use in our Lahontan Mtn map project. Could you evalute the quality of the ', 'PriorityID': 'georeference Carson Lake 15 Quad', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1762', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-08-01', 'WorkOrderDescription': '', 'StartDate': '2006-08-01', 'DueDate': '2006-09-07', 'ClosedDate': '2006-09-07', 'Notes': '<! 2006-08-29 09:32:18 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Put together the digitizing Priority 2 portion of the STATEMAP 2007 proposal due Nov 2', 'EmployeeID': ' 2006.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Figure out how much per map.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Find out how much we can use for match.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Find out how many maps.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Find', 'EmployeeID': 'STATEMAP 2007 proposal digitizing project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1763', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-08-30', 'WorkOrderDescription': '', 'StartDate': '2006-08-30', 'DueDate': '2006-10-15', 'ClosedDate': '2006-10-15', 'Notes': '<! 2006-08-29 09:39:12 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Put together the outline by October 15th.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-05 14:35:29 pattiw >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Changed Services Required from Journal Article to Figures per L Crouse (maintenance)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'NBMG Cartographic procedure manual OF', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1764', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-08-09', 'WorkOrderDescription': '', 'StartDate': '2006-08-09', 'DueDate': '2006-09-01', 'ClosedDate': '2006-09-01', 'Notes': '<! 2006-08-29 09:47:20 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Ask Jon about&#58; getting a bigger hard drive<BR>for the &#34;Rocket Scanner Controller; upgrading the &#34;Scanner 3&#34; (Tanya&#39;s)<BR>computer; upgrading &#34;Scanner 2&#34; (Marli&#39;s old computer) and giving ', 'EmployeeID': 'Upgrade computer equipment for Scanning Project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1765', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-08-22', 'WorkOrderDescription': '', 'StartDate': '2006-08-22', 'DueDate': '2006-09-15', 'ClosedDate': '2006-09-15', 'Notes': '<! 2006-08-29 09:48:34 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Would anyone in Cartography have time to lighten the background on our file for OF96-6', 'EmployeeID': ' Oil and gas map? If not', 'CustomerID': ' we will just wait. The map used to have a white background and now the copy we print from the Web (no', 'PriorityID': ' not on', 'StatusID': 'Lighten background for OF96-6 Oil and Gas map', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1766', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-08-18', 'WorkOrderDescription': '', 'StartDate': '2006-08-18', 'DueDate': '2008-04-15', 'ClosedDate': '2008-04-15', 'Notes': '<! 2006-08-29 09:53:33 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Committee will determine which maps/themes to include.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Jack and I are on a hunt for a price estimate.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Bear can do hardcover binding/printing.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Meeting 8/30/06 9am-10&#58;30am 401 SEM.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Will hav', 'EmployeeID': 'Nevada Atlas Book project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1767', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-08-01', 'WorkOrderDescription': '', 'StartDate': '2006-08-01', 'DueDate': '2006-09-15', 'ClosedDate': '2006-09-15', 'Notes': '<! 2006-08-29 09:58:48 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Had meeting with Jon to discuss how to reprint vs. photocopy.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Decided to reprint with Bear', 'EmployeeID': ' 4000 copies.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Getting&nbsp;detailed bid&nbsp;from Bear for reprinting B111.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-2', 'EmployeeID': 'Bulletin 111 Carlin Reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1768', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2005-07-30', 'WorkOrderDescription': '', 'StartDate': '2005-07-30', 'DueDate': '2005-08-15', 'ClosedDate': '2005-08-15', 'Notes': '<! 2006-09-01 08:51:05 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>-Put Kristen&#39;s word doc of State Micrographics CDs into Access and create a look-up form for QAers to use.&nbsp; They use it for look ups only', 'EmployeeID': ' no additions or edits.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>-Access .mdb file (complet', 'EmployeeID': 'State Micrographics Look-Up Form', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1769', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-03-01', 'WorkOrderDescription': '', 'StartDate': '2006-03-01', 'DueDate': '2006-06-01', 'ClosedDate': '2006-06-01', 'Notes': '<! 2006-09-01 09:10:29 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>-Put Marli&#39;s word docs into Access &amp; create a system for Tiffany to track her backups with least amount of possibility for error.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>-.mdb file on Tiffany&#39;s computer.&nbsp; Tiffany is the ', 'EmployeeID': 'Flat File CD Backups Database (MD_Backups)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1770', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2005-07-30', 'WorkOrderDescription': '', 'StartDate': '2005-07-30', 'DueDate': '2006-08-01', 'ClosedDate': '2006-08-01', 'Notes': '<! 2006-09-01 09:23:31 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>-Move Kristen&#39;s spreadsheet to Access - eventually tie in GEOINDEX.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>-.mdb file given to Kristen 7/14 and documentation given to KS', 'EmployeeID': ' MH &amp; LC.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-09-01 09:27:22 mauldin /*EC*', 'EmployeeID': 'QA progress Database (MD_QAprog)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1771', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-08-01', 'WorkOrderDescription': '', 'StartDate': '2006-08-01', 'DueDate': '2006-09-01', 'ClosedDate': '2006-09-01', 'Notes': '<! 2006-09-01 09:39:26 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>-move PCfile GEOINDEX to Access so Martha can more easily QA &amp; make revisions to DB.&nbsp; After Martha is done', 'EmployeeID': ' Access DB will go back to PCFile for Kristen to finish updates.&nbsp; Later', 'CustomerID': ' after Kristen is done', 'PriorityID': '&n', 'StatusID': 'GEOINDEX (PCfile) moved to Access temporarily', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1772', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2005-08-01', 'WorkOrderDescription': '', 'StartDate': '2005-08-01', 'DueDate': '2007-08-01', 'ClosedDate': '2007-08-01', 'Notes': '<! 2006-09-01 11:01:51 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>-Move SCANs.xls to Access for CD backup tracking of mining district files (separate from Flat Files and Folded Flat Maps).&nbsp; Eventually combine with MD_CDbackups.mdb when we have a server. SCANs.xls is very messy..', 'EmployeeID': 'SCANs spreadsheet to Access', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1773', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-09-06', 'WorkOrderDescription': '', 'StartDate': '2006-09-06', 'DueDate': '2006-10-31', 'ClosedDate': '2006-10-31', 'Notes': '<! 2006-09-06 11:26:17 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare north half of the Searchlight Quadrangle for Oct. 31', 'EmployeeID': ' 2006&nbsp; deliverable (STATEMAP 2005).&nbsp; Linework submitted on mylar. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-11-01 06:44:12 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Inset linework and labels subm', 'EmployeeID': 'STATEMAP 2005 - North Half of Searchlight Quadrangle', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1774', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-09-07', 'WorkOrderDescription': '', 'StartDate': '2006-09-07', 'DueDate': '2006-10-07', 'ClosedDate': '2006-10-07', 'Notes': '<! 2006-09-08 08:09:20 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Prepare map of Reno &amp; Walker Lake 1&#58;250', 'EmployeeID': '000 topos with faults &amp; seismicity&nbsp;that Craig provides; prepare figure(s) to go with map</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-09-12 10:46:21 mauldin >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Never rec&#39;d anything from auth', 'EmployeeID': 'Reno/Walker Lake map and figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1775', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-09-07', 'WorkOrderDescription': '', 'StartDate': '2006-09-07', 'DueDate': '2006-09-07', 'ClosedDate': '2006-09-07', 'Notes': 'Dead number', 'ProjectName': 'Dead Number'}
,
{'WorkOrderID': '1776', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-10-10', 'WorkOrderDescription': '', 'StartDate': '2006-10-10', 'DueDate': '2006-10-17', 'ClosedDate': '2006-10-17', 'Notes': '<! 2006-10-10 12:26:12 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Slides for Powerpoint for Al Coyner</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-12 14:58:55 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Nine figures e-mailed to Al Coyner 10/12/06', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-11-07 10:36:07 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'created several more MI slides for Al Coyner 11/6', 'EmployeeID': ' se', 'CustomerID': 'MI Slides 2005', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1777', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-10-11', 'WorkOrderDescription': '', 'StartDate': '2006-10-11', 'DueDate': '2007-10-20', 'ClosedDate': '2007-10-20', 'Notes': '<! 2006-10-18 08:06:15 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Ron gave files to Jennifer on L drive on 10/18/06; Heather working on project.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-18 15:32:08 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Heather worked on poster for 3.5 hrs', 'EmployeeID': ' had problems with files and passed project back', 'CustomerID': 'Roadless poster for Div. of Minerals', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1778', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-10-11', 'WorkOrderDescription': '', 'StartDate': '2006-10-11', 'DueDate': '2006-11-11', 'ClosedDate': '2006-11-11', 'Notes': '<! 2006-10-18 13:00:00 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise w/o 1297 figure', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-10-18 14:40:36 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Reviewed', 'EmployeeID': ' approved', 'CustomerID': ' and delivered to Craig 10/18/06', 'PriorityID': ' done.', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Historical and Prehistoric EQs in the Reno area Craig dePolo', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1779', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-11-02', 'WorkOrderDescription': '', 'StartDate': '2006-11-02', 'DueDate': '2006-11-30', 'ClosedDate': '2006-11-30', 'Notes': '<! 2006-11-02 08:52:46 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Revamp GBCGE brochure.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Peggy Brown brought Microsoft Publisher file of brochure on thumb drive 10/20/06;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>In prog...</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-11-02 09:00:04 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'needed', 'EmployeeID': 'GBCGE Brochure', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1780', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2005-11-30', 'WorkOrderDescription': '', 'StartDate': '2005-11-30', 'DueDate': '2006-11-30', 'ClosedDate': '2006-11-30', 'Notes': '<! 2006-11-06 13:40:34 arrittc >', 'ProjectName': None}
,
{'WorkOrderID': 'STATEMAP 2005 North half of the Jerritt Canyon Mining District', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'StateMap 2005 Jerritt Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1781', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2005-11-30', 'WorkOrderDescription': '', 'StartDate': '2005-11-30', 'DueDate': '2006-11-30', 'ClosedDate': '2006-11-30', 'Notes': '<! 2006-11-06 13:51:10 arrittc >', 'ProjectName': None}
,
{'WorkOrderID': 'StateMap 2005 Full Seven Lakes Mountain quad geologic map', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'StateMap 2005 Seven Lakes Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1782', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-02-01', 'WorkOrderDescription': '', 'StartDate': '2007-02-01', 'DueDate': '2007-04-01', 'ClosedDate': '2007-04-01', 'Notes': '<! 2006-11-07 10:51:48 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Hans-Peter Plag bulletin on Geodetic Infrastructure', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-11-07 10:52:48 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Specs faxed to Bear 11/7/06.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-02 08:41:06 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Faxed Bear updated specs to obtain more acc', 'EmployeeID': 'Geodetic Infrastructure Bulletin 112', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1783', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-11-08', 'WorkOrderDescription': '', 'StartDate': '2006-11-08', 'DueDate': '2006-12-08', 'ClosedDate': '2006-12-08', 'Notes': '<! 2006-11-08 11:19:27 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Recover PageMaker file from 1997 and resave it in Word so that Paul can make edits for reprint. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Gold from Water SP22', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1784', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-11-08', 'WorkOrderDescription': '', 'StartDate': '2006-11-08', 'DueDate': '2006-11-08', 'ClosedDate': '2006-11-08', 'Notes': 'Dead number', 'ProjectName': 'Dead Number'}
,
{'WorkOrderID': '1785', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-12-05', 'WorkOrderDescription': '', 'StartDate': '2006-12-05', 'DueDate': '2007-03-31', 'ClosedDate': '2007-03-31', 'Notes': '<! 2006-12-05 09:44:24 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Develop database system for tracking aerial photo scans', 'EmployeeID': ' set up like Mining District CD index;', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2006-12-05 16:35:08 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Discussed w/Kristen what fields and formats for fields/form she would like 1', 'EmployeeID': 'Aerial Photo CD Index', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1786', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2006-12-05', 'WorkOrderDescription': '', 'StartDate': '2006-12-05', 'DueDate': '2007-01-31', 'ClosedDate': '2007-01-31', 'Notes': '<! 2006-12-05 11:58:01 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Text copied from SP19 and e-mailed to Caia Cupito to use for a Mt. Rose scenic byway proposal.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Caia Cupito</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Natural Light</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>174 Eastbrook Way</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Ashland', 'EmployeeID': ' OR </P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>caia', 'EmployeeID': 'Mt. Rose scenic byway information from SP19 to Caia Cupito', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1787', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-12-10', 'WorkOrderDescription': '', 'StartDate': '2006-12-10', 'DueDate': '2006-12-24', 'ClosedDate': '2006-12-24', 'Notes': '<! 2006-12-05 12:05:18 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'typeset sign', 'EmployeeID': ' print', 'CustomerID': ' mount on foam core', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2006-12-08 09:24:29 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'To Connie Parratt 12/7/06', 'EmployeeID': ' done. 2 Hours', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'MSESE banquet sign for Connie Parratt', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1788', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-12-15', 'WorkOrderDescription': '', 'StartDate': '2006-12-15', 'DueDate': '2007-01-30', 'ClosedDate': '2007-01-30', 'Notes': '<! 2006-12-07 09:28:51 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>draft poster for Nye county similar to previous posters for White Pine', 'EmployeeID': ' Lyon', 'CustomerID': ' and Pershing counties; Ron will provide files possibly by today (maybe not geothermal figure);&nbsp;they would like draft by Fri 12/15;</P>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Nye County Poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1789', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-12-20', 'WorkOrderDescription': '', 'StartDate': '2006-12-20', 'DueDate': '2006-12-30', 'ClosedDate': '2006-12-30', 'Notes': '<! 2006-12-14 10:38:57 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'reprint NPS4', 'EmployeeID': ' NPS6', 'CustomerID': ' NPS8', 'PriorityID': ' NPS9', 'StatusID': ' NPS13', 'SubmittedDate': ' and NPS16', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-01-18 10:39:09 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Copies received from Copy Center 1/17/06</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>15 NPS4; 10 NPS6; 10 NPS8; 20 NPS9; 15 NPS13; 10 NPS16</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Nevada Petroleum Society publication reprints', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1790', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-01-05', 'WorkOrderDescription': '', 'StartDate': '2007-01-05', 'DueDate': '2007-02-05', 'ClosedDate': '2007-02-05', 'Notes': '<! 2007-01-05 09:39:03 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Fix AI figure for submittal to GSA following GSA guidelines. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-05 09:48:30 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Needed today 1/5/06</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-01-05 12:20:59 mauldin >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'File to Kyle;Had to work on figure on Kyle&#39;s', 'EmployeeID': 'GSA Figure', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1791', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-01-10', 'WorkOrderDescription': '', 'StartDate': '2007-01-10', 'DueDate': '2007-03-10', 'ClosedDate': '2007-03-10', 'Notes': '<! 2007-01-08 10:36:10 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'Update figures from 2004; 1 new figure', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Journal figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1792', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-01-15', 'WorkOrderDescription': '', 'StartDate': '2007-01-15', 'DueDate': '2007-01-29', 'ClosedDate': '2007-01-29', 'Notes': '<! 2007-01-19 08:13:20 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Pub Sales reprints B62', 'EmployeeID': ' OF87-6', 'CustomerID': ' R17', 'PriorityID': ' R50p', 'StatusID': ' etc.</P>', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-19 08:16:22 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'B62 .pdf to Copy Center 1/18/07', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-19 09:09:40 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'update publist', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-30', 'EmployeeID': 'B62 reprints', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1793', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-02-02', 'WorkOrderDescription': '', 'StartDate': '2007-02-02', 'DueDate': '2007-02-06', 'ClosedDate': '2007-02-06', 'Notes': '<! 2007-02-02 10:19:02 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': '2 seismic/geothermal maps of Turkey', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Grant proposal', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1794', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-02-05', 'WorkOrderDescription': '', 'StartDate': '2007-02-05', 'DueDate': '2007-02-05', 'ClosedDate': '2007-02-05', 'Notes': '<! 2007-02-05 10:08:58 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Print and bind 50 copies of 2006 NBMG Biennial Report', 'EmployeeID': ' OFR 2006-20', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-07 12:29:30 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'trouble shoot cover files with Copy Center 2/6/07', 'EmployeeID': ' all files to Copy Center 2/7/07', 'CustomerID': '', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-21 ', 'EmployeeID': 'OFR 2006-20 NBMG Biennial Report 2006', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1795', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-02-07', 'WorkOrderDescription': '', 'StartDate': '2007-02-07', 'DueDate': '2007-03-15', 'ClosedDate': '2007-03-15', 'Notes': '<! 2007-02-14 15:46:40 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'Figures and photos for two journal articles', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-02 14:36:02 kpizarro /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Two related poster sessions added to this project 3/2/07', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-10-03 13:45:24 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Work completed 5/15/2007.&nbsp;', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'JOurnal of Vulcanology figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1796', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-02-16', 'WorkOrderDescription': '', 'StartDate': '2007-02-16', 'DueDate': '2007-04-01', 'ClosedDate': '2007-04-01', 'Notes': '<! 2007-02-16 10:46:46 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Scan hand drawn maps.&nbsp; Digitize 11 geologic page-size maps in ArcMap.&nbsp; Integrate colors/unit labels between maps.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Maps have been scanned.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Kris has map with colors.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Caetano Geospheres journal figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1797', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-02-16', 'WorkOrderDescription': '', 'StartDate': '2007-02-16', 'DueDate': '2007-02-16', 'ClosedDate': '2007-02-16', 'Notes': '<! 2007-02-16 12:17:31 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'format proposal', 'EmployeeID': ' .pdfs to Jim', 'CustomerID': ' done', 'PriorityID': ' 2/16/07', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-02-21 10:55:25 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Archived on &#34;O&#34; drive and CD &amp; BCD 242', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Faulds structural proposal ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1798', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-02-21', 'WorkOrderDescription': '', 'StartDate': '2007-02-21', 'DueDate': '2007-02-21', 'ClosedDate': '2007-02-21', 'Notes': '<! 2007-02-21 15:31:12 pattiw >', 'ProjectName': None}
,
{'WorkOrderID': '<P>This is a test ticket to test hyperlink capabilities and retrieval to a test file which is stored in the root directory of the NAS share&#58;&nbsp;&nbsp;<A href="file://\\\\unrnast2.unr.edu\\cartography\\test.txt">&#92;&#92', 'EmployeeID': 'Test Issue - Display HyperLink', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1799', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-02-22', 'WorkOrderDescription': '', 'StartDate': '2007-02-22', 'DueDate': '2007-02-22', 'ClosedDate': '2007-02-22', 'Notes': '<! 2007-02-22 11:24:05 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Print 10 copies of M154 text for pub sales', 'EmployeeID': ' done', 'CustomerID': ' 2-22-07. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-02-22 11:26:58 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'printed from .pdf located in w/o 1693 folder on &#34;O&#34; drive.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'M154 Meadview text copies', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1800', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-02-23', 'WorkOrderDescription': '', 'StartDate': '2007-02-23', 'DueDate': '2007-03-05', 'ClosedDate': '2007-03-05', 'Notes': '<! 2007-02-23 16:23:10 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'Five journal figures', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-03-02 14:26:09 kpizarro >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Drafts to author 2/28/07', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Journal figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1801', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-02-27', 'WorkOrderDescription': '', 'StartDate': '2007-02-27', 'DueDate': '2007-03-27', 'ClosedDate': '2007-03-27', 'Notes': '<! 2007-02-27 10:17:41 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'print 15 copies', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-07 12:13:51 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Camera ready copy and IPO to Copy Center 3-7-07', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-04-19 09:53:36 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>15 copies and camera ready copy received from Copy Center 4/19/07', 'EmployeeID': ' done.', 'CustomerID': 'OFR87-6 reprint', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1802', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-03-06', 'WorkOrderDescription': '', 'StartDate': '2007-03-06', 'DueDate': '2007-03-10', 'ClosedDate': '2007-03-10', 'Notes': '<! 2007-03-06 11:45:10 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'make edits to existing figures', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-07-25 09:51:50 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'to Craig 3/22/07', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'DePolo Historic and Prehistoric EQs in Western NV map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1803', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-03-09', 'WorkOrderDescription': '', 'StartDate': '2007-03-09', 'DueDate': '2007-04-09', 'ClosedDate': '2007-04-09', 'Notes': '<! 2007-03-09 14:33:18 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'reprint 20 copies', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-12 12:04:45 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '.pdf files and IPO to Copy Center 3/12/07', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-03-28 10:20:00 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '20 copies received from Copy Center 3-28-07', 'EmployeeID': ' done.', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Report 17 Turquoise Deposits of Nevada reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1804', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-03-12', 'WorkOrderDescription': '', 'StartDate': '2007-03-12', 'DueDate': '2007-04-12', 'ClosedDate': '2007-04-12', 'Notes': '<! 2007-03-12 12:31:11 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'reprint 15 copies of white spiral bound', 'EmployeeID': ' clear cover report;', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-13 12:13:10 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '.pdf files and IPO to Copy Center 3/13/07', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-03-28 10:18:43 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '15 copies received from Copy Center ', 'EmployeeID': 'Report 50', 'CustomerID': ' Geophysical Setting of the Pahute Mesa-Oasis Valley', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1805', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-03-13', 'WorkOrderDescription': '', 'StartDate': '2007-03-13', 'DueDate': '2007-03-20', 'ClosedDate': '2007-03-20', 'Notes': '<! 2007-03-14 11:16:44 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Make six B73 Cds with labels for Pub Sales', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-03-29 10:01:30 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Six CDs with labels delivered to Charlotte 3/14/07', 'EmployeeID': ' done.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Bulletin 73 CD copies for Pub Sales', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1806', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-03-21', 'WorkOrderDescription': '', 'StartDate': '2007-03-21', 'DueDate': '2007-03-21', 'ClosedDate': '2007-03-21', 'Notes': '<! 2007-03-22 10:08:58 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '<P>scan 36 pages of SP16 Las Vegas Tour guide for NMA Teachers Workshop fieldguide', 'EmployeeID': ' done', 'CustomerID': ' 3/21/06.</P>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'NMA teachers workshop fieldtrip guidebook', 'CustomerID': ' SP16 Las Vegas Tour book .pdf files for 36 pages', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1807', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-03-22', 'WorkOrderDescription': '', 'StartDate': '2007-03-22', 'DueDate': '2007-03-27', 'ClosedDate': '2007-03-27', 'Notes': '<! 2007-03-22 11:49:32 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'print 20 copies of &#34;Minerals in our environment&#34; poster for D.D. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-26 09:17:44 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Jack started', 'EmployeeID': ' Jennifer finished 3/23/07', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-03-28 12:19:54 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'posters picked up by D.D. ', 'EmployeeID': 'Minerals in our environment poster for D.D.', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1808', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-03-27', 'WorkOrderDescription': '', 'StartDate': '2007-03-27', 'DueDate': '2007-04-27', 'ClosedDate': '2007-04-27', 'Notes': '<! 2007-03-27 09:17:12 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '25 copies need of M142 text', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-03-28 10:15:41 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'camera ready copy to Copy Center 3-27-07', 'EmployeeID': ' 25 copies received from Copy Center 3-28-07', 'CustomerID': ' done.', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'M142 Text reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1809', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-03-26', 'WorkOrderDescription': '', 'StartDate': '2007-03-26', 'DueDate': '2007-04-15', 'ClosedDate': '2007-04-15', 'Notes': '<! 2007-03-28 11:32:57 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'GGOS project', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Journal figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1810', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-03-29', 'WorkOrderDescription': '', 'StartDate': '2007-03-29', 'DueDate': '2007-03-29', 'ClosedDate': '2007-03-29', 'Notes': '<! 2007-03-29 12:01:13 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '.pdfs to Carl&#39;s blueprinting 3-29-07', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-30 11:18:39 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'correction', 'EmployeeID': ' .pdfs dropped off at Carl&#39;s Blueprinting 3-30-07', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-04-04 09:01:50 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'plates picked up from Carl&#39;s ', 'EmployeeID': 'B62 plates reprints', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1811', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-04-03', 'WorkOrderDescription': '', 'StartDate': '2007-04-03', 'DueDate': '2007-05-03', 'ClosedDate': '2007-05-03', 'Notes': '<! 2007-04-03 09:27:16 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'printout two large posters with NESC logo and website', 'EmployeeID': ' laminate one and foam core one', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-04-04 09:00:07 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'two posters dropped off at LamIt', 'EmployeeID': ' one for foam core and lamination', 'CustomerID': ' and one just for la', 'PriorityID': 'NESC poster', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1812', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-04-04', 'WorkOrderDescription': '', 'StartDate': '2007-04-04', 'DueDate': '2007-06-05', 'ClosedDate': '2007-06-05', 'Notes': '<! 2007-04-04 16:08:33 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise figures from Jim&#39;s old Corel Draw files and prepare for GSA publication standards to be submitted at end of month.&nbsp; Jim locating files. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-04-05 11:44:29 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Jim gave Corel ', 'EmployeeID': 'GSA Special Publication Figures - White Hills', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1813', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-04-09', 'WorkOrderDescription': '', 'StartDate': '2007-04-09', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2007-04-09 10:28:58 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Started copying files from old Zip disks to folder on Jack&#39;s Mac and &#34;O&#34; drive', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-09-09 11:06:48 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Books delivered to rm 5b on 9/2/2008. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SP16 Geologic Tours in the LV Area Expanded Edition reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1814', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-04-10', 'WorkOrderDescription': '', 'StartDate': '2007-04-10', 'DueDate': '2007-05-10', 'ClosedDate': '2007-05-10', 'Notes': '<! 2007-04-10 10:49:07 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'make corrections to printing dates and phone numbers on staff sheets (last pages)', 'EmployeeID': '', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-04-11 09:35:33 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'corrections to address and&nbsp;phone numbers made', 'EmployeeID': ' complete camera-ready copy placed back in archive draw', 'CustomerID': 'Report 40 Sediment Hosted Precious-Metal Deposits of N. Nevada', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1815', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-04-05', 'WorkOrderDescription': '', 'StartDate': '2007-04-05', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 06:49:52 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitial conversion to GIS data', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-10-03 14:20:26 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Completed 9/30/2007.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (FS 15 Fraizer Creek)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1816', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-09-18', 'WorkOrderDescription': '', 'StartDate': '2007-09-18', 'DueDate': '2007-09-30', 'ClosedDate': '2007-09-30', 'Notes': '<! 2007-04-12 06:53:49 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (FS 16 Third Butte East)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1817', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-04-01', 'WorkOrderDescription': '', 'StartDate': '2007-04-01', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 06:56:17 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Diigital conversion to GIS data', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (FS 21 Old Mans Canyon)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1818', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-03-15', 'WorkOrderDescription': '', 'StartDate': '2007-03-15', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:00:27 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Adam King)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 109 Wonder Mountain)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1819', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2006-08-23', 'WorkOrderDescription': '', 'StartDate': '2006-08-23', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:02:47 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 134 Nelson SW)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1820', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-10-09', 'WorkOrderDescription': '', 'StartDate': '2006-10-09', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:04:53 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Cathie. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 135 Willow Creek Reservoir)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1821', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-10-09', 'WorkOrderDescription': '', 'StartDate': '2006-10-09', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:07:16 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 136 Willow Creek Reservoir SE)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1822', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-10-20', 'WorkOrderDescription': '', 'StartDate': '2006-10-20', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:09:09 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State map 2006 (Map 137 Hiller Mountain)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1823', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-11-10', 'WorkOrderDescription': '', 'StartDate': '2006-11-10', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:11:22 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Cathie. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 139 Callville Bay)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1824', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2006-11-29', 'WorkOrderDescription': '', 'StartDate': '2006-11-29', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:13:31 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 140 Government Wash)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1825', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-01-10', 'WorkOrderDescription': '', 'StartDate': '2007-01-10', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:15:45 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Adam. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 143 Beaver Peak)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1826', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2006-10-01', 'WorkOrderDescription': '', 'StartDate': '2006-10-01', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:17:49 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-04-12 07:25:15 glj >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Assigned to Bridget/Heather.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 144 Mule Canyon)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1827', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-01-10', 'WorkOrderDescription': '', 'StartDate': '2007-01-10', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:19:50 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Adam. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 145 Big Bald Mountain)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1828', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2006-11-27', 'WorkOrderDescription': '', 'StartDate': '2006-11-27', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:22:09 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 146 Frazier Flat and West Half of Moses Rock)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1829', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-01-04', 'WorkOrderDescription': '', 'StartDate': '2007-01-04', 'DueDate': '2007-04-30', 'ClosedDate': '2007-04-30', 'Notes': '<! 2007-04-12 07:24:05 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 147 Verdi Peak)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1830', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-04-16', 'WorkOrderDescription': '', 'StartDate': '2007-04-16', 'DueDate': '2007-07-01', 'ClosedDate': '2007-07-01', 'Notes': '<! 2007-04-16 14:29:15 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'Edit photos', 'EmployeeID': ' historical photos', 'CustomerID': ' create maps for book', 'PriorityID': ' &#34;Progress or Plunder&#58; An environmental companion to Nevada ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'History&#34;', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'book; PROGRESS OR PLUNDER', 'CustomerID': ' An environmental companion to Nevada history', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1831', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-04-18', 'WorkOrderDescription': '', 'StartDate': '2007-04-18', 'DueDate': '2007-04-20', 'ClosedDate': '2007-04-20', 'Notes': '<! 2007-04-18 10:32:09 kpizarro >', 'ProjectName': None}
,
{'WorkOrderID': 'Scan and repair 27 old negatives for info office', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Scan/repair negatives', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1832', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-04-16', 'WorkOrderDescription': '', 'StartDate': '2007-04-16', 'DueDate': '2007-04-16', 'ClosedDate': '2007-04-16', 'Notes': '<! 2007-04-18 11:57:10 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'format table for publication', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-04-18 12:01:22 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'To John and approved 4-16-07', 'EmployeeID': ' done.', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Ground Displacement table', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1833', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-04-17', 'WorkOrderDescription': '', 'StartDate': '2007-04-17', 'DueDate': '2007-05-12', 'ClosedDate': '2007-05-12', 'Notes': '<! 2007-04-18 12:12:24 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Update NESC signs for table top display and print mitigation photos', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'NESC mitigation photos and Table Top booth signs', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1834', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-04-19', 'WorkOrderDescription': '', 'StartDate': '2007-04-19', 'DueDate': '2007-04-19', 'ClosedDate': '2007-04-19', 'Notes': '<! 2007-04-19 10:24:10 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'scan slides', 'EmployeeID': ' done 4/19/07. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Newberry Mountains slide scans for Faulds', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1835', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-05-04', 'WorkOrderDescription': '', 'StartDate': '2007-05-04', 'DueDate': '2007-05-11', 'ClosedDate': '2007-05-11', 'Notes': '<! 2007-05-04 11:42:59 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'revise signs', 'EmployeeID': ' print', 'CustomerID': ' laminate', 'PriorityID': ' frame lobby sign', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-07-03 11:13:14 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Hung new signs 7/28/07', 'EmployeeID': ' done.', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Pub Sales', 'CustomerID': ' Info Office', 'PriorityID': ' and NBMG lobby new signs', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1836', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-06-12', 'WorkOrderDescription': '', 'StartDate': '2007-06-12', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-12 07:53:05 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Irene will convert to GIS from scanned black/white map. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-22 11:19:20 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/22/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Bedell Flat', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1837', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-06-14', 'WorkOrderDescription': '', 'StartDate': '2007-06-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-14 16:31:53 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Digitize map into GIS</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 09:30:47 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 6/2/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Marlette Lake', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1838', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-06-14', 'WorkOrderDescription': '', 'StartDate': '2007-06-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-14 16:32:53 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Digitize map into GIS</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 10:51:48 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 6/3/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Carson City', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1839', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-06-14', 'WorkOrderDescription': '', 'StartDate': '2007-06-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-14 16:33:46 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 11:28:01 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 6/3/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Genoa', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1840', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-06-14', 'WorkOrderDescription': '', 'StartDate': '2007-06-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-14 16:34:39 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 13:04:43 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/21/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Washoe City', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1841', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-06-21', 'WorkOrderDescription': '', 'StartDate': '2007-06-21', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-21 10:42:45 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize and convert to GIS. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 11:04:52 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/21/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Crater Flat', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1842', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-06-21', 'WorkOrderDescription': '', 'StartDate': '2007-06-21', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-21 11:48:14 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into a GIS. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-22 11:54:46 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/8/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Bell Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1843', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-06-21', 'WorkOrderDescription': '', 'StartDate': '2007-06-21', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-21 11:50:17 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into a GIS. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 10:16:25 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/28/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Moho Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1844', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-06-21', 'WorkOrderDescription': '', 'StartDate': '2007-06-21', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-06-21 11:51:15 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into a GIS. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 09:47:20 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/30/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Bell Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1845', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-06-27', 'WorkOrderDescription': '', 'StartDate': '2007-06-27', 'DueDate': '2007-06-29', 'ClosedDate': '2007-06-29', 'Notes': '<! 2007-06-26 09:50:35 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'correction stickers for T3N&nbsp; T2N on the FSM 7', 'EmployeeID': ' Rice Mountain Quad', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-06-27 11:17:55 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>typeset and printed on full sheet label paper over 400 correction labels', 'EmployeeID': ' done 6/27/07</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Rice Mt. Quad township correction stickers', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1846', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-07-02', 'WorkOrderDescription': '', 'StartDate': '2007-07-02', 'DueDate': '2007-09-02', 'ClosedDate': '2007-09-02', 'Notes': '<! 2007-07-03 11:36:47 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'layout in bulletin form for web', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-12-05 16:01:30 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Work Order Canceled.&nbsp; Dick Meeuwig completed production.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Santa Rosa-Calico Bulletin', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1847', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-07-18', 'WorkOrderDescription': '', 'StartDate': '2007-07-18', 'DueDate': '2007-07-20', 'ClosedDate': '2007-07-20', 'Notes': '<! 2007-07-18 10:00:41 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Typeset and Layout ad for weather book SP34', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-07-20 10:19:54 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'to Charlotte 7/19/07', 'EmployeeID': ' .jpg', 'CustomerID': ' .tif', 'PriorityID': ' and .pdf all provided to Charlotte 7/19/07', 'StatusID': ' done.', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Weather Book Advertisement', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1848', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 07:32:59 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert B/W map to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 09:55:48 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complee 7/28/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Mina', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1849', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 07:43:44 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:07:47 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/29/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Robinson Summit', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1850', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 07:51:47 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 10:46:36 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 7/31/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Camp Douglas', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1851', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 07:58:32 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 11:17:31 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete8/4/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Diamond Springs', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1852', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 08:04:42 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:45:26 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/5/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 State Line Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1853', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 08:19:41 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert AI to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:38:33 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'On Christine&#39;s computer', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:42:03 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'M154 2005', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 09:48:50 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/6/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 AI Meadview North', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1854', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 08:31:21 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert AI to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:37:52 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Files are on Christine&#39;s computer</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:41:40 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'M148 2004', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 11:21:56 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8', 'EmployeeID': 'STATEMAP 2007 AI Dogskin Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1855', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 08:33:28 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert AI to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:41:10 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'FS15 1998', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-09-04 15:54:32 lgoar /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Disregard notes of 7/19/2007 - originally issued in error to Frazier Creek FS15.&nbsp; Changed', 'EmployeeID': 'STATEMAP 2007 Antler Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1856', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 08:35:44 crouse >', 'ProjectName': None}
,
{'WorkOrderID': 'convert ai to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:37:17 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'CD 41', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:40:36 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'M138 2003', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 10:04:18 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadatqa complete 8/11/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 AI Bobs Flat', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1857', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-07-19', 'WorkOrderDescription': '', 'StartDate': '2007-07-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-07-19 08:39:39 crouse >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Convert AI to GIS</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Files are on Christine&#39;s computer</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:40:08 crouse /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'M147', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-09-14 11:54:38 lgoar /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'File name changed to Arrow Canyon NW GQ1776', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 200', 'EmployeeID': 'STATEMAP 2007 Arrow Canyon NW', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1858', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-07-20', 'WorkOrderDescription': '', 'StartDate': '2007-07-20', 'DueDate': '2007-07-27', 'ClosedDate': '2007-07-27', 'Notes': '<! 2007-07-20 11:10:50 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'typeset and take to Tripp Plastics. Signs for Nicholas Hinz', 'EmployeeID': ' Jordan Hastings', 'CustomerID': ' Heather Armeno', 'PriorityID': ' and Elizabeth Crouse', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-16 11:54:33 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'signs picked up and paid for with Terri&#39;s credit card ', 'EmployeeID': 'Name signs for new NBMG hires', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1859', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-07-23', 'WorkOrderDescription': '', 'StartDate': '2007-07-23', 'DueDate': '2007-09-30', 'ClosedDate': '2007-09-30', 'Notes': '<! 2007-07-24 14:48:43 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Gary', 'EmployeeID': ' Set up the layout for the authors (3 hrs)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-08-13 07:32:57 glj >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Setup basic layout and placed on the N&#58;&#92;gary&#92;John_Bell&#92;Lahontan_Mts - 3 hrs. 7/26/07</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 - Lahontan Mts. & Grimes Point Geology', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1860', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-08-01', 'WorkOrderDescription': '', 'StartDate': '2007-08-01', 'DueDate': '2007-09-30', 'ClosedDate': '2007-09-30', 'Notes': '<! 2007-08-07 07:51:09 mauldin >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Prepare Stockton Well map for STATEMAP 2006 deliverable.&nbsp; </P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-07 13:42:44 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Topo with penciled linework', 'EmployeeID': ' labels and symbols from author outside of NBMG is georeferenced in U', 'CustomerID': 'STATEMAP 2006 Master Stockton Flat Well', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1861', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-08-07', 'WorkOrderDescription': '', 'StartDate': '2007-08-07', 'DueDate': '2007-10-07', 'ClosedDate': '2007-10-07', 'Notes': '<! 2007-08-07 11:28:02 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'Typeset and publish MI-2006', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-01-17 11:17:45 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '137 copies new books rec&#39;d 1/16/2008. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'MI-The Nevada Mineral Industry 2006', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1862', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-08-09', 'WorkOrderDescription': '', 'StartDate': '2007-08-09', 'DueDate': '2007-08-10', 'ClosedDate': '2007-08-10', 'Notes': '<! 2007-08-09 11:24:51 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': '10 copies of Map 151 at .5 size', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Map 151-.5 size 10 copies', 'CustomerID': ' Shevenell', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1863', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-08-10', 'WorkOrderDescription': '', 'StartDate': '2007-08-10', 'DueDate': '2007-08-17', 'ClosedDate': '2007-08-17', 'Notes': '<! 2007-08-10 13:57:27 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Bringing existing map to NBMG standards.&nbsp; Make changes as noted on map copy.&nbsp;&nbsp;Print (1) map at 1&#58;500', 'EmployeeID': '000. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Geothermal Potential Map ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1864', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-08-03', 'WorkOrderDescription': '', 'StartDate': '2007-08-03', 'DueDate': '2007-09-30', 'ClosedDate': '2007-09-30', 'Notes': '<! 2007-08-10 15:38:35 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Production of Full Jerritt Canyon Geologic Map.&nbsp; State Map 06. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-09-12 11:13:59 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This is a duplicate', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 Jerritt Canyon Master', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1865', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-08-13', 'WorkOrderDescription': '', 'StartDate': '2007-08-13', 'DueDate': '2007-08-15', 'ClosedDate': '2007-08-15', 'Notes': '<! 2007-08-13 10:33:11 jhursh >', 'ProjectName': None}
,
{'WorkOrderID': 'typeset', 'EmployeeID': ' layout', 'CustomerID': ' advertisement for Nevada Earthquake Safety Council', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-14 11:50:27 jhursh /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>e-mailed &#34;NESCad.ai&#34; file to <A href="mailto:cpostell@iccsafe.org">cpostell@iccsafe.org</A> 8/', 'EmployeeID': 'Nevada Earthquake Safety Council (NESC) advertisement for WSSPC/ICC program', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1866', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-08-14', 'WorkOrderDescription': '', 'StartDate': '2007-08-14', 'DueDate': '2007-09-30', 'ClosedDate': '2007-09-30', 'Notes': '<! 2007-08-14 10:11:56 glj >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Prepare proposal for GIS Conversion portion and figures for STATEMAP 08 proposals.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>STEP 1 DUE 08/15/2007.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-08-14 17:23:56 crouse >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Final 15 copies of the map delivered to Jon/Terri on&nbsp;8/15/07.</P', 'EmployeeID': 'STATEMAP 08 Proposal Support', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1867', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-08-16', 'WorkOrderDescription': '', 'StartDate': '2007-08-16', 'DueDate': '2007-09-04', 'ClosedDate': '2007-09-04', 'Notes': '<! 2007-08-16 13:57:43 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Print 22 air photos on heavy semi-gloss paper.&nbsp; Charge for paper and ink. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-09-10 11:31:45 kpizarro >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Deadline extended to 9/14.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Performed color correction before printing.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Complete 9/10/07', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Clark County Mapping - Jean - print 22 air photos', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1868', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-08-17', 'WorkOrderDescription': '', 'StartDate': '2007-08-17', 'DueDate': '2007-09-17', 'ClosedDate': '2007-09-17', 'Notes': '<! 2007-08-17 14:45:46 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'Update slides from MI 2005 book.&nbsp; Save as .jpg', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-12-10 09:22:36 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Edits made.&nbsp; CD&#39;s made.&nbsp; Saved to .jpg 10/31/2007</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Mineral Industry 2006 Powerpoint Slides', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1869', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-08-22', 'WorkOrderDescription': '', 'StartDate': '2007-08-22', 'DueDate': '2008-02-08', 'ClosedDate': '2008-02-08', 'Notes': '<! 2007-08-21 11:46:22 glj >', 'ProjectName': None}
,
{'WorkOrderID': 'This is a demo of a subtask', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-23 13:59:20 lgoar /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Update Nevada&#39;s State Hazus database; Provide Earthquake runs for all 17 counties; Produce final report.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-23 14:14:07 lgoar /*E', 'EmployeeID': 'Hazus Database Information Update', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1870', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-08-21', 'WorkOrderDescription': '', 'StartDate': '2007-08-21', 'DueDate': '2007-08-24', 'ClosedDate': '2007-08-24', 'Notes': '<! 2007-08-22 13:45:30 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Assist with editing and plotting of Adobe Illustrator files. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-08-22 14:57:29 mauldin >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Jack edited Illustrator files and Jennifer printed.&nbsp; Christy took all 4 prints (1 of each map).</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Maps for Governors Renewable Energy Transmission Advisory Committee', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1871', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-08-21', 'WorkOrderDescription': '', 'StartDate': '2007-08-21', 'DueDate': '2007-08-31', 'ClosedDate': '2007-08-31', 'Notes': '<! 2007-08-22 15:41:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Set-up server with ESRI and other software</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1st focus&#58;&nbsp; ESRI ARCGIS software</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2nd focus&#58;&nbsp; ESRI Arcserver and SDE software</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>3rd focus&#58;&nbsp; ESRI ARCIMS</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>4th focus&#58;&nbsp; ', 'EmployeeID': 'NBMG Server Set-up and Maintenance', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1872', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-08-22', 'WorkOrderDescription': '', 'StartDate': '2007-08-22', 'DueDate': '2007-12-22', 'ClosedDate': '2007-12-22', 'Notes': '<! 2007-08-23 14:50:34 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize linework; Create final layout for published map. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-10-15 16:07:12 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'No work done.&nbsp; Cancelled.&nbsp;', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Fernley East 1&#58;24', 'CustomerID': '000 scale Geologic Map', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1873', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-08-23', 'WorkOrderDescription': '', 'StartDate': '2007-08-23', 'DueDate': '2007-09-23', 'ClosedDate': '2007-09-23', 'Notes': '<! 2007-08-23 15:40:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Make corrections. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-08-29 12:13:36 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'file to Dick', 'EmployeeID': ' 8/20/07', 'CustomerID': ' done.', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Stafflist for Publications', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1874', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-08-24', 'WorkOrderDescription': '', 'StartDate': '2007-08-24', 'DueDate': '2007-09-24', 'ClosedDate': '2007-09-24', 'Notes': '<! 2007-08-24 16:18:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Typeset corrections; prepare photos.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Note&#58;&nbsp; Printing costs paid by NDOM and NMA</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-09-07 08:30:21 jhursh >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Draft given to Dick for review 8/6/07', 'EmployeeID': ' Draft being sent to Doug Dreisner for review 8/7', 'CustomerID': 'Major Mines 2006 - NBMG SP P-18', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1875', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-08-28', 'WorkOrderDescription': '', 'StartDate': '2007-08-28', 'DueDate': '2007-09-30', 'ClosedDate': '2007-09-30', 'Notes': '<! 2007-08-28 13:37:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Statemap 2006 new Geologic mapping for Lahontan Mtns and part of Grimes Point quadrangles', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 Master for Lahontan Mtns & part of Grimes Point quadrangles', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1876', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-08-21', 'WorkOrderDescription': '', 'StartDate': '2007-08-21', 'DueDate': '2007-08-31', 'ClosedDate': '2007-08-31', 'Notes': '<! 2007-08-29 14:10:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Run HAZUS Earthquake models for 17 counties; summarize in chart form.&nbsp; Run HAZUS Flood scenarios for 6 rivers; submit reports to NDEM. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'HAZUS Earthquake & Flood Scenarios for NDEM', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1877', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-09-05', 'WorkOrderDescription': '', 'StartDate': '2007-09-05', 'DueDate': '2007-09-30', 'ClosedDate': '2007-09-30', 'Notes': '<! 2007-09-05 08:20:32 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take a small amount of time. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - September', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1878', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-09-05', 'WorkOrderDescription': '', 'StartDate': '2007-09-05', 'DueDate': '2007-09-20', 'ClosedDate': '2007-09-20', 'Notes': '<! 2007-09-05 12:27:43 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Reprint GBCGE poster', 'EmployeeID': ' with minor mods', 'CustomerID': '&nbsp;for the GRC 2007 meeting.&nbsp; Create T-Shirt design. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-09-28 13:43:45 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '6 hours - Poster;&nbsp; 20.5 hours T-Shirt design.&nbsp; $86.40 plotter re-charge', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GBCGE - Poster', 'CustomerID': ' modify & reprint and Design T-Shirt', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1879', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-09-05', 'WorkOrderDescription': '', 'StartDate': '2007-09-05', 'DueDate': '2007-09-20', 'ClosedDate': '2007-09-20', 'Notes': '<! 2007-09-05 14:38:43 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare two PPT slides', 'EmployeeID': ' &#34;Trade Deficit&#34; and &#34;When China&#39;s and India&#39;s GDPs', 'CustomerID': 'etc&#34;', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'PPT Slides (2) for SME 2007', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1880', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-09-05', 'WorkOrderDescription': '', 'StartDate': '2007-09-05', 'DueDate': '2007-09-20', 'ClosedDate': '2007-09-20', 'Notes': '<! 2007-09-05 15:26:38 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Organize', 'EmployeeID': ' laminate', 'CustomerID': ' list of items for booth.&nbsp; Paid by NESC. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-09-28 15:25:42 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Hours - 11.25 @ $47; Plotter 48&#34; @ .38 = $18.24', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'WSSPC/ICC Meeting Booth Requirements', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1881', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-09-06', 'WorkOrderDescription': '', 'StartDate': '2007-09-06', 'DueDate': '2007-09-20', 'ClosedDate': '2007-09-20', 'Notes': '<! 2007-09-06 15:33:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>1)&nbsp; Field Trip Guide layout - est 4 hrs</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2)&nbsp; Print 30 copies of Desert Peak- Brady map - est 6 hrs</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Field Trip Guide layout and 30 copies Desert Peak-Brady map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1882', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-09-12', 'WorkOrderDescription': '', 'StartDate': '2007-09-12', 'DueDate': '2007-09-13', 'ClosedDate': '2007-09-13', 'Notes': '<! 2007-09-13 09:37:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Update and Print the National Cooperative Geologic Mapping Program for Jonathan Price. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap Progress Sheet', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1883', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-09-14', 'WorkOrderDescription': '', 'StartDate': '2007-09-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-14 12:04:47 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion FS1', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 09:59:34 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/14/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 FS1 Bettles Well', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1884', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-09-14', 'WorkOrderDescription': '', 'StartDate': '2007-09-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-14 12:12:40 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion GQ1366', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 10:11:09 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/18/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1366 Brooks Spring', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1885', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-09-14', 'WorkOrderDescription': '', 'StartDate': '2007-09-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-14 15:42:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion M88', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 10:41:12 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/20/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 M88 Buckskin Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1886', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-09-14', 'WorkOrderDescription': '', 'StartDate': '2007-09-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-14 15:55:50 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion GQ1731', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 10:56:09 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/20/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1731 Chief Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1887', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-09-14', 'WorkOrderDescription': '', 'StartDate': '2007-09-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-14 16:01:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion B71', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-23 11:10:43 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/25/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 B71 Derby Dam & Martin Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1888', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-09-14', 'WorkOrderDescription': '', 'StartDate': '2007-09-14', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-14 16:08:52 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion 2Bg', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-24 09:03:06 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/26/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 2Bg Glenbrook', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1889', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-09-19', 'WorkOrderDescription': '', 'StartDate': '2007-09-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-19 11:31:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion GQ1407', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 09:05:50 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/27/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1407 Goldrun Creek', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1890', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-09-19', 'WorkOrderDescription': '', 'StartDate': '2007-09-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-19 11:37:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion GQ1701', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 09:10:58 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 8/28/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1701 Indian Cove', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1891', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-09-19', 'WorkOrderDescription': '', 'StartDate': '2007-09-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-19 11:46:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion GQ1175', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 09:18:03 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 9/2/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1175 Iron Point', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1892', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-09-19', 'WorkOrderDescription': '', 'StartDate': '2007-09-19', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-09-19 11:53:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion GQ1672', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 09:25:37 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 9/2/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1672 Jake Creek Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1893', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-09-19', 'WorkOrderDescription': '', 'StartDate': '2007-09-19', 'DueDate': '2007-09-21', 'ClosedDate': '2007-09-21', 'Notes': '<! 2007-09-20 13:30:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Get transmission lines layer from WO#1870 Renewable energy maps Illustrator files and convert to Shapefile. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Convert Transmission Lines to Shapefile', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1894', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-09-26', 'WorkOrderDescription': '', 'StartDate': '2007-09-26', 'DueDate': '2007-10-05', 'ClosedDate': '2007-10-05', 'Notes': '<! 2007-09-26 12:09:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Print new map utilizing shaded relief background per details on sample provided. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week Field Trip Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1895', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-10-01', 'WorkOrderDescription': '', 'StartDate': '2007-10-01', 'DueDate': '2007-10-31', 'ClosedDate': '2007-10-31', 'Notes': '<! 2007-10-01 11:57:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take less than 2 hours to complete. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - October', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1896', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-10-02', 'WorkOrderDescription': '', 'StartDate': '2007-10-02', 'DueDate': '2007-10-31', 'ClosedDate': '2007-10-31', 'Notes': '<! 2007-10-02 11:00:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Deliver AI files to Rob Brady for revisions preparatory to GIS Conversion. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Revisions to Iceberg Canyon Quad (OF3-18)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1897', 'EmployeeID': '105600', 'CustomerID': '4048', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-10-02', 'WorkOrderDescription': '', 'StartDate': '2007-10-04', 'DueDate': '2007-12-31', 'ClosedDate': '2008-01-13', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1898', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-10-04', 'WorkOrderDescription': '', 'StartDate': '2007-10-04', 'DueDate': '2007-10-31', 'ClosedDate': '2007-10-31', 'Notes': '<! 2007-10-04 15:37:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise USGS Statemap 2006 for NBMG Open File Status. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Jerritt Canyon Revisions for OF07-3', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1899', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-10-04', 'WorkOrderDescription': '', 'StartDate': '2007-10-04', 'DueDate': '2007-10-31', 'ClosedDate': '2007-10-31', 'Notes': '<! 2007-10-04 15:43:15 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise USGS Statemap 2006 for NBMG Open File Status. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Lahontan Mtns Revisions for OF07-4', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1900', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-10-05', 'WorkOrderDescription': '', 'StartDate': '2007-10-05', 'DueDate': '2007-10-29', 'ClosedDate': '2007-10-29', 'Notes': '<! 2007-10-05 13:33:32 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Support Dr. Sylvester in development of a preliminary GIS geologic map of the Independence Lake &amp; W quarter of Hobart Mills quadrangles', 'EmployeeID': ' focused on the Sagehen Creek FS', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Sagehen Creek Field Station Preliminary Geologic Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1901', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-10-10', 'WorkOrderDescription': '', 'StartDate': '2007-10-10', 'DueDate': '2007-11-19', 'ClosedDate': '2007-11-19', 'Notes': '<! 2007-10-10 14:38:52 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '400 Copies Needed. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-11-14 14:18:06 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Pub Sales billed directly for printing costs on IPO# 380498.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SP5 (Child of the Rocks) Reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1902', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-10-10', 'WorkOrderDescription': '', 'StartDate': '2007-10-10', 'DueDate': '2007-11-19', 'ClosedDate': '2007-11-19', 'Notes': '<! 2007-10-10 14:59:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Exact quantity needed to be determined.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-03-24 08:32:55 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Actual completion 3/20/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'E-16 (Eqs in Nevada) Reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1903', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-10-11', 'WorkOrderDescription': '', 'StartDate': '2007-10-11', 'DueDate': '2007-10-12', 'ClosedDate': '2007-10-12', 'Notes': '<! 2007-10-11 08:41:26 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for final publication as an M-series NBMG map.&nbsp; Ron provided .eps file to be cleaned up in Illustrator for final publication. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<!--/*SC*/ 2007-10-11 15:45:25 mauldin /*EC*/-->', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Draft ready for Dick&#39;s re', 'EmployeeID': 'M162 Petroleum Data Map of Nevada', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1904', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-10-12', 'WorkOrderDescription': '', 'StartDate': '2007-10-12', 'DueDate': '2007-11-09', 'ClosedDate': '2007-11-09', 'Notes': '<! 2007-10-12 14:08:38 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Develop a plan for evolving the EJ Crafford Geologic Map of NV and DS 249 into both geodatabase and hard copy products.&nbsp; Consider base layers and additional NBMG produced geologic datasets that need to be incorporated.', 'EmployeeID': 'Plan Development for new NV State Geologic Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1905', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-10-12', 'WorkOrderDescription': '', 'StartDate': '2007-10-12', 'DueDate': '2007-12-31', 'ClosedDate': '2007-12-31', 'Notes': '<! 2007-10-12 14:28:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Complete South Half of Searchlight geologic map for completion as OFR Publication.&nbsp; Closed associated work orders&#58;&nbsp; 1709 - air photos prep for 1773 - N half Searchlight (SM05). ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-10-23 07:29:51 mauldin ', 'EmployeeID': 'Searchlight Quad', 'CustomerID': ' South Half Map Completion', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1906', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-10-16', 'WorkOrderDescription': '', 'StartDate': '2007-10-16', 'DueDate': '2007-12-15', 'ClosedDate': '2007-12-15', 'Notes': '<! 2007-10-16 11:16:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize lines and points', 'EmployeeID': ' generate polygons', 'CustomerID': ' incl mods as needed.&nbsp; Layout of final product for completion as OFR publication. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Fernley West', 'CustomerID': ' North', 'PriorityID': ' Map Completion', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1907', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-10-16', 'WorkOrderDescription': '', 'StartDate': '2007-10-16', 'DueDate': '2007-12-15', 'ClosedDate': '2007-12-15', 'Notes': '<! 2007-10-16 11:57:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize lines and points', 'EmployeeID': ' generate polygons', 'CustomerID': ' incl mods as needed.&nbsp; Layout of final product for completion as OFR publication. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Fernley East Map Completion', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1908', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-10-18', 'WorkOrderDescription': '', 'StartDate': '2007-10-18', 'DueDate': '2007-11-17', 'ClosedDate': '2007-11-17', 'Notes': '<! 2007-10-18 08:48:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Compile logos and identifiers into one folder for easy access and standardization. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Style Guide for Publications', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1909', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-10-23', 'WorkOrderDescription': '', 'StartDate': '2007-10-23', 'DueDate': '2007-11-21', 'ClosedDate': '2007-11-21', 'Notes': '<! 2007-10-23 12:34:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Figure Edits Layout</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'NBMG Report 52 - CO2 Sequestration', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1910', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-10-30', 'WorkOrderDescription': '', 'StartDate': '2007-10-30', 'DueDate': '2009-12-31', 'ClosedDate': '2009-12-31', 'Notes': '<! 2007-10-30 11:20:58 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Research and gather publication status records by starting with NBMG published maps; compile into a pilot IMS project for internal use initially. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prep Work for NBMG Online Publication Inventory', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1911', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-11-02', 'WorkOrderDescription': '', 'StartDate': '2007-11-02', 'DueDate': '2007-11-08', 'ClosedDate': '2007-11-08', 'Notes': '<! 2007-11-02 09:18:31 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare and deliver a presentation of shared GIS capabilities to the Division of Minerals.&nbsp; Includes&#58;&nbsp; 1)A hardcopy of the rev geothermal resources map (former Map 161', 'EmployeeID': ' now OFR) 2)Demo of the geothermal resour', 'CustomerID': 'DOM Presentation of Multi-modal Shared GIS Capability', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1912', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-11-01', 'WorkOrderDescription': '', 'StartDate': '2007-11-01', 'DueDate': '2007-11-30', 'ClosedDate': '2007-11-30', 'Notes': '<! 2007-11-02 09:53:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take less than 2 hours to complete. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - November', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1913', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-11-06', 'WorkOrderDescription': '', 'StartDate': '2007-11-06', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-11-06 10:04:22 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion GQ1714', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 13:07:22 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 9/3/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1714 Weiser Ridge', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1914', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-11-06', 'WorkOrderDescription': '', 'StartDate': '2007-11-06', 'DueDate': '2007-11-20', 'ClosedDate': '2007-11-20', 'Notes': '<! 2007-11-06 10:20:07 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Research all Statemap deliverables', 'EmployeeID': ' both maps and GIS conversions.&nbsp; Verify publication and submission to USGS Website.&nbsp; Submit those deliverables not already on the site. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Research', 'CustomerID': ' Verify and Update Statemap Deliverables thru 2006', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1915', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-11-06', 'WorkOrderDescription': '', 'StartDate': '2007-11-06', 'DueDate': '2007-12-01', 'ClosedDate': '2007-12-01', 'Notes': '<! 2007-11-06 15:20:30 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Reprint 15 copies', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Reprint R40 Sediment-Hosted Precious-Metal Deposits', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1916', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-11-08', 'WorkOrderDescription': '', 'StartDate': '2007-11-08', 'DueDate': '2007-11-15', 'ClosedDate': '2007-11-15', 'Notes': '<! 2007-11-08 14:27:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Using relevant text from the hazard Mitigation plan together with updated HAZUS risk-damage tables and maps of the affected areas', 'EmployeeID': ' assemble in Word and convert to .pdf as needed.&nbsp; Post as OF07-1 on the Bureau website. ', 'CustomerID': 'OF07-1 HAZUS Earthquake update', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1917', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-11-09', 'WorkOrderDescription': '', 'StartDate': '2007-11-09', 'DueDate': '2007-12-31', 'ClosedDate': '2007-12-31', 'Notes': '<! 2007-11-09 13:27:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Provide GIS coordination and support for DOM Renewables mapping projects related to renewable energy and power transmission facilities.&nbsp; DOM contact is Christy Morris.&nbsp; Total allocated $6', 'EmployeeID': '000.00.&nbsp;', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'DOM - GIS Support for Renewables/Transmission Task Force', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1918', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-11-15', 'WorkOrderDescription': '', 'StartDate': '2007-11-15', 'DueDate': '2007-11-25', 'ClosedDate': '2007-11-25', 'Notes': '<! 2007-11-15 10:30:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Using relevant text from the hazard Mitigation plan together with updated HAZUS risk-damage tables and maps of the affected areas', 'EmployeeID': ' assemble in Word and convert to .pdf as needed. &nbsp;Post as OF07-2 on the Bureau website.<', 'CustomerID': 'OF07-2 HAZUS Flood update and publication', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1919', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-11-27', 'WorkOrderDescription': '', 'StartDate': '2007-11-27', 'DueDate': '2007-12-30', 'ClosedDate': '2007-12-30', 'Notes': '<! 2007-11-27 14:26:00 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Experiment with installation of Hazus MR3 on Windows XP', 'EmployeeID': ' Windows Server 2003', 'CustomerID': ' and virtual PC&#39;s running Windows XP under Windows Server; also with ESRI ArcGIS service packs 2 and 3.&nbsp; Report results in a succinct ', 'PriorityID': 'Install Hazus/MR3', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1920', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-11-27', 'WorkOrderDescription': '', 'StartDate': '2007-11-27', 'DueDate': '2007-12-15', 'ClosedDate': '2007-12-15', 'Notes': '<! 2007-11-27 14:38:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Research which technology to write the document in', 'EmployeeID': ' and&nbsp;what are the capabilities of the various tools for interactive multimedia presentation of the document. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Technology for document on ArcGeology Best Practice', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1921', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-11-27', 'WorkOrderDescription': '', 'StartDate': '2007-11-27', 'DueDate': '2008-01-15', 'ClosedDate': '2008-01-15', 'Notes': '<! 2007-11-27 14:56:43 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Get a pilot piece of words for converting lines and points into polygons using ArcGeology Best Practices and insert that pilot piece into the various technologies that have been identified previously. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prepare a pilot piece of the ArcGeology Best Practices document', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1922', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-11-27', 'WorkOrderDescription': '', 'StartDate': '2007-11-27', 'DueDate': '2007-12-03', 'ClosedDate': '2007-12-03', 'Notes': '<! 2007-11-27 15:05:56 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '1 figure required for the N/W AZ Field Trip for the GSA field trip for 3/2008 in Las Vegas.&nbsp; 3 hours maximum approved by Jim Faulds. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2007-12-04 16:16:42 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '3Hrs to be billed.&nbsp; 2.5 Hrs unbillable.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GSA Field Trip figure', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1923', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-11-30', 'WorkOrderDescription': '', 'StartDate': '2007-11-30', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-11-30 11:55:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion 4Bg', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 10:24:16 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 9/15/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 4Bg Mount Rose NE', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1924', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2007-11-30', 'WorkOrderDescription': '', 'StartDate': '2007-11-30', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-11-30 12:00:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion 1Bg', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 10:32:01 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 9/16/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 1Bg New Empire', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1925', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2007-11-30', 'WorkOrderDescription': '', 'StartDate': '2007-11-30', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-11-30 12:02:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion 2Ag', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:39:17 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 9/23/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 2Ag South Lake Tahoe', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1926', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2007-11-30', 'WorkOrderDescription': '', 'StartDate': '2007-11-30', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-11-30 12:05:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion 4Fg', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:49:38 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Metadata complete 10/6/2008</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 4Fg Steamboat', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1927', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2007-11-30', 'WorkOrderDescription': '', 'StartDate': '2007-11-30', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2007-11-30 12:37:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Miscellaneous work done to complete Statemap 2007', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Master GIS Conversion', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1928', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-10-22', 'WorkOrderDescription': '', 'StartDate': '2007-10-22', 'DueDate': '2007-10-28', 'ClosedDate': '2007-10-28', 'Notes': '<! 2007-12-03 11:54:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Edit Presentation for GSA 2007.&nbsp; Topic &#34;ArcGeology Field System&#34;.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GSA 2007 Presentation', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1929', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2007-12-04', 'WorkOrderDescription': '', 'StartDate': '2007-12-04', 'DueDate': '2007-12-31', 'ClosedDate': '2007-12-31', 'Notes': '<! 2007-12-04 14:25:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take less than 2 hours to complete. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - December', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1930', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-01-02', 'WorkOrderDescription': '', 'StartDate': '2008-01-02', 'DueDate': '2008-01-31', 'ClosedDate': '2008-01-31', 'Notes': '<! 2008-01-02 15:06:25 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Unbillable hours for January', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - January', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1931', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-01-03', 'WorkOrderDescription': '', 'StartDate': '2008-01-03', 'DueDate': '2008-09-30', 'ClosedDate': '2008-09-30', 'Notes': '<! 2008-01-03 09:50:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Highway 93 book - actual hours thru 12/31/2007 are 698.5', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-01-03 09:53:01 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>This work order supersedes #1582 which was originally opened in Pubstatus.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Highway 93 in Nevada and Arizona', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1932', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-01-07', 'WorkOrderDescription': '', 'StartDate': '2008-01-07', 'DueDate': '2008-02-20', 'ClosedDate': '2008-02-20', 'Notes': '<! 2008-01-07 11:29:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Work with Larry Garside to organize a team of geologists and cartographers who will then evaluate the mapdata for the Liz Jones Crafford State map. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-01-08 09:27:21 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This critical evaluation of the Crafford m', 'EmployeeID': 'Evaluation of Mapdata for Liz Crafford Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1933', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-01-16', 'WorkOrderDescription': '', 'StartDate': '2008-01-16', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2008-01-16 16:29:00 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>1)&nbsp; Train new person on procedure to georeference mining district maps.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2)&nbsp; Develop and implement an ArcGIS servor web application displaying mining district maps with links to .pdf files on the internet', 'EmployeeID': 'DOM Mining District Webmap Application and Training', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1934', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-01-17', 'WorkOrderDescription': '', 'StartDate': '2008-01-17', 'DueDate': '2008-02-29', 'ClosedDate': '2008-02-29', 'Notes': '<! 2008-01-17 12:45:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Set-up Win 03 server within Cart &amp; GIS (replacing Gary 13) to support webmapping (ArcGIS server - IMS portion) for DOM Georeferencing and DOM Renewables projects - Split Billing. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-06-04 11:39:15 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '49.5 ho', 'EmployeeID': 'Set-up Webmapping Server', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1935', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-01-23', 'WorkOrderDescription': '', 'StartDate': '2008-01-23', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2008-01-23 11:37:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Master work order for BLM Clark County 2008 GIS mapping support', 'EmployeeID': ' including both GIS conversions and new mapping.&nbsp; Anticipated GIS conversions are Iceberg Canyon and Davis Dam.&nbsp; Anticipated new mapping projects are', 'CustomerID': 'Clark County 2008 GIS Support Master', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1936', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-02-01', 'WorkOrderDescription': '', 'StartDate': '2008-02-01', 'DueDate': '2008-02-29', 'ClosedDate': '2008-02-29', 'Notes': '<! 2008-02-01 11:21:56 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Unbillable hours for February', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - February', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1937', 'EmployeeID': '105613', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-02-07', 'WorkOrderDescription': '', 'StartDate': '2008-02-08', 'DueDate': '2008-05-07', 'ClosedDate': '2008-03-16', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1938', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-02-11', 'WorkOrderDescription': '', 'StartDate': '2008-02-11', 'DueDate': '2008-03-31', 'ClosedDate': '2008-03-31', 'Notes': '<! 2008-02-11 14:29:19 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is to be used to track time spent learning about the web and learning how to maintain the NBMG website.&nbsp; &nbsp;', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Training and Maintenance', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1939', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-02-11', 'WorkOrderDescription': '', 'StartDate': '2008-02-11', 'DueDate': '2008-03-30', 'ClosedDate': '2008-03-30', 'Notes': '<! 2008-02-11 14:43:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>1.&nbsp; Rebuild contacts around merged polygons', 'EmployeeID': ' superimpose faults.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2.&nbsp; Choose unit colors to follow USGS style standards.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>3.&nbsp; Layout with correlation diagrams', 'EmployeeID': ' using new colors.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>4.&nbsp;', 'EmployeeID': 'Crafford State Geologic Map @ 1&#58;500', 'CustomerID': '000', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1940', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-02-14', 'WorkOrderDescription': '', 'StartDate': '2008-02-14', 'DueDate': '2008-04-04', 'ClosedDate': '2008-04-04', 'Notes': '<! 2008-02-14 14:55:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>B62 - Clark County - 50 copies</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>B73 - Lincoln County - 20 copies</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>These quantities represent a 2 yrs supply</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Reprints of Geology & Mineral Deposits for Clark County & for Lincoln County', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1941', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-02-21', 'WorkOrderDescription': '', 'StartDate': '2008-02-21', 'DueDate': '2008-03-07', 'ClosedDate': '2008-03-07', 'Notes': '<! 2008-02-25 08:54:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'All support for documentation of Wells earthquake of 2/21/2008', 'EmployeeID': ' including Hazus runs and Website creation and maintenance. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Wells NV 21Feb08 EQ Support', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1942', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-02-25', 'WorkOrderDescription': '', 'StartDate': '2008-02-25', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-02-25 09:36:30 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize M97 into GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 10:03:18 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 10/7/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Mineral Hill', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1943', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-02-25', 'WorkOrderDescription': '', 'StartDate': '2008-02-25', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-02-25 09:41:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Digitize GQ1186 to GIS</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 10:55:11 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Metadata complete 10/8/2008</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Piper Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1944', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-02-25', 'WorkOrderDescription': '', 'StartDate': '2008-02-25', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-02-25 09:46:23 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize GQ1325 to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:01:19 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 10/9/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Rhyolite Ridge', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1945', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-02-25', 'WorkOrderDescription': '', 'StartDate': '2008-02-25', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-02-25 09:50:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize GQ1756 to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:29:23 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 10/13/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Round Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1946', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-02-25', 'WorkOrderDescription': '', 'StartDate': '2008-02-25', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-02-25 09:52:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize M76 to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:34:05 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 10/14/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Rye Patch Reservoir South', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1947', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-02-25', 'WorkOrderDescription': '', 'StartDate': '2008-02-25', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-02-25 09:57:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize B92 to GIS', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-27 11:58:19 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Metadata complete 10/15/2008', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Tonopah', 'CustomerID': ' Lone Mountain', 'PriorityID': ' Klondike', 'StatusID': ' N. Mud Lake', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1948', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-03-03', 'WorkOrderDescription': '', 'StartDate': '2008-03-03', 'DueDate': '2008-03-31', 'ClosedDate': '2008-03-31', 'Notes': '<! 2008-03-03 15:03:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Unbillable hours for March', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - March', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1949', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-03-06', 'WorkOrderDescription': '', 'StartDate': '2008-03-06', 'DueDate': '2008-03-31', 'ClosedDate': '2008-03-31', 'Notes': '<! 2008-03-06 09:36:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Update the Statemap 2007 Fact Sheet with 2008 award information.&nbsp; This document should be converted from InDesign.&nbsp; Team to include Shelly DeLaureal. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Update Statemap 2008 Fact Sheet', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1950', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-03-06', 'WorkOrderDescription': '', 'StartDate': '2008-03-06', 'DueDate': '2008-05-16', 'ClosedDate': '2008-05-16', 'Notes': '<! 2008-03-06 10:17:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Scanning', 'EmployeeID': ' corrections', 'CustomerID': ' typeset', 'PriorityID': ' layout', 'StatusID': ' prepress', 'SubmittedDate': ' print.&nbsp; (IPO to Acct 1032 to cover printing charges.)', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-07-02 10:08:31 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is cancelled.&nbsp; Pub Sales has determined they have approx. one', 'EmployeeID': 'SP6 Mining Claim Procedures 6th Edition Reprint - Cancelled', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1951', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-03-14', 'WorkOrderDescription': '', 'StartDate': '2008-03-14', 'DueDate': '2008-04-15', 'ClosedDate': '2008-04-15', 'Notes': '<! 2008-03-14 14:32:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Work with Nick to create revised inset map for Searchlight (1905); in the process', 'EmployeeID': ' define suitable transfer mechanisms between VR2 and ArcGeology.&nbsp; Optionally', 'CustomerID': ' present results at DMT08.</P>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>ESTIMATED COST&#58;&nb', 'EmployeeID': 'Revised Searchlight Inset Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1952', 'EmployeeID': '105611', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-03-13', 'WorkOrderDescription': '', 'StartDate': '2008-03-18', 'DueDate': '2008-06-11', 'ClosedDate': '2008-07-12', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1953', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-03-27', 'WorkOrderDescription': '', 'StartDate': '2008-03-27', 'DueDate': '2008-04-15', 'ClosedDate': '2008-04-15', 'Notes': '<! 2008-03-27 10:00:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Develop poster(s) of Energy and Mineral Resources in Mineral-Esmeralda-Lyon-Douglas (MELD) 4-county area', 'EmployeeID': ' in support of pending land bills.&nbsp; Produce via GIS from list of published sources attached.&nbsp; Use Webmapping', 'CustomerID': 'Mineral-Esmeralda-Lyon-Douglas (MELD) County Posters', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1954', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-03-27', 'WorkOrderDescription': '', 'StartDate': '2008-03-27', 'DueDate': '2008-05-10', 'ClosedDate': '2008-05-10', 'Notes': '<! 2008-03-27 11:13:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Assist with production of figures for publication in AZGS publication due 5/15/2008.&nbsp; Initial draft due early April; final in early May.&nbsp; Use AI10.&nbsp; Interface with Chris Henry in Jim Fauld&#39;s absence.&nbsp', 'EmployeeID': 'Figures for Walker Lane Evolution Article', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1955', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-04-01', 'WorkOrderDescription': '', 'StartDate': '2008-04-01', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-04-02 15:12:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Unbillable hours for April', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - April', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1956', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-04-01', 'WorkOrderDescription': '', 'StartDate': '2008-04-01', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2008-04-02 16:32:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is to be used to track time spent learning about the web and learning how to maintain the NBMG website. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Training and Maintenance - 2nd Qtr 2008', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1957', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-04-02', 'WorkOrderDescription': '', 'StartDate': '2008-04-02', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-04-07 10:03:34 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert Davis Dam to ArcGeology format for release as M-series. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-05-26 10:12:52 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Still preliminay.&nbsp; No Open-file number assigned. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Davis Dam GIS Conversion', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1958', 'EmployeeID': '105613', 'CustomerID': '4046', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-04-02', 'WorkOrderDescription': '', 'StartDate': '2008-04-08', 'DueDate': '2008-07-01', 'ClosedDate': '2008-07-13', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1959', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-04-08', 'WorkOrderDescription': '', 'StartDate': '2008-04-08', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2008-04-08 13:45:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Install ArcGIS 9.3 Beta and begin Testing Desktop and Workstation applications.&nbsp; Team includes&#58;&nbsp; Gary Johnson', 'EmployeeID': ' Jordan Hastings', 'CustomerID': ' Jennifer Mauldin. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'ArcGIS 9.3 Beta Installation and Testing', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1960', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-04-09', 'WorkOrderDescription': '', 'StartDate': '2008-04-09', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2008-04-22 13:58:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Coordinate with ESRI on emplementation of the FGDC2006 Cartographic Standards as representations on ArcGIS 9.2 &amp; 9.3. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'FGDC 2006 Representations', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1961', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-04-22', 'WorkOrderDescription': '', 'StartDate': '2008-04-22', 'DueDate': '2008-05-30', 'ClosedDate': '2008-05-30', 'Notes': '<! 2008-04-22 14:55:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise / Re-issue Geothermal Resources of Nevada as both hardcopy (3rd edition) and online (M141) map products. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Nevada Geothermal Resources - Update of Map141 (3rd edition)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1962', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-04-22', 'WorkOrderDescription': '', 'StartDate': '2008-04-22', 'DueDate': '2008-09-30', 'ClosedDate': '2008-09-30', 'Notes': '<! 2008-04-22 15:28:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Issue Significant Mineral Deposits of Nevada as both hardcopy (M new) and online (W new) map products.&nbsp; Time Frame&#58;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1.&nbsp; 10 hours from MELD in-process - complete by 4/30/2008</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2.&nbsp; 20 hours ', 'EmployeeID': 'Significant Mineral Deposits', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1963', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-04-29', 'WorkOrderDescription': '', 'StartDate': '2008-04-29', 'DueDate': '2008-04-30', 'ClosedDate': '2008-04-30', 'Notes': '<! 2008-04-30 10:47:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'SP27 &#34;Living with Earthquakes in Nevada&#34; minor edits for publication in the Sunday edition of the Reno Gazette Journal. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SP27 Edits for RGJ Sunday Edition', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1964', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-05-01', 'WorkOrderDescription': '', 'StartDate': '2008-05-01', 'DueDate': '2008-05-31', 'ClosedDate': '2008-05-31', 'Notes': '<! 2008-05-02 08:54:50 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Unbillable hours for May', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - May', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1965', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-05-07', 'WorkOrderDescription': '', 'StartDate': '2008-05-07', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-05-07 12:04:25 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert 23 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; Those maps cover 23 7.5-minute quads in the greater Las Vegas and Reno urban areas and the highest priority areas of rural ', 'EmployeeID': 'Statemap 2008 GIS Conversion Master', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1966', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-05-13', 'WorkOrderDescription': '', 'StartDate': '2008-05-13', 'DueDate': '2008-05-31', 'ClosedDate': '2008-05-31', 'Notes': '<! 2008-05-13 12:38:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Create a website', 'EmployeeID': ' within the NBMG website', 'CustomerID': ' that has the (4) tour guide books as web editions.&nbsp; Site&nbsp;to start out as main home page with covers of all 4 books', 'PriorityID': ' leading to a TOC with a few pages/images/maps from the', 'StatusID': 'Web Tourbooks Pilot Project', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1967', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-05-21', 'WorkOrderDescription': '', 'StartDate': '2008-05-21', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2008-05-21 11:25:43 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order to include any work done to prepare for the upcoming Vigilant Guard exercise.&nbsp; Also covers&nbsp;the set-up of an Internal web site.&nbsp; Linda Goar and volunteer Janell Woodward also assigned. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Vigilant Guard Exercise', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1968', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-06-01', 'WorkOrderDescription': '', 'StartDate': '2008-06-01', 'DueDate': '2008-06-30', 'ClosedDate': '2008-06-30', 'Notes': '<! 2008-06-04 12:14:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is to track unbillable hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1969', 'EmployeeID': '105600', 'CustomerID': '4057', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-05-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-02', 'DueDate': '2008-08-25', 'ClosedDate': '2008-08-16', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1970', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-06-09', 'WorkOrderDescription': '', 'StartDate': '2008-06-09', 'DueDate': '2008-06-17', 'ClosedDate': '2008-06-17', 'Notes': '<! 2008-06-13 14:12:38 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Create interactive maps for 12 different themes linked to current mxd files (data is on library server). ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Interactive Maps for Great Basin Center for Geothermal Energy', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1971', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-06-18', 'WorkOrderDescription': '', 'StartDate': '2008-06-18', 'DueDate': '2008-07-01', 'ClosedDate': '2008-07-01', 'Notes': '<! 2008-06-18 14:44:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Combine Chris Henry&#39;s Illustrator digitizing and existing maps', 'EmployeeID': ' then crop &amp; generalize for figure to go with Ninehill Map.&nbsp; Charges not to exceed $250.00. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Ninehill Figure', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1972', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-06-23', 'WorkOrderDescription': '', 'StartDate': '2008-06-23', 'DueDate': '2008-08-15', 'ClosedDate': '2008-08-15', 'Notes': '<! 2008-06-23 12:19:07 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize the Pequop Mountains and Wood Hills maps (Camilleri', 'EmployeeID': ' unpub) into ArcGeology v1; include cross sections. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-07-02 10:45:00 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>These maps will be published separately.&nbsp; Therefore this work order w', 'EmployeeID': 'Digitize Northern Pequop Mtns and Wood Hills - Cancelled', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1973', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-06-24', 'WorkOrderDescription': '', 'StartDate': '2008-06-24', 'DueDate': '2008-07-31', 'ClosedDate': '2008-07-31', 'Notes': '<! 2008-06-24 09:59:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare the annual Major Mines 2007 publication from attached markup.&nbsp; Also expect new photos from M. Visher (NDOM).&nbsp; Initially', 'EmployeeID': ' cross-check against the active mines database maintained by D. Davis. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines of Nevada 2007 - P-19', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1974', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-06-24', 'WorkOrderDescription': '', 'StartDate': '2008-06-24', 'DueDate': '2008-08-01', 'ClosedDate': '2008-08-01', 'Notes': '<! 2008-06-24 13:30:14 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare GIS coverage of map for 2008 deliverable.&nbsp; Convert geodatabase to ArcGeology - Prepare layout - Publish as NBMG open file. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-01-27 09:20:21 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Published as OF08-3', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Spirit Mountain SE (GIS)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1975', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-06-24', 'WorkOrderDescription': '', 'StartDate': '2008-06-24', 'DueDate': '2009-08-01', 'ClosedDate': '2009-08-01', 'Notes': '<! 2008-06-24 13:43:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Gass Peak SW (New)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1976', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-06-24', 'WorkOrderDescription': '', 'StartDate': '2008-06-24', 'DueDate': '2009-08-01', 'ClosedDate': '2009-08-01', 'Notes': '<! 2008-06-24 13:50:07 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Ireteba Peaks (New)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1977', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-06-24', 'WorkOrderDescription': '', 'StartDate': '2008-06-24', 'DueDate': '2009-08-01', 'ClosedDate': '2009-08-01', 'Notes': '<! 2008-06-24 14:00:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Jean (New)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1978', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-06-24', 'WorkOrderDescription': '', 'StartDate': '2008-06-24', 'DueDate': '2009-08-01', 'ClosedDate': '2009-08-01', 'Notes': '<! 2008-06-24 14:04:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-02-17 12:19:00 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Work Order is canceled - to be issued at a later date.&nbsp;', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Ute (New)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1979', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-06-25', 'WorkOrderDescription': '', 'StartDate': '2008-06-25', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-25 12:02:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR00-8', 'EmployeeID': ' location 40116 E7', 'CustomerID': ' Rural Nevada.&nbsp; Priority #16', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Bateman Spring ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1980', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-06-25', 'WorkOrderDescription': '', 'StartDate': '2008-06-25', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-25 12:29:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP159', 'EmployeeID': ' location 39116 H3', 'CustomerID': ' Rural Nevada.&nbsp; Priority #17', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Cooper Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1981', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-06-25', 'WorkOrderDescription': '', 'StartDate': '2008-06-25', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-25 13:24:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1745', 'EmployeeID': ' location 37114 G7', 'CustomerID': ' Rural Nevada.&nbsp; Priority #22', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Deadman Spring SE', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1982', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-06-25', 'WorkOrderDescription': '', 'StartDate': '2008-06-25', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-25 15:36:52 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-27', 'EmployeeID': ' location 39118 G8', 'CustomerID': ' Reno Area.&nbsp; Priority #9', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Desert Peak-Brady', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1983', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 10:07:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP106', 'EmployeeID': ' location 35114 F6', 'CustomerID': ' Las Vegas Area.&nbsp; Priority #2', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Fire Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1984', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 11:07:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR00-9', 'EmployeeID': ' location 38119 H6', 'CustomerID': ' Reno Area.&nbsp; Priority #10', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Gardnerville', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1985', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 11:27:15 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS NBMG R87-8', 'EmployeeID': ' location 39119 G8', 'CustomerID': ' Reno Area.&nbsp; Priority #11', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Granite Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1986', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 11:53:43 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-12', 'EmployeeID': ' location 36115 C8', 'CustomerID': ' Las Vegas Area.&nbsp; Priority #3', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Horse Springs', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1987', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 11:58:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1710', 'EmployeeID': ' location 39118 D3', 'CustomerID': ' Rural Nevada.&nbsp; Priority #20', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 La Plata Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1988', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 12:08:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1587 (15&#39;)', 'EmployeeID': ' location 37117 D5', 'CustomerID': ' Rural Nevada.&nbsp; Priority #24', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Magruder Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1989', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 12:18:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-13', 'EmployeeID': ' location 38119 H7', 'CustomerID': ' Reno Area.&nbsp; Priority #12', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Minden', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1990', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2008-06-26', 'ClosedDate': '2008-06-26', 'Notes': '<! 2008-06-26 12:26:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS OF96-521', 'EmployeeID': ' location 36114 F6', 'CustomerID': ' Las Vegas Area.&nbsp; Priority #4', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Moapa West', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1991', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 12:32:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP157', 'EmployeeID': ' location 39119 F4', 'CustomerID': ' Reno Area.&nbsp; Priority #13', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Olinghouse', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1992', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 14:52:14 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1752', 'EmployeeID': ' location 37114 E7', 'CustomerID': ' Rural Nevada.&nbsp; Priority #23', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pahroc Spring SE', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1993', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-06-26', 'WorkOrderDescription': '', 'StartDate': '2008-06-26', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-26 14:56:42 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize to GIS NBMG OFR99-14', 'EmployeeID': ' location 36115 B8', 'CustomerID': ' Las Vegas Area.&nbsp; Priority #5', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pahrump', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1994', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 08:22:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS NBMG FS8', 'EmployeeID': ' location 39118 F4', 'CustomerID': ' Rural Nevada.&nbsp; Priority #19', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pintail Bay', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1995', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 08:33:28 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS NBMG FS9', 'EmployeeID': ' location 39118 D2', 'CustomerID': ' Rural Nevada.&nbsp; Priority #21', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pirouette Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1996', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 09:11:42 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1770 (1997)', 'EmployeeID': ' location 36114 F2', 'CustomerID': ' Las Vegas Area.&nbsp; Priority #6', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Riverside', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1997', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 09:16:17 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1765', 'EmployeeID': ' location 37114 H3', 'CustomerID': ' Rural Nevada.&nbsp; Priority #18', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Rose Valley', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1998', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 10:15:32 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP155', 'EmployeeID': ' location 41116 A4', 'CustomerID': ' Rural Nevada.&nbsp; Priority #15', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Santa Renia Fields', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '1999', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 10:20:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-11', 'EmployeeID': ' location 36116 B1', 'CustomerID': ' Las Vegas Area.&nbsp; Priority #7', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Sixmile Spring', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2000', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 10:25:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-17', 'EmployeeID': ' location 39115 H5', 'CustomerID': ' Reno Area.&nbsp; Priority #14', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Sutcliffe', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2001', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2008-06-27 10:33:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS OF 93-716', 'EmployeeID': ' location 36114 E2', 'CustomerID': ' Las Vegas Area.&nbsp; Priority #8', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Whitney Pocket', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2002', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-06-27', 'WorkOrderDescription': '', 'StartDate': '2008-06-27', 'DueDate': '2008-10-01', 'ClosedDate': '2008-10-01', 'Notes': '<! 2008-06-27 10:41:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'A)&nbsp; Preliminary set-up of folder structure', 'EmployeeID': ' geodatabase', 'CustomerID': ' base materials.&nbsp; Note&#58;&nbsp; Map will probably be published as an NBMG Open-file. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-07-07 16:16:41 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is canceled. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Lee-Allen Geothermal Mapping', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2003', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-07-01', 'WorkOrderDescription': '', 'StartDate': '2008-07-01', 'DueDate': '2008-07-31', 'ClosedDate': '2008-07-31', 'Notes': '<! 2008-07-01 16:08:52 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is to track unbillable hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - July', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2004', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-07-01', 'WorkOrderDescription': '', 'StartDate': '2008-07-01', 'DueDate': '2008-09-30', 'ClosedDate': '2008-09-30', 'Notes': '<! 2008-07-02 08:21:14 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is to be used to track all time spent maintaining the NBMG website. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd Qtr - 08', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2005', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-07-02', 'WorkOrderDescription': '', 'StartDate': '2008-07-02', 'DueDate': '2008-08-15', 'ClosedDate': '2008-08-15', 'Notes': '<! 2008-07-02 11:05:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize the Pequop Mountains map (Camilleri', 'EmployeeID': ' unpub) into ArcGeology v1; include cross sections. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Digitize Northern Pequop Mountains', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2006', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-07-02', 'WorkOrderDescription': '', 'StartDate': '2008-07-02', 'DueDate': '2008-08-15', 'ClosedDate': '2008-08-15', 'Notes': '<! 2008-07-02 11:08:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize Wood Hills map (Camilleri', 'EmployeeID': ' unpub) into ArcGeology v1; include cross sections. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Digitize Wood Hills', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2007', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-07-10', 'WorkOrderDescription': '', 'StartDate': '2008-07-10', 'DueDate': '2008-08-08', 'ClosedDate': '2008-08-08', 'Notes': '<! 2008-07-29 10:55:47 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise ArcGeology v1.2 data model per attached specifications. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'ArcGeology v1.3 Data Model', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2008', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-07-17', 'WorkOrderDescription': '', 'StartDate': '2008-07-17', 'DueDate': '2009-06-30', 'ClosedDate': '2009-06-30', 'Notes': '<! 2008-07-29 11:09:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Design/Develop and implement new 2.0 dynamic version of Bureau public website using new technology compatible with UNR support.&nbsp; Work to be done in phases per paperwork attached. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'NBMG Web 2.0 Design and Development', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2009', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-07-29', 'WorkOrderDescription': '', 'StartDate': '2008-07-29', 'DueDate': '2008-08-29', 'ClosedDate': '2008-08-29', 'Notes': '<! 2008-07-29 13:07:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Development of Ground Water Recharge estimates in Nevada with emphasis on using long-term precipitation data.&nbsp; Time estimates&#58;&nbsp; Web - 5 hours; Printed - 50 hours.&nbsp; Direct bill&#58;&nbsp; Southern Nevada W', 'EmployeeID': 'Development of Ground Water Recharge Estimates in Nevada', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2010', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-08-01', 'WorkOrderDescription': '', 'StartDate': '2008-08-01', 'DueDate': '2008-08-31', 'ClosedDate': '2008-08-31', 'Notes': '<! 2008-08-01 14:43:17 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - August', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2011', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-08-18', 'WorkOrderDescription': '', 'StartDate': '2008-08-18', 'DueDate': '2008-12-12', 'ClosedDate': '2008-12-12', 'Notes': '<! 2008-08-18 08:18:46 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Work to be done in two phases.&nbsp; A)&nbsp; Update slides', 'EmployeeID': ' save as .jpg or .pp - est time - 8 hrs.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>B)&nbsp; Produce Web only MI2007 - est time - 60 hrs.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Mineral Industry 2007 and Powerpoint Slides', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2012', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-08-18', 'WorkOrderDescription': '', 'StartDate': '2008-08-18', 'DueDate': '2008-12-31', 'ClosedDate': '2008-12-31', 'Notes': '<! 2008-08-18 13:50:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>(A)&nbsp; Provide website and webmapping support to the RETAAC Phase II effort via a combination of Google and Cartograph services.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>(B)&nbsp; Provide final publication support for the RETAAC Phase II report.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'RETAAC II - Support', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2013', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-08-27', 'WorkOrderDescription': '', 'StartDate': '2008-08-27', 'DueDate': '2008-10-15', 'ClosedDate': '2008-10-15', 'Notes': '<! 2008-09-02 16:01:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Reprint PC7 - Geologic; PC5 - Icky; plus possible new postcards.&nbsp; Minimum quantities.&nbsp; Pub-Sales to be billed directly for printing costs. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Postcard Reprints ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2014', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-09-02', 'WorkOrderDescription': '', 'StartDate': '2008-09-02', 'DueDate': '2008-09-30', 'ClosedDate': '2008-09-30', 'Notes': '<! 2008-09-02 16:13:18 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - September', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2015', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-09-02', 'WorkOrderDescription': '', 'StartDate': '2008-09-02', 'DueDate': '2008-12-31', 'ClosedDate': '2008-12-31', 'Notes': '<! 2008-09-09 13:41:42 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Perform Pilot Phase of Southern Washoe County geologic map compilation', 'EmployeeID': ' per task list enclosed. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Southern Washoe County Compilation - Pilot', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2016', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-09-09', 'WorkOrderDescription': '', 'StartDate': '2008-09-09', 'DueDate': '2008-10-31', 'ClosedDate': '2008-10-31', 'Notes': '<! 2008-09-09 13:49:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Refine and streamline M and E (Minerals and Energy) webmap in support of pending land bills. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-06-22 14:27:01 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Project CANCELED. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'M and E (Minerals and Energy) Webmap', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2017', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-09-09', 'WorkOrderDescription': '', 'StartDate': '2008-09-09', 'DueDate': '2008-10-15', 'ClosedDate': '2008-10-15', 'Notes': '<! 2008-09-09 14:07:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Produce Minerals and Energy Resource poster for Nye County following model of MELD poster.&nbsp; This will be first of a folio of such posters for each county. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Nye County Minerals and Energy Poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2018', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-09-10', 'WorkOrderDescription': '', 'StartDate': '2008-09-10', 'DueDate': '2008-09-17', 'ClosedDate': '2008-09-17', 'Notes': '<! 2008-09-10 10:25:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Typeset', 'EmployeeID': ' print', 'CustomerID': ' laminate the following 6 posters for the NBMG booth @ MINEXPO&#58;&nbsp; </P>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1)&nbsp; 10 Reasons poster update&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)&nbsp; &#34;N&#34; lo', 'EmployeeID': 'Posters for MINEXPO', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2019', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-09-12', 'WorkOrderDescription': '', 'StartDate': '2008-09-12', 'DueDate': '2008-09-19', 'ClosedDate': '2008-09-19', 'Notes': '<! 2008-09-15 09:23:56 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>1)&nbsp; Make (2) copies each of 5 DVD&#39;s.&nbsp; Total 10 @ $5 each.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2)&nbsp; Make (2) prints each of 6 photo&#39;s.&nbsp; Glossy photo paper est 44&#34; @ $.44/inch.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Long Valley Photos', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2020', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-09-12', 'WorkOrderDescription': '', 'StartDate': '2008-09-12', 'DueDate': '2008-09-19', 'ClosedDate': '2008-09-19', 'Notes': '<! 2008-09-15 10:45:32 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Develop turn-key web banner and site with signups', 'EmployeeID': ' information. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week 08 Web Postings', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2021', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-09-15', 'WorkOrderDescription': '', 'StartDate': '2008-09-15', 'DueDate': '2008-09-30', 'ClosedDate': '2008-09-30', 'Notes': '<! 2008-09-15 12:48:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Develop a webmap application the shows UNR land holdings in the context of M and E. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-11-26 08:52:36 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Work completed in October. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'University Lands Webmap', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2022', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-09-15', 'WorkOrderDescription': '', 'StartDate': '2008-09-15', 'DueDate': '2008-10-15', 'ClosedDate': '2008-10-15', 'Notes': '<! 2008-09-15 14:06:31 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>1)&nbsp; Research and purchase hardware - est 2 hrs.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2)&nbsp; Coordinate with Chris on installation of operating system win server 2003 and related hardware -&nbsp; </P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;&nbsp;&nbsp;&nbsp; est 1 hr.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<', 'EmployeeID': '2008 NBMG Web Server Set-up', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2023', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-09-15', 'WorkOrderDescription': '', 'StartDate': '2008-09-15', 'DueDate': '2008-11-15', 'ClosedDate': '2008-11-15', 'Notes': '<! 2008-09-15 14:17:23 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Develop a generalized', 'EmployeeID': ' small-scale geologic map of the Wells area for use in the Wells Earthquake report. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2011-05-20 15:37:56 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Actual closed date - 5/20/2011</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Wells Area Geologic Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2024', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-09-17', 'WorkOrderDescription': '', 'StartDate': '2008-09-17', 'DueDate': '2008-11-30', 'ClosedDate': '2008-11-30', 'Notes': '<! 2008-09-17 15:19:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Run Hazus for earthquakes on the closest Quaternary fault to the center of each major town in NV including all 17 county seats plus (15) cities listed separately.&nbsp; These runs should be for Magnitudes of 5.0', 'EmployeeID': ' 5.5', 'CustomerID': ' 6.0', 'PriorityID': ' ', 'StatusID': 'Hazus Earthquake Scenarios', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2025', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-10-01', 'WorkOrderDescription': '', 'StartDate': '2008-10-01', 'DueDate': '2008-10-31', 'ClosedDate': '2008-10-31', 'Notes': '<! 2008-10-02 09:29:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - October', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2026', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-09-30', 'WorkOrderDescription': '', 'StartDate': '2008-09-30', 'DueDate': '2008-10-03', 'ClosedDate': '2008-10-03', 'Notes': '<! 2008-10-02 09:46:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Make edits to existing poster. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-10-08 12:05:50 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Billed 7 hrs @ $45/hr plus $43.20 for plotter paper', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Great Basin Center for Geothermal Energy Poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2027', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-10-06', 'WorkOrderDescription': '', 'StartDate': '2008-10-06', 'DueDate': '2008-10-30', 'ClosedDate': '2008-10-30', 'Notes': '<! 2008-10-06 12:30:19 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Statemap 2007 - Kyle House', 'EmployeeID': ' Jim Faulds', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM07 Spirit Mountain NW', 'CustomerID': ' North Half', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2028', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-10-01', 'WorkOrderDescription': '', 'StartDate': '2008-10-01', 'DueDate': '2008-12-31', 'ClosedDate': '2008-12-31', 'Notes': '<! 2008-10-09 16:02:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is to be used to track all time spent maintaining the NBMG website. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th Qtr - 08', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2029', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-10-20', 'WorkOrderDescription': '', 'StartDate': '2008-10-20', 'DueDate': '2008-10-30', 'ClosedDate': '2008-10-30', 'Notes': '<! 2008-11-14 15:01:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare proposal for GIS Conversion portion of Statemap 2009. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2009 GIS Proposal', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2030', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-11-01', 'WorkOrderDescription': '', 'StartDate': '2008-11-01', 'DueDate': '2008-11-30', 'ClosedDate': '2008-11-30', 'Notes': '<! 2008-11-14 15:39:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable work. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - November', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2031', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-11-03', 'WorkOrderDescription': '', 'StartDate': '2008-11-03', 'DueDate': '2010-04-03', 'ClosedDate': '2010-04-03', 'Notes': '<! 2008-11-14 15:50:23 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Not planning to publish until Statemap deliverable', 'EmployeeID': ' but could possibly move to Open-File status during this work order. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-08-14 10:32:01 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Balance of work to be done in Statemap 2009 Acct #10LN', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Cortez/Caetano Caldera Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2032', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-11-06', 'WorkOrderDescription': '', 'StartDate': '2008-11-06', 'DueDate': '2008-12-31', 'ClosedDate': '2008-12-31', 'Notes': '<! 2008-11-25 16:03:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare the Zehner &amp; al. (200*) Geothermal Potential Map', 'EmployeeID': ' for release by NBMG as&nbsp;OF08-1.&nbsp; This will be a web-only .pdf with print-on-demand paper copies. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-04-09 14:25:38 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Released as OF09-1. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Geothermal Potential Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2033', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2008-11-14', 'WorkOrderDescription': '', 'StartDate': '2008-11-14', 'DueDate': '2009-05-30', 'ClosedDate': '2009-05-30', 'Notes': '<! 2008-11-26 09:42:29 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '1) Migrate geodatabase to ArcGeology 2) Set-up files for Steve to work from 3) Guide/assist Steve with edits 4) Perform advanced edits 5) Finalize data/Cartography for publication as M-Series. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Partially funded by GSN', 'EmployeeID': 'Flowery Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2034', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2008-11-14', 'WorkOrderDescription': '', 'StartDate': '2008-11-14', 'DueDate': '2009-05-30', 'ClosedDate': '2009-05-30', 'Notes': '<! 2008-11-26 09:42:29 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Master Work Order for BLM Clark County 2009 GIS mapping support', 'EmployeeID': ' including both GIS conversions and new mapping. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Clark County 2009 GIS Support Master', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2035', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2008-11-24', 'WorkOrderDescription': '', 'StartDate': '2008-11-24', 'DueDate': '2008-12-02', 'ClosedDate': '2008-12-02', 'Notes': '<! 2008-12-01 15:47:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '(5) Figures for Turkey Geothermal Project.&nbsp; Must be complete by end of business on 12/2/08. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2008-12-10 14:17:29 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Additional hours OK per J. Faulds. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Turkey Geothermal Project Figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2036', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2008-12-01', 'WorkOrderDescription': '', 'StartDate': '2008-12-01', 'DueDate': '2008-12-31', 'ClosedDate': '2008-12-31', 'Notes': '<! 2008-12-01 15:54:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-01-05 12:17:21 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '14 hours total unbilled for the month plus 7 hours billed. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - December', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2037', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2008-12-23', 'WorkOrderDescription': '', 'StartDate': '2008-12-23', 'DueDate': '2009-01-30', 'ClosedDate': '2009-01-30', 'Notes': '<! 2008-12-29 10:27:22 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Layout in InDesign then post final layout to web. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-02-04 12:09:23 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Archived - zipped at N&#58;&#92;_back&#92;work', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SP-22 Gold From Water Reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2038', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-01-01', 'WorkOrderDescription': '', 'StartDate': '2009-01-01', 'DueDate': '2009-01-31', 'ClosedDate': '2009-01-31', 'Notes': '<! 2009-01-05 12:29:28 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - January', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2039', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-01-07', 'WorkOrderDescription': '', 'StartDate': '2009-01-07', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2009-01-08 10:30:08 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare Grimes Point as a Statemap 2008 Open File starting from Lahontan Mountains OF07-4 which includes the Eastern portion of the Grimes Point quad. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-01-08 10:31:47 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Compilation to be done by J. Bell; Set-', 'EmployeeID': 'SM08 - Grimes Point Geologic Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2040', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-01-01', 'WorkOrderDescription': '', 'StartDate': '2009-01-01', 'DueDate': '2009-03-30', 'ClosedDate': '2009-03-30', 'Notes': '<! 2009-01-08 10:54:46 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is to be used to track all time spent maintaining the NBMG website. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 1st Qtr - 09', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2041', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-02-01', 'WorkOrderDescription': '', 'StartDate': '2009-02-01', 'DueDate': '2009-02-28', 'ClosedDate': '2009-02-28', 'Notes': '<! 2009-02-04 11:20:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-03-04 11:07:48 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'There was one billing for 1 hour @ $45 - paid by credit card. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - February', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2042', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-02-01', 'WorkOrderDescription': '', 'StartDate': '2009-02-01', 'DueDate': '2009-05-01', 'ClosedDate': '2009-05-01', 'Notes': '<! 2009-02-04 11:42:15 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'As part of Clarkmap', 'EmployeeID': ' perform cartography and prepare layout following NBMG standards', 'CustomerID': ' so map can go to review. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM09 Devils Throat (Legacy)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2043', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-02-13', 'WorkOrderDescription': '', 'StartDate': '2009-02-13', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2009-02-20 09:19:46 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise LahontanMountains quadrangle to reflect new geology; put in simple layout for review.&nbsp; Resume from wo #1899. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Lahontan Mountains Revision (OF 07-4', 'CustomerID': ' R2)', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2044', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-02-18', 'WorkOrderDescription': '', 'StartDate': '2009-02-18', 'DueDate': '2009-03-30', 'ClosedDate': '2009-03-30', 'Notes': '<! 2009-02-20 09:29:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare a layout for the converted to Arc Minden Open File so it can be released as a new version of the same Open File Report number. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-05-08 14:16:50 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'IPO398700', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Minden Revision (OF03-13', 'CustomerID': ' R2', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2045', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-02-24', 'WorkOrderDescription': '', 'StartDate': '2009-02-24', 'DueDate': '2009-03-15', 'ClosedDate': '2009-03-15', 'Notes': '<! 2009-03-03 15:29:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare a layout for the converted to Arc McTarnahan Hill OFR so it can be released as a new version of the same OFR number.&nbsp; Cross sections and correlation will need to be converted from AI. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'McTarnahan Hill Revision', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2046', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-02-26', 'WorkOrderDescription': '', 'StartDate': '2009-02-26', 'DueDate': '2009-03-17', 'ClosedDate': '2009-03-17', 'Notes': '<! 2009-03-03 16:28:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'DOM requested 600 more copies printed.&nbsp; Bill for printing thru Pub Sales. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines 2007 Reprint', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2047', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-03-01', 'WorkOrderDescription': '', 'StartDate': '2009-03-01', 'DueDate': '2009-03-31', 'ClosedDate': '2009-03-31', 'Notes': '<! 2009-03-04 10:32:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - March', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2048', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-03-10', 'WorkOrderDescription': '', 'StartDate': '2009-03-10', 'DueDate': '2009-09-30', 'ClosedDate': '2009-09-30', 'Notes': '<! 2009-03-19 08:41:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare website for auth in-progress files (and possibly review files).&nbsp; Include author resources and other information as necessary.&nbsp; Assist with compilation and layout of final report.&nbsp;', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Wells Earthquake Report', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2049', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-03-19', 'WorkOrderDescription': '', 'StartDate': '2009-03-19', 'DueDate': '2009-03-23', 'ClosedDate': '2009-03-23', 'Notes': '<! 2009-03-19 09:43:55 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Revise Flotation Time Figure per the attached. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2009-04-07 12:38:01 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'IPO398171', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Flotation Project Figure', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2050', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-03-19', 'WorkOrderDescription': '', 'StartDate': '2009-03-19', 'DueDate': '2009-03-31', 'ClosedDate': '2009-03-31', 'Notes': '<! 2009-03-23 11:24:30 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'The first stage of the VRM layer will be the seamless stitching together of all the Nevada districts VRM data.&nbsp; The topology rules will be no overlaps and no gaps.&nbsp; There should not be any attempt to edge match th', 'EmployeeID': 'VRM Map for BLM', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2051', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-04-01', 'WorkOrderDescription': '', 'StartDate': '2009-04-01', 'DueDate': '2009-04-30', 'ClosedDate': '2009-04-30', 'Notes': '<! 2009-04-02 11:54:38 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - April', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2052', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-04-01', 'WorkOrderDescription': '', 'StartDate': '2009-04-01', 'DueDate': '2009-06-30', 'ClosedDate': '2009-06-30', 'Notes': '<! 2009-04-02 12:30:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track all time spent maintaining the NBMG website. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 2nd Qtr - 09', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2053', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-04-08', 'WorkOrderDescription': '', 'StartDate': '2009-04-08', 'DueDate': '2009-05-31', 'ClosedDate': '2009-05-31', 'Notes': '<! 2009-04-16 14:11:50 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Chris Henry and Jim Faulds modifications to Ninehill map and regional figure for submittal to online scientific journal.&nbsp; (Geospheres)', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Ninehill Map and Figure Finalization', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2054', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-04-17', 'WorkOrderDescription': '', 'StartDate': '2009-04-17', 'DueDate': '2009-08-30', 'ClosedDate': '2009-08-30', 'Notes': '<! 2009-04-23 14:11:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Modify and complete 1&#58;12K inset', 'EmployeeID': ' finalize layout and cartography for review.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1/2 (40 hrs) from 1320 114 10HSand 1/2 (40 hrs) from 1320 114 10JU.&nbsp; Budget total $3', 'EmployeeID': '600.00.</P>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM09 Prepare Searchlight for Review', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2055', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2009-05-31', 'ClosedDate': '2009-05-31', 'Notes': '<! 2009-05-05 08:53:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>This work order is issued to track unbillable and projects completed in less than 2 hours.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - May', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2056', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-05-04', 'WorkOrderDescription': '', 'StartDate': '2009-05-04', 'DueDate': '2009-06-30', 'ClosedDate': '2009-06-30', 'Notes': '<! 2009-05-05 12:44:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Scan and georeference 20 mylar maps from BLM.&nbsp; Time should not exceed 30 minutes per map.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Payment to be via credit card.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Scan & Georeference BLM Maps', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2057', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-05-13', 'WorkOrderDescription': '', 'StartDate': '2009-05-13', 'DueDate': '2009-05-22', 'ClosedDate': '2009-05-22', 'Notes': '<! 2009-05-13 12:31:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Update current Factsheet to include Statemap 2009 information. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Factsheet Update Incl SM09', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2058', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-05-15', 'WorkOrderDescription': '', 'StartDate': '2009-05-15', 'DueDate': '2009-10-28', 'ClosedDate': '2009-10-28', 'Notes': '<! 2009-05-15 10:25:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>Prepare geologic map for statemap deliverable and NBMG open-file.&nbsp; Compilation to be done by K. House; set-up and cartography to be done by Cart and GIS.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Lower Walker River SH', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2059', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-05-15', 'WorkOrderDescription': '', 'StartDate': '2009-05-15', 'DueDate': '2009-06-30', 'ClosedDate': '2009-06-30', 'Notes': '<! 2009-05-15 10:50:23 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Set-up ArcGIS server/ArcSDE on GIS3 under Windows Server 2008', 'EmployeeID': ' for general use. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'ArcSDE Set-up', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2060', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-05-15', 'WorkOrderDescription': '', 'StartDate': '2009-05-15', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-05-15 13:05:18 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Convert 19 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; See list attached.&nbsp; Each conversion will have a work order number assigned. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2010-12-07 15:30:43 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>767 ho', 'EmployeeID': 'SM09 GIS Conversion Master', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2061', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-06-01', 'WorkOrderDescription': '', 'StartDate': '2009-06-01', 'DueDate': '2009-06-30', 'ClosedDate': '2009-06-30', 'Notes': '<! 2009-06-01 15:07:07 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2062', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-02 12:36:50 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Data Migration&nbsp;NBMG OF00-7', 'EmployeeID': ' location 40116-F6', 'CustomerID': ' Rural area', 'PriorityID': ' Lander County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Argenta', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2063', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-02 12:54:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion NBMG FS13', 'EmployeeID': ' location 41117-B4', 'CustomerID': ' Rural area', 'PriorityID': ' Humboldt County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Delvada Spring', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2064', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-02 14:22:22 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Data Migration Conversion NBMG OF06-16', 'EmployeeID': ' location 39119-C5', 'CustomerID': ' Reno area', 'PriorityID': ' Storey/Lyon County. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Flowery Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2065', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-06-03', 'WorkOrderDescription': '', 'StartDate': '2009-06-03', 'DueDate': '2009-07-01', 'ClosedDate': '2009-07-01', 'Notes': '<! 2009-06-05 14:35:47 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>1 - Conceptual drawing</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1 - Line 3d figure to digitize</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>1 - Point data chart to clean-up</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2 - Image figures to clean-up</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>Make all figures professional publication quality using GSA g', 'EmployeeID': 'Figures for Science Magazine', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2066', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-06-03', 'WorkOrderDescription': '', 'StartDate': '2009-06-03', 'DueDate': '2009-08-31', 'ClosedDate': '2009-08-31', 'Notes': '<! 2009-06-05 14:41:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Scan and digitize 7 cross sections from hand drawn copies and make poly&#39;s that overlap / so some poly&#39;s could be turned off as needed and poly&#39;s underneath could still be shown. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Cross Section Digitizing', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2067', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-05 16:02:42 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1174', 'EmployeeID': ' location 40117-H4', 'CustomerID': ' Rural area', 'PriorityID': ' Humboldt County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Golconda', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2068', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-05 16:13:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Data Migration Conversion NBMG OF99-4', 'EmployeeID': ' location 39119-F6', 'CustomerID': ' Reno area', 'PriorityID': ' Washoe County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Griffith Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2069', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-05-15', 'WorkOrderDescription': '', 'StartDate': '2009-05-15', 'DueDate': '2009-06-30', 'ClosedDate': '2009-06-30', 'Notes': '<! 2009-06-22 14:03:42 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Develop a master database design for geospatial point-data', 'EmployeeID': ' suitable for the prospective minerals and geothermal energy conflation projects', 'CustomerID': ' per the attached specifications.&nbsp; Work produced for John Muntean and Lisa She', 'PriorityID': 'Minerals and Energy Database Design', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2070', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-30 12:13:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS MF2157', 'EmployeeID': ' location 41119-C3', 'CustomerID': ' Rural area', 'PriorityID': ' Washoe/Humboldt County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 High Rock Lake', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2071', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-30 12:19:56 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS NBMG FS5', 'EmployeeID': ' location 39118-E2', 'CustomerID': ' Rural area', 'PriorityID': ' Churchill County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Job Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2072', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-30 13:49:52 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion NBMG OF03-14', 'EmployeeID': ' location 36116-C1', 'CustomerID': ' Las Vegas area', 'PriorityID': ' Nye County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Last Chance Range', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2073', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-06-30 14:36:31 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Data Migration Conversion NBMG OF99-5', 'EmployeeID': ' location 39119-A6', 'CustomerID': ' Reno area', 'PriorityID': ' Douglas County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 McTarnahan Hill', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2074', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-07-01', 'WorkOrderDescription': '', 'StartDate': '2009-07-01', 'DueDate': '2009-07-31', 'ClosedDate': '2009-07-31', 'Notes': '<! 2009-07-08 13:59:35 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - July', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2075', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-07-02', 'WorkOrderDescription': '', 'StartDate': '2009-07-02', 'DueDate': '2009-09-30', 'ClosedDate': '2009-09-30', 'Notes': '<! 2009-07-08 14:09:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track all time spent maintaining the NBMG website. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd Qtr - 09', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2076', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-07-01', 'WorkOrderDescription': '', 'StartDate': '2009-07-01', 'DueDate': '2009-10-31', 'ClosedDate': '2009-10-31', 'Notes': '<! 2009-07-08 15:52:31 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>1)&nbsp; Prepare a rough draft for deliverable due on 7/15/2009.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<P>2)&nbsp; Map to be complete by 10/31/2009.</P>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Desert Queen', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2077', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-07-01', 'WorkOrderDescription': '', 'StartDate': '2009-07-01', 'DueDate': '2009-08-15', 'ClosedDate': '2009-08-15', 'Notes': '<! 2009-07-08 16:18:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Using Excel data provided by Chris Henry', 'EmployeeID': ' create an animated map that will be easy to update in the future. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Geology / GIS Animation', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2078', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-07-01', 'WorkOrderDescription': '', 'StartDate': '2009-07-01', 'DueDate': '2009-12-31', 'ClosedDate': '2009-12-31', 'Notes': '<! 2009-07-09 09:05:40 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare a manual of step-by-step procedures for geos', 'EmployeeID': ' cartographers', 'CustomerID': ' etc. to follow to efficiently produce a geologic map.&nbsp; Other topics to be included as necessary. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2011-04-08 12:13:54 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Files stored in ', 'EmployeeID': 'Cartography and GIS Cookbook Manual', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2079', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-07-07', 'WorkOrderDescription': '', 'StartDate': '2009-07-07', 'DueDate': '2009-07-09', 'ClosedDate': '2009-07-09', 'Notes': '<! 2009-07-09 09:27:14 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Create a Web application to show mineral deposits', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Reno 100K Minerals Database', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2080', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-07-08', 'WorkOrderDescription': '', 'StartDate': '2009-07-08', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2009-07-09 09:42:31 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Set-up the SDE database.&nbsp; Teach Dave Davis and DD how to validate and/or move MRDS point locations.&nbsp; Maintain the SDE database. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2010-04-07 11:18:14 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Corrected the amount from $6825 to $9555.&nbsp; T', 'EmployeeID': 'Update NV MRDS Database Locations', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2081', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-07-08', 'WorkOrderDescription': '', 'StartDate': '2009-07-08', 'DueDate': '2009-08-01', 'ClosedDate': '2009-08-01', 'Notes': '<! 2009-07-09 10:11:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Research possible GIS conversion locations for the statemap 2010 proposal.&nbsp; Goal is 100 locations proposed so that 60 may be selected. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2010 GIS Proposal', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2082', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 08:18:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Data Migration NBMG Map 152', 'EmployeeID': ' location 39119', 'CustomerID': ' Reno area', 'PriorityID': ' Washoe County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Nixon Area', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2083', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 08:52:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<P>GIS Conversion NBMG OF03-22', 'EmployeeID': ' location 40116-G8', 'CustomerID': ' Rural area', 'PriorityID': ' Lander County.</P>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Russells', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2084', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 09:12:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion NBMG OF03-10', 'EmployeeID': ' location 39119-H6', 'CustomerID': ' Reno area', 'PriorityID': ' Washoe County', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Tule Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2085', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 09:20:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Data Migration Conversion NBMG Map 153', 'EmployeeID': ' location 39119-F3', 'CustomerID': ' Reno area', 'PriorityID': ' Washoe County. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Wadsworth', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2086', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 09:26:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1117', 'EmployeeID': ' location 40116-G3', 'CustomerID': ' Rural area', 'PriorityID': ' Eureka County. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Welches Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2087', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 10:12:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS Unpublished Map Western Humboldt County', 'EmployeeID': ' Rural area', 'CustomerID': ' Humboldt County. ', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Western Humboldt County', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2088', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 11:28:22 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS MF2029', 'EmployeeID': ' location 41119-D3', 'CustomerID': ' Rural area', 'PriorityID': ' Humboldt County. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yellow Hills East', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2089', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 11:34:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS USGS MF2038', 'EmployeeID': ' location 41119-D4', 'CustomerID': ' Rural area', 'PriorityID': ' Washoe/Humboldt County. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yellow Hills West', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2090', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 11:39:31 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion NBMG OF03-8', 'EmployeeID': ' location 38119-H2', 'CustomerID': ' Reno area', 'PriorityID': ' Lyon County. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yerington', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2091', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-05-01', 'WorkOrderDescription': '', 'StartDate': '2009-05-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-07-10 11:43:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Digitize into GIS NBMG Map 77', 'EmployeeID': ' location 38119', 'CustomerID': ' Reno area', 'PriorityID': ' Lyon County. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yerington District (also Mt. Rose 15-min)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2092', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-07-29', 'WorkOrderDescription': '', 'StartDate': '2009-07-29', 'DueDate': '2009-08-31', 'ClosedDate': '2009-08-31', 'Notes': '<! 2009-07-29 15:07:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare the annual Major Mines 2008 publication from the attached markup from Doug Driesner.&nbsp; Also', 'EmployeeID': ' expect new photos from M. Visher (NDOM).&nbsp; NDOM to pay the printing charges. ', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Major mines of Nevada - 2008 - P-20', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2093', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-07-29', 'WorkOrderDescription': '', 'StartDate': '2009-07-29', 'DueDate': '2009-09-15', 'ClosedDate': '2009-09-15', 'Notes': '<! 2009-07-29 15:17:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Migrate files from old formats', 'EmployeeID': ' update with any pending edits', 'CustomerID': ' capture GPS coordinates; add GPS coordinates as appendix and print copies (quantity to be determined) for pub sales.&nbsp; Pub Sales to absorb the printing cost', 'PriorityID': 'Hwy 50 Reprint - SP26', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2094', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-07-30', 'WorkOrderDescription': '', 'StartDate': '2009-07-30', 'DueDate': '2009-08-07', 'ClosedDate': '2009-08-07', 'Notes': '<! 2009-08-07 11:33:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map with South half of map added onto North half to submit a full map as a Clarkmap deliverable. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM09 Spirit Mountain NW', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2095', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-07-30', 'WorkOrderDescription': '', 'StartDate': '2009-07-30', 'DueDate': '2009-08-31', 'ClosedDate': '2009-08-31', 'Notes': '<! 2009-08-07 11:44:00 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Set-up web page', 'EmployeeID': ' sign up forms', 'CustomerID': ' links from Bureau home page (button) waivers', 'PriorityID': ' other ESW pages and possibly create a road log map. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week Support', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2096', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-08-01', 'WorkOrderDescription': '', 'StartDate': '2009-08-01', 'DueDate': '2009-08-31', 'ClosedDate': '2009-08-31', 'Notes': '<! 2009-08-07 11:48:40 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - August', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2097', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-07-28', 'WorkOrderDescription': '', 'StartDate': '2009-07-28', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-08-14 10:48:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Goal is to publish as M-Series. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Cortez Geo Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2098', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-08-14', 'WorkOrderDescription': '', 'StartDate': '2009-08-14', 'DueDate': '2009-09-30', 'ClosedDate': '2009-09-30', 'Notes': '<! 2009-08-14 11:08:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Prepare poster similar to MELD post and Nye County template poster with data and panels specified by author. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Northern Nye County Poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2099', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-08-14', 'WorkOrderDescription': '', 'StartDate': '2009-08-14', 'DueDate': '2009-09-07', 'ClosedDate': '2009-09-07', 'Notes': '<! 2009-08-21 15:06:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare MI figures in Illustrator (per Jon Price) and export to JPegs for use in power point presentation at Sept 10th NMA mtg and Sept 23rd AEG mtg.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2010-02-25 10:23:29 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Work complete 12/29/2009</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'MI 2008 Slides', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2100', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-08-31', 'WorkOrderDescription': '', 'StartDate': '2009-08-31', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2009-09-01 15:15:25 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Convert from AI', 'EmployeeID': ' or geodatabase', 'CustomerID': ' (convert map', 'PriorityID': ' x-sections', 'StatusID': ' correlation and generate unit list).&nbsp; Publish as NBMG M-series map.</p>', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Vicksburg Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2101', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-08-31', 'WorkOrderDescription': '', 'StartDate': '2009-08-31', 'DueDate': '2009-09-30', 'ClosedDate': '2009-09-30', 'Notes': '<! 2009-09-01 15:23:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Reprint quantity for City of Las Vegas Emergency Management.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Reprint of E-16 - Earthquakes in Nevada and How to Survive Them', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2102', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-09-01', 'WorkOrderDescription': '', 'StartDate': '2009-09-01', 'DueDate': '2012-08-07', 'ClosedDate': '2012-08-07', 'Notes': '<! 2009-09-01 16:04:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare and Maintain a Database of statewide URM buildings utilizing information from 17 county assessors databases.&nbsp; Phase 1 is a 3-step project.&nbsp; 1) build the database&nbsp; 2) Make the database accessible to', 'EmployeeID': 'Hazard Mitigation - Statewide URM Building Inventory', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2103', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-09-01', 'WorkOrderDescription': '', 'StartDate': '2009-09-01', 'DueDate': '2009-09-30', 'ClosedDate': '2009-09-30', 'Notes': '<! 2009-09-01 16:16:08 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - September', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2104', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-09-01', 'WorkOrderDescription': '', 'StartDate': '2009-09-01', 'DueDate': '2010-05-07', 'ClosedDate': '2010-05-07', 'Notes': '<! 2009-09-22 12:18:46 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all administrative time spent on this project.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Clarkmap 2010 Admin Master', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2105', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-09-15', 'WorkOrderDescription': '', 'StartDate': '2009-09-15', 'DueDate': '2010-05-07', 'ClosedDate': '2010-05-07', 'Notes': '<! 2009-09-22 13:43:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for Clarkmap 2010 deliverable. May be delivered as an M-series publication.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Gass Peak SW', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2106', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-09-15', 'WorkOrderDescription': '', 'StartDate': '2009-09-15', 'DueDate': '2010-05-07', 'ClosedDate': '2010-05-07', 'Notes': '<! 2009-09-22 14:50:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for Clarkmap 2010 deliverable.&nbsp; May be delivered as a new open-file or as an M-series deliverable.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2010-07-13 11:57:05 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Project cancelled as a deliverable this year per Jim and Nick.</p', 'EmployeeID': 'CM10 Ireteba Peaks', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2107', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-09-15', 'WorkOrderDescription': '', 'StartDate': '2009-09-15', 'DueDate': '2010-05-07', 'ClosedDate': '2010-05-07', 'Notes': '<! 2009-09-22 15:40:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for a Clarkmap 2010 deliverable.&nbsp; May be delivered as an M-series publication.&nbsp; Work may be done by Irene Seelye.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Jean', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2108', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-09-15', 'WorkOrderDescription': '', 'StartDate': '2009-09-15', 'DueDate': '2009-10-28', 'ClosedDate': '2009-10-28', 'Notes': '<! 2009-09-22 16:08:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for Statemap deliverable as an open-file publication.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Hazen WH', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2109', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-09-16', 'WorkOrderDescription': '', 'StartDate': '2009-09-16', 'DueDate': '2009-10-01', 'ClosedDate': '2009-10-01', 'Notes': '<! 2009-09-24 16:21:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Poster presentation for GRC; edits and new data images</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Poster - Research At the Great Basin Center for Geothermal Energy', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2110', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-09-24', 'WorkOrderDescription': '', 'StartDate': '2009-09-24', 'DueDate': '2009-09-30', 'ClosedDate': '2009-09-30', 'Notes': '<! 2009-09-25 08:27:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Make edits and reprint files via Copy Center.&nbsp; GBCGE to pay for printing.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Update GBCGE Brochures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2111', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-10-01', 'WorkOrderDescription': '', 'StartDate': '2009-10-01', 'DueDate': '2009-10-31', 'ClosedDate': '2009-10-31', 'Notes': '<! 2009-10-13 15:54:28 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - October', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2112', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-10-01', 'WorkOrderDescription': '', 'StartDate': '2009-10-01', 'DueDate': '2009-12-31', 'ClosedDate': '2009-12-31', 'Notes': '<! 2009-10-15 10:19:15 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th Qtr - 09', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2113', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-10-01', 'WorkOrderDescription': '', 'StartDate': '2009-10-01', 'DueDate': '2009-10-02', 'ClosedDate': '2009-10-02', 'Notes': '<! 2009-10-19 15:32:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Print potential side of OF09-1 and version of M161 from GRC posters; both at same dimensions for mounting and display at City of Reno booth.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'City of Reno Prints', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2114', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-10-01', 'WorkOrderDescription': '', 'StartDate': '2009-10-01', 'DueDate': '2009-10-30', 'ClosedDate': '2009-10-30', 'Notes': '<! 2009-10-28 10:15:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Add new geothermal potential grid', 'EmployeeID': ' updated lease data', 'CustomerID': ' and other edits.&nbsp; To be assigned new open-file number instead of 2nd edition (per Jon Price).</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Update 09-1 - Geothermal Potential and Exploration Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2115', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-10-07', 'WorkOrderDescription': '', 'StartDate': '2009-10-07', 'DueDate': '2009-12-07', 'ClosedDate': '2009-12-07', 'Notes': '<! 2009-10-28 11:25:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Topology and possible layout.&nbsp; Nick to decide on layout further into the project.&nbsp; To be submitted as digital files.&nbsp; We are responsible for loading data into the database and doing symbols.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2010-04', 'EmployeeID': 'Navy - Hawthorne Geologic Map/BR16', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2116', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-11-01', 'WorkOrderDescription': '', 'StartDate': '2009-11-01', 'DueDate': '2009-11-30', 'ClosedDate': '2009-11-30', 'Notes': '<! 2009-11-02 14:47:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - November', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2117', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-11-03', 'WorkOrderDescription': '', 'StartDate': '2009-11-03', 'DueDate': '2009-12-31', 'ClosedDate': '2009-12-31', 'Notes': '<! 2009-11-05 15:51:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Publication to be compiled by Jon Price in MS Word rather than by Jack Hursh Adobe InDesign.&nbsp; Data files are stored on the N drive at the following location&#58;&nbsp; N&#58;&#92;_work&#92;2117_M108</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2010-01-0', 'EmployeeID': 'Mineral Industry 2008', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2118', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-11-05', 'WorkOrderDescription': '', 'StartDate': '2009-11-05', 'DueDate': '2010-04-30', 'ClosedDate': '2010-05-12', 'Notes': '<! 2009-11-06 14:06:28 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Gary - Set-up and manage database for geologist</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Jennifer - Map layout</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 - New Geologic Mapping in the Reno Area', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2119', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-11-05', 'WorkOrderDescription': '', 'StartDate': '2009-11-05', 'DueDate': '2010-08-31', 'ClosedDate': '2010-08-31', 'Notes': '<! 2009-11-06 15:51:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Database/Web Specialist</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Rework all web applications; manage new data; put all data into SDE; create web services for all data; other tasks as assigned', 'EmployeeID': ' including making all services public.&nbsp; Note&#58;&nbsp; W', 'CustomerID': 'NGDS - National Geothermal Data System', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2120', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-11-05', 'WorkOrderDescription': '', 'StartDate': '2009-11-05', 'DueDate': '2010-02-01', 'ClosedDate': '2010-02-01', 'Notes': '<! 2009-11-06 16:13:30 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Update SP27 with Wells info.; add photos', 'EmployeeID': ' update seismicity map', 'CustomerID': ' add recovery page if time permits.</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SP27 Update - Living With Earthquakes in Nevada', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2121', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-11-10', 'WorkOrderDescription': '', 'StartDate': '2009-11-10', 'DueDate': '2009-12-31', 'ClosedDate': '2009-12-31', 'Notes': '<! 2009-11-10 10:44:50 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Help Kyle prepare report in digital (HTML) format for release of publication as NBMG Report.&nbsp; Requires CSS formatting using Jennifer&#39;s template files from Web 2.0 work.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Ivanpah Valley Report', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2122', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-11-13', 'WorkOrderDescription': '', 'StartDate': '2009-11-13', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2009-12-01 11:28:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare north half of map for Statemap deliverable of full map and open-file release.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Lower Walker River North Half', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2123', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-11-13', 'WorkOrderDescription': '', 'StartDate': '2009-11-13', 'DueDate': '2009-11-30', 'ClosedDate': '2009-11-30', 'Notes': '<! 2009-12-01 12:17:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare an 11 x 17 size poster of active mine locations from data layers provided by Ron Hess and others and specified by DOM/NBMG.&nbsp; Start with Ron&#39;s draft of the poster and do typical NBMG cartography quality.&', 'EmployeeID': 'Active Mines Poster E-49', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2124', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-11-18', 'WorkOrderDescription': '', 'StartDate': '2009-11-18', 'DueDate': '2010-02-15', 'ClosedDate': '2010-02-21', 'Notes': '<! 2009-12-03 14:52:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Assist with GIS compilation in Arc', 'EmployeeID': ' symbology', 'CustomerID': ' rough layout and possibly 2 cross sections for grant deliverable only (no publication).</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Reese River Geology', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2125', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-11-13', 'WorkOrderDescription': '', 'StartDate': '2009-11-13', 'DueDate': '2010-10-31', 'ClosedDate': '2010-11-06', 'Notes': '<! 2009-12-03 15:02:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare interactive version of M167 Quaternary Faults in Nevada and release as a new open-file OF09-9.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Q-Faults Interactive Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2126', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2009-11-24', 'WorkOrderDescription': '', 'StartDate': '2009-11-24', 'DueDate': '2010-01-15', 'ClosedDate': '2010-01-15', 'Notes': '<! 2009-12-03 15:12:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare a figure for the update of the Nevada Hazard Mitigation Plan.&nbsp; It should be a page-sized map of Nevada showing surface hydrology on a shaded relief background to include all rivers and their major tributarie', 'EmployeeID': 'Surface Hydrology Map Figure for NHMP update', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2127', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2009-12-01', 'WorkOrderDescription': '', 'StartDate': '2009-12-01', 'DueDate': '2009-12-31', 'ClosedDate': '2009-12-31', 'Notes': '<! 2009-12-03 15:20:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - December', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2128', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2009-12-15', 'WorkOrderDescription': '', 'StartDate': '2009-12-15', 'DueDate': '2010-05-01', 'ClosedDate': '2010-05-01', 'Notes': '<! 2010-01-05 14:04:28 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Publish new Active Mines M-series map.&nbsp; Prepare map provided by Ron for review by late January and finalize after review for publication in time for symposium May 14-22.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Active Mines in Nevada', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2129', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-01-01', 'WorkOrderDescription': '', 'StartDate': '2010-01-01', 'DueDate': '2010-01-31', 'ClosedDate': '2010-01-31', 'Notes': '<! 2010-01-05 15:50:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - January', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2130', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-01-01', 'WorkOrderDescription': '', 'StartDate': '2010-01-01', 'DueDate': '2010-03-31', 'ClosedDate': '2010-03-31', 'Notes': '<! 2010-01-06 16:02:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 1st Qtr - 10', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2131', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2009-12-16', 'WorkOrderDescription': '', 'StartDate': '2009-12-16', 'DueDate': '2010-12-31', 'ClosedDate': '2010-12-31', 'Notes': '<! 2010-01-07 10:23:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Use data provided by originator to create a web application.&nbsp; Host web application for 1 year on our web server.&nbsp; Future changes', 'EmployeeID': ' requested by client', 'CustomerID': ' will be billed at $45/hour with a 3-hour minimum.</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Cl', 'EmployeeID': 'Summit Engineering - Lander FIND Project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2132', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2009-12-18', 'WorkOrderDescription': '', 'StartDate': '2009-12-18', 'DueDate': '2009-12-31', 'ClosedDate': '2009-12-31', 'Notes': '<! 2010-01-07 11:24:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Update seismicity map and other inconsistencies between released versions of pamphlet.&nbsp; Printing to be funded by Terri&#39;s contact in Las Vegas.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'E-16 Update and Printing', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2133', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-02-01', 'WorkOrderDescription': '', 'StartDate': '2010-02-01', 'DueDate': '2010-02-28', 'ClosedDate': '2010-02-28', 'Notes': '<! 2010-02-02 09:58:35 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - February', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2134', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-02-18', 'WorkOrderDescription': '', 'StartDate': '2010-02-18', 'DueDate': '2010-05-18', 'ClosedDate': '2010-05-18', 'Notes': '<! 2010-02-22 15:14:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Make edits to Illustrator file that was lost sometime in the past.&nbsp; Edits will be done in Illustrator image with no conversion to Arc.&nbsp; After edits are done', 'EmployeeID': ' contact Chris Henry and Chuck Thorman for how to pro', 'CustomerID': 'Oxley Peak Geologic Map Revisions', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2135', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-03-01', 'WorkOrderDescription': '', 'StartDate': '2010-03-01', 'DueDate': '2010-03-31', 'ClosedDate': '2010-03-31', 'Notes': '<! 2010-03-01 11:20:42 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - March', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2136', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-03-22', 'WorkOrderDescription': '', 'StartDate': '2010-03-22', 'DueDate': '2010-06-01', 'ClosedDate': '2010-06-01', 'Notes': '<! 2010-04-02 11:08:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Re-run Hazus Flood Hazards in Nevada', 'EmployeeID': ' utilizing MR4', 'CustomerID': ' so a comparison can be made to the previous Flood runs in Open File 07-2 which utilized MR2.</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Hazus Flood Runs', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2137', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-03-31', 'WorkOrderDescription': '', 'StartDate': '2010-03-31', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2010-04-02 11:51:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare layout; no cross-sections.&nbsp; Do 1&#58;6K inset map on layout.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Lee-Allen Geologic Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2138', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-04-01', 'WorkOrderDescription': '', 'StartDate': '2010-04-01', 'DueDate': '2010-04-30', 'ClosedDate': '2010-04-30', 'Notes': '<! 2010-04-02 13:33:17 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc April', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2139', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-04-01', 'WorkOrderDescription': '', 'StartDate': '2010-04-01', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2010-04-02 13:41:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 2nd Qtr - 10', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2140', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-04-01', 'WorkOrderDescription': '', 'StartDate': '2010-04-01', 'DueDate': '2010-08-07', 'ClosedDate': '2010-08-07', 'Notes': '<! 2010-04-02 15:15:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2010 deliverable and for publication.&nbsp; Migrate geodatabase to ArcGeology.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2010-09-02 13:06:54 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is being closed incomplete.&nbsp; This will not be a deliverable ', 'EmployeeID': 'CM10 Mt. Manchester', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2141', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-04-26', 'WorkOrderDescription': '', 'StartDate': '2010-04-26', 'DueDate': '2011-06-30', 'ClosedDate': '2011-06-30', 'Notes': '<! 2010-05-03 15:48:40 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Set-up and manage SDE Database.&nbsp; Create FTP site for incoming and outgoing data from PI&#39;s; other data work as needed.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Mineral Assessment of Nevada', 'CustomerID': ' Mineral Deposit Database', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2142', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2010-05-31', 'ClosedDate': '2010-05-31', 'Notes': '<! 2010-05-04 08:33:38 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within&nbsp;a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc May', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2143', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-05-04', 'WorkOrderDescription': '', 'StartDate': '2010-05-04', 'DueDate': '2010-05-11', 'ClosedDate': '2010-05-11', 'Notes': '<! 2010-05-19 15:24:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Figures for geothermal paper using Desert Peak-Brady&#39;s and Desert Queen maps; plus a shaded relief base for a figure.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Figures for Desert Peak / Desert Queen', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2144', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-05-25', 'WorkOrderDescription': '', 'StartDate': '2010-05-25', 'DueDate': '2010-07-30', 'ClosedDate': '2010-07-30', 'Notes': '<! 2010-06-16 11:10:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Update current factsheet to include Statemap 10 for submission to USGS.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Factsheet update including SM10', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2145', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-05-27', 'WorkOrderDescription': '', 'StartDate': '2010-05-27', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2010-06-16 15:28:11 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare Grimes Point quad for peer review.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Grimes Point', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2146', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-06-01', 'WorkOrderDescription': '', 'StartDate': '2010-06-01', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2010-06-16 16:12:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc June', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2147', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-06-02', 'WorkOrderDescription': '', 'StartDate': '2010-06-02', 'DueDate': '2010-06-22', 'ClosedDate': '2010-06-22', 'Notes': '<! 2010-06-17 10:08:18 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Draft new figures and make revisions to some figures from wo #2065</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Figures for Nature-Geoscience Journal', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2148', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-06-09', 'WorkOrderDescription': '', 'StartDate': '2010-06-09', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2010-06-21 14:58:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Draft Figure in Illustrator using the provided Vector files.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Figure for Jerritt', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2149', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-06-09', 'WorkOrderDescription': '', 'StartDate': '2010-06-09', 'DueDate': '2010-08-30', 'ClosedDate': '2010-08-30', 'Notes': '<! 2010-07-02 08:55:18 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Figures (slides) and publication</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'MI2009 - Nevada Mineral Industry 2009', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2150', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-06-10', 'WorkOrderDescription': '', 'StartDate': '2010-06-10', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2010-07-02 12:12:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Make six maps. each with the same base (a satellite image of the Churchill Co', 'EmployeeID': ' area) and with themes developed by interpolation for each of the chemical layers.</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Mark Walker Project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2151', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-06-10', 'WorkOrderDescription': '', 'StartDate': '2010-06-10', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2010-07-02 12:18:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare layout for map @ 150K scale to include standard layout elements and other needed elements. (w/o authors - print on 60-inch plotter)</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Clark County Q Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2152', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-06-22', 'WorkOrderDescription': '', 'StartDate': '2010-06-22', 'DueDate': '2010-06-30', 'ClosedDate': '2010-06-30', 'Notes': '<! 2010-07-02 14:17:15 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Lay out poster for GRC conference using figures', 'EmployeeID': ' tables and text provided.</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2153', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-06-30', 'WorkOrderDescription': '', 'StartDate': '2010-06-30', 'DueDate': '2010-07-19', 'ClosedDate': '2010-07-19', 'Notes': '<! 2010-07-12 12:52:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare a series of figures in Illustrator for Cortez Geochem manuscript using files provided by author.&nbsp; Also help with finishing touches on figures completed by author as needed.&nbsp; 3 figures and possibly 20 Ar', 'EmployeeID': 'Figures for Cortez Geochem Manuscript', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2154', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-07-01', 'WorkOrderDescription': '', 'StartDate': '2010-07-01', 'DueDate': '2010-07-31', 'ClosedDate': '2010-07-31', 'Notes': '<! 2010-07-12 16:04:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc July', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2155', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-07-01', 'WorkOrderDescription': '', 'StartDate': '2010-07-01', 'DueDate': '2010-09-30', 'ClosedDate': '2010-09-30', 'Notes': '<! 2010-07-13 11:34:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd Qtr - 10', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2156', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-07-12', 'WorkOrderDescription': '', 'StartDate': '2010-07-12', 'DueDate': '2011-07-12', 'ClosedDate': '2011-07-12', 'Notes': '<! 2010-07-13 14:24:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Research possible GIS conversion locations for the statemap 2011 proposal.&nbsp; Goal is 50 locations with preference given to sites in the Northeast area of Nevada.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2011 Proposal', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2157', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-07-12', 'WorkOrderDescription': '', 'StartDate': '2010-07-12', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-13 14:34:30 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Convert 21 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; See list attached.&nbsp; Each conversion will have a work order number assigned.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GIS Conversion Master SM10', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2158', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-19 12:18:56 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 92-398', 'EmployeeID': ' location 40117-E2', 'CustomerID': ' Rural area', 'PriorityID': ' Lander County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Antler Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2159', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-19 13:43:00 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1801', 'EmployeeID': ' location 38116-E8', 'CustomerID': ' Rural area', 'PriorityID': ' Nye County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Belmont West', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2160', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-19 13:49:34 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 2049', 'EmployeeID': ' location 36116-H8', 'CustomerID': ' Rural area', 'PriorityID': ' Nye County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Bullfrog NE 1/4', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2161', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-19 13:55:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 1985', 'EmployeeID': ' location 36116-H8', 'CustomerID': ' Rural area', 'PriorityID': ' Nye County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Bullfrog NW 1/4', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2162', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-19 14:07:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS NBMG Map 35', 'EmployeeID': ' location 39114-H8', 'CustomerID': ' Rural area', 'PriorityID': ' White Pine County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Cherry Creek & Egan Ranges', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2163', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-19 14:23:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 697', 'EmployeeID': ' location 39114-B8', 'CustomerID': ' White Pine County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Ely', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2164', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-21 09:02:11 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 94-664', 'EmployeeID': ' location 40117-E1', 'CustomerID': ' Lander County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Galena Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2165', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-21 11:01:32 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS MF 1963', 'EmployeeID': ' location 38117-F7', 'CustomerID': ' Nye County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Goldyke', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2166', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-21 11:17:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Data Migration Conversion into GIS NBMG FS 14', 'EmployeeID': ' location 41115-C3', 'CustomerID': ' Humboldt County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Hot Springs Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2167', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-21 12:25:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 2670', 'EmployeeID': ' location 38116-F8', 'CustomerID': ' Nye County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Jefferson', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2168', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-21 12:34:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1775', 'EmployeeID': ' location 38117-E1', 'CustomerID': ' Las Vegas area', 'PriorityID': ' Nye County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Manhattan', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2169', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-21 13:37:08 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS NBMG unpublished Map', 'EmployeeID': ' Washoe County (Chris Henry request)</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-07-19 09:21:00 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>This map is a conversion', 'EmployeeID': ' not a digitization</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Nine Hill Paleovalley', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2170', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-21 13:42:08 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS PP 465', 'EmployeeID': ' location 39117', 'CustomerID': ' Lander/Eureka Counties (Chris Henry request)</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Northern Shoshone Range', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2171', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 12:12:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 822', 'EmployeeID': ' location 37116-C1', 'CustomerID': ' Las Vegas area', 'PriorityID': ' Nye County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-07-19 09:57:03 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Oak Spring Butte', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2172', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 12:18:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Data Migration Conversion NBMG OF 04-3', 'EmployeeID': ' location 39119-G4', 'CustomerID': ' Washoe County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Pah Rah Mountain East 1/2', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2173', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 12:24:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 758', 'EmployeeID': ' location 39115-C1', 'CustomerID': ' White Pine County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-07-19 10:02:55 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Riepetown', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2174', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 12:44:34 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1116', 'EmployeeID': ' location 40116-H3', 'CustomerID': ' Eureka County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Rodeo Creek NE', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2175', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 13:50:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1085', 'EmployeeID': ' loction 39114-C8', 'CustomerID': ' White Pine County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Ruth', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2176', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 13:55:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 1972', 'EmployeeID': ' location 36116-G2', 'CustomerID': ' Las Vegas area', 'PriorityID': ' Nye County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-07-19 12:35:37 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Skull Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2177', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 13:59:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 884', 'EmployeeID': ' location 36116-F2', 'CustomerID': ' Las Vegas area', 'PriorityID': ' Nye County</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-07-19 12:38:45 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Specter Range NW', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2178', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-05-01', 'WorkOrderDescription': '', 'StartDate': '2010-05-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-07-27 14:03:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 91-430', 'EmployeeID': ' location 40117-G2', 'CustomerID': ' Humboldt County</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Valmy', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2179', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-07-29', 'WorkOrderDescription': '', 'StartDate': '2010-07-29', 'DueDate': '2010-09-30', 'ClosedDate': '2010-09-30', 'Notes': '<! 2010-08-24 16:18:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Update map with new geology provided by Jim from Vr; include Marks data.  Produce cross-section profiles and get data to Inga by 8/23/2010.', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': ' ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Matt Richardson was the last Assignee to work on this map. After his departure', 'EmployeeID': '', 'CustomerID': 'Desert Peak / Brady Map Update', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2180', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-07-29', 'WorkOrderDescription': '', 'StartDate': '2010-07-29', 'DueDate': '2010-08-30', 'ClosedDate': '2010-08-30', 'Notes': '<! 2010-08-24 16:18:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Use provided files and images to prepare a webpage or series of webpages for a memorial collection that will be linked from NBMG website.&nbsp; Collection page will be a catalog for scanned images.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Robert Speed Memorial Collection Webpages', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2181', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-08-01', 'WorkOrderDescription': '', 'StartDate': '2010-08-01', 'DueDate': '2010-08-31', 'ClosedDate': '2010-08-31', 'Notes': '<! 2010-09-02 12:25:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - August', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2182', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-08-17', 'WorkOrderDescription': '', 'StartDate': '2010-08-17', 'DueDate': '2010-09-15', 'ClosedDate': '2010-09-15', 'Notes': '<! 2010-09-02 12:56:47 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Figures', 'EmployeeID': ' files', 'CustomerID': ' web for Earth Science Week Field Trips (Oct 16 &amp; 17)</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'ESW 2010 - Earth Science Week 10/16 & 10/17', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2183', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-09-01', 'WorkOrderDescription': '', 'StartDate': '2010-09-01', 'DueDate': '2010-09-30', 'ClosedDate': '2010-09-30', 'Notes': '<! 2010-09-02 13:00:43 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - September', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2184', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-09-14', 'WorkOrderDescription': '', 'StartDate': '2010-09-14', 'DueDate': '2010-09-30', 'ClosedDate': '2010-09-30', 'Notes': '<! 2010-09-30 12:46:00 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2010 deliverable and open-file.&nbsp; Possibly M-series.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Ute', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2185', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-09-16', 'WorkOrderDescription': '', 'StartDate': '2010-09-16', 'DueDate': '2010-11-15', 'ClosedDate': '2010-11-15', 'Notes': '<! 2010-09-30 12:55:32 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Revise previously drafted figures for review by the journal.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Revise Nature Geoscience Figures', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2186', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-10-01', 'WorkOrderDescription': '', 'StartDate': '2010-10-01', 'DueDate': '2010-10-31', 'ClosedDate': '2010-10-31', 'Notes': '<! 2010-10-06 14:11:22 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2187', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-10-01', 'WorkOrderDescription': '', 'StartDate': '2010-10-01', 'DueDate': '2010-12-31', 'ClosedDate': '2010-12-31', 'Notes': '<! 2010-10-06 14:52:07 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th qtr - 2010', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2188', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-10-01', 'WorkOrderDescription': '', 'StartDate': '2010-10-01', 'DueDate': '2010-11-30', 'ClosedDate': '2010-11-30', 'Notes': '<! 2010-10-06 16:18:30 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Printing costs to be paid by Nevada Division of Minerals</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines 2009', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2189', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-10-07', 'WorkOrderDescription': '', 'StartDate': '2010-10-07', 'DueDate': '2010-11-30', 'ClosedDate': '2010-11-30', 'Notes': '<! 2010-10-21 08:42:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare epicenter maps based from Doug&#39;s instructions and using seismicity data provided by Ken Smith from the Seismo lab.&nbsp; Send pdf&#39;s via email to review and then mail hard copies of completed maps.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Northern California Epicenter Maps', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2190', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-11-01', 'WorkOrderDescription': '', 'StartDate': '2010-11-01', 'DueDate': '2010-11-30', 'ClosedDate': '2010-11-30', 'Notes': '<! 2010-11-10 13:18:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - November', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2191', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-11-22', 'WorkOrderDescription': '', 'StartDate': '2010-11-22', 'DueDate': '2011-02-15', 'ClosedDate': '2011-02-15', 'Notes': '<! 2010-11-23 11:58:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Create a web application which when a feature is selected', 'EmployeeID': ' attribute information will appear; also allow for query&#39;s.&nbsp; Database to be provided by Robin and/or Rick.&nbsp; Draft Schema already provided.</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Interactive Web Map 161', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2192', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-11-22', 'WorkOrderDescription': '', 'StartDate': '2010-11-22', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2010-11-23 14:43:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Database set-up and new area mapping</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 New Geologic Mapping in the Reno Area', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2193', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2010-12-01', 'WorkOrderDescription': '', 'StartDate': '2010-12-01', 'DueDate': '2010-12-31', 'ClosedDate': '2010-12-31', 'Notes': '<! 2010-12-06 15:55:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - December', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2194', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2010-12-01', 'WorkOrderDescription': '', 'StartDate': '2010-12-01', 'DueDate': '2010-12-15', 'ClosedDate': '2010-12-15', 'Notes': '<! 2010-12-07 15:42:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Add-on work to map produced on work order 2124.&nbsp; Not to be published as either open-file or m-series at this time.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Reese River', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2195', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2010-12-17', 'WorkOrderDescription': '', 'StartDate': '2010-12-17', 'DueDate': '2011-05-06', 'ClosedDate': '2011-05-06', 'Notes': '<! 2010-12-17 09:22:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for a Clarkmap 2011 deliverable.&nbsp; May be delivered as an M-series publication.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Jean', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2196', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2010-12-17', 'WorkOrderDescription': '', 'StartDate': '2010-12-17', 'DueDate': '2011-05-06', 'ClosedDate': '2011-05-06', 'Notes': '<! 2010-12-17 11:46:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track the time spent on administrative work for Clarkmap</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Clarkmap Master', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2197', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-01-01', 'WorkOrderDescription': '', 'StartDate': '2011-01-01', 'DueDate': '2011-03-31', 'ClosedDate': '2011-03-31', 'Notes': '<! 2011-01-07 10:10:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 1st qtr - 2011', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2198', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-01-01', 'WorkOrderDescription': '', 'StartDate': '2011-01-01', 'DueDate': '2011-01-31', 'ClosedDate': '2011-01-31', 'Notes': '<! 2011-01-07 10:40:55 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - January', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2199', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-12-22', 'WorkOrderDescription': '', 'StartDate': '2010-12-22', 'DueDate': '2011-02-01', 'ClosedDate': '2011-02-01', 'Notes': '<! 2011-01-11 12:25:08 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare and assist Jim&#39;s grad student (Greg Rhodes) with producing his geologic map.&nbsp; Load DXF data', 'EmployeeID': ' run topology and other standard steps.&nbsp; Assist with GIS questions and cartography/layout.</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'San Emidio Geologic Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2200', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2010-01-05', 'WorkOrderDescription': '', 'StartDate': '2010-01-05', 'DueDate': '2011-02-01', 'ClosedDate': '2011-02-01', 'Notes': '<! 2011-01-13 08:28:25 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>open-file Craig&#39;s two earthquake reports.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Open-file dePolo Earthquake reports', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2201', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-01-13', 'WorkOrderDescription': '', 'StartDate': '2011-01-13', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2011-01-21 10:25:18 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Fix problems that resulted from SM09 deliverable.&nbsp; Troubleshoot database problems and get files to author to make geologic corrections.&nbsp; Possible layout adjustments may result.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Revise and Clean-up Lower Walker River', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2202', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-01-13', 'WorkOrderDescription': '', 'StartDate': '2011-01-13', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2011-01-21 11:54:55 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Finish CM08 work to release Iceberg Canyon as an M-series map.&nbsp; No deadline but finish ASAP.&nbsp; Currently awaiting word from Robert Brady.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Publish Iceberg Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2203', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-02-01', 'WorkOrderDescription': '', 'StartDate': '2011-02-01', 'DueDate': '2011-02-28', 'ClosedDate': '2011-02-28', 'Notes': '<! 2011-02-14 15:08:58 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - February', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2204', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-03-01', 'WorkOrderDescription': '', 'StartDate': '2011-03-01', 'DueDate': '2011-03-31', 'ClosedDate': '2011-03-31', 'Notes': '<! 2011-03-01 09:12:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - March', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2205', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-03-01', 'WorkOrderDescription': '', 'StartDate': '2011-03-01', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-03-01 10:26:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Nevada State Hazard Viewer (My Plan).&nbsp; Create a website to assist county and city governments and individuals in identifying their hazards from earthquakes', 'EmployeeID': ' floods', 'CustomerID': ' and wildfires using GIS', 'PriorityID': ' with links on what to do ', 'StatusID': 'Hazard Website Development and Implementation for FEMA', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2206', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-03-23', 'WorkOrderDescription': '', 'StartDate': '2011-03-23', 'DueDate': '2011-06-30', 'ClosedDate': '2011-06-30', 'Notes': '<! 2011-04-11 15:22:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Complete edits to release open-file</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Reese River OF11-3', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2207', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-04-01', 'WorkOrderDescription': '', 'StartDate': '2011-04-01', 'DueDate': '2011-04-30', 'ClosedDate': '2011-04-30', 'Notes': '<! 2011-04-11 16:22:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded&nbsp;work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - April', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2208', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-04-01', 'WorkOrderDescription': '', 'StartDate': '2011-04-01', 'DueDate': '2011-06-30', 'ClosedDate': '2011-06-30', 'Notes': '<! 2011-04-18 16:12:07 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 2nd qtr - 2011', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2209', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-05-01', 'WorkOrderDescription': '', 'StartDate': '2011-05-01', 'DueDate': '2011-05-31', 'ClosedDate': '2011-05-31', 'Notes': '<! 2011-05-18 08:57:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - May', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2210', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-06-01', 'WorkOrderDescription': '', 'StartDate': '2011-06-01', 'DueDate': '2011-06-30', 'ClosedDate': '2011-06-30', 'Notes': '<! 2011-06-07 11:44:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2211', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-06-03', 'WorkOrderDescription': '', 'StartDate': '2011-06-03', 'DueDate': '2011-08-31', 'ClosedDate': '2011-08-31', 'Notes': '<! 2011-06-20 15:10:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Major Mines of Nevada 2010 edits and print per Doug Driesner', 'EmployeeID': ' NDM', 'CustomerID': ' request.</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines of Nevada 2010', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2212', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-06-27', 'WorkOrderDescription': '', 'StartDate': '2011-06-27', 'DueDate': '2011-06-30', 'ClosedDate': '2011-06-30', 'Notes': '<! 2011-06-28 10:32:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Run a Hazus scenario for a magnitude 7.5 earthquake on the Genoa fault', 'EmployeeID': ' for a worst-case scenario.&nbsp; Event requested by James Pitcher with the State Office of Energy for use in their DOE-funded tabletop exercise.&nbs', 'CustomerID': 'Hazus worst-case scenario Genoa', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2213', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-07-01', 'WorkOrderDescription': '', 'StartDate': '2011-07-01', 'DueDate': '2011-07-31', 'ClosedDate': '2011-07-31', 'Notes': '<! 2011-07-11 15:51:52 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - July', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2214', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-07-01', 'WorkOrderDescription': '', 'StartDate': '2011-07-01', 'DueDate': '2011-09-30', 'ClosedDate': '2011-09-30', 'Notes': '<! 2011-07-12 16:00:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd qtr - 2011', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2215', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-07-01', 'WorkOrderDescription': '', 'StartDate': '2011-07-01', 'DueDate': '2011-09-30', 'ClosedDate': '2011-09-30', 'Notes': '<! 2011-07-13 14:59:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Make a poster for GRC using author provided files.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Poster', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2216', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-07-05', 'WorkOrderDescription': '', 'StartDate': '2011-07-05', 'DueDate': '2011-11-30', 'ClosedDate': '2011-11-30', 'Notes': '<! 2011-07-13 15:17:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map from author provided Illustrator files for open-file release.&nbsp; No conversion to Arc - keep as Illustrator file.&nbsp; Requested by Nick VanBuer.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-07-12 11:45:30 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Work complete 5/22/', 'EmployeeID': 'Sahwave and Nightingale Ranges Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2217', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-07-13', 'WorkOrderDescription': '', 'StartDate': '2011-07-13', 'DueDate': '2011-07-22', 'ClosedDate': '2011-07-22', 'Notes': '<! 2011-07-13 16:17:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>SEPM Fall Field Trip (September 23 - 25', 'EmployeeID': ' 2011) Tour Stops Map</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SEPM Fall Field Trip Tours Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2218', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-07-21', 'WorkOrderDescription': '', 'StartDate': '2011-07-21', 'DueDate': '2011-08-31', 'ClosedDate': '2011-08-31', 'Notes': '<! 2011-08-03 14:02:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>From author provided files', 'EmployeeID': ' prepare the Preliminary Surficial Geologic map along the Northwest Lone Mountain and Weepah Hills Piedmonts for release as an open-file map.&nbsp; The author was Kurt Frankel.</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-03-0', 'EmployeeID': 'NW Lone Mountain and Weepah Hills Piedmonts Open-file', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2219', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-07-25', 'WorkOrderDescription': '', 'StartDate': '2011-07-25', 'DueDate': '2011-11-30', 'ClosedDate': '2011-11-30', 'Notes': '<! 2011-08-03 14:26:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Produce compilation map that includes already converted-to-GIS maps', 'EmployeeID': ' grad student mapping', 'CustomerID': ' new mapping and various data layers not typically used on geologic maps.&nbsp; 1st phase is grant deliverable; possibility of lat', 'PriorityID': 'Pyramid Lake Reservation Mapping', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2220', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-07-26', 'WorkOrderDescription': '', 'StartDate': '2011-07-26', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-08-03 14:59:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Produce a geologic map of the Eureka area for Statemap deliverable and Open-file.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 South Eureka Mining District', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2221', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-07-26', 'WorkOrderDescription': '', 'StartDate': '2011-07-26', 'DueDate': '2011-08-26', 'ClosedDate': '2011-08-26', 'Notes': '<! 2011-08-03 16:16:31 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Research and suggest maps for submission to USGS for GIS conversion for a statemap grant.&nbsp; Provide a prioritized list and bibliography.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2012 Proposal', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2222', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-08-01', 'WorkOrderDescription': '', 'StartDate': '2011-08-01', 'DueDate': '2011-08-31', 'ClosedDate': '2011-08-31', 'Notes': '<! 2011-08-04 08:58:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - August', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2223', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-08-01', 'WorkOrderDescription': '', 'StartDate': '2011-08-01', 'DueDate': '2011-08-31', 'ClosedDate': '2011-08-31', 'Notes': '<! 2011-08-04 09:07:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Update current factsheet to include Statemap 2011 for submission to USGS.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Factsheet update including SM11', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2224', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-08-05', 'WorkOrderDescription': '', 'StartDate': '2011-08-05', 'DueDate': '2011-10-31', 'ClosedDate': '2011-10-31', 'Notes': '<! 2011-08-10 10:16:11 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare preliminary geologic map for statemap 2010 deliverable and open-file.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Bunejug Mountains', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2225', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-08-05', 'WorkOrderDescription': '', 'StartDate': '2011-08-05', 'DueDate': '2011-12-31', 'ClosedDate': '2011-12-31', 'Notes': '<! 2011-08-15 14:48:26 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Publish as m-series in Illustrator format provided by authors.&nbsp; No GIS conversion.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<! 2012-01-05 09:36:27 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>Partially funded by GSN</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Caetano Map', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2226', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-08-18', 'WorkOrderDescription': '', 'StartDate': '2011-08-18', 'DueDate': '2011-10-11', 'ClosedDate': '2011-10-11', 'Notes': '<! 2011-09-06 11:23:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Website announcement of Earth Science Week Field Trip', 'EmployeeID': ' 10/15/2011-10/16/2011.&nbsp; Include signup and drafting field trip maps.</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week Field Trip', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2227', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-08-23', 'WorkOrderDescription': '', 'StartDate': '2011-08-23', 'DueDate': '2012-01-31', 'ClosedDate': '2012-01-31', 'Notes': '<! 2011-09-06 11:45:25 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Use data provided for EQ map from SP27 3rd edition.&nbsp; Plus new EQ data for 2010 provided by Craig dePolo to produce an EQ map of Nevada to accompany M167 Quaternary Faults in Nevada.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Seismicity Map of Nevada', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2228', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-08-29', 'WorkOrderDescription': '', 'StartDate': '2011-08-29', 'DueDate': '2011-12-30', 'ClosedDate': '2011-12-30', 'Notes': '<! 2011-09-06 12:47:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Complete author edits and cross section to prepare map for review.&nbsp; Do post-review edit and finalize for m-series publication and Clarkmap deliverable.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Ute', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2229', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-01', 'WorkOrderDescription': '', 'StartDate': '2011-09-01', 'DueDate': '2011-09-30', 'ClosedDate': '2011-09-30', 'Notes': '<! 2011-09-06 12:57:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - September', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2230', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 11:36:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1307', 'EmployeeID': ' location 39117-D1', 'CustomerID': ' Lander County.&nbsp; Priority 16 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Austin', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2231', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 11:44:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS I 2675', 'EmployeeID': ' location 38116-E7', 'CustomerID': ' Nye County.&nbsp; Priority 4 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Belmont East', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2232', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 11:53:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 95-580', 'EmployeeID': ' location 38114-A6', 'CustomerID': ' Lincoln County.&nbsp; Priority 6 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Bristol Well', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2233', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 14:08:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Dizitizaion into GIS NBMG OF 86-12', 'EmployeeID': ' Elko County.&nbsp; Priority 28 / 35</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Bull Run Mountains', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2234', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 14:26:26 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Conversion&nbsp;into GIS NBMG OF 86-12', 'EmployeeID': ' location 39119-D5', 'CustomerID': ' Storey County.&nbsp; Priority 1 / 35&nbsp;</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Chalk Hills', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2235', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 14:33:17 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Conversion into GIS USGS B 1538', 'EmployeeID': ' Washoe County.&nbsp; Priority 3 / 35</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Charles Sheldon Wildlife Refuge', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2236', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 15:00:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>&nbsp;Digitization into GIS USGS I 2680', 'EmployeeID': ' location 38116-F7', 'CustomerID': ' Nye County.&nbsp; Priority 30 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Corcoran Canyon', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2237', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 15:19:38 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 95-550', 'EmployeeID': ' location 38114-A7', 'CustomerID': ' Lincoln County.&nbsp; Priority 7 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Coyote Spring', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2238', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 15:30:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1754', 'EmployeeID': ' location 37114-A7', 'CustomerID': ' Lincoln County.&nbsp; Priority 19 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Delamar 3 SE', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2239', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-08', 'WorkOrderDescription': '', 'StartDate': '2011-09-08', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-08 15:35:18 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1730', 'EmployeeID': ' location 37114-C8', 'CustomerID': ' Lincoln County.&nbsp; Priority 20 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Delamar Lake', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2240', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 11:50:20 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 539', 'EmployeeID': ' location 40115-G8', 'CustomerID': ' Elko County.&nbsp; Priority 13 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Hunter', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2241', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 11:55:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS I 2668', 'EmployeeID': ' location 40116-G7', 'CustomerID': ' Lander County.&nbsp; Priority 9 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Izzenhood Spring', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2242', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 12:26:56 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 883', 'EmployeeID': ' Nye County.&nbsp; Priority 32 / 35</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Lathrop Wells', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2243', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:04:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 1486', 'EmployeeID': ' location 38118-D3', 'CustomerID': ' Mineral County.&nbsp; Priority 10 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mable Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2244', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:09:00 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 10', 'EmployeeID': ' location 38118-D1', 'CustomerID': ' Mineral County.&nbsp; Priority 12 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mina (Quaternary)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2245', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:13:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 84-685', 'EmployeeID': ' location 41115-G8', 'CustomerID': ' Elko County.&nbsp; Priority 14 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mountain City NW 1/4', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2246', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:18:14 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 84-686', 'EmployeeID': ' location 41115-G8', 'CustomerID': ' Elko County.&nbsp; Priority 15 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mountain City SW 1/4', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2247', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:24:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 19', 'EmployeeID': ' location 39114-C2', 'CustomerID': ' White Pine County.&nbsp; Priority 24 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mt. Moriah', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2248', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:41:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 1485', 'EmployeeID': ' location 38118-D4', 'CustomerID': ' Mineral County.&nbsp; Priority 34 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Pamlico', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2249', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:46:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS I 1902', 'EmployeeID': ' Elko County.&nbsp; Priority 33 / 35</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Peko Hills', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2250', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 14:50:32 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 84-506', 'EmployeeID': ' location 38118-C4', 'CustomerID': ' Mineral County.&nbsp; Priority 11 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Rattlesnake Flat', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2251', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-09-09', 'WorkOrderDescription': '', 'StartDate': '2011-09-09', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-09 15:01:05 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 7', 'EmployeeID': ' location 38114-A1', 'CustomerID': ' Lincoln County.&nbsp; Priority 18 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Rice Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2252', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-09-12', 'WorkOrderDescription': '', 'StartDate': '2011-09-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-12 13:53:43 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1759', 'EmployeeID': ' location 37114-B1', 'CustomerID': ' Lincoln County.&nbsp; Priority 26 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Scarecrow Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2253', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-09-12', 'WorkOrderDescription': '', 'StartDate': '2011-09-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-12 13:58:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG Map 60', 'EmployeeID': ' location 38118-H7', 'CustomerID': ' Mineral County.&nbsp; Priority 2 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Schurz', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2254', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-12', 'WorkOrderDescription': '', 'StartDate': '2011-09-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-12 14:02:38 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 94-436', 'EmployeeID': ' location 40117 - F1', 'CustomerID': ' Humboldt', 'PriorityID': ' Lander Counties.&nbsp; Priority 27 / 35</p>', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Snow Gulch', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2255', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-12', 'WorkOrderDescription': '', 'StartDate': '2011-09-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-12 14:07:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 1300', 'EmployeeID': ' location 38118-C1', 'CustomerID': ' Mineral County.&nbsp; Priority 31 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Sodaville', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2256', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-09-12', 'WorkOrderDescription': '', 'StartDate': '2011-09-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-12 14:11:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Conversion into GIS NBMG Map 133', 'EmployeeID': ' Churchill County.&nbsp; Priority 5 / 35</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Southern Sand Springs Range', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2257', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-09-12', 'WorkOrderDescription': '', 'StartDate': '2011-09-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-12 15:47:55 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 18', 'EmployeeID': ' location 39114-D1', 'CustomerID': ' White Pine County.&nbsp; Priority 25 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Spring Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2258', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-09-12', 'WorkOrderDescription': '', 'StartDate': '2011-09-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-12 15:52:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 882', 'EmployeeID': ' location 36116-F3', 'CustomerID': ' Nye County.&nbsp; Priority 29 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Striped Hills', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2259', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-13', 'WorkOrderDescription': '', 'StartDate': '2011-09-13', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-13 10:36:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 2194', 'EmployeeID': ' location 39118-E3', 'CustomerID': ' Churchill County.&nbsp; Priority 8 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Table Mountain', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2260', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-13', 'WorkOrderDescription': '', 'StartDate': '2011-09-13', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-13 10:40:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 22', 'EmployeeID': ' location 39114-B1', 'CustomerID': ' White Pine County.&nbsp; Priority 22 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 The Cove', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2261', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-09-13', 'WorkOrderDescription': '', 'StartDate': '2011-09-13', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-13 10:50:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1758', 'EmployeeID': ' White Pine County.&nbsp; Priority 23 / 35</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 The Lehman Caves', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2262', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-09-13', 'WorkOrderDescription': '', 'StartDate': '2011-09-13', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-13 10:55:35 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Conversion into GIS NBMG Map 132', 'EmployeeID': ' location 40114-C2', 'CustomerID': ' Elko County.&nbsp; Priority 17 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 White Horse Pass Area', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2263', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-09-13', 'WorkOrderDescription': '', 'StartDate': '2011-09-13', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-13 10:59:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 94-687', 'EmployeeID': ' location 39114-A3', 'CustomerID': ' White Pine County.&nbsp; Priority 35 / 35</p>', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Windy Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2264', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-09-13', 'WorkOrderDescription': '', 'StartDate': '2011-09-13', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2011-09-13 11:03:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1327', 'EmployeeID': ' location 36116-H Nye County.&nbsp; Priority 21 / 351</p>', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Yucca Lake', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2265', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-09-13', 'WorkOrderDescription': '', 'StartDate': '2011-09-13', 'DueDate': '2011-12-31', 'ClosedDate': '2011-12-31', 'Notes': '<! 2011-09-19 09:20:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare Sue Beard&#39;s Whitney Pocket for Clarkmap deliverable and M-Series publication.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Whitney Pocket', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2266', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-10-01', 'WorkOrderDescription': '', 'StartDate': '2011-10-01', 'DueDate': '2011-10-31', 'ClosedDate': '2011-10-31', 'Notes': '<! 2011-10-12 12:27:58 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc -', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2267', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-10-01', 'WorkOrderDescription': '', 'StartDate': '2011-10-01', 'DueDate': '2011-12-31', 'ClosedDate': '2011-12-31', 'Notes': '<! 2011-10-18 09:50:18 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th qtr - 2011', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2268', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-10-04', 'WorkOrderDescription': '', 'StartDate': '2011-10-04', 'DueDate': '2011-10-31', 'ClosedDate': '2011-10-31', 'Notes': '<! 2011-10-24 15:20:50 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare Hazen Preliminary Geologic map for Statemap deliverable and open-file.&nbsp; Take W 1/2 completed under previous statemap and combine with new mapping to complete full quad.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Hazen', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2269', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-10-04', 'WorkOrderDescription': '', 'StartDate': '2011-10-04', 'DueDate': '2011-11-30', 'ClosedDate': '2011-11-30', 'Notes': '<! 2011-10-24 16:04:19 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare Ben Delwiche&#39;s Moses Rock Thesis Map for open-file publication.&nbsp; Jim Faulds to provide an account number.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Moses Rock', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2270', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-11-01', 'WorkOrderDescription': '', 'StartDate': '2011-11-01', 'DueDate': '2011-11-30', 'ClosedDate': '2011-11-30', 'Notes': '<! 2011-11-21 10:01:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - November', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2271', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2011-12-01', 'WorkOrderDescription': '', 'StartDate': '2011-12-01', 'DueDate': '2011-12-31', 'ClosedDate': '2011-12-31', 'Notes': '<! 2011-12-28 15:01:40 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - December', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2272', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2011-12-06', 'WorkOrderDescription': '', 'StartDate': '2011-12-06', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2011-12-28 16:08:35 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Use data provided by Summit for web application.&nbsp; Host web application for 1 year on our web server.&nbsp; Any changes requested by the client will be billed at $51.75/hour with a 3-hour minimum.&nbsp; Monthly web h', 'EmployeeID': 'Summit Engineering - FIND Project', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2273', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2011-12-08', 'WorkOrderDescription': '', 'StartDate': '2011-12-08', 'DueDate': '2012-01-20', 'ClosedDate': '2012-01-20', 'Notes': '<! 2012-01-05 14:32:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Redraft Nevada pagesize geology concept to make suitable for printing on shirts', 'EmployeeID': ' bandanas', 'CustomerID': ' and NBMG logo for hats.</p>', 'PriorityID': 'Nevada Pagesize Geology', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2274', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2011-12-14', 'WorkOrderDescription': '', 'StartDate': '2011-12-14', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-01-06 10:59:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Assist with production of geologic map and other related GIS work; publication status unknown at this time.  Map likely will include other geophysical data combined with the map.  Probably will not be a detailed map', 'EmployeeID': ' but po', 'CustomerID': 'Snowstorm', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2275', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2011-12-20', 'WorkOrderDescription': '', 'StartDate': '2011-12-20', 'DueDate': '2013-03-25', 'ClosedDate': '2013-03-25', 'Notes': '<! 2012-01-06 10:59:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Check the reasonableness of automated HAZUS runs against previous or new HAZUS runs using epicenter-depth-magnitude input.</p>', 'EmployeeID': 'EQ Hazards Reduction', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2276', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-01-01', 'WorkOrderDescription': '', 'StartDate': '2012-01-01', 'DueDate': '2012-01-31', 'ClosedDate': '2012-01-31', 'Notes': '<! 2012-01-06 11:15:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - January', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2277', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-01-01', 'WorkOrderDescription': '', 'StartDate': '2012-01-01', 'DueDate': '2012-03-31', 'ClosedDate': '2012-03-31', 'Notes': '<! 2012-01-06 11:26:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': 'Web Maintenance - 1st qtr - 2012', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2278', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-01-06', 'WorkOrderDescription': '', 'StartDate': '2012-01-06', 'DueDate': '2012-01-31', 'ClosedDate': '2012-01-31', 'Notes': '<! 2012-01-06 11:41:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Cartography and Layout for M-Series publication.</p>', 'EmployeeID': 'Strain Map of Nevada', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2279', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-02-01', 'WorkOrderDescription': '', 'StartDate': '2012-02-01', 'DueDate': '2012-02-29', 'ClosedDate': '2012-02-29', 'Notes': '<! 2012-02-07 12:27:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - February', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2280', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-02-01', 'WorkOrderDescription': '', 'StartDate': '2012-02-01', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2012-02-22 10:55:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Tracking time needed to develop and publish a 2013 Bureau calendar</p>', 'EmployeeID': 'Calendar', 'CustomerID': ' NBMG', 'PriorityID': ' 2013', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2281', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-03-01', 'WorkOrderDescription': '', 'StartDate': '2012-03-01', 'DueDate': '2012-03-31', 'ClosedDate': '2012-03-31', 'Notes': '<! 2012-03-08 16:17:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - March', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2282', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-03-01', 'WorkOrderDescription': '', 'StartDate': '2012-03-01', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-04-02 16:01:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for review and final publication as M-Series.&nbsp; Also submit as a Clarkmap deliverable.&nbsp; 1) Work through revisions with authors.&nbsp; 2)&nbsp; Add cross sections for final map.&nbsp; 3)&nbsp; Place l', 'EmployeeID': 'Finalize Searchlight for M-Series', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2283', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-03-05', 'WorkOrderDescription': '', 'StartDate': '2012-03-05', 'DueDate': '2012-04-16', 'ClosedDate': '2012-04-16', 'Notes': '<! 2012-04-02 16:13:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare cross section profiles from provided shapefiles and DEM.&nbsp; Assist with completion of cross section profiles.</p>', 'EmployeeID': 'Soda Lakes Cross Sections', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2284', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-03-16', 'WorkOrderDescription': '', 'StartDate': '2012-03-16', 'DueDate': '2012-05-31', 'ClosedDate': '2012-05-31', 'Notes': '<! 2012-04-05 10:06:16 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Begin preliminary work to migrate old databases into one compilation database for the Fernley area.&nbsp; Assist with GIS/Cartography in preparation for grant deliverable.</p>', 'EmployeeID': 'Fernley Mapping', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2285', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-03-26', 'WorkOrderDescription': '', 'StartDate': '2012-03-26', 'DueDate': '2012-05-31', 'ClosedDate': '2012-05-31', 'Notes': '<! 2012-04-05 10:49:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Final layout', 'EmployeeID': ' paginate', 'CustomerID': ' preparation for web.</p>', 'PriorityID': 'Mineral Industry 2010', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2286', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-04-01', 'WorkOrderDescription': '', 'StartDate': '2012-04-01', 'DueDate': '2012-04-30', 'ClosedDate': '2012-04-30', 'Notes': '<! 2012-04-05 11:33:15 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p class="MsoNormal" style="margin: 0in 0in 10pt;"><span style="font-family: Calibri;">This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</span></p>', 'EmployeeID': 'Prelim & Misc - April', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2287', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-04-01', 'WorkOrderDescription': '', 'StartDate': '2012-04-01', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2012-04-05 11:39:35 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': 'Web Maintenance - 2nd qtr - 2012', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2288', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-04-12', 'WorkOrderDescription': '', 'StartDate': '2012-04-12', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2012-07-13 14:59:07 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare geologic map as an open-file layout', 'EmployeeID': ' but only submitting as deliverable at this point.&nbsp; Assist with GIS and cartographic work.&nbsp; Cross sections also needed to be generated and included in deliverable.</p', 'CustomerID': 'Dixie Valley', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2289', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2012-05-31', 'ClosedDate': '2012-05-31', 'Notes': '<! 2012-07-13 15:45:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - May', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2290', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-05-16', 'WorkOrderDescription': '', 'StartDate': '2012-05-16', 'DueDate': '2012-05-30', 'ClosedDate': '2012-05-30', 'Notes': '<! 2012-07-16 12:04:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Student map for Sean Long - Funding did not come through - Project cancelled.</p><! 2012-07-18 15:54:27 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is cancelled - Funding did not come through.</p>', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '', 'EmployeeID': 'Mahogany Hills', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2291', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-06-01', 'WorkOrderDescription': '', 'StartDate': '2012-06-01', 'DueDate': '2012-06-30', 'ClosedDate': '2012-06-30', 'Notes': '<! 2012-07-17 14:09:19 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued in order to document work that is unbillable.</p>', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2292', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-07-01', 'WorkOrderDescription': '', 'StartDate': '2012-07-01', 'DueDate': '2012-09-30', 'ClosedDate': '2012-09-30', 'Notes': '<! 2012-07-17 15:57:15 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': 'Web Maintenance - 3rd qtr - 2012', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2293', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-07-19 14:26:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Convert 24 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; See list attached.&nbsp; Each conversion will have a work order number assigned.</p>', 'EmployeeID': 'GIS Conversion Master', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2294', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-07-20 11:17:22 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS GQ 761', 'CustomerID': ' location 39116-E6', 'PriorityID': ' Lander County.&nbsp; Priority 2 / 24.&nbsp;</p>', 'StatusID': 'SM12 Ackerman Canyon', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2295', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-07-20 11:55:03 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS Map I-2081', 'CustomerID': ' location 40115-G7', 'PriorityID': 'H7', 'StatusID': ' Elko County.&nbsp; Priority 19 / 24.</p>', 'SubmittedDate': 'SM12 Adobe Range', 'WorkOrderDescription': ' Northern', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2296', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-07-20 12:12:46 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS OF 81-369', 'CustomerID': ' location 38118-A3', 'PriorityID': ' Mineral County.&nbsp; Priority 20 / 24.</p>', 'StatusID': 'SM12 Basalt', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2297', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-07-26 11:23:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS MF 559', 'CustomerID': ' location 41116-A1', 'PriorityID': ' Elko County.&nbsp; Priority 21 / 24</p>', 'StatusID': 'SM12 Blue Basin', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2298', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-07-26 11:35:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS Map GQ-821', 'CustomerID': ' location 40118-B2', 'PriorityID': ' Pershing County.&nbsp;&nbsp;Priority 14 / 24.</p>', 'StatusID': 'SM12 Buffalo Mountain', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2299', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-07-30 14:21:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS GQ-726', 'CustomerID': ' location 36116-F1', 'PriorityID': ' Nye County.&nbsp; Priority 13 / 24.</p>', 'StatusID': 'SM12 Camp Desert Rock', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2300', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-17 14:48:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS MF 528', 'CustomerID': ' location 41115-B6', 'PriorityID': ' Elko County.&nbsp; Priority 1/24.</p>', 'StatusID': 'SM12 Coal Mine Basin', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2301', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-17 14:56:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' NBMG Map 50', 'CustomerID': ' multiple counties.&nbsp; Priority 15/24.</p>', 'PriorityID': 'SM12 Geo Map of North-Central Nevada', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2302', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-17 15:01:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS OF 80-715', 'CustomerID': ' location 40117-C7', 'PriorityID': ' Pershing County.&nbsp; Priority 3/24.</p>', 'StatusID': 'SM12 Granite Mountain', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2303', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-17 15:38:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS Map I-2629', 'CustomerID': ' Elko County.&nbsp; Priority 17/24.</p>', 'PriorityID': 'SM12 Independence Mtns', 'StatusID': ' southern', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2304', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-21 12:33:49 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' NBMG OF 05-1', 'CustomerID': ' Elko', 'PriorityID': ' Humboldt', 'StatusID': ' Lander Counties.&nbsp; Priority 11/24.</p>', 'SubmittedDate': 'SM12 Kelly Creek', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2305', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-21 12:44:24 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS OF 99-350', 'CustomerID': ' Churchill County.&nbsp; Priority 18/24.</p>', 'PriorityID': 'SM12 Middlegate Area', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2306', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-21 15:24:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS OF 79-1145', 'CustomerID': ' location 38118-A2', 'PriorityID': ' Mineral County.&nbsp; Priority 4/24.</p>', 'StatusID': 'SM12 Miller Mountain & Columbus', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2307', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-21 15:32:47 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS GQ 730', 'CustomerID': ' location 39116-F8', 'PriorityID': ' Lander County.&nbsp; Priority 7/24.</p>', 'StatusID': 'SM12 Mount Callaghan', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2308', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-21 15:54:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Conversion into GIS', 'EmployeeID': ' NBMG OF03-19', 'CustomerID': ' location 36116-A1', 'PriorityID': ' Nye County.&nbsp; Priority 8/24.</p>', 'StatusID': 'SM12 Nopah Peak NE 1/4', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2309', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-21 16:16:51 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS OF 99-5338', 'CustomerID': ' Nye County.&nbsp; Priority 22/24.</p>', 'PriorityID': 'SM12 Oasis Valley Basin & Vicinity', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2310', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 10:05:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Convert into GIS', 'EmployeeID': ' NBMG OF 03-4', 'CustomerID': ' location 41114-B8', 'PriorityID': ' Elko County.&nbsp; Priority 12/24.</p>', 'StatusID': 'SM12 Oxley Peak Area', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2311', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 10:09:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS GQ 384', 'CustomerID': ' location 36115-H8', 'PriorityID': ' Nye County.&nbsp; Priority 16/24.</p>', 'StatusID': 'SM12 Plutonium Valley', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2312', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 10:14:37 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS Map I-2394', 'CustomerID': ' location 41116-C8', 'PriorityID': ' Elko', 'StatusID': ' Humboldt counties.&nbsp; Priority 9/24.</p>', 'SubmittedDate': 'SM12 Snowstorm Mountains and Vicinity', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2313', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 10:19:59 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS OF 83-303', 'CustomerID': ' Elko county.&nbsp; Priority 23/24.</p>', 'PriorityID': 'SM12 Southern Snake Mountain', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2314', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 10:35:53 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS GQ 770', 'CustomerID': ' location 39116-C7', 'PriorityID': ' Lander county.&nbsp; Priority 5/24.</p>', 'StatusID': 'SM12 Spencer Hot Springs', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2315', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 10:52:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Conversion into GIS', 'EmployeeID': ' NBMG OF 03-20', 'CustomerID': ' location 36116-B2', 'PriorityID': ' Nye county.&nbsp; Priority 10/24.</p>', 'StatusID': 'SM12 Stewart Valley NE 1/4', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2316', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 10:56:56 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' NBMG Map 98', 'CustomerID': ' Nye county.&nbsp; Priority 6/24.</p>', 'PriorityID': 'SM12 Toquima Caldera Complex', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2317', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-05-01', 'WorkOrderDescription': '', 'StartDate': '2012-05-01', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2012-08-22 11:02:41 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Digitization into GIS', 'EmployeeID': ' USGS Map GQ-820', 'CustomerID': ' location 40118-D1', 'PriorityID': ' Pershing county.&nbsp; Priority 24/24.</p>', 'StatusID': 'SM12 Unionville', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2318', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-07-15', 'WorkOrderDescription': '', 'StartDate': '2012-07-15', 'DueDate': '2012-10-31', 'ClosedDate': '2012-10-31', 'Notes': '<! 2012-08-22 16:12:29 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare Desert Peak quad for Statemap deliverable and open-file release.</p>', 'EmployeeID': 'SM11 Desert Peak', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2319', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-08-14', 'WorkOrderDescription': '', 'StartDate': '2012-08-14', 'DueDate': '2012-09-18', 'ClosedDate': '2012-09-18', 'Notes': '<! 2012-09-06 15:42:45 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>2 posters needed for the GRC Conference</p>', 'EmployeeID': 'GRC Posters', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2320', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-08-21', 'WorkOrderDescription': '', 'StartDate': '2012-08-21', 'DueDate': '2013-06-30', 'ClosedDate': '2013-06-30', 'Notes': '<! 2012-09-10 10:53:01 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Develop', 'EmployeeID': ' improve and manage mineral assessment database and web application.</p>', 'CustomerID': 'Database Management for DOM', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2321', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-08-21', 'WorkOrderDescription': '', 'StartDate': '2012-08-21', 'DueDate': '2013-02-28', 'ClosedDate': '2013-02-28', 'Notes': '<! 2012-09-11 10:20:29 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Carson City Trenching</p>', 'EmployeeID': 'Kings Canyon Fault Zone', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2322', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-08-24', 'WorkOrderDescription': '', 'StartDate': '2012-08-24', 'DueDate': '2013-05-23', 'ClosedDate': '2013-05-23', 'Notes': '<! 2012-09-12 15:14:06 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Cartography has three principal activities&#58;&nbsp; 1)Install and maintain the Nevada node on the Western Hub server&nbsp; 2)Implement ArcGIS Geoportal (cataloguing) and web services (data access) on the Hub&nbsp; 3)Pr', 'EmployeeID': "Arizona Geological Survey/Doe/Nat'l Geothermal Data System", 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2323', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-09-17', 'WorkOrderDescription': '', 'StartDate': '2012-09-17', 'DueDate': '2013-06-30', 'ClosedDate': '2013-06-30', 'Notes': '<! 2012-09-17 10:06:21 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Survey Report Formatting including layout editing</p>', 'EmployeeID': 'Exploration Survey for DOM', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2324', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-09-17', 'WorkOrderDescription': '', 'StartDate': '2012-09-17', 'DueDate': '2013-06-30', 'ClosedDate': '2013-06-30', 'Notes': '<! 2012-09-17 10:26:11 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>New geologic framework studies in critical areas.</p>', 'EmployeeID': 'Geologic Framework Studies for DOM', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2325', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-10-01', 'WorkOrderDescription': '', 'StartDate': '2012-10-01', 'DueDate': '2014-09-09', 'ClosedDate': '2014-09-09', 'Notes': '<! 2012-11-29 12:59:04 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Activity 2 - Task A - Gary Johnson to integrate new data (as a GIS layer) from an inventory of potential URMs into the MyPlan dataset services and viewers.&nbsp; Task B - &nbsp;Adapt existing Excel-based administrative s', 'EmployeeID': 'Hazard Mitigation Proj Act 1-4', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2326', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-10-01', 'WorkOrderDescription': '', 'StartDate': '2012-10-01', 'DueDate': '2013-12-31', 'ClosedDate': '2014-01-17', 'Notes': '<! 2012-11-29 15:01:28 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>NBMG will analyze and create GIS maps&nbsp;of suburban and urban areas that may be flooded by breaches of irrigation ditches and canals and present this information in a GIS format.&nbsp;&nbsp;NBMG will use digital eleva', 'EmployeeID': 'Irrigation Ditches - Activity 1A', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2327', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-10-01', 'WorkOrderDescription': '', 'StartDate': '2012-10-01', 'DueDate': '2013-12-31', 'ClosedDate': '2013-12-31', 'Notes': '<! 2012-11-29 15:17:08 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Add the location of potential URM buildings into the HAZUS database for Nevada and use HAZUS to calculate the reduction in risk that may be achievable for at least 20 major communities throughout the state.&nbsp; The upd', 'EmployeeID': 'Integration of URM data into Hazus - Activity 1B', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2328', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-10-01', 'WorkOrderDescription': '', 'StartDate': '2012-10-01', 'DueDate': '2013-12-31', 'ClosedDate': '2013-12-31', 'Notes': '<! 2012-11-29 15:28:36 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>NBMG will add additional GIS layers to MyPlan.&nbsp; Foremost among these will be flood data created in Activity 1A and earthquake hazards from potential URMs from Activity 1B.&nbsp; Additional GIS layers will include a ', 'EmployeeID': 'MyPlan Website Update', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2329', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-11-29', 'WorkOrderDescription': '', 'StartDate': '2012-11-29', 'DueDate': '2013-12-31', 'ClosedDate': '2013-12-31', 'Notes': '<! 2012-12-12 15:21:40 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare for open-file after Russell diFiori (Sean Long&#39;s graduate student) does his mapping.&nbsp; Help answer GIS questions', 'EmployeeID': ' etc.</p>', 'CustomerID': 'Eureka', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2330', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-09-27', 'WorkOrderDescription': '', 'StartDate': '2012-09-27', 'DueDate': '2012-10-03', 'ClosedDate': '2012-10-03', 'Notes': '<! 2012-12-13 10:12:27 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Help Jim', 'EmployeeID': ' Nick', 'CustomerID': ' and grad students prepare and print posters for <br />GRC field trip.</p>', 'PriorityID': 'GRC Poster Printing', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2331', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-11-29', 'WorkOrderDescription': '', 'StartDate': '2012-11-29', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-12-13 10:41:13 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare open-file for Clarkmap 2012 deliverable.</p>', 'EmployeeID': 'CM12 Corn Creek Springs NW', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2332', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-11-27', 'WorkOrderDescription': '', 'StartDate': '2012-11-27', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-12-13 10:59:22 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare open-file for Clarkmap deliverable.</p>', 'EmployeeID': 'CM12 Fourth of July Mtn N 1/2', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2333', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-11-29', 'WorkOrderDescription': '', 'StartDate': '2012-11-29', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-12-13 11:51:10 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2012 deliverable and review', 'EmployeeID': ' then M-series publication.&nbsp; Previously open-filed in 2004', 'CustomerID': ' converted to Arc and delivered for Clarkmap in 2008', 'PriorityID': ' but not open-filed.</p><! 2013-04-08 12:27:30 lgoar >', 'StatusID': 'CM12 Davis Dam', 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2334', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-11-29', 'WorkOrderDescription': '', 'StartDate': '2012-11-29', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-12-13 13:45:54 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2012 deliberable as an open-file.&nbsp; Previously', 'EmployeeID': ' W 1/2 was open-filed for Clarkmap.&nbsp; This will be a full quad deliverable.</p>', 'CustomerID': 'CM12 Ireteba Peaks', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2335', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-12-03', 'WorkOrderDescription': '', 'StartDate': '2012-12-03', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-12-13 14:26:57 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2012 deliverable; eventual review and m-series publication.&nbsp; Possibly generate x-section profiles.&nbsp; Previously open-filed through Statemap and Clarkmap.</p><! 2013-04-24 15:29:42 lgoar >', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '<', 'EmployeeID': 'CM12 Spirit Mountain NW', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2336', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2012-12-03', 'WorkOrderDescription': '', 'StartDate': '2012-12-03', 'DueDate': '2012-12-31', 'ClosedDate': '2012-12-31', 'Notes': '<! 2012-12-13 14:41:39 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Statemap style layout</p>', 'EmployeeID': 'CM12 Valley GIS Conversion', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2337', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-12-04', 'WorkOrderDescription': '', 'StartDate': '2012-12-04', 'DueDate': '2013-06-30', 'ClosedDate': '2013-07-08', 'Notes': '<! 2013-01-04 15:46:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for eventual open-file publication.&nbsp; Map originator includes Brian Hawsback.</p>', 'EmployeeID': 'High Rock Caldera', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2338', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2012-12-04', 'WorkOrderDescription': '', 'StartDate': '2012-12-04', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '<! 2013-01-07 09:25:25 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Prepare map for eventual open-file publication</p>', 'EmployeeID': 'McDermitt Caldera', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2339', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-01-02', 'WorkOrderDescription': '', 'StartDate': '2013-01-02', 'DueDate': '2013-05-31', 'ClosedDate': '2013-05-31', 'Notes': '<! 2013-01-07 11:02:26 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Eastern Oregon&nbsp; -&nbsp; No open-file report&nbsp; -&nbsp; possibly 2 cross-sections&nbsp; -&nbsp; Joel Edwards', 'EmployeeID': ' grad student</p>', 'CustomerID': 'Neal (Joel Edwards)', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2340', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-01-02', 'WorkOrderDescription': '', 'StartDate': '2013-01-02', 'DueDate': '2013-05-31', 'ClosedDate': '2013-05-31', 'Notes': '<! 2013-01-07 12:21:42 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Possible open-file report with cross-sections.&nbsp; Greg Dering - grad student</p>', 'EmployeeID': 'Tuscarora (Greg Dering)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2341', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-01-03', 'WorkOrderDescription': '', 'StartDate': '2013-01-03', 'DueDate': '2013-05-31', 'ClosedDate': '2013-05-31', 'Notes': '<! 2013-01-07 14:55:44 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Assist grad student with mapping process and perform GIS and Cartographic work as needed to bring map to open-file status.&nbsp; Possibly 4 cross-sections.&nbsp;</p>', 'EmployeeID': 'Emerson Pass (Ryan Anderson)', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2342', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-01-09', 'WorkOrderDescription': '', 'StartDate': '2013-01-09', 'DueDate': '2013-03-31', 'ClosedDate': '2013-03-31', 'Notes': '<! 2013-01-16 15:13:33 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Update information and prepress and print.&nbsp; DOM to be billed directly for printing.</p>', 'EmployeeID': 'Major Mines of Nevada 2011', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2343', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-01-09', 'WorkOrderDescription': '', 'StartDate': '2013-01-09', 'DueDate': '2013-03-31', 'ClosedDate': '2013-03-31', 'Notes': '<! 2013-01-16 16:05:17 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Typeset report', 'EmployeeID': ' co-ordinate editing and move to open-file publication.</p>', 'CustomerID': 'dePolo Magnitude OFR', 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2344', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-01-30', 'WorkOrderDescription': '', 'StartDate': '2013-01-30', 'DueDate': '2013-02-15', 'ClosedDate': '2013-02-15', 'Notes': '<! 2013-03-08 14:09:12 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Update Factsheet with 2012 funded maps</p>', 'EmployeeID': 'Factsheet Update Statemap 2012', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2345', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-02-01', 'WorkOrderDescription': '', 'StartDate': '2013-02-01', 'DueDate': '2013-02-28', 'ClosedDate': '2013-02-28', 'Notes': '<! 2013-03-08 14:20:08 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Create figures to include in Sean&#39;s journal article and prepare Eureka OFR data to submit as a download.</p>', 'EmployeeID': 'Eureka Paper', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2346', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-02-01', 'WorkOrderDescription': '', 'StartDate': '2013-02-01', 'DueDate': '2013-04-15', 'ClosedDate': '2013-04-15', 'Notes': '<! 2013-03-11 15:55:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': 'Help with Graphs', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Actual completion 6/14/2013', 'EmployeeID': 'MI 2011', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2347', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-02-01', 'WorkOrderDescription': '', 'StartDate': '2013-02-01', 'DueDate': '2013-04-15', 'ClosedDate': '2013-04-15', 'Notes': '<! 2013-03-11 15:55:02 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Extract information from faculty and staff evaluations from 2010 and 2011 to aid the Director with his report.</p>', 'EmployeeID': 'Biennial Report', 'CustomerID': ' NBMG', 'PriorityID': ' 2012', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2348', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-02-01', 'WorkOrderDescription': '', 'StartDate': '2013-02-01', 'DueDate': '2013-06-30', 'ClosedDate': '2013-06-30', 'Notes': '<! 2013-03-11 16:05:09 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track all work needed to maintain the NBMG web.</p>', 'EmployeeID': 'Web Maintenance', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2349', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-03-08', 'WorkOrderDescription': '', 'StartDate': '2013-03-08', 'DueDate': '2013-06-30', 'ClosedDate': '2013-06-30', 'Notes': '<! 2013-03-12 15:21:48 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>Use Historical EQ&#39;s map to create a slide show of photos', 'EmployeeID': ' maps', 'CustomerID': ' timeline and possibly sound.</p>', 'PriorityID': "Historical EQ's Slideshow", 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2350', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-03-08', 'WorkOrderDescription': '', 'StartDate': '2013-03-08', 'DueDate': '2013-06-30', 'ClosedDate': '2013-06-30', 'Notes': '<! 2013-03-12 15:41:58 lgoar >', 'ProjectName': None}
,
{'WorkOrderID': '<p>This work order is issued to track time spent by the NBMG representative on the NV Board on Geographic Names.&nbsp; State Law (NRS 327) stipulates that NBMG has one representative to the board.</p>', 'EmployeeID': 'Nevada State Board on Geographic Names', 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2351', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-03-15', 'WorkOrderDescription': 'Prepare as a digital conversion to submit as a Clarkmap deliverable.  Use files from previous conversion.  Standardize as best possible and do metadata and zip file.', 'StartDate': '2013-03-15', 'DueDate': '2013-04-30', 'ClosedDate': '2013-04-30', 'Notes': '', 'ProjectName': 'Mount Manchester'}
,
{'WorkOrderID': '2352', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-12-01', 'WorkOrderDescription': 'This work order is issued in order to archive the GIS Conversion work done on USGS Riverside Map GQ-1770 for Clarkmap.', 'StartDate': '2012-12-01', 'DueDate': '2012-12-30', 'ClosedDate': '2012-12-30', 'Notes': '', 'ProjectName': 'Riverside Conversion'}
,
{'WorkOrderID': '2353', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-04-11', 'WorkOrderDescription': 'Update map with new mapping on west edge', 'StartDate': " age dates and cross sections.  Assist with loading data into geodatabase and making an inset like the one made for Brady's.  Prepare for open-file", 'DueDate': ' but mainly for new 3D model.', 'ClosedDate': '2013-04-11', 'Notes': '2013-09-30', 'ProjectName': '2013-09-30', None: ['', 'Bunejug Mountains']}
,
{'WorkOrderID': '2354', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-05-24', 'WorkOrderDescription': 'Prepare for open-file using files Peter Drakos provided from his thesis.  (This map tied in with Pyramid Lake and Moses Rock.)', 'StartDate': '2013-05-24', 'DueDate': '2013-09-30', 'ClosedDate': '2013-09-30', 'Notes': '', 'ProjectName': 'Southern Lake Range Geologic Map'}
,
{'WorkOrderID': '2355', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-06-01', 'WorkOrderDescription': 'This work order is issued to track work done to draft a map of the quad that can be used for UNR event and planning meetings.Time was tracked in P & M over multiple months.', 'StartDate': '2012-06-01', 'DueDate': '2012-11-01', 'ClosedDate': '2012-11-01', 'Notes': '', 'ProjectName': 'UNR Quad Map for Leah'}
,
{'WorkOrderID': '2356', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-06-03', 'WorkOrderDescription': 'Prepare Minden Open File 03-13 for peer review and eventual M-Series', 'StartDate': '2013-06-03', 'DueDate': '2013-09-30', 'ClosedDate': '2013-09-30', 'Notes': '', 'ProjectName': 'Minden'}
,
{'WorkOrderID': '2357', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-06-03', 'WorkOrderDescription': 'Set-up Geodatabase for Ken Adams to use as a template for his mapping projects.  Use Lower Walker River domains.', 'StartDate': '2013-06-03', 'DueDate': '2013-06-03', 'ClosedDate': '2013-06-03', 'Notes': '', 'ProjectName': 'Template Geodatabase'}
,
{'WorkOrderID': '2358', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-06-03', 'WorkOrderDescription': 'Develop and publish a 2014 Bureau Calendar.', 'StartDate': '2013-06-03', 'DueDate': '2013-08-30', 'ClosedDate': '2013-08-30', 'Notes': '', 'ProjectName': 'Calendar', None: [' NBMG', ' 2014']}
,
{'WorkOrderID': '2359', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-06-03', 'WorkOrderDescription': 'Publish Valley of Fire East quad as an open-file.Billed on Invoice #24940', 'StartDate': '2013-06-03', 'DueDate': '2013-07-31', 'ClosedDate': '2013-07-31', 'Notes': '', 'ProjectName': 'Valley of Fire East'}
,
{'WorkOrderID': '2360', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-06-10', 'WorkOrderDescription': 'Prepare Wabuska quad for Statemap deliverable and open-file release.', 'StartDate': '2013-06-10', 'DueDate': '2013-07-31', 'ClosedDate': '2013-07-31', 'Notes': '', 'ProjectName': 'SM12 Wabuska'}
,
{'WorkOrderID': '2361', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-06-10', 'WorkOrderDescription': 'Prepare West Gate Quad for Statemap deliverable and open-file release.', 'StartDate': '2013-06-10', 'DueDate': '2013-07-31', 'ClosedDate': '2013-07-31', 'Notes': '', 'ProjectName': 'SM12 West Gate Quad'}
,
{'WorkOrderID': '2362', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-06-17', 'WorkOrderDescription': 'Update existing files on server and test new .htm files.', 'StartDate': '2013-06-17', 'DueDate': '2013-07-31', 'ClosedDate': '2013-07-31', 'Notes': '', 'ProjectName': 'Mining District Files Web Update'}
,
{'WorkOrderID': '2363', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-06-18', 'WorkOrderDescription': 'Prepare set of figures', 'StartDate': '2013-06-18', 'DueDate': '2013-07-15', 'ClosedDate': '2013-07-15', 'Notes': '', 'ProjectName': 'Las Vegas Valley Figures'}
,
{'WorkOrderID': '2364', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-06-25', 'WorkOrderDescription': 'Put together for the first time a comprehensive GIS database of all the data for the DNWR.  Data will include all available resource information (mineral occurrences', 'StartDate': ' hot water occurrences', 'DueDate': ' etc)', 'ClosedDate': ' geologic mapping', 'Notes': ' geochemical data (stream sediment', 'ProjectName': ' rock-c', None: ['2013-06-25', '2014-12-31', '2014-12-31', '', 'Mineral Assessment of DNWR']}
,
{'WorkOrderID': '2365', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-07-01', 'WorkOrderDescription': 'This work order is issued to track all work needed to maintain the NBMG web page.', 'StartDate': '2013-07-01', 'DueDate': '2013-12-31', 'ClosedDate': '2013-12-31', 'Notes': '', 'ProjectName': 'Web Maintenance'}
,
{'WorkOrderID': '2366', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-07-01', 'WorkOrderDescription': 'Field work and related reports.', 'StartDate': '2013-07-01', 'DueDate': '2013-09-20', 'ClosedDate': '2013-09-20', 'Notes': '', 'ProjectName': 'Arizona Geological Survey Geothermal Task 11'}
,
{'WorkOrderID': '2367', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-07-17', 'WorkOrderDescription': 'Hazus runs of model earthquakesNo work was submitted to Cartography for this project.', 'StartDate': '2013-07-17', 'DueDate': '2013-10-31', 'ClosedDate': '2013-10-31', 'Notes': '', 'ProjectName': 'Douglas County Hazard Mitigation'}
,
{'WorkOrderID': '2368', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-09-09', 'WorkOrderDescription': 'This work order was issued after the fact as a place marker for the electronic files', 'StartDate': '2013-09-09', 'DueDate': '2013-09-09', 'ClosedDate': '2013-09-09', 'Notes': '', 'ProjectName': 'Statemap 2013 Proposal'}
,
{'WorkOrderID': '2369', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-08-12', 'WorkOrderDescription': 'This work order is issued in order to track the hours spent preparing the proposal for Statemap 2014', 'StartDate': '2013-08-12', 'DueDate': '2013-09-30', 'ClosedDate': '2013-09-30', 'Notes': '', 'ProjectName': 'Statemap 2014 Proposal'}
,
{'WorkOrderID': '2370', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-08-14', 'WorkOrderDescription': 'Finalization of report which includes survey results written by Subhash.', 'StartDate': '2013-08-14', 'DueDate': '2013-09-03', 'ClosedDate': '2013-09-03', 'Notes': '', 'ProjectName': 'Finalization of Subhash Report'}
,
{'WorkOrderID': '2371', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-08-30', 'WorkOrderDescription': 'Update current factsheet with the 2013 awarded maps and conversions.', 'StartDate': '2013-08-30', 'DueDate': '2013-10-01', 'ClosedDate': '2013-10-01', 'Notes': '', 'ProjectName': 'Factsheet Update incl SM13'}
,
{'WorkOrderID': '2372', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-09-01', 'WorkOrderDescription': 'Webs Edge Production Company making video of NBMG.  Cart staff to assist with planning and technical aspects.', 'StartDate': '2013-09-01', 'DueDate': '2013-09-30', 'ClosedDate': '2013-09-30', 'Notes': '', 'ProjectName': 'Webs Edge Film'}
,
{'WorkOrderID': '2373', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-09-01', 'WorkOrderDescription': 'Collection of on-site drilling samples', 'StartDate': '2013-09-01', 'DueDate': '2014-04-30', 'ClosedDate': '2014-04-30', 'Notes': '', 'ProjectName': 'On-Site Drilling'}
,
{'WorkOrderID': '2374', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'Rework the layout of both the NHMPC and NESC websites to increase efficiency within the categories.', 'StartDate': '2013-10-01', 'DueDate': '2013-12-31', 'ClosedDate': '2013-12-31', 'Notes': '', 'ProjectName': 'Website re-design for NHMPC and NESC'}
,
{'WorkOrderID': '2375', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'Help prepare map as an M-series publication.', 'StartDate': '2013-10-01', 'DueDate': '2013-12-31', 'ClosedDate': '2013-12-31', 'Notes': '', 'ProjectName': 'BR16 Map'}
,
{'WorkOrderID': '2376', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'Design new CREG website', 'StartDate': '2013-10-01', 'DueDate': '2013-11-15', 'ClosedDate': '2013-11-15', 'Notes': '', 'ProjectName': 'CREG Website Re-design'}
,
{'WorkOrderID': '2377', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'For general administration of statemap 2013', 'StartDate': ' including match. Closed on 9/30/2014', 'DueDate': '2013-10-01', 'ClosedDate': '2014-07-31', 'Notes': '2014-07-31', 'ProjectName': '', None: ['SM13 Statemap 2013 Admin Master']}
,
{'WorkOrderID': '2378', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'Prepare Northern Grant Range as a deliverable open file report.', 'StartDate': '2013-10-01', 'DueDate': '2014-07-31', 'ClosedDate': '2014-07-31', 'Notes': '', 'ProjectName': 'SM13 North Grant Range'}
,
{'WorkOrderID': '2379', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'Prepare Mt Rose Quadrangle as an open file Statemap deliverable', 'StartDate': '2013-10-01', 'DueDate': '2014-07-31', 'ClosedDate': '2014-07-31', 'Notes': '', 'ProjectName': 'SM13 Mt Rose Quadrangle'}
,
{'WorkOrderID': '2380', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' USGS Open File OF 94-625', 'DueDate': ' Clark', 'ClosedDate': ' Lincoln County. Closed on 9/30/2014', 'Notes': '2013-10-01', 'ProjectName': '2014-07-31', None: ['2014-07-31', '', 'SM13 Farrier GIS Conversion']}
,
{'WorkOrderID': '2381', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' USGS Bulletin B-1179', 'DueDate': ' Eureka County', 'ClosedDate': ' 1:62', 'Notes': '500 Closed on 9/30/2014', 'ProjectName': '2013-10-01', None: ['2014-07-31', '2014-07-31', '', 'SM13 Frenchie Creek Quadrangle GIS Conversion']}
,
{'WorkOrderID': '2382', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' USGS Map GQ-1393', 'DueDate': ' 1:62500 Closed on 9/30/2014', 'ClosedDate': '2013-10-01', 'Notes': '2014-07-31', 'ProjectName': '2014-07-31', None: ['', 'SM13 Lee Quadrangle GIS Conversion']}
,
{'WorkOrderID': '2383', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' USGS Miscellaneous Geologic Investigations Map I-1136', 'DueDate': ' scale 1:125000 Closed on 9/30/2014', 'ClosedDate': '2013-10-01', 'Notes': '2014-07-31', 'ProjectName': '2014-07-31', None: ['', 'SM13 Ruby Mountains GIS Conversion']}
,
{'WorkOrderID': '2384', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' Elko County', 'DueDate': ' USGS Miscellaneous Geologic Investigations Map I-2629 GIS Conversion', 'ClosedDate': ' Elko County', 'Notes': ' USGS MF-1846 Closed on 9/30/2014', 'ProjectName': '2013-10-01', None: ['2014-07-31', '2014-07-31', '', 'SM13 Spruce Mountain 4 GIS Conversion']}
,
{'WorkOrderID': '2385', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' Clark County', 'DueDate': ' USGS Map GQ-1714 GIS Conversion', 'ClosedDate': ' Elko County', 'Notes': ' USGS Miscellaneous Investigations Series Map I-2082 Closed on 9/30/2014', 'ProjectName': '2013-10-01', None: ['2014-07-31', '2014-07-31', '', 'SM13 Elko Hills GIS Conversion']}
,
{'WorkOrderID': '2386', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' Elko County', 'DueDate': ' NBMG Field Services Map FS4 Closed on 9/30/2014', 'ClosedDate': '2013-10-01', 'Notes': '2014-07-31', 'ProjectName': '2014-07-31', None: ['', 'SM13 Windermere Hills GIS Conversion']}
,
{'WorkOrderID': '2387', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-10-16', 'WorkOrderDescription': 'Information to be provided by John Muntean', 'StartDate': '2013-10-16', 'DueDate': '2013-11-30', 'ClosedDate': '2013-11-30', 'Notes': '', 'ProjectName': 'Sage Grouse Maps'}
,
{'WorkOrderID': '2388', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-10-16', 'WorkOrderDescription': 'Update active mines and energy producers map', 'StartDate': ' but not as a peer reviewed map to save on costs and to expedite the release.  Previous version:  M170', 'DueDate': '2013-10-16', 'ClosedDate': '2014-03-14', 'Notes': '2014-03-14', 'ProjectName': '', None: ['Active Mines Map Update']}
,
{'WorkOrderID': '2389', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2013-10-29', 'WorkOrderDescription': 'Typeset and update layout', 'StartDate': ' pre-press', 'DueDate': ' print with vendor.  Print release #127444114Billed DOM for printing on invoice #24953', 'ClosedDate': '2013-10-29', 'Notes': '2013-11-30', 'ProjectName': '2013-11-30', None: ['', 'Major Mines 2012']}
,
{'WorkOrderID': '2390', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-11-19', 'WorkOrderDescription': 'Assist UNR Cooperative Extension with radon maps and images for January presentations during Radon Action Month.', 'StartDate': '2013-11-19', 'DueDate': '2013-12-20', 'ClosedDate': '2013-12-20', 'Notes': '', 'ProjectName': 'Radon Maps'}
,
{'WorkOrderID': '2391', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2013-12-10', 'WorkOrderDescription': 'Typeset/prepare report for Open File Report publication', 'StartDate': '2013-12-10', 'DueDate': '2014-02-28', 'ClosedDate': '2014-02-28', 'Notes': '', 'ProjectName': 'Eglington Fault OFR'}
,
{'WorkOrderID': '2392', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2013-12-10', 'WorkOrderDescription': 'Modify existing figure and redraft one that was done by someone else (no original files).', 'StartDate': '2013-12-10', 'DueDate': '2014-03-15', 'ClosedDate': '2014-03-15', 'Notes': '', 'ProjectName': 'Earthquake Figures'}
,
{'WorkOrderID': '2393', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2014-01-01', 'WorkOrderDescription': 'This work order is issued to track all work needed to maintain the NBMG web page', 'StartDate': '2014-01-01', 'DueDate': '2014-06-30', 'ClosedDate': '2014-06-30', 'Notes': '', 'ProjectName': 'Web Maintenance 1st Half 2014'}
,
{'WorkOrderID': '2394', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2014-01-09', 'WorkOrderDescription': 'Organize chapters', 'StartDate': ' typeset', 'DueDate': ' layout', 'ClosedDate': ' maintain consistency', 'Notes': 'then post to the web.', 'ProjectName': '2014-01-09', None: ['2014-02-13', '2014-02-13', '', 'Mineral Industry 2012']}
,
{'WorkOrderID': '2395', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2014-03-26', 'WorkOrderDescription': 'Prepare South Eureka open file for review and M-series release. Partial funding by GSN', 'StartDate': '2014-03-26', 'DueDate': '2014-08-29', 'ClosedDate': '2014-08-29', 'Notes': '', 'ProjectName': 'South Eureka M-Series'}
,
{'WorkOrderID': '2396', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2014-04-10', 'WorkOrderDescription': 'Help student prepare map for open-file release. Map released as OF 14-4.', 'StartDate': '2014-04-10', 'DueDate': '2014-05-13', 'ClosedDate': '2014-05-13', 'Notes': '', 'ProjectName': 'Terrill Mountains (Chad Carlson)'}
,
{'WorkOrderID': '2397', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2014-05-09', 'WorkOrderDescription': 'Prepare map for Statemap deliverable.  Assist with GIS and Cartography as needed.  Grant account number to be determined at a later date.', 'StartDate': '2014-05-09', 'DueDate': '2015-06-30', 'ClosedDate': '2015-06-30', 'Notes': '', 'ProjectName': 'SM14 Heelfly Creek'}
,
{'WorkOrderID': '2398', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2012-08-02', 'WorkOrderDescription': 'Create generalized geology map (even more simplified than the page-size map) for colleague to use for mosaic artwork for geology meeting.  This work order was created for archival purposes.', 'StartDate': '2012-08-02', 'DueDate': '2012-10-02', 'ClosedDate': '2012-10-02', 'Notes': '', 'ProjectName': 'Generalize Geology Map-4-Mosaic'}
,
{'WorkOrderID': '2399', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2014-01-24', 'WorkOrderDescription': 'Create brochure for CREG using information John provides.  Rack Card format (4 in x 9 in)', 'StartDate': '2014-01-24', 'DueDate': '2014-02-28', 'ClosedDate': '2014-02-28', 'Notes': '', 'ProjectName': 'CREG Brochure'}
,
{'WorkOrderID': '2400', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2014-04-22', 'WorkOrderDescription': 'Develop and publish a 2015 Bureau Calendar for retail sale. Printing costs - $3868.90', 'StartDate': '2014-04-22', 'DueDate': '2014-09-15', 'ClosedDate': '2014-09-15', 'Notes': '', 'ProjectName': 'Calendar', None: [' NBMG', ' 2015']}
,
{'WorkOrderID': '2401', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2013-10-01', 'WorkOrderDescription': 'Support for ESW 2013.  This work order was issued for tracking purposes only.  Work complete.', 'StartDate': '2013-10-01', 'DueDate': '2013-10-11', 'ClosedDate': '2013-10-11', 'Notes': '', 'ProjectName': 'Earth Science Week 2013'}
,
{'WorkOrderID': '2402', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2013-10-17', 'WorkOrderDescription': 'Design a Staff Directory sign for the Mechanical Engineering Department', 'StartDate': '2013-10-17', 'DueDate': '2013-12-31', 'ClosedDate': '2013-12-31', 'Notes': '', 'ProjectName': 'Directory Sign for Mechanical Engineering Department'}
,
{'WorkOrderID': '2403', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2014-06-06', 'WorkOrderDescription': 'Nevada Mining Association Education Committee field trip.  Geo- and Eco-Mapping around DRI.  Cover page and post to web (web maintenance).', 'StartDate': '2014-06-06', 'DueDate': '2014-06-06', 'ClosedDate': '2014-06-06', 'Notes': '', 'ProjectName': 'E-55 - NBMG Educational Series'}
,
{'WorkOrderID': '2404', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2014-06-11', 'WorkOrderDescription': 'Update .pdf file with new scans of pages with updated photos to improve the photo quality.  There is no billing for this work; all work was conducted at the publication sales office.  This work order was issued for archival need only.', 'StartDate': '2014-06-11', 'DueDate': '2014-06-11', 'ClosedDate': '2014-06-11', 'Notes': '', 'ProjectName': 'B62 Geology & Mineral Deposits of Clark County'}
,
{'WorkOrderID': '2405', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2014-07-01', 'WorkOrderDescription': 'This work order is issued to track all work required to maintain the NBMG web page.', 'StartDate': '2014-07-01', 'DueDate': '2014-12-31', 'ClosedDate': '2014-12-31', 'Notes': '', 'ProjectName': 'Web Maintenance 2nd Half 2014'}
,
{'WorkOrderID': '2406', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2014-07-28', 'WorkOrderDescription': 'Typeset and update layout', 'StartDate': ' pre-press', 'DueDate': ' print with vendor.', 'ClosedDate': '2014-07-28', 'Notes': '2014-10-31', 'ProjectName': '2014-10-31', None: ['', 'Major Mines 2013']}
,
{'WorkOrderID': '2407', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2014-07-01', 'WorkOrderDescription': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'StartDate': '2014-07-01', 'DueDate': '2014-12-31', 'ClosedDate': '2014-12-31', 'Notes': '', 'ProjectName': 'Prelim & Misc 2nd Half 2014'}
,
{'WorkOrderID': '2408', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2014-07-24', 'WorkOrderDescription': 'Compile information from faculty and staff evaluations from 2012 and 2013 to aid the director with his report.', 'StartDate': '2014-07-24', 'DueDate': '2014-12-31', 'ClosedDate': '2014-12-31', 'Notes': '', 'ProjectName': 'Biennial Report 2014'}
,
{'WorkOrderID': '2409', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2014-08-01', 'WorkOrderDescription': 'Produce poster for GRC conference.', 'StartDate': '2014-08-01', 'DueDate': '2014-09-30', 'ClosedDate': '2014-09-30', 'Notes': '', 'ProjectName': 'GRC 2014 Poster'}
,
{'WorkOrderID': '2410', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2014-08-04', 'WorkOrderDescription': 'Prepare an index map of 7.5 minute quads in Carson City', 'StartDate': ' Douglas', 'DueDate': " Lyon and Storey counties for Mary's upcoming geographic names book.", 'ClosedDate': '2014-08-04', 'Notes': '2014-08-11', 'ProjectName': '2014-08-11', None: ['when work is complete', ' invoice Mary Anasari direct. Mary Ansari billed directly on Inv 26115; paid on 9/11/2014.', 'Quad Index Map']}
,
{'WorkOrderID': '2411', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2014-08-13', 'WorkOrderDescription': 'Update Statemap factsheet with 2014 awarded maps.  Note:  this is a non-funded work order.', 'StartDate': '2014-08-13', 'DueDate': '2014-09-30', 'ClosedDate': '2014-09-30', 'Notes': '', 'ProjectName': 'Statemap 2014 Factsheet'}
,
{'WorkOrderID': '2412', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2014-08-20', 'WorkOrderDescription': 'Assist Jim with GIS for creating figures/produce figures', 'StartDate': '2014-08-20', 'DueDate': '2014-08-29', 'ClosedDate': '2014-08-29', 'Notes': '', 'ProjectName': 'Salt Paper'}
,
{'WorkOrderID': '2413', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2014-08-20', 'WorkOrderDescription': 'Provide support for 2015 Statemap proposal preparation.  Prepare figures and assist geologist with figures.', 'StartDate': '2014-08-20', 'DueDate': '2014-10-31', 'ClosedDate': '2014-10-31', 'Notes': '', 'ProjectName': 'Statemap 2015 Proposal Support'}
,
{'WorkOrderID': '2414', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2014-09-02', 'WorkOrderDescription': 'Prepare geologic ap for statemap 2014 deliverable.  Assist with GIS support as needed.', 'StartDate': '2014-09-02', 'DueDate': '2015-06-30', 'ClosedDate': '2015-06-30', 'Notes': '', 'ProjectName': 'SM14 Pequop Summit'}
,
{'WorkOrderID': '2415', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2014-09-18', 'WorkOrderDescription': 'Prepare trip log ES E-56; prepare sign-up files; notices on web.', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Publication E-56 (Carson Rocks!)', 'EmployeeID': '2014-09-18', 'CustomerID': '2014-10-01', 'PriorityID': '2014-10-01', 'StatusID': '', 'SubmittedDate': 'Earth Science Week 2014', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2416', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2014-10-17', 'WorkOrderDescription': 'Produce well diagrams and other graphics/images for Lisa.', 'StartDate': '2014-10-17', 'DueDate': '2014-10-17', 'ClosedDate': '2014-10-17', 'Notes': 'Work was completed and billed in March.  This work order is issued for archival purposes only.', 'ProjectName': 'Well Diagrams'}
,
{'WorkOrderID': '2417', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2014-09-30', 'WorkOrderDescription': 'Prepare map', 'StartDate': ' written by outside authors from Wyoming', 'DueDate': ' provided by Art Snoke of the Wyoming Geographic Survey for M-series publication. GSN partially funded this project; provided $1250', 'ClosedDate': '2014-09-30', 'Notes': '2015-06-30', 'ProjectName': '2015-06-30', None: ['', 'Welcome Quad']}
,
{'WorkOrderID': '2418', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2014-10-01', 'WorkOrderDescription': 'Help finalize new shopping cart launch.', 'StartDate': '2014-10-01', 'DueDate': '2014-12-31', 'ClosedDate': '2014-12-31', 'Notes': '', 'ProjectName': 'Shopping Cart Support'}
,
{'WorkOrderID': '2419', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2014-10-06', 'WorkOrderDescription': 'Compose descriptions into promotional flyer', 'StartDate': '2014-10-06', 'DueDate': '2014-10-20', 'ClosedDate': '2014-10-20', 'Notes': '', 'ProjectName': 'NBMG Open House Support'}
,
{'WorkOrderID': '2420', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2014-10-16', 'WorkOrderDescription': 'Add updates', 'StartDate': ' minor layout revisions and release as a 2nd edition', 'DueDate': ' per Jim.  Assigned to Rachel.', 'ClosedDate': '2014-10-16', 'Notes': '2014-10-31', 'ProjectName': '2014-10-31', None: ['', 'Emerson Pass Update']}
,
{'WorkOrderID': '2421', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2014-10-16', 'WorkOrderDescription': 'Update CREG website with edits provided by John Muntean.  Assigned to Rachel.', 'StartDate': '2014-10-16', 'DueDate': '2014-10-31', 'ClosedDate': '2014-10-31', 'Notes': '', 'ProjectName': 'CREG Website Update'}
,
{'WorkOrderID': '2422', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2014-10-10', 'WorkOrderDescription': 'Create a National Geologic Database of Nevada mapping.  Work currently assigned to Rachel Micander and Jennifer Vlcan', 'StartDate': '2014-10-10', 'DueDate': '2015-03-31', 'ClosedDate': '2015-03-31', 'Notes': '', 'ProjectName': 'NGMDB National Geologic Map Database Project'}
,
{'WorkOrderID': '2423', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2014-11-04', 'WorkOrderDescription': "Prepare thesis map for open file publication.  this map is on the RBM open pit gold deposit at the Bald Mountain Mine in White Pine county.  It's by Dan Pace and is a plate in his thesis.", 'StartDate': '2014-11-04', 'DueDate': '2014-12-31', 'ClosedDate': '2014-12-31', 'Notes': '', 'ProjectName': 'Bald Mountain Mine'}
,
{'WorkOrderID': '2424', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2014-11-12', 'WorkOrderDescription': 'Prepare map for 2014 Statemap deliverable and open-file publication.', 'StartDate': '2014-11-12', 'DueDate': '2015-06-30', 'ClosedDate': '2015-06-30', 'Notes': '', 'ProjectName': 'SM14 Sloan'}
,
{'WorkOrderID': '2425', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2014-12-15', 'WorkOrderDescription': 'Prepare for release as an open-file publication.', 'StartDate': '2014-12-15', 'DueDate': '2015-03-31', 'ClosedDate': '2015-03-31', 'Notes': '', 'ProjectName': 'Pinyon Range'}
,
{'WorkOrderID': '2426', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2014-12-15', 'WorkOrderDescription': "Prepare Corina Forson's theses map for open-file publication; assist with GIS as needed.", 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Work to be done by Katie Ryan and Rachel Micander.', 'EmployeeID': '2014-12-15', 'CustomerID': '2015-02-28', 'PriorityID': '2015-02-28', 'StatusID': '', 'SubmittedDate': 'Seven Troughs', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2427', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2014-12-23', 'WorkOrderDescription': 'Fix maps on the NBMG website that are missing Topos.  Locate Topo plates in archiveand scan or download; use Global Mapper to add into geologic maps.  Work to be performed by Jack and Rachel.', 'StartDate': '2014-12-23', 'DueDate': '2015-06-30', 'ClosedDate': '2015-06-30', 'Notes': '', 'ProjectName': 'Geologic Map TopoBases'}
,
{'WorkOrderID': '2428', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2014-12-23', 'WorkOrderDescription': 'This work order is issued to track all work required to maintain the NBMG web page.', 'StartDate': '2014-12-23', 'DueDate': '2015-06-30', 'ClosedDate': '2015-06-30', 'Notes': '', 'ProjectName': 'Web Maintenance 1st Half 2015'}
,
{'WorkOrderID': '2429', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' USGS Open File OF82-438', 'DueDate': ' Clark County', 'ClosedDate': ' 1:24', 'Notes': '000.  Work to be done by available cartographers.', 'ProjectName': '2015-01-02', None: ['2015-06-30', '2015-06-30', '', 'SM14 Black Hills']}
,
{'WorkOrderID': '2430', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' USGS MF-1514', 'DueDate': ' Clark County', 'ClosedDate': ' 1:24', 'Notes': '000.  Work to be done by available cartographers.', 'ProjectName': '2015-01-02', None: ['2015-06-30', '2015-06-30', '', 'SM14 Goodsprings District Conversion']}
,
{'WorkOrderID': '2431', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' USGS I1197', 'DueDate': ' Clark County', 'ClosedDate': ' 1:24', 'Notes': '000', 'ProjectName': '2015-01-02', None: ['2015-06-30', '2015-06-30', '', 'SM14 Mercury Conversion']}
,
{'WorkOrderID': '2432', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion USGS I2086', 'StartDate': ' Clark County', 'DueDate': ' 1:24', 'ClosedDate': '000', 'Notes': '2015-01-02', 'ProjectName': '2015-06-30', None: ['2015-06-30', '', 'SM14 Southern Sheep Range']}
,
{'WorkOrderID': '2433', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-01-07', 'WorkOrderDescription': 'Provide GIS/Cartographic support as needed for final deliverables/maps/plates.  Initially', 'StartDate': ' set-up catalog of existing maps and data for authors and provide GIS assistance as needed.', 'DueDate': '2015-01-07', 'ClosedDate': '2015-09-30', 'Notes': '2015-10-06', 'ProjectName': '', None: ['Geothermal Play Fairways']}
,
{'WorkOrderID': '2434', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-01-01', 'WorkOrderDescription': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'StartDate': '2015-01-01', 'DueDate': '2015-06-30', 'ClosedDate': '2015-06-30', 'Notes': '', 'ProjectName': 'Prelim & Misc 1st Half 2015'}
,
{'WorkOrderID': '2435', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-03-01', 'WorkOrderDescription': 'All GSN Sumposium related work including design of NBMG pop-up display', 'StartDate': ' time manning booth', 'DueDate': ' etc.', 'ClosedDate': '2015-03-01', 'Notes': '2015-05-31', 'ProjectName': '2015-05-31', None: ['', 'GSN Symposium Booth Materials and Support']}
,
{'WorkOrderID': '2436', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-03-11', 'WorkOrderDescription': 'Organize chapters', 'StartDate': ' typeset', 'DueDate': ' layout', 'ClosedDate': ' maintain consistency; then post to web', 'Notes': '2015-03-11', 'ProjectName': '2015-06-30', None: ['2015-06-30', '', 'Mineral Industry 2013']}
,
{'WorkOrderID': '2437', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-01-22', 'WorkOrderDescription': 'Update Fallon Forge Maps.  Work to be performed by Rachel and Jennifer', 'StartDate': '2015-01-22', 'DueDate': '2015-02-27', 'ClosedDate': '2015-02-27', 'Notes': '', 'ProjectName': 'Geothermal - Forge'}
,
{'WorkOrderID': '2438', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-04-08', 'WorkOrderDescription': 'Design a pop-up display for use at GSN and other conferences.  Co-ordinate with Marcom', 'StartDate': ' print company', 'DueDate': ' etc.', 'ClosedDate': '2015-04-08', 'Notes': '2015-05-17', 'ProjectName': '2015-05-17', None: ['', 'CREG Pop-up Display']}
,
{'WorkOrderID': '2439', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-05-01', 'WorkOrderDescription': "Prepare basemap with new Global Mapper procedure to include in Corina's deliverable geologic map of the Geysers", 'StartDate': 'CA.', 'DueDate': '2015-05-01', 'ClosedDate': '2015-06-04', 'Notes': '2015-06-04', 'ProjectName': '', None: ['Basemap/Hillshade for The Geysers Map']}
,
{'WorkOrderID': '2440', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-05-01', 'WorkOrderDescription': 'Typeset', 'StartDate': ' compose', 'DueDate': ' layout and publication of the Bureau 2016 Geologic Calendar ', 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Printing cost:  $3779.27 for 900 copies.', 'EmployeeID': '2015-05-01', 'CustomerID': '2015-09-30', 'PriorityID': '2015-09-30', 'StatusID': '', 'SubmittedDate': 'Calendar', 'WorkOrderDescription': ' NBMG 2016', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2441', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-05-27', 'WorkOrderDescription': 'Produce series of maps. charts; provide GIS assistance for land calculations. Work to be done by Jennifer and Rachel.', 'StartDate': '2015-05-27', 'DueDate': '2015-06-19', 'ClosedDate': '2015-06-19', 'Notes': '', 'ProjectName': 'Northern NV Sage Grouse Maps'}
,
{'WorkOrderID': '2442', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-01-13', 'WorkOrderDescription': 'Release analytical data as an open-file.  Data accompanies GSN publication.  This work order is issued for Archival Purposes.', 'StartDate': '2015-01-13', 'DueDate': '2015-01-14', 'ClosedDate': '2015-01-14', 'Notes': '', 'ProjectName': 'GSN 2015 Symposium Volume Analytical Data'}
,
{'WorkOrderID': '2443', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-06-10', 'WorkOrderDescription': 'Publication of report and release of GIS data.  See scope of work for details.', 'StartDate': '2015-06-10', 'DueDate': '2016-06-30', 'ClosedDate': '2016-04-17', 'Notes': '', 'ProjectName': 'SNWA Eastern Nevada Report'}
,
{'WorkOrderID': '2444', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-07-01', 'WorkOrderDescription': 'Fault and Seismicity maps for 1 x 2 degree quads; possibly release as open-files.', 'StartDate': '2015-07-01', 'DueDate': '2015-08-24', 'ClosedDate': '2015-08-24', 'Notes': '', 'ProjectName': 'EQ and Volcanic Hazards in N NV 1 x 2 degree Quads'}
,
{'WorkOrderID': '2445', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-07-01', 'WorkOrderDescription': 'This work order is issued to track all work required to maintain the NBMG web page.', 'StartDate': '2015-07-01', 'DueDate': '2015-12-31', 'ClosedDate': '2015-12-31', 'Notes': '', 'ProjectName': 'Web Maintenance 2nd Half 2015'}
,
{'WorkOrderID': '2446', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-07-01', 'WorkOrderDescription': 'This work order is issued tp track work performed without funding and that does not require a separate work order.', 'StartDate': '2015-07-01', 'DueDate': '2015-12-31', 'ClosedDate': '2015-12-31', 'Notes': '', 'ProjectName': 'Prelim & Misc 2nd Half 2015'}
,
{'WorkOrderID': '2447', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' unpublished map of Boulder City SE. Work to be done by available cartographers.', 'DueDate': '2015-01-02', 'ClosedDate': '2015-09-30', 'Notes': '2015-09-30', 'ProjectName': '', None: ['SM14 Boulder City SE unpub (GIS)']}
,
{'WorkOrderID': '2448', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion unpublished map of Virgin Peak.  Work to be done by available Cartographers.', 'StartDate': '2015-01-02', 'DueDate': '2015-09-30', 'ClosedDate': '2015-09-30', 'Notes': '', 'ProjectName': 'SM14 Virgin Peak unpub (GIS)'}
,
{'WorkOrderID': '2449', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' updated USGS OF93-716', 'DueDate': ' Clark County.  Work to be done by available Cartogaphers.', 'ClosedDate': '2015-01-02', 'Notes': '2015-09-30', 'ProjectName': '2015-09-30', None: ['', 'SM14 Whitney Pocket Conversion']}
,
{'WorkOrderID': '2450', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-01-02', 'WorkOrderDescription': 'GIS Conversion', 'StartDate': ' NBMG OF99-9.  Work to be done by available Cartographers.', 'DueDate': '2015-01-02', 'ClosedDate': '2015-09-30', 'Notes': '2015-09-30', 'ProjectName': '', None: ['SM14 Emigrant Pass Conversion']}
,
{'WorkOrderID': '2451', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-07-14', 'WorkOrderDescription': 'Prepare for Open-File Release ', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Became a Statemap deliverable in July', 'EmployeeID': ' 2016.', 'CustomerID': '2015-07-14', 'PriorityID': '2015-12-31', 'StatusID': '2015-12-31', 'SubmittedDate': '', 'WorkOrderDescription': 'Herder Creek', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2452', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-07-14', 'WorkOrderDescription': 'Update maps-4-packets and displays.  Prepare KMZ file of sensitive data for Cooperative Extension use only.', 'StartDate': '2015-07-14', 'DueDate': '2015-09-30', 'ClosedDate': '2015-09-30', 'Notes': '', 'ProjectName': 'Radon Maps'}
,
{'WorkOrderID': '2453', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-07-01', 'WorkOrderDescription': 'This work orderis to track the time spent by the Crtogrphy department at meeting', 'StartDate': ' conferences', 'DueDate': ' classes', 'ClosedDate': ' etc.', 'Notes': '2015-07-01', 'ProjectName': '2016-06-30', None: ['2016-06-30', '', 'Meeting and Conference Attendance']}
,
{'WorkOrderID': '2454', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-07-14', 'WorkOrderDescription': 'Edits to bring to peer review; then edits/finalization for M-Series release.  Work to be performed by Katie Ryan and Rachel Wearne. ', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Closed Incomplete.  Map has been on hold since August', 'EmployeeID': ' 2015.', 'CustomerID': '2015-07-14', 'PriorityID': '2015-12-31', 'StatusID': '2015-12-31', 'SubmittedDate': '', 'WorkOrderDescription': 'Corn Creek Springs NW', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2455', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-07-17', 'WorkOrderDescription': 'compile flood resources and data', 'StartDate': ' develop a flash flood database', 'DueDate': ' and other related work', 'ClosedDate': '2015-07-17', 'Notes': '2016-07-17', 'ProjectName': '2016-05-08', None: ['', 'Flood Research']}
,
{'WorkOrderID': '2456', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-07-21', 'WorkOrderDescription': 'ESW Field Trip October 17 and 18; Fire and Ice - Geology of the Mount Rose Quadrangle', 'StartDate': ' Lake Tahoe', 'DueDate': ' and the Carson Range.', 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare Trip log', 'EmployeeID': ' E-Signup files', 'CustomerID': ' notices on web', 'PriorityID': '2015-07-21', 'StatusID': '2015-10-17', 'SubmittedDate': '2015-10-17', 'WorkOrderDescription': '', 'StartDate': 'Earth Science Week 2015', 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2457', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-07-31', 'WorkOrderDescription': 'Update the locations of potential URM buildings into the Hazus database and use Hazus to calculate the reduction in risk that may be achieved by running Hazus with and without them.', 'StartDate': '2015-07-31', 'DueDate': '2016-11-19', 'ClosedDate': '2016-11-19', 'Notes': '', 'ProjectName': 'URM Data Integration into HAZUS'}
,
{'WorkOrderID': '2458', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-07-31', 'WorkOrderDescription': 'Update existing GIS layers and add additional layers to MyPlan', 'StartDate': " including earthquake hazards from potential URM's.  A layer to be added that depicts the historical ground ruptures in Nevada.", 'DueDate': '2015-07-31', 'ClosedDate': '2016-11-19', 'Notes': '2016-11-19', 'ProjectName': '', None: ['Update MyPlan Website']}
,
{'WorkOrderID': '2459', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-07-31', 'WorkOrderDescription': 'The execution Hazus in support of state and local emergency response exercises', 'StartDate': ' state and loal mitigation prioritization and planning', 'DueDate': ' and public awareness campaigns.  A specific project to be the Hazus representation of the impacts of the largest histori', 'ClosedDate': '2015-07-31', 'Notes': '2016-11-19', 'ProjectName': '2016-11-19', None: ['', 'Hazus Runs and Integration']}
,
{'WorkOrderID': '2460', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-08-01', 'WorkOrderDescription': 'Statemap proposal supoort (figures', 'StartDate': ' conversion lists', 'DueDate': ' meetings', 'ClosedDate': ' advisory board/SMAC meeting', 'Notes': ' etc.', 'ProjectName': '2015-08-01', None: ['2015-11-01', '2015-11-01', '', 'Statemap 2016 Proposal Support']}
,
{'WorkOrderID': '2461', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-08-01', 'WorkOrderDescription': 'Prepare geologic map for Statemap deliverable and open file. ', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'OF 15-9', 'EmployeeID': '2015-08-01', 'CustomerID': '2016-08-01', 'PriorityID': '2015-09-30', 'StatusID': '', 'SubmittedDate': 'SM14 Kinsley Mountains', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2462', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-08-01', 'WorkOrderDescription': 'General map administrative and detail work to ensure accuracy of the Statemap project.  Times may or may not be billed. ', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '60 hours were transferred and billed.', 'EmployeeID': '2015-08-01', 'CustomerID': '2015-09-30', 'PriorityID': '2015-09-30', 'StatusID': '', 'SubmittedDate': 'SM14 Master', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2463', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-08-01', 'WorkOrderDescription': 'This work order is issued to track salaries', 'StartDate': ' travel', 'DueDate': ' and indirect costs for the administration', 'ClosedDate': ' planning', 'Notes': ' and execution of travel arrangements and reimbursements for NHMPC and subcommittee meetings.', 'ProjectName': '2015-08-01', None: ['2016-12-31', '2017-04-30', '', 'NDEM Mitigation Support']}
,
{'WorkOrderID': '2464', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-08-20', 'WorkOrderDescription': 'Typeset and update layout', 'StartDate': ' pre-press', 'DueDate': ' print with vendor.  Mike Visher at NDom to be invoiced for printing. ', 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Allegra Invoice 115717 paid; NDOM Inv#116INV28598 emailed to Mike Visher.', 'EmployeeID': '2015-08-20', 'CustomerID': '2015-10-31', 'PriorityID': '2015-10-31', 'StatusID': '', 'SubmittedDate': 'Major Mines 2014', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2465', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-08-27', 'WorkOrderDescription': "Develop an earthquake section of the Carson City Hazard Mitigation Plan by researching and presenting major historical eq's", 'StartDate': ' analyzing major faults that pose a threat to the city and then summarizing this information in order to develop an eq vulnerabilit', 'DueDate': '2015-08-27', 'ClosedDate': '2015-12-31', 'Notes': '2015-12-31', 'ProjectName': '', None: ['EQ/Carson City Haz Mitigation']}
,
{'WorkOrderID': '2466', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-09-01', 'WorkOrderDescription': 'Assist Geodosy with organization / maintenance of station permits.  Coordinate with land owners', 'StartDate': ' etc on status of permits.  Organize information into spreadsheet or database using GIS and Google Earth so Geodosy can derive specific information as needed. ', 'DueDate': '2015-09-01', 'ClosedDate': '2018-12-31', 'Notes': '2019-02-03', 'ProjectName': '', None: ['MAGNET Permitting']}
,
{'WorkOrderID': '2467', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-09-30', 'WorkOrderDescription': 'Format final layout to publish as an open file report', 'StartDate': '2015-09-30', 'DueDate': '2015-11-30', 'ClosedDate': '2015-11-30', 'Notes': '', 'ProjectName': 'White Pine County Geothermal Resource Potential'}
,
{'WorkOrderID': '2468', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-10-01', 'WorkOrderDescription': 'Assist with formatting and rough editing of 1915 Earthquake Centennial Guidebook and other related support.  Possible publication as an open-file report. ', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Publication Educational Series E-58', 'EmployeeID': '2015-10-01', 'CustomerID': '2015-10-31', 'PriorityID': '2015-10-31', 'StatusID': '', 'SubmittedDate': '1915 Earthquake Guidebook / Support', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2469', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-10-06', 'WorkOrderDescription': 'Assist with materials and other suppor for the 2015 open house.', 'StartDate': '2015-10-06', 'DueDate': '2015-10-29', 'ClosedDate': '2015-10-29', 'Notes': '', 'ProjectName': '2015 Open House Support'}
,
{'WorkOrderID': '2470', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-10-06', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for Statemap deliverable and Open File Report. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Statemap deliverable changed to Herder Creek due to injury to the principal geologist.', 'EmployeeID': '2015-10-06', 'CustomerID': '2016-07-08', 'PriorityID': '2016-07-08', 'StatusID': '', 'SubmittedDate': 'Statemap 2015 Independence Valley NE', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2471', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-11-12', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Work Order is issued for figures that are included in the Statemap 2017 proposal.  This also includes revamp/reorganization/improvement in advance.', 'EmployeeID': '2015-11-12', 'CustomerID': '2016-10-31', 'PriorityID': '2016-10-31', 'StatusID': '', 'SubmittedDate': 'Proposal Figures for SM17', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2472', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2015-12-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Review drafts provided by David Davis and John Muntean; edit layout; organize pages and sections; print qty (to be provided at a later date) for hard copy distribution; post on web.', 'EmployeeID': '2015-12-10', 'CustomerID': '2016-03-01', 'PriorityID': '2016-03-01', 'StatusID': '', 'SubmittedDate': 'MI 2014', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2473', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2012-07-01', 'WorkOrderDescription': 'Eureka Paper already complete.  This work order issued in order to archive files.', 'StartDate': '2012-07-01', 'DueDate': '2013-06-30', 'ClosedDate': '2013-06-30', 'Notes': '', 'ProjectName': 'Eureka Paper'}
,
{'WorkOrderID': '2474', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2015-06-15', 'WorkOrderDescription': 'Pull together existing maps (GIS data and /or georeferenced images) into one mxd/print to present to NPS.', 'StartDate': '2015-06-15', 'DueDate': '2015-07-01', 'ClosedDate': '2015-07-01', 'Notes': 'No work done on this project.', 'ProjectName': 'Tule Springs NM'}
,
{'WorkOrderID': '2475', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2015-12-18', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare Bateman Spring OF2000-08 for M-Series release.', 'EmployeeID': '2015-12-18', 'CustomerID': '2016-12-30', 'PriorityID': '2017-10-30', 'StatusID': '', 'SubmittedDate': 'Bateman Spring - M-Series', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2476', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2015-12-18', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare files for Open File Release of analytical data accompanying a GSN article.', 'EmployeeID': '2015-12-18', 'CustomerID': '2016-01-31', 'PriorityID': '2016-01-31', 'StatusID': '', 'SubmittedDate': 'Goldbanks Open File Report', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2477', 'EmployeeID': '105600', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track all work required to maintain the NBMG web page.', 'EmployeeID': '2016-01-01', 'CustomerID': '2016-06-30', 'PriorityID': '2016-06-30', 'StatusID': '', 'SubmittedDate': 'Web Maintenance 1st Half 2016', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2478', 'EmployeeID': '105600', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'EmployeeID': '2016-01-01', 'CustomerID': '2016-06-30', 'PriorityID': '2016-06-30', 'StatusID': '', 'SubmittedDate': 'Prelim and Misc 1st Half 2016', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2479', 'EmployeeID': '105600', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': 'This work order is issued to track general administrative work related to Statemap.', 'StartDate': '2016-01-01', 'DueDate': '2016-07-08', 'ClosedDate': '2016-07-08', 'Notes': 'These hours were not billed - they were applied as match.', 'ProjectName': 'Statemap 2015 Master'}
,
{'WorkOrderID': '2480', 'EmployeeID': '105600', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2015-10-15', 'WorkOrderDescription': 'SM15 Welcome GIS Conversion', 'StartDate': '2016-01-01', 'DueDate': '2016-01-13', 'ClosedDate': '2016-07-08', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2481', 'EmployeeID': '105600', 'CustomerID': '4002', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Digitally convert Thesis Map by Hurlow (1987) of the Southwestern East Humboldt Range.', 'EmployeeID': '2016-01-01', 'CustomerID': '2016-07-08', 'PriorityID': '2016-07-08', 'StatusID': '', 'SubmittedDate': 'SM 15  Southwestern East Humboldt Range GIS Conversion', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2482', 'EmployeeID': '105600', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Digitally convert Thesis Map by Lush (1982) of the Northern East Humboldt Range.', 'EmployeeID': '2016-01-01', 'CustomerID': '2016-07-08', 'PriorityID': '2016-07-08', 'StatusID': '', 'SubmittedDate': 'SM 15 Northern East Humboldt Range GIS Conversion', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2483', 'EmployeeID': '105600', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Digitally convert Open NBMG publication OF 13-06 Valley of Fire East quadrangle.', 'EmployeeID': '2016-01-01', 'CustomerID': '2016-07-08', 'PriorityID': '2016-07-08', 'StatusID': '', 'SubmittedDate': 'SM 15 Valley of Fire East GIS Conversion', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2484', 'EmployeeID': '105600', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Digitally convert NBMG publication OF 98-7 West Half of the Fourth of July quadrangle.', 'EmployeeID': '2016-01-01', 'CustomerID': '2016-07-08', 'PriorityID': '2016-07-08', 'StatusID': '', 'SubmittedDate': 'SM 15 West Half of the Fourth of July GIS Conversion', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2485', 'EmployeeID': '105600', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-14', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Produce Churchill County Q-Fault', 'EmployeeID': ' Earthquake and Volcano map and provide other GUS/graphic support as required.', 'CustomerID': '2016-01-14', 'PriorityID': '2016-06-30', 'StatusID': '2016-06-30', 'SubmittedDate': '', 'WorkOrderDescription': 'Churchill County Hazard Mitigation', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2486', 'EmployeeID': '105600', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-01-14', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Provide service as needed to complete project (2D seismic line/cross section work', 'EmployeeID': ' etc.).  Work primarily to be done by Rachel.', 'CustomerID': '2016-01-14', 'PriorityID': '2019-10-01', 'StatusID': '2019-11-02', 'SubmittedDate': '', 'WorkOrderDescription': 'Fallon Forge', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2487', 'EmployeeID': '105600', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-01-14', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for open-file release.  Generate cross section profiles and bring all components of map to open file level cartographically. ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Open File Report 16-1', 'EmployeeID': '2016-01-14', 'CustomerID': '2016-06-30', 'PriorityID': '2016-06-30', 'StatusID': '', 'SubmittedDate': 'McDermitt Caldera', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2488', 'EmployeeID': '105600', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-01-22', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare for grant deliverable and Open File release.', 'EmployeeID': '2016-01-22', 'CustomerID': '2016-07-08', 'PriorityID': '2016-07-08', 'StatusID': '', 'SubmittedDate': 'Statemap 2015 Boulder City', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2489', 'EmployeeID': '105600', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-01-28', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for Statemap deliverable and open-file release.', 'EmployeeID': '2016-01-28', 'CustomerID': '2016-07-08', 'PriorityID': '2016-07-08', 'StatusID': '', 'SubmittedDate': 'Statemap 2015 Mount Rose NW South Half', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2490', 'EmployeeID': '105600', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-01-28', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Assist with figures for proposal and any other support.', 'EmployeeID': '2016-01-28', 'CustomerID': '2016-02-18', 'PriorityID': '2016-02-18', 'StatusID': '', 'SubmittedDate': 'Las Vegas Proposal', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2491', 'EmployeeID': '105600', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-01-28', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare Sue Beard map for peer-review and M-series release', 'EmployeeID': '2016-01-28', 'CustomerID': '2016-03-02', 'PriorityID': '2019-03-06', 'StatusID': '', 'SubmittedDate': 'Whitney Pocket', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2492', 'EmployeeID': '105600', 'CustomerID': '4013', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-03-07', 'WorkOrderDescription': 'Typeset', 'StartDate': ' Compose', 'DueDate': ' Edit', 'ClosedDate': ' Print the 2017 Nevada Geology Calendar', 'Notes': '2016-03-07', 'ProjectName': '2016-10-15', None: ['2016-10-15', '', '2017 Nevada Geology Calendar']}
,
{'WorkOrderID': '2493', 'EmployeeID': '105600', 'CustomerID': '4014', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-03-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': ' Prepare poster for SSA meeting in Reno', 'EmployeeID': '2016-03-10', 'CustomerID': '2016-03-31', 'PriorityID': '2016-03-31', 'StatusID': '', 'SubmittedDate': 'Faults Poster', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2494', 'EmployeeID': '105600', 'CustomerID': '4015', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-03-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Map was completed but never published. It includes much of the Apex Industrial Park situated along the Interstate 15 corridor', 'EmployeeID': ' 25 minutes from McCarran Airport and within 5 hours of Los Angeles.  Apex has the potential to become one of the predominant i', 'CustomerID': '2016-03-10', 'PriorityID': '2016-06-30', 'StatusID': '2016-06-30', 'SubmittedDate': '', 'WorkOrderDescription': 'Apex Quadrangle', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2495', 'EmployeeID': '105600', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-03-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This map shows the distribution of valley fill sediments and major earthquake faults in Clayton Valley and will elucidate both the distribution of favorable brines and earthquake hazards in the area.  It is authored by geologists from Georgia Institute ', 'EmployeeID': '2016-03-10', 'CustomerID': '2016-06-30', 'PriorityID': '2016-06-30', 'StatusID': '', 'SubmittedDate': 'Clayton Valley Surficial Geologic Map', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2496', 'EmployeeID': '105600', 'CustomerID': '4017', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-03-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This project is to provide funds to participate and sometimes lead outreach activities around the State.  In particular', 'EmployeeID': " for Ra chel Micander to assist at the Nevada Mining Association's Education Committee Teacher Workshop", 'CustomerID': ' March 20-24.', 'PriorityID': '2016-03-10', 'StatusID': '2016-06-30', 'SubmittedDate': '2016-06-30', 'WorkOrderDescription': '', 'StartDate': 'Outreach Opportunities', 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2497', 'EmployeeID': '105600', 'CustomerID': '4018', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-03-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This project is to launch an improved web application to provide an online interface for the sample collections at GBSSRL.  This work involves: 1)quality assurance of existing data to be incorporated into the web application', 'EmployeeID': ' 2)file management and stand', 'CustomerID': '2016-03-10', 'PriorityID': '2019-06-30', 'StatusID': '2019-04-12', 'SubmittedDate': '', 'WorkOrderDescription': 'Nevada Rocks Web Application', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2498', 'EmployeeID': '105600', 'CustomerID': '4019', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-03-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Additional project', 'EmployeeID': '2016-03-10', 'CustomerID': '2016-11-19', 'PriorityID': '2016-11-19', 'StatusID': '', 'SubmittedDate': 'State Hazard Mitigation Plan Updates Project #5', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2499', 'EmployeeID': '105600', 'CustomerID': '4020', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-04-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Layout / typesetting of GBCGE (Great Basin Center for Geothermal Energy) report for Wendy Calvin ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work was never finished after over a year', 'EmployeeID': ' and work order was closed/canceled. Can re-open at a later date if authors choose to work on this again in', 'CustomerID': '2016-04-01', 'PriorityID': '2016-06-30', 'StatusID': '2016-06-30', 'SubmittedDate': '', 'WorkOrderDescription': 'GBCGE Report', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2500', 'EmployeeID': '105600', 'CustomerID': '4021', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-07-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track all work required to update and maintain the NBMG web page.', 'EmployeeID': '2016-07-01', 'CustomerID': '2016-12-31', 'PriorityID': '2016-12-31', 'StatusID': '', 'SubmittedDate': 'Web Maintenance 2nd Half 2016', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2501', 'EmployeeID': '105600', 'CustomerID': '4022', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-07-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'EmployeeID': '2016-07-01', 'CustomerID': '2016-12-31', 'PriorityID': '2016-12-31', 'StatusID': '', 'SubmittedDate': 'P & M 2nd Half 2016', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2502', 'EmployeeID': '105600', 'CustomerID': '4023', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-07-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is for tracking time spent participating in Outreach activities throughout the State.  It includes committee meetings', 'EmployeeID': ' workshops and presentations', 'CustomerID': ' etc.', 'PriorityID': '2016-07-01', 'StatusID': '2016-12-31', 'SubmittedDate': '2016-12-31', 'WorkOrderDescription': '', 'StartDate': 'Outreach Opportunities', 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2503', 'EmployeeID': '105600', 'CustomerID': '4024', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-07-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Set-up and troubleshoot Geoexplorer  for John Muntean.', 'EmployeeID': '2016-07-01', 'CustomerID': '2016-12-31', 'PriorityID': '2016-12-31', 'StatusID': '', 'SubmittedDate': 'Geoexplorer Set-up', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2504', 'EmployeeID': '105600', 'CustomerID': '4025', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-07-08', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare website and brochure for Microbeam Lab similar to CREG website and brochure', 'EmployeeID': '2016-07-08', 'CustomerID': '2016-07-31', 'PriorityID': '2016-07-31', 'StatusID': '', 'SubmittedDate': 'Microbeam Laboratory Web Page and Brochure', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2505', 'EmployeeID': '105600', 'CustomerID': '4026', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-07-14', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Typeset and print Major Mines booklet', 'EmployeeID': '2016-07-14', 'CustomerID': '2016-08-31', 'PriorityID': '2016-08-31', 'StatusID': '', 'SubmittedDate': 'Major Mines of Nevada 2015', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2506', 'EmployeeID': '105600', 'CustomerID': '4027', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-07-21', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Update Statemap Factsheet with SM16 awarded maps.', 'EmployeeID': '2016-07-21', 'CustomerID': '2016-10-01', 'PriorityID': '2016-10-01', 'StatusID': '', 'SubmittedDate': 'Statemap 16 Factsheet', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2507', 'EmployeeID': '105600', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-07-21', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': "Prepare Andrew Sadowski's Black Warrior Thesis Map for publication as an open-file report.", 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '  Note:  Contact Jim Faulds for authorization to exceed 40 hours.', 'EmployeeID': '2016-07-21', 'CustomerID': '2016-09-29', 'PriorityID': '2016-09-29', 'StatusID': '', 'SubmittedDate': 'Black Warrior Thesis Map', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2508', 'EmployeeID': '105600', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-08-01', 'WorkOrderDescription': 'This work order is issued in order to track general cost share for Statemap 2016', 'StartDate': '2016-08-01', 'DueDate': '2017-06-30', 'ClosedDate': '2017-09-01', 'Notes': '', 'ProjectName': 'SM16 Master'}
,
{'WorkOrderID': '2509', 'EmployeeID': '105600', 'CustomerID': '4030', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-08-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'GIs Migration - Comparable migrations:  Virgin Peak - 23.25; Whitney Pocket - 31.5', 'EmployeeID': '2016-08-01', 'CustomerID': '2017-06-30', 'PriorityID': '2017-04-30', 'StatusID': '', 'SubmittedDate': 'SM16 Caetano Caldera GIS Migration', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2510', 'EmployeeID': '105600', 'CustomerID': '4031', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-08-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion - Comparable Conversion:  Valley of Fire 50.75+; White Horse Pass 66', 'EmployeeID': '2016-08-01', 'CustomerID': '2017-06-30', 'PriorityID': '2017-04-30', 'StatusID': '', 'SubmittedDate': 'SM16 IXL Canyon quadrangle GIS Conversion', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2511', 'EmployeeID': '105600', 'CustomerID': '4032', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-08-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'GIS Conversion - Comparable Conversions:  Valley of Fire 50.75+; White Horse Pass 66', 'EmployeeID': '2016-08-01', 'CustomerID': '2017-06-30', 'PriorityID': '2017-04-30', 'StatusID': '', 'SubmittedDate': 'SM16 North Peak quadrangle GIS Conversion', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2512', 'EmployeeID': '105600', 'CustomerID': '4033', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-08-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'GIS Digitization - Comparable digitization:  Snowstorm Mountains & Vicinity 62.25', 'EmployeeID': '2016-08-01', 'CustomerID': '2017-06-30', 'PriorityID': '2017-04-30', 'StatusID': '', 'SubmittedDate': 'SM16 McCoy Mining District GIS Digitization', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2513', 'EmployeeID': '105600', 'CustomerID': '4034', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-08-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'GIS Migration - Comparable migrations:  Virgin Peak23.25; Whitney Pocket 31.5.  Note:  This map needs to be published first', 'EmployeeID': ' then perform the migration.  If the map does not get published before we need to start the conversion', 'CustomerID': ' we will convert what we h', 'PriorityID': '2016-08-01', 'StatusID': '2017-06-30', 'SubmittedDate': '2017-09-28', 'WorkOrderDescription': '', 'StartDate': 'SM16 Humboldt Peak quad GIS Migration', 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2514', 'EmployeeID': '105600', 'CustomerID': '4035', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-08-29', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Help authors Ayling/Muntean/Davis compose and organize files; edit layout; organize pages and sections; print hard copy if needed; post on web', 'EmployeeID': '2016-08-29', 'CustomerID': '2016-11-30', 'PriorityID': '2016-11-30', 'StatusID': '', 'SubmittedDate': 'MI 2015', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2515', 'EmployeeID': '105600', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-09-13', 'WorkOrderDescription': 'Any work requested by PI for General Geothermal.', 'StartDate': '2016-09-13', 'DueDate': '2017-09-30', 'ClosedDate': '2016-11-09', 'Notes': '', 'ProjectName': 'General Geothermal'}
,
{'WorkOrderID': '2516', 'EmployeeID': '105600', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-09-15', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Support for the Earth Science Week field trip and for Open House on 10/15/2016', 'EmployeeID': '2016-09-15', 'CustomerID': '2016-10-15', 'PriorityID': '2016-10-15', 'StatusID': '', 'SubmittedDate': 'Earth Science Week 2016', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2517', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-10-05', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Cartographic / GIS / Publication Support', 'EmployeeID': '2016-10-05', 'CustomerID': '2017-01-31', 'PriorityID': '2017-01-31', 'StatusID': '', 'SubmittedDate': 'Washoe Shear Zone', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2518', 'EmployeeID': '105600', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-10-05', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare/modify figure for 3DEP proposal; other support as needed', 'EmployeeID': '2016-10-05', 'CustomerID': '2016-11-01', 'PriorityID': '2016-11-01', 'StatusID': '', 'SubmittedDate': '3DEP Proposal Support', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2519', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-10-12', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Updates to McDermitt Open File Report; possibly rerelease as 2nd edition of a new OFR.  Involves stitching together Joe Laravie edits with Chris Henry database edits', 'EmployeeID': ' layout modifications and new attitudes & sample.  Also cross section edits and updates', 'CustomerID': '2016-10-12', 'PriorityID': '2016-12-31', 'StatusID': '2016-11-01', 'SubmittedDate': '', 'WorkOrderDescription': 'McDermitt Update', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2520', 'EmployeeID': '105600', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-10-20', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Help John with figures (some Illustrator', 'EmployeeID': ' some Arc).  John providing them in batches - 1st batch needed by 10/26.  All needed by 11/15/2016.', 'CustomerID': '2016-10-20', 'PriorityID': '2016-11-15', 'StatusID': '2016-11-15', 'SubmittedDate': '', 'WorkOrderDescription': 'SEG Figures', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2521', 'EmployeeID': '105600', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-10-27', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare files and coordinate having a plaque made for Lee Allison Memorial', 'EmployeeID': '2016-10-27', 'CustomerID': '2016-11-19', 'PriorityID': '2016-11-19', 'StatusID': '', 'SubmittedDate': 'Lee Allison Plaque', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2522', 'EmployeeID': '105600', 'CustomerID': '4043', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-11-08', 'WorkOrderDescription': 'Add hillshade to t-shirts and bandanas and add title and any other needed updates.', 'StartDate': '2016-11-08', 'DueDate': '2016-12-31', 'ClosedDate': '2016-12-31', 'Notes': '', 'ProjectName': 'Update T-Shirts and Bandanas'}
,
{'WorkOrderID': '2523', 'EmployeeID': '105600', 'CustomerID': '4044', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-11-10', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for deliverable and OFR; set-up files; GIS/Cartographic assistance as needed.  Includes GIS/Cartographic finalization.', 'EmployeeID': '2016-11-10', 'CustomerID': '2017-08-31', 'PriorityID': '2017-09-03', 'StatusID': '', 'SubmittedDate': 'SM 16 Boulder City NW', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2524', 'EmployeeID': '105600', 'CustomerID': '4045', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2016-12-07', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Cart/GIS support throughout the project.  Estimated hours are based on the current shop rate of $45.25/hour for the first year of the project.  Overall project is through 3/9/2021.', 'EmployeeID': '2016-12-07', 'CustomerID': '2020-12-31', 'PriorityID': '2021-01-17', 'StatusID': '', 'SubmittedDate': 'Las Vegas Valley', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2525', 'EmployeeID': '105600', 'CustomerID': '4046', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2016-01-27', 'WorkOrderDescription': 'Churchill County OFR', 'StartDate': '2016-12-07', 'DueDate': '2017-04-26', 'ClosedDate': '2017-02-16', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2526', 'EmployeeID': '105600', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2016-12-15', 'WorkOrderDescription': 'Incorporate the 2014 and 2015 faculty/staff citations into a report.', 'StartDate': '2016-12-15', 'DueDate': '2017-02-28', 'ClosedDate': '2017-01-26', 'Notes': '', 'ProjectName': 'NBMG Biennial Report 2016'}
,
{'WorkOrderID': '2527', 'EmployeeID': '105600', 'CustomerID': '4048', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2016-12-21', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare for Open-File Report.  Reduced / clipped-down version of map from wo #2179 cross sections.', 'EmployeeID': '2016-12-21', 'CustomerID': '2017-01-31', 'PriorityID': '2017-01-31', 'StatusID': '', 'SubmittedDate': 'Desert Peak - Bradys OFR', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2528', 'EmployeeID': '105600', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'EmployeeID': '2017-01-01', 'CustomerID': '2017-06-30', 'PriorityID': '2017-06-30', 'StatusID': '', 'SubmittedDate': 'P & M 1st Half 2017', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2529', 'EmployeeID': '105600', 'CustomerID': '4050', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2017-01-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track all work required to update and maintain the NBMG web page.', 'EmployeeID': '2017-01-01', 'CustomerID': '2017-06-30', 'PriorityID': '2017-06-30', 'StatusID': '', 'SubmittedDate': 'Web Maintenance 1st Half 2017', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2530', 'EmployeeID': '105600', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2017-01-06', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'For the collection of photos and other observations/materials for the January', 'EmployeeID': ' 2017 flooding.', 'CustomerID': '2017-01-06', 'PriorityID': '2017-03-31', 'StatusID': '2017-03-31', 'SubmittedDate': '', 'WorkOrderDescription': 'Flood Response', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2531', 'EmployeeID': '105600', 'CustomerID': '4052', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2017-01-11', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Update OFR version and E-series ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Bill this work order after receipt of NDOM funds', 'EmployeeID': '2017-01-11', 'CustomerID': '2017-02-10', 'PriorityID': '2017-02-10', 'StatusID': '', 'SubmittedDate': 'Update Active Mines & Energy Producers Map', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2532', 'EmployeeID': '105600', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2017-02-09', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare report for publication including minor typesetting/formatting', 'EmployeeID': ' cover update', 'CustomerID': ' summary flyer update', 'PriorityID': ' final check/reviews.  Coordinate with Charlotte and others and coordinate printing through UNR Copy Center/Nevada Ink. ', 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'billed to 10SY once that ', 'EmployeeID': '2017-02-09', 'CustomerID': '2017-02-17', 'PriorityID': '2017-02-17', 'StatusID': '', 'SubmittedDate': 'Exploration Survey 2015/2016', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2533', 'EmployeeID': '105600', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-03-07', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for OFR publication.  OFR not needed for Chad Carlson dissertation deadline of 4/30/2017.  Assist with GIS and Cartographic support as needed.  Set-up database/mxd and load files from Vr.', 'EmployeeID': '2017-03-07', 'CustomerID': '2017-04-30', 'PriorityID': '2017-04-30', 'StatusID': '', 'SubmittedDate': 'Red Ridge Quad OFR', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2534', 'EmployeeID': '105600', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2017-03-14', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Scan records and post files on web', 'EmployeeID': '2017-03-14', 'CustomerID': '2017-08-31', 'PriorityID': '2017-07-28', 'StatusID': '', 'SubmittedDate': 'Preservation Grant Scanning', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2535', 'EmployeeID': '105600', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2017-03-14', 'WorkOrderDescription': 'Scan files and post files on web.  Assist with GIS and Cartography; prep for release as M-Series publication', 'StartDate': ' but only need nice looking plate for May deadline.', 'DueDate': '2017-03-14', 'ClosedDate': '2017-05-31', 'Notes': '2017-05-29', 'ProjectName': '', None: ['Terrill Mountains M-Series']}
,
{'WorkOrderID': '2536', 'EmployeeID': '105600', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2017-03-16', 'WorkOrderDescription': 'Typeset', 'StartDate': ' compose', 'DueDate': ' layout and publication of the NBMG 2018 Geologic Calendar.', 'ClosedDate': '2017-03-16', 'Notes': '2017-10-15', 'ProjectName': '2017-11-07', None: ['', 'Calendar', ' NBMG 2018']}
,
{'WorkOrderID': '2537', 'EmployeeID': '105600', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': "Prepare Carli Balogh's thesis map for OFR release", 'EmployeeID': '2017-07-01', 'CustomerID': '2017-09-30', 'PriorityID': '2017-08-26', 'StatusID': '', 'SubmittedDate': 'Sweetwater Range', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2538', 'EmployeeID': '105600', 'CustomerID': '4059', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2017-04-04', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prep/organize files for reprint of 150 books', 'EmployeeID': ' perform prepress/coordinate with print company', 'CustomerID': ' and other related work.', 'PriorityID': '2017-04-04', 'StatusID': '2017-06-30', 'SubmittedDate': '2017-06-30', 'WorkOrderDescription': '', 'StartDate': 'Reprint Las Vegas Guide Book - SP16', 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2539', 'EmployeeID': '105600', 'CustomerID': '4060', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2017-04-04', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Coordinate reprinting of 20 copies of B27', 'EmployeeID': '2017-04-04', 'CustomerID': '2017-06-30', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'Reprint Placer Mining in Nevada - B27', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2540', 'EmployeeID': '105600', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2017-04-19', 'WorkOrderDescription': 'For archiving purposes only. Files for OF14-5 that were never archived during 10PU work.', 'StartDate': '2017-04-19', 'DueDate': '2017-04-19', 'ClosedDate': '2017-04-19', 'Notes': '', 'ProjectName': 'Hazus Report OF14-5'}
,
{'WorkOrderID': '2541', 'EmployeeID': '105600', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2017-04-19', 'WorkOrderDescription': 'For archiving purposes only. Work done a few a couple years ago without a work order created', 'StartDate': ' but need to archive files now.', 'DueDate': '2017-04-19', 'ClosedDate': '2017-04-19', 'Notes': '2017-04-19', 'ProjectName': '', None: ['Cascade Geology Maps']}
,
{'WorkOrderID': '2542', 'EmployeeID': '105600', 'CustomerID': '4000', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2017-04-15', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Various existing Lidar datasets need to be compiled into a central location so UNR researchers can access these data for their research needs.', 'EmployeeID': '2017-04-15', 'CustomerID': '2017-06-30', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'Lidar Database Setup', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2543', 'EmployeeID': '105600', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2017-04-15', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This project involves repurposing pages from the popular Nevada Geology calendar into educational posters for the public that would be for sale through NBMG.', 'EmployeeID': '2017-04-15', 'CustomerID': '2017-06-30', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'Geology Posters', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2544', 'EmployeeID': '105600', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2017-04-21', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare files for Open-File publication.', 'EmployeeID': '2017-04-21', 'CustomerID': '2017-06-30', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'Kelly Creek geologic map', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2545', 'EmployeeID': '105600', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2017-05-09', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'prepare map for Open-File publication', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '   ', 'EmployeeID': None, 'CustomerID': None, 'PriorityID': None, 'StatusID': None, 'SubmittedDate': None, 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '  files originally submitted to NBMG 12/30/16', 'EmployeeID': " but couldn't start until funds were secured", 'CustomerID': '2017-05-09', 'PriorityID': '2017-06-30', 'StatusID': '2018-07-25', 'SubmittedDate': '', 'WorkOrderDescription': 'Lower Pahranagat Lake NW', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2546', 'EmployeeID': '105600', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2017-06-07', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for deliverable and Open-File publication.', 'EmployeeID': '2017-06-07', 'CustomerID': '2017-09-29', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'Independence Valley NW - north half', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2547', 'EmployeeID': '105600', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2017-06-07', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Prepare map for deliverable and Open-File publication.', 'EmployeeID': '2017-06-07', 'CustomerID': '2017-09-29', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'Kinsley Mountains North', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2548', 'EmployeeID': '105600', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2017-06-09', 'WorkOrderDescription': '', 'StartDate': '2017-07-05', 'DueDate': '2017-09-07', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2549', 'EmployeeID': '105600', 'CustomerID': '4007', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2017-07-06', 'WorkOrderDescription': '', 'StartDate': '2017-07-07', 'DueDate': '2017-10-04', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2550', 'EmployeeID': '105600', 'CustomerID': '4008', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued to track miscellaneous work that does not require a separate work order.', 'EmployeeID': '2017-07-01', 'CustomerID': '2017-12-31', 'PriorityID': '2017-12-31', 'StatusID': '', 'SubmittedDate': 'P&M - 2nd Half 2017 (1st Half FY18)', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2551', 'EmployeeID': '105600', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is assigned to track time for updating and maintaining the NBMG website.', 'EmployeeID': '2017-07-01', 'CustomerID': '2017-12-31', 'PriorityID': '2017-12-31', 'StatusID': '', 'SubmittedDate': 'Web Maintenance - 2nd Half 2017 (FY18)', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2552', 'EmployeeID': '105600', 'CustomerID': '4010', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': 'This work order is issued to track time spent on various outreach activities.', 'StartDate': '2017-07-01', 'DueDate': '2017-12-31', 'ClosedDate': '2018-06-30', 'Notes': '', 'ProjectName': 'Outreach Opportunities FY18'}
,
{'WorkOrderID': '2553', 'EmployeeID': '105600', 'CustomerID': '4011', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2017-07-01', 'WorkOrderDescription': 'This work order is to track the time spent by Cart/GIS at conferences', 'StartDate': ' classes', 'DueDate': ' participation in training/online training', 'ClosedDate': ' and other research and development tasks.', 'Notes': '2017-07-01', 'ProjectName': '2017-12-31', None: ['', '', 'R & D', ' Conferences', ' Workshops FY18']}
,
{'WorkOrderID': '2554', 'EmployeeID': '105600', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2017-05-01', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'work order to support state hazard mitigation plan work and related tasks', 'EmployeeID': '2017-05-01', 'CustomerID': '2017-12-31', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'Hazard Mitigation', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2555', 'EmployeeID': '105600', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2012-07-01', 'WorkOrderDescription': 'For archival purposes.', 'StartDate': '2012-07-01', 'DueDate': '2014-06-30', 'ClosedDate': '2014-06-30', 'Notes': '', 'ProjectName': 'P&M - 2012 through 2014'}
,
{'WorkOrderID': '2556', 'EmployeeID': '105600', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2017-07-28', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Assist with proposal figures and other support as needed.', 'EmployeeID': '2017-07-28', 'CustomerID': '2017-10-31', 'PriorityID': '2017-11-09', 'StatusID': '', 'SubmittedDate': 'Statemap 2018 Proposal Support', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2557', 'EmployeeID': '105600', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2017-07-28', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'Update existing factsheet with SM2017 info', 'EmployeeID': ' post online', 'CustomerID': ' and provide to the USGS before Statemap proposal panel reviews proposals.', 'PriorityID': '2017-07-28', 'StatusID': '2017-10-31', 'SubmittedDate': '2017-08-11', 'WorkOrderDescription': '', 'StartDate': 'Statemap 2017 Factsheet', 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2558', 'EmployeeID': '105600', 'CustomerID': '4016', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2014-04-01', 'WorkOrderDescription': 'Proposal work was completed in 2014. This work order is for archival purposes only.', 'StartDate': '2014-04-01', 'DueDate': '2014-05-31', 'ClosedDate': '2014-05-31', 'Notes': '', 'ProjectName': 'SNPLMA 2014 proposal'}
,
{'WorkOrderID': '2559', 'EmployeeID': '105600', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': '', 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': 'This work order is issued in order to track general cost share for Statemap 2017', 'EmployeeID': '2017-06-26', 'CustomerID': '2018-06-25', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': 'SM17 Master', 'WorkOrderDescription': None, 'StartDate': None, 'DueDate': None, 'ClosedDate': None, 'Notes': None, 'ProjectName': None}
,
{'WorkOrderID': '2560', 'EmployeeID': '105600', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '2017-06-26', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Frenchman Mountain SM17 GIS Migration'}
,
{'WorkOrderID': '2561', 'EmployeeID': '105600', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '2017-06-26', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Henderson SM17 GIS Migration'}
,
{'WorkOrderID': '2562', 'EmployeeID': '105600', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '2017-06-26', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Lamoille SM17 GIS Migration'}
,
{'WorkOrderID': '2563', 'EmployeeID': '105600', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '2017-06-26', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Mount Davis SM17 GIS Migration'}
,
{'WorkOrderID': '2564', 'EmployeeID': '105600', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': 'SM17 GIS Digitization.', 'StartDate': '2017-06-26', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Mount Siegel SM17 GIS Digitization'}
,
{'WorkOrderID': '2565', 'EmployeeID': '105600', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': 'SM17 GIS Digitization.', 'StartDate': '2017-06-26', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Wellington SM17 GIS Digitization'}
,
{'WorkOrderID': '2566', 'EmployeeID': '105600', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2017-06-26', 'WorkOrderDescription': 'SM17 GIS Digitization.', 'StartDate': '2017-06-26', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Yerington SM17 GIS Digitization'}
,
{'WorkOrderID': '2567', 'EmployeeID': '105600', 'CustomerID': '4025', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2017-09-07', 'WorkOrderDescription': 'Prepare/typeset Major Mines 2016 for publication and printing of 1500 copies.', 'StartDate': '2017-09-07', 'DueDate': '2017-10-31', 'ClosedDate': '2017-10-31', 'Notes': '', 'ProjectName': 'Major Mines 2016'}
,
{'WorkOrderID': '2568', 'EmployeeID': '105602', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2017-09-28', 'WorkOrderDescription': '', 'StartDate': '2017-09-29', 'DueDate': '2017-12-27', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2569', 'EmployeeID': '105600', 'CustomerID': '4027', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2017-10-01', 'WorkOrderDescription': 'prepare map for M-series publication', 'StartDate': '2017-10-01', 'DueDate': '2017-12-31', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Humboldt Peak M-series'}
,
{'WorkOrderID': '2570', 'EmployeeID': '105600', 'CustomerID': '4028', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2017-10-01', 'WorkOrderDescription': 'prepare for OFR publication', 'StartDate': '2017-10-01', 'DueDate': '2017-12-31', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'East Range OFR'}
,
{'WorkOrderID': '2571', 'EmployeeID': '105600', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2017-10-19', 'WorkOrderDescription': "Prepare figures from Jim's PDF and incorporate his edits.", 'StartDate': '2017-10-19', 'DueDate': '2017-11-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Turkey Paper Figures (Faulds)'}
,
{'WorkOrderID': '2572', 'EmployeeID': '105600', 'CustomerID': '4030', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2017-10-19', 'WorkOrderDescription': "Prepare figures from Jim's files.", 'StartDate': '2017-10-19', 'DueDate': '2018-02-28', 'ClosedDate': '2018-07-25', 'Notes': '', 'ProjectName': 'Fernley Paper Figures (Faulds)'}
,
{'WorkOrderID': '2573', 'EmployeeID': '105600', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2017-10-15', 'WorkOrderDescription': 'Prepare SP26 for a reprinting of 200 copies. Incorporate edits from errata sheet.', 'StartDate': '2017-10-15', 'DueDate': '2017-12-31', 'ClosedDate': '2018-01-29', 'Notes': '', 'ProjectName': 'SP26 Hwy 50 Reprint'}
,
{'WorkOrderID': '2574', 'EmployeeID': '105600', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2017-11-01', 'WorkOrderDescription': 'Assist authors', 'StartDate': ' typeset', 'DueDate': ' compile', 'ClosedDate': ' and edit report. Assist with prepress & printing and web posting.', 'Notes': '2017-11-01', 'ProjectName': '2017-12-01', None: ['2017-12-19', '', 'MI 2016']}
,
{'WorkOrderID': '2575', 'EmployeeID': '105600', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2017-12-19', 'WorkOrderDescription': 'see scope of work for details', 'StartDate': '2017-12-19', 'DueDate': '2018-01-31', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Radon maps'}
,
{'WorkOrderID': '2576', 'EmployeeID': '105600', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2017-12-22', 'WorkOrderDescription': 'prepare map for SM17 deliverable and OFR release', 'StartDate': '2017-12-22', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Mount Rose NW (SM17)'}
,
{'WorkOrderID': '2577', 'EmployeeID': '105600', 'CustomerID': '4035', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2017-12-22', 'WorkOrderDescription': 'prepare map for deliverable and OFR release', 'StartDate': '2017-12-22', 'DueDate': '2018-06-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Independence Valley NE (SM17)'}
,
{'WorkOrderID': '2578', 'EmployeeID': '105600', 'CustomerID': '4036', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-01-01', 'WorkOrderDescription': 'Prepare figures to accompany figures from previous "SEG figures" work order for manuscript submission. Due date of 3/31/18 is arbitrary date entered by JMV. Assigned to Sydney Wilson.', 'StartDate': '2018-01-01', 'DueDate': '2018-03-31', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SEG Figures'}
,
{'WorkOrderID': '2579', 'EmployeeID': '105600', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2016-12-20', 'WorkOrderDescription': 'Assist with preparations for booth at PDAC conference. Participate in booth planning conference calls', 'StartDate': ' prepare map and other materials needed for NBMG portion of booth. Assigned to Jennifer and Rachel since unfunded.', 'DueDate': '2016-12-20', 'ClosedDate': '2018-03-01', 'Notes': '2018-06-30', 'ProjectName': '', None: ['PDAC support']}
,
{'WorkOrderID': '2580', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-01-01', 'WorkOrderDescription': 'This work order is issued to track miscellaneous work that does not require a separate work order.', 'StartDate': '2018-01-01', 'DueDate': '2018-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'P&M - 1st Half 2018 (2nd Half FY18)'}
,
{'WorkOrderID': '2581', 'EmployeeID': '105600', 'CustomerID': '4039', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-01-01', 'WorkOrderDescription': 'This work order is assigned to track time for updating and maintaining the NBMG website.', 'StartDate': '2018-01-01', 'DueDate': '2018-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Web Maintenance - 1st Half 2018 (FY18)'}
,
{'WorkOrderID': '2582', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-02-01', 'WorkOrderDescription': 'This work order is assigned to track time for Footprint Migration', 'StartDate': '2018-02-01', 'DueDate': '2019-02-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Footprints Migration'}
,
{'WorkOrderID': '2583', 'EmployeeID': '105600', 'CustomerID': '4041', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-03-09', 'WorkOrderDescription': 'Prepare figures for Jim', 'StartDate': '2018-03-09', 'DueDate': '2019-03-09', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Hot Springs Mountains'}
,
{'WorkOrderID': '2584', 'EmployeeID': '105600', 'CustomerID': '4042', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-03-23', 'WorkOrderDescription': 'This work order is assigned to track time for Hawthorne Geothermal', 'StartDate': '2018-03-23', 'DueDate': '2019-03-23', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Hawthorne Geothermal'}
,
{'WorkOrderID': '2585', 'EmployeeID': '105600', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2018-04-10', 'WorkOrderDescription': 'Prepare/typeset Barrick Report for publication and printing', 'StartDate': '2018-04-10', 'DueDate': '2019-04-10', 'ClosedDate': '2018-08-24', 'Notes': '', 'ProjectName': 'Barrick Report'}
,
{'WorkOrderID': '2586', 'EmployeeID': '105600', 'CustomerID': '4044', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-05-01', 'WorkOrderDescription': 'This work order is assigned to track time for Eglington Fault Study', 'StartDate': '2018-05-01', 'DueDate': '2019-05-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Eglington Fault Study'}
,
{'WorkOrderID': '2587', 'EmployeeID': '105600', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-05-15', 'WorkOrderDescription': 'This work order is assigned to track time for the Crescent Valley Map', 'StartDate': '2018-05-15', 'DueDate': '2019-05-15', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Crescent Valley Map'}
,
{'WorkOrderID': '2588', 'EmployeeID': '105600', 'CustomerID': '4046', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-06-15', 'WorkOrderDescription': '', 'StartDate': '2018-06-19', 'DueDate': '2018-09-13', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2589', 'EmployeeID': '105600', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-03-23', 'WorkOrderDescription': 'Prepare figures for John Muntean', 'StartDate': '2018-03-23', 'DueDate': '2019-03-23', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Canyon and Other Figures'}
,
{'WorkOrderID': '2590', 'EmployeeID': '105600', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-05-15', 'WorkOrderDescription': 'This work order is assigned to track time for the Forge Geological Map project.', 'StartDate': '2018-05-15', 'DueDate': '2019-05-15', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Forge Geological Map'}
,
{'WorkOrderID': '2591', 'EmployeeID': '105600', 'CustomerID': '4049', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-06-27', 'WorkOrderDescription': 'This work order is assigned to track time for the North Valley project.', 'StartDate': '2018-06-27', 'DueDate': '2019-06-27', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'North Valley'}
,
{'WorkOrderID': '2592', 'EmployeeID': '105600', 'CustomerID': '4050', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': 'This work order is issued to track miscellaneous work that does not require a separate work order.', 'StartDate': '2018-07-01', 'DueDate': '2018-12-31', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'P&M - 2nd Half 2018 (1st Half FY19)'}
,
{'WorkOrderID': '2593', 'EmployeeID': '105600', 'CustomerID': '4051', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': 'This work order is assigned to track time for updating and maintaining the NBMG website.', 'StartDate': '2018-07-01', 'DueDate': '2018-12-31', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Web Maintenance - 2nd Half 2018 (FY19)'}
,
{'WorkOrderID': '2594', 'EmployeeID': '105600', 'CustomerID': '4052', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-01-30', 'WorkOrderDescription': 'Typeset', 'StartDate': ' compose', 'DueDate': ' layout and publication of the NBMG 2019 Geologic Calendar.', 'ClosedDate': '2018-01-01', 'Notes': '2018-10-15', 'ProjectName': '', None: ['', '2019 Nevada Geologic Calendar']}
,
{'WorkOrderID': '2595', 'EmployeeID': '105600', 'CustomerID': '4053', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-07-16', 'WorkOrderDescription': 'prepare map for SM18 deliverable and OFR release', 'StartDate': '2018-07-02', 'DueDate': '2019-07-16', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Granite Peak'}
,
{'WorkOrderID': '2596', 'EmployeeID': '105600', 'CustomerID': '4054', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-07-17', 'WorkOrderDescription': 'Scan records and post files on web.', 'StartDate': '2018-07-17', 'DueDate': '2019-07-16', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Preservation Scanning'}
,
{'WorkOrderID': '2597', 'EmployeeID': '105600', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': 'This project is to provide funds to participate and sometimes lead outreach activities around the State.', 'StartDate': '2018-07-01', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Outreach Opportunities FY19'}
,
{'WorkOrderID': '2598', 'EmployeeID': '105600', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-07-01', 'WorkOrderDescription': 'This work order is to track the time spent by Cart/GIS at conferences', 'StartDate': ' classes', 'DueDate': ' participation in training/online training', 'ClosedDate': ' and other research and development tasks.', 'Notes': '2018-07-01', 'ProjectName': '2019-06-30', None: ['', '', 'R&D Conferences Workshops FY19']}
,
{'WorkOrderID': '2599', 'EmployeeID': '105600', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-07-16', 'WorkOrderDescription': 'prepare map for SM18 deliverable and OFR release', 'StartDate': '2018-07-16', 'DueDate': '2019-07-16', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Petersen Mountain'}
,
{'WorkOrderID': '2600', 'EmployeeID': '105600', 'CustomerID': '4058', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Master'}
,
{'WorkOrderID': '2601', 'EmployeeID': '105600', 'CustomerID': '4059', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Gordon Creek GIS Migration'}
,
{'WorkOrderID': '2602', 'EmployeeID': '105600', 'CustomerID': '4060', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Huntsman Ranch GIS Migration'}
,
{'WorkOrderID': '2603', 'EmployeeID': '105600', 'CustomerID': '4061', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Bullfrog Hills GIS Migration'}
,
{'WorkOrderID': '2604', 'EmployeeID': '105600', 'CustomerID': '4062', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Carson City GIS Migration'}
,
{'WorkOrderID': '2605', 'EmployeeID': '105600', 'CustomerID': '4000', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Sacramento Pass AI Conversion'}
,
{'WorkOrderID': '2606', 'EmployeeID': '105600', 'CustomerID': '4001', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Independence Valley'}
,
{'WorkOrderID': '2607', 'EmployeeID': '105600', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Washoe City'}
,
{'WorkOrderID': '2608', 'EmployeeID': '105600', 'CustomerID': '4003', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-07-02', 'WorkOrderDescription': '', 'StartDate': '2018-07-02', 'DueDate': '2019-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'SM18 Granite Range GIS Migration'}
,
{'WorkOrderID': '2609', 'EmployeeID': '105600', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-08-28', 'WorkOrderDescription': '', 'StartDate': '2018-09-01', 'DueDate': '2018-11-26', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2610', 'EmployeeID': '105600', 'CustomerID': '4005', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-09-12', 'WorkOrderDescription': '', 'StartDate': '2018-09-12', 'DueDate': '2019-09-12', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'E-62 Stewart Publication'}
,
{'WorkOrderID': '2611', 'EmployeeID': '105600', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-10-01', 'WorkOrderDescription': '', 'StartDate': '2018-10-01', 'DueDate': '2019-10-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Carson City Figures'}
,
{'WorkOrderID': '2612', 'EmployeeID': '105600', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-09-01', 'WorkOrderDescription': '', 'StartDate': '2018-09-01', 'DueDate': '2019-10-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Major Mines 2017'}
,
{'WorkOrderID': '2613', 'EmployeeID': '105600', 'CustomerID': '4008', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-10-01', 'WorkOrderDescription': '', 'StartDate': '2018-10-01', 'DueDate': '2019-10-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Earth Science Week 2018'}
,
{'WorkOrderID': '2614', 'EmployeeID': '105600', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-09-01', 'WorkOrderDescription': '', 'StartDate': '2018-09-01', 'DueDate': '2019-09-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'PDAC 2019'}
,
{'WorkOrderID': '2615', 'EmployeeID': '105600', 'CustomerID': '4010', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-10-01', 'WorkOrderDescription': '', 'StartDate': '2018-10-01', 'DueDate': '2019-10-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': 'Spirit Mountain NW'}
,
{'WorkOrderID': '2616', 'EmployeeID': '105602', 'CustomerID': '4011', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-10-22', 'WorkOrderDescription': '', 'StartDate': '2018-10-01', 'DueDate': '2019-01-20', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2617', 'EmployeeID': '105601', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-10-09', 'WorkOrderDescription': '', 'StartDate': '2018-10-09', 'DueDate': '2019-01-07', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2618', 'EmployeeID': '105600', 'CustomerID': '4013', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-11-14', 'WorkOrderDescription': '', 'StartDate': '2018-11-14', 'DueDate': '2019-02-12', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2619', 'EmployeeID': '105601', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-11-19', 'WorkOrderDescription': '', 'StartDate': '2018-11-19', 'DueDate': '2019-02-17', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2620', 'EmployeeID': '105603', 'CustomerID': '4015', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '2018-12-20', 'WorkOrderDescription': '', 'StartDate': '2018-11-01', 'DueDate': '2019-03-20', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2621', 'EmployeeID': '105602', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-11-16', 'WorkOrderDescription': '', 'StartDate': '2018-11-16', 'DueDate': '2019-02-14', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2622', 'EmployeeID': '105601', 'CustomerID': '4017', 'PriorityID': '4', 'StatusID': '3', 'SubmittedDate': '2019-01-02', 'WorkOrderDescription': '', 'StartDate': '2019-01-01', 'DueDate': '2019-04-02', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2623', 'EmployeeID': '105600', 'CustomerID': '4018', 'PriorityID': '5', 'StatusID': '3', 'SubmittedDate': '2019-01-02', 'WorkOrderDescription': '', 'StartDate': '2019-01-01', 'DueDate': '2019-04-02', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2624', 'EmployeeID': '105600', 'CustomerID': '4019', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2018-12-06', 'WorkOrderDescription': '', 'StartDate': '2018-12-01', 'DueDate': '2019-03-06', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2625', 'EmployeeID': '105600', 'CustomerID': '4020', 'PriorityID': '1', 'StatusID': '3', 'SubmittedDate': '2019-01-02', 'WorkOrderDescription': '', 'StartDate': '2019-01-01', 'DueDate': '2019-04-02', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2626', 'EmployeeID': '105604', 'CustomerID': '4021', 'PriorityID': '2', 'StatusID': '3', 'SubmittedDate': '2019-01-03', 'WorkOrderDescription': '', 'StartDate': '2019-01-01', 'DueDate': '2019-04-03', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2627', 'EmployeeID': '105600', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2018-12-04', 'WorkOrderDescription': '', 'StartDate': '2018-12-01', 'DueDate': '2019-03-04', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2628', 'EmployeeID': '105602', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2018-12-04', 'WorkOrderDescription': '', 'StartDate': '2018-12-01', 'DueDate': '2019-03-04', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2629', 'EmployeeID': '105602', 'CustomerID': '4024', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2018-12-03', 'WorkOrderDescription': '', 'StartDate': '2018-12-01', 'DueDate': '2019-03-03', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2630', 'EmployeeID': '105600', 'CustomerID': '4025', 'PriorityID': '3', 'StatusID': '2', 'SubmittedDate': '2019-02-03', 'WorkOrderDescription': '', 'StartDate': '2019-02-01', 'DueDate': '2019-05-04', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2631', 'EmployeeID': '105600', 'CustomerID': '4026', 'PriorityID': '4', 'StatusID': '2', 'SubmittedDate': '2019-02-03', 'WorkOrderDescription': '', 'StartDate': '2019-02-01', 'DueDate': '2019-05-04', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2632', 'EmployeeID': '105600', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '2', 'SubmittedDate': '2019-04-02', 'WorkOrderDescription': '', 'StartDate': '2019-04-02', 'DueDate': '2019-07-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2633', 'EmployeeID': '105600', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '2019-04-24', 'WorkOrderDescription': '', 'StartDate': '2019-04-24', 'DueDate': '2019-07-23', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2634', 'EmployeeID': '105600', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '2', 'SubmittedDate': '2019-05-03', 'WorkOrderDescription': '', 'StartDate': '2019-05-03', 'DueDate': '2019-08-01', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2635', 'EmployeeID': '105600', 'CustomerID': '4030', 'PriorityID': '4', 'StatusID': '2', 'SubmittedDate': '2019-05-10', 'WorkOrderDescription': '', 'StartDate': '2019-05-01', 'DueDate': '2019-08-08', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2636', 'EmployeeID': '105600', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '2', 'SubmittedDate': '2019-05-09', 'WorkOrderDescription': '', 'StartDate': '2019-05-09', 'DueDate': '2019-08-07', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2637', 'EmployeeID': '105600', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '2', 'SubmittedDate': '2019-05-14', 'WorkOrderDescription': '', 'StartDate': '2019-05-14', 'DueDate': '2019-08-12', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2638', 'EmployeeID': '105603', 'CustomerID': '4033', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '2019-05-15', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2019-08-13', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2639', 'EmployeeID': '105603', 'CustomerID': '4034', 'PriorityID': '2', 'StatusID': '2', 'SubmittedDate': '2019-07-01', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2019-09-29', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2641', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '2019-07-17', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2020-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2642', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '2019-07-01', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2020-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2643', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '2019-07-05', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2020-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2644', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '2019-07-04', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2020-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2646', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '2019-07-10', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2020-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2647', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '3', 'SubmittedDate': '2019-08-15', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2020-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2648', 'EmployeeID': '105603', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '3', 'SubmittedDate': '2019-07-03', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2020-06-30', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2649', 'EmployeeID': '105601', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2019-07-11', 'WorkOrderDescription': '', 'StartDate': '2019-07-01', 'DueDate': '2019-10-09', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2651', 'EmployeeID': '105601', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '2019-08-07', 'WorkOrderDescription': '', 'StartDate': '2019-08-01', 'DueDate': '2019-11-05', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2652', 'EmployeeID': '105600', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '2019-08-13', 'WorkOrderDescription': '', 'StartDate': '2019-08-15', 'DueDate': '2019-11-11', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2653', 'EmployeeID': '105600', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '2019-08-21', 'WorkOrderDescription': '', 'StartDate': '2019-08-01', 'DueDate': '2019-11-19', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2654', 'EmployeeID': '105600', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2019-08-27', 'WorkOrderDescription': '', 'StartDate': '2019-08-01', 'DueDate': '2019-11-25', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
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
     await queryInterface.bulkDelete('workorders', null, {});
  }
}; 
