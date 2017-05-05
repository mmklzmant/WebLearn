

var temp = new Array();
var arrNum = new Array();
var arrOp = new Array();
arrOp[0] = "#";
var show = "";
function getData(charactor)
{
	var result = document.getElementById("result");
	switch(charactor)
	{
		case "0":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "1":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "2":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "3":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "4":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "5":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "6":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "7":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "8":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "9":
			temp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "+":
			arrNum.push(joinData());
			priority();
			arrOp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "-":
			arrNum.push(joinData());
			priority();
			arrOp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "x":
			arrNum.push(joinData());
			priority();
			arrOp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "/":
			arrNum.push(joinData());
			priority();
			arrOp.push(charactor);
			show += charactor;
			result.value = show;
			break;
		case "C":
			result.value = "";
			show = "";
			arrNum.splice(0, arrNum.length);
			arrOp.splice(1, arrOp.length);
			temp.splice(0, temp.length);
			break;
		case "=":
			arrNum.push(joinData());
			priority();
			show = caculate();
			result.value = show;
			show = "";
			break;
		default:
			break;
	}		
}
function joinData()
{
	var s = temp.join("");
	temp.splice(0, temp.length);
	return s;
}
function priority()
{
	var a;
	var b;
	var op;
	if(arrOp[arrOp.length-1] == "x" 
		|| arrOp[arrOp.length-1] == "/")
	{
		a = new Number(arrNum.pop());
		b = new Number(arrNum.pop());
		c = arrOp.pop();
		if(c == "x")
		{
			arrNum.push(a*b);
		}
		else if(c == "/")
		{
			arrNum.push(b/a);
		}
		else
		{
			return;
		}
	}
	else
	{
		return;
	}
}
function caculate()
{
	var a;
	var b;
	var c;
	while(arrOp[arrOp.length-1] != "#")			
	{
		a = new Number(arrNum.pop());
		b = new Number(arrNum.pop());
		c = arrOp.pop();
		if(c == "+")
		{
			arrNum.push(a+b);
		}
		else
		{
			arrNum.push(b-a);
		}
	}
	return arrNum.pop();
}