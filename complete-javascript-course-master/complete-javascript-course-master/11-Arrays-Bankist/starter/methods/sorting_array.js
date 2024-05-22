
//Strings
const owners = ['jonas', 'zach', ' adam', 'martha'];
console.log(owners.sort());//it will sort alphabetically

console.log(owners);//it also mutate the real array










//Numbers
const arr = [5, 6, 9, -3, 7, -56, 2];
console.log(arr.sort()); //it will not be accurate bcz sort mtd does sorting based on strings i.e. it converts everything to strings and does the sorting itself






//return < 0 ,  A , B (keep order)
//return > 0 , B , A (switch order)

//ASCENDING
arr.sort((a, b) => {//(current_value  ,  next_value)
    if (a > b) return 1;
    if (b > a) return -1;
});
console.log(arr);


//DESCENDING
let drr = [2, 5, 6, -96, 86, -48, 1];
drr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
})
console.log(drr);

// Elements are sorted according to the return value of the compare function.
// greater than 0 => (+) =>: sort a after b
// less than 0 => (-) =>: sort a before b
// equal to 0: keep original order of a and b












let brr = [5, 6, 7, -63, -21, -3, 25];
brr.sort((a, b) => a - b);
console.log(brr);

let krr = [63, 9, 5, -25, 14, -57];
console.log(krr.sort((a, b) => b - a));

//NOTE :-
// if sort function return -ve then it swap and + ve then it don't swap
// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes are done with the sort order of the two values.


