var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'mayur123',
	database : 'nodejs'
});

connection.connect(function(err){
	if(err){
		throw err;
	}
	console.log('connected');
/*
	connection.query('create database nodejs',function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	})


	connection.query('create table student(rollno int primary key,name varchar(20),city varchar(20))',function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	})
	

	connection.query("insert into student values(69,'aniket','pune')",function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	})
	*/
	connection.query("select * from student",function(err,result,field){
		if(err){
			throw err;
		}
		console.log(field);
	})

	connection.query("select * from student",function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	})

	connection.query("select name from student where city = 'pune'",function(err,result){
		if(err){
			throw err;
		}
		console.log(result);
	})
})
