const friends = [
    {id: 24, friendName:'sam'},
    {id: 25, friendName:'nis'},
    {id: 26, friendName:'elf'},
    {id: 27, friendName:'jp'}
];

// //forPractice
// const friendNames = [];
// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];
//     friendsNames.push(element.friendName);
// }
// console.log(friendNames);

const names = friends.map(FN => FN.friendName);
const ids = friends.map(FI => FI.id);
console.log(names);
console.log(ids);

const biggerId = friends.filter(x => x.id > 25);
console.log(biggerId);

const singleBiggerId = friends.find(x => x.id > 25);
console.log(singleBiggerId);
