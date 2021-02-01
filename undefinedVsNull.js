// variable value not declared so it shows undefined
let studentName;
console.log(studentName);

//in this function if we don't call return it shows undefined
function add(num1,num2)
{
    console.log(num1+num2);
}
const result = add(12,12);
console.log(result);//this result shows undefined because nothing returned in this variable


//if we don,t pass parameter in perfectly we get undefined 
function numbers(number1,number2)
{
    console.log(number1,number2)
    //console.log(number2); //this will show undefined because we pass in the first parameter
}
numbers(12); //number2 show undefined 


//if in the object which variable is not declared but we find this variable its shows undefined
const patients = {name:'shunit', address:"dhanmondi"};
console.log(patients.phone); //in this object this phone variable is not declared 

//same as array 
const numbersN = [4, 5, 8];
console.log(numbersN[10]);