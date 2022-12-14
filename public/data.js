export { tables, dbAttributes, categoryToRelatedTables };


const tables = {
    ASSIGNEE: {
        primaryKey : "AssigneeID",
        attributes : ["AssigneeID"]
    },
    BILLINGTYPE: {
        primaryKey : "BillingTypeID",
        attributes : ["BillingTypeID","BillingType"]
    },
    COMPANY: {
        primaryKey : "CompanyID",
        attributes : ["CompanyID","CompanyName"]
    },
    CONTACT: {
        primaryKey : "ContactID",
        attributes : ["ContactID","ContactFirstName","ContactLastName","ContactEmail","ContactPhone"]
    },
    CUSTOMER: {
        primaryKey : "CustomerID",
        attributes : ["CustomerID","CustFirstName","CustLastName","CustEmail","CustPhone","CustAddress","CustCity","CustState","CustZip"]
    },
    DEPARTMENT: {
        primaryKey : "DepartmentID",
        attributes : ["DepartmentID","DepartmentName"]    
    },
    EMPLOYEE: {
        primaryKey : "EmployeeID",
        attributes : ["EmployeeID","EmpFirstName","EmpLastName","EmpEmail","EmpPhone","EmpAddress","EmpCity","EmpState","EmpZipCode"]
    },
    EMPLOYEETYPE: {
        primaryKey : "EmployeeTypeID",
        attributes : ["EmployeeTypeID","EmployeeType"]
    },
    ENTRYTYPE: {
        primaryKey : "EntryTypeID",
        attributes : ["EntryTypeID","EntryType","Billable"]
    },
    IPO: {
        primaryKey : "IPOID",
        attributes : ["IPOID","IPODate","IPOCreationDate","IPOPaymentDate"]
    },
    IPORATE: {
        primaryKey : "IPORateID",
        attributes : ["IPORateID"]
    },
    IPOSTATUS: {
        primaryKey : "IPOStatusID",
        attributes : ["IPOStatusID","IPOStatus"]
    },
    JOBTITLE: {
        primaryKey : "JobTitleID",
        attributes : ["JobTitleID","JobTitle"]
    },
    SERVICERATE: {
        primaryKey : "ServiceRateID",
        attributes : ["ServiceRateID","RateStartDate","RateEndDate","FiscalYear","ServiceRate"]
    },
    SERVICETYPE: {
        primaryKey : "ServiceTypeID",
        attributes : ["ServiceTypeID","ServiceType","ServiceDescription"]
    },
    TBL_GRANT: {
        primaryKey : "GrantID",
        attributes : ["GrantID","GrantName","Budget"]
    },
    TIMESHEET: {
        primaryKey : "TimesheetID",
        attributes : ["TimeSheetID","TimeSheetDate","TimeWorkedHours","WorkPerformed"]
    },
    TIMETYPE: {
        primaryKey : "TimeTypeID",
        attributes : ["TimeTypeID","TimeType","Category"]        
    },
    WORKORDER: {
        primaryKey : "WorkOrderID",
        attributes : ["WorkOrderID","WorkOrderSubmittedDate","WorkOrderDescription","WorkOrderStartDate","WorkOrderDueDate","WorkOrderClosedDate","WorkOrderNotes","ProjectName"]     
    },
    WORKORDERCONTACT: {
        primaryKey : "WorkOrderContactID",
        attributes : ["WorkOrderContactID"]        
    },
    WORKORDERGRANT: {
        primaryKey : "WorkOrderGrantID",
        attributes : ["WorkOrderGrantID"]      
    },
    WORKORDERPRIORITY: {
        primaryKey : "WorkOrderPriorityID",
        attributes : ["PriorityID","PriorityType"]       
    },
    WORKORDERSTATUS: {
        primaryKey : "WorkOrderStatusID",
        attributes : ["StatusID","StatusType"]        
    }
}


const dbAttributes = {
    JobTitleID : "JOBTITLE",
    JobTitle : "JOBTITLE",
    EmployeeTypeID : "EMPLOYEETYPE",
    EmployeeType : "EMPLOYEETYPE",
    CompanyID : "COMPANY",
    CompanyName : "COMPANY",
    ServiceTypeID : "SERVICETYPE",
    ServiceType : "SERVICETYPE",
    ServiceDescription : "SERVICETYPE",
    EntryTypeID : "ENTRYTYPE",
    EntryType : "ENTRYTYPE",
    Billable : "ENTRYTYPE",
    TimeTypeID : "TIMETYPE",
    TimeType : "TIMETYPE",
    Category : "TIMETYPE",
    BillingTypeID : "BILLINGTYPE",
    BillingType : "BILLINGTYPE",
    StatusID : "WORKORDERSTATUS",
    StatusType : "WORKORDERSTATUS",
    PriorityID : "WORKORDERPRIORITY",
    PriorityType : "WORKORDERPRIORITY",
    ContactID : "CONTACT",
    ContactFirstName : "CONTACT",
    ContactLastName : "CONTACT",
    ContactEmail : "CONTACT",
    ContactPhone : "CONTACT",
    ServiceRateID : "SERVICERATE",
    RateStartDate : "SERVICERATE",
    RateEndDate : "SERVICERATE",
    FiscalYear : "SERVICERATE",
    ServiceRate : "SERVICERATE",
    IPOStatusID : "IPOSTATUS",
    IPOStatus : "IPOSTATUS",
    DepartmentID : "DEPARTMENT",
    DepartmentName : "DEPARTMENT",
    CompanyID_DEPARTMENT : "DEPARTMENT",
    CustomerID : "CUSTOMER",
    CustFirstName : "CUSTOMER",
    CustLastName : "CUSTOMER",
    DepartmentID_CUSTOMER : "CUSTOMER",
    CustEmail : "CUSTOMER",
    CustPhone : "CUSTOMER",
    CustAddress : "CUSTOMER",
    CustCity : "CUSTOMER",
    CustState : "CUSTOMER",
    CustZip : "CUSTOMER",
    EmployeeID : "EMPLOYEE",
    EmpFirstName : "EMPLOYEE",
    EmpLastName : "EMPLOYEE",
    DepartmentID_EMPLOYEE : "EMPLOYEE",
    EmpEmail : "EMPLOYEE",
    JobTitleID_EMPLOYEE : "EMPLOYEE",
    EmpPhone : "EMPLOYEE",
    EmpAddress : "EMPLOYEE",
    EmpCity : "EMPLOYEE",
    EmpState : "EMPLOYEE",
    EmpZipCode : "EMPLOYEE",
    EmployeeTypeID_EMPLOYEE : "EMPLOYEE",
    IPOID : "IPO",
    IPODate : "IPO",
    IPOCreationDate : "IPO",
    IPOStatusID_IPO : "IPO",
    IPOPaymentDate : "IPO",
    IPORateID : "IPORATE",
    ServiceRateID_IPORATE : "IPORATE",
    IPOID_IPORATE : "IPORATE",
    GrantID : "TBL_GRANT",
    GrantName : "TBL_GRANT",
    Budget : "TBL_GRANT",
    WorkOrderID : "WORKORDER",
    EmployeeID_WORKORDER : "WORKORDER",
    CustomerID_WORKORDER : "WORKORDER",
    PriorityID_WORKORDER : "WORKORDER",
    StatusID_WORKORDER : "WORKORDER",
    WorkOrderSubmittedDate : "WORKORDER",
    WorkOrderDescription : "WORKORDER",
    WorkOrderStartDate : "WORKORDER",
    WorkOrderDueDate : "WORKORDER",
    WorkOrderClosedDate : "WORKORDER",
    WorkOrderNotes : "WORKORDER",
    GrantID_WORKORDER : "WORKORDER",
    ProjectName : "WORKORDER",
    AssigneeID : "ASSIGNEE",
    EmployeeID_ASSIGNEE : "ASSIGNEE",
    WorkOrderID_ASSIGNEE : "ASSIGNEE",
    TimeSheetID : "TIMESHEET",
    WorkOrderID_TIMESHEET : "TIMESHEET",
    EmployeeID_TIMESHEET : "TIMESHEET",
    EntryTypeID_TIMESHEET : "TIMESHEET",
    BillingTypeID_TIMESHEET : "TIMESHEET",
    TimeTypeID_TIMESHEET : "TIMESHEET",
    ServiceTypeID_TIMESHEET : "TIMESHEET",
    IPOID_TIMESHEET : "TIMESHEET",
    TimeSheetDate : "TIMESHEET",
    TimeWorkedHours : "TIMESHEET",
    WorkPerformed : "TIMESHEET",
    WorkOrderContactID : "WORKORDERCONTACT",
    ContactID_WORKORDERCONTACT : "WORKORDERCONTACT",
    WorkOrderID_WORKORDERCONTACT : "WORKORDERCONTACT",
    WorkOrderGrantID : "WORKORDERGRANT",
    WorkOrderID_WORKORDERGRANT : "WORKORDERGRANT",
    GrantID_WORKORDERGRANT : "WORKORDERGRANT"
};


//EXCLUDED COMPANY BECAUSE OF SECOND-LEVEL JOINS
const categoryToRelatedTables = {
    "CUSTOMER" : ["CUSTOMER","DEPARTMENT"],
    "EMPLOYEE" : ["EMPLOYEE","JOBTITLE","EMPLOYEETYPE","DEPARTMENT"],
    "IPO" : ["IPO","IPOSTATUS"],
    "IPORATE" : ["IPORATE","SERVICERATE","IPO"],
    "TIMESHEET" : ["TIMESHEET","EMPLOYEE","WORKORDER","SERVICETYPE","ENTRYTYPE","TIMETYPE","BILLINGTYPE"],
    "WORKORDER": ["WORKORDER","WORKORDERSTATUS","WORKORDERPRIORITY"],
    "ASSIGNEE": ["ASSIGNEE","EMPLOYEE","WORKORDER"],
    "WORKORDERCONTACT" : ["WORKORDERCONTACT","WORKORDER","CONTACT"],
    "WORKORDERGRANT": ["WORKORDERGRANT","WORKORDER","TBL_GRANT"]
}


