function display(val)
{
	document.getElementById("box").value+=val
}

function solve()
{
var x = document.getElementById("box").value

try
{
var y = eval(x)
}

catch(err)
{
	alert("Please enter valid operation!")
	clr()
	return false
}

if(isNaN(y) || y=="Infinity")
{
	alert("Undefined! Please enter valid operation!")
	clr()
}

else
	document.getElementById("box").value = y
}

function bkspc()
{
	document.getElementById("box").value = document.getElementById("box").value.substring(0,document.getElementById("box").value.length -1)
}

function clr()
{
	document.getElementById("box").value = ""
}