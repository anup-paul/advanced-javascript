//break condition. 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > 4)
    {
        break;
    }
    console.log(element);
}

//continue condition
const numbers2 = [11, -90, -1, 13, 90, -82];
for (let i = 0; i < numbers2.length; i++) {
    const element = numbers2[i];
    if(element < 0)
    {
        continue;   // if the element is less then 0 then skip this value
    }
    console.log(element);
}