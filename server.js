const { response } = require('express')
const express = require('express') //imports express module


const app = express() //creates express application
const port = 3000 

let userSQL = "";

//allows files in public to be active?
app.use(express.static('public')) //.use allows middleware to be used globally
app.use(express.urlencoded({extended: false})) //looks at body of post request, and add conveniently named properties to the body object, making it easier to access the values the user submits
app.use(express.json())





//allows body to be intepreted as text
app.use(express.text());



function getDatabase(req, res, next) {
  userQuery = req.body;

  const sql = require("mssql/msnodesqlv8");
  var config= {
      database: 'Agile-Alpha',
      server: 'DESKTOP-7T1COHN\\SQLEXPRESS',
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
              // console.log(recordSet); //LOGS CORRECTLY
              res.status(201).send(recordSet);
          }
      });
  });
  next();
}



//works
app.post('/', getDatabase, (req, res) => {
  // console.log(req.body);
  userSQL = req.body;
});
















// app.get('/', connectSQL, (req, res) => {
//   res.send(`TEST ${req.test} <script>console.log(${JSON.stringify(req.sqlInfo)})</script>`) // returns "TEST undefined" on HTML page and returns "undefined" in browser console
// })


app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/' + '/query-generator.html')
})




//if used a get, the info submitted would be in the URL
app.post("/result", (req, res)=> {
   //req.body.color looks inside body request, must be enabled at top (urlencoded)
   //trim and uppercase trims all the spaces, and removes case sensitivity
  if (req.body.color.trim().toUpperCase() === "BLUE") {
    res.send("Congrats, that's correct")
  } else {
    res.send("incorrect")
  }
  
})



//sets home page
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })


//how to specify specific path names with files in public folder
app.get('/filter', (req, res) => {
    res.sendFile(__dirname + '/public/' + '/query-generator.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






