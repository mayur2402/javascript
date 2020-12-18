var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({

	service : 'gmail',
	auth :
	{
		user : 'mayurdimble412105@gmail.com',
		pass : 'lenovoa2010@'
	}
});

var mailoptions = {
	from : 'mayurdimble412105@gmail.com',
	to : 'mayurdimble99@gmail.com',
	subject : 'sending mail through nodemailer',
	text : 'simple process just install nodemailer from npm then create one file with .js extention and write logic'
};

transporter.sendMail(mailoptions,function(err,info){
	if(err){
		console.log(err);
	}
	else{
		console.log("mail send successfully");
	}
});