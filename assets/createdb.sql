/*NOTES FOR IMPORTING EXCEL DATA:
1. Import one table at a time.
2. Import them in their spreadsheet order. (Open the excel file to view their order)
3. When importing, "Edit Mappings.." should be viewed and all sources should have a validation.
4. In "Edit Mappings.." the option "Enable Identity Insert" should be checked for every table with an auto-incremented ID. Currently, this is every table except for TBL_GRANT*/

CREATE TABLE JOBTITLE (
	JobTitleID int IDENTITY(1,1) PRIMARY KEY,
	JobTitle varchar(30)
);

CREATE TABLE EMPLOYEETYPE (
	EmployeeTypeID int IDENTITY(1,1) PRIMARY KEY,
	EmployeeType varchar(30)
);

CREATE TABLE COMPANY (
	CompanyID int IDENTITY(1,10) PRIMARY KEY,
	CompanyName varchar(50)
);

CREATE TABLE SERVICETYPE (
	ServiceTypeID int IDENTITY(1,10) PRIMARY KEY,
	ServiceType varchar(80),
	ServiceDescription varchar(150)
);

Create Table ENTRYTYPE
(
	EntryTypeID int IDENTITY(1,1) PRIMARY KEY,
	EntryType varchar(100),
	Billable bit
);

Create Table TIMETYPE
(
	TimeTypeID int IDENTITY(1,1) PRIMARY KEY,
	TimeType varchar(100),
	Category varchar(100)
);

Create Table BILLINGTYPE
(
	BillingTypeID int IDENTITY(1,1) PRIMARY KEY,
	BillingType varchar(20)
);

Create Table WORKORDERSTATUS
(
	StatusID int IDENTITY(1,1) PRIMARY KEY,
	StatusType Varchar(100) 
);

Create table WORKORDERPRIORITY
(
	PriorityID int IDENTITY(1,1) PRIMARY KEY,
	PriorityType varchar(100)
);

CREATE TABLE CONTACT (
	ContactID int IDENTITY(1,1) PRIMARY KEY,
	ContactFirstName varchar(50),
	ContactLastName varchar(50),
	ContactEmail nvarchar(70),
	ContactPhone varchar(15)
);

Create Table TBL_GRANT (
	GrantID varchar(10) PRIMARY KEY,
	GrantName Varchar(200),
	Budget decimal(12,6)
);

CREATE TABLE SERVICERATE (
	ServiceRateID int IDENTITY(1,1) PRIMARY KEY,
	RateStartDate date,
	RateEndDate date,
	FiscalYear varchar(4),
	ServiceRate decimal(12,6)
);

CREATE TABLE IPOSTATUS (
	IPOstatusID int IDENTITY(1,100) PRIMARY KEY,
	IPOStatus varchar(30)
);

CREATE TABLE DEPARTMENT (
	DepartmentID int IDENTITY(1,1) PRIMARY KEY,
	DepartmentName varchar(100),
	CompanyID_DEPARTMENT int FOREIGN KEY REFERENCES Company(CompanyID)
);

CREATE TABLE CUSTOMER (
	CustomerID int IDENTITY(1,1) PRIMARY KEY,
	CustFirstName varchar(50),
	CustLastName varchar(50),
	CustEmail nvarchar(70),
	CustPhone varchar(15),
	CustAddress varchar(100),
	CustCity varchar(50),
	CustState Char(2),
	CustZip varchar(10),
	DepartmentID_CUSTOMER int REFERENCES DEPARTMENT(DepartmentID)
);

CREATE TABLE EMPLOYEE (
	EmployeeID int IDENTITY(1,1) PRIMARY KEY,
	EmpFirstName varchar(50),
	EmpLastName varchar(50),
	EmpEmail nvarchar(70),
	EmpPhone varchar(15),
	EmpAddress varchar(100),
	EmpCity varchar(50),
	EmpState Char(2),
	EmpZipCode varchar(10),
	DepartmentID_EMPLOYEE int FOREIGN KEY REFERENCES DEPARTMENT(DepartmentID),
	JobTitleID_EMPLOYEE int FOREIGN KEY REFERENCES JOBTITLE(JobTitleID),
	EmployeeTypeID_EMPLOYEE int FOREIGN KEY REFERENCES EMPLOYEETYPE(EmployeeTypeID)
);

CREATE TABLE IPO (
	IPOID int IDENTITY(1,1) PRIMARY KEY,
	IPODate date,
	IPOCreationDate date,
	IPOPaymentDate date,
	IPOStatusID_IPO int FOREIGN KEY REFERENCES IPOSTATUS(IPOStatusID)
);

CREATE TABLE IPORATE (
	IPORateID int IDENTITY(1,10) PRIMARY KEY,
	ServiceRateID_IPORATE int FOREIGN KEY REFERENCES SERVICERATE(ServiceRateID),
	IPOID_IPORATE int FOREIGN KEY REFERENCES IPO(IPOID)
);

Create table WORKORDER
(
	WorkOrderID int IDENTITY(1,1) PRIMARY KEY,
	EmployeeID_WORKORDER int foreign key references EMPLOYEE(EmployeeID),
	CustomerID_WORKORDER int foreign key references CUSTOMER(CustomerID),
	PriorityID_WORKORDER int foreign key references WORKORDERPRIORITY(PriorityID),
	StatusID_WORKORDER int foreign key references WORKORDERSTATUS(StatusID),
	WorkOrderSubmittedDate date,
	WorkOrderDescription varchar(300),
	WorkOrderStartDate date,
	WorkOrderDueDate date,
	WorkOrderClosedDate date,
	WorkOrderNotes varchar(2000),
	ProjectName varchar(200)
);

Create Table ASSIGNEE
(
	AssigneeID int IDENTITY(1,1) PRIMARY KEY,
	EmployeeID_ASSIGNEE int foreign key references EMPLOYEE(EmployeeID),
	WorkOrderID_ASSIGNEE int foreign key references WORKORDER(WorkOrderID)
);


Create Table TIMESHEET
(
	TimeSheetID int IDENTITY(1,1) PRIMARY KEY,
	WorkOrderID_TIMESHEET int foreign key references WORKORDER(WorkOrderID),
	EmployeeID_TIMESHEET int foreign key references EMPLOYEE(EmployeeID),
	EntryTypeID_TIMESHEET int foreign key references ENTRYTYPE(EntryTypeID),
	BillingTypeID_TIMESHEET int foreign key references BILLINGTYPE(BillingTypeID),
	TimeTypeID_TIMESHEET int foreign key references TIMETYPE(TimeTypeID),
	ServiceTypeID_TIMESHEET int foreign key references SERVICETYPE(ServiceTypeID),
	IPOID_TIMESHEET int foreign key references IPO(IPOID),
	WorkDateTime date,
	TimeWorkedHours decimal(4,2),
	WorkPerformed varchar(1000)
);


CREATE TABLE WORKORDERCONTACT (
	WorkOrderContactID int IDENTITY(1,1) PRIMARY KEY,
	ContactID_WORKORDERCONTACT int REFERENCES CONTACT(ContactID),
	WorkOrderID_WORKORDERCONTACT int REFERENCES WORKORDER(WorkOrderID)
);

CREATE TABLE WORKORDERGRANT (
	WorkOrderGrantID int IDENTITY(1,1) PRIMARY KEY,
	WorkOrderID_WORKORDERGRANT int REFERENCES WORKORDER(WorkOrderID),
	GrantID_WORKORDERGRANT varchar(10) REFERENCES TBL_GRANT(GrantID)
);



SELECT * FROM COMPANY;
SELECT * FROM EMPLOYEETYPE;
SELECT * FROM ENTRYTYPE;
SELECT * FROM JOBTITLE;
SELECT * FROM SERVICETYPE;
SELECT * FROM TIMETYPE;
SELECT * FROM BILLINGTYPE;
SELECT * FROM WORKORDERSTATUS;
SELECT * FROM WORKORDERPRIORITY;
SELECT * FROM CONTACT;
SELECT * FROM TBL_GRANT;
SELECT * FROM servicerate;
SELECT * FROM ipostatus;
SELECT * FROM department;
SELECT * FROM CUSTOMER;
SELECT * FROM employee;
SELECT * FROM ipo;
SELECT * FROM iporate;
SELECT * FROM WORKORDER;
SELECT * FROM ASSIGNEE;
SELECT * FROM timesheet;
SELECT * FROM WORKORDERCONTACT;
SELECT * FROM WORKORDERGRANT;




/* VIEW ALL DATA AT ONCE */
SELECT * FROM COMPANY, EMPLOYEETYPE, ENTRYTYPE, JOBTITLE, SERVICETYPE, TIMETYPE, BILLINGTYPE, WORKORDERSTATUS, WORKORDERPRIORITY, CONTACT, TBL_GRANT, SERVICERATE, IPOSTATUS, DEPARTMENT, CUSTOMER, EMPLOYEE, IPO, IPORATE, WORKORDER, ASSIGNEE, TIMESHEET, WORKORDERCONTACT, WORKORDERGRANT;


DELETE FROM CUSTOMER;