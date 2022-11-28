const express = require("express");
const app = express();
const models = require("./models");
models.sequelize.sync().then(function (){
    console.log("> database has been synced");
}).catch(function (err){
    console.log(" > there was an issue synchronizing the database", err);
});
app.get('/', async function (req, res){
    	const customers = await models.customer.findAll();
	res.send("<pre>" + JSON.stringify(customers, undefined, 4) + "</pre>");
});
app.listen(3000,function(){
    console.log("> express server has started");
});
