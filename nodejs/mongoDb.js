var mongodb = require('mongodb');

var url = "mongodb://localhost:27017/nodejs";

mongodb.connect(url,function(err,db){
	if(err){
		throw err;
	}
	console.log('connect');
	dbo = db.db('nodejs');

	var singleData = {name : 'Sagar',city : 'dighi'};

	dbo.collection('student').insertOne(singleData,function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	});
	
	var multiData = [{ name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'}];

	dbo.collection('student').insertMany(multiData,function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	});
	db.close();
});