/*Manny*/
/* SERVICERATE */
CREATE TABLE SERVICERATE (
	ServiceRateID int PRIMARY KEY,
	StartDate date,
	EndDate date,
	FiscalYear smallint,
	Rate decimal(12,6)
);

/* IPORATE */
CREATE TABLE IPORATE (
	IPORateID int PRIMARY KEY,
	ServiceRateID int FOREIGN KEY REFERENCES IPO(IPOID),
	IPOID int FOREIGN KEY REFERENCES SERVICERATE(ServiceRateID)
);

/* IPO */
CREATE TABLE IPO (
	IPOID int PRIMARY KEY,
	IPODate date,
	CreationDate date,
	PaymentDate date,
	PaymentAmount decimal(12,6),
	EmployeeID int FOREIGN KEY REFERENCES Employee(EmployeeID),
	IPOStatusID int FOREIGN KEY REFERENCES IPOSTATUS(IPOStatusID)
);

/* IPOSTATUS */
CREATE TABLE IPOSTATUS (
	IPOstatusID int PRIMARY KEY,
	IPOStatus varchar(30)
);

/*SERVICETYPE*/
CREATE TABLE SERVICETYPE (
	ServiceTypeID int PRIMARY KEY,
	ServiceType varchar(30),
	ServiceDescription varchar(80)
);



/* Delanie */
Create table WORKORDER
(
	WorkOrderID int primary key,
	EmployeeID int foreign key references EMPLOYEE(EmployeeID),
	CustomerID int foreign key references CUSTOMER(CustomerID),
	PriorityID int foreign key references PRIORITY(PriorityID),
	StatusID int foreign key references STATUS(StatusID),
	SubmittedDate date,
	WorkOrderDescription varchar(100),
	StartDate date,
	DueDate date,
	ClosedDate date,
	Notes varchar(200),
	GrantID int,
	ProjectName varchar(100)
);

Create Table STATUS
(
	StatusID Int Primary Key,
	StatusType Varchar(100) 
);

Create table PRIORITY
(
	PriorityID int primary key,
	PriorityType varchar(100)
);

Create Table GRANT
(
	GrantID int primary key,
	GrantName Varchar(100),
	Budget decimal(12,6)
);


/* Rick */
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

Create Table ASSIGNEE
(
	AssigneeID int primary key,
	EmployeeID int foreign key references EMPLOYEE(EmployeeID),
	WorkOrderID int foreign key references WORKORDER(WorkOrderID)
);
	

	
/* Brandon */
CREATE TABLE EMPLOYEE (
	EmployeeID int primary key,
	FirstName varchar(50),
	LastName varchar(50),
	Email nvarchar(70),
	Phone varchar(15),
	EmpAddress varchar(100),
	City varchar(50),
	EmpState Char(2),
	ZipCode int,
	DepartmentID INT FOREIGN KEY REFERENCES Department(DepartmentID),
	JobTitleID INT FOREIGN KEY REFERENCES JobTitle(JobTitleID),
	EmployeeTypeID INT FOREIGN KEY REFERENCES EmployeeType(EmployeeTypeID)
);

CREATE TABLE EMPLOYEETYPE (
	EmployeeTypeID int primary key
);

CREATE TABLE JOBTITLE (
	JobTitleID int primary key
);

CREATE TABLE COMPANY (
	CompanyID int primary key,
	CompanyName varchar(50)
);

CREATE TABLE DEPARTMENT (
	DepartmentID int primary key,
	DepartmentName varchar(50),
	CompanyID INT FOREIGN KEY REFERENCES Company(CompanyID)
);




/* Joel (need to modify for consistency) */

CREATE TABLE WORKORDERCONTACT (
	WorkOrderContactID int primary key,
	ContactID INT REFERENCES CONTACT(ContactID),
	WorkOrderID INT REFERENCES WORKORDER(WorkOrderID)
);

CREATE TABLE CONTACT (
	ContactID int primary key,
	FirstName varchar(50),
	LastName varchar(50),
	EmailAddress nvarchar(70),
	PhoneNumber varchar(15)
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
	ZipCode int,
	DepartmentID INT REFERENCES DEPARTMENT(DepartmentID)
);

