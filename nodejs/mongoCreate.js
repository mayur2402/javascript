var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/nodejs';

mongodb.connect(url,function(err,db){
	if(err){
		throw err;
	}
	console.log('connect');
	dbo = db.db('nodejs');

	dbo.createCollection('student',function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	});
});