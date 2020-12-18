var mongo = require('mongodb');
var url = 'mongodb://localhost:27017/nodejs';

mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	console.log('connected');

	var dbo = db.db('nodejs');
	var query_to_update = {address : /^Apple/};
	var updated_query = {$set:{address:'Windows st 5645'}};

	dbo.collection('student').updateOne(query_to_update,updated_query,function(err,result){
		if(err){
			throw err;
		}
		console.log('successfully Update');
	});
	db.close();
});