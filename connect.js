var Connection = require('tedious').Connection;
    var config = {
        server: 'agile-alpha.tech',  //updated 2022.12.04
        authentication: {
            type: 'default',
            options: {
                userName: 'SA', //updated 2022.12.04
                password: 'Agile-Alpha-2022'  //updated 2022.12.04
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: false, //updated 2022.12.04
            database: 'Agile-Alpha'  //updated 2022.12.04
        }
    };
    var connection = new Connection(config);
    connection.on('connect', function(err) {
        // If no error, then good to proceed.  
        console.log("Connected");
        executeStatement();
    });

    connection.connect();

    var Request = require('tedious').Request;
    var TYPES = require('tedious').TYPES;

    function executeStatement() {
        request = new Request("SELECT WorkOrderID, EmployeeID_WORKORDER, CustomerID_WORKORDER, PriorityID_WORKORDER, StatusID_WORKORDER, WorkOrderSubmittedDate, WorkOrderDescription, WorkOrderStartDate, WorkOrderDueDate, WorkOrderClosedDate, WorkOrderNotes, ProjectName FROM [Agile-Alpha].dbo.WORKORDER;", function(err) {
        if (err) {
            console.log(err);}
        });
        var result = "";
        request.on('row', function(columns) {
            columns.forEach(function(column) {
              if (column.value === null) {
                console.log('NULL');
              } else {
                result+= column.value + " ";
              }
            });
           console.log(result);
            result ="";
        });

        request.on('done', function(rowCount, more) {
        console.log(rowCount + ' rows returned');
        });

        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);
    }
