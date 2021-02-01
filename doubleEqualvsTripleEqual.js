const number1 = 8;
const number2 = '8';
if(number1 == number2)  
{
    console.log("true");  //output will be true because double don't check type
}
else
{
    console.log("false");
}

///
const id1 = 9324;
const id2 = "9324";
if(id1 === id2)
{
    console.log('true');
}
else
{
    console.log('false'); //output will be false because triple equal check value and type
}

// in programing language 0 is false and 1 is true  
const first = 0;
const second = false;
if(first == second)
{
    console.log("true");   //0 is false and boolean is also false so output is true for double equal
}
else
{
    console.log('false');
}