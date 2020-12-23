var express = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);
var PORT = 8000;
var users = [];

express.get('/',function(req,res){
	res.sendFile(__dirname+'/Chat.html');
});

io.on('connection',function(socket){

	socket.on('setUsername',function(data){
		if(users.indexOf(data) != -1){
			socket.emit('userExists',data+' username is taken');
		}
		else if(users.indexOf(data) == -1){
			console.log(data+' connected');
			users.push(data);
			socket.emit('userSet',{username: data});
		}
		
	});

	socket.on('msg',function(data){
		io.sockets.emit('newmsg',data);
	});

});

http.listen(PORT,function(){
	console.log('server connected');
});