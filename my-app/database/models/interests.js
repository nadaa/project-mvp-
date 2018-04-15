var mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/placesdb');

var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("success db open")
  
});

var interestSchema=mongoose.Schema({

interest:{
type:String
},
placeName:{
	type:String,
	unique:true
}


})

var interestReceived;

var Interest=module.exports=mongoose.model('Interest',interestSchema);

module.exports.getInterests=function(callback,limit){
	Interest.find(callback).where('interest').equals(interestReceived);
}


module.exports.save=function(intPlace,data){
	interestReceived=intPlace;
	//console.log(data)
	for(var i=0;i<data.results.length;i++){
		//console.log({placeName:data.results[i].name)
		var interest=new Interest({interest:intPlace,placeName:data.results[i].name});
		interest.save(function(err,interest){
			if(err) console.log("error occured");
			else console.log("data saved");
		})
	}
	
	
}
