CREATE TABLE JOBTITLE (
	JobTitleID int primary key,
	JobTitle varchar(30)
);

CREATE TABLE EMPLOYEETYPE (
	EmployeeTypeID int primary key,
	EmployeeType varchar(30)
);

CREATE TABLE COMPANY (
	CompanyID int primary key,
	CompanyName varchar(50)
);

CREATE TABLE SERVICETYPE (
	ServiceTypeID int PRIMARY KEY,
	ServiceType varchar(80),
	ServiceDescription varchar(150)
);

Create Table ENTRYTYPE
(
	EntryTypeID int primary key,
	EntryType varchar(100),
	Billable bit
);

Create Table TIMETYPE
(
	TimeTypeID int primary key,
	TimeType varchar(100),
	Category varchar(100)
);

Create Table BILLINGTYPE
(
	BillingTypeID int primary key,
	BillingType varchar(20)
);

Create Table WORKORDERSTATUS
(
	StatusID int Primary Key,
	StatusType Varchar(100) 
);

Create table WORKORDERPRIORITY
(
	PriorityID int primary key,
	PriorityType varchar(100)
);

CREATE TABLE CONTACT (
	ContactID int primary key,
	FirstName varchar(50),
	LastName varchar(50),
	EmailAddress nvarchar(70),
	PhoneNumber varchar(15)
);

Create Table TBL_GRANT (
	GrantID varchar(10) primary key,
	GrantName Varchar(200),
	Budget decimal(12,6)
);

CREATE TABLE SERVICERATE (
	ServiceRateID int PRIMARY KEY,
	StartDate date,
	EndDate date,
	FiscalYear varchar(4),
	Rate decimal(12,6)
);

CREATE TABLE IPOSTATUS (
	IPOstatusID int PRIMARY KEY,
	IPOStatus varchar(30)
);

CREATE TABLE DEPARTMENT (
	DepartmentID int primary key,
	DepartmentName varchar(100),
	CompanyID int FOREIGN KEY REFERENCES Company(CompanyID)
);

CREATE TABLE CUSTOMER (
	CustomerID int primary key,
	FirstName varchar(50),
	LastName varchar(50),
	EmailAddress nvarchar(70),
	PhoneNumber varchar(15),
	EmpAddress varchar(100),
	City varchar(50),
	EmpState Char(2),
	ZipCode varchar(10),
	DepartmentID int REFERENCES DEPARTMENT(DepartmentID)
);

CREATE TABLE EMPLOYEE (
	EmployeeID int primary key,
	FirstName varchar(50),
	LastName varchar(50),
	Email nvarchar(70),
	Phone varchar(15),
	EmpAddress varchar(100),
	City varchar(50),
	EmpState Char(2),
	ZipCode varchar(10),
	DepartmentID int FOREIGN KEY REFERENCES DEPARTMENT(DepartmentID),
	JobTitleID int FOREIGN KEY REFERENCES JOBTITLE(JobTitleID),
	EmployeeTypeID int FOREIGN KEY REFERENCES EMPLOYEETYPE(EmployeeTypeID)
);

CREATE TABLE IPO (
	IPOID int PRIMARY KEY,
	IPODate date,
	CreationDate date,
	PaymentDate date,
	IPOStatusID int FOREIGN KEY REFERENCES IPOSTATUS(IPOStatusID)
);

CREATE TABLE IPORATE (
	IPORateID int PRIMARY KEY,
	ServiceRateID int FOREIGN KEY REFERENCES SERVICERATE(ServiceRateID),
	IPOID int FOREIGN KEY REFERENCES IPO(IPOID)
);

Create table WORKORDER
(
	WorkOrderID int primary key,
	EmployeeID int foreign key references EMPLOYEE(EmployeeID),
	CustomerID int foreign key references CUSTOMER(CustomerID),
	PriorityID int foreign key references WORKORDERPRIORITY(PriorityID),
	StatusID int foreign key references WORKORDERSTATUS(StatusID),
	SubmittedDate date,
	WorkOrderDescription varchar(300),
	StartDate date,
	DueDate date,
	ClosedDate date,
	Notes varchar(2000),
	ProjectName varchar(200)
);

Create Table ASSIGNEE
(
	AssigneeID int primary key,
	EmployeeID int foreign key references EMPLOYEE(EmployeeID),
	WorkOrderID int foreign key references WORKORDER(WorkOrderID)
);


Create Table TIMESHEET
(
	TimeSheetID int primary key,
	WorkOrderID int foreign key references WORKORDER(WorkOrderID),
	EmployeeID int foreign key references EMPLOYEE(EmployeeID),
	EntryTypeID int foreign key references ENTRYTYPE(EntryTypeID),
	BillingTypeID int foreign key references BILLINGTYPE(BillingTypeID),
	TimeTypeID int foreign key references TIMETYPE(TimeTypeID),
	ServiceTypeID int foreign key references SERVICETYPE(ServiceTypeID),
	IPODID int foreign key references IPO(IPOID),
	WorkDateTime date,
	TimeWorkedHours decimal(4,2),
	WorkPerformed varchar(1000)
);


CREATE TABLE WORKORDERCONTACT (
	WorkOrderContactID int primary key,
	ContactID int REFERENCES CONTACT(ContactID),
	WorkOrderID int REFERENCES WORKORDER(WorkOrderID)
);

CREATE TABLE WORKORDERGRANT (
	WorkOrderGrantID int primary key,
	WorkOrderID int REFERENCES WORKORDER(WorkOrderID),
	GrantID varchar(10) REFERENCES TBL_GRANT(GrantID)
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