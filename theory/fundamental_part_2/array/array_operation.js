const friends = ['daisy', 'mohan', 'pandit'];



//ADD elements
const newlength = friends.push('kuku');//push method return the length of new array and it push the element at the end
console.log(friends);
console.log(newlength);



friends.unshift('hena');//it also return the length of new array and it push the elment in the beginning
console.log(friends);



//Remove elements

const popped = friends.pop();//remove last element of array and this return the elemt removed
console.log(friends);
console.log(popped);









friends.shift();//it remove the first element
console.log(friends);

friends.push(23)

console.log(friends.indexOf('mohan'));


console.log(friends.includes('daisy'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


// if (friends.includes('daisy')) {
//     console.log('you have a friend called peter');
// }