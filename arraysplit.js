//using slice
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part1 = numbers.slice(2, 5);
console.log(part1);    // slice creat a new array in his condition
console.log(numbers);  // slice don't change the main array

//using Splice
const numS = [11, 12, 13, 14, 15, 16, 17, 18, 19];
const removed = numS.splice(2, 5) // first value is array index position and second value is count element and then all value in injected in main array
console.log(removed);
console.log(numS); //for using splice main array value is removed;

//using Splice injected value in main array
const numbers2 = [21, 22 , 23, 24, 25, 26, 27 ,28 ,29];
const rem = numbers2.splice(3, 4, 99,88);// last two value injected in main array which part is removed
console.log(rem);
console.log(numbers2);

//using join
const ages = [21, 23, 18, 17, 16];
const joinString = ages.join(' this is my age ');
console.log(joinString);
console.log(ages); //main array not changed