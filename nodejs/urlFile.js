var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){

	var urlquery = "https://www.tutorialspoint.com/nodejs/nodejs_web_module.htm"
	var fileName = "."+urlquery.pathname;

	fs.readFile(fileName,function(err,data){
		if(err){
			res.writeHead(404,{'content-type':'text/html'});
			res.write('404 error');
		}
		else{
			res.writeHead(200,{'content-type':'text/html'});
			res.write(data);
		}
		res.end();
	})

}).listen(8000);