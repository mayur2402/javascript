var mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/nodejs';

mongodb.connect(url,function(err,db){
	if(err){
		throw err;
	}
	console.log('connect');

	var dbo = db.db('nodejs');

	dbo.collection('student').findOne({},function(err,result){
		if(err){
			throw err;
		}
		console.log(result.name);
	});

	dbo.collection('student').find({}).toArray(function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	});
	db.close();
});