var express=require('express');

var mongoose=require('mongoose');

var app=express();

var Interest=require('../database/models/interests.js');

var googlePlaces=require('../helpers/google-api.js');
var bodyParser=require('body-parser');
app.use(bodyParser.json());



//to be updates

app.use(express.static('./build'))

//app.use(express.static(__dirname + '/../client/dist')); 

mongoose.connect('mongodb://localhost/placesdb');

var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// app.get('/',function(req,res){
// 	res.send("server running")
// });


app.get('/',function(req,res){

	Interest.getInterests(function(err,interests){
		if (err){
			throw new Error(err);
		}
		//console.log(interests)
		res.send(interests);
	})

})


app.post('/api/places',function(req,res){
	var placeName=req.body.name;
	//var photos=req.body.photos;
	var user=req.body.user;

// call the fetchPlaces helper function



	var place = new Interest({name:placeName,photos:photos,user:user});
	place.save(function(err,place){
		if (err) {
			return console.error(err);
		}

		else
			res.send()
	})
	googlePlaces



})

app.listen(process.env.PORT||8000);


module.exports={
	app:app,
	db:db
}



