const jonas = {
    firstName: 'hritvik',
    lastName: 'mohan',
    birthYear: 2003,
    job: ' student',
    friends: ['golu', 'molu', 'tolu'],
    hasDriverLicense: true,
    // calcAge : function (birthYear){
    //     return 2037-birthYear;
    // }



    // calcAge : function (){
    //     console.log(this);//this -> points to jonas object
    //     return 2037- this.birthYear;
    // }



    calcAge: function () {
        this.age = 2037 - this.birthYear;//here we create a new property on the current object(jonas object) and this.age means jonas.age
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${jonas.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`//here we had called calcAge bcz agar calcAge nhi hua toh age property toh hogi hi nhi so islie pehle vo hai toh pehle usse(calcAge) ko call kiya
    }

};//each of keys is  also called property so this object has five properties





// console.log(jonas.calcAge());//you have used this keyword above so no need to use any arguments


console.log(jonas.age);// a new property(age) is created in calcAge function

//imp->
// console.log(jonas['calcAge'](2003));



//cahlleneg
//"jonas is a 46-year old teacher, and he has a driver's license"

// console.log(jonas.getSummary());





