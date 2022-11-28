
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

{'WorkOrderID': '1698', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2019', 'WorkOrderDescription': 'To track Family Medical Leave of Absence', 'StartDate': '1/1/2019', 'DueDate': '1/1/2020', 'ClosedDate': '2/3/2020', 'Notes': 'Continuous WO, do not close', 'ProjectName': 'FMLA'}
,
{'WorkOrderID': '1699', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '1/1/2016', 'DueDate': '12/31/2016', 'ClosedDate': '12/31/2016', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': 'Meetings (P&M) FY16'}
,
{'WorkOrderID': '1700', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '1/1/2016', 'DueDate': '12/31/2016', 'ClosedDate': '12/31/2016', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY16'}
,
{'WorkOrderID': '1701', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '1/1/2016', 'DueDate': '12/31/2016', 'ClosedDate': '12/31/2016', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY16'}
,
{'WorkOrderID': '1702', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '1/1/2016', 'DueDate': '12/31/2016', 'ClosedDate': '12/31/2016', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY16'}
,
{'WorkOrderID': '1703', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '1/1/2016', 'DueDate': '12/31/2016', 'ClosedDate': '12/31/2016', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY16'}
,
{'WorkOrderID': '1704', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '1/1/2016', 'DueDate': '12/31/2016', 'ClosedDate': '12/31/2016', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY16'}
,
{'WorkOrderID': '1705', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '1/1/2017', 'DueDate': '6/30/2017', 'ClosedDate': '6/30/2017', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': 'Meetings (P&M) FY17'}
,
{'WorkOrderID': '1706', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '1/1/2017', 'DueDate': '6/30/2017', 'ClosedDate': '6/30/2017', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY17'}
,
{'WorkOrderID': '1707', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '1/1/2017', 'DueDate': '6/30/2017', 'ClosedDate': '6/30/2017', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY17'}
,
{'WorkOrderID': '1708', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '1/1/2017', 'DueDate': '6/30/2017', 'ClosedDate': '6/30/2017', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY17'}
,
{'WorkOrderID': '1709', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '1/1/2017', 'DueDate': '6/30/2017', 'ClosedDate': '6/30/2017', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY17'}
,
{'WorkOrderID': '1710', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '1/1/2017', 'DueDate': '6/30/2017', 'ClosedDate': '6/30/2017', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY17'}
,
{'WorkOrderID': '1711', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '7/1/2017', 'DueDate': '6/30/2018', 'ClosedDate': '6/30/2018', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': 'Meetings (P&M) FY18'}
,
{'WorkOrderID': '1712', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '7/1/2017', 'DueDate': '6/30/2018', 'ClosedDate': '6/30/2018', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY18'}
,
{'WorkOrderID': '1713', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '7/1/2017', 'DueDate': '6/30/2018', 'ClosedDate': '6/30/2018', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY18'}
,
{'WorkOrderID': '1714', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '7/1/2017', 'DueDate': '6/30/2018', 'ClosedDate': '6/30/2018', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY18'}
,
{'WorkOrderID': '1715', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '7/1/2017', 'DueDate': '6/30/2018', 'ClosedDate': '6/30/2018', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY18'}
,
{'WorkOrderID': '1716', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '7/1/2017', 'DueDate': '6/30/2018', 'ClosedDate': '6/30/2018', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY18'}
,
{'WorkOrderID': '1717', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': ' to track meetings under P&M', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': '7/6/2019', 'Notes': 'WO to track meetings for P&M.', 'ProjectName': ''}
,
{'WorkOrderID': 'Created in error.  Not necessary.', 'EmployeeID': 'Meetings (P&M) FY19', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1718', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': ' to track Annual Time', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': '7/6/2019', 'Notes': 'WO to track Annual Time.', 'ProjectName': 'Annual Time FY19'}
,
{'WorkOrderID': '1719', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': ' to track Comp Time', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': '7/6/2019', 'Notes': 'WO to track Comp Time.', 'ProjectName': 'Comp Time FY19'}
,
{'WorkOrderID': '1720', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': ' to track Holiday Time', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': '7/6/2019', 'Notes': 'WO to track Holiday Time.', 'ProjectName': 'Holiday Time FY19'}
,
{'WorkOrderID': '1721', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': ' to track Leave Without Pay', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': '7/6/2019', 'Notes': 'WO to track Leave Without Pay.', 'ProjectName': 'Leave Without Pay FY19'}
,
{'WorkOrderID': '1722', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': ' to track Sick Time', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': '7/6/2019', 'Notes': 'WO to track Sick Time.', 'ProjectName': 'Sick Time FY19'}
,
{'WorkOrderID': '1723', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '4/12/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '4/12/2006', 'DueDate': '4/26/2006', 'ClosedDate': '4/26/2006', 'Notes': '<! 2006-04-12 09:26:26 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>i started this but nothing is done yet.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>I took a nap today.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-08-30 12:37:15 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '8/29/2007 per Liz Crouse, this was cancelled.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'ChartViewer programming in ArcMap', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1724', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '4/12/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '4/12/2006', 'DueDate': '4/14/2006', 'ClosedDate': '4/14/2006', 'Notes': '<! 2006-04-12 07:46:11 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'John wants us to modify his Illustrator  files for his new Insar web page. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-04-12 09:57:46 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'John wants an HTML web page designed to post on the web using his AI mockup.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-04-', 'EmployeeID': 'Design Insar web page', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1725', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/12/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '4/12/2005', 'DueDate': '4/12/2005', 'ClosedDate': '4/12/2005', 'Notes': 'Dead number', 'ProjectName': 'Dead Number'}
,
{'WorkOrderID': '1726', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/19/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '4/19/2006', 'DueDate': '4/21/2006', 'ClosedDate': '4/21/2006', 'Notes': '<! 2006-05-03 09:28:52 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>layout list of sponsors and scholarship recipients with nice graphic of Mackay statue then plot and mount on foam core</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Two hours spent cartographic services</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'MSESE Scholarship and Sponsors poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1727', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/3/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/3/2006', 'DueDate': '5/31/2006', 'ClosedDate': '5/31/2006', 'Notes': '<! 2006-05-03 11:55:04 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Scan/edit/print at high quality 32 aerial photos for mappers', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Stockton Well Quad air photos', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1728', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/8/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/8/2006', 'DueDate': '5/8/2007', 'ClosedDate': '5/8/2007', 'Notes': '<! 2006-05-08 09:15:07 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>typeset and publish</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-27 11:04:17 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'drafts reviewed by Dick 7/25, drafts reviewed by Jon 7/26, to Copy Center 7/27,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-14 11:20:57 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'received 8/10/06,', 'EmployeeID': 'Major Mines 2005 SP P-17', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1729', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/16/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/16/2006', 'DueDate': '5/31/2006', 'ClosedDate': '5/31/2006', 'Notes': '<! 2006-05-16 10:37:38 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare figures for PowerPoint&nbsp;presentation&nbsp;from NV Fault Map and Pyramid Lake&nbsp;map that Gary is preparing. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-05-17 10:11:29 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Changed color of lines and added new shapefil', 'EmployeeID': 'Figures for PPT presentation', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1730', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/11/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/11/2006', 'DueDate': '6/30/2006', 'ClosedDate': '6/30/2006', 'Notes': '<! 2006-05-17 07:15:40 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Support on 3D mapping and assistance to Mark Walker&#39;s students involved with research on a small pond in the South Lake Tahoe area of the influence of Dog poop draining into this pond. He is asking for GIS Support in mapp', 'EmployeeID': 'Dog Poop project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1731', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/17/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/17/2006', 'DueDate': '6/6/2006', 'ClosedDate': '6/6/2006', 'Notes': '<! 2006-05-17 09:35:06 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Download from the web the data and organize the data on a CD</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-05 14:40:54 pattiw >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (maintenance)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'OF 06-4 Creat a CD for The Timing and Evolution of Cenozoic Extensional Normal Faulting in Southern Tobin Range, pershing County, Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1732', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/18/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/18/2006', 'DueDate': '5/18/2007', 'ClosedDate': '5/18/2007', 'Notes': '<! 2006-05-18 09:23:10 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Geology map', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-08 10:36:11 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Final draft of text to Dick 8/8,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-05 15:10:06 pattiw >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from Map Creation to Maps per L Crouse (maintenance)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Sant Renia Fields Quad geology map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1733', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/23/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/23/2006', 'DueDate': '5/26/2006', 'ClosedDate': '5/26/2006', 'Notes': '<! 2006-05-23 08:53:42 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Export faults for the Nixon &amp; Wadsorth maps to a single shapefile. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-05-23 08:55:53 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Liz exported her Nixon faults and put in the Nixon_Wadsworth --&gt; FAULTSONLY folder on the L driv', 'EmployeeID': 'Nixon & Wadsworth faults', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1734', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/30/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/30/2006', 'DueDate': '6/2/2006', 'ClosedDate': '6/2/2006', 'Notes': '<! 2006-05-30 10:29:11 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Put together poster using Jon&#39;s guidelines and files provided. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-30 14:25:06 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>File is out on web, and Charlotte as sent out an email release, but keeping work order open until we', 'EmployeeID': 'Poster for Division of Minerals - White Pine County', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1735', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/31/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '5/31/2006', 'DueDate': '5/31/2007', 'ClosedDate': '5/31/2007', 'Notes': '<! 2006-05-31 11:14:09 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>GIS data editing and management of data.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Data is located on the Library Geothermal &#34;T&#34; drive.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-06-06 08:19:51 glj >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2 account numbers are&#58;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1320 114 1668</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1320 11', 'EmployeeID': 'Geothermal GIS project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1736', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/13/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '6/13/2006', 'DueDate': '8/25/2006', 'ClosedDate': '8/25/2006', 'Notes': '<! 2006-06-12 11:14:45 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'typeset and print', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-13 12:14:36 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '.pdf files to Copy Center 1-17-07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-13 12:16:18 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>draft approved 2-7-07</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-13 12:20:42 jhursh /*EC*', 'EmployeeID': 'The Nevada Mineral Industry 2005', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1737', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/13/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '6/13/2006', 'DueDate': '7/1/2006', 'ClosedDate': '7/1/2006', 'Notes': '<! 2006-06-12 11:43:07 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Make edits and print 40 copies in color', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-15 12:30:50 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Approved by Dick 6/15, to Kinko&#39;s 6/15,</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-07 10:32:16 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Proof made 6/14, approved by Jon ', 'EmployeeID': 'NPS Field Trip Guide', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1738', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/12/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '6/12/2006', 'DueDate': '7/12/2006', 'ClosedDate': '7/12/2006', 'Notes': '<! 2006-06-13 07:29:08 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Convert Illustrator file to GIS Layers. Original Illustrator files found on NBMG PUB Zip disk # 1.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Data is on Library drive&#92;statemap&#92;2006&#92;0498_Reveille</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Gary set folders', 'EmployeeID': 'State Map Project (Reveille Map 104)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1739', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/20/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '6/20/2006', 'DueDate': '7/20/2006', 'ClosedDate': '7/20/2006', 'Notes': '<! 2006-06-20 08:43:13 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert Illustrator file to GIS Layers', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 14:40:06 pattiw /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (maintenance)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-08-31 14:21:57 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Project cancelled.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map Map 106 Fire Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1740', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/20/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '6/20/2006', 'DueDate': '6/30/2006', 'ClosedDate': '6/30/2006', 'Notes': '<! 2006-06-20 10:21:07 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Design poster using ArcView generated maps, captions and tables&nbsp;provided by Ron, etc.&nbsp;that is similar to the White Pine County Poster (w/o # 1734)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-22 14:42:27 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1st draft comp', 'EmployeeID': 'Poster for Division of Minerals - Pershing County', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1741', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/20/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '6/20/2006', 'DueDate': '6/30/2006', 'ClosedDate': '6/30/2006', 'Notes': '<! 2006-06-20 10:23:31 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Design poster using ArcView generated maps, captions, &amp; tables provided by Ron, etc. that is similar to the White Pine County poster (w/o # 1734)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-06-22 14:41:42 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1st draft complete', 'EmployeeID': 'Poster for Division of Minerals - Lyon County', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1742', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/19/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '6/19/2006', 'DueDate': '6/30/2006', 'ClosedDate': '6/30/2006', 'Notes': '<! 2006-06-21 16:37:30 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'register mining claims to the Township and Range information', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 15:09:46 pattiw /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from Map Creation to Maps per L Crouse (maintenance)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-02-14 11:24:43 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Eureka County Mining Claims location map for MSESE', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1743', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/3/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '7/3/2006', 'DueDate': '7/30/2006', 'ClosedDate': '7/30/2006', 'Notes': '<! 2006-07-03 08:44:49 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Convert Illustrator file to GIS layers for State Map 2006,</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Files are located on gary12/D-drive/workspace/655Castle Mountain</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-05 14:39:44 pattiw >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data ', 'EmployeeID': 'State Map 2006 - Map 108 Castle Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1744', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/5/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '7/5/2006', 'DueDate': '8/1/2006', 'ClosedDate': '8/1/2006', 'Notes': '<! 2006-07-05 10:19:26 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Edit and print 80 aerial photographs', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Lahontan Mountains statemap 2006', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1745', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/12/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '7/12/2006', 'DueDate': '7/12/2006', 'ClosedDate': '7/12/2006', 'Notes': '<! 2006-07-12 11:23:57 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'scan text for Map 101 and Map 105 and create .pdf', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-13 16:11:33 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'to Dick 7/12/06, done. Archived 7/13/06.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-07-13 16:27:02 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Archived on CD218 and BCD218</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Map 101 and M105 text to .pdf', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1746', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/14/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '7/14/2006', 'DueDate': '8/14/2006', 'ClosedDate': '8/14/2006', 'Notes': '<! 2006-07-14 11:07:16 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Retrieve information from publications so D.D. Lapointe can develop Earthcache activity', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-07-14 11:08:07 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Information on several topics e-mailed to D.D. 7/14/06', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-14 11:25:26', 'EmployeeID': 'Earthcache information for DD', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1747', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/25/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '7/25/2006', 'DueDate': '8/25/2006', 'ClosedDate': '8/25/2006', 'Notes': '<! 2006-07-25 15:17:21 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Initial data folder is found on the Library drive&#92;statemap&#92;2006&#92;0820MormanJackPass</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-05 14:39:19 pattiw >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (mainte', 'EmployeeID': 'State Map 2006 (Morman Jack Pass)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1748', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/25/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '7/25/2006', 'DueDate': '8/25/2006', 'ClosedDate': '8/25/2006', 'Notes': '<! 2006-07-25 15:19:32 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data located on the Library drive', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 14:38:59 pattiw /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to GIS_Services per L Crouse (maintenance)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-08-31 14:23:18 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Project cancelled.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 (Mount Moriah_', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1749', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/25/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '7/25/2006', 'DueDate': '8/25/2006', 'ClosedDate': '8/25/2006', 'Notes': '<! 2006-07-25 15:21:53 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data located on the Library drive', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-05 14:38:38 pattiw >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from GIS_Data to&nbsp;GIS_Services per L Crouse (maintenance)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 (FS 20 Little Horse Canyon)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1750', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/8/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/8/2006', 'DueDate': '8/8/2007', 'ClosedDate': '8/8/2007', 'Notes': '<! 2006-08-08 10:40:18 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert the following publications to .pdf form for the web&#58; FS-16 text, FS-17 text, B110, R49, SP33 IM proceedings', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-08 11:46:46 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'and B111', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-04-02 12:06:28 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>B110, B1', 'EmployeeID': 'Convert older pubs to .pdf', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1751', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/9/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/9/2006', 'DueDate': '8/9/2007', 'ClosedDate': '8/9/2007', 'Notes': '<! 2006-08-09 15:04:09 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>reprint estimates on NPS4, 6, 8, 9, 12,13,16, and Field trip guidebook</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-04-23 08:57:54 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'received from Copy Center 1-4-07, all copies made from hard copy originals, no digital archive, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Nevada Petroleum Society reprints', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1752', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/9/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/9/2006', 'DueDate': '8/9/2007', 'ClosedDate': '8/9/2007', 'Notes': '<! 2006-08-09 15:22:52 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>reformat word file into a table for publishing</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-16 10:30:19 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'draft to John Bell 8/11/06, approved by John 8/14/06, .pdf to John 8/14/06, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-05 15:10:39 pattiw >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Chan', 'EmployeeID': 'John Bell Mono-Inyo Craters radiocarbon data', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1753', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/11/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/11/2006', 'DueDate': '9/8/2006', 'ClosedDate': '9/8/2006', 'Notes': '<! 2006-08-11 14:27:24 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'layout poster 4&#39;x8&#39;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-02-14 11:26:34 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'to Lisa 8/21/06, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Great Basin Center for Geothermal Energy poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1754', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/14/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/14/2006', 'DueDate': '9/14/2006', 'ClosedDate': '9/14/2006', 'Notes': '<! 2006-08-15 07:44:44 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Create a digital page sized map for the selected area from the USGS MF-2260 Monte Cristo Range geologic map on a 1&#58;24,000 base.&nbsp; Scan and redigitize the geology.&nbsp; Place lat/long and or UTM grid ticks.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prepare map of Monte Cristo Range/Blair Junction for EarthCache', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1755', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/15/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/15/2006', 'DueDate': '9/15/2006', 'ClosedDate': '9/15/2006', 'Notes': '<! 2006-08-15 07:46:49 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert the Geothermal map M141 to ArcGIS using excel files attached to email 08/14/06 from Lisa. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-05 15:08:52 pattiw /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from Map Update to Maps per L Crouse (maintenanc', 'EmployeeID': 'Convert M141 to ArcMap', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1756', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/29/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/29/2006', 'DueDate': '10/15/2006', 'ClosedDate': '10/15/2006', 'Notes': '<! 2006-08-29 08:08:33 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'The old geology on the Ivanpah Valley area individual 24,000 geologic maps that are OF needs to be replaced with the geology in the Ivanpah_u83_final.mdb from the Library drive in Kyle_House/Ivanpah_Project, using the same', 'EmployeeID': 'Replace geology in 24K Ivanpah area OF maps', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1757', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/15/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/15/2006', 'DueDate': '9/15/2006', 'ClosedDate': '9/15/2006', 'Notes': '<! 2006-08-29 08:17:06 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Charge $38 per hour.&nbsp; Waiting for Linda Newman to get a better scan from Storey County original, then I need to georeference it and perhaps reprint it.&nbsp; Tiffany has already scanned&nbsp;(per John&#39;s first requ', 'EmployeeID': 'Georeference John Benips map of Virginia Gold Hill and Devils Gate mining district', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1758', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/10/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/10/2006', 'DueDate': '9/7/2006', 'ClosedDate': '9/7/2006', 'Notes': '<! 2006-08-29 08:38:20 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Need to convert STATEMAP figures to GIS.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 proposal figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1759', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/29/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/29/2006', 'DueDate': '9/6/2006', 'ClosedDate': '9/6/2006', 'Notes': '<! 2006-08-29 08:50:05 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>from goldfield area in nye county into esmeralda and mineral county vicinity of hawthorne.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>any plans to convert&nbsp;1 x 2 degree sheets of walker&nbsp;and tonopah USGS pubs to digital to clean it u', 'EmployeeID': 'Nevada State Geologic map --OF first??', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1760', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/9/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/9/2006', 'DueDate': '9/1/2006', 'ClosedDate': '9/1/2006', 'Notes': '<! 2006-08-29 09:21:01 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'I am going to need the following digital orthoquad airphotos &nbsp;for &nbsp;&nbsp;the &nbsp;Jerritt Project to cover the extremities of the map area, &nbsp;&nbsp;which the &nbsp;mine&#39;s &nbsp;orthophoto does not cover.', 'EmployeeID': 'Jerritt Canyon DOQQs reprojected to Jerritt Grid', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1761', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/8/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/8/2006', 'DueDate': '9/1/2006', 'ClosedDate': '9/1/2006', 'Notes': '<! 2006-08-29 09:27:38 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Liz,<BR><BR>A month or so ago, John Bell asked you to scan a copy of an old map of the Lahontan Mtn area. We need to have that map georeferenced to use in our Lahontan Mtn map project. Could you evalute the quality of the ', 'EmployeeID': 'georeference Carson Lake 15 Quad', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1762', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/1/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2006', 'DueDate': '9/7/2006', 'ClosedDate': '9/7/2006', 'Notes': '<! 2006-08-29 09:32:18 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Put together the digitizing Priority 2 portion of the STATEMAP 2007 proposal due Nov 2, 2006.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Figure out how much per map.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Find out how much we can use for match.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Find out how many maps.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Find', 'EmployeeID': 'STATEMAP 2007 proposal digitizing project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1763', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/30/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/30/2006', 'DueDate': '10/15/2006', 'ClosedDate': '10/15/2006', 'Notes': '<! 2006-08-29 09:39:12 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Put together the outline by October 15th.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-05 14:35:29 pattiw >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Changed Services Required from Journal Article to Figures per L Crouse (maintenance)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'NBMG Cartographic procedure manual OF', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1764', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/9/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/9/2006', 'DueDate': '9/1/2006', 'ClosedDate': '9/1/2006', 'Notes': '<! 2006-08-29 09:47:20 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Ask Jon about&#58; getting a bigger hard drive<BR>for the &#34;Rocket Scanner Controller; upgrading the &#34;Scanner 3&#34; (Tanya&#39;s)<BR>computer; upgrading &#34;Scanner 2&#34; (Marli&#39;s old computer) and giving ', 'EmployeeID': 'Upgrade computer equipment for Scanning Project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1765', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/22/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/22/2006', 'DueDate': '9/15/2006', 'ClosedDate': '9/15/2006', 'Notes': '<! 2006-08-29 09:48:34 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Would anyone in Cartography have time to lighten the background on our file for OF96-6, Oil and gas map? If not, we will just wait. The map used to have a white background and now the copy we print from the Web (no, not on', 'EmployeeID': 'Lighten background for OF96-6 Oil and Gas map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1766', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/18/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/18/2006', 'DueDate': '4/15/2008', 'ClosedDate': '4/15/2008', 'Notes': '<! 2006-08-29 09:53:33 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Committee will determine which maps/themes to include.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Jack and I are on a hunt for a price estimate.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Bear can do hardcover binding/printing.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Meeting 8/30/06 9am-10&#58;30am 401 SEM.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Will hav', 'EmployeeID': 'Nevada Atlas Book project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1767', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2006', 'DueDate': '9/15/2006', 'ClosedDate': '9/15/2006', 'Notes': '<! 2006-08-29 09:58:48 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Had meeting with Jon to discuss how to reprint vs. photocopy.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Decided to reprint with Bear, 4000 copies.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Getting&nbsp;detailed bid&nbsp;from Bear for reprinting B111.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-08-2', 'EmployeeID': 'Bulletin 111 Carlin Reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1768', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/30/2005', 'WorkOrderDescription': 'NULL', 'StartDate': '7/30/2005', 'DueDate': '8/15/2005', 'ClosedDate': '8/15/2005', 'Notes': '<! 2006-09-01 08:51:05 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-Put Kristen&#39;s word doc of State Micrographics CDs into Access and create a look-up form for QAers to use.&nbsp; They use it for look ups only, no additions or edits.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-Access .mdb file (complet', 'EmployeeID': 'State Micrographics Look-Up Form', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1769', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/1/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '3/1/2006', 'DueDate': '6/1/2006', 'ClosedDate': '6/1/2006', 'Notes': '<! 2006-09-01 09:10:29 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-Put Marli&#39;s word docs into Access &amp; create a system for Tiffany to track her backups with least amount of possibility for error.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-.mdb file on Tiffany&#39;s computer.&nbsp; Tiffany is the ', 'EmployeeID': 'Flat File CD Backups Database (MD_Backups)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1770', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/30/2005', 'WorkOrderDescription': 'NULL', 'StartDate': '7/30/2005', 'DueDate': '8/1/2006', 'ClosedDate': '8/1/2006', 'Notes': '<! 2006-09-01 09:23:31 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-Move Kristen&#39;s spreadsheet to Access - eventually tie in GEOINDEX.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-.mdb file given to Kristen 7/14 and documentation given to KS, MH &amp; LC.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-09-01 09:27:22 mauldin /*EC*', 'EmployeeID': 'QA progress Database (MD_QAprog)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1771', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/1/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2006', 'DueDate': '9/1/2006', 'ClosedDate': '9/1/2006', 'Notes': '<! 2006-09-01 09:39:26 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-move PCfile GEOINDEX to Access so Martha can more easily QA &amp; make revisions to DB.&nbsp; After Martha is done, Access DB will go back to PCFile for Kristen to finish updates.&nbsp; Later, after Kristen is done,&n', 'EmployeeID': 'GEOINDEX (PCfile) moved to Access temporarily', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1772', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/1/2005', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2005', 'DueDate': '8/1/2007', 'ClosedDate': '8/1/2007', 'Notes': '<! 2006-09-01 11:01:51 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>-Move SCANs.xls to Access for CD backup tracking of mining district files (separate from Flat Files and Folded Flat Maps).&nbsp; Eventually combine with MD_CDbackups.mdb when we have a server. SCANs.xls is very messy..', 'EmployeeID': 'SCANs spreadsheet to Access', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1773', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/6/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '9/6/2006', 'DueDate': '10/31/2006', 'ClosedDate': '10/31/2006', 'Notes': '<! 2006-09-06 11:26:17 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare north half of the Searchlight Quadrangle for Oct. 31, 2006&nbsp; deliverable (STATEMAP 2005).&nbsp; Linework submitted on mylar. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-11-01 06:44:12 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Inset linework and labels subm', 'EmployeeID': 'STATEMAP 2005 - North Half of Searchlight Quadrangle', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1774', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/7/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '9/7/2006', 'DueDate': '10/7/2006', 'ClosedDate': '10/7/2006', 'Notes': '<! 2006-09-08 08:09:20 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Prepare map of Reno &amp; Walker Lake 1&#58;250,000 topos with faults &amp; seismicity&nbsp;that Craig provides; prepare figure(s) to go with map</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-09-12 10:46:21 mauldin >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Never rec&#39;d anything from auth', 'EmployeeID': 'Reno/Walker Lake map and figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1775', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/7/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '9/7/2006', 'DueDate': '9/7/2006', 'ClosedDate': '9/7/2006', 'Notes': 'Dead number', 'ProjectName': 'Dead Number'}
,
{'WorkOrderID': '1776', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/10/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '10/10/2006', 'DueDate': '10/17/2006', 'ClosedDate': '10/17/2006', 'Notes': '<! 2006-10-10 12:26:12 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Slides for Powerpoint for Al Coyner</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-12 14:58:55 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Nine figures e-mailed to Al Coyner 10/12/06', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-11-07 10:36:07 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'created several more MI slides for Al Coyner 11/6, se', 'EmployeeID': 'MI Slides 2005', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1777', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/11/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '10/11/2006', 'DueDate': '10/20/2007', 'ClosedDate': '10/20/2007', 'Notes': '<! 2006-10-18 08:06:15 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Ron gave files to Jennifer on L drive on 10/18/06; Heather working on project.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-10-18 15:32:08 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Heather worked on poster for 3.5 hrs, had problems with files and passed project back', 'EmployeeID': 'Roadless poster for Div. of Minerals', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1778', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/11/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '10/11/2006', 'DueDate': '11/11/2006', 'ClosedDate': '11/11/2006', 'Notes': '<! 2006-10-18 13:00:00 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise w/o 1297 figure', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-10-18 14:40:36 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Reviewed, approved, and delivered to Craig 10/18/06, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Historical and Prehistoric EQs in the Reno area Craig dePolo', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1779', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/2/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '11/2/2006', 'DueDate': '11/30/2006', 'ClosedDate': '11/30/2006', 'Notes': '<! 2006-11-02 08:52:46 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Revamp GBCGE brochure.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Peggy Brown brought Microsoft Publisher file of brochure on thumb drive 10/20/06;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>In prog...</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-11-02 09:00:04 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'needed', 'EmployeeID': 'GBCGE Brochure', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1780', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/30/2005', 'WorkOrderDescription': 'NULL', 'StartDate': '11/30/2005', 'DueDate': '11/30/2006', 'ClosedDate': '11/30/2006', 'Notes': '<! 2006-11-06 13:40:34 arrittc >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'STATEMAP 2005 North half of the Jerritt Canyon Mining District', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'StateMap 2005 Jerritt Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1781', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/30/2005', 'WorkOrderDescription': 'NULL', 'StartDate': '11/30/2005', 'DueDate': '11/30/2006', 'ClosedDate': '11/30/2006', 'Notes': '<! 2006-11-06 13:51:10 arrittc >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'StateMap 2005 Full Seven Lakes Mountain quad geologic map', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'StateMap 2005 Seven Lakes Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1782', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2/1/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2007', 'DueDate': '4/1/2007', 'ClosedDate': '4/1/2007', 'Notes': '<! 2006-11-07 10:51:48 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Hans-Peter Plag bulletin on Geodetic Infrastructure', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-11-07 10:52:48 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Specs faxed to Bear 11/7/06.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-02 08:41:06 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Faxed Bear updated specs to obtain more acc', 'EmployeeID': 'Geodetic Infrastructure Bulletin 112', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1783', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/8/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '11/8/2006', 'DueDate': '12/8/2006', 'ClosedDate': '12/8/2006', 'Notes': '<! 2006-11-08 11:19:27 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Recover PageMaker file from 1997 and resave it in Word so that Paul can make edits for reprint. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Gold from Water SP22', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1784', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/8/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '11/8/2006', 'DueDate': '11/8/2006', 'ClosedDate': '11/8/2006', 'Notes': 'Dead number', 'ProjectName': 'Dead Number'}
,
{'WorkOrderID': '1785', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/5/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '12/5/2006', 'DueDate': '3/31/2007', 'ClosedDate': '3/31/2007', 'Notes': '<! 2006-12-05 09:44:24 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Develop database system for tracking aerial photo scans, set up like Mining District CD index;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2006-12-05 16:35:08 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Discussed w/Kristen what fields and formats for fields/form she would like 1', 'EmployeeID': 'Aerial Photo CD Index', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1786', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/5/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '12/5/2006', 'DueDate': '1/31/2007', 'ClosedDate': '1/31/2007', 'Notes': '<! 2006-12-05 11:58:01 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Text copied from SP19 and e-mailed to Caia Cupito to use for a Mt. Rose scenic byway proposal.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Caia Cupito</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Natural Light</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>174 Eastbrook Way</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Ashland, OR </P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>caia', 'EmployeeID': 'Mt. Rose scenic byway information from SP19 to Caia Cupito', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1787', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/10/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '12/10/2006', 'DueDate': '12/24/2006', 'ClosedDate': '12/24/2006', 'Notes': '<! 2006-12-05 12:05:18 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'typeset sign, print, mount on foam core', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2006-12-08 09:24:29 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'To Connie Parratt 12/7/06, done. 2 Hours', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'MSESE banquet sign for Connie Parratt', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1788', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '12/15/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '12/15/2006', 'DueDate': '1/30/2007', 'ClosedDate': '1/30/2007', 'Notes': '<! 2006-12-07 09:28:51 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>draft poster for Nye county similar to previous posters for White Pine, Lyon, and Pershing counties; Ron will provide files possibly by today (maybe not geothermal figure);&nbsp;they would like draft by Fri 12/15;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Nye County Poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1789', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/20/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '12/20/2006', 'DueDate': '12/30/2006', 'ClosedDate': '12/30/2006', 'Notes': '<! 2006-12-14 10:38:57 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'reprint NPS4, NPS6, NPS8, NPS9, NPS13, and NPS16', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-01-18 10:39:09 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Copies received from Copy Center 1/17/06</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>15 NPS4; 10 NPS6; 10 NPS8; 20 NPS9; 15 NPS13; 10 NPS16</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Nevada Petroleum Society publication reprints', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1790', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '1/5/2007', 'DueDate': '2/5/2007', 'ClosedDate': '2/5/2007', 'Notes': '<! 2007-01-05 09:39:03 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Fix AI figure for submittal to GSA following GSA guidelines. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-05 09:48:30 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Needed today 1/5/06</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-01-05 12:20:59 mauldin >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'File to Kyle;Had to work on figure on Kyle&#39;s', 'EmployeeID': 'GSA Figure', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1791', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/10/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '1/10/2007', 'DueDate': '3/10/2007', 'ClosedDate': '3/10/2007', 'Notes': '<! 2007-01-08 10:36:10 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update figures from 2004; 1 new figure', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Journal figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1792', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/15/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '1/15/2007', 'DueDate': '1/29/2007', 'ClosedDate': '1/29/2007', 'Notes': '<! 2007-01-19 08:13:20 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Pub Sales reprints B62, OF87-6, R17, R50p, etc.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-19 08:16:22 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'B62 .pdf to Copy Center 1/18/07,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-19 09:09:40 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'update publist', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-01-30', 'EmployeeID': 'B62 reprints', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1793', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2/2/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/2/2007', 'DueDate': '2/6/2007', 'ClosedDate': '2/6/2007', 'Notes': '<! 2007-02-02 10:19:02 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2 seismic/geothermal maps of Turkey', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Grant proposal', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1794', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/5/2007', 'DueDate': '2/5/2007', 'ClosedDate': '2/5/2007', 'Notes': '<! 2007-02-05 10:08:58 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Print and bind 50 copies of 2006 NBMG Biennial Report, OFR 2006-20', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-07 12:29:30 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'trouble shoot cover files with Copy Center 2/6/07, all files to Copy Center 2/7/07,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-02-21 ', 'EmployeeID': 'OFR 2006-20 NBMG Biennial Report 2006', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1795', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/7/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/7/2007', 'DueDate': '3/15/2007', 'ClosedDate': '3/15/2007', 'Notes': '<! 2007-02-14 15:46:40 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Figures and photos for two journal articles', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-02 14:36:02 kpizarro /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Two related poster sessions added to this project 3/2/07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-10-03 13:45:24 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Work completed 5/15/2007.&nbsp;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'JOurnal of Vulcanology figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1796', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/16/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/16/2007', 'DueDate': '4/1/2007', 'ClosedDate': '4/1/2007', 'Notes': '<! 2007-02-16 10:46:46 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Scan hand drawn maps.&nbsp; Digitize 11 geologic page-size maps in ArcMap.&nbsp; Integrate colors/unit labels between maps.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Maps have been scanned.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Kris has map with colors.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Caetano Geospheres journal figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1797', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2/16/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/16/2007', 'DueDate': '2/16/2007', 'ClosedDate': '2/16/2007', 'Notes': '<! 2007-02-16 12:17:31 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'format proposal, .pdfs to Jim, done, 2/16/07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-02-21 10:55:25 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Archived on &#34;O&#34; drive and CD &amp; BCD 242', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Faulds structural proposal ', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1798', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/21/2007', 'DueDate': '2/21/2007', 'ClosedDate': '2/21/2007', 'Notes': '<! 2007-02-21 15:31:12 pattiw >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>This is a test ticket to test hyperlink capabilities and retrieval to a test file which is stored in the root directory of the NAS share&#58;&nbsp;&nbsp;<A href="file://\\\\unrnast2.unr.edu\\cartography\\test.txt">&#92;&#92', 'EmployeeID': 'Test Issue - Display HyperLink', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1799', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/22/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/22/2007', 'DueDate': '2/22/2007', 'ClosedDate': '2/22/2007', 'Notes': '<! 2007-02-22 11:24:05 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Print 10 copies of M154 text for pub sales, done, 2-22-07. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-02-22 11:26:58 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'printed from .pdf located in w/o 1693 folder on &#34;O&#34; drive.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'M154 Meadview text copies', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1800', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/23/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/23/2007', 'DueDate': '3/5/2007', 'ClosedDate': '3/5/2007', 'Notes': '<! 2007-02-23 16:23:10 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Five journal figures', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-03-02 14:26:09 kpizarro >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Drafts to author 2/28/07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Journal figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1801', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/27/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '2/27/2007', 'DueDate': '3/27/2007', 'ClosedDate': '3/27/2007', 'Notes': '<! 2007-02-27 10:17:41 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'print 15 copies', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-07 12:13:51 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Camera ready copy and IPO to Copy Center 3-7-07,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-04-19 09:53:36 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>15 copies and camera ready copy received from Copy Center 4/19/07, done.', 'EmployeeID': 'OFR87-6 reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1802', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/6/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/6/2007', 'DueDate': '3/10/2007', 'ClosedDate': '3/10/2007', 'Notes': '<! 2007-03-06 11:45:10 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'make edits to existing figures', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-07-25 09:51:50 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'to Craig 3/22/07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'DePolo Historic and Prehistoric EQs in Western NV map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1803', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/9/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/9/2007', 'DueDate': '4/9/2007', 'ClosedDate': '4/9/2007', 'Notes': '<! 2007-03-09 14:33:18 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'reprint 20 copies,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-12 12:04:45 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '.pdf files and IPO to Copy Center 3/12/07,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-03-28 10:20:00 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '20 copies received from Copy Center 3-28-07, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Report 17 Turquoise Deposits of Nevada reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1804', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/12/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/12/2007', 'DueDate': '4/12/2007', 'ClosedDate': '4/12/2007', 'Notes': '<! 2007-03-12 12:31:11 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'reprint 15 copies of white spiral bound, clear cover report;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-13 12:13:10 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '.pdf files and IPO to Copy Center 3/13/07,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-03-28 10:18:43 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '15 copies received from Copy Center ', 'EmployeeID': 'Report 50, Geophysical Setting of the Pahute Mesa-Oasis Valley', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1805', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/13/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/13/2007', 'DueDate': '3/20/2007', 'ClosedDate': '3/20/2007', 'Notes': '<! 2007-03-14 11:16:44 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Make six B73 Cds with labels for Pub Sales', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-03-29 10:01:30 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Six CDs with labels delivered to Charlotte 3/14/07, done.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Bulletin 73 CD copies for Pub Sales', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1806', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/21/2007', 'DueDate': '3/21/2007', 'ClosedDate': '3/21/2007', 'Notes': '<! 2007-03-22 10:08:58 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>scan 36 pages of SP16 Las Vegas Tour guide for NMA Teachers Workshop fieldguide, done, 3/21/06.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'NMA teachers workshop fieldtrip guidebook, SP16 Las Vegas Tour book .pdf files for 36 pages', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1807', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/22/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/22/2007', 'DueDate': '3/27/2007', 'ClosedDate': '3/27/2007', 'Notes': '<! 2007-03-22 11:49:32 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'print 20 copies of &#34;Minerals in our environment&#34; poster for D.D. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-26 09:17:44 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Jack started, Jennifer finished 3/23/07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-03-28 12:19:54 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'posters picked up by D.D. ', 'EmployeeID': 'Minerals in our environment poster for D.D.', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1808', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/27/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/27/2007', 'DueDate': '4/27/2007', 'ClosedDate': '4/27/2007', 'Notes': '<! 2007-03-27 09:17:12 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '25 copies need of M142 text', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-03-28 10:15:41 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'camera ready copy to Copy Center 3-27-07, 25 copies received from Copy Center 3-28-07, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'M142 Text reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1809', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/26/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/26/2007', 'DueDate': '4/15/2007', 'ClosedDate': '4/15/2007', 'Notes': '<! 2007-03-28 11:32:57 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GGOS project', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Journal figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1810', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/29/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/29/2007', 'DueDate': '3/29/2007', 'ClosedDate': '3/29/2007', 'Notes': '<! 2007-03-29 12:01:13 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '.pdfs to Carl&#39;s blueprinting 3-29-07,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-03-30 11:18:39 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'correction, .pdfs dropped off at Carl&#39;s Blueprinting 3-30-07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-04-04 09:01:50 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'plates picked up from Carl&#39;s ', 'EmployeeID': 'B62 plates reprints', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1811', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '4/3/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/3/2007', 'DueDate': '5/3/2007', 'ClosedDate': '5/3/2007', 'Notes': '<! 2007-04-03 09:27:16 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'printout two large posters with NESC logo and website, laminate one and foam core one', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-04-04 09:00:07 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'two posters dropped off at LamIt, one for foam core and lamination, and one just for la', 'EmployeeID': 'NESC poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1812', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '4/4/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/4/2007', 'DueDate': '6/5/2007', 'ClosedDate': '6/5/2007', 'Notes': '<! 2007-04-04 16:08:33 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise figures from Jim&#39;s old Corel Draw files and prepare for GSA publication standards to be submitted at end of month.&nbsp; Jim locating files. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-04-05 11:44:29 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Jim gave Corel ', 'EmployeeID': 'GSA Special Publication Figures - White Hills', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1813', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/9/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/9/2007', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2007-04-09 10:28:58 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Started copying files from old Zip disks to folder on Jack&#39;s Mac and &#34;O&#34; drive,', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-09-09 11:06:48 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Books delivered to rm 5b on 9/2/2008. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SP16 Geologic Tours in the LV Area Expanded Edition reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1814', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/10/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/10/2007', 'DueDate': '5/10/2007', 'ClosedDate': '5/10/2007', 'Notes': '<! 2007-04-10 10:49:07 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'make corrections to printing dates and phone numbers on staff sheets (last pages),', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-04-11 09:35:33 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'corrections to address and&nbsp;phone numbers made, complete camera-ready copy placed back in archive draw', 'EmployeeID': 'Report 40 Sediment Hosted Precious-Metal Deposits of N. Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1815', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/5/2007', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 06:49:52 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitial conversion to GIS data', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-10-03 14:20:26 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Completed 9/30/2007.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (FS 15 Fraizer Creek)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1816', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/18/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/18/2007', 'DueDate': '9/30/2007', 'ClosedDate': '9/30/2007', 'Notes': '<! 2007-04-12 06:53:49 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (FS 16 Third Butte East)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1817', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/1/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2007', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 06:56:17 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Diigital conversion to GIS data', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (FS 21 Old Mans Canyon)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1818', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/15/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '3/15/2007', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:00:27 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Adam King)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 109 Wonder Mountain)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1819', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/23/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '8/23/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:02:47 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 134 Nelson SW)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1820', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/9/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '10/9/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:04:53 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Cathie. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 135 Willow Creek Reservoir)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1821', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/9/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '10/9/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:07:16 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 136 Willow Creek Reservoir SE)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1822', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/20/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '10/20/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:09:09 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State map 2006 (Map 137 Hiller Mountain)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1823', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/10/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '11/10/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:11:22 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Cathie. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 139 Callville Bay)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1824', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/29/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '11/29/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:13:31 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 140 Government Wash)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1825', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/10/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '1/10/2007', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:15:45 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Adam. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 143 Beaver Peak)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1826', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/1/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:17:49 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-04-12 07:25:15 glj >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Assigned to Bridget/Heather.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 144 Mule Canyon)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1827', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/10/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '1/10/2007', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:19:50 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Adam. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 145 Big Bald Mountain)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1828', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/27/2006', 'WorkOrderDescription': 'NULL', 'StartDate': '11/27/2006', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:22:09 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 146 Frazier Flat and West Half of Moses Rock)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1829', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/4/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '1/4/2007', 'DueDate': '4/30/2007', 'ClosedDate': '4/30/2007', 'Notes': '<! 2007-04-12 07:24:05 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digital conversion to GIS data. Assigned to Heather. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 (Map 147 Verdi Peak)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1830', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '4/16/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/16/2007', 'DueDate': '7/1/2007', 'ClosedDate': '7/1/2007', 'Notes': '<! 2007-04-16 14:29:15 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Edit photos, historical photos, create maps for book, &#34;Progress or Plunder&#58; An environmental companion to Nevada ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'History&#34;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'book; PROGRESS OR PLUNDER, An environmental companion to Nevada history', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1831', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/18/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/18/2007', 'DueDate': '4/20/2007', 'ClosedDate': '4/20/2007', 'Notes': '<! 2007-04-18 10:32:09 kpizarro >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Scan and repair 27 old negatives for info office', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Scan/repair negatives', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1832', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '4/16/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/16/2007', 'DueDate': '4/16/2007', 'ClosedDate': '4/16/2007', 'Notes': '<! 2007-04-18 11:57:10 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'format table for publication', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-04-18 12:01:22 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'To John and approved 4-16-07, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Ground Displacement table', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1833', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/17/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/17/2007', 'DueDate': '5/12/2007', 'ClosedDate': '5/12/2007', 'Notes': '<! 2007-04-18 12:12:24 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update NESC signs for table top display and print mitigation photos', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'NESC mitigation photos and Table Top booth signs', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1834', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '4/19/2007', 'DueDate': '4/19/2007', 'ClosedDate': '4/19/2007', 'Notes': '<! 2007-04-19 10:24:10 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'scan slides, done 4/19/07. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Newberry Mountains slide scans for Faulds', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1835', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/4/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '5/4/2007', 'DueDate': '5/11/2007', 'ClosedDate': '5/11/2007', 'Notes': '<! 2007-05-04 11:42:59 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'revise signs, print, laminate, frame lobby sign', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-07-03 11:13:14 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Hung new signs 7/28/07, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Pub Sales, Info Office, and NBMG lobby new signs', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1836', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/12/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/12/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-12 07:53:05 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Irene will convert to GIS from scanned black/white map. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-22 11:19:20 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/22/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Bedell Flat', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1837', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-14 16:31:53 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Digitize map into GIS</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 09:30:47 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 6/2/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Marlette Lake', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1838', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-14 16:32:53 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Digitize map into GIS</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 10:51:48 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 6/3/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Carson City', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1839', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-14 16:33:46 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 11:28:01 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 6/3/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Genoa', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1840', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-14 16:34:39 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 13:04:43 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/21/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Washoe City', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1841', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/21/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-21 10:42:45 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize and convert to GIS. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 11:04:52 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/21/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Crater Flat', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1842', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/21/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-21 11:48:14 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into a GIS. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-22 11:54:46 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/8/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Bell Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1843', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/21/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-21 11:50:17 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into a GIS. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 10:16:25 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/28/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Moho Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1844', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/21/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-06-21 11:51:15 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into a GIS. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 09:47:20 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/30/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Bell Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1845', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/27/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2007', 'DueDate': '6/29/2007', 'ClosedDate': '6/29/2007', 'Notes': '<! 2007-06-26 09:50:35 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'correction stickers for T3N&nbsp; T2N on the FSM 7, Rice Mountain Quad', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-06-27 11:17:55 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>typeset and printed on full sheet label paper over 400 correction labels, done 6/27/07</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Rice Mt. Quad township correction stickers', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1846', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/2/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2007', 'DueDate': '9/2/2007', 'ClosedDate': '9/2/2007', 'Notes': '<! 2007-07-03 11:36:47 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'layout in bulletin form for web', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-12-05 16:01:30 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Work Order Canceled.&nbsp; Dick Meeuwig completed production.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Santa Rosa-Calico Bulletin', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1847', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/18/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/18/2007', 'DueDate': '7/20/2007', 'ClosedDate': '7/20/2007', 'Notes': '<! 2007-07-18 10:00:41 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Typeset and Layout ad for weather book SP34', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-07-20 10:19:54 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'to Charlotte 7/19/07, .jpg, .tif, and .pdf all provided to Charlotte 7/19/07, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Weather Book Advertisement', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1848', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 07:32:59 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert B/W map to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 09:55:48 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complee 7/28/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Mina', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1849', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 07:43:44 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:07:47 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/29/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Robinson Summit', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1850', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 07:51:47 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 10:46:36 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 7/31/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Camp Douglas', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1851', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 07:58:32 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 11:17:31 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete8/4/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 Diamond Springs', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1852', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 08:04:42 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize map into GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:45:26 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/5/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 State Line Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1853', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 08:19:41 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert AI to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:38:33 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'On Christine&#39;s computer', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:42:03 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'M154 2005', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 09:48:50 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/6/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 AI Meadview North', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1854', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 08:31:21 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert AI to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:37:52 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Files are on Christine&#39;s computer</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:41:40 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'M148 2004', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 11:21:56 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8', 'EmployeeID': 'STATEMAP 2007 AI Dogskin Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1855', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 08:33:28 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert AI to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:41:10 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'FS15 1998', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-09-04 15:54:32 lgoar /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Disregard notes of 7/19/2007 - originally issued in error to Frazier Creek FS15.&nbsp; Changed', 'EmployeeID': 'STATEMAP 2007 Antler Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1856', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 08:35:44 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'convert ai to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:37:17 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'CD 41', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:40:36 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'M138 2003', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 10:04:18 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadatqa complete 8/11/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'STATEMAP 2007 AI Bobs Flat', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1857', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-07-19 08:39:39 crouse >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Convert AI to GIS</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Files are on Christine&#39;s computer</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-07-19 08:40:08 crouse /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'M147', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-09-14 11:54:38 lgoar /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'File name changed to Arrow Canyon NW GQ1776', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 200', 'EmployeeID': 'STATEMAP 2007 Arrow Canyon NW', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1858', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/20/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/20/2007', 'DueDate': '7/27/2007', 'ClosedDate': '7/27/2007', 'Notes': '<! 2007-07-20 11:10:50 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'typeset and take to Tripp Plastics. Signs for Nicholas Hinz, Jordan Hastings, Heather Armeno, and Elizabeth Crouse', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-16 11:54:33 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'signs picked up and paid for with Terri&#39;s credit card ', 'EmployeeID': 'Name signs for new NBMG hires', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1859', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/23/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '7/23/2007', 'DueDate': '9/30/2007', 'ClosedDate': '9/30/2007', 'Notes': '<! 2007-07-24 14:48:43 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Gary, Set up the layout for the authors (3 hrs)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-08-13 07:32:57 glj >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Setup basic layout and placed on the N&#58;&#92;gary&#92;John_Bell&#92;Lahontan_Mts - 3 hrs. 7/26/07</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'State Map 2006 - Lahontan Mts. & Grimes Point Geology', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1860', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/1/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2007', 'DueDate': '9/30/2007', 'ClosedDate': '9/30/2007', 'Notes': '<! 2007-08-07 07:51:09 mauldin >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Prepare Stockton Well map for STATEMAP 2006 deliverable.&nbsp; </P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-07 13:42:44 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Topo with penciled linework, labels and symbols from author outside of NBMG is georeferenced in U', 'EmployeeID': 'STATEMAP 2006 Master Stockton Flat Well', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1861', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/7/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/7/2007', 'DueDate': '10/7/2007', 'ClosedDate': '10/7/2007', 'Notes': '<! 2007-08-07 11:28:02 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Typeset and publish MI-2006', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-01-17 11:17:45 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '137 copies new books rec&#39;d 1/16/2008. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'MI-The Nevada Mineral Industry 2006', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1862', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/9/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/9/2007', 'DueDate': '8/10/2007', 'ClosedDate': '8/10/2007', 'Notes': '<! 2007-08-09 11:24:51 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '10 copies of Map 151 at .5 size', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Map 151-.5 size 10 copies, Shevenell', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1863', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/10/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/10/2007', 'DueDate': '8/17/2007', 'ClosedDate': '8/17/2007', 'Notes': '<! 2007-08-10 13:57:27 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Bringing existing map to NBMG standards.&nbsp; Make changes as noted on map copy.&nbsp;&nbsp;Print (1) map at 1&#58;500,000. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Geothermal Potential Map ', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1864', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/3/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/3/2007', 'DueDate': '9/30/2007', 'ClosedDate': '9/30/2007', 'Notes': '<! 2007-08-10 15:38:35 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Production of Full Jerritt Canyon Geologic Map.&nbsp; State Map 06. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-09-12 11:13:59 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This is a duplicate', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 Jerritt Canyon Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1865', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/13/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/13/2007', 'DueDate': '8/15/2007', 'ClosedDate': '8/15/2007', 'Notes': '<! 2007-08-13 10:33:11 jhursh >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'typeset, layout, advertisement for Nevada Earthquake Safety Council', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-14 11:50:27 jhursh /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>e-mailed &#34;NESCad.ai&#34; file to <A href="mailto:cpostell@iccsafe.org">cpostell@iccsafe.org</A> 8/', 'EmployeeID': 'Nevada Earthquake Safety Council (NESC) advertisement for WSSPC/ICC program', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1866', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/14/2007', 'DueDate': '9/30/2007', 'ClosedDate': '9/30/2007', 'Notes': '<! 2007-08-14 10:11:56 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Prepare proposal for GIS Conversion portion and figures for STATEMAP 08 proposals.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>STEP 1 DUE 08/15/2007.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-08-14 17:23:56 crouse >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Final 15 copies of the map delivered to Jon/Terri on&nbsp;8/15/07.</P', 'EmployeeID': 'STATEMAP 08 Proposal Support', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1867', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/16/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/16/2007', 'DueDate': '9/4/2007', 'ClosedDate': '9/4/2007', 'Notes': '<! 2007-08-16 13:57:43 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Print 22 air photos on heavy semi-gloss paper.&nbsp; Charge for paper and ink. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-09-10 11:31:45 kpizarro >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Deadline extended to 9/14.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Performed color correction before printing.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Complete 9/10/07', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Clark County Mapping - Jean - print 22 air photos', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1868', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/17/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/17/2007', 'DueDate': '9/17/2007', 'ClosedDate': '9/17/2007', 'Notes': '<! 2007-08-17 14:45:46 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update slides from MI 2005 book.&nbsp; Save as .jpg', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-12-10 09:22:36 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Edits made.&nbsp; CD&#39;s made.&nbsp; Saved to .jpg 10/31/2007</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Mineral Industry 2006 Powerpoint Slides', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1869', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/22/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/22/2007', 'DueDate': '2/8/2008', 'ClosedDate': '2/8/2008', 'Notes': '<! 2007-08-21 11:46:22 glj >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This is a demo of a subtask', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-23 13:59:20 lgoar /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update Nevada&#39;s State Hazus database; Provide Earthquake runs for all 17 counties; Produce final report.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-08-23 14:14:07 lgoar /*E', 'EmployeeID': 'Hazus Database Information Update', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1870', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/21/2007', 'DueDate': '8/24/2007', 'ClosedDate': '8/24/2007', 'Notes': '<! 2007-08-22 13:45:30 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Assist with editing and plotting of Adobe Illustrator files. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-08-22 14:57:29 mauldin >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Jack edited Illustrator files and Jennifer printed.&nbsp; Christy took all 4 prints (1 of each map).</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Maps for Governors Renewable Energy Transmission Advisory Committee', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1871', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/21/2007', 'DueDate': '8/31/2007', 'ClosedDate': '8/31/2007', 'Notes': '<! 2007-08-22 15:41:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Set-up server with ESRI and other software</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1st focus&#58;&nbsp; ESRI ARCGIS software</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2nd focus&#58;&nbsp; ESRI Arcserver and SDE software</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>3rd focus&#58;&nbsp; ESRI ARCIMS</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>4th focus&#58;&nbsp; ', 'EmployeeID': 'NBMG Server Set-up and Maintenance', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1872', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/22/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/22/2007', 'DueDate': '12/22/2007', 'ClosedDate': '12/22/2007', 'Notes': '<! 2007-08-23 14:50:34 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize linework; Create final layout for published map. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-10-15 16:07:12 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'No work done.&nbsp; Cancelled.&nbsp;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Fernley East 1&#58;24,000 scale Geologic Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1873', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/23/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/23/2007', 'DueDate': '9/23/2007', 'ClosedDate': '9/23/2007', 'Notes': '<! 2007-08-23 15:40:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Make corrections. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-08-29 12:13:36 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'file to Dick, 8/20/07, done.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Stafflist for Publications', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1874', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/24/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/24/2007', 'DueDate': '9/24/2007', 'ClosedDate': '9/24/2007', 'Notes': '<! 2007-08-24 16:18:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Typeset corrections; prepare photos.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Note&#58;&nbsp; Printing costs paid by NDOM and NMA</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-09-07 08:30:21 jhursh >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Draft given to Dick for review 8/6/07, Draft being sent to Doug Dreisner for review 8/7', 'EmployeeID': 'Major Mines 2006 - NBMG SP P-18', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1875', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/28/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/28/2007', 'DueDate': '9/30/2007', 'ClosedDate': '9/30/2007', 'Notes': '<! 2007-08-28 13:37:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Statemap 2006 new Geologic mapping for Lahontan Mtns and part of Grimes Point quadrangles', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2006 Master for Lahontan Mtns & part of Grimes Point quadrangles', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1876', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/21/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '8/21/2007', 'DueDate': '8/31/2007', 'ClosedDate': '8/31/2007', 'Notes': '<! 2007-08-29 14:10:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Run HAZUS Earthquake models for 17 counties; summarize in chart form.&nbsp; Run HAZUS Flood scenarios for 6 rivers; submit reports to NDEM. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'HAZUS Earthquake & Flood Scenarios for NDEM', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1877', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/5/2007', 'DueDate': '9/30/2007', 'ClosedDate': '9/30/2007', 'Notes': '<! 2007-09-05 08:20:32 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take a small amount of time. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - September', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1878', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/5/2007', 'DueDate': '9/20/2007', 'ClosedDate': '9/20/2007', 'Notes': '<! 2007-09-05 12:27:43 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Reprint GBCGE poster, with minor mods,&nbsp;for the GRC 2007 meeting.&nbsp; Create T-Shirt design. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-09-28 13:43:45 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '6 hours - Poster;&nbsp; 20.5 hours T-Shirt design.&nbsp; $86.40 plotter re-charge', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GBCGE - Poster, modify & reprint and Design T-Shirt', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1879', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/5/2007', 'DueDate': '9/20/2007', 'ClosedDate': '9/20/2007', 'Notes': '<! 2007-09-05 14:38:43 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare two PPT slides, &#34;Trade Deficit&#34; and &#34;When China&#39;s and India&#39;s GDPs,etc&#34;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'PPT Slides (2) for SME 2007', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1880', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/5/2007', 'DueDate': '9/20/2007', 'ClosedDate': '9/20/2007', 'Notes': '<! 2007-09-05 15:26:38 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Organize, laminate, list of items for booth.&nbsp; Paid by NESC. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-09-28 15:25:42 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Hours - 11.25 @ $47; Plotter 48&#34; @ .38 = $18.24', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'WSSPC/ICC Meeting Booth Requirements', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1881', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/6/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/6/2007', 'DueDate': '9/20/2007', 'ClosedDate': '9/20/2007', 'Notes': '<! 2007-09-06 15:33:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1)&nbsp; Field Trip Guide layout - est 4 hrs</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2)&nbsp; Print 30 copies of Desert Peak- Brady map - est 6 hrs</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Field Trip Guide layout and 30 copies Desert Peak-Brady map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1882', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/12/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2007', 'DueDate': '9/13/2007', 'ClosedDate': '9/13/2007', 'Notes': '<! 2007-09-13 09:37:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update and Print the National Cooperative Geologic Mapping Program for Jonathan Price. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap Progress Sheet', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1883', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-14 12:04:47 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion FS1', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 09:59:34 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/14/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 FS1 Bettles Well', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1884', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-14 12:12:40 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion GQ1366', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 10:11:09 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/18/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1366 Brooks Spring', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1885', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-14 15:42:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion M88', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 10:41:12 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/20/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 M88 Buckskin Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1886', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-14 15:55:50 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion GQ1731', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 10:56:09 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/20/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1731 Chief Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1887', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-14 16:01:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion B71', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-23 11:10:43 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/25/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 B71 Derby Dam & Martin Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1888', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/14/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/14/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-14 16:08:52 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion 2Bg', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-24 09:03:06 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/26/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 2Bg Glenbrook', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1889', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-19 11:31:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion GQ1407', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 09:05:50 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/27/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1407 Goldrun Creek', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1890', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-19 11:37:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion GQ1701', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 09:10:58 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 8/28/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1701 Indian Cove', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1891', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-19 11:46:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion GQ1175', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 09:18:03 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 9/2/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1175 Iron Point', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1892', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/19/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-09-19 11:53:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion GQ1672', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 09:25:37 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 9/2/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1672 Jake Creek Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1893', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/19/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/19/2007', 'DueDate': '9/21/2007', 'ClosedDate': '9/21/2007', 'Notes': '<! 2007-09-20 13:30:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Get transmission lines layer from WO#1870 Renewable energy maps Illustrator files and convert to Shapefile. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Convert Transmission Lines to Shapefile', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1894', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/26/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '9/26/2007', 'DueDate': '10/5/2007', 'ClosedDate': '10/5/2007', 'Notes': '<! 2007-09-26 12:09:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Print new map utilizing shaded relief background per details on sample provided. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week Field Trip Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1895', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/1/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2007', 'DueDate': '10/31/2007', 'ClosedDate': '10/31/2007', 'Notes': '<! 2007-10-01 11:57:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take less than 2 hours to complete. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - October', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1896', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/2/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/2/2007', 'DueDate': '10/31/2007', 'ClosedDate': '10/31/2007', 'Notes': '<! 2007-10-02 11:00:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Deliver AI files to Rob Brady for revisions preparatory to GIS Conversion. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Revisions to Iceberg Canyon Quad (OF3-18)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1897', 'EmployeeID': '105600', 'CustomerID': '4048', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/2/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/4/2007', 'DueDate': '12/31/2007', 'ClosedDate': '1/13/2008', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '1898', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/4/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/4/2007', 'DueDate': '10/31/2007', 'ClosedDate': '10/31/2007', 'Notes': '<! 2007-10-04 15:37:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise USGS Statemap 2006 for NBMG Open File Status. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Jerritt Canyon Revisions for OF07-3', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1899', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/4/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/4/2007', 'DueDate': '10/31/2007', 'ClosedDate': '10/31/2007', 'Notes': '<! 2007-10-04 15:43:15 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise USGS Statemap 2006 for NBMG Open File Status. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Lahontan Mtns Revisions for OF07-4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1900', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/5/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/5/2007', 'DueDate': '10/29/2007', 'ClosedDate': '10/29/2007', 'Notes': '<! 2007-10-05 13:33:32 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Support Dr. Sylvester in development of a preliminary GIS geologic map of the Independence Lake &amp; W quarter of Hobart Mills quadrangles, focused on the Sagehen Creek FS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Sagehen Creek Field Station Preliminary Geologic Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1901', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/10/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/10/2007', 'DueDate': '11/19/2007', 'ClosedDate': '11/19/2007', 'Notes': '<! 2007-10-10 14:38:52 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '400 Copies Needed. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-11-14 14:18:06 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Pub Sales billed directly for printing costs on IPO# 380498.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SP5 (Child of the Rocks) Reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1902', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/10/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/10/2007', 'DueDate': '11/19/2007', 'ClosedDate': '11/19/2007', 'Notes': '<! 2007-10-10 14:59:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Exact quantity needed to be determined.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-03-24 08:32:55 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Actual completion 3/20/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'E-16 (Eqs in Nevada) Reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1903', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/11/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/11/2007', 'DueDate': '10/12/2007', 'ClosedDate': '10/12/2007', 'Notes': '<! 2007-10-11 08:41:26 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for final publication as an M-series NBMG map.&nbsp; Ron provided .eps file to be cleaned up in Illustrator for final publication. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<!--/*SC*/ 2007-10-11 15:45:25 mauldin /*EC*/-->', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Draft ready for Dick&#39;s re', 'EmployeeID': 'M162 Petroleum Data Map of Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1904', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/12/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/12/2007', 'DueDate': '11/9/2007', 'ClosedDate': '11/9/2007', 'Notes': '<! 2007-10-12 14:08:38 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Develop a plan for evolving the EJ Crafford Geologic Map of NV and DS 249 into both geodatabase and hard copy products.&nbsp; Consider base layers and additional NBMG produced geologic datasets that need to be incorporated.', 'EmployeeID': 'Plan Development for new NV State Geologic Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1905', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/12/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/12/2007', 'DueDate': '12/31/2007', 'ClosedDate': '12/31/2007', 'Notes': '<! 2007-10-12 14:28:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Complete South Half of Searchlight geologic map for completion as OFR Publication.&nbsp; Closed associated work orders&#58;&nbsp; 1709 - air photos prep for 1773 - N half Searchlight (SM05). ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-10-23 07:29:51 mauldin ', 'EmployeeID': 'Searchlight Quad, South Half Map Completion', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1906', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/16/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/16/2007', 'DueDate': '12/15/2007', 'ClosedDate': '12/15/2007', 'Notes': '<! 2007-10-16 11:16:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize lines and points, generate polygons, incl mods as needed.&nbsp; Layout of final product for completion as OFR publication. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Fernley West, North, Map Completion', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1907', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/16/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/16/2007', 'DueDate': '12/15/2007', 'ClosedDate': '12/15/2007', 'Notes': '<! 2007-10-16 11:57:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize lines and points, generate polygons, incl mods as needed.&nbsp; Layout of final product for completion as OFR publication. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Fernley East Map Completion', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1908', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/18/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/18/2007', 'DueDate': '11/17/2007', 'ClosedDate': '11/17/2007', 'Notes': '<! 2007-10-18 08:48:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Compile logos and identifiers into one folder for easy access and standardization. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Style Guide for Publications', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1909', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/23/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/23/2007', 'DueDate': '11/21/2007', 'ClosedDate': '11/21/2007', 'Notes': '<! 2007-10-23 12:34:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Figure Edits Layout</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'NBMG Report 52 - CO2 Sequestration', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1910', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/30/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/30/2007', 'DueDate': '12/31/2009', 'ClosedDate': '12/31/2009', 'Notes': '<! 2007-10-30 11:20:58 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Research and gather publication status records by starting with NBMG published maps; compile into a pilot IMS project for internal use initially. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prep Work for NBMG Online Publication Inventory', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1911', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/2/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/2/2007', 'DueDate': '11/8/2007', 'ClosedDate': '11/8/2007', 'Notes': '<! 2007-11-02 09:18:31 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare and deliver a presentation of shared GIS capabilities to the Division of Minerals.&nbsp; Includes&#58;&nbsp; 1)A hardcopy of the rev geothermal resources map (former Map 161, now OFR) 2)Demo of the geothermal resour', 'EmployeeID': 'DOM Presentation of Multi-modal Shared GIS Capability', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1912', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/1/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/1/2007', 'DueDate': '11/30/2007', 'ClosedDate': '11/30/2007', 'Notes': '<! 2007-11-02 09:53:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take less than 2 hours to complete. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - November', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1913', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/6/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/6/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-11-06 10:04:22 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion GQ1714', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 13:07:22 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 9/3/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 GQ1714 Weiser Ridge', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1914', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/6/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/6/2007', 'DueDate': '11/20/2007', 'ClosedDate': '11/20/2007', 'Notes': '<! 2007-11-06 10:20:07 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Research all Statemap deliverables, both maps and GIS conversions.&nbsp; Verify publication and submission to USGS Website.&nbsp; Submit those deliverables not already on the site. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Research, Verify and Update Statemap Deliverables thru 2006', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1915', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/6/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/6/2007', 'DueDate': '12/1/2007', 'ClosedDate': '12/1/2007', 'Notes': '<! 2007-11-06 15:20:30 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Reprint 15 copies', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Reprint R40 Sediment-Hosted Precious-Metal Deposits', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1916', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/8/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/8/2007', 'DueDate': '11/15/2007', 'ClosedDate': '11/15/2007', 'Notes': '<! 2007-11-08 14:27:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Using relevant text from the hazard Mitigation plan together with updated HAZUS risk-damage tables and maps of the affected areas, assemble in Word and convert to .pdf as needed.&nbsp; Post as OF07-1 on the Bureau website. ', 'EmployeeID': 'OF07-1 HAZUS Earthquake update', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1917', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/9/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/9/2007', 'DueDate': '12/31/2007', 'ClosedDate': '12/31/2007', 'Notes': '<! 2007-11-09 13:27:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Provide GIS coordination and support for DOM Renewables mapping projects related to renewable energy and power transmission facilities.&nbsp; DOM contact is Christy Morris.&nbsp; Total allocated $6,000.00.&nbsp;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'DOM - GIS Support for Renewables/Transmission Task Force', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1918', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/15/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/15/2007', 'DueDate': '11/25/2007', 'ClosedDate': '11/25/2007', 'Notes': '<! 2007-11-15 10:30:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Using relevant text from the hazard Mitigation plan together with updated HAZUS risk-damage tables and maps of the affected areas, assemble in Word and convert to .pdf as needed. &nbsp;Post as OF07-2 on the Bureau website.<', 'EmployeeID': 'OF07-2 HAZUS Flood update and publication', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1919', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/27/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/27/2007', 'DueDate': '12/30/2007', 'ClosedDate': '12/30/2007', 'Notes': '<! 2007-11-27 14:26:00 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Experiment with installation of Hazus MR3 on Windows XP, Windows Server 2003, and virtual PC&#39;s running Windows XP under Windows Server; also with ESRI ArcGIS service packs 2 and 3.&nbsp; Report results in a succinct ', 'EmployeeID': 'Install Hazus/MR3', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1920', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/27/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/27/2007', 'DueDate': '12/15/2007', 'ClosedDate': '12/15/2007', 'Notes': '<! 2007-11-27 14:38:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Research which technology to write the document in, and&nbsp;what are the capabilities of the various tools for interactive multimedia presentation of the document. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Technology for document on ArcGeology Best Practice', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1921', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/27/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/27/2007', 'DueDate': '1/15/2008', 'ClosedDate': '1/15/2008', 'Notes': '<! 2007-11-27 14:56:43 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Get a pilot piece of words for converting lines and points into polygons using ArcGeology Best Practices and insert that pilot piece into the various technologies that have been identified previously. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prepare a pilot piece of the ArcGeology Best Practices document', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1922', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/27/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/27/2007', 'DueDate': '12/3/2007', 'ClosedDate': '12/3/2007', 'Notes': '<! 2007-11-27 15:05:56 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1 figure required for the N/W AZ Field Trip for the GSA field trip for 3/2008 in Las Vegas.&nbsp; 3 hours maximum approved by Jim Faulds. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2007-12-04 16:16:42 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '3Hrs to be billed.&nbsp; 2.5 Hrs unbillable.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GSA Field Trip figure', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1923', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/30/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/30/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-11-30 11:55:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion 4Bg', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 10:24:16 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 9/15/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 4Bg Mount Rose NE', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1924', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/30/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/30/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-11-30 12:00:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion 1Bg', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 10:32:01 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 9/16/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 1Bg New Empire', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1925', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/30/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/30/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-11-30 12:02:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion 2Ag', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:39:17 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 9/23/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 2Ag South Lake Tahoe', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1926', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/30/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/30/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-11-30 12:05:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion 4Fg', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:49:38 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Metadata complete 10/6/2008</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 4Fg Steamboat', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1927', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/30/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '11/30/2007', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2007-11-30 12:37:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Miscellaneous work done to complete Statemap 2007', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Master GIS Conversion', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1928', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/22/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '10/22/2007', 'DueDate': '10/28/2007', 'ClosedDate': '10/28/2007', 'Notes': '<! 2007-12-03 11:54:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Edit Presentation for GSA 2007.&nbsp; Topic &#34;ArcGeology Field System&#34;.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GSA 2007 Presentation', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1929', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/4/2007', 'WorkOrderDescription': 'NULL', 'StartDate': '12/4/2007', 'DueDate': '12/31/2007', 'ClosedDate': '12/31/2007', 'Notes': '<! 2007-12-04 14:25:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This file to be used for misc jobs that are unbillable and/or take less than 2 hours to complete. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - December', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1930', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/2/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '1/2/2008', 'DueDate': '1/31/2008', 'ClosedDate': '1/31/2008', 'Notes': '<! 2008-01-02 15:06:25 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Unbillable hours for January', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - January', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1931', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/3/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '1/3/2008', 'DueDate': '9/30/2008', 'ClosedDate': '9/30/2008', 'Notes': '<! 2008-01-03 09:50:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Highway 93 book - actual hours thru 12/31/2007 are 698.5', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-01-03 09:53:01 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>This work order supersedes #1582 which was originally opened in Pubstatus.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Highway 93 in Nevada and Arizona', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1932', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/7/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '1/7/2008', 'DueDate': '2/20/2008', 'ClosedDate': '2/20/2008', 'Notes': '<! 2008-01-07 11:29:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Work with Larry Garside to organize a team of geologists and cartographers who will then evaluate the mapdata for the Liz Jones Crafford State map. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-01-08 09:27:21 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This critical evaluation of the Crafford m', 'EmployeeID': 'Evaluation of Mapdata for Liz Crafford Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1933', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/16/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '1/16/2008', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2008-01-16 16:29:00 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1)&nbsp; Train new person on procedure to georeference mining district maps.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2)&nbsp; Develop and implement an ArcGIS servor web application displaying mining district maps with links to .pdf files on the internet', 'EmployeeID': 'DOM Mining District Webmap Application and Training', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1934', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/17/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '1/17/2008', 'DueDate': '2/29/2008', 'ClosedDate': '2/29/2008', 'Notes': '<! 2008-01-17 12:45:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Set-up Win 03 server within Cart &amp; GIS (replacing Gary 13) to support webmapping (ArcGIS server - IMS portion) for DOM Georeferencing and DOM Renewables projects - Split Billing. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-06-04 11:39:15 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '49.5 ho', 'EmployeeID': 'Set-up Webmapping Server', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1935', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/23/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '1/23/2008', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2008-01-23 11:37:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Master work order for BLM Clark County 2008 GIS mapping support, including both GIS conversions and new mapping.&nbsp; Anticipated GIS conversions are Iceberg Canyon and Davis Dam.&nbsp; Anticipated new mapping projects are', 'EmployeeID': 'Clark County 2008 GIS Support Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1936', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2008', 'DueDate': '2/29/2008', 'ClosedDate': '2/29/2008', 'Notes': '<! 2008-02-01 11:21:56 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Unbillable hours for February', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - February', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1937', 'EmployeeID': '105613', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/7/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/8/2008', 'DueDate': '5/7/2008', 'ClosedDate': '3/16/2008', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '1938', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2/11/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/11/2008', 'DueDate': '3/31/2008', 'ClosedDate': '3/31/2008', 'Notes': '<! 2008-02-11 14:29:19 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is to be used to track time spent learning about the web and learning how to maintain the NBMG website.&nbsp; &nbsp;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Training and Maintenance', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1939', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2/11/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/11/2008', 'DueDate': '3/30/2008', 'ClosedDate': '3/30/2008', 'Notes': '<! 2008-02-11 14:43:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1.&nbsp; Rebuild contacts around merged polygons, superimpose faults.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2.&nbsp; Choose unit colors to follow USGS style standards.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>3.&nbsp; Layout with correlation diagrams, using new colors.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>4.&nbsp;', 'EmployeeID': 'Crafford State Geologic Map @ 1&#58;500,000', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1940', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/14/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/14/2008', 'DueDate': '4/4/2008', 'ClosedDate': '4/4/2008', 'Notes': '<! 2008-02-14 14:55:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>B62 - Clark County - 50 copies</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>B73 - Lincoln County - 20 copies</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>These quantities represent a 2 yrs supply</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Reprints of Geology & Mineral Deposits for Clark County & for Lincoln County', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1941', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/21/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/21/2008', 'DueDate': '3/7/2008', 'ClosedDate': '3/7/2008', 'Notes': '<! 2008-02-25 08:54:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'All support for documentation of Wells earthquake of 2/21/2008, including Hazus runs and Website creation and maintenance. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Wells NV 21Feb08 EQ Support', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1942', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/25/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-02-25 09:36:30 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize M97 into GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 10:03:18 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 10/7/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Mineral Hill', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1943', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/25/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-02-25 09:41:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Digitize GQ1186 to GIS</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 10:55:11 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Metadata complete 10/8/2008</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Piper Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1944', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/25/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-02-25 09:46:23 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize GQ1325 to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:01:19 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 10/9/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Rhyolite Ridge', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1945', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/25/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-02-25 09:50:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize GQ1756 to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:29:23 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 10/13/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Round Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1946', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/25/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-02-25 09:52:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize M76 to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:34:05 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 10/14/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Rye Patch Reservoir South', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1947', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '2/25/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-02-25 09:57:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize B92 to GIS', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-27 11:58:19 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Metadata complete 10/15/2008', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2007 Tonopah, Lone Mountain, Klondike, N. Mud Lake', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1948', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/3/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '3/3/2008', 'DueDate': '3/31/2008', 'ClosedDate': '3/31/2008', 'Notes': '<! 2008-03-03 15:03:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Unbillable hours for March', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - March', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1949', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/6/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '3/6/2008', 'DueDate': '3/31/2008', 'ClosedDate': '3/31/2008', 'Notes': '<! 2008-03-06 09:36:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update the Statemap 2007 Fact Sheet with 2008 award information.&nbsp; This document should be converted from InDesign.&nbsp; Team to include Shelly DeLaureal. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Update Statemap 2008 Fact Sheet', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1950', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/6/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '3/6/2008', 'DueDate': '5/16/2008', 'ClosedDate': '5/16/2008', 'Notes': '<! 2008-03-06 10:17:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Scanning, corrections, typeset, layout, prepress, print.&nbsp; (IPO to Acct 1032 to cover printing charges.)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-07-02 10:08:31 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is cancelled.&nbsp; Pub Sales has determined they have approx. one', 'EmployeeID': 'SP6 Mining Claim Procedures 6th Edition Reprint - Cancelled', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1951', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/14/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '3/14/2008', 'DueDate': '4/15/2008', 'ClosedDate': '4/15/2008', 'Notes': '<! 2008-03-14 14:32:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Work with Nick to create revised inset map for Searchlight (1905); in the process, define suitable transfer mechanisms between VR2 and ArcGeology.&nbsp; Optionally, present results at DMT08.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>ESTIMATED COST&#58;&nb', 'EmployeeID': 'Revised Searchlight Inset Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1952', 'EmployeeID': '105611', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/13/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '3/18/2008', 'DueDate': '6/11/2008', 'ClosedDate': '7/12/2008', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '1953', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '3/27/2008', 'DueDate': '4/15/2008', 'ClosedDate': '4/15/2008', 'Notes': '<! 2008-03-27 10:00:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Develop poster(s) of Energy and Mineral Resources in Mineral-Esmeralda-Lyon-Douglas (MELD) 4-county area, in support of pending land bills.&nbsp; Produce via GIS from list of published sources attached.&nbsp; Use Webmapping', 'EmployeeID': 'Mineral-Esmeralda-Lyon-Douglas (MELD) County Posters', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1954', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '3/27/2008', 'DueDate': '5/10/2008', 'ClosedDate': '5/10/2008', 'Notes': '<! 2008-03-27 11:13:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Assist with production of figures for publication in AZGS publication due 5/15/2008.&nbsp; Initial draft due early April; final in early May.&nbsp; Use AI10.&nbsp; Interface with Chris Henry in Jim Fauld&#39;s absence.&nbsp', 'EmployeeID': 'Figures for Walker Lane Evolution Article', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1955', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '4/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-04-02 15:12:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Unbillable hours for April', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - April', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1956', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2008', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2008-04-02 16:32:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is to be used to track time spent learning about the web and learning how to maintain the NBMG website. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Training and Maintenance - 2nd Qtr 2008', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1957', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/2/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/2/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-04-07 10:03:34 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert Davis Dam to ArcGeology format for release as M-series. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-05-26 10:12:52 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Still preliminay.&nbsp; No Open-file number assigned. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Davis Dam GIS Conversion', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1958', 'EmployeeID': '105613', 'CustomerID': '4046', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/2/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/8/2008', 'DueDate': '7/1/2008', 'ClosedDate': '7/13/2008', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '1959', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '4/8/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/8/2008', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2008-04-08 13:45:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Install ArcGIS 9.3 Beta and begin Testing Desktop and Workstation applications.&nbsp; Team includes&#58;&nbsp; Gary Johnson, Jordan Hastings, Jennifer Mauldin. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'ArcGIS 9.3 Beta Installation and Testing', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1960', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '4/9/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/9/2008', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2008-04-22 13:58:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Coordinate with ESRI on emplementation of the FGDC2006 Cartographic Standards as representations on ArcGIS 9.2 &amp; 9.3. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'FGDC 2006 Representations', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1961', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/22/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/22/2008', 'DueDate': '5/30/2008', 'ClosedDate': '5/30/2008', 'Notes': '<! 2008-04-22 14:55:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise / Re-issue Geothermal Resources of Nevada as both hardcopy (3rd edition) and online (M141) map products. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Nevada Geothermal Resources - Update of Map141 (3rd edition)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1962', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/22/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/22/2008', 'DueDate': '9/30/2008', 'ClosedDate': '9/30/2008', 'Notes': '<! 2008-04-22 15:28:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Issue Significant Mineral Deposits of Nevada as both hardcopy (M new) and online (W new) map products.&nbsp; Time Frame&#58;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1.&nbsp; 10 hours from MELD in-process - complete by 4/30/2008</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2.&nbsp; 20 hours ', 'EmployeeID': 'Significant Mineral Deposits', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1963', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/29/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '4/29/2008', 'DueDate': '4/30/2008', 'ClosedDate': '4/30/2008', 'Notes': '<! 2008-04-30 10:47:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'SP27 &#34;Living with Earthquakes in Nevada&#34; minor edits for publication in the Sunday edition of the Reno Gazette Journal. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SP27 Edits for RGJ Sunday Edition', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1964', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2008', 'DueDate': '5/31/2008', 'ClosedDate': '5/31/2008', 'Notes': '<! 2008-05-02 08:54:50 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Unbillable hours for May', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - May', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1965', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/7/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '5/7/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-05-07 12:04:25 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert 23 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; Those maps cover 23 7.5-minute quads in the greater Las Vegas and Reno urban areas and the highest priority areas of rural ', 'EmployeeID': 'Statemap 2008 GIS Conversion Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1966', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/13/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '5/13/2008', 'DueDate': '5/31/2008', 'ClosedDate': '5/31/2008', 'Notes': '<! 2008-05-13 12:38:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Create a website, within the NBMG website, that has the (4) tour guide books as web editions.&nbsp; Site&nbsp;to start out as main home page with covers of all 4 books, leading to a TOC with a few pages/images/maps from the', 'EmployeeID': 'Web Tourbooks Pilot Project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1967', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/21/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '5/21/2008', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2008-05-21 11:25:43 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order to include any work done to prepare for the upcoming Vigilant Guard exercise.&nbsp; Also covers&nbsp;the set-up of an Internal web site.&nbsp; Linda Goar and volunteer Janell Woodward also assigned. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Vigilant Guard Exercise', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1968', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/1/2008', 'DueDate': '6/30/2008', 'ClosedDate': '6/30/2008', 'Notes': '<! 2008-06-04 12:14:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is to track unbillable hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1969', 'EmployeeID': '105600', 'CustomerID': '4057', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/2/2008', 'DueDate': '8/25/2008', 'ClosedDate': '8/16/2008', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '1970', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/9/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/9/2008', 'DueDate': '6/17/2008', 'ClosedDate': '6/17/2008', 'Notes': '<! 2008-06-13 14:12:38 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Create interactive maps for 12 different themes linked to current mxd files (data is on library server). ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Interactive Maps for Great Basin Center for Geothermal Energy', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1971', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/18/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/18/2008', 'DueDate': '7/1/2008', 'ClosedDate': '7/1/2008', 'Notes': '<! 2008-06-18 14:44:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Combine Chris Henry&#39;s Illustrator digitizing and existing maps, then crop &amp; generalize for figure to go with Ninehill Map.&nbsp; Charges not to exceed $250.00. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Ninehill Figure', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1972', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/23/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/23/2008', 'DueDate': '8/15/2008', 'ClosedDate': '8/15/2008', 'Notes': '<! 2008-06-23 12:19:07 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize the Pequop Mountains and Wood Hills maps (Camilleri, unpub) into ArcGeology v1; include cross sections. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-07-02 10:45:00 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>These maps will be published separately.&nbsp; Therefore this work order w', 'EmployeeID': 'Digitize Northern Pequop Mtns and Wood Hills - Cancelled', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1973', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/24/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/24/2008', 'DueDate': '7/31/2008', 'ClosedDate': '7/31/2008', 'Notes': '<! 2008-06-24 09:59:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare the annual Major Mines 2007 publication from attached markup.&nbsp; Also expect new photos from M. Visher (NDOM).&nbsp; Initially, cross-check against the active mines database maintained by D. Davis. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines of Nevada 2007 - P-19', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1974', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/24/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/24/2008', 'DueDate': '8/1/2008', 'ClosedDate': '8/1/2008', 'Notes': '<! 2008-06-24 13:30:14 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare GIS coverage of map for 2008 deliverable.&nbsp; Convert geodatabase to ArcGeology - Prepare layout - Publish as NBMG open file. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-01-27 09:20:21 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Published as OF08-3', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Spirit Mountain SE (GIS)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1975', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/24/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/24/2008', 'DueDate': '8/1/2009', 'ClosedDate': '8/1/2009', 'Notes': '<! 2008-06-24 13:43:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Gass Peak SW (New)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1976', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/24/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/24/2008', 'DueDate': '8/1/2009', 'ClosedDate': '8/1/2009', 'Notes': '<! 2008-06-24 13:50:07 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Ireteba Peaks (New)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1977', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/24/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/24/2008', 'DueDate': '8/1/2009', 'ClosedDate': '8/1/2009', 'Notes': '<! 2008-06-24 14:00:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Jean (New)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1978', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/24/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/24/2008', 'DueDate': '8/1/2009', 'ClosedDate': '8/1/2009', 'Notes': '<! 2008-06-24 14:04:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare files for geologists; perform GIS and Cartographic layout work. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-02-17 12:19:00 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Work Order is canceled - to be issued at a later date.&nbsp;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM08 Clarkmap Ute (New)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1979', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/25/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-25 12:02:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR00-8, location 40116 E7, Rural Nevada.&nbsp; Priority #16', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Bateman Spring ', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1980', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/25/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-25 12:29:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP159, location 39116 H3, Rural Nevada.&nbsp; Priority #17', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Cooper Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1981', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/25/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-25 13:24:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1745, location 37114 G7, Rural Nevada.&nbsp; Priority #22', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Deadman Spring SE', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1982', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/25/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/25/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-25 15:36:52 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-27, location 39118 G8, Reno Area.&nbsp; Priority #9', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Desert Peak-Brady', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1983', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 10:07:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP106, location 35114 F6, Las Vegas Area.&nbsp; Priority #2', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Fire Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1984', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 11:07:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR00-9, location 38119 H6, Reno Area.&nbsp; Priority #10', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Gardnerville', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1985', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 11:27:15 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS NBMG R87-8, location 39119 G8, Reno Area.&nbsp; Priority #11', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Granite Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1986', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 11:53:43 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-12, location 36115 C8, Las Vegas Area.&nbsp; Priority #3', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Horse Springs', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1987', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 11:58:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1710, location 39118 D3, Rural Nevada.&nbsp; Priority #20', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 La Plata Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1988', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 12:08:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1587 (15&#39;), location 37117 D5, Rural Nevada.&nbsp; Priority #24', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Magruder Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1989', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 12:18:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-13, location 38119 H7, Reno Area.&nbsp; Priority #12', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Minden', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1990', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '6/26/2008', 'ClosedDate': '6/26/2008', 'Notes': '<! 2008-06-26 12:26:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS OF96-521, location 36114 F6, Las Vegas Area.&nbsp; Priority #4', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Moapa West', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1991', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 12:32:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP157, location 39119 F4, Reno Area.&nbsp; Priority #13', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Olinghouse', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1992', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 14:52:14 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1752, location 37114 E7, Rural Nevada.&nbsp; Priority #23', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pahroc Spring SE', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1993', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/26/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/26/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-26 14:56:42 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize to GIS NBMG OFR99-14, location 36115 B8, Las Vegas Area.&nbsp; Priority #5', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pahrump', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1994', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 08:22:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS NBMG FS8, location 39118 F4, Rural Nevada.&nbsp; Priority #19', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pintail Bay', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1995', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 08:33:28 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS NBMG FS9, location 39118 D2, Rural Nevada.&nbsp; Priority #21', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Pirouette Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1996', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 09:11:42 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1770 (1997), location 36114 F2, Las Vegas Area.&nbsp; Priority #6', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Riverside', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1997', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 09:16:17 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1765, location 37114 H3, Rural Nevada.&nbsp; Priority #18', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Rose Valley', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1998', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 10:15:32 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG MAP155, location 41116 A4, Rural Nevada.&nbsp; Priority #15', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Santa Renia Fields', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1999', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 10:20:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-11, location 36116 B1, Las Vegas Area.&nbsp; Priority #7', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Sixmile Spring', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2000', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 10:25:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion of NBMG OFR03-17, location 39115 H5, Reno Area.&nbsp; Priority #14', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Sutcliffe', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2001', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2008-06-27 10:33:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS OF 93-716, location 36114 E2, Las Vegas Area.&nbsp; Priority #8', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Whitney Pocket', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2002', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2008', 'DueDate': '10/1/2008', 'ClosedDate': '10/1/2008', 'Notes': '<! 2008-06-27 10:41:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'A)&nbsp; Preliminary set-up of folder structure, geodatabase, base materials.&nbsp; Note&#58;&nbsp; Map will probably be published as an NBMG Open-file. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-07-07 16:16:41 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is canceled. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Lee-Allen Geothermal Mapping', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2003', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2008', 'DueDate': '7/31/2008', 'ClosedDate': '7/31/2008', 'Notes': '<! 2008-07-01 16:08:52 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is to track unbillable hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - July', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2004', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2008', 'DueDate': '9/30/2008', 'ClosedDate': '9/30/2008', 'Notes': '<! 2008-07-02 08:21:14 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is to be used to track all time spent maintaining the NBMG website. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd Qtr - 08', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2005', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/2/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2008', 'DueDate': '8/15/2008', 'ClosedDate': '8/15/2008', 'Notes': '<! 2008-07-02 11:05:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize the Pequop Mountains map (Camilleri, unpub) into ArcGeology v1; include cross sections. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Digitize Northern Pequop Mountains', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2006', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/2/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2008', 'DueDate': '8/15/2008', 'ClosedDate': '8/15/2008', 'Notes': '<! 2008-07-02 11:08:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize Wood Hills map (Camilleri, unpub) into ArcGeology v1; include cross sections. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Digitize Wood Hills', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2007', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/10/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '7/10/2008', 'DueDate': '8/8/2008', 'ClosedDate': '8/8/2008', 'Notes': '<! 2008-07-29 10:55:47 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise ArcGeology v1.2 data model per attached specifications. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'ArcGeology v1.3 Data Model', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2008', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/17/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '7/17/2008', 'DueDate': '6/30/2009', 'ClosedDate': '6/30/2009', 'Notes': '<! 2008-07-29 11:09:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Design/Develop and implement new 2.0 dynamic version of Bureau public website using new technology compatible with UNR support.&nbsp; Work to be done in phases per paperwork attached. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'NBMG Web 2.0 Design and Development', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2009', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/29/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '7/29/2008', 'DueDate': '8/29/2008', 'ClosedDate': '8/29/2008', 'Notes': '<! 2008-07-29 13:07:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Development of Ground Water Recharge estimates in Nevada with emphasis on using long-term precipitation data.&nbsp; Time estimates&#58;&nbsp; Web - 5 hours; Printed - 50 hours.&nbsp; Direct bill&#58;&nbsp; Southern Nevada W', 'EmployeeID': 'Development of Ground Water Recharge Estimates in Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2010', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2008', 'DueDate': '8/31/2008', 'ClosedDate': '8/31/2008', 'Notes': '<! 2008-08-01 14:43:17 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - August', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2011', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/18/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '8/18/2008', 'DueDate': '12/12/2008', 'ClosedDate': '12/12/2008', 'Notes': '<! 2008-08-18 08:18:46 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Work to be done in two phases.&nbsp; A)&nbsp; Update slides, save as .jpg or .pp - est time - 8 hrs.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>B)&nbsp; Produce Web only MI2007 - est time - 60 hrs.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Mineral Industry 2007 and Powerpoint Slides', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2012', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/18/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '8/18/2008', 'DueDate': '12/31/2008', 'ClosedDate': '12/31/2008', 'Notes': '<! 2008-08-18 13:50:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>(A)&nbsp; Provide website and webmapping support to the RETAAC Phase II effort via a combination of Google and Cartograph services.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>(B)&nbsp; Provide final publication support for the RETAAC Phase II report.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'RETAAC II - Support', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2013', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/27/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '8/27/2008', 'DueDate': '10/15/2008', 'ClosedDate': '10/15/2008', 'Notes': '<! 2008-09-02 16:01:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Reprint PC7 - Geologic; PC5 - Icky; plus possible new postcards.&nbsp; Minimum quantities.&nbsp; Pub-Sales to be billed directly for printing costs. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Postcard Reprints ', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2014', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/2/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/2/2008', 'DueDate': '9/30/2008', 'ClosedDate': '9/30/2008', 'Notes': '<! 2008-09-02 16:13:18 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - September', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2015', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/2/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/2/2008', 'DueDate': '12/31/2008', 'ClosedDate': '12/31/2008', 'Notes': '<! 2008-09-09 13:41:42 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Perform Pilot Phase of Southern Washoe County geologic map compilation, per task list enclosed. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Southern Washoe County Compilation - Pilot', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2016', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/9/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2008', 'DueDate': '10/31/2008', 'ClosedDate': '10/31/2008', 'Notes': '<! 2008-09-09 13:49:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Refine and streamline M and E (Minerals and Energy) webmap in support of pending land bills. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-06-22 14:27:01 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Project CANCELED. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'M and E (Minerals and Energy) Webmap', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2017', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/9/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2008', 'DueDate': '10/15/2008', 'ClosedDate': '10/15/2008', 'Notes': '<! 2008-09-09 14:07:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Produce Minerals and Energy Resource poster for Nye County following model of MELD poster.&nbsp; This will be first of a folio of such posters for each county. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Nye County Minerals and Energy Poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2018', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/10/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/10/2008', 'DueDate': '9/17/2008', 'ClosedDate': '9/17/2008', 'Notes': '<! 2008-09-10 10:25:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Typeset, print, laminate the following 6 posters for the NBMG booth @ MINEXPO&#58;&nbsp; </P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1)&nbsp; 10 Reasons poster update&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4)&nbsp; &#34;N&#34; lo', 'EmployeeID': 'Posters for MINEXPO', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2019', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/12/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2008', 'DueDate': '9/19/2008', 'ClosedDate': '9/19/2008', 'Notes': '<! 2008-09-15 09:23:56 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1)&nbsp; Make (2) copies each of 5 DVD&#39;s.&nbsp; Total 10 @ $5 each.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2)&nbsp; Make (2) prints each of 6 photo&#39;s.&nbsp; Glossy photo paper est 44&#34; @ $.44/inch.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Long Valley Photos', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2020', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/12/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2008', 'DueDate': '9/19/2008', 'ClosedDate': '9/19/2008', 'Notes': '<! 2008-09-15 10:45:32 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Develop turn-key web banner and site with signups, information. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week 08 Web Postings', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2021', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/15/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/15/2008', 'DueDate': '9/30/2008', 'ClosedDate': '9/30/2008', 'Notes': '<! 2008-09-15 12:48:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Develop a webmap application the shows UNR land holdings in the context of M and E. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-11-26 08:52:36 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Work completed in October. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'University Lands Webmap', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2022', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/15/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/15/2008', 'DueDate': '10/15/2008', 'ClosedDate': '10/15/2008', 'Notes': '<! 2008-09-15 14:06:31 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1)&nbsp; Research and purchase hardware - est 2 hrs.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2)&nbsp; Coordinate with Chris on installation of operating system win server 2003 and related hardware -&nbsp; </P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;&nbsp;&nbsp;&nbsp; est 1 hr.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<', 'EmployeeID': '2008 NBMG Web Server Set-up', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2023', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/15/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/15/2008', 'DueDate': '11/15/2008', 'ClosedDate': '11/15/2008', 'Notes': '<! 2008-09-15 14:17:23 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Develop a generalized, small-scale geologic map of the Wells area for use in the Wells Earthquake report. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2011-05-20 15:37:56 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Actual closed date - 5/20/2011</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Wells Area Geologic Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2024', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/17/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/17/2008', 'DueDate': '11/30/2008', 'ClosedDate': '11/30/2008', 'Notes': '<! 2008-09-17 15:19:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Run Hazus for earthquakes on the closest Quaternary fault to the center of each major town in NV including all 17 county seats plus (15) cities listed separately.&nbsp; These runs should be for Magnitudes of 5.0, 5.5, 6.0, ', 'EmployeeID': 'Hazus Earthquake Scenarios', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2025', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2008', 'DueDate': '10/31/2008', 'ClosedDate': '10/31/2008', 'Notes': '<! 2008-10-02 09:29:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - October', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2026', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/30/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '9/30/2008', 'DueDate': '10/3/2008', 'ClosedDate': '10/3/2008', 'Notes': '<! 2008-10-02 09:46:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Make edits to existing poster. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-10-08 12:05:50 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Billed 7 hrs @ $45/hr plus $43.20 for plotter paper', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Great Basin Center for Geothermal Energy Poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2027', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/6/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '10/6/2008', 'DueDate': '10/30/2008', 'ClosedDate': '10/30/2008', 'Notes': '<! 2008-10-06 12:30:19 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Statemap 2007 - Kyle House, Jim Faulds', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM07 Spirit Mountain NW, North Half', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2028', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2008', 'DueDate': '12/31/2008', 'ClosedDate': '12/31/2008', 'Notes': '<! 2008-10-09 16:02:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is to be used to track all time spent maintaining the NBMG website. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th Qtr - 08', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2029', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/20/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '10/20/2008', 'DueDate': '10/30/2008', 'ClosedDate': '10/30/2008', 'Notes': '<! 2008-11-14 15:01:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare proposal for GIS Conversion portion of Statemap 2009. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2009 GIS Proposal', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2030', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '11/1/2008', 'DueDate': '11/30/2008', 'ClosedDate': '11/30/2008', 'Notes': '<! 2008-11-14 15:39:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable work. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - November', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2031', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/3/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '11/3/2008', 'DueDate': '4/3/2010', 'ClosedDate': '4/3/2010', 'Notes': '<! 2008-11-14 15:50:23 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Not planning to publish until Statemap deliverable, but could possibly move to Open-File status during this work order. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-08-14 10:32:01 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Balance of work to be done in Statemap 2009 Acct #10LN', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Cortez/Caetano Caldera Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2032', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/6/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '11/6/2008', 'DueDate': '12/31/2008', 'ClosedDate': '12/31/2008', 'Notes': '<! 2008-11-25 16:03:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare the Zehner &amp; al. (200*) Geothermal Potential Map, for release by NBMG as&nbsp;OF08-1.&nbsp; This will be a web-only .pdf with print-on-demand paper copies. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-04-09 14:25:38 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Released as OF09-1. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Geothermal Potential Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2033', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/14/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '11/14/2008', 'DueDate': '5/30/2009', 'ClosedDate': '5/30/2009', 'Notes': '<! 2008-11-26 09:42:29 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '1) Migrate geodatabase to ArcGeology 2) Set-up files for Steve to work from 3) Guide/assist Steve with edits 4) Perform advanced edits 5) Finalize data/Cartography for publication as M-Series. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Partially funded by GSN', 'EmployeeID': 'Flowery Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2034', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/14/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '11/14/2008', 'DueDate': '5/30/2009', 'ClosedDate': '5/30/2009', 'Notes': '<! 2008-11-26 09:42:29 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Master Work Order for BLM Clark County 2009 GIS mapping support, including both GIS conversions and new mapping. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Clark County 2009 GIS Support Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2035', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/24/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '11/24/2008', 'DueDate': '12/2/2008', 'ClosedDate': '12/2/2008', 'Notes': '<! 2008-12-01 15:47:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '(5) Figures for Turkey Geothermal Project.&nbsp; Must be complete by end of business on 12/2/08. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2008-12-10 14:17:29 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Additional hours OK per J. Faulds. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Turkey Geothermal Project Figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2036', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/1/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2008', 'DueDate': '12/31/2008', 'ClosedDate': '12/31/2008', 'Notes': '<! 2008-12-01 15:54:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-01-05 12:17:21 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '14 hours total unbilled for the month plus 7 hours billed. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - December', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2037', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/23/2008', 'WorkOrderDescription': 'NULL', 'StartDate': '12/23/2008', 'DueDate': '1/30/2009', 'ClosedDate': '1/30/2009', 'Notes': '<! 2008-12-29 10:27:22 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Layout in InDesign then post final layout to web. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-02-04 12:09:23 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Archived - zipped at N&#58;&#92;_back&#92;work', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SP-22 Gold From Water Reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2038', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2009', 'DueDate': '1/31/2009', 'ClosedDate': '1/31/2009', 'Notes': '<! 2009-01-05 12:29:28 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - January', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2039', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/7/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '1/7/2009', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2009-01-08 10:30:08 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare Grimes Point as a Statemap 2008 Open File starting from Lahontan Mountains OF07-4 which includes the Eastern portion of the Grimes Point quad. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-01-08 10:31:47 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Compilation to be done by J. Bell; Set-', 'EmployeeID': 'SM08 - Grimes Point Geologic Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2040', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2009', 'DueDate': '3/30/2009', 'ClosedDate': '3/30/2009', 'Notes': '<! 2009-01-08 10:54:46 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is to be used to track all time spent maintaining the NBMG website. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 1st Qtr - 09', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2041', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2009', 'DueDate': '2/28/2009', 'ClosedDate': '2/28/2009', 'Notes': '<! 2009-02-04 11:20:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-03-04 11:07:48 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'There was one billing for 1 hour @ $45 - paid by credit card. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - February', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2042', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2009', 'DueDate': '5/1/2009', 'ClosedDate': '5/1/2009', 'Notes': '<! 2009-02-04 11:42:15 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'As part of Clarkmap, perform cartography and prepare layout following NBMG standards, so map can go to review. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM09 Devils Throat (Legacy)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2043', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2/13/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '2/13/2009', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2009-02-20 09:19:46 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise LahontanMountains quadrangle to reflect new geology; put in simple layout for review.&nbsp; Resume from wo #1899. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Lahontan Mountains Revision (OF 07-4, R2)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2044', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2/18/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '2/18/2009', 'DueDate': '3/30/2009', 'ClosedDate': '3/30/2009', 'Notes': '<! 2009-02-20 09:29:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare a layout for the converted to Arc Minden Open File so it can be released as a new version of the same Open File Report number. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-05-08 14:16:50 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'IPO398700', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Minden Revision (OF03-13, R2', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2045', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/24/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '2/24/2009', 'DueDate': '3/15/2009', 'ClosedDate': '3/15/2009', 'Notes': '<! 2009-03-03 15:29:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare a layout for the converted to Arc McTarnahan Hill OFR so it can be released as a new version of the same OFR number.&nbsp; Cross sections and correlation will need to be converted from AI. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'McTarnahan Hill Revision', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2046', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/26/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '2/26/2009', 'DueDate': '3/17/2009', 'ClosedDate': '3/17/2009', 'Notes': '<! 2009-03-03 16:28:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'DOM requested 600 more copies printed.&nbsp; Bill for printing thru Pub Sales. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines 2007 Reprint', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2047', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '3/1/2009', 'DueDate': '3/31/2009', 'ClosedDate': '3/31/2009', 'Notes': '<! 2009-03-04 10:32:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - March', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2048', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/10/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '3/10/2009', 'DueDate': '9/30/2009', 'ClosedDate': '9/30/2009', 'Notes': '<! 2009-03-19 08:41:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare website for auth in-progress files (and possibly review files).&nbsp; Include author resources and other information as necessary.&nbsp; Assist with compilation and layout of final report.&nbsp;', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Wells Earthquake Report', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2049', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/19/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '3/19/2009', 'DueDate': '3/23/2009', 'ClosedDate': '3/23/2009', 'Notes': '<! 2009-03-19 09:43:55 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Revise Flotation Time Figure per the attached. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2009-04-07 12:38:01 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'IPO398171', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Flotation Project Figure', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2050', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/19/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '3/19/2009', 'DueDate': '3/31/2009', 'ClosedDate': '3/31/2009', 'Notes': '<! 2009-03-23 11:24:30 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'The first stage of the VRM layer will be the seamless stitching together of all the Nevada districts VRM data.&nbsp; The topology rules will be no overlaps and no gaps.&nbsp; There should not be any attempt to edge match th', 'EmployeeID': 'VRM Map for BLM', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2051', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2009', 'DueDate': '4/30/2009', 'ClosedDate': '4/30/2009', 'Notes': '<! 2009-04-02 11:54:38 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - April', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2052', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2009', 'DueDate': '6/30/2009', 'ClosedDate': '6/30/2009', 'Notes': '<! 2009-04-02 12:30:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track all time spent maintaining the NBMG website. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 2nd Qtr - 09', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2053', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/8/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '4/8/2009', 'DueDate': '5/31/2009', 'ClosedDate': '5/31/2009', 'Notes': '<! 2009-04-16 14:11:50 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Chris Henry and Jim Faulds modifications to Ninehill map and regional figure for submittal to online scientific journal.&nbsp; (Geospheres)', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Ninehill Map and Figure Finalization', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2054', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '4/17/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '4/17/2009', 'DueDate': '8/30/2009', 'ClosedDate': '8/30/2009', 'Notes': '<! 2009-04-23 14:11:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Modify and complete 1&#58;12K inset, finalize layout and cartography for review.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1/2 (40 hrs) from 1320 114 10HSand 1/2 (40 hrs) from 1320 114 10JU.&nbsp; Budget total $3,600.00.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM09 Prepare Searchlight for Review', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2055', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '5/31/2009', 'ClosedDate': '5/31/2009', 'Notes': '<! 2009-05-05 08:53:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>This work order is issued to track unbillable and projects completed in less than 2 hours.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - May', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2056', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/4/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/4/2009', 'DueDate': '6/30/2009', 'ClosedDate': '6/30/2009', 'Notes': '<! 2009-05-05 12:44:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Scan and georeference 20 mylar maps from BLM.&nbsp; Time should not exceed 30 minutes per map.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Payment to be via credit card.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Scan & Georeference BLM Maps', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2057', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/13/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/13/2009', 'DueDate': '5/22/2009', 'ClosedDate': '5/22/2009', 'Notes': '<! 2009-05-13 12:31:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update current Factsheet to include Statemap 2009 information. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Factsheet Update Incl SM09', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2058', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/15/2009', 'DueDate': '10/28/2009', 'ClosedDate': '10/28/2009', 'Notes': '<! 2009-05-15 10:25:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Prepare geologic map for statemap deliverable and NBMG open-file.&nbsp; Compilation to be done by K. House; set-up and cartography to be done by Cart and GIS.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Lower Walker River SH', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2059', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/15/2009', 'DueDate': '6/30/2009', 'ClosedDate': '6/30/2009', 'Notes': '<! 2009-05-15 10:50:23 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Set-up ArcGIS server/ArcSDE on GIS3 under Windows Server 2008, for general use. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'ArcSDE Set-up', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2060', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/15/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-05-15 13:05:18 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Convert 19 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; See list attached.&nbsp; Each conversion will have a work order number assigned. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2010-12-07 15:30:43 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>767 ho', 'EmployeeID': 'SM09 GIS Conversion Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2061', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '6/1/2009', 'DueDate': '6/30/2009', 'ClosedDate': '6/30/2009', 'Notes': '<! 2009-06-01 15:07:07 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2062', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-02 12:36:50 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data Migration&nbsp;NBMG OF00-7, location 40116-F6, Rural area, Lander County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Argenta', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2063', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-02 12:54:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion NBMG FS13, location 41117-B4, Rural area, Humboldt County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Delvada Spring', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2064', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-02 14:22:22 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data Migration Conversion NBMG OF06-16, location 39119-C5, Reno area, Storey/Lyon County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Flowery Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2065', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/3/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '6/3/2009', 'DueDate': '7/1/2009', 'ClosedDate': '7/1/2009', 'Notes': '<! 2009-06-05 14:35:47 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1 - Conceptual drawing</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1 - Line 3d figure to digitize</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1 - Point data chart to clean-up</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2 - Image figures to clean-up</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>&nbsp;</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>Make all figures professional publication quality using GSA g', 'EmployeeID': 'Figures for Science Magazine', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2066', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/3/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '6/3/2009', 'DueDate': '8/31/2009', 'ClosedDate': '8/31/2009', 'Notes': '<! 2009-06-05 14:41:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Scan and digitize 7 cross sections from hand drawn copies and make poly&#39;s that overlap / so some poly&#39;s could be turned off as needed and poly&#39;s underneath could still be shown. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Cross Section Digitizing', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2067', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-05 16:02:42 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1174, location 40117-H4, Rural area, Humboldt County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Golconda', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2068', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-05 16:13:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data Migration Conversion NBMG OF99-4, location 39119-F6, Reno area, Washoe County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Griffith Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2069', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/15/2009', 'DueDate': '6/30/2009', 'ClosedDate': '6/30/2009', 'Notes': '<! 2009-06-22 14:03:42 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Develop a master database design for geospatial point-data, suitable for the prospective minerals and geothermal energy conflation projects, per the attached specifications.&nbsp; Work produced for John Muntean and Lisa She', 'EmployeeID': 'Minerals and Energy Database Design', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2070', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-30 12:13:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS MF2157, location 41119-C3, Rural area, Washoe/Humboldt County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 High Rock Lake', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2071', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-30 12:19:56 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS NBMG FS5, location 39118-E2, Rural area, Churchill County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Job Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2072', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-30 13:49:52 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion NBMG OF03-14, location 36116-C1, Las Vegas area, Nye County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Last Chance Range', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2073', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-06-30 14:36:31 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data Migration Conversion NBMG OF99-5, location 39119-A6, Reno area, Douglas County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 McTarnahan Hill', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2074', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2009', 'DueDate': '7/31/2009', 'ClosedDate': '7/31/2009', 'Notes': '<! 2009-07-08 13:59:35 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - July', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2075', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/2/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2009', 'DueDate': '9/30/2009', 'ClosedDate': '9/30/2009', 'Notes': '<! 2009-07-08 14:09:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track all time spent maintaining the NBMG website. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd Qtr - 09', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2076', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2009', 'DueDate': '10/31/2009', 'ClosedDate': '10/31/2009', 'Notes': '<! 2009-07-08 15:52:31 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>1)&nbsp; Prepare a rough draft for deliverable due on 7/15/2009.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>2)&nbsp; Map to be complete by 10/31/2009.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Desert Queen', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2077', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2009', 'DueDate': '8/15/2009', 'ClosedDate': '8/15/2009', 'Notes': '<! 2009-07-08 16:18:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Using Excel data provided by Chris Henry, create an animated map that will be easy to update in the future. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Geology / GIS Animation', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2078', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2009', 'DueDate': '12/31/2009', 'ClosedDate': '12/31/2009', 'Notes': '<! 2009-07-09 09:05:40 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare a manual of step-by-step procedures for geos, cartographers, etc. to follow to efficiently produce a geologic map.&nbsp; Other topics to be included as necessary. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2011-04-08 12:13:54 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Files stored in ', 'EmployeeID': 'Cartography and GIS Cookbook Manual', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2079', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/7/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/7/2009', 'DueDate': '7/9/2009', 'ClosedDate': '7/9/2009', 'Notes': '<! 2009-07-09 09:27:14 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Create a Web application to show mineral deposits', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Reno 100K Minerals Database', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2080', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/8/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/8/2009', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2009-07-09 09:42:31 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Set-up the SDE database.&nbsp; Teach Dave Davis and DD how to validate and/or move MRDS point locations.&nbsp; Maintain the SDE database. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2010-04-07 11:18:14 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Corrected the amount from $6825 to $9555.&nbsp; T', 'EmployeeID': 'Update NV MRDS Database Locations', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2081', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/8/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/8/2009', 'DueDate': '8/1/2009', 'ClosedDate': '8/1/2009', 'Notes': '<! 2009-07-09 10:11:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Research possible GIS conversion locations for the statemap 2010 proposal.&nbsp; Goal is 100 locations proposed so that 60 may be selected. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2010 GIS Proposal', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2082', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 08:18:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data Migration NBMG Map 152, location 39119, Reno area, Washoe County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Nixon Area', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2083', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 08:52:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<P>GIS Conversion NBMG OF03-22, location 40116-G8, Rural area, Lander County.</P>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Russells', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2084', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 09:12:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion NBMG OF03-10, location 39119-H6, Reno area, Washoe County', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Tule Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2085', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 09:20:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Data Migration Conversion NBMG Map 153, location 39119-F3, Reno area, Washoe County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Wadsworth', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2086', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 09:26:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS GQ1117, location 40116-G3, Rural area, Eureka County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Welches Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2087', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 10:12:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS Unpublished Map Western Humboldt County, Rural area, Humboldt County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Western Humboldt County', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2088', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 11:28:22 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS MF2029, location 41119-D3, Rural area, Humboldt County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yellow Hills East', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2089', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 11:34:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS USGS MF2038, location 41119-D4, Rural area, Washoe/Humboldt County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yellow Hills West', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2090', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 11:39:31 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion NBMG OF03-8, location 38119-H2, Reno area, Lyon County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yerington', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2091', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-07-10 11:43:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitize into GIS NBMG Map 77, location 38119, Reno area, Lyon County. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Yerington District (also Mt. Rose 15-min)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2092', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/29/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/29/2009', 'DueDate': '8/31/2009', 'ClosedDate': '8/31/2009', 'Notes': '<! 2009-07-29 15:07:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare the annual Major Mines 2008 publication from the attached markup from Doug Driesner.&nbsp; Also, expect new photos from M. Visher (NDOM).&nbsp; NDOM to pay the printing charges. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Major mines of Nevada - 2008 - P-20', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2093', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/29/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/29/2009', 'DueDate': '9/15/2009', 'ClosedDate': '9/15/2009', 'Notes': '<! 2009-07-29 15:17:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Migrate files from old formats, update with any pending edits, capture GPS coordinates; add GPS coordinates as appendix and print copies (quantity to be determined) for pub sales.&nbsp; Pub Sales to absorb the printing cost', 'EmployeeID': 'Hwy 50 Reprint - SP26', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2094', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/30/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/30/2009', 'DueDate': '8/7/2009', 'ClosedDate': '8/7/2009', 'Notes': '<! 2009-08-07 11:33:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map with South half of map added onto North half to submit a full map as a Clarkmap deliverable. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM09 Spirit Mountain NW', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2095', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/30/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/30/2009', 'DueDate': '8/31/2009', 'ClosedDate': '8/31/2009', 'Notes': '<! 2009-08-07 11:44:00 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Set-up web page, sign up forms, links from Bureau home page (button) waivers, other ESW pages and possibly create a road log map. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week Support', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2096', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2009', 'DueDate': '8/31/2009', 'ClosedDate': '8/31/2009', 'Notes': '<! 2009-08-07 11:48:40 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track unbillable and projects completed in less than 2 hours. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - August', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2097', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/28/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '7/28/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-08-14 10:48:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Goal is to publish as M-Series. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Cortez Geo Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2098', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/14/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '8/14/2009', 'DueDate': '9/30/2009', 'ClosedDate': '9/30/2009', 'Notes': '<! 2009-08-14 11:08:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare poster similar to MELD post and Nye County template poster with data and panels specified by author. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Northern Nye County Poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2099', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/14/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '8/14/2009', 'DueDate': '9/7/2009', 'ClosedDate': '9/7/2009', 'Notes': '<! 2009-08-21 15:06:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare MI figures in Illustrator (per Jon Price) and export to JPegs for use in power point presentation at Sept 10th NMA mtg and Sept 23rd AEG mtg.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2010-02-25 10:23:29 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Work complete 12/29/2009</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'MI 2008 Slides', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2100', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/31/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '8/31/2009', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2009-09-01 15:15:25 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Convert from AI, or geodatabase, (convert map, x-sections, correlation and generate unit list).&nbsp; Publish as NBMG M-series map.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Vicksburg Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2101', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/31/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '8/31/2009', 'DueDate': '9/30/2009', 'ClosedDate': '9/30/2009', 'Notes': '<! 2009-09-01 15:23:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Reprint quantity for City of Las Vegas Emergency Management.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Reprint of E-16 - Earthquakes in Nevada and How to Survive Them', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2102', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2009', 'DueDate': '8/7/2012', 'ClosedDate': '8/7/2012', 'Notes': '<! 2009-09-01 16:04:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare and Maintain a Database of statewide URM buildings utilizing information from 17 county assessors databases.&nbsp; Phase 1 is a 3-step project.&nbsp; 1) build the database&nbsp; 2) Make the database accessible to', 'EmployeeID': 'Hazard Mitigation - Statewide URM Building Inventory', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2103', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2009', 'DueDate': '9/30/2009', 'ClosedDate': '9/30/2009', 'Notes': '<! 2009-09-01 16:16:08 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - September', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2104', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2009', 'DueDate': '5/7/2010', 'ClosedDate': '5/7/2010', 'Notes': '<! 2009-09-22 12:18:46 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all administrative time spent on this project.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Clarkmap 2010 Admin Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2105', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/15/2009', 'DueDate': '5/7/2010', 'ClosedDate': '5/7/2010', 'Notes': '<! 2009-09-22 13:43:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for Clarkmap 2010 deliverable. May be delivered as an M-series publication.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Gass Peak SW', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2106', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/15/2009', 'DueDate': '5/7/2010', 'ClosedDate': '5/7/2010', 'Notes': '<! 2009-09-22 14:50:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for Clarkmap 2010 deliverable.&nbsp; May be delivered as a new open-file or as an M-series deliverable.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2010-07-13 11:57:05 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Project cancelled as a deliverable this year per Jim and Nick.</p', 'EmployeeID': 'CM10 Ireteba Peaks', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2107', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/15/2009', 'DueDate': '5/7/2010', 'ClosedDate': '5/7/2010', 'Notes': '<! 2009-09-22 15:40:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for a Clarkmap 2010 deliverable.&nbsp; May be delivered as an M-series publication.&nbsp; Work may be done by Irene Seelye.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Jean', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2108', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/15/2009', 'DueDate': '10/28/2009', 'ClosedDate': '10/28/2009', 'Notes': '<! 2009-09-22 16:08:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for Statemap deliverable as an open-file publication.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM08 Hazen WH', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2109', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/16/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/16/2009', 'DueDate': '10/1/2009', 'ClosedDate': '10/1/2009', 'Notes': '<! 2009-09-24 16:21:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Poster presentation for GRC; edits and new data images</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Poster - Research At the Great Basin Center for Geothermal Energy', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2110', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/24/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '9/24/2009', 'DueDate': '9/30/2009', 'ClosedDate': '9/30/2009', 'Notes': '<! 2009-09-25 08:27:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Make edits and reprint files via Copy Center.&nbsp; GBCGE to pay for printing.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Update GBCGE Brochures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2111', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2009', 'DueDate': '10/31/2009', 'ClosedDate': '10/31/2009', 'Notes': '<! 2009-10-13 15:54:28 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - October', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2112', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2009', 'DueDate': '12/31/2009', 'ClosedDate': '12/31/2009', 'Notes': '<! 2009-10-15 10:19:15 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th Qtr - 09', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2113', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2009', 'DueDate': '10/2/2009', 'ClosedDate': '10/2/2009', 'Notes': '<! 2009-10-19 15:32:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Print potential side of OF09-1 and version of M161 from GRC posters; both at same dimensions for mounting and display at City of Reno booth.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'City of Reno Prints', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2114', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2009', 'DueDate': '10/30/2009', 'ClosedDate': '10/30/2009', 'Notes': '<! 2009-10-28 10:15:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Add new geothermal potential grid, updated lease data, and other edits.&nbsp; To be assigned new open-file number instead of 2nd edition (per Jon Price).</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Update 09-1 - Geothermal Potential and Exploration Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2115', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/7/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '10/7/2009', 'DueDate': '12/7/2009', 'ClosedDate': '12/7/2009', 'Notes': '<! 2009-10-28 11:25:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Topology and possible layout.&nbsp; Nick to decide on layout further into the project.&nbsp; To be submitted as digital files.&nbsp; We are responsible for loading data into the database and doing symbols.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2010-04', 'EmployeeID': 'Navy - Hawthorne Geologic Map/BR16', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2116', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/1/2009', 'DueDate': '11/30/2009', 'ClosedDate': '11/30/2009', 'Notes': '<! 2009-11-02 14:47:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - November', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2117', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/3/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/3/2009', 'DueDate': '12/31/2009', 'ClosedDate': '12/31/2009', 'Notes': '<! 2009-11-05 15:51:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Publication to be compiled by Jon Price in MS Word rather than by Jack Hursh Adobe InDesign.&nbsp; Data files are stored on the N drive at the following location&#58;&nbsp; N&#58;&#92;_work&#92;2117_M108</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2010-01-0', 'EmployeeID': 'Mineral Industry 2008', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2118', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/5/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/5/2009', 'DueDate': '4/30/2010', 'ClosedDate': '5/12/2010', 'Notes': '<! 2009-11-06 14:06:28 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Gary - Set-up and manage database for geologist</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Jennifer - Map layout</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 - New Geologic Mapping in the Reno Area', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2119', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/5/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/5/2009', 'DueDate': '8/31/2010', 'ClosedDate': '8/31/2010', 'Notes': '<! 2009-11-06 15:51:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Database/Web Specialist</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Rework all web applications; manage new data; put all data into SDE; create web services for all data; other tasks as assigned, including making all services public.&nbsp; Note&#58;&nbsp; W', 'EmployeeID': 'NGDS - National Geothermal Data System', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2120', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/5/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/5/2009', 'DueDate': '2/1/2010', 'ClosedDate': '2/1/2010', 'Notes': '<! 2009-11-06 16:13:30 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Update SP27 with Wells info.; add photos, update seismicity map, add recovery page if time permits.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SP27 Update - Living With Earthquakes in Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2121', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/10/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/10/2009', 'DueDate': '12/31/2009', 'ClosedDate': '12/31/2009', 'Notes': '<! 2009-11-10 10:44:50 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Help Kyle prepare report in digital (HTML) format for release of publication as NBMG Report.&nbsp; Requires CSS formatting using Jennifer&#39;s template files from Web 2.0 work.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Ivanpah Valley Report', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2122', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/13/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/13/2009', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2009-12-01 11:28:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare north half of map for Statemap deliverable of full map and open-file release.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM09 Lower Walker River North Half', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2123', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/13/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/13/2009', 'DueDate': '11/30/2009', 'ClosedDate': '11/30/2009', 'Notes': '<! 2009-12-01 12:17:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare an 11 x 17 size poster of active mine locations from data layers provided by Ron Hess and others and specified by DOM/NBMG.&nbsp; Start with Ron&#39;s draft of the poster and do typical NBMG cartography quality.&', 'EmployeeID': 'Active Mines Poster E-49', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2124', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/18/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/18/2009', 'DueDate': '2/15/2010', 'ClosedDate': '2/21/2010', 'Notes': '<! 2009-12-03 14:52:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Assist with GIS compilation in Arc, symbology, rough layout and possibly 2 cross sections for grant deliverable only (no publication).</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Reese River Geology', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2125', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/13/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/13/2009', 'DueDate': '10/31/2010', 'ClosedDate': '11/6/2010', 'Notes': '<! 2009-12-03 15:02:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare interactive version of M167 Quaternary Faults in Nevada and release as a new open-file OF09-9.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Q-Faults Interactive Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2126', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/24/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '11/24/2009', 'DueDate': '1/15/2010', 'ClosedDate': '1/15/2010', 'Notes': '<! 2009-12-03 15:12:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare a figure for the update of the Nevada Hazard Mitigation Plan.&nbsp; It should be a page-sized map of Nevada showing surface hydrology on a shaded relief background to include all rivers and their major tributarie', 'EmployeeID': 'Surface Hydrology Map Figure for NHMP update', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2127', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/1/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2009', 'DueDate': '12/31/2009', 'ClosedDate': '12/31/2009', 'Notes': '<! 2009-12-03 15:20:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track unbillable and projects completed in less than 2 hours</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim and Misc - December', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2128', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/15/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '12/15/2009', 'DueDate': '5/1/2010', 'ClosedDate': '5/1/2010', 'Notes': '<! 2010-01-05 14:04:28 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Publish new Active Mines M-series map.&nbsp; Prepare map provided by Ron for review by late January and finalize after review for publication in time for symposium May 14-22.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Active Mines in Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2129', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2010', 'DueDate': '1/31/2010', 'ClosedDate': '1/31/2010', 'Notes': '<! 2010-01-05 15:50:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - January', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2130', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2010', 'DueDate': '3/31/2010', 'ClosedDate': '3/31/2010', 'Notes': '<! 2010-01-06 16:02:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 1st Qtr - 10', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2131', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/16/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '12/16/2009', 'DueDate': '12/31/2010', 'ClosedDate': '12/31/2010', 'Notes': '<! 2010-01-07 10:23:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Use data provided by originator to create a web application.&nbsp; Host web application for 1 year on our web server.&nbsp; Future changes, requested by client, will be billed at $45/hour with a 3-hour minimum.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Cl', 'EmployeeID': 'Summit Engineering - Lander FIND Project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2132', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '12/18/2009', 'WorkOrderDescription': 'NULL', 'StartDate': '12/18/2009', 'DueDate': '12/31/2009', 'ClosedDate': '12/31/2009', 'Notes': '<! 2010-01-07 11:24:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Update seismicity map and other inconsistencies between released versions of pamphlet.&nbsp; Printing to be funded by Terri&#39;s contact in Las Vegas.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'E-16 Update and Printing', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2133', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2010', 'DueDate': '2/28/2010', 'ClosedDate': '2/28/2010', 'Notes': '<! 2010-02-02 09:58:35 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - February', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2134', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/18/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '2/18/2010', 'DueDate': '5/18/2010', 'ClosedDate': '5/18/2010', 'Notes': '<! 2010-02-22 15:14:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Make edits to Illustrator file that was lost sometime in the past.&nbsp; Edits will be done in Illustrator image with no conversion to Arc.&nbsp; After edits are done, contact Chris Henry and Chuck Thorman for how to pro', 'EmployeeID': 'Oxley Peak Geologic Map Revisions', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2135', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '3/1/2010', 'DueDate': '3/31/2010', 'ClosedDate': '3/31/2010', 'Notes': '<! 2010-03-01 11:20:42 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - March', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2136', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/22/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '3/22/2010', 'DueDate': '6/1/2010', 'ClosedDate': '6/1/2010', 'Notes': '<! 2010-04-02 11:08:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Re-run Hazus Flood Hazards in Nevada, utilizing MR4, so a comparison can be made to the previous Flood runs in Open File 07-2 which utilized MR2.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Hazus Flood Runs', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2137', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/31/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '3/31/2010', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2010-04-02 11:51:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare layout; no cross-sections.&nbsp; Do 1&#58;6K inset map on layout.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Lee-Allen Geologic Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2138', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '4/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2010', 'DueDate': '4/30/2010', 'ClosedDate': '4/30/2010', 'Notes': '<! 2010-04-02 13:33:17 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc April', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2139', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '4/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2010', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2010-04-02 13:41:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 2nd Qtr - 10', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2140', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2010', 'DueDate': '8/7/2010', 'ClosedDate': '8/7/2010', 'Notes': '<! 2010-04-02 15:15:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2010 deliverable and for publication.&nbsp; Migrate geodatabase to ArcGeology.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2010-09-02 13:06:54 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is being closed incomplete.&nbsp; This will not be a deliverable ', 'EmployeeID': 'CM10 Mt. Manchester', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2141', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/26/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '4/26/2010', 'DueDate': '6/30/2011', 'ClosedDate': '6/30/2011', 'Notes': '<! 2010-05-03 15:48:40 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Set-up and manage SDE Database.&nbsp; Create FTP site for incoming and outgoing data from PI&#39;s; other data work as needed.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Mineral Assessment of Nevada, Mineral Deposit Database', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2142', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '5/31/2010', 'ClosedDate': '5/31/2010', 'Notes': '<! 2010-05-04 08:33:38 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within&nbsp;a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc May', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2143', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/4/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/4/2010', 'DueDate': '5/11/2010', 'ClosedDate': '5/11/2010', 'Notes': '<! 2010-05-19 15:24:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Figures for geothermal paper using Desert Peak-Brady&#39;s and Desert Queen maps; plus a shaded relief base for a figure.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Figures for Desert Peak / Desert Queen', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2144', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/25/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/25/2010', 'DueDate': '7/30/2010', 'ClosedDate': '7/30/2010', 'Notes': '<! 2010-06-16 11:10:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Update current factsheet to include Statemap 10 for submission to USGS.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Factsheet update including SM10', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2145', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/27/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/27/2010', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2010-06-16 15:28:11 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare Grimes Point quad for peer review.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Grimes Point', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2146', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/1/2010', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2010-06-16 16:12:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc June', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2147', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/2/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/2/2010', 'DueDate': '6/22/2010', 'ClosedDate': '6/22/2010', 'Notes': '<! 2010-06-17 10:08:18 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Draft new figures and make revisions to some figures from wo #2065</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Figures for Nature-Geoscience Journal', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2148', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/9/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/9/2010', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2010-06-21 14:58:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Draft Figure in Illustrator using the provided Vector files.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Figure for Jerritt', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2149', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/9/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/9/2010', 'DueDate': '8/30/2010', 'ClosedDate': '8/30/2010', 'Notes': '<! 2010-07-02 08:55:18 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Figures (slides) and publication</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'MI2009 - Nevada Mineral Industry 2009', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2150', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/10/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/10/2010', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2010-07-02 12:12:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Make six maps. each with the same base (a satellite image of the Churchill Co, area) and with themes developed by interpolation for each of the chemical layers.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Mark Walker Project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2151', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/10/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/10/2010', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2010-07-02 12:18:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare layout for map @ 150K scale to include standard layout elements and other needed elements. (w/o authors - print on 60-inch plotter)</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Clark County Q Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2152', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/22/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/22/2010', 'DueDate': '6/30/2010', 'ClosedDate': '6/30/2010', 'Notes': '<! 2010-07-02 14:17:15 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Lay out poster for GRC conference using figures, tables and text provided.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2153', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/30/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '6/30/2010', 'DueDate': '7/19/2010', 'ClosedDate': '7/19/2010', 'Notes': '<! 2010-07-12 12:52:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare a series of figures in Illustrator for Cortez Geochem manuscript using files provided by author.&nbsp; Also help with finishing touches on figures completed by author as needed.&nbsp; 3 figures and possibly 20 Ar', 'EmployeeID': 'Figures for Cortez Geochem Manuscript', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2154', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2010', 'DueDate': '7/31/2010', 'ClosedDate': '7/31/2010', 'Notes': '<! 2010-07-12 16:04:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc July', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2155', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2010', 'DueDate': '9/30/2010', 'ClosedDate': '9/30/2010', 'Notes': '<! 2010-07-13 11:34:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd Qtr - 10', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2156', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/12/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '7/12/2010', 'DueDate': '7/12/2011', 'ClosedDate': '7/12/2011', 'Notes': '<! 2010-07-13 14:24:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Research possible GIS conversion locations for the statemap 2011 proposal.&nbsp; Goal is 50 locations with preference given to sites in the Northeast area of Nevada.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2011 Proposal', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2157', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/12/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '7/12/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-13 14:34:30 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Convert 21 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; See list attached.&nbsp; Each conversion will have a work order number assigned.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GIS Conversion Master SM10', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2158', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-19 12:18:56 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 92-398, location 40117-E2, Rural area, Lander County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Antler Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2159', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-19 13:43:00 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1801, location 38116-E8, Rural area, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Belmont West', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2160', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-19 13:49:34 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 2049, location 36116-H8, Rural area, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Bullfrog NE 1/4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2161', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-19 13:55:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 1985, location 36116-H8, Rural area, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Bullfrog NW 1/4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2162', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-19 14:07:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS NBMG Map 35, location 39114-H8, Rural area, White Pine County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Cherry Creek & Egan Ranges', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2163', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-19 14:23:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 697, location 39114-B8, White Pine County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Ely', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2164', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-21 09:02:11 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 94-664, location 40117-E1, Lander County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Galena Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2165', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-21 11:01:32 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS MF 1963, location 38117-F7, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Goldyke', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2166', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-21 11:17:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Data Migration Conversion into GIS NBMG FS 14, location 41115-C3, Humboldt County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Hot Springs Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2167', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-21 12:25:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 2670, location 38116-F8, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Jefferson', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2168', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-21 12:34:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1775, location 38117-E1, Las Vegas area, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Manhattan', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2169', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-21 13:37:08 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS NBMG unpublished Map, Washoe County (Chris Henry request)</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-07-19 09:21:00 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This map is a conversion, not a digitization</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Nine Hill Paleovalley', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2170', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-21 13:42:08 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS PP 465, location 39117, Lander/Eureka Counties (Chris Henry request)</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Northern Shoshone Range', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2171', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 12:12:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 822, location 37116-C1, Las Vegas area, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-07-19 09:57:03 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Oak Spring Butte', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2172', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 12:18:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Data Migration Conversion NBMG OF 04-3, location 39119-G4, Washoe County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Pah Rah Mountain East 1/2', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2173', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 12:24:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 758, location 39115-C1, White Pine County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-07-19 10:02:55 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Riepetown', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2174', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 12:44:34 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1116, location 40116-H3, Eureka County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Rodeo Creek NE', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2175', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 13:50:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 1085, loction 39114-C8, White Pine County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Ruth', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2176', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 13:55:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS I 1972, location 36116-G2, Las Vegas area, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-07-19 12:35:37 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Skull Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2177', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 13:59:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS GQ 884, location 36116-F2, Las Vegas area, Nye County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-07-19 12:38:45 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Work done by Tom Dozet</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Specter Range NW', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2178', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-07-27 14:03:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 91-430, location 40117-G2, Humboldt County</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Valmy', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2179', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/29/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '7/29/2010', 'DueDate': '9/30/2010', 'ClosedDate': '9/30/2010', 'Notes': '<! 2010-08-24 16:18:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update map with new geology provided by Jim from Vr; include Marks data.  Produce cross-section profiles and get data to Inga by 8/23/2010.', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': ' ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Matt Richardson was the last Assignee to work on this map. After his departure,', 'EmployeeID': 'Desert Peak / Brady Map Update', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2180', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/29/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '7/29/2010', 'DueDate': '8/30/2010', 'ClosedDate': '8/30/2010', 'Notes': '<! 2010-08-24 16:18:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Use provided files and images to prepare a webpage or series of webpages for a memorial collection that will be linked from NBMG website.&nbsp; Collection page will be a catalog for scanned images.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Robert Speed Memorial Collection Webpages', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2181', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2010', 'DueDate': '8/31/2010', 'ClosedDate': '8/31/2010', 'Notes': '<! 2010-09-02 12:25:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - August', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2182', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/17/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '8/17/2010', 'DueDate': '9/15/2010', 'ClosedDate': '9/15/2010', 'Notes': '<! 2010-09-02 12:56:47 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Figures, files, web for Earth Science Week Field Trips (Oct 16 &amp; 17)</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'ESW 2010 - Earth Science Week 10/16 & 10/17', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2183', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2010', 'DueDate': '9/30/2010', 'ClosedDate': '9/30/2010', 'Notes': '<! 2010-09-02 13:00:43 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - September', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2184', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/14/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '9/14/2010', 'DueDate': '9/30/2010', 'ClosedDate': '9/30/2010', 'Notes': '<! 2010-09-30 12:46:00 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2010 deliverable and open-file.&nbsp; Possibly M-series.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM10 Ute', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2185', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/16/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '9/16/2010', 'DueDate': '11/15/2010', 'ClosedDate': '11/15/2010', 'Notes': '<! 2010-09-30 12:55:32 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Revise previously drafted figures for review by the journal.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Revise Nature Geoscience Figures', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2186', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2010', 'DueDate': '10/31/2010', 'ClosedDate': '10/31/2010', 'Notes': '<! 2010-10-06 14:11:22 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2187', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2010', 'DueDate': '12/31/2010', 'ClosedDate': '12/31/2010', 'Notes': '<! 2010-10-06 14:52:07 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th qtr - 2010', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2188', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2010', 'DueDate': '11/30/2010', 'ClosedDate': '11/30/2010', 'Notes': '<! 2010-10-06 16:18:30 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Printing costs to be paid by Nevada Division of Minerals</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines 2009', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2189', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/7/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '10/7/2010', 'DueDate': '11/30/2010', 'ClosedDate': '11/30/2010', 'Notes': '<! 2010-10-21 08:42:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare epicenter maps based from Doug&#39;s instructions and using seismicity data provided by Ken Smith from the Seismo lab.&nbsp; Send pdf&#39;s via email to review and then mail hard copies of completed maps.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Northern California Epicenter Maps', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2190', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '11/1/2010', 'DueDate': '11/30/2010', 'ClosedDate': '11/30/2010', 'Notes': '<! 2010-11-10 13:18:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - November', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2191', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/22/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '11/22/2010', 'DueDate': '2/15/2011', 'ClosedDate': '2/15/2011', 'Notes': '<! 2010-11-23 11:58:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Create a web application which when a feature is selected, attribute information will appear; also allow for query&#39;s.&nbsp; Database to be provided by Robin and/or Rick.&nbsp; Draft Schema already provided.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Interactive Web Map 161', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2192', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/22/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '11/22/2010', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2010-11-23 14:43:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Database set-up and new area mapping</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 New Geologic Mapping in the Reno Area', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2193', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2010', 'DueDate': '12/31/2010', 'ClosedDate': '12/31/2010', 'Notes': '<! 2010-12-06 15:55:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - December', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2194', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '12/1/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2010', 'DueDate': '12/15/2010', 'ClosedDate': '12/15/2010', 'Notes': '<! 2010-12-07 15:42:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Add-on work to map produced on work order 2124.&nbsp; Not to be published as either open-file or m-series at this time.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Reese River', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2195', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/17/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '12/17/2010', 'DueDate': '5/6/2011', 'ClosedDate': '5/6/2011', 'Notes': '<! 2010-12-17 09:22:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for a Clarkmap 2011 deliverable.&nbsp; May be delivered as an M-series publication.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Jean', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2196', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/17/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '12/17/2010', 'DueDate': '5/6/2011', 'ClosedDate': '5/6/2011', 'Notes': '<! 2010-12-17 11:46:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track the time spent on administrative work for Clarkmap</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Clarkmap Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2197', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2011', 'DueDate': '3/31/2011', 'ClosedDate': '3/31/2011', 'Notes': '<! 2011-01-07 10:10:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 1st qtr - 2011', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2198', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2011', 'DueDate': '1/31/2011', 'ClosedDate': '1/31/2011', 'Notes': '<! 2011-01-07 10:40:55 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track misc work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - January', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2199', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/22/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '12/22/2010', 'DueDate': '2/1/2011', 'ClosedDate': '2/1/2011', 'Notes': '<! 2011-01-11 12:25:08 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare and assist Jim&#39;s grad student (Greg Rhodes) with producing his geologic map.&nbsp; Load DXF data, run topology and other standard steps.&nbsp; Assist with GIS questions and cartography/layout.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'San Emidio Geologic Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2200', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/5/2010', 'WorkOrderDescription': 'NULL', 'StartDate': '1/5/2010', 'DueDate': '2/1/2011', 'ClosedDate': '2/1/2011', 'Notes': '<! 2011-01-13 08:28:25 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>open-file Craig&#39;s two earthquake reports.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Open-file dePolo Earthquake reports', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2201', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '1/13/2011', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2011-01-21 10:25:18 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Fix problems that resulted from SM09 deliverable.&nbsp; Troubleshoot database problems and get files to author to make geologic corrections.&nbsp; Possible layout adjustments may result.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Revise and Clean-up Lower Walker River', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2202', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '1/13/2011', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2011-01-21 11:54:55 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Finish CM08 work to release Iceberg Canyon as an M-series map.&nbsp; No deadline but finish ASAP.&nbsp; Currently awaiting word from Robert Brady.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Publish Iceberg Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2203', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2011', 'DueDate': '2/28/2011', 'ClosedDate': '2/28/2011', 'Notes': '<! 2011-02-14 15:08:58 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - February', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2204', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '3/1/2011', 'DueDate': '3/31/2011', 'ClosedDate': '3/31/2011', 'Notes': '<! 2011-03-01 09:12:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - March', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2205', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '3/1/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-03-01 10:26:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Nevada State Hazard Viewer (My Plan).&nbsp; Create a website to assist county and city governments and individuals in identifying their hazards from earthquakes, floods, and wildfires using GIS, with links on what to do ', 'EmployeeID': 'Hazard Website Development and Implementation for FEMA', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2206', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/23/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '3/23/2011', 'DueDate': '6/30/2011', 'ClosedDate': '6/30/2011', 'Notes': '<! 2011-04-11 15:22:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Complete edits to release open-file</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Reese River OF11-3', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2207', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2011', 'DueDate': '4/30/2011', 'ClosedDate': '4/30/2011', 'Notes': '<! 2011-04-11 16:22:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded&nbsp;work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - April', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2208', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2011', 'DueDate': '6/30/2011', 'ClosedDate': '6/30/2011', 'Notes': '<! 2011-04-18 16:12:07 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 2nd qtr - 2011', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2209', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2011', 'DueDate': '5/31/2011', 'ClosedDate': '5/31/2011', 'Notes': '<! 2011-05-18 08:57:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - May', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2210', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '6/1/2011', 'DueDate': '6/30/2011', 'ClosedDate': '6/30/2011', 'Notes': '<! 2011-06-07 11:44:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2211', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/3/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '6/3/2011', 'DueDate': '8/31/2011', 'ClosedDate': '8/31/2011', 'Notes': '<! 2011-06-20 15:10:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Major Mines of Nevada 2010 edits and print per Doug Driesner, NDM, request.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Major Mines of Nevada 2010', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2212', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/27/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '6/27/2011', 'DueDate': '6/30/2011', 'ClosedDate': '6/30/2011', 'Notes': '<! 2011-06-28 10:32:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Run a Hazus scenario for a magnitude 7.5 earthquake on the Genoa fault, for a worst-case scenario.&nbsp; Event requested by James Pitcher with the State Office of Energy for use in their DOE-funded tabletop exercise.&nbs', 'EmployeeID': 'Hazus worst-case scenario Genoa', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2213', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2011', 'DueDate': '7/31/2011', 'ClosedDate': '7/31/2011', 'Notes': '<! 2011-07-11 15:51:52 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - July', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2214', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2011', 'DueDate': '9/30/2011', 'ClosedDate': '9/30/2011', 'Notes': '<! 2011-07-12 16:00:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 3rd qtr - 2011', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2215', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2011', 'DueDate': '9/30/2011', 'ClosedDate': '9/30/2011', 'Notes': '<! 2011-07-13 14:59:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Make a poster for GRC using author provided files.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'GRC Poster', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2216', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/5/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/5/2011', 'DueDate': '11/30/2011', 'ClosedDate': '11/30/2011', 'Notes': '<! 2011-07-13 15:17:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map from author provided Illustrator files for open-file release.&nbsp; No conversion to Arc - keep as Illustrator file.&nbsp; Requested by Nick VanBuer.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-07-12 11:45:30 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Work complete 5/22/', 'EmployeeID': 'Sahwave and Nightingale Ranges Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2217', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/13/2011', 'DueDate': '7/22/2011', 'ClosedDate': '7/22/2011', 'Notes': '<! 2011-07-13 16:17:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>SEPM Fall Field Trip (September 23 - 25, 2011) Tour Stops Map</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SEPM Fall Field Trip Tours Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2218', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/21/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/21/2011', 'DueDate': '8/31/2011', 'ClosedDate': '8/31/2011', 'Notes': '<! 2011-08-03 14:02:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>From author provided files, prepare the Preliminary Surficial Geologic map along the Northwest Lone Mountain and Weepah Hills Piedmonts for release as an open-file map.&nbsp; The author was Kurt Frankel.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-03-0', 'EmployeeID': 'NW Lone Mountain and Weepah Hills Piedmonts Open-file', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2219', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/25/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/25/2011', 'DueDate': '11/30/2011', 'ClosedDate': '11/30/2011', 'Notes': '<! 2011-08-03 14:26:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Produce compilation map that includes already converted-to-GIS maps, grad student mapping, new mapping and various data layers not typically used on geologic maps.&nbsp; 1st phase is grant deliverable; possibility of lat', 'EmployeeID': 'Pyramid Lake Reservation Mapping', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2220', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/26/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/26/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-08-03 14:59:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Produce a geologic map of the Eureka area for Statemap deliverable and Open-file.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 South Eureka Mining District', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2221', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/26/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '7/26/2011', 'DueDate': '8/26/2011', 'ClosedDate': '8/26/2011', 'Notes': '<! 2011-08-03 16:16:31 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Research and suggest maps for submission to USGS for GIS conversion for a statemap grant.&nbsp; Provide a prioritized list and bibliography.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Statemap 2012 Proposal', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2222', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2011', 'DueDate': '8/31/2011', 'ClosedDate': '8/31/2011', 'Notes': '<! 2011-08-04 08:58:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - August', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2223', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2011', 'DueDate': '8/31/2011', 'ClosedDate': '8/31/2011', 'Notes': '<! 2011-08-04 09:07:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Update current factsheet to include Statemap 2011 for submission to USGS.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Factsheet update including SM11', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2224', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/5/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '8/5/2011', 'DueDate': '10/31/2011', 'ClosedDate': '10/31/2011', 'Notes': '<! 2011-08-10 10:16:11 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare preliminary geologic map for statemap 2010 deliverable and open-file.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Bunejug Mountains', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2225', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/5/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '8/5/2011', 'DueDate': '12/31/2011', 'ClosedDate': '12/31/2011', 'Notes': '<! 2011-08-15 14:48:26 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Publish as m-series in Illustrator format provided by authors.&nbsp; No GIS conversion.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<! 2012-01-05 09:36:27 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Partially funded by GSN</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Caetano Map', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2226', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/18/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '8/18/2011', 'DueDate': '10/11/2011', 'ClosedDate': '10/11/2011', 'Notes': '<! 2011-09-06 11:23:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Website announcement of Earth Science Week Field Trip, 10/15/2011-10/16/2011.&nbsp; Include signup and drafting field trip maps.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Earth Science Week Field Trip', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2227', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/23/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '8/23/2011', 'DueDate': '1/31/2012', 'ClosedDate': '1/31/2012', 'Notes': '<! 2011-09-06 11:45:25 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Use data provided for EQ map from SP27 3rd edition.&nbsp; Plus new EQ data for 2010 provided by Craig dePolo to produce an EQ map of Nevada to accompany M167 Quaternary Faults in Nevada.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Seismicity Map of Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2228', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/29/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '8/29/2011', 'DueDate': '12/30/2011', 'ClosedDate': '12/30/2011', 'Notes': '<! 2011-09-06 12:47:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Complete author edits and cross section to prepare map for review.&nbsp; Do post-review edit and finalize for m-series publication and Clarkmap deliverable.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Ute', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2229', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2011', 'DueDate': '9/30/2011', 'ClosedDate': '9/30/2011', 'Notes': '<! 2011-09-06 12:57:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - September', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2230', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 11:36:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1307, location 39117-D1, Lander County.&nbsp; Priority 16 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Austin', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2231', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 11:44:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS I 2675, location 38116-E7, Nye County.&nbsp; Priority 4 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Belmont East', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2232', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 11:53:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 95-580, location 38114-A6, Lincoln County.&nbsp; Priority 6 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Bristol Well', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2233', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 14:08:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Dizitizaion into GIS NBMG OF 86-12, Elko County.&nbsp; Priority 28 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Bull Run Mountains', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2234', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 14:26:26 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Conversion&nbsp;into GIS NBMG OF 86-12, location 39119-D5, Storey County.&nbsp; Priority 1 / 35&nbsp;</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Chalk Hills', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2235', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 14:33:17 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Conversion into GIS USGS B 1538, Washoe County.&nbsp; Priority 3 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Charles Sheldon Wildlife Refuge', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2236', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 15:00:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>&nbsp;Digitization into GIS USGS I 2680, location 38116-F7, Nye County.&nbsp; Priority 30 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Corcoran Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2237', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 15:19:38 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 95-550, location 38114-A7, Lincoln County.&nbsp; Priority 7 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Coyote Spring', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2238', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 15:30:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1754, location 37114-A7, Lincoln County.&nbsp; Priority 19 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Delamar 3 SE', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2239', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/8/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-08 15:35:18 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1730, location 37114-C8, Lincoln County.&nbsp; Priority 20 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Delamar Lake', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2240', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 11:50:20 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 539, location 40115-G8, Elko County.&nbsp; Priority 13 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Hunter', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2241', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 11:55:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS I 2668, location 40116-G7, Lander County.&nbsp; Priority 9 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Izzenhood Spring', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2242', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 12:26:56 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 883, Nye County.&nbsp; Priority 32 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Lathrop Wells', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2243', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:04:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 1486, location 38118-D3, Mineral County.&nbsp; Priority 10 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mable Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2244', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:09:00 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 10, location 38118-D1, Mineral County.&nbsp; Priority 12 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mina (Quaternary)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2245', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:13:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 84-685, location 41115-G8, Elko County.&nbsp; Priority 14 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mountain City NW 1/4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2246', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:18:14 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 84-686, location 41115-G8, Elko County.&nbsp; Priority 15 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mountain City SW 1/4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2247', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:24:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 19, location 39114-C2, White Pine County.&nbsp; Priority 24 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Mt. Moriah', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2248', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:41:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 1485, location 38118-D4, Mineral County.&nbsp; Priority 34 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Pamlico', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2249', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:46:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS I 1902, Elko County.&nbsp; Priority 33 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Peko Hills', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2250', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 14:50:32 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 84-506, location 38118-C4, Mineral County.&nbsp; Priority 11 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Rattlesnake Flat', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2251', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/9/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/9/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-09 15:01:05 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 7, location 38114-A1, Lincoln County.&nbsp; Priority 18 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Rice Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2252', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/12/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-12 13:53:43 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1759, location 37114-B1, Lincoln County.&nbsp; Priority 26 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Scarecrow Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2253', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/12/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-12 13:58:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG Map 60, location 38118-H7, Mineral County.&nbsp; Priority 2 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Schurz', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2254', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/12/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-12 14:02:38 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitize into GIS USGS OF 94-436, location 40117 - F1, Humboldt, Lander Counties.&nbsp; Priority 27 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Snow Gulch', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2255', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/12/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-12 14:07:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 1300, location 38118-C1, Mineral County.&nbsp; Priority 31 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Sodaville', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2256', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/12/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-12 14:11:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Conversion into GIS NBMG Map 133, Churchill County.&nbsp; Priority 5 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Southern Sand Springs Range', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2257', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/12/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-12 15:47:55 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 18, location 39114-D1, White Pine County.&nbsp; Priority 25 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Spring Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2258', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/12/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-12 15:52:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 882, location 36116-F3, Nye County.&nbsp; Priority 29 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Striped Hills', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2259', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/13/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-13 10:36:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS MF 2194, location 39118-E3, Churchill County.&nbsp; Priority 8 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Table Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2260', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/13/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-13 10:40:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS NBMG FS 22, location 39114-B1, White Pine County.&nbsp; Priority 22 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 The Cove', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2261', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/13/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-13 10:50:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1758, White Pine County.&nbsp; Priority 23 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 The Lehman Caves', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2262', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/13/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-13 10:55:35 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Conversion into GIS NBMG Map 132, location 40114-C2, Elko County.&nbsp; Priority 17 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 White Horse Pass Area', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2263', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/13/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-13 10:59:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS OF 94-687, location 39114-A3, White Pine County.&nbsp; Priority 35 / 35</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Windy Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2264', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/13/2011', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2011-09-13 11:03:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS USGS GQ 1327, location 36116-H Nye County.&nbsp; Priority 21 / 351</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM11 Yucca Lake', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2265', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/13/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '9/13/2011', 'DueDate': '12/31/2011', 'ClosedDate': '12/31/2011', 'Notes': '<! 2011-09-19 09:20:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare Sue Beard&#39;s Whitney Pocket for Clarkmap deliverable and M-Series publication.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'CM11 Whitney Pocket', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2266', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2011', 'DueDate': '10/31/2011', 'ClosedDate': '10/31/2011', 'Notes': '<! 2011-10-12 12:27:58 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc -', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2267', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2011', 'DueDate': '12/31/2011', 'ClosedDate': '12/31/2011', 'Notes': '<! 2011-10-18 09:50:18 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Web Maintenance - 4th qtr - 2011', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2268', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/4/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '10/4/2011', 'DueDate': '10/31/2011', 'ClosedDate': '10/31/2011', 'Notes': '<! 2011-10-24 15:20:50 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare Hazen Preliminary Geologic map for Statemap deliverable and open-file.&nbsp; Take W 1/2 completed under previous statemap and combine with new mapping to complete full quad.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'SM10 Hazen', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2269', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/4/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '10/4/2011', 'DueDate': '11/30/2011', 'ClosedDate': '11/30/2011', 'Notes': '<! 2011-10-24 16:04:19 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare Ben Delwiche&#39;s Moses Rock Thesis Map for open-file publication.&nbsp; Jim Faulds to provide an account number.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Moses Rock', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2270', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '11/1/2011', 'DueDate': '11/30/2011', 'ClosedDate': '11/30/2011', 'Notes': '<! 2011-11-21 10:01:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Prelim & Misc - November', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2271', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/1/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2011', 'DueDate': '12/31/2011', 'ClosedDate': '12/31/2011', 'Notes': '<! 2011-12-28 15:01:40 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - December', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2272', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/6/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '12/6/2011', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2011-12-28 16:08:35 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Use data provided by Summit for web application.&nbsp; Host web application for 1 year on our web server.&nbsp; Any changes requested by the client will be billed at $51.75/hour with a 3-hour minimum.&nbsp; Monthly web h', 'EmployeeID': 'Summit Engineering - FIND Project', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2273', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/8/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '12/8/2011', 'DueDate': '1/20/2012', 'ClosedDate': '1/20/2012', 'Notes': '<! 2012-01-05 14:32:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Redraft Nevada pagesize geology concept to make suitable for printing on shirts, bandanas, and NBMG logo for hats.</p>', 'EmployeeID': 'Nevada Pagesize Geology', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2274', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/14/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '12/14/2011', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-01-06 10:59:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Assist with production of geologic map and other related GIS work; publication status unknown at this time.  Map likely will include other geophysical data combined with the map.  Probably will not be a detailed map, but po', 'EmployeeID': 'Snowstorm', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2275', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '12/20/2011', 'WorkOrderDescription': 'NULL', 'StartDate': '12/20/2011', 'DueDate': '3/25/2013', 'ClosedDate': '3/25/2013', 'Notes': '<! 2012-01-06 10:59:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Check the reasonableness of automated HAZUS runs against previous or new HAZUS runs using epicenter-depth-magnitude input.</p>', 'EmployeeID': 'EQ Hazards Reduction', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2276', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2012', 'DueDate': '1/31/2012', 'ClosedDate': '1/31/2012', 'Notes': '<! 2012-01-06 11:15:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - January', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2277', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2012', 'DueDate': '3/31/2012', 'ClosedDate': '3/31/2012', 'Notes': '<! 2012-01-06 11:26:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': 'Web Maintenance - 1st qtr - 2012', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2278', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/6/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '1/6/2012', 'DueDate': '1/31/2012', 'ClosedDate': '1/31/2012', 'Notes': '<! 2012-01-06 11:41:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Cartography and Layout for M-Series publication.</p>', 'EmployeeID': 'Strain Map of Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2279', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '2/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2012', 'DueDate': '2/29/2012', 'ClosedDate': '2/29/2012', 'Notes': '<! 2012-02-07 12:27:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - February', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2280', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2012', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2012-02-22 10:55:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Tracking time needed to develop and publish a 2013 Bureau calendar</p>', 'EmployeeID': 'Calendar, NBMG, 2013', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2281', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '3/1/2012', 'DueDate': '3/31/2012', 'ClosedDate': '3/31/2012', 'Notes': '<! 2012-03-08 16:17:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - March', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2282', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '3/1/2012', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-04-02 16:01:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for review and final publication as M-Series.&nbsp; Also submit as a Clarkmap deliverable.&nbsp; 1) Work through revisions with authors.&nbsp; 2)&nbsp; Add cross sections for final map.&nbsp; 3)&nbsp; Place l', 'EmployeeID': 'Finalize Searchlight for M-Series', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2283', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/5/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '3/5/2012', 'DueDate': '4/16/2012', 'ClosedDate': '4/16/2012', 'Notes': '<! 2012-04-02 16:13:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare cross section profiles from provided shapefiles and DEM.&nbsp; Assist with completion of cross section profiles.</p>', 'EmployeeID': 'Soda Lakes Cross Sections', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2284', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/16/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '3/16/2012', 'DueDate': '5/31/2012', 'ClosedDate': '5/31/2012', 'Notes': '<! 2012-04-05 10:06:16 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Begin preliminary work to migrate old databases into one compilation database for the Fernley area.&nbsp; Assist with GIS/Cartography in preparation for grant deliverable.</p>', 'EmployeeID': 'Fernley Mapping', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2285', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/26/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '3/26/2012', 'DueDate': '5/31/2012', 'ClosedDate': '5/31/2012', 'Notes': '<! 2012-04-05 10:49:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Final layout, paginate, preparation for web.</p>', 'EmployeeID': 'Mineral Industry 2010', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2286', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2012', 'DueDate': '4/30/2012', 'ClosedDate': '4/30/2012', 'Notes': '<! 2012-04-05 11:33:15 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p class="MsoNormal" style="margin: 0in 0in 10pt;"><span style="font-family: Calibri;">This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</span></p>', 'EmployeeID': 'Prelim & Misc - April', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2287', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '4/1/2012', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2012-04-05 11:39:35 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': 'Web Maintenance - 2nd qtr - 2012', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2288', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/12/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '4/12/2012', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2012-07-13 14:59:07 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare geologic map as an open-file layout, but only submitting as deliverable at this point.&nbsp; Assist with GIS and cartographic work.&nbsp; Cross sections also needed to be generated and included in deliverable.</p', 'EmployeeID': 'Dixie Valley', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2289', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '5/31/2012', 'ClosedDate': '5/31/2012', 'Notes': '<! 2012-07-13 15:45:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track miscellaneous unfunded work which is complete within a few hours.</p>', 'EmployeeID': 'Prelim & Misc - May', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2290', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/16/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/16/2012', 'DueDate': '5/30/2012', 'ClosedDate': '5/30/2012', 'Notes': '<! 2012-07-16 12:04:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Student map for Sean Long - Funding did not come through - Project cancelled.</p><! 2012-07-18 15:54:27 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is cancelled - Funding did not come through.</p>', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': 'Mahogany Hills', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2291', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '6/1/2012', 'DueDate': '6/30/2012', 'ClosedDate': '6/30/2012', 'Notes': '<! 2012-07-17 14:09:19 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued in order to document work that is unbillable.</p>', 'EmployeeID': 'Prelim & Misc - June', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2292', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2012', 'DueDate': '9/30/2012', 'ClosedDate': '9/30/2012', 'Notes': '<! 2012-07-17 15:57:15 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all time spent maintaining the NBMG website.</p>', 'EmployeeID': 'Web Maintenance - 3rd qtr - 2012', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2293', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-07-19 14:26:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Convert 24 Geologic Maps published by the NBMG and the USGS to fully attributed GIS versions.&nbsp; See list attached.&nbsp; Each conversion will have a work order number assigned.</p>', 'EmployeeID': 'GIS Conversion Master', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2294', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-07-20 11:17:22 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS GQ 761, location 39116-E6, Lander County.&nbsp; Priority 2 / 24.&nbsp;</p>', 'EmployeeID': 'SM12 Ackerman Canyon', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2295', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-07-20 11:55:03 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS Map I-2081, location 40115-G7,H7, Elko County.&nbsp; Priority 19 / 24.</p>', 'EmployeeID': 'SM12 Adobe Range, Northern', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2296', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-07-20 12:12:46 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS OF 81-369, location 38118-A3, Mineral County.&nbsp; Priority 20 / 24.</p>', 'EmployeeID': 'SM12 Basalt', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2297', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-07-26 11:23:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS MF 559, location 41116-A1, Elko County.&nbsp; Priority 21 / 24</p>', 'EmployeeID': 'SM12 Blue Basin', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2298', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-07-26 11:35:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS Map GQ-821, location 40118-B2, Pershing County.&nbsp;&nbsp;Priority 14 / 24.</p>', 'EmployeeID': 'SM12 Buffalo Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2299', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-07-30 14:21:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS GQ-726, location 36116-F1, Nye County.&nbsp; Priority 13 / 24.</p>', 'EmployeeID': 'SM12 Camp Desert Rock', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2300', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-17 14:48:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS MF 528, location 41115-B6, Elko County.&nbsp; Priority 1/24.</p>', 'EmployeeID': 'SM12 Coal Mine Basin', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2301', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-17 14:56:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, NBMG Map 50, multiple counties.&nbsp; Priority 15/24.</p>', 'EmployeeID': 'SM12 Geo Map of North-Central Nevada', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2302', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-17 15:01:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS OF 80-715, location 40117-C7, Pershing County.&nbsp; Priority 3/24.</p>', 'EmployeeID': 'SM12 Granite Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2303', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-17 15:38:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS Map I-2629, Elko County.&nbsp; Priority 17/24.</p>', 'EmployeeID': 'SM12 Independence Mtns, southern', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2304', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-21 12:33:49 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, NBMG OF 05-1, Elko, Humboldt, Lander Counties.&nbsp; Priority 11/24.</p>', 'EmployeeID': 'SM12 Kelly Creek', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2305', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-21 12:44:24 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS OF 99-350, Churchill County.&nbsp; Priority 18/24.</p>', 'EmployeeID': 'SM12 Middlegate Area', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2306', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-21 15:24:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS OF 79-1145, location 38118-A2, Mineral County.&nbsp; Priority 4/24.</p>', 'EmployeeID': 'SM12 Miller Mountain & Columbus', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2307', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-21 15:32:47 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS GQ 730, location 39116-F8, Lander County.&nbsp; Priority 7/24.</p>', 'EmployeeID': 'SM12 Mount Callaghan', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2308', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-21 15:54:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Conversion into GIS, NBMG OF03-19, location 36116-A1, Nye County.&nbsp; Priority 8/24.</p>', 'EmployeeID': 'SM12 Nopah Peak NE 1/4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2309', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-21 16:16:51 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS OF 99-5338, Nye County.&nbsp; Priority 22/24.</p>', 'EmployeeID': 'SM12 Oasis Valley Basin & Vicinity', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2310', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 10:05:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Convert into GIS, NBMG OF 03-4, location 41114-B8, Elko County.&nbsp; Priority 12/24.</p>', 'EmployeeID': 'SM12 Oxley Peak Area', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2311', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 10:09:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS GQ 384, location 36115-H8, Nye County.&nbsp; Priority 16/24.</p>', 'EmployeeID': 'SM12 Plutonium Valley', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2312', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 10:14:37 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS Map I-2394, location 41116-C8, Elko, Humboldt counties.&nbsp; Priority 9/24.</p>', 'EmployeeID': 'SM12 Snowstorm Mountains and Vicinity', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2313', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 10:19:59 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS OF 83-303, Elko county.&nbsp; Priority 23/24.</p>', 'EmployeeID': 'SM12 Southern Snake Mountain', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2314', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 10:35:53 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS GQ 770, location 39116-C7, Lander county.&nbsp; Priority 5/24.</p>', 'EmployeeID': 'SM12 Spencer Hot Springs', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2315', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 10:52:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Conversion into GIS, NBMG OF 03-20, location 36116-B2, Nye county.&nbsp; Priority 10/24.</p>', 'EmployeeID': 'SM12 Stewart Valley NE 1/4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2316', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 10:56:56 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, NBMG Map 98, Nye county.&nbsp; Priority 6/24.</p>', 'EmployeeID': 'SM12 Toquima Caldera Complex', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2317', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2012-08-22 11:02:41 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Digitization into GIS, USGS Map GQ-820, location 40118-D1, Pershing county.&nbsp; Priority 24/24.</p>', 'EmployeeID': 'SM12 Unionville', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2318', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/15/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '7/15/2012', 'DueDate': '10/31/2012', 'ClosedDate': '10/31/2012', 'Notes': '<! 2012-08-22 16:12:29 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare Desert Peak quad for Statemap deliverable and open-file release.</p>', 'EmployeeID': 'SM11 Desert Peak', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2319', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/14/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '8/14/2012', 'DueDate': '9/18/2012', 'ClosedDate': '9/18/2012', 'Notes': '<! 2012-09-06 15:42:45 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>2 posters needed for the GRC Conference</p>', 'EmployeeID': 'GRC Posters', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2320', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/21/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '8/21/2012', 'DueDate': '6/30/2013', 'ClosedDate': '6/30/2013', 'Notes': '<! 2012-09-10 10:53:01 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Develop, improve and manage mineral assessment database and web application.</p>', 'EmployeeID': 'Database Management for DOM', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2321', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/21/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '8/21/2012', 'DueDate': '2/28/2013', 'ClosedDate': '2/28/2013', 'Notes': '<! 2012-09-11 10:20:29 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Carson City Trenching</p>', 'EmployeeID': 'Kings Canyon Fault Zone', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2322', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/24/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '8/24/2012', 'DueDate': '5/23/2013', 'ClosedDate': '5/23/2013', 'Notes': '<! 2012-09-12 15:14:06 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Cartography has three principal activities&#58;&nbsp; 1)Install and maintain the Nevada node on the Western Hub server&nbsp; 2)Implement ArcGIS Geoportal (cataloguing) and web services (data access) on the Hub&nbsp; 3)Pr', 'EmployeeID': "Arizona Geological Survey/Doe/Nat'l Geothermal Data System", 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2323', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/17/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '9/17/2012', 'DueDate': '6/30/2013', 'ClosedDate': '6/30/2013', 'Notes': '<! 2012-09-17 10:06:21 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Survey Report Formatting including layout editing</p>', 'EmployeeID': 'Exploration Survey for DOM', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2324', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/17/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '9/17/2012', 'DueDate': '6/30/2013', 'ClosedDate': '6/30/2013', 'Notes': '<! 2012-09-17 10:26:11 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>New geologic framework studies in critical areas.</p>', 'EmployeeID': 'Geologic Framework Studies for DOM', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2325', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2012', 'DueDate': '9/9/2014', 'ClosedDate': '9/9/2014', 'Notes': '<! 2012-11-29 12:59:04 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Activity 2 - Task A - Gary Johnson to integrate new data (as a GIS layer) from an inventory of potential URMs into the MyPlan dataset services and viewers.&nbsp; Task B - &nbsp;Adapt existing Excel-based administrative s', 'EmployeeID': 'Hazard Mitigation Proj Act 1-4', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2326', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2012', 'DueDate': '12/31/2013', 'ClosedDate': '1/17/2014', 'Notes': '<! 2012-11-29 15:01:28 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>NBMG will analyze and create GIS maps&nbsp;of suburban and urban areas that may be flooded by breaches of irrigation ditches and canals and present this information in a GIS format.&nbsp;&nbsp;NBMG will use digital eleva', 'EmployeeID': 'Irrigation Ditches - Activity 1A', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2327', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2012', 'DueDate': '12/31/2013', 'ClosedDate': '12/31/2013', 'Notes': '<! 2012-11-29 15:17:08 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Add the location of potential URM buildings into the HAZUS database for Nevada and use HAZUS to calculate the reduction in risk that may be achievable for at least 20 major communities throughout the state.&nbsp; The upd', 'EmployeeID': 'Integration of URM data into Hazus - Activity 1B', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2328', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/1/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2012', 'DueDate': '12/31/2013', 'ClosedDate': '12/31/2013', 'Notes': '<! 2012-11-29 15:28:36 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>NBMG will add additional GIS layers to MyPlan.&nbsp; Foremost among these will be flood data created in Activity 1A and earthquake hazards from potential URMs from Activity 1B.&nbsp; Additional GIS layers will include a ', 'EmployeeID': 'MyPlan Website Update', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2329', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/29/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '11/29/2012', 'DueDate': '12/31/2013', 'ClosedDate': '12/31/2013', 'Notes': '<! 2012-12-12 15:21:40 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare for open-file after Russell diFiori (Sean Long&#39;s graduate student) does his mapping.&nbsp; Help answer GIS questions, etc.</p>', 'EmployeeID': 'Eureka', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2330', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/27/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '9/27/2012', 'DueDate': '10/3/2012', 'ClosedDate': '10/3/2012', 'Notes': '<! 2012-12-13 10:12:27 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Help Jim, Nick, and grad students prepare and print posters for <br />GRC field trip.</p>', 'EmployeeID': 'GRC Poster Printing', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2331', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/29/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '11/29/2012', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-12-13 10:41:13 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare open-file for Clarkmap 2012 deliverable.</p>', 'EmployeeID': 'CM12 Corn Creek Springs NW', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2332', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '11/27/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '11/27/2012', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-12-13 10:59:22 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare open-file for Clarkmap deliverable.</p>', 'EmployeeID': 'CM12 Fourth of July Mtn N 1/2', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2333', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/29/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '11/29/2012', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-12-13 11:51:10 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2012 deliverable and review, then M-series publication.&nbsp; Previously open-filed in 2004, converted to Arc and delivered for Clarkmap in 2008, but not open-filed.</p><! 2013-04-08 12:27:30 lgoar >', 'EmployeeID': 'CM12 Davis Dam', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2334', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/29/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '11/29/2012', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-12-13 13:45:54 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2012 deliberable as an open-file.&nbsp; Previously, W 1/2 was open-filed for Clarkmap.&nbsp; This will be a full quad deliverable.</p>', 'EmployeeID': 'CM12 Ireteba Peaks', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2335', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '12/3/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '12/3/2012', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-12-13 14:26:57 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare for Clarkmap 2012 deliverable; eventual review and m-series publication.&nbsp; Possibly generate x-section profiles.&nbsp; Previously open-filed through Statemap and Clarkmap.</p><! 2013-04-24 15:29:42 lgoar >', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<', 'EmployeeID': 'CM12 Spirit Mountain NW', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2336', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/3/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '12/3/2012', 'DueDate': '12/31/2012', 'ClosedDate': '12/31/2012', 'Notes': '<! 2012-12-13 14:41:39 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Statemap style layout</p>', 'EmployeeID': 'CM12 Valley GIS Conversion', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2337', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/4/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '12/4/2012', 'DueDate': '6/30/2013', 'ClosedDate': '7/8/2013', 'Notes': '<! 2013-01-04 15:46:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for eventual open-file publication.&nbsp; Map originator includes Brian Hawsback.</p>', 'EmployeeID': 'High Rock Caldera', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2338', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/4/2012', 'WorkOrderDescription': 'NULL', 'StartDate': '12/4/2012', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': '<! 2013-01-07 09:25:25 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Prepare map for eventual open-file publication</p>', 'EmployeeID': 'McDermitt Caldera', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2339', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/2/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '1/2/2013', 'DueDate': '5/31/2013', 'ClosedDate': '5/31/2013', 'Notes': '<! 2013-01-07 11:02:26 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Eastern Oregon&nbsp; -&nbsp; No open-file report&nbsp; -&nbsp; possibly 2 cross-sections&nbsp; -&nbsp; Joel Edwards, grad student</p>', 'EmployeeID': 'Neal (Joel Edwards)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2340', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/2/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '1/2/2013', 'DueDate': '5/31/2013', 'ClosedDate': '5/31/2013', 'Notes': '<! 2013-01-07 12:21:42 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Possible open-file report with cross-sections.&nbsp; Greg Dering - grad student</p>', 'EmployeeID': 'Tuscarora (Greg Dering)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2341', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/3/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '1/3/2013', 'DueDate': '5/31/2013', 'ClosedDate': '5/31/2013', 'Notes': '<! 2013-01-07 14:55:44 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Assist grad student with mapping process and perform GIS and Cartographic work as needed to bring map to open-file status.&nbsp; Possibly 4 cross-sections.&nbsp;</p>', 'EmployeeID': 'Emerson Pass (Ryan Anderson)', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2342', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/9/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '1/9/2013', 'DueDate': '3/31/2013', 'ClosedDate': '3/31/2013', 'Notes': '<! 2013-01-16 15:13:33 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Update information and prepress and print.&nbsp; DOM to be billed directly for printing.</p>', 'EmployeeID': 'Major Mines of Nevada 2011', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2343', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/9/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '1/9/2013', 'DueDate': '3/31/2013', 'ClosedDate': '3/31/2013', 'Notes': '<! 2013-01-16 16:05:17 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Typeset report, co-ordinate editing and move to open-file publication.</p>', 'EmployeeID': 'dePolo Magnitude OFR', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2344', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/30/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '1/30/2013', 'DueDate': '2/15/2013', 'ClosedDate': '2/15/2013', 'Notes': '<! 2013-03-08 14:09:12 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Update Factsheet with 2012 funded maps</p>', 'EmployeeID': 'Factsheet Update Statemap 2012', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2345', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '2/1/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2013', 'DueDate': '2/28/2013', 'ClosedDate': '2/28/2013', 'Notes': '<! 2013-03-08 14:20:08 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Create figures to include in Sean&#39;s journal article and prepare Eureka OFR data to submit as a download.</p>', 'EmployeeID': 'Eureka Paper', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2346', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '2/1/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2013', 'DueDate': '4/15/2013', 'ClosedDate': '4/15/2013', 'Notes': '<! 2013-03-11 15:55:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Help with Graphs', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Actual completion 6/14/2013', 'EmployeeID': 'MI 2011', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2347', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/1/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2013', 'DueDate': '4/15/2013', 'ClosedDate': '4/15/2013', 'Notes': '<! 2013-03-11 15:55:02 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Extract information from faculty and staff evaluations from 2010 and 2011 to aid the Director with his report.</p>', 'EmployeeID': 'Biennial Report, NBMG, 2012', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2348', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '2/1/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2013', 'DueDate': '6/30/2013', 'ClosedDate': '6/30/2013', 'Notes': '<! 2013-03-11 16:05:09 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track all work needed to maintain the NBMG web.</p>', 'EmployeeID': 'Web Maintenance', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2349', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/8/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '3/8/2013', 'DueDate': '6/30/2013', 'ClosedDate': '6/30/2013', 'Notes': '<! 2013-03-12 15:21:48 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>Use Historical EQ&#39;s map to create a slide show of photos, maps, timeline and possibly sound.</p>', 'EmployeeID': "Historical EQ's Slideshow", 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2350', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/8/2013', 'WorkOrderDescription': 'NULL', 'StartDate': '3/8/2013', 'DueDate': '6/30/2013', 'ClosedDate': '6/30/2013', 'Notes': '<! 2013-03-12 15:41:58 lgoar >', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '<p>This work order is issued to track time spent by the NBMG representative on the NV Board on Geographic Names.&nbsp; State Law (NRS 327) stipulates that NBMG has one representative to the board.</p>', 'EmployeeID': 'Nevada State Board on Geographic Names', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2351', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/15/2013', 'WorkOrderDescription': 'Prepare as a digital conversion to submit as a Clarkmap deliverable.  Use files from previous conversion.  Standardize as best possible and do metadata and zip file.', 'StartDate': '3/15/2013', 'DueDate': '4/30/2013', 'ClosedDate': '4/30/2013', 'Notes': 'NULL', 'ProjectName': 'Mount Manchester'}
,
{'WorkOrderID': '2352', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/1/2012', 'WorkOrderDescription': 'This work order is issued in order to archive the GIS Conversion work done on USGS Riverside Map GQ-1770 for Clarkmap.', 'StartDate': '12/1/2012', 'DueDate': '12/30/2012', 'ClosedDate': '12/30/2012', 'Notes': 'NULL', 'ProjectName': 'Riverside Conversion'}
,
{'WorkOrderID': '2353', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/11/2013', 'WorkOrderDescription': "Update map with new mapping on west edge, age dates and cross sections.  Assist with loading data into geodatabase and making an inset like the one made for Brady's.  Prepare for open-file, but mainly for new 3D model.", 'StartDate': '4/11/2013', 'DueDate': '9/30/2013', 'ClosedDate': '9/30/2013', 'Notes': 'NULL', 'ProjectName': 'Bunejug Mountains'}
,
{'WorkOrderID': '2354', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/24/2013', 'WorkOrderDescription': 'Prepare for open-file using files Peter Drakos provided from his thesis.  (This map tied in with Pyramid Lake and Moses Rock.)', 'StartDate': '5/24/2013', 'DueDate': '9/30/2013', 'ClosedDate': '9/30/2013', 'Notes': 'NULL', 'ProjectName': 'Southern Lake Range Geologic Map'}
,
{'WorkOrderID': '2355', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/1/2012', 'WorkOrderDescription': 'This work order is issued to track work done to draft a map of the quad that can be used for UNR event and planning meetings.Time was tracked in P & M over multiple months.', 'StartDate': '6/1/2012', 'DueDate': '11/1/2012', 'ClosedDate': '11/1/2012', 'Notes': 'NULL', 'ProjectName': 'UNR Quad Map for Leah'}
,
{'WorkOrderID': '2356', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/3/2013', 'WorkOrderDescription': 'Prepare Minden Open File 03-13 for peer review and eventual M-Series', 'StartDate': '6/3/2013', 'DueDate': '9/30/2013', 'ClosedDate': '9/30/2013', 'Notes': 'NULL', 'ProjectName': 'Minden'}
,
{'WorkOrderID': '2357', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/3/2013', 'WorkOrderDescription': 'Set-up Geodatabase for Ken Adams to use as a template for his mapping projects.  Use Lower Walker River domains.', 'StartDate': '6/3/2013', 'DueDate': '6/3/2013', 'ClosedDate': '6/3/2013', 'Notes': 'NULL', 'ProjectName': 'Template Geodatabase'}
,
{'WorkOrderID': '2358', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/3/2013', 'WorkOrderDescription': 'Develop and publish a 2014 Bureau Calendar.', 'StartDate': '6/3/2013', 'DueDate': '8/30/2013', 'ClosedDate': '8/30/2013', 'Notes': 'NULL', 'ProjectName': 'Calendar, NBMG, 2014'}
,
{'WorkOrderID': '2359', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/3/2013', 'WorkOrderDescription': 'Publish Valley of Fire East quad as an open-file.Billed on Invoice #24940', 'StartDate': '6/3/2013', 'DueDate': '7/31/2013', 'ClosedDate': '7/31/2013', 'Notes': 'NULL', 'ProjectName': 'Valley of Fire East'}
,
{'WorkOrderID': '2360', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '6/10/2013', 'WorkOrderDescription': 'Prepare Wabuska quad for Statemap deliverable and open-file release.', 'StartDate': '6/10/2013', 'DueDate': '7/31/2013', 'ClosedDate': '7/31/2013', 'Notes': 'NULL', 'ProjectName': 'SM12 Wabuska'}
,
{'WorkOrderID': '2361', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '6/10/2013', 'WorkOrderDescription': 'Prepare West Gate Quad for Statemap deliverable and open-file release.', 'StartDate': '6/10/2013', 'DueDate': '7/31/2013', 'ClosedDate': '7/31/2013', 'Notes': 'NULL', 'ProjectName': 'SM12 West Gate Quad'}
,
{'WorkOrderID': '2362', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/17/2013', 'WorkOrderDescription': 'Update existing files on server and test new .htm files.', 'StartDate': '6/17/2013', 'DueDate': '7/31/2013', 'ClosedDate': '7/31/2013', 'Notes': 'NULL', 'ProjectName': 'Mining District Files Web Update'}
,
{'WorkOrderID': '2363', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/18/2013', 'WorkOrderDescription': 'Prepare set of figures', 'StartDate': '6/18/2013', 'DueDate': '7/15/2013', 'ClosedDate': '7/15/2013', 'Notes': 'NULL', 'ProjectName': 'Las Vegas Valley Figures'}
,
{'WorkOrderID': '2364', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/25/2013', 'WorkOrderDescription': 'Put together for the first time a comprehensive GIS database of all the data for the DNWR.  Data will include all available resource information (mineral occurrences, hot water occurrences, etc), geologic mapping, geochemical data (stream sediment, rock-c', 'StartDate': '6/25/2013', 'DueDate': '12/31/2014', 'ClosedDate': '12/31/2014', 'Notes': 'NULL', 'ProjectName': 'Mineral Assessment of DNWR'}
,
{'WorkOrderID': '2365', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2013', 'WorkOrderDescription': 'This work order is issued to track all work needed to maintain the NBMG web page.', 'StartDate': '7/1/2013', 'DueDate': '12/31/2013', 'ClosedDate': '12/31/2013', 'Notes': 'NULL', 'ProjectName': 'Web Maintenance'}
,
{'WorkOrderID': '2366', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2013', 'WorkOrderDescription': 'Field work and related reports.', 'StartDate': '7/1/2013', 'DueDate': '9/20/2013', 'ClosedDate': '9/20/2013', 'Notes': 'NULL', 'ProjectName': 'Arizona Geological Survey Geothermal Task 11'}
,
{'WorkOrderID': '2367', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/17/2013', 'WorkOrderDescription': 'Hazus runs of model earthquakesNo work was submitted to Cartography for this project.', 'StartDate': '7/17/2013', 'DueDate': '10/31/2013', 'ClosedDate': '10/31/2013', 'Notes': 'NULL', 'ProjectName': 'Douglas County Hazard Mitigation'}
,
{'WorkOrderID': '2368', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/9/2013', 'WorkOrderDescription': 'This work order was issued after the fact as a place marker for the electronic files', 'StartDate': '9/9/2013', 'DueDate': '9/9/2013', 'ClosedDate': '9/9/2013', 'Notes': 'NULL', 'ProjectName': 'Statemap 2013 Proposal'}
,
{'WorkOrderID': '2369', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/12/2013', 'WorkOrderDescription': 'This work order is issued in order to track the hours spent preparing the proposal for Statemap 2014', 'StartDate': '8/12/2013', 'DueDate': '9/30/2013', 'ClosedDate': '9/30/2013', 'Notes': 'NULL', 'ProjectName': 'Statemap 2014 Proposal'}
,
{'WorkOrderID': '2370', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/14/2013', 'WorkOrderDescription': 'Finalization of report which includes survey results written by Subhash.', 'StartDate': '8/14/2013', 'DueDate': '9/3/2013', 'ClosedDate': '9/3/2013', 'Notes': 'NULL', 'ProjectName': 'Finalization of Subhash Report'}
,
{'WorkOrderID': '2371', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/30/2013', 'WorkOrderDescription': 'Update current factsheet with the 2013 awarded maps and conversions.', 'StartDate': '8/30/2013', 'DueDate': '10/1/2013', 'ClosedDate': '10/1/2013', 'Notes': 'NULL', 'ProjectName': 'Factsheet Update incl SM13'}
,
{'WorkOrderID': '2372', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/1/2013', 'WorkOrderDescription': 'Webs Edge Production Company making video of NBMG.  Cart staff to assist with planning and technical aspects.', 'StartDate': '9/1/2013', 'DueDate': '9/30/2013', 'ClosedDate': '9/30/2013', 'Notes': 'NULL', 'ProjectName': 'Webs Edge Film'}
,
{'WorkOrderID': '2373', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/1/2013', 'WorkOrderDescription': 'Collection of on-site drilling samples', 'StartDate': '9/1/2013', 'DueDate': '4/30/2014', 'ClosedDate': '4/30/2014', 'Notes': 'NULL', 'ProjectName': 'On-Site Drilling'}
,
{'WorkOrderID': '2374', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'Rework the layout of both the NHMPC and NESC websites to increase efficiency within the categories.', 'StartDate': '10/1/2013', 'DueDate': '12/31/2013', 'ClosedDate': '12/31/2013', 'Notes': 'NULL', 'ProjectName': 'Website re-design for NHMPC and NESC'}
,
{'WorkOrderID': '2375', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'Help prepare map as an M-series publication.', 'StartDate': '10/1/2013', 'DueDate': '12/31/2013', 'ClosedDate': '12/31/2013', 'Notes': 'NULL', 'ProjectName': 'BR16 Map'}
,
{'WorkOrderID': '2376', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'Design new CREG website', 'StartDate': '10/1/2013', 'DueDate': '11/15/2013', 'ClosedDate': '11/15/2013', 'Notes': 'NULL', 'ProjectName': 'CREG Website Re-design'}
,
{'WorkOrderID': '2377', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'For general administration of statemap 2013, including match. Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Statemap 2013 Admin Master'}
,
{'WorkOrderID': '2378', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'Prepare Northern Grant Range as a deliverable open file report.', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 North Grant Range'}
,
{'WorkOrderID': '2379', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'Prepare Mt Rose Quadrangle as an open file Statemap deliverable', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Mt Rose Quadrangle'}
,
{'WorkOrderID': '2380', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'GIS Conversion, USGS Open File OF 94-625, Clark, Lincoln County. Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Farrier GIS Conversion'}
,
{'WorkOrderID': '2381', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'GIS Conversion, USGS Bulletin B-1179, Eureka County, 1:62,500 Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Frenchie Creek Quadrangle GIS Conversion'}
,
{'WorkOrderID': '2382', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'GIS Conversion, USGS Map GQ-1393, 1:62500 Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Lee Quadrangle GIS Conversion'}
,
{'WorkOrderID': '2383', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'GIS Conversion, USGS Miscellaneous Geologic Investigations Map I-1136, scale 1:125000 Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Ruby Mountains GIS Conversion'}
,
{'WorkOrderID': '2384', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'GIS Conversion, Elko County, USGS Miscellaneous Geologic Investigations Map I-2629 GIS Conversion, Elko County, USGS MF-1846 Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Spruce Mountain 4 GIS Conversion'}
,
{'WorkOrderID': '2385', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'GIS Conversion, Clark County, USGS Map GQ-1714 GIS Conversion, Elko County, USGS Miscellaneous Investigations Series Map I-2082 Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Elko Hills GIS Conversion'}
,
{'WorkOrderID': '2386', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'GIS Conversion, Elko County, NBMG Field Services Map FS4 Closed on 9/30/2014', 'StartDate': '10/1/2013', 'DueDate': '7/31/2014', 'ClosedDate': '7/31/2014', 'Notes': 'NULL', 'ProjectName': 'SM13 Windermere Hills GIS Conversion'}
,
{'WorkOrderID': '2387', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/16/2013', 'WorkOrderDescription': 'Information to be provided by John Muntean', 'StartDate': '10/16/2013', 'DueDate': '11/30/2013', 'ClosedDate': '11/30/2013', 'Notes': 'NULL', 'ProjectName': 'Sage Grouse Maps'}
,
{'WorkOrderID': '2388', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/16/2013', 'WorkOrderDescription': 'Update active mines and energy producers map, but not as a peer reviewed map to save on costs and to expedite the release.  Previous version:  M170', 'StartDate': '10/16/2013', 'DueDate': '3/14/2014', 'ClosedDate': '3/14/2014', 'Notes': 'NULL', 'ProjectName': 'Active Mines Map Update'}
,
{'WorkOrderID': '2389', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/29/2013', 'WorkOrderDescription': 'Typeset and update layout, pre-press, print with vendor.  Print release #127444114Billed DOM for printing on invoice #24953', 'StartDate': '10/29/2013', 'DueDate': '11/30/2013', 'ClosedDate': '11/30/2013', 'Notes': 'NULL', 'ProjectName': 'Major Mines 2012'}
,
{'WorkOrderID': '2390', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '11/19/2013', 'WorkOrderDescription': 'Assist UNR Cooperative Extension with radon maps and images for January presentations during Radon Action Month.', 'StartDate': '11/19/2013', 'DueDate': '12/20/2013', 'ClosedDate': '12/20/2013', 'Notes': 'NULL', 'ProjectName': 'Radon Maps'}
,
{'WorkOrderID': '2391', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/10/2013', 'WorkOrderDescription': 'Typeset/prepare report for Open File Report publication', 'StartDate': '12/10/2013', 'DueDate': '2/28/2014', 'ClosedDate': '2/28/2014', 'Notes': 'NULL', 'ProjectName': 'Eglington Fault OFR'}
,
{'WorkOrderID': '2392', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/10/2013', 'WorkOrderDescription': 'Modify existing figure and redraft one that was done by someone else (no original files).', 'StartDate': '12/10/2013', 'DueDate': '3/15/2014', 'ClosedDate': '3/15/2014', 'Notes': 'NULL', 'ProjectName': 'Earthquake Figures'}
,
{'WorkOrderID': '2393', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2014', 'WorkOrderDescription': 'This work order is issued to track all work needed to maintain the NBMG web page', 'StartDate': '1/1/2014', 'DueDate': '6/30/2014', 'ClosedDate': '6/30/2014', 'Notes': 'NULL', 'ProjectName': 'Web Maintenance 1st Half 2014'}
,
{'WorkOrderID': '2394', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/9/2014', 'WorkOrderDescription': 'Organize chapters, typeset, layout, maintain consistency,then post to the web.', 'StartDate': '1/9/2014', 'DueDate': '2/13/2014', 'ClosedDate': '2/13/2014', 'Notes': 'NULL', 'ProjectName': 'Mineral Industry 2012'}
,
{'WorkOrderID': '2395', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/26/2014', 'WorkOrderDescription': 'Prepare South Eureka open file for review and M-series release. Partial funding by GSN', 'StartDate': '3/26/2014', 'DueDate': '8/29/2014', 'ClosedDate': '8/29/2014', 'Notes': 'NULL', 'ProjectName': 'South Eureka M-Series'}
,
{'WorkOrderID': '2396', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/10/2014', 'WorkOrderDescription': 'Help student prepare map for open-file release. Map released as OF 14-4.', 'StartDate': '4/10/2014', 'DueDate': '5/13/2014', 'ClosedDate': '5/13/2014', 'Notes': 'NULL', 'ProjectName': 'Terrill Mountains (Chad Carlson)'}
,
{'WorkOrderID': '2397', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/9/2014', 'WorkOrderDescription': 'Prepare map for Statemap deliverable.  Assist with GIS and Cartography as needed.  Grant account number to be determined at a later date.', 'StartDate': '5/9/2014', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Heelfly Creek'}
,
{'WorkOrderID': '2398', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/2/2012', 'WorkOrderDescription': 'Create generalized geology map (even more simplified than the page-size map) for colleague to use for mosaic artwork for geology meeting.  This work order was created for archival purposes.', 'StartDate': '8/2/2012', 'DueDate': '10/2/2012', 'ClosedDate': '10/2/2012', 'Notes': 'NULL', 'ProjectName': 'Generalize Geology Map-4-Mosaic'}
,
{'WorkOrderID': '2399', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/24/2014', 'WorkOrderDescription': 'Create brochure for CREG using information John provides.  Rack Card format (4 in x 9 in)', 'StartDate': '1/24/2014', 'DueDate': '2/28/2014', 'ClosedDate': '2/28/2014', 'Notes': 'NULL', 'ProjectName': 'CREG Brochure'}
,
{'WorkOrderID': '2400', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '4/22/2014', 'WorkOrderDescription': 'Develop and publish a 2015 Bureau Calendar for retail sale. Printing costs - $3868.90', 'StartDate': '4/22/2014', 'DueDate': '9/15/2014', 'ClosedDate': '9/15/2014', 'Notes': 'NULL', 'ProjectName': 'Calendar, NBMG, 2015'}
,
{'WorkOrderID': '2401', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/1/2013', 'WorkOrderDescription': 'Support for ESW 2013.  This work order was issued for tracking purposes only.  Work complete.', 'StartDate': '10/1/2013', 'DueDate': '10/11/2013', 'ClosedDate': '10/11/2013', 'Notes': 'NULL', 'ProjectName': 'Earth Science Week 2013'}
,
{'WorkOrderID': '2402', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/17/2013', 'WorkOrderDescription': 'Design a Staff Directory sign for the Mechanical Engineering Department', 'StartDate': '10/17/2013', 'DueDate': '12/31/2013', 'ClosedDate': '12/31/2013', 'Notes': 'NULL', 'ProjectName': 'Directory Sign for Mechanical Engineering Department'}
,
{'WorkOrderID': '2403', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/6/2014', 'WorkOrderDescription': 'Nevada Mining Association Education Committee field trip.  Geo- and Eco-Mapping around DRI.  Cover page and post to web (web maintenance).', 'StartDate': '6/6/2014', 'DueDate': '6/6/2014', 'ClosedDate': '6/6/2014', 'Notes': 'NULL', 'ProjectName': 'E-55 - NBMG Educational Series'}
,
{'WorkOrderID': '2404', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '6/11/2014', 'WorkOrderDescription': 'Update .pdf file with new scans of pages with updated photos to improve the photo quality.  There is no billing for this work; all work was conducted at the publication sales office.  This work order was issued for archival need only.', 'StartDate': '6/11/2014', 'DueDate': '6/11/2014', 'ClosedDate': '6/11/2014', 'Notes': 'NULL', 'ProjectName': 'B62 Geology & Mineral Deposits of Clark County'}
,
{'WorkOrderID': '2405', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2014', 'WorkOrderDescription': 'This work order is issued to track all work required to maintain the NBMG web page.', 'StartDate': '7/1/2014', 'DueDate': '12/31/2014', 'ClosedDate': '12/31/2014', 'Notes': 'NULL', 'ProjectName': 'Web Maintenance 2nd Half 2014'}
,
{'WorkOrderID': '2406', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/28/2014', 'WorkOrderDescription': 'Typeset and update layout, pre-press, print with vendor.', 'StartDate': '7/28/2014', 'DueDate': '10/31/2014', 'ClosedDate': '10/31/2014', 'Notes': 'NULL', 'ProjectName': 'Major Mines 2013'}
,
{'WorkOrderID': '2407', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2014', 'WorkOrderDescription': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'StartDate': '7/1/2014', 'DueDate': '12/31/2014', 'ClosedDate': '12/31/2014', 'Notes': 'NULL', 'ProjectName': 'Prelim & Misc 2nd Half 2014'}
,
{'WorkOrderID': '2408', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/24/2014', 'WorkOrderDescription': 'Compile information from faculty and staff evaluations from 2012 and 2013 to aid the director with his report.', 'StartDate': '7/24/2014', 'DueDate': '12/31/2014', 'ClosedDate': '12/31/2014', 'Notes': 'NULL', 'ProjectName': 'Biennial Report 2014'}
,
{'WorkOrderID': '2409', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2014', 'WorkOrderDescription': 'Produce poster for GRC conference.', 'StartDate': '8/1/2014', 'DueDate': '9/30/2014', 'ClosedDate': '9/30/2014', 'Notes': 'NULL', 'ProjectName': 'GRC 2014 Poster'}
,
{'WorkOrderID': '2410', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/4/2014', 'WorkOrderDescription': "Prepare an index map of 7.5 minute quads in Carson City, Douglas, Lyon and Storey counties for Mary's upcoming geographic names book.", 'StartDate': '8/4/2014', 'DueDate': '8/11/2014', 'ClosedDate': '8/11/2014', 'Notes': 'when work is complete, invoice Mary Anasari direct. Mary Ansari billed directly on Inv 26115; paid on 9/11/2014.', 'ProjectName': 'Quad Index Map'}
,
{'WorkOrderID': '2411', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/13/2014', 'WorkOrderDescription': 'Update Statemap factsheet with 2014 awarded maps.  Note:  this is a non-funded work order.', 'StartDate': '8/13/2014', 'DueDate': '9/30/2014', 'ClosedDate': '9/30/2014', 'Notes': 'NULL', 'ProjectName': 'Statemap 2014 Factsheet'}
,
{'WorkOrderID': '2412', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/20/2014', 'WorkOrderDescription': 'Assist Jim with GIS for creating figures/produce figures', 'StartDate': '8/20/2014', 'DueDate': '8/29/2014', 'ClosedDate': '8/29/2014', 'Notes': 'NULL', 'ProjectName': 'Salt Paper'}
,
{'WorkOrderID': '2413', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/20/2014', 'WorkOrderDescription': 'Provide support for 2015 Statemap proposal preparation.  Prepare figures and assist geologist with figures.', 'StartDate': '8/20/2014', 'DueDate': '10/31/2014', 'ClosedDate': '10/31/2014', 'Notes': 'NULL', 'ProjectName': 'Statemap 2015 Proposal Support'}
,
{'WorkOrderID': '2414', 'EmployeeID': '105614', 'CustomerID': '4061', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '9/2/2014', 'WorkOrderDescription': 'Prepare geologic ap for statemap 2014 deliverable.  Assist with GIS support as needed.', 'StartDate': '9/2/2014', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Pequop Summit'}
,
{'WorkOrderID': '2415', 'EmployeeID': '105614', 'CustomerID': '4062', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '9/18/2014', 'WorkOrderDescription': 'Prepare trip log ES E-56; prepare sign-up files; notices on web.', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Publication E-56 (Carson Rocks!)', 'EmployeeID': '9/18/2014', 'CustomerID': '10/1/2014', 'PriorityID': '10/1/2014', 'StatusID': 'NULL', 'SubmittedDate': 'Earth Science Week 2014', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2416', 'EmployeeID': '105614', 'CustomerID': '4000', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/17/2014', 'WorkOrderDescription': 'Produce well diagrams and other graphics/images for Lisa.', 'StartDate': '10/17/2014', 'DueDate': '10/17/2014', 'ClosedDate': '10/17/2014', 'Notes': 'Work was completed and billed in March.  This work order is issued for archival purposes only.', 'ProjectName': 'Well Diagrams'}
,
{'WorkOrderID': '2417', 'EmployeeID': '105614', 'CustomerID': '4001', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/30/2014', 'WorkOrderDescription': 'Prepare map, written by outside authors from Wyoming, provided by Art Snoke of the Wyoming Geographic Survey for M-series publication. GSN partially funded this project; provided $1250', 'StartDate': '9/30/2014', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'Welcome Quad'}
,
{'WorkOrderID': '2418', 'EmployeeID': '105614', 'CustomerID': '4002', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/1/2014', 'WorkOrderDescription': 'Help finalize new shopping cart launch.', 'StartDate': '10/1/2014', 'DueDate': '12/31/2014', 'ClosedDate': '12/31/2014', 'Notes': 'NULL', 'ProjectName': 'Shopping Cart Support'}
,
{'WorkOrderID': '2419', 'EmployeeID': '105614', 'CustomerID': '4003', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/6/2014', 'WorkOrderDescription': 'Compose descriptions into promotional flyer', 'StartDate': '10/6/2014', 'DueDate': '10/20/2014', 'ClosedDate': '10/20/2014', 'Notes': 'NULL', 'ProjectName': 'NBMG Open House Support'}
,
{'WorkOrderID': '2420', 'EmployeeID': '105614', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/16/2014', 'WorkOrderDescription': 'Add updates, minor layout revisions and release as a 2nd edition, per Jim.  Assigned to Rachel.', 'StartDate': '10/16/2014', 'DueDate': '10/31/2014', 'ClosedDate': '10/31/2014', 'Notes': 'NULL', 'ProjectName': 'Emerson Pass Update'}
,
{'WorkOrderID': '2421', 'EmployeeID': '105614', 'CustomerID': '4005', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/16/2014', 'WorkOrderDescription': 'Update CREG website with edits provided by John Muntean.  Assigned to Rachel.', 'StartDate': '10/16/2014', 'DueDate': '10/31/2014', 'ClosedDate': '10/31/2014', 'Notes': 'NULL', 'ProjectName': 'CREG Website Update'}
,
{'WorkOrderID': '2422', 'EmployeeID': '105614', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/10/2014', 'WorkOrderDescription': 'Create a National Geologic Database of Nevada mapping.  Work currently assigned to Rachel Micander and Jennifer Vlcan', 'StartDate': '10/10/2014', 'DueDate': '3/31/2015', 'ClosedDate': '3/31/2015', 'Notes': 'NULL', 'ProjectName': 'NGMDB National Geologic Map Database Project'}
,
{'WorkOrderID': '2423', 'EmployeeID': '105614', 'CustomerID': '4007', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/4/2014', 'WorkOrderDescription': "Prepare thesis map for open file publication.  this map is on the RBM open pit gold deposit at the Bald Mountain Mine in White Pine county.  It's by Dan Pace and is a plate in his thesis.", 'StartDate': '11/4/2014', 'DueDate': '12/31/2014', 'ClosedDate': '12/31/2014', 'Notes': 'NULL', 'ProjectName': 'Bald Mountain Mine'}
,
{'WorkOrderID': '2424', 'EmployeeID': '105614', 'CustomerID': '4008', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/12/2014', 'WorkOrderDescription': 'Prepare map for 2014 Statemap deliverable and open-file publication.', 'StartDate': '11/12/2014', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Sloan'}
,
{'WorkOrderID': '2425', 'EmployeeID': '105614', 'CustomerID': '4009', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/15/2014', 'WorkOrderDescription': 'Prepare for release as an open-file publication.', 'StartDate': '12/15/2014', 'DueDate': '3/31/2015', 'ClosedDate': '3/31/2015', 'Notes': 'NULL', 'ProjectName': 'Pinyon Range'}
,
{'WorkOrderID': '2426', 'EmployeeID': '105614', 'CustomerID': '4010', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/15/2014', 'WorkOrderDescription': "Prepare Corina Forson's theses map for open-file publication; assist with GIS as needed.", 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Work to be done by Katie Ryan and Rachel Micander.', 'EmployeeID': '12/15/2014', 'CustomerID': '2/28/2015', 'PriorityID': '2/28/2015', 'StatusID': 'NULL', 'SubmittedDate': 'Seven Troughs', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2427', 'EmployeeID': '105614', 'CustomerID': '4011', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '12/23/2014', 'WorkOrderDescription': 'Fix maps on the NBMG website that are missing Topos.  Locate Topo plates in archiveand scan or download; use Global Mapper to add into geologic maps.  Work to be performed by Jack and Rachel.', 'StartDate': '12/23/2014', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'Geologic Map TopoBases'}
,
{'WorkOrderID': '2428', 'EmployeeID': '105614', 'CustomerID': '4012', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/23/2014', 'WorkOrderDescription': 'This work order is issued to track all work required to maintain the NBMG web page.', 'StartDate': '12/23/2014', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'Web Maintenance 1st Half 2015'}
,
{'WorkOrderID': '2429', 'EmployeeID': '105614', 'CustomerID': '4013', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion, USGS Open File OF82-438, Clark County, 1:24,000.  Work to be done by available cartographers.', 'StartDate': '1/2/2015', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Black Hills'}
,
{'WorkOrderID': '2430', 'EmployeeID': '105614', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion, USGS MF-1514, Clark County, 1:24,000.  Work to be done by available cartographers.', 'StartDate': '1/2/2015', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Goodsprings District Conversion'}
,
{'WorkOrderID': '2431', 'EmployeeID': '105614', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion, USGS I1197, Clark County, 1:24,000', 'StartDate': '1/2/2015', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Mercury Conversion'}
,
{'WorkOrderID': '2432', 'EmployeeID': '105614', 'CustomerID': '4016', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion USGS I2086, Clark County, 1:24,000', 'StartDate': '1/2/2015', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Southern Sheep Range'}
,
{'WorkOrderID': '2433', 'EmployeeID': '105614', 'CustomerID': '4017', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/7/2015', 'WorkOrderDescription': 'Provide GIS/Cartographic support as needed for final deliverables/maps/plates.  Initially, set-up catalog of existing maps and data for authors and provide GIS assistance as needed.', 'StartDate': '1/7/2015', 'DueDate': '9/30/2015', 'ClosedDate': '10/6/2015', 'Notes': 'NULL', 'ProjectName': 'Geothermal Play Fairways'}
,
{'WorkOrderID': '2434', 'EmployeeID': '105614', 'CustomerID': '4018', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/1/2015', 'WorkOrderDescription': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'StartDate': '1/1/2015', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'Prelim & Misc 1st Half 2015'}
,
{'WorkOrderID': '2435', 'EmployeeID': '105614', 'CustomerID': '4019', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/1/2015', 'WorkOrderDescription': 'All GSN Sumposium related work including design of NBMG pop-up display, time manning booth, etc.', 'StartDate': '3/1/2015', 'DueDate': '5/31/2015', 'ClosedDate': '5/31/2015', 'Notes': 'NULL', 'ProjectName': 'GSN Symposium Booth Materials and Support'}
,
{'WorkOrderID': '2436', 'EmployeeID': '105614', 'CustomerID': '4020', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/11/2015', 'WorkOrderDescription': 'Organize chapters, typeset, layout, maintain consistency; then post to web', 'StartDate': '3/11/2015', 'DueDate': '6/30/2015', 'ClosedDate': '6/30/2015', 'Notes': 'NULL', 'ProjectName': 'Mineral Industry 2013'}
,
{'WorkOrderID': '2437', 'EmployeeID': '105614', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/22/2015', 'WorkOrderDescription': 'Update Fallon Forge Maps.  Work to be performed by Rachel and Jennifer', 'StartDate': '1/22/2015', 'DueDate': '2/27/2015', 'ClosedDate': '2/27/2015', 'Notes': 'NULL', 'ProjectName': 'Geothermal - Forge'}
,
{'WorkOrderID': '2438', 'EmployeeID': '105614', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/8/2015', 'WorkOrderDescription': 'Design a pop-up display for use at GSN and other conferences.  Co-ordinate with Marcom, print company, etc.', 'StartDate': '4/8/2015', 'DueDate': '5/17/2015', 'ClosedDate': '5/17/2015', 'Notes': 'NULL', 'ProjectName': 'CREG Pop-up Display'}
,
{'WorkOrderID': '2439', 'EmployeeID': '105614', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '5/1/2015', 'WorkOrderDescription': "Prepare basemap with new Global Mapper procedure to include in Corina's deliverable geologic map of the Geysers,CA.", 'StartDate': '5/1/2015', 'DueDate': '6/4/2015', 'ClosedDate': '6/4/2015', 'Notes': 'NULL', 'ProjectName': 'Basemap/Hillshade for The Geysers Map'}
,
{'WorkOrderID': '2440', 'EmployeeID': '105614', 'CustomerID': '4024', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '5/1/2015', 'WorkOrderDescription': 'Typeset, compose, layout and publication of the Bureau 2016 Geologic Calendar ', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Printing cost:  $3779.27 for 900 copies.', 'EmployeeID': '5/1/2015', 'CustomerID': '9/30/2015', 'PriorityID': '9/30/2015', 'StatusID': 'NULL', 'SubmittedDate': 'Calendar, NBMG 2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2441', 'EmployeeID': '105614', 'CustomerID': '4025', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '5/27/2015', 'WorkOrderDescription': 'Produce series of maps. charts; provide GIS assistance for land calculations. Work to be done by Jennifer and Rachel.', 'StartDate': '5/27/2015', 'DueDate': '6/19/2015', 'ClosedDate': '6/19/2015', 'Notes': 'NULL', 'ProjectName': 'Northern NV Sage Grouse Maps'}
,
{'WorkOrderID': '2442', 'EmployeeID': '105614', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/13/2015', 'WorkOrderDescription': 'Release analytical data as an open-file.  Data accompanies GSN publication.  This work order is issued for Archival Purposes.', 'StartDate': '1/13/2015', 'DueDate': '1/14/2015', 'ClosedDate': '1/14/2015', 'Notes': 'NULL', 'ProjectName': 'GSN 2015 Symposium Volume Analytical Data'}
,
{'WorkOrderID': '2443', 'EmployeeID': '105614', 'CustomerID': '4027', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '6/10/2015', 'WorkOrderDescription': 'Publication of report and release of GIS data.  See scope of work for details.', 'StartDate': '6/10/2015', 'DueDate': '6/30/2016', 'ClosedDate': '4/17/2016', 'Notes': 'NULL', 'ProjectName': 'SNWA Eastern Nevada Report'}
,
{'WorkOrderID': '2444', 'EmployeeID': '105614', 'CustomerID': '4028', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/1/2015', 'WorkOrderDescription': 'Fault and Seismicity maps for 1 x 2 degree quads; possibly release as open-files.', 'StartDate': '7/1/2015', 'DueDate': '8/24/2015', 'ClosedDate': '8/24/2015', 'Notes': 'NULL', 'ProjectName': 'EQ and Volcanic Hazards in N NV 1 x 2 degree Quads'}
,
{'WorkOrderID': '2445', 'EmployeeID': '105614', 'CustomerID': '4029', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2015', 'WorkOrderDescription': 'This work order is issued to track all work required to maintain the NBMG web page.', 'StartDate': '7/1/2015', 'DueDate': '12/31/2015', 'ClosedDate': '12/31/2015', 'Notes': 'NULL', 'ProjectName': 'Web Maintenance 2nd Half 2015'}
,
{'WorkOrderID': '2446', 'EmployeeID': '105614', 'CustomerID': '4030', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2015', 'WorkOrderDescription': 'This work order is issued tp track work performed without funding and that does not require a separate work order.', 'StartDate': '7/1/2015', 'DueDate': '12/31/2015', 'ClosedDate': '12/31/2015', 'Notes': 'NULL', 'ProjectName': 'Prelim & Misc 2nd Half 2015'}
,
{'WorkOrderID': '2447', 'EmployeeID': '105614', 'CustomerID': '4031', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion, unpublished map of Boulder City SE. Work to be done by available cartographers.', 'StartDate': '1/2/2015', 'DueDate': '9/30/2015', 'ClosedDate': '9/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Boulder City SE unpub (GIS)'}
,
{'WorkOrderID': '2448', 'EmployeeID': '105614', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion unpublished map of Virgin Peak.  Work to be done by available Cartographers.', 'StartDate': '1/2/2015', 'DueDate': '9/30/2015', 'ClosedDate': '9/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Virgin Peak unpub (GIS)'}
,
{'WorkOrderID': '2449', 'EmployeeID': '105614', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion, updated USGS OF93-716, Clark County.  Work to be done by available Cartogaphers.', 'StartDate': '1/2/2015', 'DueDate': '9/30/2015', 'ClosedDate': '9/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Whitney Pocket Conversion'}
,
{'WorkOrderID': '2450', 'EmployeeID': '105614', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/2/2015', 'WorkOrderDescription': 'GIS Conversion, NBMG OF99-9.  Work to be done by available Cartographers.', 'StartDate': '1/2/2015', 'DueDate': '9/30/2015', 'ClosedDate': '9/30/2015', 'Notes': 'NULL', 'ProjectName': 'SM14 Emigrant Pass Conversion'}
,
{'WorkOrderID': '2451', 'EmployeeID': '105614', 'CustomerID': '4035', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/14/2015', 'WorkOrderDescription': 'Prepare for Open-File Release ', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Became a Statemap deliverable in July, 2016.', 'EmployeeID': '7/14/2015', 'CustomerID': '12/31/2015', 'PriorityID': '12/31/2015', 'StatusID': 'NULL', 'SubmittedDate': 'Herder Creek', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2452', 'EmployeeID': '105614', 'CustomerID': '4036', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/14/2015', 'WorkOrderDescription': 'Update maps-4-packets and displays.  Prepare KMZ file of sensitive data for Cooperative Extension use only.', 'StartDate': '7/14/2015', 'DueDate': '9/30/2015', 'ClosedDate': '9/30/2015', 'Notes': 'NULL', 'ProjectName': 'Radon Maps'}
,
{'WorkOrderID': '2453', 'EmployeeID': '105614', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/1/2015', 'WorkOrderDescription': 'This work orderis to track the time spent by the Crtogrphy department at meeting, conferences, classes, etc.', 'StartDate': '7/1/2015', 'DueDate': '6/30/2016', 'ClosedDate': '6/30/2016', 'Notes': 'NULL', 'ProjectName': 'Meeting and Conference Attendance'}
,
{'WorkOrderID': '2454', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/14/2015', 'WorkOrderDescription': 'Edits to bring to peer review; then edits/finalization for M-Series release.  Work to be performed by Katie Ryan and Rachel Wearne. ', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Closed Incomplete.  Map has been on hold since August, 2015.', 'EmployeeID': '7/14/2015', 'CustomerID': '12/31/2015', 'PriorityID': '12/31/2015', 'StatusID': 'NULL', 'SubmittedDate': 'Corn Creek Springs NW', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2455', 'EmployeeID': '105614', 'CustomerID': '4039', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/17/2015', 'WorkOrderDescription': 'compile flood resources and data, develop a flash flood database, and other related work', 'StartDate': '7/17/2015', 'DueDate': '7/17/2016', 'ClosedDate': '5/8/2016', 'Notes': 'NULL', 'ProjectName': 'Flood Research'}
,
{'WorkOrderID': '2456', 'EmployeeID': '105614', 'CustomerID': '4040', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/21/2015', 'WorkOrderDescription': 'ESW Field Trip October 17 and 18; Fire and Ice - Geology of the Mount Rose Quadrangle, Lake Tahoe, and the Carson Range.', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare Trip log, E-Signup files, notices on web', 'EmployeeID': '7/21/2015', 'CustomerID': '10/17/2015', 'PriorityID': '10/17/2015', 'StatusID': 'NULL', 'SubmittedDate': 'Earth Science Week 2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2457', 'EmployeeID': '105614', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/31/2015', 'WorkOrderDescription': 'Update the locations of potential URM buildings into the Hazus database and use Hazus to calculate the reduction in risk that may be achieved by running Hazus with and without them.', 'StartDate': '7/31/2015', 'DueDate': '11/19/2016', 'ClosedDate': '11/19/2016', 'Notes': 'NULL', 'ProjectName': 'URM Data Integration into HAZUS'}
,
{'WorkOrderID': '2458', 'EmployeeID': '105614', 'CustomerID': '4042', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/31/2015', 'WorkOrderDescription': "Update existing GIS layers and add additional layers to MyPlan, including earthquake hazards from potential URM's.  A layer to be added that depicts the historical ground ruptures in Nevada.", 'StartDate': '7/31/2015', 'DueDate': '11/19/2016', 'ClosedDate': '11/19/2016', 'Notes': 'NULL', 'ProjectName': 'Update MyPlan Website'}
,
{'WorkOrderID': '2459', 'EmployeeID': '105614', 'CustomerID': '4043', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/31/2015', 'WorkOrderDescription': 'The execution Hazus in support of state and local emergency response exercises, state and loal mitigation prioritization and planning, and public awareness campaigns.  A specific project to be the Hazus representation of the impacts of the largest histori', 'StartDate': '7/31/2015', 'DueDate': '11/19/2016', 'ClosedDate': '11/19/2016', 'Notes': 'NULL', 'ProjectName': 'Hazus Runs and Integration'}
,
{'WorkOrderID': '2460', 'EmployeeID': '105614', 'CustomerID': '4044', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/1/2015', 'WorkOrderDescription': 'Statemap proposal supoort (figures, conversion lists, meetings, advisory board/SMAC meeting, etc.', 'StartDate': '8/1/2015', 'DueDate': '11/1/2015', 'ClosedDate': '11/1/2015', 'Notes': 'NULL', 'ProjectName': 'Statemap 2016 Proposal Support'}
,
{'WorkOrderID': '2461', 'EmployeeID': '105614', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/1/2015', 'WorkOrderDescription': 'Prepare geologic map for Statemap deliverable and open file. ', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'OF 15-9', 'EmployeeID': '8/1/2015', 'CustomerID': '8/1/2016', 'PriorityID': '9/30/2015', 'StatusID': 'NULL', 'SubmittedDate': 'SM14 Kinsley Mountains', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2462', 'EmployeeID': '105614', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/1/2015', 'WorkOrderDescription': 'General map administrative and detail work to ensure accuracy of the Statemap project.  Times may or may not be billed. ', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '60 hours were transferred and billed.', 'EmployeeID': '8/1/2015', 'CustomerID': '9/30/2015', 'PriorityID': '9/30/2015', 'StatusID': 'NULL', 'SubmittedDate': 'SM14 Master', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2463', 'EmployeeID': '105614', 'CustomerID': '4047', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2015', 'WorkOrderDescription': 'This work order is issued to track salaries, travel, and indirect costs for the administration, planning, and execution of travel arrangements and reimbursements for NHMPC and subcommittee meetings.', 'StartDate': '8/1/2015', 'DueDate': '12/31/2016', 'ClosedDate': '4/30/2017', 'Notes': 'NULL', 'ProjectName': 'NDEM Mitigation Support'}
,
{'WorkOrderID': '2464', 'EmployeeID': '105614', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/20/2015', 'WorkOrderDescription': 'Typeset and update layout, pre-press, print with vendor.  Mike Visher at NDom to be invoiced for printing. ', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Allegra Invoice 115717 paid; NDOM Inv#116INV28598 emailed to Mike Visher.', 'EmployeeID': '8/20/2015', 'CustomerID': '10/31/2015', 'PriorityID': '10/31/2015', 'StatusID': 'NULL', 'SubmittedDate': 'Major Mines 2014', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2465', 'EmployeeID': '105614', 'CustomerID': '4049', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/27/2015', 'WorkOrderDescription': "Develop an earthquake section of the Carson City Hazard Mitigation Plan by researching and presenting major historical eq's, analyzing major faults that pose a threat to the city and then summarizing this information in order to develop an eq vulnerabilit", 'StartDate': '8/27/2015', 'DueDate': '12/31/2015', 'ClosedDate': '12/31/2015', 'Notes': 'NULL', 'ProjectName': 'EQ/Carson City Haz Mitigation'}
,
{'WorkOrderID': '2466', 'EmployeeID': '105614', 'CustomerID': '4050', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/1/2015', 'WorkOrderDescription': 'Assist Geodosy with organization / maintenance of station permits.  Coordinate with land owners, etc on status of permits.  Organize information into spreadsheet or database using GIS and Google Earth so Geodosy can derive specific information as needed. ', 'StartDate': '9/1/2015', 'DueDate': '12/31/2018', 'ClosedDate': '2/3/2019', 'Notes': 'NULL', 'ProjectName': 'MAGNET Permitting'}
,
{'WorkOrderID': '2467', 'EmployeeID': '105614', 'CustomerID': '4051', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/30/2015', 'WorkOrderDescription': 'Format final layout to publish as an open file report', 'StartDate': '9/30/2015', 'DueDate': '11/30/2015', 'ClosedDate': '11/30/2015', 'Notes': 'NULL', 'ProjectName': 'White Pine County Geothermal Resource Potential'}
,
{'WorkOrderID': '2468', 'EmployeeID': '105614', 'CustomerID': '4052', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/1/2015', 'WorkOrderDescription': 'Assist with formatting and rough editing of 1915 Earthquake Centennial Guidebook and other related support.  Possible publication as an open-file report. ', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Publication Educational Series E-58', 'EmployeeID': '10/1/2015', 'CustomerID': '10/31/2015', 'PriorityID': '10/31/2015', 'StatusID': 'NULL', 'SubmittedDate': '1915 Earthquake Guidebook / Support', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2469', 'EmployeeID': '105614', 'CustomerID': '4053', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/6/2015', 'WorkOrderDescription': 'Assist with materials and other suppor for the 2015 open house.', 'StartDate': '10/6/2015', 'DueDate': '10/29/2015', 'ClosedDate': '10/29/2015', 'Notes': 'NULL', 'ProjectName': '2015 Open House Support'}
,
{'WorkOrderID': '2470', 'EmployeeID': '105614', 'CustomerID': '4054', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/6/2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for Statemap deliverable and Open File Report. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Statemap deliverable changed to Herder Creek due to injury to the principal geologist.', 'EmployeeID': '10/6/2015', 'CustomerID': '7/8/2016', 'PriorityID': '7/8/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Statemap 2015 Independence Valley NE', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2471', 'EmployeeID': '105614', 'CustomerID': '4055', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/12/2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Work Order is issued for figures that are included in the Statemap 2017 proposal.  This also includes revamp/reorganization/improvement in advance.', 'EmployeeID': '11/12/2015', 'CustomerID': '10/31/2016', 'PriorityID': '10/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Proposal Figures for SM17', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2472', 'EmployeeID': '105614', 'CustomerID': '4056', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '12/10/2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Review drafts provided by David Davis and John Muntean; edit layout; organize pages and sections; print qty (to be provided at a later date) for hard copy distribution; post on web.', 'EmployeeID': '12/10/2015', 'CustomerID': '3/1/2016', 'PriorityID': '3/1/2016', 'StatusID': 'NULL', 'SubmittedDate': 'MI 2014', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2473', 'EmployeeID': '105614', 'CustomerID': '4057', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2012', 'WorkOrderDescription': 'Eureka Paper already complete.  This work order issued in order to archive files.', 'StartDate': '7/1/2012', 'DueDate': '6/30/2013', 'ClosedDate': '6/30/2013', 'Notes': 'NULL', 'ProjectName': 'Eureka Paper'}
,
{'WorkOrderID': '2474', 'EmployeeID': '105614', 'CustomerID': '4058', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '6/15/2015', 'WorkOrderDescription': 'Pull together existing maps (GIS data and /or georeferenced images) into one mxd/print to present to NPS.', 'StartDate': '6/15/2015', 'DueDate': '7/1/2015', 'ClosedDate': '7/1/2015', 'Notes': 'No work done on this project.', 'ProjectName': 'Tule Springs NM'}
,
{'WorkOrderID': '2475', 'EmployeeID': '105614', 'CustomerID': '4059', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/18/2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare Bateman Spring OF2000-08 for M-Series release.', 'EmployeeID': '12/18/2015', 'CustomerID': '12/30/2016', 'PriorityID': '10/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Bateman Spring - M-Series', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2476', 'EmployeeID': '105614', 'CustomerID': '4060', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/18/2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare files for Open File Release of analytical data accompanying a GSN article.', 'EmployeeID': '12/18/2015', 'CustomerID': '1/31/2016', 'PriorityID': '1/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Goldbanks Open File Report', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2477', 'EmployeeID': '105600', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track all work required to maintain the NBMG web page.', 'EmployeeID': '1/1/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Web Maintenance 1st Half 2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2478', 'EmployeeID': '105600', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'EmployeeID': '1/1/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Prelim and Misc 1st Half 2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2479', 'EmployeeID': '105600', 'CustomerID': '4000', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': 'This work order is issued to track general administrative work related to Statemap.', 'StartDate': '1/1/2016', 'DueDate': '7/8/2016', 'ClosedDate': '7/8/2016', 'Notes': 'These hours were not billed - they were applied as match.', 'ProjectName': 'Statemap 2015 Master'}
,
{'WorkOrderID': '2480', 'EmployeeID': '105600', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/15/2015', 'WorkOrderDescription': 'SM15 Welcome GIS Conversion', 'StartDate': '1/1/2016', 'DueDate': '1/13/2016', 'ClosedDate': '7/8/2016', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2481', 'EmployeeID': '105600', 'CustomerID': '4002', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitally convert Thesis Map by Hurlow (1987) of the Southwestern East Humboldt Range.', 'EmployeeID': '1/1/2016', 'CustomerID': '7/8/2016', 'PriorityID': '7/8/2016', 'StatusID': 'NULL', 'SubmittedDate': 'SM 15  Southwestern East Humboldt Range GIS Conversion', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2482', 'EmployeeID': '105600', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitally convert Thesis Map by Lush (1982) of the Northern East Humboldt Range.', 'EmployeeID': '1/1/2016', 'CustomerID': '7/8/2016', 'PriorityID': '7/8/2016', 'StatusID': 'NULL', 'SubmittedDate': 'SM 15 Northern East Humboldt Range GIS Conversion', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2483', 'EmployeeID': '105600', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitally convert Open NBMG publication OF 13-06 Valley of Fire East quadrangle.', 'EmployeeID': '1/1/2016', 'CustomerID': '7/8/2016', 'PriorityID': '7/8/2016', 'StatusID': 'NULL', 'SubmittedDate': 'SM 15 Valley of Fire East GIS Conversion', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2484', 'EmployeeID': '105600', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Digitally convert NBMG publication OF 98-7 West Half of the Fourth of July quadrangle.', 'EmployeeID': '1/1/2016', 'CustomerID': '7/8/2016', 'PriorityID': '7/8/2016', 'StatusID': 'NULL', 'SubmittedDate': 'SM 15 West Half of the Fourth of July GIS Conversion', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2485', 'EmployeeID': '105600', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/14/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Produce Churchill County Q-Fault, Earthquake and Volcano map and provide other GUS/graphic support as required.', 'EmployeeID': '1/14/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Churchill County Hazard Mitigation', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2486', 'EmployeeID': '105600', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/14/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Provide service as needed to complete project (2D seismic line/cross section work, etc.).  Work primarily to be done by Rachel.', 'EmployeeID': '1/14/2016', 'CustomerID': '10/1/2019', 'PriorityID': '11/2/2019', 'StatusID': 'NULL', 'SubmittedDate': 'Fallon Forge', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2487', 'EmployeeID': '105600', 'CustomerID': '4008', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/14/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for open-file release.  Generate cross section profiles and bring all components of map to open file level cartographically. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Open File Report 16-1', 'EmployeeID': '1/14/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'McDermitt Caldera', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2488', 'EmployeeID': '105600', 'CustomerID': '4009', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/22/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare for grant deliverable and Open File release.', 'EmployeeID': '1/22/2016', 'CustomerID': '7/8/2016', 'PriorityID': '7/8/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Statemap 2015 Boulder City', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2489', 'EmployeeID': '105600', 'CustomerID': '4010', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/28/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for Statemap deliverable and open-file release.', 'EmployeeID': '1/28/2016', 'CustomerID': '7/8/2016', 'PriorityID': '7/8/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Statemap 2015 Mount Rose NW South Half', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2490', 'EmployeeID': '105600', 'CustomerID': '4011', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/28/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Assist with figures for proposal and any other support.', 'EmployeeID': '1/28/2016', 'CustomerID': '2/18/2016', 'PriorityID': '2/18/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Las Vegas Proposal', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2491', 'EmployeeID': '105600', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/28/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare Sue Beard map for peer-review and M-series release', 'EmployeeID': '1/28/2016', 'CustomerID': '3/2/2016', 'PriorityID': '3/6/2019', 'StatusID': 'NULL', 'SubmittedDate': 'Whitney Pocket', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2492', 'EmployeeID': '105600', 'CustomerID': '4013', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/7/2016', 'WorkOrderDescription': 'Typeset, Compose, Edit, Print the 2017 Nevada Geology Calendar', 'StartDate': '3/7/2016', 'DueDate': '10/15/2016', 'ClosedDate': '10/15/2016', 'Notes': 'NULL', 'ProjectName': '2017 Nevada Geology Calendar'}
,
{'WorkOrderID': '2493', 'EmployeeID': '105600', 'CustomerID': '4014', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/10/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': ' Prepare poster for SSA meeting in Reno', 'EmployeeID': '3/10/2016', 'CustomerID': '3/31/2016', 'PriorityID': '3/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Faults Poster', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2494', 'EmployeeID': '105600', 'CustomerID': '4015', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/10/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Map was completed but never published. It includes much of the Apex Industrial Park situated along the Interstate 15 corridor, 25 minutes from McCarran Airport and within 5 hours of Los Angeles.  Apex has the potential to become one of the predominant i', 'EmployeeID': '3/10/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Apex Quadrangle', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2495', 'EmployeeID': '105600', 'CustomerID': '4016', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/10/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This map shows the distribution of valley fill sediments and major earthquake faults in Clayton Valley and will elucidate both the distribution of favorable brines and earthquake hazards in the area.  It is authored by geologists from Georgia Institute ', 'EmployeeID': '3/10/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Clayton Valley Surficial Geologic Map', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2496', 'EmployeeID': '105600', 'CustomerID': '4017', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/10/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': "This project is to provide funds to participate and sometimes lead outreach activities around the State.  In particular, for Ra chel Micander to assist at the Nevada Mining Association's Education Committee Teacher Workshop, March 20-24.", 'EmployeeID': '3/10/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Outreach Opportunities', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2497', 'EmployeeID': '105600', 'CustomerID': '4018', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/10/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This project is to launch an improved web application to provide an online interface for the sample collections at GBSSRL.  This work involves: 1)quality assurance of existing data to be incorporated into the web application, 2)file management and stand', 'EmployeeID': '3/10/2016', 'CustomerID': '6/30/2019', 'PriorityID': '4/12/2019', 'StatusID': 'NULL', 'SubmittedDate': 'Nevada Rocks Web Application', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2498', 'EmployeeID': '105600', 'CustomerID': '4019', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '3/10/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Additional project', 'EmployeeID': '3/10/2016', 'CustomerID': '11/19/2016', 'PriorityID': '11/19/2016', 'StatusID': 'NULL', 'SubmittedDate': 'State Hazard Mitigation Plan Updates Project #5', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2499', 'EmployeeID': '105600', 'CustomerID': '4020', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '4/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Layout / typesetting of GBCGE (Great Basin Center for Geothermal Energy) report for Wendy Calvin ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work was never finished after over a year, and work order was closed/canceled. Can re-open at a later date if authors choose to work on this again in', 'EmployeeID': '4/1/2016', 'CustomerID': '6/30/2016', 'PriorityID': '6/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'GBCGE Report', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2500', 'EmployeeID': '105600', 'CustomerID': '4021', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track all work required to update and maintain the NBMG web page.', 'EmployeeID': '7/1/2016', 'CustomerID': '12/31/2016', 'PriorityID': '12/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Web Maintenance 2nd Half 2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2501', 'EmployeeID': '105600', 'CustomerID': '4022', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'EmployeeID': '7/1/2016', 'CustomerID': '12/31/2016', 'PriorityID': '12/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'P & M 2nd Half 2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2502', 'EmployeeID': '105600', 'CustomerID': '4023', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is for tracking time spent participating in Outreach activities throughout the State.  It includes committee meetings, workshops and presentations, etc.', 'EmployeeID': '7/1/2016', 'CustomerID': '12/31/2016', 'PriorityID': '12/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Outreach Opportunities', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2503', 'EmployeeID': '105600', 'CustomerID': '4024', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '7/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Set-up and troubleshoot Geoexplorer  for John Muntean.', 'EmployeeID': '7/1/2016', 'CustomerID': '12/31/2016', 'PriorityID': '12/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Geoexplorer Set-up', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2504', 'EmployeeID': '105600', 'CustomerID': '4025', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/8/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare website and brochure for Microbeam Lab similar to CREG website and brochure', 'EmployeeID': '7/8/2016', 'CustomerID': '7/31/2016', 'PriorityID': '7/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Microbeam Laboratory Web Page and Brochure', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2505', 'EmployeeID': '105600', 'CustomerID': '4026', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/14/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Typeset and print Major Mines booklet', 'EmployeeID': '7/14/2016', 'CustomerID': '8/31/2016', 'PriorityID': '8/31/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Major Mines of Nevada 2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2506', 'EmployeeID': '105600', 'CustomerID': '4027', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/21/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update Statemap Factsheet with SM16 awarded maps.', 'EmployeeID': '7/21/2016', 'CustomerID': '10/1/2016', 'PriorityID': '10/1/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Statemap 16 Factsheet', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2507', 'EmployeeID': '105600', 'CustomerID': '4028', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/21/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': "Prepare Andrew Sadowski's Black Warrior Thesis Map for publication as an open-file report.", 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '  Note:  Contact Jim Faulds for authorization to exceed 40 hours.', 'EmployeeID': '7/21/2016', 'CustomerID': '9/29/2016', 'PriorityID': '9/29/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Black Warrior Thesis Map', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2508', 'EmployeeID': '105600', 'CustomerID': '4029', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2016', 'WorkOrderDescription': 'This work order is issued in order to track general cost share for Statemap 2016', 'StartDate': '8/1/2016', 'DueDate': '6/30/2017', 'ClosedDate': '9/1/2017', 'Notes': 'NULL', 'ProjectName': 'SM16 Master'}
,
{'WorkOrderID': '2509', 'EmployeeID': '105600', 'CustomerID': '4030', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIs Migration - Comparable migrations:  Virgin Peak - 23.25; Whitney Pocket - 31.5', 'EmployeeID': '8/1/2016', 'CustomerID': '6/30/2017', 'PriorityID': '4/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'SM16 Caetano Caldera GIS Migration', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2510', 'EmployeeID': '105600', 'CustomerID': '4031', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '8/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion - Comparable Conversion:  Valley of Fire 50.75+; White Horse Pass 66', 'EmployeeID': '8/1/2016', 'CustomerID': '6/30/2017', 'PriorityID': '4/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'SM16 IXL Canyon quadrangle GIS Conversion', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2511', 'EmployeeID': '105600', 'CustomerID': '4032', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '8/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Conversion - Comparable Conversions:  Valley of Fire 50.75+; White Horse Pass 66', 'EmployeeID': '8/1/2016', 'CustomerID': '6/30/2017', 'PriorityID': '4/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'SM16 North Peak quadrangle GIS Conversion', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2512', 'EmployeeID': '105600', 'CustomerID': '4033', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '8/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Digitization - Comparable digitization:  Snowstorm Mountains & Vicinity 62.25', 'EmployeeID': '8/1/2016', 'CustomerID': '6/30/2017', 'PriorityID': '4/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'SM16 McCoy Mining District GIS Digitization', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2513', 'EmployeeID': '105600', 'CustomerID': '4034', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '8/1/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'GIS Migration - Comparable migrations:  Virgin Peak23.25; Whitney Pocket 31.5.  Note:  This map needs to be published first, then perform the migration.  If the map does not get published before we need to start the conversion, we will convert what we h', 'EmployeeID': '8/1/2016', 'CustomerID': '6/30/2017', 'PriorityID': '9/28/2017', 'StatusID': 'NULL', 'SubmittedDate': 'SM16 Humboldt Peak quad GIS Migration', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2514', 'EmployeeID': '105600', 'CustomerID': '4035', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '8/29/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Help authors Ayling/Muntean/Davis compose and organize files; edit layout; organize pages and sections; print hard copy if needed; post on web', 'EmployeeID': '8/29/2016', 'CustomerID': '11/30/2016', 'PriorityID': '11/30/2016', 'StatusID': 'NULL', 'SubmittedDate': 'MI 2015', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2515', 'EmployeeID': '105600', 'CustomerID': '4036', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '9/13/2016', 'WorkOrderDescription': 'Any work requested by PI for General Geothermal.', 'StartDate': '9/13/2016', 'DueDate': '9/30/2017', 'ClosedDate': '11/9/2016', 'Notes': 'NULL', 'ProjectName': 'General Geothermal'}
,
{'WorkOrderID': '2516', 'EmployeeID': '105600', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '9/15/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Support for the Earth Science Week field trip and for Open House on 10/15/2016', 'EmployeeID': '9/15/2016', 'CustomerID': '10/15/2016', 'PriorityID': '10/15/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Earth Science Week 2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2517', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '10/5/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Cartographic / GIS / Publication Support', 'EmployeeID': '10/5/2016', 'CustomerID': '1/31/2017', 'PriorityID': '1/31/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Washoe Shear Zone', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2518', 'EmployeeID': '105600', 'CustomerID': '4039', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/5/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare/modify figure for 3DEP proposal; other support as needed', 'EmployeeID': '10/5/2016', 'CustomerID': '11/1/2016', 'PriorityID': '11/1/2016', 'StatusID': 'NULL', 'SubmittedDate': '3DEP Proposal Support', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2519', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '10/12/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Updates to McDermitt Open File Report; possibly rerelease as 2nd edition of a new OFR.  Involves stitching together Joe Laravie edits with Chris Henry database edits, layout modifications and new attitudes & sample.  Also cross section edits and updates', 'EmployeeID': '10/12/2016', 'CustomerID': '12/31/2016', 'PriorityID': '11/1/2016', 'StatusID': 'NULL', 'SubmittedDate': 'McDermitt Update', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2520', 'EmployeeID': '105600', 'CustomerID': '4041', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '10/20/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Help John with figures (some Illustrator, some Arc).  John providing them in batches - 1st batch needed by 10/26.  All needed by 11/15/2016.', 'EmployeeID': '10/20/2016', 'CustomerID': '11/15/2016', 'PriorityID': '11/15/2016', 'StatusID': 'NULL', 'SubmittedDate': 'SEG Figures', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2521', 'EmployeeID': '105600', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/27/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare files and coordinate having a plaque made for Lee Allison Memorial', 'EmployeeID': '10/27/2016', 'CustomerID': '11/19/2016', 'PriorityID': '11/19/2016', 'StatusID': 'NULL', 'SubmittedDate': 'Lee Allison Plaque', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2522', 'EmployeeID': '105600', 'CustomerID': '4043', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '11/8/2016', 'WorkOrderDescription': 'Add hillshade to t-shirts and bandanas and add title and any other needed updates.', 'StartDate': '11/8/2016', 'DueDate': '12/31/2016', 'ClosedDate': '12/31/2016', 'Notes': 'NULL', 'ProjectName': 'Update T-Shirts and Bandanas'}
,
{'WorkOrderID': '2523', 'EmployeeID': '105600', 'CustomerID': '4044', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '11/10/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for deliverable and OFR; set-up files; GIS/Cartographic assistance as needed.  Includes GIS/Cartographic finalization.', 'EmployeeID': '11/10/2016', 'CustomerID': '8/31/2017', 'PriorityID': '9/3/2017', 'StatusID': 'NULL', 'SubmittedDate': 'SM 16 Boulder City NW', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2524', 'EmployeeID': '105600', 'CustomerID': '4045', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '12/7/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Cart/GIS support throughout the project.  Estimated hours are based on the current shop rate of $45.25/hour for the first year of the project.  Overall project is through 3/9/2021.', 'EmployeeID': '12/7/2016', 'CustomerID': '12/31/2020', 'PriorityID': '1/17/2021', 'StatusID': 'NULL', 'SubmittedDate': 'Las Vegas Valley', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2525', 'EmployeeID': '105600', 'CustomerID': '4046', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '1/27/2016', 'WorkOrderDescription': 'Churchill County OFR', 'StartDate': '12/7/2016', 'DueDate': '4/26/2017', 'ClosedDate': '2/16/2017', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2526', 'EmployeeID': '105600', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '12/15/2016', 'WorkOrderDescription': 'Incorporate the 2014 and 2015 faculty/staff citations into a report.', 'StartDate': '12/15/2016', 'DueDate': '2/28/2017', 'ClosedDate': '1/26/2017', 'Notes': 'NULL', 'ProjectName': 'NBMG Biennial Report 2016'}
,
{'WorkOrderID': '2527', 'EmployeeID': '105600', 'CustomerID': '4048', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '12/21/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare for Open-File Report.  Reduced / clipped-down version of map from wo #2179 cross sections.', 'EmployeeID': '12/21/2016', 'CustomerID': '1/31/2017', 'PriorityID': '1/31/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Desert Peak - Bradys OFR', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2528', 'EmployeeID': '105600', 'CustomerID': '4049', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track work performed without funding and that does not require a separate work order.', 'EmployeeID': '1/1/2017', 'CustomerID': '6/30/2017', 'PriorityID': '6/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'P & M 1st Half 2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2529', 'EmployeeID': '105600', 'CustomerID': '4050', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '1/1/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track all work required to update and maintain the NBMG web page.', 'EmployeeID': '1/1/2017', 'CustomerID': '6/30/2017', 'PriorityID': '6/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Web Maintenance 1st Half 2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2530', 'EmployeeID': '105600', 'CustomerID': '4051', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '1/6/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'For the collection of photos and other observations/materials for the January, 2017 flooding.', 'EmployeeID': '1/6/2017', 'CustomerID': '3/31/2017', 'PriorityID': '3/31/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Flood Response', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2531', 'EmployeeID': '105600', 'CustomerID': '4052', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '1/11/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update OFR version and E-series ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Bill this work order after receipt of NDOM funds', 'EmployeeID': '1/11/2017', 'CustomerID': '2/10/2017', 'PriorityID': '2/10/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Update Active Mines & Energy Producers Map', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2532', 'EmployeeID': '105600', 'CustomerID': '4053', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '2/9/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare report for publication including minor typesetting/formatting, cover update, summary flyer update, final check/reviews.  Coordinate with Charlotte and others and coordinate printing through UNR Copy Center/Nevada Ink. ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'billed to 10SY once that ', 'EmployeeID': '2/9/2017', 'CustomerID': '2/17/2017', 'PriorityID': '2/17/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Exploration Survey 2015/2016', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2533', 'EmployeeID': '105600', 'CustomerID': '4054', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '3/7/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for OFR publication.  OFR not needed for Chad Carlson dissertation deadline of 4/30/2017.  Assist with GIS and Cartographic support as needed.  Set-up database/mxd and load files from Vr.', 'EmployeeID': '3/7/2017', 'CustomerID': '4/30/2017', 'PriorityID': '4/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Red Ridge Quad OFR', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2534', 'EmployeeID': '105600', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '3/14/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Scan records and post files on web', 'EmployeeID': '3/14/2017', 'CustomerID': '8/31/2017', 'PriorityID': '7/28/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Preservation Grant Scanning', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2535', 'EmployeeID': '105600', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '3/14/2017', 'WorkOrderDescription': 'Scan files and post files on web.  Assist with GIS and Cartography; prep for release as M-Series publication, but only need nice looking plate for May deadline.', 'StartDate': '3/14/2017', 'DueDate': '5/31/2017', 'ClosedDate': '5/29/2017', 'Notes': 'NULL', 'ProjectName': 'Terrill Mountains M-Series'}
,
{'WorkOrderID': '2536', 'EmployeeID': '105600', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '3/16/2017', 'WorkOrderDescription': 'Typeset, compose, layout and publication of the NBMG 2018 Geologic Calendar.', 'StartDate': '3/16/2017', 'DueDate': '10/15/2017', 'ClosedDate': '11/7/2017', 'Notes': 'NULL', 'ProjectName': 'Calendar, NBMG 2018'}
,
{'WorkOrderID': '2537', 'EmployeeID': '105600', 'CustomerID': '4058', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': "Prepare Carli Balogh's thesis map for OFR release", 'EmployeeID': '7/1/2017', 'CustomerID': '9/30/2017', 'PriorityID': '8/26/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Sweetwater Range', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2538', 'EmployeeID': '105600', 'CustomerID': '4059', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/4/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prep/organize files for reprint of 150 books, perform prepress/coordinate with print company, and other related work.', 'EmployeeID': '4/4/2017', 'CustomerID': '6/30/2017', 'PriorityID': '6/30/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Reprint Las Vegas Guide Book - SP16', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2539', 'EmployeeID': '105600', 'CustomerID': '4060', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '4/4/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Coordinate reprinting of 20 copies of B27', 'EmployeeID': '4/4/2017', 'CustomerID': '6/30/2017', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'Reprint Placer Mining in Nevada - B27', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2540', 'EmployeeID': '105600', 'CustomerID': '4061', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '4/19/2017', 'WorkOrderDescription': 'For archiving purposes only. Files for OF14-5 that were never archived during 10PU work.', 'StartDate': '4/19/2017', 'DueDate': '4/19/2017', 'ClosedDate': '4/19/2017', 'Notes': 'NULL', 'ProjectName': 'Hazus Report OF14-5'}
,
{'WorkOrderID': '2541', 'EmployeeID': '105600', 'CustomerID': '4062', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/19/2017', 'WorkOrderDescription': 'For archiving purposes only. Work done a few a couple years ago without a work order created, but need to archive files now.', 'StartDate': '4/19/2017', 'DueDate': '4/19/2017', 'ClosedDate': '4/19/2017', 'Notes': 'NULL', 'ProjectName': 'Cascade Geology Maps'}
,
{'WorkOrderID': '2542', 'EmployeeID': '105600', 'CustomerID': '4000', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '4/15/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Various existing Lidar datasets need to be compiled into a central location so UNR researchers can access these data for their research needs.', 'EmployeeID': '4/15/2017', 'CustomerID': '6/30/2017', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'Lidar Database Setup', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2543', 'EmployeeID': '105600', 'CustomerID': '4001', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '4/15/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This project involves repurposing pages from the popular Nevada Geology calendar into educational posters for the public that would be for sale through NBMG.', 'EmployeeID': '4/15/2017', 'CustomerID': '6/30/2017', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'Geology Posters', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2544', 'EmployeeID': '105600', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '4/21/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare files for Open-File publication.', 'EmployeeID': '4/21/2017', 'CustomerID': '6/30/2017', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'Kelly Creek geologic map', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2545', 'EmployeeID': '105600', 'CustomerID': '4003', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '5/9/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'prepare map for Open-File publication', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '   ', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': "  files originally submitted to NBMG 12/30/16, but couldn't start until funds were secured", 'EmployeeID': '5/9/2017', 'CustomerID': '6/30/2017', 'PriorityID': '7/25/2018', 'StatusID': 'NULL', 'SubmittedDate': 'Lower Pahranagat Lake NW', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2546', 'EmployeeID': '105600', 'CustomerID': '4004', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '6/7/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for deliverable and Open-File publication.', 'EmployeeID': '6/7/2017', 'CustomerID': '9/29/2017', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'Independence Valley NW - north half', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2547', 'EmployeeID': '105600', 'CustomerID': '4005', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '6/7/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Prepare map for deliverable and Open-File publication.', 'EmployeeID': '6/7/2017', 'CustomerID': '9/29/2017', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'Kinsley Mountains North', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2548', 'EmployeeID': '105600', 'CustomerID': '4006', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '6/9/2017', 'WorkOrderDescription': 'NULL', 'StartDate': '7/5/2017', 'DueDate': '9/7/2017', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2549', 'EmployeeID': '105600', 'CustomerID': '4007', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '7/6/2017', 'WorkOrderDescription': 'NULL', 'StartDate': '7/7/2017', 'DueDate': '10/4/2017', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2550', 'EmployeeID': '105600', 'CustomerID': '4008', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued to track miscellaneous work that does not require a separate work order.', 'EmployeeID': '7/1/2017', 'CustomerID': '12/31/2017', 'PriorityID': '12/31/2017', 'StatusID': 'NULL', 'SubmittedDate': 'P&M - 2nd Half 2017 (1st Half FY18)', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2551', 'EmployeeID': '105600', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is assigned to track time for updating and maintaining the NBMG website.', 'EmployeeID': '7/1/2017', 'CustomerID': '12/31/2017', 'PriorityID': '12/31/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Web Maintenance - 2nd Half 2017 (FY18)', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2552', 'EmployeeID': '105600', 'CustomerID': '4010', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': 'This work order is issued to track time spent on various outreach activities.', 'StartDate': '7/1/2017', 'DueDate': '12/31/2017', 'ClosedDate': '6/30/2018', 'Notes': 'NULL', 'ProjectName': 'Outreach Opportunities FY18'}
,
{'WorkOrderID': '2553', 'EmployeeID': '105600', 'CustomerID': '4011', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '7/1/2017', 'WorkOrderDescription': 'This work order is to track the time spent by Cart/GIS at conferences, classes, participation in training/online training, and other research and development tasks.', 'StartDate': '7/1/2017', 'DueDate': '12/31/2017', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'R & D, Conferences, Workshops FY18'}
,
{'WorkOrderID': '2554', 'EmployeeID': '105600', 'CustomerID': '4012', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '5/1/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'work order to support state hazard mitigation plan work and related tasks', 'EmployeeID': '5/1/2017', 'CustomerID': '12/31/2017', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'Hazard Mitigation', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2555', 'EmployeeID': '105600', 'CustomerID': '4013', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/1/2012', 'WorkOrderDescription': 'For archival purposes.', 'StartDate': '7/1/2012', 'DueDate': '6/30/2014', 'ClosedDate': '6/30/2014', 'Notes': 'NULL', 'ProjectName': 'P&M - 2012 through 2014'}
,
{'WorkOrderID': '2556', 'EmployeeID': '105600', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '5', 'SubmittedDate': '7/28/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Assist with proposal figures and other support as needed.', 'EmployeeID': '7/28/2017', 'CustomerID': '10/31/2017', 'PriorityID': '11/9/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Statemap 2018 Proposal Support', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2557', 'EmployeeID': '105600', 'CustomerID': '4015', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '7/28/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'Update existing factsheet with SM2017 info, post online, and provide to the USGS before Statemap proposal panel reviews proposals.', 'EmployeeID': '7/28/2017', 'CustomerID': '10/31/2017', 'PriorityID': '8/11/2017', 'StatusID': 'NULL', 'SubmittedDate': 'Statemap 2017 Factsheet', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2558', 'EmployeeID': '105600', 'CustomerID': '4016', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '4/1/2014', 'WorkOrderDescription': 'Proposal work was completed in 2014. This work order is for archival purposes only.', 'StartDate': '4/1/2014', 'DueDate': '5/31/2014', 'ClosedDate': '5/31/2014', 'Notes': 'NULL', 'ProjectName': 'SNPLMA 2014 proposal'}
,
{'WorkOrderID': '2559', 'EmployeeID': '105600', 'CustomerID': '4017', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '', 'EmployeeID': '', 'CustomerID': '', 'PriorityID': '', 'StatusID': '', 'SubmittedDate': '', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': 'This work order is issued in order to track general cost share for Statemap 2017', 'EmployeeID': '6/26/2017', 'CustomerID': '6/25/2018', 'PriorityID': 'NULL', 'StatusID': 'NULL', 'SubmittedDate': 'SM17 Master', 'WorkOrderDescription': '', 'StartDate': '', 'DueDate': '', 'ClosedDate': '', 'Notes': '', 'ProjectName': ''}
,
{'WorkOrderID': '2560', 'EmployeeID': '105600', 'CustomerID': '4018', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '6/26/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Frenchman Mountain SM17 GIS Migration'}
,
{'WorkOrderID': '2561', 'EmployeeID': '105600', 'CustomerID': '4019', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '6/26/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Henderson SM17 GIS Migration'}
,
{'WorkOrderID': '2562', 'EmployeeID': '105600', 'CustomerID': '4020', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '6/26/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Lamoille SM17 GIS Migration'}
,
{'WorkOrderID': '2563', 'EmployeeID': '105600', 'CustomerID': '4021', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': 'SM17 GIS Migration.', 'StartDate': '6/26/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Mount Davis SM17 GIS Migration'}
,
{'WorkOrderID': '2564', 'EmployeeID': '105600', 'CustomerID': '4022', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': 'SM17 GIS Digitization.', 'StartDate': '6/26/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Mount Siegel SM17 GIS Digitization'}
,
{'WorkOrderID': '2565', 'EmployeeID': '105600', 'CustomerID': '4023', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': 'SM17 GIS Digitization.', 'StartDate': '6/26/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Wellington SM17 GIS Digitization'}
,
{'WorkOrderID': '2566', 'EmployeeID': '105600', 'CustomerID': '4024', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '6/26/2017', 'WorkOrderDescription': 'SM17 GIS Digitization.', 'StartDate': '6/26/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Yerington SM17 GIS Digitization'}
,
{'WorkOrderID': '2567', 'EmployeeID': '105600', 'CustomerID': '4025', 'PriorityID': '4', 'StatusID': '5', 'SubmittedDate': '9/7/2017', 'WorkOrderDescription': 'Prepare/typeset Major Mines 2016 for publication and printing of 1500 copies.', 'StartDate': '9/7/2017', 'DueDate': '10/31/2017', 'ClosedDate': '10/31/2017', 'Notes': 'NULL', 'ProjectName': 'Major Mines 2016'}
,
{'WorkOrderID': '2568', 'EmployeeID': '105602', 'CustomerID': '4026', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '9/28/2017', 'WorkOrderDescription': 'NULL', 'StartDate': '9/29/2017', 'DueDate': '12/27/2017', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2569', 'EmployeeID': '105600', 'CustomerID': '4027', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '10/1/2017', 'WorkOrderDescription': 'prepare map for M-series publication', 'StartDate': '10/1/2017', 'DueDate': '12/31/2017', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Humboldt Peak M-series'}
,
{'WorkOrderID': '2570', 'EmployeeID': '105600', 'CustomerID': '4028', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '10/1/2017', 'WorkOrderDescription': 'prepare for OFR publication', 'StartDate': '10/1/2017', 'DueDate': '12/31/2017', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'East Range OFR'}
,
{'WorkOrderID': '2571', 'EmployeeID': '105600', 'CustomerID': '4029', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '10/19/2017', 'WorkOrderDescription': "Prepare figures from Jim's PDF and incorporate his edits.", 'StartDate': '10/19/2017', 'DueDate': '11/30/2017', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Turkey Paper Figures (Faulds)'}
,
{'WorkOrderID': '2572', 'EmployeeID': '105600', 'CustomerID': '4030', 'PriorityID': '5', 'StatusID': '5', 'SubmittedDate': '10/19/2017', 'WorkOrderDescription': "Prepare figures from Jim's files.", 'StartDate': '10/19/2017', 'DueDate': '2/28/2018', 'ClosedDate': '7/25/2018', 'Notes': 'NULL', 'ProjectName': 'Fernley Paper Figures (Faulds)'}
,
{'WorkOrderID': '2573', 'EmployeeID': '105600', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '10/15/2017', 'WorkOrderDescription': 'Prepare SP26 for a reprinting of 200 copies. Incorporate edits from errata sheet.', 'StartDate': '10/15/2017', 'DueDate': '12/31/2017', 'ClosedDate': '1/29/2018', 'Notes': 'NULL', 'ProjectName': 'SP26 Hwy 50 Reprint'}
,
{'WorkOrderID': '2574', 'EmployeeID': '105600', 'CustomerID': '4032', 'PriorityID': '1', 'StatusID': '5', 'SubmittedDate': '11/1/2017', 'WorkOrderDescription': 'Assist authors, typeset, compile, and edit report. Assist with prepress & printing and web posting.', 'StartDate': '11/1/2017', 'DueDate': '12/1/2017', 'ClosedDate': '12/19/2017', 'Notes': 'NULL', 'ProjectName': 'MI 2016'}
,
{'WorkOrderID': '2575', 'EmployeeID': '105600', 'CustomerID': '4033', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '12/19/2017', 'WorkOrderDescription': 'see scope of work for details', 'StartDate': '12/19/2017', 'DueDate': '1/31/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Radon maps'}
,
{'WorkOrderID': '2576', 'EmployeeID': '105600', 'CustomerID': '4034', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '12/22/2017', 'WorkOrderDescription': 'prepare map for SM17 deliverable and OFR release', 'StartDate': '12/22/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Mount Rose NW (SM17)'}
,
{'WorkOrderID': '2577', 'EmployeeID': '105600', 'CustomerID': '4035', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '12/22/2017', 'WorkOrderDescription': 'prepare map for deliverable and OFR release', 'StartDate': '12/22/2017', 'DueDate': '6/25/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Independence Valley NE (SM17)'}
,
{'WorkOrderID': '2578', 'EmployeeID': '105600', 'CustomerID': '4036', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '1/1/2018', 'WorkOrderDescription': 'Prepare figures to accompany figures from previous "SEG figures" work order for manuscript submission. Due date of 3/31/18 is arbitrary date entered by JMV. Assigned to Sydney Wilson.', 'StartDate': '1/1/2018', 'DueDate': '3/31/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SEG Figures'}
,
{'WorkOrderID': '2579', 'EmployeeID': '105600', 'CustomerID': '4037', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '12/20/2016', 'WorkOrderDescription': 'Assist with preparations for booth at PDAC conference. Participate in booth planning conference calls, prepare map and other materials needed for NBMG portion of booth. Assigned to Jennifer and Rachel since unfunded.', 'StartDate': '12/20/2016', 'DueDate': '3/1/2018', 'ClosedDate': '6/30/2018', 'Notes': 'NULL', 'ProjectName': 'PDAC support'}
,
{'WorkOrderID': '2580', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '1/1/2018', 'WorkOrderDescription': 'This work order is issued to track miscellaneous work that does not require a separate work order.', 'StartDate': '1/1/2018', 'DueDate': '6/30/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'P&M - 1st Half 2018 (2nd Half FY18)'}
,
{'WorkOrderID': '2581', 'EmployeeID': '105600', 'CustomerID': '4039', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '1/1/2018', 'WorkOrderDescription': 'This work order is assigned to track time for updating and maintaining the NBMG website.', 'StartDate': '1/1/2018', 'DueDate': '6/30/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Web Maintenance - 1st Half 2018 (FY18)'}
,
{'WorkOrderID': '2582', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '2/1/2018', 'WorkOrderDescription': 'This work order is assigned to track time for Footprint Migration', 'StartDate': '2/1/2018', 'DueDate': '2/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Footprints Migration'}
,
{'WorkOrderID': '2583', 'EmployeeID': '105600', 'CustomerID': '4041', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '3/9/2018', 'WorkOrderDescription': 'Prepare figures for Jim', 'StartDate': '3/9/2018', 'DueDate': '3/9/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Hot Springs Mountains'}
,
{'WorkOrderID': '2584', 'EmployeeID': '105600', 'CustomerID': '4042', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '3/23/2018', 'WorkOrderDescription': 'This work order is assigned to track time for Hawthorne Geothermal', 'StartDate': '3/23/2018', 'DueDate': '3/23/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Hawthorne Geothermal'}
,
{'WorkOrderID': '2585', 'EmployeeID': '105600', 'CustomerID': '4043', 'PriorityID': '3', 'StatusID': '5', 'SubmittedDate': '4/10/2018', 'WorkOrderDescription': 'Prepare/typeset Barrick Report for publication and printing', 'StartDate': '4/10/2018', 'DueDate': '4/10/2019', 'ClosedDate': '8/24/2018', 'Notes': 'NULL', 'ProjectName': 'Barrick Report'}
,
{'WorkOrderID': '2586', 'EmployeeID': '105600', 'CustomerID': '4044', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '5/1/2018', 'WorkOrderDescription': 'This work order is assigned to track time for Eglington Fault Study', 'StartDate': '5/1/2018', 'DueDate': '5/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Eglington Fault Study'}
,
{'WorkOrderID': '2587', 'EmployeeID': '105600', 'CustomerID': '4045', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '5/15/2018', 'WorkOrderDescription': 'This work order is assigned to track time for the Crescent Valley Map', 'StartDate': '5/15/2018', 'DueDate': '5/15/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Crescent Valley Map'}
,
{'WorkOrderID': '2588', 'EmployeeID': '105600', 'CustomerID': '4046', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '6/15/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '6/19/2018', 'DueDate': '9/13/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2589', 'EmployeeID': '105600', 'CustomerID': '4047', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '3/23/2018', 'WorkOrderDescription': 'Prepare figures for John Muntean', 'StartDate': '3/23/2018', 'DueDate': '3/23/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Canyon and Other Figures'}
,
{'WorkOrderID': '2590', 'EmployeeID': '105600', 'CustomerID': '4048', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '5/15/2018', 'WorkOrderDescription': 'This work order is assigned to track time for the Forge Geological Map project.', 'StartDate': '5/15/2018', 'DueDate': '5/15/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Forge Geological Map'}
,
{'WorkOrderID': '2591', 'EmployeeID': '105600', 'CustomerID': '4049', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '6/27/2018', 'WorkOrderDescription': 'This work order is assigned to track time for the North Valley project.', 'StartDate': '6/27/2018', 'DueDate': '6/27/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'North Valley'}
,
{'WorkOrderID': '2592', 'EmployeeID': '105600', 'CustomerID': '4050', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': 'This work order is issued to track miscellaneous work that does not require a separate work order.', 'StartDate': '7/1/2018', 'DueDate': '12/31/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'P&M - 2nd Half 2018 (1st Half FY19)'}
,
{'WorkOrderID': '2593', 'EmployeeID': '105600', 'CustomerID': '4051', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': 'This work order is assigned to track time for updating and maintaining the NBMG website.', 'StartDate': '7/1/2018', 'DueDate': '12/31/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Web Maintenance - 2nd Half 2018 (FY19)'}
,
{'WorkOrderID': '2594', 'EmployeeID': '105600', 'CustomerID': '4052', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '1/30/2018', 'WorkOrderDescription': 'Typeset, compose, layout and publication of the NBMG 2019 Geologic Calendar.', 'StartDate': '1/1/2018', 'DueDate': '10/15/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': '2019 Nevada Geologic Calendar'}
,
{'WorkOrderID': '2595', 'EmployeeID': '105600', 'CustomerID': '4053', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '7/16/2018', 'WorkOrderDescription': 'prepare map for SM18 deliverable and OFR release', 'StartDate': '7/2/2018', 'DueDate': '7/16/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Granite Peak'}
,
{'WorkOrderID': '2596', 'EmployeeID': '105600', 'CustomerID': '4054', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '7/17/2018', 'WorkOrderDescription': 'Scan records and post files on web.', 'StartDate': '7/17/2018', 'DueDate': '7/16/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Preservation Scanning'}
,
{'WorkOrderID': '2597', 'EmployeeID': '105600', 'CustomerID': '4055', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': 'This project is to provide funds to participate and sometimes lead outreach activities around the State.', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Outreach Opportunities FY19'}
,
{'WorkOrderID': '2598', 'EmployeeID': '105600', 'CustomerID': '4056', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '7/1/2018', 'WorkOrderDescription': 'This work order is to track the time spent by Cart/GIS at conferences, classes, participation in training/online training, and other research and development tasks.', 'StartDate': '7/1/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'R&D Conferences Workshops FY19'}
,
{'WorkOrderID': '2599', 'EmployeeID': '105600', 'CustomerID': '4057', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '7/16/2018', 'WorkOrderDescription': 'prepare map for SM18 deliverable and OFR release', 'StartDate': '7/16/2018', 'DueDate': '7/16/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Petersen Mountain'}
,
{'WorkOrderID': '2600', 'EmployeeID': '105600', 'CustomerID': '4058', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Master'}
,
{'WorkOrderID': '2601', 'EmployeeID': '105600', 'CustomerID': '4059', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Gordon Creek GIS Migration'}
,
{'WorkOrderID': '2602', 'EmployeeID': '105600', 'CustomerID': '4060', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Huntsman Ranch GIS Migration'}
,
{'WorkOrderID': '2603', 'EmployeeID': '105600', 'CustomerID': '4061', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Bullfrog Hills GIS Migration'}
,
{'WorkOrderID': '2604', 'EmployeeID': '105600', 'CustomerID': '4062', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Carson City GIS Migration'}
,
{'WorkOrderID': '2605', 'EmployeeID': '105600', 'CustomerID': '4000', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Sacramento Pass AI Conversion'}
,
{'WorkOrderID': '2606', 'EmployeeID': '105600', 'CustomerID': '4001', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Independence Valley'}
,
{'WorkOrderID': '2607', 'EmployeeID': '105600', 'CustomerID': '4002', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Washoe City'}
,
{'WorkOrderID': '2608', 'EmployeeID': '105600', 'CustomerID': '4003', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '7/2/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '7/2/2018', 'DueDate': '6/30/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'SM18 Granite Range GIS Migration'}
,
{'WorkOrderID': '2609', 'EmployeeID': '105600', 'CustomerID': '4004', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '8/28/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2018', 'DueDate': '11/26/2018', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2610', 'EmployeeID': '105600', 'CustomerID': '4005', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '9/12/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '9/12/2018', 'DueDate': '9/12/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'E-62 Stewart Publication'}
,
{'WorkOrderID': '2611', 'EmployeeID': '105600', 'CustomerID': '4006', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '10/1/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2018', 'DueDate': '10/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Carson City Figures'}
,
{'WorkOrderID': '2612', 'EmployeeID': '105600', 'CustomerID': '4007', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '9/1/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2018', 'DueDate': '10/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Major Mines 2017'}
,
{'WorkOrderID': '2613', 'EmployeeID': '105600', 'CustomerID': '4008', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '10/1/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2018', 'DueDate': '10/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Earth Science Week 2018'}
,
{'WorkOrderID': '2614', 'EmployeeID': '105600', 'CustomerID': '4009', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '9/1/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '9/1/2018', 'DueDate': '9/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'PDAC 2019'}
,
{'WorkOrderID': '2615', 'EmployeeID': '105600', 'CustomerID': '4010', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '10/1/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2018', 'DueDate': '10/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'Spirit Mountain NW'}
,
{'WorkOrderID': '2616', 'EmployeeID': '105602', 'CustomerID': '4011', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '10/22/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '10/1/2018', 'DueDate': '1/20/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2617', 'EmployeeID': '105601', 'CustomerID': '4012', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '10/9/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '10/9/2018', 'DueDate': '1/7/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2618', 'EmployeeID': '105600', 'CustomerID': '4013', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '11/14/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '11/14/2018', 'DueDate': '2/12/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2619', 'EmployeeID': '105601', 'CustomerID': '4014', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '11/19/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '11/19/2018', 'DueDate': '2/17/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2620', 'EmployeeID': '105603', 'CustomerID': '4015', 'PriorityID': '2', 'StatusID': '1', 'SubmittedDate': '12/20/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '11/1/2018', 'DueDate': '3/20/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2621', 'EmployeeID': '105602', 'CustomerID': '4016', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '11/16/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '11/16/2018', 'DueDate': '2/14/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2622', 'EmployeeID': '105601', 'CustomerID': '4017', 'PriorityID': '4', 'StatusID': '3', 'SubmittedDate': '1/2/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2019', 'DueDate': '4/2/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2623', 'EmployeeID': '105600', 'CustomerID': '4018', 'PriorityID': '5', 'StatusID': '3', 'SubmittedDate': '1/2/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2019', 'DueDate': '4/2/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2624', 'EmployeeID': '105600', 'CustomerID': '4019', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '12/6/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2018', 'DueDate': '3/6/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2625', 'EmployeeID': '105600', 'CustomerID': '4020', 'PriorityID': '1', 'StatusID': '3', 'SubmittedDate': '1/2/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2019', 'DueDate': '4/2/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2626', 'EmployeeID': '105604', 'CustomerID': '4021', 'PriorityID': '2', 'StatusID': '3', 'SubmittedDate': '1/3/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '1/1/2019', 'DueDate': '4/3/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2627', 'EmployeeID': '105600', 'CustomerID': '4022', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '12/4/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2018', 'DueDate': '3/4/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2628', 'EmployeeID': '105602', 'CustomerID': '4023', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '12/4/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2018', 'DueDate': '3/4/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2629', 'EmployeeID': '105602', 'CustomerID': '4024', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '12/3/2018', 'WorkOrderDescription': 'NULL', 'StartDate': '12/1/2018', 'DueDate': '3/3/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2630', 'EmployeeID': '105600', 'CustomerID': '4025', 'PriorityID': '3', 'StatusID': '2', 'SubmittedDate': '2/3/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2019', 'DueDate': '5/4/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2631', 'EmployeeID': '105600', 'CustomerID': '4026', 'PriorityID': '4', 'StatusID': '2', 'SubmittedDate': '2/3/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '2/1/2019', 'DueDate': '5/4/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2632', 'EmployeeID': '105600', 'CustomerID': '4027', 'PriorityID': '5', 'StatusID': '2', 'SubmittedDate': '4/2/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '4/2/2019', 'DueDate': '7/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2633', 'EmployeeID': '105600', 'CustomerID': '4028', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '4/24/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '4/24/2019', 'DueDate': '7/23/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2634', 'EmployeeID': '105600', 'CustomerID': '4029', 'PriorityID': '2', 'StatusID': '2', 'SubmittedDate': '5/3/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '5/3/2019', 'DueDate': '8/1/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2635', 'EmployeeID': '105600', 'CustomerID': '4030', 'PriorityID': '4', 'StatusID': '2', 'SubmittedDate': '5/10/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '5/1/2019', 'DueDate': '8/8/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2636', 'EmployeeID': '105600', 'CustomerID': '4031', 'PriorityID': '3', 'StatusID': '2', 'SubmittedDate': '5/9/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '5/9/2019', 'DueDate': '8/7/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2637', 'EmployeeID': '105600', 'CustomerID': '4032', 'PriorityID': '5', 'StatusID': '2', 'SubmittedDate': '5/14/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '5/14/2019', 'DueDate': '8/12/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2638', 'EmployeeID': '105603', 'CustomerID': '4033', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '5/15/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '8/13/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2639', 'EmployeeID': '105603', 'CustomerID': '4034', 'PriorityID': '2', 'StatusID': '2', 'SubmittedDate': '7/1/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '9/29/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2641', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '7/17/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '6/30/2020', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2642', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '7/1/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '6/30/2020', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2643', 'EmployeeID': '105600', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '7/5/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '6/30/2020', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2644', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '7/4/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '6/30/2020', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2646', 'EmployeeID': '105601', 'CustomerID': '4038', 'PriorityID': '1', 'StatusID': '2', 'SubmittedDate': '7/10/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '6/30/2020', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2647', 'EmployeeID': '105600', 'CustomerID': '4040', 'PriorityID': '2', 'StatusID': '3', 'SubmittedDate': '8/15/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '6/30/2020', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2648', 'EmployeeID': '105603', 'CustomerID': '4041', 'PriorityID': '4', 'StatusID': '3', 'SubmittedDate': '7/3/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '6/30/2020', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2649', 'EmployeeID': '105601', 'CustomerID': '4042', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '7/11/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '7/1/2019', 'DueDate': '10/9/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2651', 'EmployeeID': '105601', 'CustomerID': '4043', 'PriorityID': '5', 'StatusID': '1', 'SubmittedDate': '8/7/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2019', 'DueDate': '11/5/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2652', 'EmployeeID': '105600', 'CustomerID': '4044', 'PriorityID': '1', 'StatusID': '1', 'SubmittedDate': '8/13/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '8/15/2019', 'DueDate': '11/11/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2653', 'EmployeeID': '105600', 'CustomerID': '4045', 'PriorityID': '3', 'StatusID': '1', 'SubmittedDate': '8/21/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2019', 'DueDate': '11/19/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
,
{'WorkOrderID': '2654', 'EmployeeID': '105600', 'CustomerID': '4046', 'PriorityID': '4', 'StatusID': '1', 'SubmittedDate': '8/27/2019', 'WorkOrderDescription': 'NULL', 'StartDate': '8/1/2019', 'DueDate': '11/25/2019', 'ClosedDate': 'NULL', 'Notes': 'NULL', 'ProjectName': 'NULL'}
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
