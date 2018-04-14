var db=require('./server.js').db;
var app=require('./server.js').app;
var Interest=require('../database/models/interest.js');

var bodyParser=require('body-parser');
app.use(bodyParser.json());



// retreive all records if the client send GET request from the root
app.get('/',function(req,res){

	Interest.getInterests(function(error,interests){
		if (err){
			throw new Error(err);
		}
		console.log(interests)
		res.send(interests);
	})

})


// add a new record to the database associated with POST request 
app.post('/api/interests',function(req,res){

})