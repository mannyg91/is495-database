// sequelize model:generate --name Grant --attributes WorkOrderGrantID:integer,WorkOrderID:integer,GrantID:integer
// sequelize model:generate --name workorder --attributes WorkOrderID:integer,EmployeeID:integer,CustomerID:integer,PriorityID:integer,StatusID:integer,SubmittedDate:date,WorkOrderDescription:string,StartDate:date,DueDate:date,ClosedDate:date,Notes:string,ProjectName:string
// sequelize model:generate --name employee --attributes EmployeeID:integer,FirstName:string,LastName:string,Email:string,Phone:integer,EmpAddress:string,City:string,EmpState:string,ZipCode:integer,DepartmentID:integer,JobTitleID:integer,EmployeeTypeID:integer
sequelize model:generate --name customer --attributes CustomerID:integer,FirstName:string,LastName:string,EmailAddress:string,PhoneNumber:ingeter,EmpAddress:string,City:string, EmpState:string, ZipCode:integer,DepartmentID:integer

