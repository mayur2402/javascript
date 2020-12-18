var mongo = require('mongodb');
var url = 'mongodb://localhost:27017/nodejs';

mongo.connect(url,function(error,data){
	if(error){
		throw error;
	}
	console.log('connected');
	var database = data.db('nodejs');
	var query = {name : 1};

	database.collection('student').find().sort(query).toArray(function(error,ascending){
		if(error){
			throw error;
		}
		console.log(ascending);
	});

	var query1 = {name:-1};
	database.collection('student').find().sort(query1).toArray(function(error,descending){
		if(error){
			throw error;
		}
		console.log(descending);
	});
	data.close();
});