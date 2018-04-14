var mongoose=require('mongoose');

var interestSchema=mongoose.Schema({

placeName:{
	type:String
},
photos:{
	type:[String]
},

user:{
	type:String
}

})

var Interest=module.exports=mongoose.model('Interest',interestSchema);

module.exports.getInterests=function(callback,limit){
	Interest.find(callback).limit(limit);
}


module.exports.save=function(data){
	
	
}