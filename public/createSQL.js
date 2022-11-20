
const primaryKeys = {
    JOBTITLE : 'JobTitleID',
    EMPLOYEETYPE : 'EmployeeTypeID',
    COMPANY : 'CompanyID',
    SERVICETYPE : 'ServiceTypeID',
    ENTRYTYPE : 'EntryTypeID',
    TIMETYPE : 'TimeTypeID',
    BILLINGTYPE : 'BillingTypeID',
    WORKORDERSTATUS : 'WorkOrderStatusID',
    WORKORDERPRIORITY : 'WorkOrderPriorityID',
    CONTACT : 'ContactID',
    TBL_GRANT : 'GrantID',
    SERVICERATE : 'ServiceRateID',
    IPOSTATUS : 'IPOStatusID',
    DEPARTMENT : 'DepartmentID',
    CUSTOMER : 'CustomerID',
    EMPLOYEE : 'EmployeeID',
    IPO : 'IPOID',
    IPORATE : 'IPORateID',
    WORKORDER : 'WorkOrderID',
    ASSIGNEE : 'AssigneeID',
    TIMESHEET : 'TimesheetID',
    WORKORDERCONTACT : 'WorkOrderContactID',
    WORKORDERGRANT : 'WorkOrderGrantID'
}


const dbAttributes = {
    JobTitleID : 'JOBTITLE',
    JobTitle : 'JOBTITLE',
    EmployeeTypeID : 'EMPLOYEETYPE',
    EmployeeType : 'EMPLOYEETYPE',
    CompanyID : 'COMPANY',
    CompanyName : 'COMPANY',
    ServiceTypeID : 'SERVICETYPE', 
    ServiceType : 'SERVICETYPE',
    ServiceDescription : 'SERVICETYPE',
    EntryTypeID : 'ENTRYTYPE',
    EntryType : 'ENTRYTYPE', 
    Billable : 'ENTRYTYPE', 
    TimeTypeID : 'TIMETYPE',
    TimeType : 'TIMETYPE', 
    Category : 'TIMETYPE', 
    BillingTypeID : 'BILLINGTYPE',
    BillingType : 'BILLINGTYPE',
    StatusID : 'WORKORDERSTATUS',
    StatusType : 'WORKORDERSTATUS',
    PriorityID : 'WORKORDERPRIORITY',
    PriorityType : 'WORKORDERPRIORITY',
    ContactID : 'CONTACT',
    ContactFirstName : 'CONTACT', 
    ContactLastName : 'CONTACT',
    ContactEmail : 'CONTACT',
    ContactPhone : 'CONTACT',
    ServiceRateID : 'SERVICERATE',
    RateStartDate : 'SERVICERATE', 
    RateEndDate : 'SERVICERATE',
    FiscalYear : 'SERVICERATE', 
    ServiceRate : 'SERVICERATE',
    IPOStatusID : 'IPOSTATUS',
    IPOStatus : 'IPOSTATUS',
    DepartmentID : 'DEPARTMENT',
    DepartmentName : 'DEPARTMENT',
    CompanyID : 'DEPARTMENT', 
    CustomerID : 'CUSTOMER',
    CustFirstName : 'CUSTOMER',
    CustLastName : 'CUSTOMER',
    DepartmentID : 'CUSTOMER', 
    CustEmail : 'CUSTOMER',
    CustPhone : 'CUSTOMER',
    CustAddress : 'CUSTOMER',
    CustCity : 'CUSTOMER',
    CustState : 'CUSTOMER',
    CustZip : 'CUSTOMER', 
    EmployeeID : 'EMPLOYEE',
    EmpFirstName : 'EMPLOYEE',
    EmpLastName : 'EMPLOYEE',
    DepartmentID : 'EMPLOYEE',
    EmpEmail : 'EMPLOYEE',
    JobTitleID : 'EMPLOYEE',
    EmpPhone : 'EMPLOYEE',
    EmpAddress : 'EMPLOYEE',
    EmpCity : 'EMPLOYEE',
    EmpState : 'EMPLOYEE',
    EmpZipCode : 'EMPLOYEE',
    EmployeeTypeID : 'EMPLOYEE',
    IPOID : 'IPO',
    IPODate : 'IPO',
    IPOCreationDate : 'IPO',
    IPOStatusID : 'IPO', 
    IPOPaymentDate : 'IPO',
    IPORateID : 'IPORATE',
    ServiceRateID : 'IPORATE',
    IPOID : 'IPORATE',
    GrantID : 'TBL_GRANT',
    GrantName : 'TBL_GRANT',
    Budget : 'TBL_GRANT',
    WorkOrderID : 'WORKORDER',
    EmployeeID : 'WORKORDER',
    CustomerID : 'WORKORDER',
    PriorityID : 'WORKORDER',
    StatusID : 'WORKORDER',
    WorkOrderSubmittedDate : 'WORKORDER',
    WorkOrderDescription : 'WORKORDER',
    WorkOrderStartDate : 'WORKORDER',
    WorkOrderDueDate : 'WORKORDER',
    WorkOrderClosedDate : 'WORKORDER',
    WorkOrderNotes : 'WORKORDER', 
    GrantID : 'WORKORDER',
    ProjectName : 'WORKORDER', 
    AssigneeID : 'ASSIGNEE',
    EmployeeID : 'ASSIGNEE',
    WorkOrderID : 'ASSIGNEE',
    TimeSheetID : 'TIMESHEET',
    WorkOrderID : 'TIMESHEET',
    EmployeeID : 'TIMESHEET',
    EntryTypeID : 'TIMESHEET',
    BillingTypeID : 'TIMESHEET',
    TimeTypeID : 'TIMESHEET',
    ServiceTypeID : 'TIMESHEET',
    IPOID : 'TIMESHEET',
    TimeSheetDate : 'TIMESHEET',
    TimeWorkedHours : 'TIMESHEET',
    WorkPerformed : 'TIMESHEET',
    WorkOrderContactID : 'WORKORDERCONTACT',
    ContactID : 'WORKORDERCONTACT',
    WorkOrderID : 'WORKORDERCONTACT',
    WorkOrderGrantID : 'WORKORDERGRANT',
    WorkOrderID : 'WORKORDERGRANT',
    GrantID : 'WORKORDERGRANT'
};



const timesheetForm = document.getElementById('timesheet-form');
const tableForm = document.getElementById('timesheet-container');
const submitBtn = document.getElementById('submit-btn');
const sqlCode = document.getElementById('sql-code');
const results = document.getElementById('results');
const pagination = document.getElementById('pagination');
const pageSummary = document.getElementById("page-summary");
const selector = document.getElementById("selector");
const sortCriteria = document.getElementById('sort-criteria');
const sortOptions = document.getElementById('sort-options');




let attributes;
let tables;
let selectStatement;
let joinsTxt;
let whereTxt;
let sqlQuery;
let startingTable = "TIMESHEET";
let columns = [];
let sqlData = {};
let startingSlice = 0;
let currentPage = 1;


let whereHTML = selector.innerHTML;
submitBtn.addEventListener('click', buildQuery);


async function buildQuery(event) {
    event.preventDefault(); 
    clearAll();

    //Gathers information
    attributes = getCheckedAttributes(); //gets all values of checked boxes
    populateSortOptions(); //should be generated as elements are selected, not how it is currently
    tables = getCheckedClasses(); //all tables involved (className)

    //Builds Query
    selectStatement = buildSelect(startingTable, attributes); //starting table and all values of checked boxes
    joinTxt = buildJoins(startingTable, tables);
    whereTxt = buildWhere();
    orderTxt = buildOrderBy();
    sqlQuery = selectStatement + `FROM ${startingTable}\n ` + joinTxt + whereTxt + orderTxt;
    sqlCode.textContent = sqlQuery;
    
    //Sends Query and returns Results
    try {
        sqlData = await getResults(sqlQuery);
        renderResults(sqlData);
    } catch {
        alert("Query is invalid");
    }
};


//sends query to database
async function getResults(code) {
    const response = await fetch("/", {
        method: 'POST',
        headers: {
        'Content-Type': 'text/plain'
        },
        body: code,})
    const data = await response.json()
    return data
};



function renderResults(data) {
    let limit = 50;
    let count = startingSlice + 1;

    const totalPages = Math.ceil(data.recordset.length / limit);

    //creates headers:
    let header = results.createTHead();
    let row = header.insertRow();
    cell = row.insertCell();
    cell.innerHTML = "#";
    for (cellData in data.recordset[0])
    {
        cell = row.insertCell();
        cell.innerHTML = cellData;
    }

    //creates body:
    let tbody = results.createTBody()
    for (row of data.recordset.slice(startingSlice, startingSlice + limit)) {
        let rows = tbody.insertRow()

        cell = rows.insertCell();
        cell.innerHTML = count;

        for (cellData in row)
        {
            cell = rows.insertCell();
            cell.innerHTML = row[cellData]
        }   
        count++;
    }

    pageSummary.innerHTML = `Page ${currentPage} of ${totalPages}`
    paginate(totalPages)
}


function paginate(totalPages) {
    const maxPages = 10;
    let countPages = 0;

    pagination.innerHTML = "<li><button type='button'>«</button></li>"

    for (page of Array(totalPages).keys()) {
        if (countPages < maxPages) {
            pagination.innerHTML += `
            <li><button id="page-${page+1}" type='button'>${page+1}</button></li>
            `
            // console.log(document.getElementById(`page-${page+1}`))
            let pageBtn = document.getElementById(`page-${page+1}`)

            pageBtn.addEventListener("click", function(){ console.log("click worked")}) // NOT WORKING, MAY HAVE TO USE EVENT DELEGATION
            // document.getElementById(`page-${page+1}`).param = 'test param'
            // console.log(document.getElementById(`page-${page+1}`).param)
        }
        countPages ++;
    }
    document.getElementById(`page-${currentPage}`).setAttribute("aria-current","page");

    pagination.innerHTML += "<li><button type='button'>»</button></li>"
}



function clearAll() {
    joinsTxt = "";
    whereTxt = "";
    sqlQuery = "";
    results.innerHTML = "";
    sortCriteria.innerHTML = "";
}



function getCheckedAttributes(){
    const checks = timesheetForm.querySelectorAll('input[type="checkbox"]');
    let checked = [];
    for(let i = 0; i < checks.length; i++){
        if(checks[i].checked)
            checked.push(checks[i].value)
    }
    return checked;
}


//gets classes of checked boxes, excludes duplicates
function getCheckedClasses(){
    const checks = timesheetForm.querySelectorAll('input[type="checkbox"]');
    let checkedClasses = [];
    for(let i = 0; i < checks.length; i++){
        if(checks[i].checked && !checkedClasses.includes(checks[i].className))
            checkedClasses.push(checks[i].className)
    }
    return checkedClasses;
}




// BUILD QUERY FUNCTIONS: //
//FIX: should only apply startingTable to attributes that ARE IN starting table
function buildSelect(startingTable, attributes) {
    let selectStatement = "SELECT ";

    if (attributes.length === 0)
        selectStatement += " *  ";

    for(let i = 0; i < attributes.length; i++) {
        // selectStatement += startingTable + "." + attributes[i] + ", ";
        selectStatement += attributes[i] + ", ";
        columns.push(attributes[i]);
    }

    return selectStatement.slice(0, -2) + " \n"; //deletes comma from last attribute
}

function buildJoins(startingTable, checkedClasses) {
    for (const table of checkedClasses) {
        if (table != startingTable) {
            joinsTxt += 
            `LEFT OUTER JOIN ${table}
            ON ${startingTable}.${primaryKeys[table]} = ${table}.${primaryKeys[table]}
            `
        }
    }
    return joinsTxt;
}

function buildWhere() {
    optionArr = document.getElementById('selector').getElementsByTagName('select');
    inputArr = document.getElementsByClassName('where');
    if (inputArr[0].value != "") {
        whereTxt = "WHERE " 
        for(let i = 0; i < optionArr.length; i++) {
            if (i === optionArr.length - 1)
                whereTxt += `${optionArr[i].value} = '${inputArr[i].value}'\n`
            else
                whereTxt += `${optionArr[i].value} = '${inputArr[i].value}' AND\n`
        }
    }
    else {
        whereTxt = ""
    }
    return whereTxt;
}

function buildOrderBy() {
    let orderTxt = ""
    if (sortCriteria.value)
        orderTxt += `ORDER BY ${sortCriteria.value} ${sortOptions.value}`
    return orderTxt
}




function addInputField() {
    console.log("addinput called")
    whereHTML += `
        <div class="where-condition">
                <select>
                    <option value="FirstName">FirstName</option>
                    <option value="LastName">LastName</option>
                    <option value="WorkOrderID">WorkOrderID</option>
                </select>
                <input type="text" class="where" id="where" name="where" />
                <button type="button" onclick="removeInputField()" class="minus-btn">-</button>
                <button type="button" onclick="addInputField()" class="plus-btn">+</button>
            <br>
        </div>`
    selector.innerHTML = whereHTML;
}


function removeInputField() {
    document.getElementById('selector').removeChild(selector.lastElementChild)
}






function createCheckboxes(dbAttributes) {
    let checkboxHTML = ""
    for (let attribute in dbAttributes) {
        checkboxHTML += `
        <input
            type="checkbox"
            id="${attribute}"
            name="${attribute}"
            value="${attribute}"
            class="${dbAttributes[attribute]}" />
        <label for="${attribute}">${attribute}</label>
        `
    }
    tableForm.innerHTML += checkboxHTML;
}

createCheckboxes(dbAttributes);


function populateSortOptions() {
    if (attributes) {
        for (item of attributes) {
            sortCriteria.innerHTML = `
            <option value="${item}">${item}</option>
            `
        }
    }
    console.log(document.getElementById('sort-options').value);
}

