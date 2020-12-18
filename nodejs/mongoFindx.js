var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/nodejs';

mongodb.connect(url,function(err,dataBase){
	if(err){
		throw err;
	}
	console.log('connect');

	var databaseobj = dataBase.db('nodejs');

	var query = {name : 'Sagar'};

	databaseobj.collection('student').find(query).limit(2).toArray(function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
		dataBase.close();
	});
});