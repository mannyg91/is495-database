// 1. What information do you need?
// 2. What are the tables that include this information? (Should be joined)
//     ---pull list of classes where checked

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

/* 
Attributes (the keys) should have the same capitalization as in database,
and tables (the values) should be fully capitalized */
const dbAttributes = {
    JobTitleID : 'JOBTITLE',
    JobTitle : 'JOBTITLE',
    EmployeeTypeID : 'EMPLOYEETYPE',
    EmployeeType : 'EMPLOYEETYPE',
}




const timesheetForm = document.getElementById('timesheet-form');
const tableForm = document.getElementById('timesheet-container');
const sqlCode = document.getElementById('sql-code');


let criteria;
let tables;
let selectLine;
let joinsTxt = "";
let whereTxt = "";
let sqlQuery = "";
let startingTable = "TIMESHEET";
// let whereCount = 0;

const selector = document.getElementById("selector")
let whereHTML = selector.innerHTML;

// const createSQLQuery = document.getElementById('submit');

function submitQuery(event) { 
    event.preventDefault(); 
    clearAll();
    //edit later for cleaner code
    // sqlQuery = "";
    // sqlCode.textContent = "";


    criteria = getChecked(); //gets all values of checked boxes
    tables = getCheckedClasses(); //all tables involved (className)
    selectLine = selected(startingTable, criteria); //starting table and all values of checked boxes
    joinTxt = joins(startingTable, tables);
    whereTxt = generateWhereTxt();
    sqlQuery = selectLine + `FROM ${startingTable}\n ` + joinTxt + whereTxt;
    sqlCode.textContent = sqlQuery;

    // var xhr = new XMLHttpRequest();
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', '/server', true);
    
    // xhr.onload = () => {
    //   // Request finished. Do processing here.
    // };
    
    // xhr.send(null);

    };

timesheetForm.addEventListener('submit', submitQuery);

function clearAll() {
    joinsTxt = "";
    whereTxt = "";
    sqlQuery = "";
}




function getChecked(){
    const checks = timesheetForm.querySelectorAll('input[type="checkbox"]');
    let checked = [];
    for(let i = 0; i < checks.length; i++){
        if(checks[i].checked){
            checked.push(checks[i].value)
        }
    }
    return checked;
}

//gets classes of checked boxes, excludes duplicates
function getCheckedClasses(){
    const checks = timesheetForm.querySelectorAll('input[type="checkbox"]');
    let checkedClasses = [];
    for(let i = 0; i < checks.length; i++){
        if(checks[i].checked && !checkedClasses.includes(checks[i].className)){
            checkedClasses.push(checks[i].className)
        }
    }
    return checkedClasses;
}


//FIX: should only apply startingTable to attributes that ARE IN starting table
function selected(startingTable, criteria) {
    let selectLine = "SELECT ";
    for(let i = 0; i < criteria.length; i++) {
        selectLine += startingTable + "." + criteria[i] + ", ";
    }
    return selectLine.slice(0, -2) + " \n"; //deletes comma from last attribute
}


function joins(startingTable, checkedClasses) {
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

function addInputField() {
    whereHTML += `<div class="where-condition">
    <input type="text" class="where" id="where" name="where"> = </input>
        <select>
            <option value="firstName">FirstName</option>
            <option value="lastName">LastName</option>
            <option value="workOrderID">WorkOrderID</option>
        </select>
        <button type="button" onclick="removeInputField()" class="minus-btn">-</button>
        <button type="button" onclick="addInputField()" class="plus-btn">+</button>
    <br>
</div>`
    selector.innerHTML = whereHTML;
}

function removeInputField() {
    document.getElementById('selector').removeChild(selector.lastElementChild)
}

function generateWhereTxt() {
    optionArr = document.getElementsByTagName('select');
    inputArr = document.getElementsByClassName('where');
    if (inputArr[0].value != "") {
        whereTxt = "WHERE " 
        for(let i = 0; i < optionArr.length; i++) {
            if (i === optionArr.length - 1) {
                whereTxt += `${optionArr[i].value} = '${inputArr[i].value}'\n`
            }
            else {
                whereTxt += `${optionArr[i].value} = '${inputArr[i].value}' AND\n`
            }
        }
        return whereTxt;
    }
    else {
        return ""
    }
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