var mongo = require('mongodb');
var url = 'mongodb://localhost:27017/nodejs';

mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	console.log('connected');

	var delete_one = {name : 'Sagar'};

	var dbo = db.db('nodejs');

	dbo.collection('student').deleteOne(delete_one,function(err,result){
		if(err){
			throw err;
		}
		console.log('one document deleted');
	});

	var delete_many = {name:/^M/};

	dbo.collection('student').deleteMany(delete_many,function(err,result){
		if(err){
			throw err;
		}
		console.log('documents start with name m deleted');
	});
	db.close();
});