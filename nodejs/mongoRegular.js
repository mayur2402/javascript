var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/nodejs';

mongodb.connect(url,function(err,dataBase){
	if(err){
		throw err;
	}
	console.log('connected');

	dataBaseObj = dataBase.db('nodejs');

	var query = {name : /^S/};

	dataBaseObj.collection('student').find(query).toArray(function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	});
	dataBase.close();
});