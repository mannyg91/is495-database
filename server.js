const { response } = require('express')
const express = require('express') //imports express module

const app = express() //creates express application
const port = 3000 


//allows files in public to be active?
app.use(express.static('public')) //.use allows middleware to be used globally
app.use(express.urlencoded({extended: false})) //looks at body of post request, and add conveniently named properties to the body object, making it easier to access the values the user submits
app.use(express.json())



//allows body to be intepreted as text
app.use(express.text());



//middleware, sets up database connection. Takes request body with userQuery, runs query on database, if successful, returns recordSet
function getDatabase(req, res, next) {
  let userQuery = req.body;

  const sql = require("mssql/msnodesqlv8");
  var config= {
      database: 'Agile-Alpha',
      server: 'LAPTOP-21LA9DSD\\SQLEXPRESS',
      driver: 'msnodesqlv8',

      options:{
          trustedConnection:true
      }
  };
  sql.connect(config,function(err){
      if(err){
          console.log(err);
      }
      var request = new sql.Request();
      request.query(userQuery,function(err,recordSet) {
          console.log(userQuery)
          if(err){
              console.log(err);
              next(err)
          } else {
              res.status(201).send(recordSet); //sends records as a response
          }
      });
  });
  next();
}



//when a post request is done at ('/') getDatabase middleware is run, 
app.post('/', getDatabase, (req, res) => {
});




app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/' + '/query-generator.html')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// app.get('/forms.html', (req,res) => {
//   res.sendFile(__dirname + '/public/' + '/forms.html')

// })



