CREATE TABLE JOBTITLE (
	JobTitleID float primary key,
	JobTitle varchar(30)
);

CREATE TABLE EMPLOYEETYPE (
	EmployeeTypeID float primary key,
	EmployeeType varchar(30)
);

CREATE TABLE COMPANY (
	CompanyID float primary key,
	CompanyName varchar(50)
);

CREATE TABLE SERVICETYPE (
	ServiceTypeID float PRIMARY KEY,
	ServiceType varchar(30),
	ServiceDescription varchar(80)
);

Create Table ENTRYTYPE
(
	EntryTypeID float primary key,
	EntryType varchar(100),
	Billable bit
);

Create Table TIMETYPE
(
	TimeTypeID float primary key,
	TimeType varchar(100),
	Category varchar(100)
);

Create Table BILLINGTYPE
(
	BillingTypeID float primary key,
	BillingType varchar(20)
);

Create Table WORKORDERSTATUS
(
	StatusID float Primary Key,
	StatusType Varchar(100) 
);

Create table WORKORDERPRIORITY
(
	PriorityID float primary key,
	PriorityType varchar(100)
);

CREATE TABLE CONTACT (
	ContactID float primary key,
	FirstName varchar(50),
	LastName varchar(50),
	EmailAddress nvarchar(70),
	PhoneNumber varchar(15)
);

Create Table TBL_GRANT (
	GrantID float primary key,
	GrantName Varchar(100),
	Budget decimal(12,6)
);

CREATE TABLE SERVICERATE (
	ServiceRateID float PRIMARY KEY,
	StartDate date,
	EndDate date,
	FiscalYear varchar(4),
	Rate decimal(12,6)
);

CREATE TABLE IPOSTATUS (
	IPOstatusID float PRIMARY KEY,
	IPOStatus varchar(30)
);

CREATE TABLE DEPARTMENT (
	DepartmentID float primary key,
	DepartmentName varchar(50),
	CompanyID float FOREIGN KEY REFERENCES Company(CompanyID)
);

CREATE TABLE CUSTOMER (
	CustomerID float primary key,
	FirstName varchar(50),
	LastName varchar(50),
	EmailAddress nvarchar(70),
	PhoneNumber varchar(15),
	EmpAddress varchar(100),
	City varchar(50),
	EmpState Char(2),
	ZipCode varchar(5),
	DepartmentID float REFERENCES DEPARTMENT(DepartmentID)
);

CREATE TABLE EMPLOYEE (
	EmployeeID float primary key,
	FirstName varchar(50),
	LastName varchar(50),
	Email nvarchar(70),
	Phone varchar(15),
	EmpAddress varchar(100),
	City varchar(50),
	EmpState Char(2),
	ZipCode varchar(5),
	DepartmentID float FOREIGN KEY REFERENCES Department(DepartmentID),
	JobTitleID float FOREIGN KEY REFERENCES JobTitle(JobTitleID),
	EmployeeTypeID float FOREIGN KEY REFERENCES EmployeeType(EmployeeTypeID)
);

CREATE TABLE IPO (
	IPOID float PRIMARY KEY,
	IPODate date,
	CreationDate date,
	PaymentDate date,
	EmployeeID float FOREIGN KEY REFERENCES Employee(EmployeeID),
	IPOStatusID float FOREIGN KEY REFERENCES IPOSTATUS(IPOStatusID)
);

CREATE TABLE IPORATE (
	IPORateID float PRIMARY KEY,
	ServiceRateID float FOREIGN KEY REFERENCES IPO(IPOID),
	IPOID float FOREIGN KEY REFERENCES SERVICERATE(ServiceRateID)
);

Create table WORKORDER
(
	WorkOrderID float primary key,
	EmployeeID float foreign key references EMPLOYEE(EmployeeID),
	CustomerID float foreign key references CUSTOMER(CustomerID),
	PriorityID float foreign key references WORKORDERPRIORITY(PriorityID),
	StatusID float foreign key references WORKORDERSTATUS(StatusID),
	SubmittedDate date,
	WorkOrderDescription varchar(100),
	StartDate date,
	DueDate date,
	ClosedDate date,
	Notes varchar(200),
	GrantID float,
	ProjectName varchar(100)
);

Create Table ASSIGNEE
(
	AssigneeID float primary key,
	EmployeeID float foreign key references EMPLOYEE(EmployeeID),
	WorkOrderID float foreign key references WORKORDER(WorkOrderID)
);


Create Table TIMESHEET
(
	TimeSheetID float primary key,
	WorkOrderID float foreign key references WORKORDER(WorkOrderID),
	EmployeeID float foreign key references EMPLOYEE(EmployeeID),
	EntryTypeID float foreign key references ENTRYTYPE(EntryTypeID),
	BillingTypeID float foreign key references BILLINGTYPE(BillingTypeID),
	TimeTypeID float foreign key references TIMETYPE(TimeTypeID),
	ServiceTypeID float foreign key references SERVICETYPE(ServiceTypeID),
	IPODID float foreign key references IPO(IPOID),
	WorkDateTime date,
	TimeWorkedHours decimal(4,2),
	WorkPerformed varchar(1000)
);


CREATE TABLE WORKORDERCONTACT (
	WorkOrderContactID float primary key,
	ContactID float REFERENCES CONTACT(ContactID),
	WorkOrderID float REFERENCES WORKORDER(WorkOrderID)
);





