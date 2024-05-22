

const chekDogs = function (arr1, arr2) {

    // it's a bad practice to mutate function  parameters so creating a shallow copy

    const arr1Corrected = arr1.slice();
    arr1Corrected.splice(0, 1);
    arr1Corrected.splice(-2);
    // console.log(arr1Corrected);

    const dog = arr1Corrected.concat(arr2);
    console.log(dog);
    //first way of loop
    // for (const [index, item] of dog.entries()) {
    //     if (item >= 3) console.log(`dog ${index + 1} is an adult and ${item} yrs old`);
    //     else if (item < 3) console.log(`dog ${index + 1} is a puppy and ${item} yrs old`);
    // }

    //second way of loop
    dog.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`dog ${i + 1} is an adult and ${dog} yrs old`);
        }
        else {
            console.log(`dog ${i + 1} is a puppy and ${dog} yrs old`);
            // }

        }
    })


}


const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];


chekDogs(julia, kate);






