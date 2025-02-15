
import { tables, dbAttributes, categoryToRelatedTables } from "./data.js";


let presetQueries = {
    "Summarized Time" : 'SELECT Timesheet, SUM(TimeWorkedHours) AS "Hours Worked" FROM TIMESHEET LEFT OUTER JOIN WORKORDER ON WorkorderID = WorkOrderID_TIMESHEET GROUP BY TimeSheetID',
    "Grant Status": 'SELECT GrantID_WORKORDER, ProjectName, GrantName, Budget, StatusID_WORKORDER, FROM WORKORDER LEFT OUTER JOIN WORKORDER On StatusID_WORKORDER = StatusID LEFT OUTER JOIN WORKORDER ON GrantID_WORKORDER = GrantID LEFT OUTER JOIN WORKORDERGRANT ON WorkOrderGrantID = GrantID',
    "Customer Contacts": 'SELECT WorkOrderID, ProjectName, CustFirstName, CustLastName, FROM WORKORDER LEFT OUTER JOIN CUSTOMER ON CustomerID_WORKORDER = WorkOrderID',
    "Unbillable Entries": `SELECT TimeSheetID, WorkOrderID_TIMESHEET as 'WorkOrderID', EmployeeID_TIMESHEET as 'EmployeeID', EmpFirstName, EmpLastName, TimeSheetDate, TimeWorkedHours 'Hours Worked', EntryType, WorkPerformed,
    CASE WHEN Billable = 1 THEN 'Yes' ELSE 'No' END AS Billable,
    BillingType, TimeType, Category, ServiceType, ServiceDescription 
    FROM TIMESHEET
    LEFT OUTER JOIN IPO
    ON IPOID_TIMESHEET = IPO.IPOID
    LEFT OUTER JOIN SERVICETYPE
    ON ServiceTypeID_TIMESHEET = SERVICETYPE.ServiceTypeID
    LEFT OUTER JOIN ENTRYTYPE
    ON EntryTypeID_TIMESHEET = ENTRYTYPE.EntryTypeID
    LEFT OUTER JOIN TIMETYPE
    ON TimeTypeID_TIMESHEET = TIMETYPE.TimeTypeID
    LEFT OUTER JOIN BILLINGTYPE
    ON BillingTypeID_TIMESHEET = BILLINGTYPE.BillingTypeID
    LEFT OUTER JOIN WORKORDER
    ON WorkOrderID_TIMESHEET = WORKORDER.WorkOrderID
    LEFT OUTER JOIN EMPLOYEE
    ON EmployeeID_TIMESHEET = EMPLOYEE.EmployeeID
    WHERE Billable = 0`
}

const tableForm = document.getElementById("checkbox-container");
const submitBtn = document.getElementById("submit-btn");
const sqlCode = document.getElementById("sql-code");
const results = document.getElementById("results");
const pagination = document.getElementById("pagination");
const pageSummary = document.getElementById("page-summary");
const selector = document.getElementById("selector");
const tableSelection = document.getElementById("table-selection");
const savedSelection = document.getElementById('saved-selection');
const whereOptions = document.getElementById("where-options");
const resultsPerPageOptions = document.getElementById("results-per-page");
const sqlBtn = document.getElementById("sql-btn");
const editBtn = document.getElementById("edit-btn");
const saveBtn = document.getElementById("save-btn");
const exportBtn = document.getElementById("export-btn");
const editWarning = document.getElementById("edit-warning");
const editYes = document.getElementById("edit-yes");
const editNo = document.getElementById("edit-no");
const editConfirmation = document.getElementById("edit-confirmation");
const changesYes = document.getElementById("changes-yes");
const changesNo = document.getElementById("changes-no");
const mainContainer = document.getElementById("main-container");
const codeContainer = document.getElementById("code-container");
const initial = document.getElementById("initial");



if (localStorage.getItem("presets"))
    presetQueries = JSON.parse(window.localStorage.getItem("presets"));


saveBtn.addEventListener("click", function() {
    const nameQuery = document.getElementById('name-query');
    const saveName = document.getElementById('save-name'); 
    nameQuery.style.display = "flex";
    document.getElementById('save-confirm').addEventListener('click', ()=> {
        presetQueries[saveName.value] = sqlQuery;
        window.localStorage.setItem("presets", JSON.stringify(presetQueries));
        nameQuery.style.display = "none";
        populatePresets();

    })
    document.getElementById('save-cancel').addEventListener('click', ()=> {
        nameQuery.style.display = "none";
    })

})



resultsPerPageOptions.addEventListener("change", function() {
    resultsPerPage = parseInt(resultsPerPageOptions.value);

    // let startingSlice = 0;
    // let currentPage = 1;
    // let startPage = 1;
    // let totalPages = 0;

    renderResults(sqlData, 1);
 });




//CAN TURN RELATED ATTRIBUTES INTO OBJECTS, AND POSSIBLY USE OBJECT DESTRUCTURING WHEN NEEDED.
//query can be an object
//results can be an object, with paginated related stuff


let selectStatement;
let joinsTxt;
let whereTxt;
let orderTxt = "";
let orderDirection = "ASC";
let sqlQuery;
let startingTable = "CUSTOMER";

let sqlData = {};
let startingSlice = 0;
let currentPage = 1;
let startPage = 1;
let totalPages = 0;
let resultsPerPage = 50;
let editing = false;

let activeCell;
let originalCell;
let originalContent;


submitBtn.addEventListener("click", buildQuery);

sqlBtn.addEventListener("click", ()=>{
    codeContainer.style.display = codeContainer.style.display === "none" ? "flex" : "none";
})
sqlBtn.click();


editBtn.addEventListener("click", editMode);
exportBtn.addEventListener("click", exportCSV);



//can refactor this to simplify
function exportCSV() {
    // const csvData = json2csv.parse(data.slice(startingSlice, startingSlice + resultsPerPage));
    const csvData = json2csv.parse(sqlData.slice(startingSlice, startingSlice + resultsPerPage));

    let filename = `${startingTable}.csv`

    const element = document.createElement("a");
    element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    element.style.display = "none";
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

}





//if not currently editing (editing false)..calls edit mode.. displays edit warning and blurs screen
//--which adds an event listener for the yes or no option
//----if yes.. edit warning is removed, edit class is added to all cells, click listener added to cells that calls getCell()
//----if no.. warning removed, editing set to false

//if currently editing (Editing true)... editing set to false, "enter edit mode" toggled, edit class removed from all cells, clicking cell event listener removed



//can probably put blur outside of if and else

function editMode() {
    const tableData = document.getElementById("table-data");
    // buildQuery(event); //need to fix

    if (editing === false) {

        editWarning.style.display = "flex"
        mainContainer.classList.add("blur");

        editYes.addEventListener("click", ()=>{
            editing = true;
            editWarning.style.display = "none";
            mainContainer.classList.remove("blur");

            const cells = document.querySelectorAll("td");

            editBtn.textContent = "Exit Edit Mode"
            editBtn.style.fontWeight = "500";
            for (let cell of cells) {
                cell.classList.add("edit");
            }

            tableData.addEventListener("click", getCell, { once: true }); //click a cell to turn into text field
                
        }, { once: true });

        editNo.addEventListener("click", ()=>{
            mainContainer.classList.remove("blur");
            editWarning.style.display = "none";
            editing = false;
        }, { once: true });

    } else {
        editing = false;
        const cells = document.querySelectorAll("td")
        editBtn.textContent = "Enter Edit Mode" 
        editBtn.style.fontWeight = "400";
        for (let cell of cells) {
            cell.classList.remove("edit");
        }
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
    //     newAttribute = `convert(varchar, ${attribute}, 101)  as "${attribute}"`;
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
    selectStatement += attributes.length === 0 ? " *  " : attributes.join()


    // // TRANSFORMATION SHOULD HAPPEN CLIENT-SIDE NOT SERVER-SIDE
    // if (!editing) { 
    //     console.log("not editing")
    //     transformAttributeFormat(attributes[i]);
    // }
            
    return selectStatement + " \n"; 
}

// function buildFrom() {
//     categoryArr = document.getElementById("selector").getElementsByTagName("select");
//     inputArr = document.getElementsByClassName("where");
//     if (inputArr[0].value != "") {
//         whereTxt = "WHERE " 
//         for(let i = 0; i < optionArr.length; i++) {
//             if (i === optionArr.length - 1)
//                 whereTxt += `${optionArr[i].value} = "${inputArr[i].value}"\n`
//             else
//                 whereTxt += `${optionArr[i].value} = "${inputArr[i].value}" AND\n` 
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
            ON ${tables[table].primaryKey} = ${tables[table].primaryKey}_${startingTable}
            ` //FIX
        }
    }
    return joinsTxt;
}

function buildWhere() {
    const optionArr = document.getElementById("where-condition").getElementsByTagName("select");
    const inputArr = document.getElementsByClassName("where");
    if (inputArr[0].value != "") {
        whereTxt = "WHERE " 
        for(let i = 0; i < optionArr.length; i++) {
            if (i === optionArr.length - 1) {
                let whereValue = isNaN(inputArr[i].value) ? `'${inputArr[i].value}'` : inputArr[i].value;
                whereTxt += `${optionArr[i].value} = ${whereValue}\n`
            }

            else {
                whereTxt += `${optionArr[i].value} = ${whereValue} AND\n` 
            }

        }
    }
    else {
        whereTxt = ""
    }
    return whereTxt;
}

function populatePresets() {
    savedSelection.innerHTML = "";
    for (let preset of Object.keys(presetQueries)) {
        savedSelection.innerHTML += `
        <option value="${preset}">${preset}</option>
        `
    }
    savedSelection.addEventListener("change", function() {

        currentPage = 1;
        tableForm.innerHTML = "";
        whereOptions.innerHTML = "";
        orderTxt = "";
        // createCheckboxes();
        // addWhereOptions();
        presetQuery();
     });
    
}

populatePresets();




async function presetQuery() {
    clearAll();
    if (savedSelection.value) {
        sqlQuery = presetQueries[savedSelection.value];
        sqlCode.textContent = sqlQuery;
    }
    else
        console.log("No table selected");
    try {
        sqlData = await getResults(sqlQuery);
        renderResults(sqlData, 1);
    } catch {
        alert("Query is invalid");
    }
}

async function buildQuery(event) {
    event.preventDefault(); 
    clearAll();


    //Gathers information
    if (tableSelection.value)
        startingTable = tableSelection.value;
    else
        console.log("No table selected");
        // return;


    //Builds Query
    selectStatement = buildSelect(getCheckedAttributes()); //starting table and all values of checked boxes
    joinsTxt = buildJoins(getAttributeClasses());
    whereTxt = buildWhere();
    sqlQuery = selectStatement + `FROM ${startingTable}\n ` + joinsTxt + whereTxt + orderTxt;
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

    //response is the product of sending request with "code"
    const response = await fetch("/", {
        method: "POST",
        headers: {
        "Content-Type": "text/plain"
        },
        body: code,})
    
    //the data we use will be this response in json
    const data = await response.json()
    document.body.style.cursor = null;
    return data
};


function renderResults(data, page) {
    initial.style.display = "none";

    if (data.length === 0) {
        clearAll();
        results.innerHTML = `<div id="empty-results">No Results Found</div>`
        return
    } else {
        results.innerHTML = "";

        startingSlice = (resultsPerPage * page) - resultsPerPage
        let count = startingSlice + 1;

        totalPages = Math.ceil(data.length / resultsPerPage);

        //creates headers:
        let header = results.createTHead();
        let headerRow = header.insertRow();
        let cell = headerRow.insertCell();
        cell.innerHTML = "#";

        for (let cellData in data[0])
        {
            cell = headerRow.insertCell();
            cell.innerHTML = cellData;

            cell.addEventListener("click", (e) => {

                orderDirection = orderDirection === "ASC" ? "DESC" : "ASC"

                orderTxt = `ORDER BY ${cellData} ${orderDirection}`
                buildQuery(event);
                e.target.classList.toggle("test");
            })
        }

        //creates body:
        let tbody = results.createTBody()
        tbody.setAttribute("id","table-data");
        

        for (const row of data.slice(startingSlice, startingSlice + resultsPerPage)) {
            let rowCount = 1;
            let rows = tbody.insertRow()

            cell = rows.insertCell();
            cell.innerHTML = count;

            for (const cellData in row)
            {
                cell = rows.insertCell();
                cell.dataset.attribute = headerRow.children[rowCount].textContent;
                cell.dataset.table = dbAttributes[cell.dataset.attribute] 

                
                //need to pull the primary key from the attribute (to ensure you have the correct one)
                //how do I get corresponding ID? get ID?

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

function getID(cell) {

    let cellRow = cell.parentElement.children;
    let primaryKeyAttribute = tables[cell.dataset.table].primaryKey;

    for (let item of cellRow) {
        if (item.dataset.attribute === primaryKeyAttribute) {
            return item.textContent
        }  
    }
}




//assumes edit mode is active, getCell only active once at first
//gets content 
//focuses input on the created text box

//gets tableData (idk why this needs to happen again)

//creates event listener for clicking outside of the cell (once)
//creates parameter of original content (may be problematic)
//


function getCell(e) {
    originalCell = e.target  
    originalContent = e.target.textContent

    //turns into text field
    activeCell = e.target;
    activeCell.innerHTML = `<input type="text" value=${e.target.textContent}>`
    currentInput = activeCell.firstChild;
    currentInput.focus();

    tableData = document.getElementById("table-data");

    // tableData.removeEventListener("click", getCell); 

    //creates an event listener for clicking outside the cell
    currentInput.addEventListener("focusout", cellEditConfirmation, { once: true }); //secondary click
    currentInput.originalContentParam = originalContent;
}




function cellEditConfirmation(e) {
    originalContent = e.currentTarget.originalContentParam;
    editConfirmation.style.display = "flex";

    changesYes.addEventListener("click", yesConfirmation , { once: true })
    changesNo.addEventListener("click", noConfirmation, { once: true })


    function yesConfirmation() {
        changesNo.removeEventListener("click", noConfirmation);
        editConfirmation.style.display = "none";

        updateRecord(originalCell, currentInput.value);
        activeCell.innerHTML = currentInput.value;  
        tableData.addEventListener("click", getCell, { once : true});
    }

    function noConfirmation() {
        changesYes.removeEventListener("click", yesConfirmation);
        editConfirmation.style.display = "none";
        currentInput.remove();
        originalCell.textContent = originalContent;
        tableData.addEventListener("click", getCell, { once : true});
    }


}



function updateRecord(cell, newValue) {
    // changesYes.removeEventListener("click", yesConfirmation);
    // changesNo.removeEventListener("click", noConfirmation);

    let primaryKeyID = getID(cell);
    let attribute = cell.dataset.attribute;
    let table = cell.dataset.table;
    let primaryKey = tables[table].primaryKey;

    let updateQuery = `UPDATE ${table} SET ${attribute} = '${newValue}' WHERE ${primaryKey} = '${primaryKeyID}'`;

    //run on database
    try {
        sqlData = getResults(updateQuery);
        // renderResults(sqlData, 1);
    } catch {
        alert("Query is invalid");
    }
}





function paginate(totalPages) {


    pagination.innerHTML = "";
    const maxPages = 10;
    let countPages = 0;

    const prevContainer = document.createElement("li");
    const prevBtn = document.createElement("button");
    const nextContainer = document.createElement("li");
    const nextBtn = document.createElement("button");

    prevBtn.setAttribute("type","button");
    prevBtn.textContent = "«"
    prevBtn.addEventListener("click", ()=> {
        startPage -= 10;
        currentPage = startPage;
        renderResults(sqlData, startPage);
    })

    prevContainer.appendChild(prevBtn)
    pagination.appendChild(prevContainer);

    //turns totalPages into an iterable array //could slice the array here rather than iterate through entire

    //iterates through range of total pages,
    //
    for (let page of Array(totalPages).keys()) {
        page += startPage;
        if (countPages < maxPages && page <= totalPages) {

            const pageContainer = document.createElement("li");
            const pageBtn = document.createElement("button");

            pageBtn.setAttribute("type","button");
            pageBtn.setAttribute("value",page);
            pageBtn.textContent = `${page}`
            pageBtn.addEventListener("click", ()=> {
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
        if (totalPages <= 10) {
            nextBtn.disabled = true;
        }
    }

    nextBtn.setAttribute("type","button");
    nextBtn.textContent = "»"
    nextBtn.addEventListener("click", ()=> {
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

    for(let i = 0; i < checks.length - 1; i++){
        if(checks[i].checked)
            checked.push(checks[i].value)
    }
    return checked;
}


//gets classes of checked boxes, excludes duplicates (TABLES)
function getAttributeClasses(){
    const checks = tableForm.querySelectorAll('input[type="checkbox"]');
    let checkedClasses = [];
    for(let i = 0; i < checks.length - 1; i++){
        if(checks[i].checked && !checkedClasses.includes(checks[i].className))
            checkedClasses.push(checks[i].className)
    }
    return checkedClasses;
}



//runs in the beginning
function addWhereOptions() {

    for (const table of categoryToRelatedTables[tableSelection.value]) {
        whereOptions.innerHTML += tables[table].attributes.map(function(attribute) {
            return `<option value="${attribute}">${attribute}</option>`
        }).join("\r\n")
    }
}


// function removeInputField() {
//     document.getElementById("selector").removeChild(selector.lastElementChild)
// }

// function addInputField() {

// }


function createTableCategories() {

    let categoriesHTML = "";

    categoriesHTML += Object.keys(categoryToRelatedTables).map(table => `<option value="${table}">${table}</option>`).join('');


    tableSelection.innerHTML += categoriesHTML;
    tableSelection.addEventListener("change", function() {
        currentPage = 1;
        tableForm.innerHTML = "";
        whereOptions.innerHTML = "";
        orderTxt = "";
        createCheckboxes();
        addWhereOptions();
        submitBtn.click();
     });
}

createTableCategories();



function createCheckboxes() {
    let checkboxHTML = "";

    for (const table of categoryToRelatedTables[tableSelection.value]) {
        for (const attribute of tables[table].attributes) {
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

    let selectAll = document.createElement("input")
    selectAll.setAttribute("type","checkbox");
    selectAll.setAttribute("id","select-all");
    selectAll.setAttribute("checked",true);
    selectAll.addEventListener('change', selectDeselect);

    let selectAllLabel = document.createElement("Label");
    selectAllLabel.setAttribute("for","select-all");
    selectAllLabel.innerHTML = "Select/Deselect All";
    
    tableForm.innerHTML += checkboxHTML;
    tableForm.appendChild(selectAll);
    tableForm.appendChild(selectAllLabel);
}

function selectDeselect() {
    const selectAll = document.getElementById("select-all");
    let inputs = document.getElementsByTagName('input');
    for( let i= 0; i < inputs.length; i++) {
        if(inputs[i].type.toLowerCase() == 'checkbox')
            inputs[i].checked = selectAll.checked ? true : false;
    }
}



// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }

// getKeyByValue()

