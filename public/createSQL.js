

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



const tableForm = document.getElementById('checkbox-container');
const submitBtn = document.getElementById('submit-btn');
const sqlCode = document.getElementById('sql-code');
const results = document.getElementById('results');
const pagination = document.getElementById('pagination');
const pageSummary = document.getElementById("page-summary");
const selector = document.getElementById("selector");
const tableSelection = document.getElementById('table-selection');
const whereOptions = document.getElementById('where-options');
const resultsPerPageOptions = document.getElementById('results-per-page');
const sqlBtn = document.getElementById('sql-btn');
const editBtn = document.getElementById('edit-btn');
const editWarning = document.getElementById('edit-warning');
const editYes = document.getElementById('edit-yes');
const editNo = document.getElementById('edit-no');
const editConfirmation = document.getElementById('edit-confirmation');
const changesYes = document.getElementById('changes-yes');
const changesNo = document.getElementById('changes-no');
const blurContainer = document.getElementById('blur-container');
const codeContainer = document.getElementById('code-container');

resultsPerPageOptions.addEventListener('change', function() {

    resultsPerPage = parseInt(resultsPerPageOptions.value);

    // let startingSlice = 0;
    // let currentPage = 1;
    // let startPage = 1;
    // let totalPages = 0;

    renderResults(sqlData, 1);

 });





let attributes;
let tables;
let selectStatement;
let joinsTxt;
let whereTxt;
let orderTxt = "";
let orderDirection = "ASC";
let sqlQuery;
let startingTable = 'CUSTOMER';
let columns = [];
let sqlData = {};
let startingSlice = 0;
let currentPage = 1;
let startPage = 1;
let totalPages = 0;
let resultsPerPage = 50;
let editing = false;
let editingCell = false;
// let lastCell;


let whereHTML = selector.innerHTML;
submitBtn.addEventListener('click', buildQuery);
submitBtn.click();


sqlBtn.addEventListener('click', ()=>{
    if (codeContainer.style.display === "none") {
        codeContainer.style.display = "flex";
    } else {
        codeContainer.style.display = "none";
    }
})
sqlBtn.click();


editBtn.addEventListener('click', editMode)

function editMode() {
    tableData = document.getElementById('table-data');
    // buildQuery(event); //need to fix

    if (editing === false) {

        editWarning.style.display = "flex"
        blurContainer.classList.add("blur");

        editYes.addEventListener('click', ()=>{
            editing = true;
            editWarning.style.display = "none";
            blurContainer.classList.remove("blur");

            const cells = document.querySelectorAll("td");

            editBtn.textContent = "Exit Edit Mode"
            editBtn.style.fontWeight = "500";
            for (let cell of cells) {
                cell.classList.add("edit");
            }

            tableData.addEventListener("click", getCell);
                
        });

        editNo.addEventListener('click', ()=>{
            blurContainer.classList.remove("blur");
            editWarning.style.display = "none";
            editing = false;
        });

    } else {
        editing = false;
        const cells = document.querySelectorAll("td")
        editBtn.textContent = "Enter Edit Mode" 
        editBtn.style.fontWeight = "400";
        for (let cell of cells) {
            cell.classList.remove("edit");
        }

        tableData.removeEventListener("click", getCell);
    }
}

//when a cell is clicked, pull the column name, pull primary key with value
//UPDATE TABLENAME SET COLUMNNAME = "new info" WHERE primary key = primary key value





async function insertData(event) {
    event.preventDefault(); 
    clearAll();



    sqlQuery = "" //row here
    sqlCode.textContent = sqlQuery;
    
    //Sends Query and returns Results
    try {
        sqlData = await getResults(sqlQuery);
        renderResults(sqlData, 1);
    } catch {
        alert("Query is invalid");
    }
};



function transformDataFormat(cell) {


    if (cell.dataset.attribute.includes("Date") && cell.textContent != "" ) {
        let formattedData = new Date(cell.textContent).toISOString().slice(0,10)
        cell.textContent = formattedData;
    }


    // if (data.dataset.attribute.includes("Date")) {
    //     console.log("cell content includes date content")
    //     data = new Date(data.toString()).toISOString().slice(0,10)
    //     console.log(data);
    // }

    // let newData = attribute;
    // if (attribute.includes("Date")) {
    //     newAttribute = `convert(varchar, ${attribute}, 101)  as '${attribute}'`;
    //     const index = attributes.indexOf(attribute);
    //     if (index !== -1) {
    //         attributes[index] = newAttribute;
    //     }
    // }

    // } elif (attribute.includes("phone")) {

    // } elif (attribute.includes("budget")) {

    // }

}


// function refreshGUI() {

// }

// BUILD QUERY FUNCTIONS: //
//FIX: should only apply startingTable to attributes that ARE IN starting table
function buildSelect(attributes) {

    let selectStatement = "SELECT ";

    if (attributes.length === 0)
        selectStatement += " *  ";

    for(let i = 0; i < attributes.length; i++) {

        // TRANSFORMATION SHOULD HAPPEN CLIENT-SIDE NOT SERVER-SIDE
        // if (!editing) { 
        //     console.log("not editing")
        //     transformAttributeFormat(attributes[i]);
        // }
            

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
    optionArr = document.getElementById('where-condition').getElementsByTagName('select');
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



async function buildQuery(event) {
    event.preventDefault(); 
    clearAll();


    attributes = getCheckedAttributes(); //gets all values of checked boxes
    tables = getAttributeClasses(); //all tables involved (className)

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


    if (data.recordset.length === 0) {
        clearAll();
        results.innerHTML = `<div id="empty-results">No Results Found</div>`
        return
    } else {
        results.innerHTML = "";

        startingSlice = (resultsPerPage * page) - resultsPerPage
        let count = startingSlice + 1;

        totalPages = Math.ceil(data.recordset.length / resultsPerPage);

        //creates headers:
        let header = results.createTHead();
        let headerRow = header.insertRow();
        cell = headerRow.insertCell();
        cell.innerHTML = "#";


        for (let cellData in data.recordset[0])
        {
            let cell = headerRow.insertCell();
            cell.innerHTML = cellData;

            cell.addEventListener('click', (e) => {

                orderDirection = orderDirection === "ASC" ? "DESC" : "ASC"

                orderTxt = `ORDER BY ${cellData} ${orderDirection}`
                buildQuery(event);
                e.target.classList.toggle("test");
            })
        }

        //creates body:
        let tbody = results.createTBody()
        tbody.setAttribute('id','table-data');
        

        for (row of data.recordset.slice(startingSlice, startingSlice + resultsPerPage)) {
            let rowCount = 1;
            let rows = tbody.insertRow()

            cell = rows.insertCell();
            cell.innerHTML = count;

            for (cellData in row)
            {
                cell = rows.insertCell();
                cell.dataset.attribute = headerRow.children[rowCount].textContent;
                cell.textContent = row[cellData];



                transformDataFormat(cell);
    

                rowCount++;
            }  
            count++;
        }

        // currentPage = (currentPage === 0) ? "1" : currentPage
        pageSummary.innerHTML = `Page ${currentPage} of ${totalPages}`
        paginate(totalPages)
    }
}

function getCell(e) {
    // if (!lastCell) {
    //     lastCell = e.target.innerHTML;
    // }


    editingCell = true;
    const originalCell = e.target
    const originalContent = e.target.textContent
    console.log(originalContent);


    e.target.innerHTML = `<input type="text" class="edit-result" value=${e.target.textContent}>`
    currentInput = e.target.firstChild;

    if (editingCell) {
        tableData = document.getElementById('table-data');
        tableData.removeEventListener("click", getCell);
        tableData.addEventListener("click", (e) => {

            if (e.target != currentInput) {
                editConfirmation.style.display = "flex"
                changesYes.addEventListener('click', ()=>{
                    editConfirmation.style.display = "none";
                    //run query
                })
                changesNo.addEventListener('click',()=> {
                    editConfirmation.style.display = "none";
                    console.log(originalContent);
                    console.log(currentInput);
                    currentInput.remove();
                    originalCell.textContent = originalContent;
                })
            }
        })
    
    }


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
    // orderTxt = "";
    sqlQuery = "";

    results.innerHTML = "";
    pagination.innerHTML = "";
    pageSummary.innerHTML = "";
}





//gets ATTRIBUTES
function getCheckedAttributes(){
    const checks = tableForm.querySelectorAll('input[type="checkbox"]');
    let checked = [];
    for(let i = 0; i < checks.length; i++){
        if(checks[i].checked)
            checked.push(checks[i].value)
    }
    return checked;
}


//gets classes of checked boxes, excludes duplicates (TABLES)
function getAttributeClasses(){
    const checks = tableForm.querySelectorAll('input[type="checkbox"]');
    let checkedClasses = [];
    for(let i = 0; i < checks.length; i++){
        if(checks[i].checked && !checkedClasses.includes(checks[i].className))
            checkedClasses.push(checks[i].className)
    }
    return checkedClasses;
}


// function populateSortOptions(attributes) {
//     if (attributes) {
//         for (item of attributes) {
//             sortCriteria.innerHTML += `
//             <option value="${item}">${item}</option>
//             `
//         }
//     };
// }




function addInputField() {
    for (table of categoryToRelatedTables[tableSelection.value]) {
        for (attribute of tableToAttributes[table]) {
            whereOptions.innerHTML += `
            <option value="${attribute}">${attribute}</option>
            `
        }
    }
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
        whereOptions.innerHTML = "";
        orderTxt = "";
        createCheckboxes();
        addInputField();
        submitBtn.click();
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



// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }

// getKeyByValue()

