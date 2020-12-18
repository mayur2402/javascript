var fs = require('fs');

fs.writeFile('m.txt','this is nodejs file for write',function(err){
	if(err)
		throw err;
	console.log("Write success");
});

fs.readFile('m.txt',function(err,data){
	console.log(data);
});