var num1 = 10;
var num2 = 30;
//-----------------------------------------------------------

//if statement 
if(num1 > num2)
{
	document.write(num1," is greater than ",num2);
}
else
{
	document.write("<br>", num2, " is greater than ",num1);
}
//-----------------------------------------------------------

//ternary operator
var num;
(num1 > num2)? document.write(num1," is greater than ",num2) : document.write("<br>", num2, " is greater than ",num1);
//-----------------------------------------------------------

//data type checking
num2 = "10";
if(num1 === num2)
{
	document.write("<br>both are same");
}
else
{
	document.write("<br>different values");
}
//-----------------------------------------------------------

//switch statements
var day = 'mon';

switch(day)
{
	case 'mon' :
		document.write("<br>");
		document.write("today is monday");
		break;
	case 'tue' :
		document.write("<br>");
		document.write("today is tuesday");
		break;
	case 'wed' :
		document.write("<br>");
		document.write("today is wednesday");
		break;
	case 'fri' :
		document.write("<br>");
		document.write("today is friday");
		break;
	case 'sat' :
		document.write("<br>");
		document.write("today is satday");
		break;
	case 'sun' :
		document.write("<br>");
		document.write("today is sunday");
		break;
	default :
		document.write("<br>");
		document.write("today is monday");
}

