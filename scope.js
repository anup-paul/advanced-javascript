//thatJSdude.com for scope

let n = 100;  //this is a global variable
function sum(num1,num2)
{
    let result = num1+num2+n

    return result;
}
const total = sum(5,5);
console.log(total);