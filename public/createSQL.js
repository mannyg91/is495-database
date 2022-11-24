
const primaryKeys = {
    JOBTITLE : 'JobTitleID',
    EMPLOYEETYPE : 'EmployeeTypeID',
    COMPANY : 'CompanyID',
    SERVICETYPE : 'ServiceTypeID',
    ENTRYTYPE : 'EntryTypeID',
    TIMETYPE : 'TimeTypeID',
    BILLINGTYPE : 'BillingTypeID',
    WORKORDERSTATUS : 'StatusID',
    WORKORDERPRIORITY : 'PriorityID',
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
    CompanyID_DEPARTMENT : 'DEPARTMENT', 
    CustomerID : 'CUSTOMER',
    CustFirstName : 'CUSTOMER',
    CustLastName : 'CUSTOMER',
    DepartmentID_CUSTOMER : 'CUSTOMER', 
    CustEmail : 'CUSTOMER',
    CustPhone : 'CUSTOMER',
    CustAddress : 'CUSTOMER',
    CustCity : 'CUSTOMER',
    CustState : 'CUSTOMER',
    CustZip : 'CUSTOMER', 
    EmployeeID : 'EMPLOYEE',
    EmpFirstName : 'EMPLOYEE',
    EmpLastName : 'EMPLOYEE',
    DepartmentID_EMPLOYEE : 'EMPLOYEE',
    EmpEmail : 'EMPLOYEE',
    JobTitleID_EMPLOYEE : 'EMPLOYEE',
    EmpPhone : 'EMPLOYEE',
    EmpAddress : 'EMPLOYEE',
    EmpCity : 'EMPLOYEE',
    EmpState : 'EMPLOYEE',
    EmpZipCode : 'EMPLOYEE',
    EmployeeTypeID_EMPLOYEE : 'EMPLOYEE',
    IPOID : 'IPO',
    IPODate : 'IPO',
    IPOCreationDate : 'IPO',
    IPOStatusID_IPO : 'IPO', 
    IPOPaymentDate : 'IPO',
    IPORateID : 'IPORATE',
    ServiceRateID_IPORATE : 'IPORATE',
    IPOID_IPORATE : 'IPORATE',
    GrantID : 'TBL_GRANT',
    GrantName : 'TBL_GRANT',
    Budget : 'TBL_GRANT',
    WorkOrderID : 'WORKORDER',
    EmployeeID_WORKORDER : 'WORKORDER',
    CustomerID_WORKORDER : 'WORKORDER',
    PriorityID_WORKORDER : 'WORKORDER',
    StatusID_WORKORDER : 'WORKORDER',
    WorkOrderSubmittedDate : 'WORKORDER',
    WorkOrderDescription : 'WORKORDER',
    WorkOrderStartDate : 'WORKORDER',
    WorkOrderDueDate : 'WORKORDER',
    WorkOrderClosedDate : 'WORKORDER',
    WorkOrderNotes : 'WORKORDER', 
    GrantID_WORKORDER : 'WORKORDER',
    ProjectName : 'WORKORDER', 
    AssigneeID : 'ASSIGNEE',
    EmployeeID_ASSIGNEE : 'ASSIGNEE',
    WorkOrderID_ASSIGNEE : 'ASSIGNEE',
    TimeSheetID : 'TIMESHEET',
    WorkOrderID_TIMESHEET : 'TIMESHEET',
    EmployeeID_TIMESHEET : 'TIMESHEET',
    EntryTypeID_TIMESHEET : 'TIMESHEET',
    BillingTypeID_TIMESHEET : 'TIMESHEET',
    TimeTypeID_TIMESHEET : 'TIMESHEET',
    ServiceTypeID_TIMESHEET : 'TIMESHEET',
    IPOID_TIMESHEET : 'TIMESHEET',
    TimeSheetDate : 'TIMESHEET',
    TimeWorkedHours : 'TIMESHEET',
    WorkPerformed : 'TIMESHEET',
    WorkOrderContactID : 'WORKORDERCONTACT',
    ContactID_WORKORDERCONTACT : 'WORKORDERCONTACT',
    WorkOrderID_WORKORDERCONTACT : 'WORKORDERCONTACT',
    WorkOrderGrantID : 'WORKORDERGRANT',
    WorkOrderID_WORKORDERGRANT : 'WORKORDERGRANT',
    GrantID_WORKORDERGRANT : 'WORKORDERGRANT'
};

const tableToAttributes = {
    JOBTITLE : ['JobTitleID','JobTitle'],
    EMPLOYEETYPE : ['EmployeeTypeID', 'EmployeeType'],
    COMPANY : ['CompanyID','CompanyName'],
    SERVICETYPE : ['ServiceTypeID','ServiceType','ServiceDescription'],
    ENTRYTYPE : ['EntryTypeID', 'EntryType', 'Billable'],
    TIMETYPE : ['TimeTypeID', 'TimeType', 'Category'],
    BILLINGTYPE : ['BillingTypeID', 'BillingType'],
    WORKORDERSTATUS : ['StatusID','StatusType'],
    WORKORDERPRIORITY : ['PriorityID', 'PriorityType'],
    CONTACT : ['ContactID','ContactFirstName','ContactLastName','ContactEmail','ContactPhone'],
    SERVICERATE : ['ServiceRateID','RateStartDate','RateEndDate','FiscalYear','ServiceRate'],
    IPOSTATUS : ['IPOStatusID', 'IPOStatus'],
    // DEPARTMENT : ['DepartmentID', 'DepartmentName','CompanyID_DEPARTMENT'],
    DEPARTMENT : ['DepartmentID', 'DepartmentName'],
    // CUSTOMER : ['CustomerID','CustFirstName','CustLastName','CustEmail','CustPhone','CustAddress','CustCity','CustState','CustZip','DepartmentID_CUSTOMER'],
    CUSTOMER : ['CustomerID','CustFirstName','CustLastName','CustEmail','CustPhone','CustAddress','CustCity','CustState','CustZip'],
    // EMPLOYEE : ['EmployeeID','EmpFirstName','EmpLastName','EmpEmail','EmpPhone','EmpAddress','EmpCity','EmpState','EmpZipCode','DepartmentID_EMPLOYEE','JobTitleID_EMPLOYEE','EmployeeTypeID_EMPLOYEE'],
    EMPLOYEE : ['EmployeeID','EmpFirstName','EmpLastName','EmpEmail','EmpPhone','EmpAddress','EmpCity','EmpState','EmpZipCode'],
    // IPO : ['IPOID','IPODate','IPOCreationDate','IPOPaymentDate','IPOStatusID_IPO'],
    IPO : ['IPOID','IPODate','IPOCreationDate','IPOPaymentDate'],
    // IPORATE : ['IPORateID', 'ServiceRateID_IPORATE','IPOID_IPORATE'],
    IPORATE : ['IPORateID'],
    TBL_GRANT : ['GrantID', 'GrantName', 'Budget'],
    // WORKORDER : ['WorkOrderID', 'WorkOrderSubmittedDate','WorkOrderDescription','WorkOrderStartDate','WorkOrderDueDate','WorkOrderClosedDate','WorkOrderNotes','ProjectName','EmployeeID_WORKORDER','CustomerID_WORKORDER','PriorityID_WORKORDER','StatusID_WORKORDER','GrantID_WORKORDER'],
    WORKORDER : ['WorkOrderID', 'WorkOrderSubmittedDate','WorkOrderDescription','WorkOrderStartDate','WorkOrderDueDate','WorkOrderClosedDate','WorkOrderNotes','ProjectName'],
    // ASSIGNEE : ['AssigneeID','EmployeeID_ASSIGNEE','WorkOrderID_ASSIGNEE'],
    ASSIGNEE : ['AssigneeID'],
    // TIMESHEET: ['TimeSheetID','TimeSheetDate','TimeWorkedHours','WorkPerformed','WorkOrderID_TIMESHEET','EmployeeID_TIMESHEET','EntryTypeID_TIMESHEET','BillingTypeID_TIMESHEET','TimeTypeID_TIMESHEET','ServiceTypeID_TIMESHEET','IPOID_TIMESHEET'],
    TIMESHEET: ['TimeSheetID','TimeSheetDate','TimeWorkedHours','WorkPerformed'],
    // WORKORDERCONTACT : ['WorkOrderContactID', 'ContactID_WORKORDERCONTACT', 'WorkOrderID_WORKORDERCONTACT'],
    WORKORDERCONTACT : ['WorkOrderContactID'],
    // WORKORDERGRANT : ['WorkOrderGrantID','WorkOrderID_WORKORDERGRANT','GrantID_WORKORDERGRANT']
    WORKORDERGRANT : ['WorkOrderGrantID']
}


//EXCLUDED COMPANY BECAUSE OF SECOND-LEVEL JOINS
const categoryToRelatedTables = {
    "CUSTOMER" : ['CUSTOMER','DEPARTMENT'],
    "EMPLOYEE" : ['EMPLOYEE','JOBTITLE','EMPLOYEETYPE','DEPARTMENT'],
    "IPO" : ['IPO','IPOSTATUS'],
    "IPORATE" : ['IPORATE','SERVICERATE','IPO'],
    "TIMESHEET" : ['TIMESHEET','EMPLOYEE','WORKORDER','SERVICETYPE','ENTRYTYPE','TIMETYPE','BILLINGTYPE'],
    "WORKORDER": ['WORKORDER','WORKORDERSTATUS','WORKORDERPRIORITY'],
    "ASSIGNEE": ['ASSIGNEE','EMPLOYEE','WORKORDER'],
    "WORKORDERCONTACT" : ['WORKORDERCONTACT','WORKORDER','CONTACT'],
    "WORKORDERGRANT": ['WORKORDERGRANT','WORKORDER','TBL_GRANT']
}



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
const tableSelection = document.getElementById('table-selection');




let attributes;
let tables;
let selectStatement;
let joinsTxt;
let whereTxt;
let sqlQuery;
let startingTable = 'EMPLOYEE';
let columns = [];
let sqlData = {};
let startingSlice = 0;
let currentPage = 1;
let startPage = 1;
let totalPages = 0;


let whereHTML = selector.innerHTML;
submitBtn.addEventListener('click', buildQuery);


async function buildQuery(event) {
    event.preventDefault(); 
    clearAll();

    attributes = getCheckedAttributes(); //gets all values of checked boxes
    populateSortOptions(); //should be generated as elements are selected, not how it is currently
    tables = getCheckedClasses(); //all tables involved (className)

    console.log(tableSelection.value);
    //Gathers information
    if (tableSelection.value)
        startingTable = tableSelection.value;
    else
        console.log("No table selected");
        // return;


    //Builds Query
    selectStatement = buildSelect(attributes); //starting table and all values of checked boxes
    joinTxt = buildJoins(tables);
    whereTxt = buildWhere();
    orderTxt = buildOrderBy();
    sqlQuery = selectStatement + `FROM ${startingTable}\n ` + joinTxt + whereTxt + orderTxt;
    sqlCode.textContent = sqlQuery;
    
    //Sends Query and returns Results
    try {
        sqlData = await getResults(sqlQuery);
        renderResults(sqlData, 1);
    } catch {
        alert("Query is invalid");
    }
};


//sends query to database
async function getResults(code) {
    document.body.style.cursor = "wait";
    const response = await fetch("/", {
        method: 'POST',
        headers: {
        'Content-Type': 'text/plain'
        },
        body: code,})
    const data = await response.json()
    document.body.style.cursor = null;
    return data
};



function renderResults(data, page) {

    results.innerHTML = "";

    let limit = 25;
    startingSlice = (limit * page) - limit
    let count = startingSlice + 1;

    totalPages = Math.ceil(data.recordset.length / limit);

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

    // currentPage = (currentPage === 0) ? "1" : currentPage
    pageSummary.innerHTML = `Page ${currentPage} of ${totalPages}`
    paginate(totalPages)
}


function paginate(totalPages) {
    pagination.innerHTML = "";
    const maxPages = 10;
    let countPages = 0;

    const prevContainer = document.createElement('li');
    const prevBtn = document.createElement('button');
    const nextContainer = document.createElement('li');
    const nextBtn = document.createElement('button');

    prevBtn.setAttribute("type","button");
    prevBtn.textContent = "«"
    prevBtn.addEventListener('click', ()=> {
        startPage -= 10;
        currentPage = startPage;
        renderResults(sqlData, startPage);
    })

    prevContainer.appendChild(prevBtn)
    pagination.appendChild(prevContainer);

    //turns totalPages into an iterable array //could slice the array here rather than iterate through entire
    for (page of Array(totalPages).keys()) {
        page += startPage;
        if (countPages < maxPages && page <= totalPages) {

            const pageContainer = document.createElement('li');
            const pageBtn = document.createElement('button');

            pageBtn.setAttribute("type","button");
            pageBtn.setAttribute("value",page);
            pageBtn.textContent = `${page}`
            pageBtn.addEventListener('click', ()=> {
                currentPage = parseInt(pageBtn.value);
                renderResults(sqlData, pageBtn.value);
            }) 
        

            pageContainer.appendChild(pageBtn)
            pagination.appendChild(pageContainer);

            if ((page) === currentPage) {
                pageBtn.setAttribute("aria-current","page");
            }
        } else {
            if (page > totalPages) {
                nextBtn.disabled = true;
                nextBtn.style.cursor = "not-allowed";
            }
            break;
        }
        countPages ++;
    }

    nextBtn.setAttribute("type","button");
    nextBtn.textContent = "»"
    nextBtn.addEventListener('click', ()=> {

        startPage += 10;
        currentPage = startPage;
        renderResults(sqlData, startPage);
    })

    nextContainer.appendChild(nextBtn)
    pagination.appendChild(nextContainer);

    if (startPage === 1) {
        prevBtn.disabled = true;
        prevBtn.style.cursor = "not-allowed";
    }

}



function clearAll() {
    joinsTxt = "";
    whereTxt = "";
    sqlQuery = "";
    results.innerHTML = "";
    sortCriteria.innerHTML = "";
}


//gets ATTRIBUTES
function getCheckedAttributes(){
    const checks = timesheetForm.querySelectorAll('input[type="checkbox"]');
    let checked = [];
    for(let i = 0; i < checks.length; i++){
        if(checks[i].checked)
            checked.push(checks[i].value)
    }
    return checked;
}


//gets classes of checked boxes, excludes duplicates (TABLES)
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
function buildSelect(attributes) {
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

// function buildFrom() {
//     categoryArr = document.getElementById('selector').getElementsByTagName('select');
//     inputArr = document.getElementsByClassName('where');
//     if (inputArr[0].value != "") {
//         whereTxt = "WHERE " 
//         for(let i = 0; i < optionArr.length; i++) {
//             if (i === optionArr.length - 1)
//                 whereTxt += `${optionArr[i].value} = '${inputArr[i].value}'\n`
//             else
//                 whereTxt += `${optionArr[i].value} = '${inputArr[i].value}' AND\n` 
//         }
//     }
//     else {
//         whereTxt = ""
//     }
//     return whereTxt;
// }


function buildJoins(checkedClasses) {
    for (const table of checkedClasses) {
        console.log(table);
        if (table != startingTable) {
            joinsTxt += 
            `LEFT OUTER JOIN ${table}
            ON ${primaryKeys[table]} = ${primaryKeys[table]}_${startingTable}
            ` //FIX
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
    console.log(sortCriteria.value);
    if (sortCriteria.value)
        orderTxt += `ORDER BY ${sortCriteria.value} ${sortOptions.value}`
    return orderTxt
}




function addInputField() {

    whereHTML += `
        <div class="where-condition">
                <select>
                    <option value="EmpFirstName">EmpFirstName</option>
                    <option value="EmpLastName">EmpLastName</option>
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


function createTableCategories() {

    let categoriesHTML = "";


   for (let table of Object.keys(categoryToRelatedTables)) {
        categoriesHTML += `
        <option value="${table}">${table}</option>
        `
    }


    // for (let table of Object.keys(primaryKeys)) {
    //     categoriesHTML += `
    //     <option value="${table}">${table}</option>
    //     `
    // }
    tableSelection.innerHTML += categoriesHTML;
    tableSelection.addEventListener('change', function() {
        tableForm.innerHTML = "";
        createCheckboxes();
     });
}

createTableCategories();


// function createCheckboxes() {
//     let checkboxHTML = ""
//     for (let attribute in dbAttributes) {
//         checkboxHTML += `
//         <input
//             type="checkbox"
//             id="${attribute}"
//             name="${attribute}"
//             value="${attribute}"
//             class="${dbAttributes[attribute]}" />
//         <label for="${attribute}">${attribute}</label>
//         `
//     }
//     tableForm.innerHTML += checkboxHTML;
// }

// createCheckboxes();



function createCheckboxes() {
    let checkboxHTML = ""


    for (table of categoryToRelatedTables[tableSelection.value]) {
        for (attribute of tableToAttributes[table]) {
            checkboxHTML += `
            <input
                type="checkbox"
                id="${attribute}"
                name="${attribute}"
                value="${attribute}"
                class="${dbAttributes[attribute]}" 
                checked />
            <label for="${attribute}">${attribute}</label>
            `
        }
    }


    //get selected category/table
    //iterate through array value on this key

    // for (let attribute in dbAttributes) {
    //     checkboxHTML += `
    //     <input
    //         type="checkbox"
    //         id="${attribute}"
    //         name="${attribute}"
    //         value="${attribute}"
    //         class="${dbAttributes[attribute]}" />
    //     <label for="${attribute}">${attribute}</label>
    //     `
    // }
    tableForm.innerHTML += checkboxHTML;
}








function populateSortOptions() {
    if (attributes) {
        for (item of attributes) {
            sortCriteria.innerHTML = `
            <option value="${item}">${item}</option>
            `
        }
    };
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

getKeyByValue()