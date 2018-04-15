var mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/placesdb');

var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("opened db")
  // we're connected!
});

var interestSchema=mongoose.Schema({

// interest:{
// 	type:String
// },
placeName:{
	type:String
}
// photos:{
// 	type:[String]
// },

// user:{
// 	type:String
// }

})

var Interest=module.exports=mongoose.model('Interest',interestSchema);

module.exports.getInterests=function(callback,limit){
	Interest.find(callback).limit(limit);
}


module.exports.save=function(data){
	console.log(data)
	for(var i=0;i<data.results.length;i++){
		//console.log({placeName:data.results[i].name)
		var interest=new Interest({placeName:data.results[i].name,photos:data.results[i].photos});
		interest.save(function(err,interest){
			if(err) console.log("error occured");
			else console.log("data saved");
		})
	}
	
	
}
