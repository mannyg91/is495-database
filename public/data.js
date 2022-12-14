const primaryKeys = {
    JOBTITLE : "JobTitleID",
    EMPLOYEETYPE : "EmployeeTypeID",
    COMPANY : "CompanyID",
    SERVICETYPE : "ServiceTypeID",
    ENTRYTYPE : "EntryTypeID",
    TIMETYPE : "TimeTypeID",
    BILLINGTYPE : "BillingTypeID",
    WORKORDERSTATUS : "StatusID",
    WORKORDERPRIORITY : "PriorityID",
    CONTACT : "ContactID",
    TBL_GRANT : "GrantID",
    SERVICERATE : "ServiceRateID",
    IPOSTATUS : "IPOStatusID",
    DEPARTMENT : "DepartmentID",
    CUSTOMER : "CustomerID",
    EMPLOYEE : "EmployeeID",
    IPO : "IPOID",
    IPORATE : "IPORateID",
    WORKORDER : "WorkOrderID",
    ASSIGNEE : "AssigneeID",
    TIMESHEET : "TimesheetID",
    WORKORDERCONTACT : "WorkOrderContactID",
    WORKORDERGRANT : "WorkOrderGrantID"
}


export { primaryKeys, tables };

// tables[table].attributes

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