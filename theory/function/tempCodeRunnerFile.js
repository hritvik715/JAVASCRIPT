


const x = [2, 5, 6, 3, 4, 7];
for (let item of x.entries()) {
    console.log(item);
}
const y = [2, 5, 6, 3, 4, 7];
for (let [i, item] of y.entries()) {
    console.log(`${i} : ${item}`);
}