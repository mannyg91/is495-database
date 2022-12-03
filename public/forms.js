const forms = {
    // ASSIGNEE : 'AssigneeID',
    BILLINGTYPE : `
                    <h2>Add Billing Type Form</h2>
                    <form>
                        <label>Billing Type: <input name="BillingType" type="text" placeholder="Enter Billing Type" size="35" required></label>
                        <div class="form-btns">
                            <button type="submit">Add Record</button>
                            <button type="reset">Reset Form</button>
                        </div>
                    </form> 
                    `,
    COMPANY : `
                <h2>Add Company Name Form</h2>
                <form>
                    <label>Company Name: <input name="CompanyName" type="text" placeholder="Enter Company Name Here" size="35"></label>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>
                `,
    WORKORDERCONTACT : `    
                <h2>Add/Update Contact Form</h2>
                <form>
                    <label>First Name: <input name="ContactFirstName" type="text" placeholder="Enter First Name" size="30" required></label>
                    <label>Last Name: <input name="ContactLastName" type="text" placeholder="Enter Last Name" size="30" required></label>
                    <label>Email: <input type="email" name="ContactEmail" size="30" placeholder="Email Address" required></label>
                    <label>Phone: <input type="tel" name="ContactPhone" size="30" placeholder="Enter work phone #"></label>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    <div>
                </form>`,
    CUSTOMER : `    
                <h2>Add/Update Customer Form</h2>
                <form>
                    <div>
                        <label>First Name: <input name="CustFirstName" type="text" placeholder="Enter First Name" size="25" required></label>
                        <label>Last Name: <input name="CustLastName" type="text" placeholder="Enter Last Name" size="25" required></label>
                        <label>Department: <input name="DepartmentID" type="text" size="25" placeholder="Drop down to select Department"></label>
                    </div>
                    <div>
                        <label>Company: <input type="text" name="CompanyName" size="25" placeholder="Drop down to select Company" required></label>
                        <label>Email: <input type="email" name="CustEmail" size="25" placeholder="Email Address" required></label>
                        <label>Phone: <input type="tel" name="CustPhone" size="25" placeholder="Enter work phone #"></label>
                    </div>
                    <div>
                        <label>Address: <input type="text" name="CustAddress" size="40" placeholder="Enter work Address"></label>
                    </div>
                    <div>
                        <label>City: <input type="text" name="CustCity" size="25" placeholder="City"></label>
                        <label>State: <input type="text" name="CustState" maxlength="2" size="25" placeholder="State"></label>
                        <label>Zip Code: <input type="text" name="EmpZipCode" maxlength="5" size="25" placeholder="Zip Code"></label>
                    </div>
                    <div class="form-btns">
                    <button type="submit">Add Record</button>
                    <button type="button">Search Records</button>
                    <button type="button">Delete Record</button>
                    <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    DEPARTMENT : 'DepartmentID',
    EMPLOYEE : 'EmployeeID',
    EMPLOYEETYPE : 'EmployeeTypeID',
    ENTRYTYPE : 'EntryTypeID',
    TBL_GRANT : 'GrantID',
    IPO : 'IPOID',
    IPORATE : 'IPORateID',
    JOBTITLE : 'JobTitleID',
    IPOSTATUS : 'IPOStatusID',
    SERVICERATE : 'ServiceRateID',
    SERVICETYPE : 'ServiceTypeID',
    TIMESHEET : 'TimesheetID',
    TIMETYPE : 'TimeTypeID',
    WORKORDER : 'WorkOrderID',
    // WORKORDERGRANT : 'WorkOrderGrantID',
    WORKORDERPRIORITY : 'PriorityID',
    WORKORDERSTATUS : 'StatusID',
};


const formContainer = document.querySelector('.form-container');
const prev = document.getElementById('carousel-prev');
const next = document.getElementById('carousel-next');

console.log(prev);
console.log(next);


next.addEventListener('click', nextCarousel);
prev.addEventListener('click', prevCarousel);



const formsLength = Object.keys(forms).length
let currentIndex = 0;

const statusMessages = formContainer.innerHTML



// //should be initialized to whatever the person clicks in the drop-down menu
formContainer.innerHTML = Object.values(forms)[0] + statusMessages;


function buildCarousel(dictionary, index) {
    formContainer.innerHTML = Object.values(forms)[index] + statusMessages;
}

function nextCarousel() {
    console.log("next");
    if (currentIndex < formsLength) {
        console.log("if");
        currentIndex++;
    } else {
        console.log("else");
        currentIndex = 0;
    }
    console.log(currentIndex);
    buildCarousel(forms, currentIndex);
}

function prevCarousel() {
    console.log("prev");
    if (currentIndex >= 0) {
        console.log("if prev");
        currentIndex--;
    } else {
        console.log("else prev");
        currentIndex = formsLength;
    }
    buildCarousel(forms, currentIndex);
}



//need to know the last id in a given table







