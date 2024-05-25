//MAP
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);



currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})










//visit -> bankist.netlify.app  (first user- js,1111 and second user - jd,2222)










console.log(`-----------------------------------`);


//set
const currenciesUnique = new Set(['USD', 'GDP', "USD", 'EUR', "EUR"]);
currenciesUnique.forEach(function (value, _, map) {//imp->in js _(underscore) means a throw away variable
    console.log(`${value}: ${value}`);//a set does not have key and  pair i.e. isme index nhi hota

})