//Falsy (false, 0, '', undefined, null, NaN );
//truth ('0', " ", [], {}, "false")

// const age = 4; //-4, result will be true
// if(age)
// {
//     console.log('Condition is true');
// }
// else
// {
//     console.log('Condition is false');
// }

// const age2 = 0;  //value 0 will be false
// if(age2)
// {
//     console.log('Condition is true');
// }
// else
// {
//     console.log('Condition is false');
// }

// const name = 'anup'  // " "(space is a string) ,"0"(for using double quotation this is string) this all are truthy condition
// if (name) 
// {
//     console.log('Condition is true');
// }
// else 
// {
//     console.log('Condition is false');
// }


// const names = [] // empty array is also a truthy condition
// const bio = {}  //empty object is a truthy condition



//  const name1 = ''  //In this quotation nothing is declared so this is falsy condition;
//  if(name1)
// {
//     console.log('Condition is true');
// }
// else
// {
//     console.log('Condition is false');
// }


//In let is different case. if we use late and no value declared so that means undefined and undefiend is false
let name; //this value is undefined so its falsy
if(name)
{
    console.log('Condition is true');
}
else
{
    console.log('Condition is false');
}  

// let name = null and let name = NaN both are falsy because null and NaN is a falsy
