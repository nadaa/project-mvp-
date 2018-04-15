var express=require('express');

var mongoose=require('mongoose');

var app=express();

var Interest=require('../database/models/interests.js');

var google=require('../helpers/google-api.js');

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//to be updates
app.use(express.static('./build'))



app.get('/api/places',function(req,res){

	Interest.getInterests(function(err,interests){
		if (err){
			throw new Error(err);
		}
		console.log(interests)

		res.json(interests);
	})

})


app.post('/api/places',function(req,res){
	var placeName=req.body.place;
	 
	var user=req.body.user;

// call the fetchPlaces helper function

	google.fetchPlaces(placeName,function(data){
		

		Interest.save(placeName,data);
		res.send(data);

	})


})

app.listen(process.env.PORT||8000);


module.exports={
	app:app
	//db:db
}



