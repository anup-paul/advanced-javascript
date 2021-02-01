const numbersN = [2, 4, 6, 8, 10];
// const output = [];

// for(let i = 0; i<numbersN.length; i++)
// {
//     const element = numbersN[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


//bellow three function is same
// //1
// function square(element)
// {
//     return element * element;
// }
// //2
// const square = element => element * element;
// //3
// const square = x => x * x;


//  numbersN.map(function(element, index, array)  // if we want we can call a function in the map
// {
//     console.log(element, index, array); 
//     //console.log(element *element);
// });


//below two map method is same
//1
// const result = numbersN.map(function(element)
// {
//     return element * element;
// })
//2
const result = numbersN.map(element => element * element);
console.log(result);


//filter use for filtering array and in this filtering works in a condition
const bigger = numbersN.filter(element => element > 5);
console.log('biggerNumber',bigger);

//find give a single element and give the first and single element of condition which one is set
const singleElement = numbersN.find(x => x > 6);
console.log(singleElement);
