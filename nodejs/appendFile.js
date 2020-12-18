var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

	fs.appendFile('m.txt','file is used for node js',function(err){
		if(err)
			throw err;
		res.write("save");
	})

	fs.writeFile('m.txt','this is nodejs file for write',function(err){
		if(err)
			throw err;
		res.write("Write success");
		res.end();
	})

}).listen(8000);