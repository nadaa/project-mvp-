const request=require('request');
const config = require('./config.js');



module.exports.fetchPlaces=function(interest,callback){
	let options = {
    url:`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${interest}+point+of+interest&language=en&key=${config.KEY}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `key ${config.TOKEN}`
    }
}

request(options.url,function(req,res,body){
	let data=JSON.parse(body);


	callback(data);
} )
}




