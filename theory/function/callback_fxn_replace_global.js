const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
    // return str.replace('+', '').toLowerCase();
}

console.log(oneWord('hritvik mohan'));

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');//split will return an array
    return [first.toUpperCase(), ...others].join(' ');
};








const transformer = function (str, fn) {
    console.log(`Original string : ${str}`);
    console.log(`Transformed string : ${fn(str)}`);

    console.log(`Transformed by : ${fn.name}`);//fxns have also methods and properties and one of them is name property


}

// transformer(`Javascript is the best!`, upperFirstWord);
// transformer(`Javascript is the best!`, oneWord);



//JS uses callbacks all the time
const high5 = function () {
    console.log(`👋`);

}

// document.body.addEventListener('click', high5);




// ['kuku', 'duku', 'tiku'].forEach(high5);