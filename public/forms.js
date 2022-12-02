const forms = {
    // ASSIGNEE : 'AssigneeID',
    BILLINGTYPE : `
                    <h2>Add Billing Type Form</h2>
                        <form>
                            <label>Billing Type: <input name="BillingType" type="text" placeholder="Enter Billing Type" size="40" required></label>
                            <div class="form-btns">
                                <button type="submit">Add Record</button>
                                <button type="reset">Reset Form</button>
                            </div>
                        </form> 
                    `,
    COMPANY : `
                <h2>Add Company Name Form</h2>
                    <form>
                        <label>Company Name: <input name="CompanyName" type="text" placeholder="Enter Company Name Here" size="100"></label>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                    </form>
                `,
    WORKORDERCONTACT : 'WorkOrderContactID',
    CUSTOMER : 'CustomerID',
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
}

const formContainer = document.querySelector('.form-container');
const next = document.querySelector('.carousel-next');
const prev = document.querySelector('.carousel-prev');

next.addEventListener('click', nextCarousel);
prev.addEventListener('click', prevCarousel);

const formsLength = Object.keys(forms).length
let currentIndex = 0;

const statusMessages = formContainer.innerHTML


//should be initialized to whatever the person clicks in the drop-down menu
formContainer.innerHTML = Object.values(forms)[0] + statusMessages;



function buildCarousel(dictionary, index) {
    formContainer.innerHTML = Object.values(forms)[index] + statusMessages;
}

function nextCarousel() {
    if (currentIndex < formsLength) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    console.log(currentIndex);
    buildCarousel(forms, currentIndex);
}

function prevCarousel() {
    if (currentIndex >= 0) {
        currentIndex--;
    } else {
        currentIndex = formsLength;
    }
    buildCarousel(forms, currentIndex);
}


