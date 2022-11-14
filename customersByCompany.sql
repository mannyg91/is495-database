SELECT LastName, FirstName, EmailAddress, FORMAT(CAST(PhoneNumber AS NUMERIC),'(000) 000-0000'), CompanyName FROM CUSTOMER INNER JOIN DEPARTMENT ON CUSTOMER.DepartmentID = DEPARTMENT.DepartmentID INNER JOIN COMPANY ON DEPARTMENT.CompanyID = COMPANY.CompanyID ORDER BY COMPANY.CompanyID 