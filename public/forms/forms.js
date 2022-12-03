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
                        <label>Address: <input type="text" name="CustAddress" size="90" placeholder="Enter work Address"></label>
                    </div>
                    <div>
                        <label>City: <input type="text" name="CustCity" size="25" placeholder="City"></label>
                        <label>State: <input type="text" name="CustState" size="25" placeholder="State"></label>
                        <label>Zip Code: <input type="text" name="EmpZipCode" size="25" placeholder="Zip Code"></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    DEPARTMENT : `
                <h2>Add/Update Department Form</h2>
                <form>
                        <label>Company Name: <input type="text" name="CompanyName" size="50" placeholder="Drop down to select Company"></label>
                        <label>Department Name: <input type="text" name="DepartmentName" size="50" placeholder="Enter the Department Name"></label>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    EMPLOYEE : `
                <h2>Add/Update Employee Form</h2>
                <form>
                    <div>
                        <label>First Name: <input name="EmpFirstName" type="text" placeholder="Enter First Name" size="25" required></label>
                        <label>Last Name: <input name="EmpLastName" type="text" placeholder="Enter Last Name" size="25" required></label>
                        <label>Department: <input name="DepartmentName" type="text" size="25" placeholder="Select Department"></label>
                    </div>
                    <div>
                        <label>Email: <input type="email" name="EmpEmail" size="25" placeholder="Email Address" required></label>
                        <label>Job Title: <input type="text" name="JobTitle" size="25" placeholder="Enter Employee Title"></label>
                        <label>Phone: <input type="tel" name="EmpPhone" size="25" placeholder="Enter work phone #"></label>
                    </div>
                    <div>
                        <label>Address: <input type="text" name="EmpAddress" size="88" placeholder="Enter work Address"></label>
                    </div>
                    <div>
                        <label>City: <input type="text" name="EmpCity" size="25" placeholder="City"></label>
                        <label>State: <input type="text" name="EmpState" size="25" placeholder="State"></label>
                        <label>Zip Code: <input type="text" name="EmpZipCode" size="25" placeholder="Zip Code"></label>
                    </div>
                    <div>
                        <label>Employee Type: <input type="text" name="EmployeeType" size="25" placeholder="Select Employment Type" required></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    EMPLOYEETYPE : `
                <h2>Employee Type Entry Form</h2>
                <form>
                    <div>
                        <label>Employee Type: <input name="EmployeeType" type="text" size="40" placeholder="Enter a new Employment Type (i.e. Full Time, Part Time, etc.)"></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    ENTRYTYPE : `
                <h2>Entry Type Form</h2>
                <form>
              
                    <label>Time Entry Type: <input name="EntryType" type="text" placeholder="Enter Time Entry Type" size="50" required></label>
                    <label>Billable? <input name="Billable" type="text" placeholder="Enter Yes or No" size="50" required></label>

                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    TBL_GRANT : `
                <h2>Add/Update Grant Form</h2>
                <form>
                    <label>Grant Name: <input name="GrantName" type="text" placeholder="Enter Grant Name" size="50" required></label>
                    <label>Budget Amount: <input name="Budget" type="number" placeholder="Enter Budget Amount" size="20" required></label>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    IPO : `    
                <h2>Add/Update IPO Form</h2>
                <form>
                    <div>
                        <label>IPO Date: <input name="IPODate" type="date" size="25" required></label>
                        <label>IPO Creation Date: <input name="IPOCreationDate" type="date" size="25" required></label>
                        <label>IPO Status: <input name="IPOStatus" type="text" size="25" placeholder="Drop down list from IPO Status"></label>
                        <label>IPO Payment Date: <input name="IPOPaymentDate" type="date" size="25" required></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    IPORATE : `
                <h2>Add/Update Service Rates</h2>
                <form>
                    <div>
                        <label>Start Date: <input name="RateStartDate" type="date" size="25" required></label>
                        <label>End Date: <input name="RateEndDate" type="date" size="25" required></label>
                        <label>Fiscal Year: <input name="FiscalYear" type="number" maxlength="4" size="25"></label>
                        <label>Service Rate: <input name="ServiceRate" type="number"></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    JOBTITLE : `
                <h2>Job Title Entry Form</h2>
                <form>
                    <div>
                        <label>Job Title: <input name="JobTitle" type="text" size="70" placeholder="Enter a new Job Title"></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    IPOSTATUS : `
                <h2>IPO Status Form</h2>
                <form>
                    <div>
                        <label>IPO Status: <input name="IPOStatus" type="text" placeholder="Enter IPO Status" size="50" required></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    SERVICERATE : `    
                <h2>Add/Update Service Rates</h2>
                <form>
                    <div>
                        <label>Start Date: <input name="RateStartDate" type="date" size="25" required></label>
                        <label>End Date: <input name="RateEndDate" type="date" size="25" required></label>
                        <label>Fiscal Year: <input name="FiscalYear" type="number" maxlength="4" size="25"></label>
                        <label>Service Rate: <input name="ServiceRate" type="number"></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    SERVICETYPE : `
                <h2>Add/Update Employee Form</h2>
                <form>
           
                    <label>Service Type: <input name="ServiceType" type="text" placeholder="Enter Service Type Here" size="50"></label>
                    
                    <label class="text-area-label">Service Description: </label>
                    <textarea name="ServiceDescription" rows="5" placeholder="Enter Service Description (i.e. Type: Books - Description: Publication and Design) "></textarea>
                    
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    TIMESHEET : `
                <h2>Add/Update TimeSheet Form</h2>
                <form>
                    <div>
                        <label>Employee: <input name="EmpFullName" type="text" placeholder="Drop Down List to pick Employee that is Entering Time" size="25" required></label> <!--May need to create a FullName that will pull the EmployeeID??-->
                        <label>Work Order: <input name="ProjectName" type="text" placeholder="Drop Down List to pick Project" size="25" required></label>
                    </div>
                    <div>
                        <label>Billing Type: <input name="BillingType" type="text" placeholder="Drop Down List to pick Billing Type" size="25" required></label>
                        <label>Service Type: <input name="ServiceType" type="text" placeholder="Drop Down List to pick Service Type" size="25" required></label>
                    </div>
                    <div>
                        <label>Time Type: <input name="TimeType" type="text" placeholder="Drop Down List to pick Time Type" size="25" required></label>
                        <label>Time Worked: <input name="TimeWorkedHours" type="number" min=".25" max="20" step=".25" placeholder="Enter Hours in 1/4 hour increments" size="40" required></label>
                    </div>

                    <label>Time Sheet Date: <input name="TimeSheetDate" type="date" required></label>
                 
                    <label>Work Performed: </label>
                    <textarea name="WorkPerformed" rows="5" placeholder="Enter a Description of the work performed"></textarea>
                
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    TIMETYPE : `
                <h2>Add/Update Time Type Form</h2>
                <form>
                    <div>
                        <label>Time Type: <input name="TimeType" type="text" placeholder="Enter Time Type" size="25" required></label>
                        <label>Category: <input name="Category" type="text" placeholder="Enter a category" size="25" required></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    WORKORDER : `
                <h2>Add/Update Work Order Form</h2>
                <form>
                    <div>
                        <label>Project Name: <input name="ProjectName" type="text" size="100" placeholder="Enter the Project Name Here" required></label>
                    </div>
                    <div>
                        <label>Submitted Date: <input name="WorkOrderSubmittedDate" type="date" required></label>
                        <label>Start Date: <input name="WorkOrderStartDate" type="date" required></label>
                        <label>Due Date: <input name="WorkOrderDueDate" type="date" required></label>
                        <label>Closed Date: <input name="WorkOrderClosedDate" type="date" required></label>
                    </div>
                    <div>
                        <label>Grant Name: <input name="GrantName" type="text" size="71" placeholder="Drop down to select Grant Name" required></label>
                        <label>Budget Amount: <input name="Budget" type="number" placeholder="Should autofill $ from TBL_Grant"></label>
                    </div>
                    <div>
                        
                        <label>Assignee(s): <input name="Assignee" type="text" placeholder="Drop down multiselect list of Employees???" size="25"></label>
                        <label>Status Type: <input name="StatusType" type="text" placeholder="Drop down list for Status" size="25"></label>
                        <label>Priority Type: <input name="PriorityType" type="text" placeholder="Drop down list for Priority" size="25"></label>
                    </div>
                    <div>
                        <label>Contact: <input name="WorkOrderContact" type="text" placeholder="Drop down multiselect list of Contacts???" size="100"></label>
                    </div>
               
                        <label class="text-area-label">Work Order Description:</label>
                        <textarea name="WorkOrderDescription" rows="3" cols="100"></textarea>
 
                        <label class="text-area-label">Work Order Notes:</label>
                        <textarea name="WorkOrderNotes" rows="7" cols="100"></textarea>

                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    // WORKORDERGRANT : 'WorkOrderGrantID',
    WORKORDERPRIORITY : `    
                <h2>Add/Update Work Order Priority</h2>
                <form>
                    <div>
                        <label>Priority Type: <input name="PriorityType" type="text" placeholder="Enter a priority type" size="50" required></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
    WORKORDERSTATUS : `
                <h2>Work Order Status Form</h2>
                <form>
                    <div>
                        <label>Work Order Status: <input type="text" name="StatusType" size="50" placeholder="Enter Work Order Status"></label>
                    </div>
                    <div class="form-btns">
                        <button type="submit">Add Record</button>
                        <button type="reset">Reset Form</button>
                    </div>
                </form>`,
};


const formContainer = document.querySelector('.form-container');
const prev = document.getElementById('carousel-prev');
const next = document.getElementById('carousel-next');

console.log(prev);
console.log(next);


next.addEventListener('click', nextCarousel);
prev.addEventListener('click', prevCarousel);



const formsLength = Object.keys(forms).length
let currentIndex = 17;

const statusMessages = formContainer.innerHTML



// //should be initialized to whatever the person clicks in the drop-down menu
formContainer.innerHTML = Object.values(forms)[currentIndex] + statusMessages;


function buildCarousel(dictionary, index) {
    formContainer.innerHTML = Object.values(forms)[index] + statusMessages;
}

function nextCarousel() {
    console.log("next");
    if (currentIndex < formsLength - 1) {
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
    if (currentIndex > 0) {
        console.log("if prev");
        currentIndex--;
    } else {
        console.log("else prev");
        currentIndex = formsLength - 1;
    }
    console.log(currentIndex);
    buildCarousel(forms, currentIndex);
}



//need to know the last id in a given table







