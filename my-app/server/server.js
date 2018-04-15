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



// app.get('/',function(req,res){
// 	res.send("server running")
// });


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
	 //console.log(placeName)
	//var photos=req.body.photos;
	var user=req.body.user;

// call the fetchPlaces helper function

	google.fetchPlaces(placeName,function(data){
		//console.log(data)
		//if(err){console.log("error")}

		Interest.save(placeName,data);
		res.send(data);

	})


})

	// var place = new Interest({name:placeName,photos:photos,user:user});
	// place.save(function(err,place){
	// 	if (err) {
	// 		return console.error(err);
	// 	}

	// 	else{

	// 		res.send()
	// 	}
	// })
	




app.listen(process.env.PORT||8000);


module.exports={
	app:app
	//db:db
}



