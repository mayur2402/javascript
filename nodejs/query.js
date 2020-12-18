var url = require('url');

//address = 'http://localhost:8080/index.php?num1=20&num2=20';
var address = 'https://www.tutorialspoint.com/nodejs/nodejs_web_module.htm'

q = url.parse(address,true);

console.log("Protocol \t:"+q.protocol);
console.log("hostname\t:"+q.hostname);
console.log("Port\t:"+q.port);
console.log("host\t:"+q.host);
console.log("Pathname\t:"+q.pathname);
console.log("path\t:"+q.path);
console.log(q);

var obj = q.query;

console.log("obj.num1\t:"+obj.num1);
console.log("obj.num2\t:"+obj.num2);