const mark = {
    fullName: 'Mark miller',
    mass : 78,
    height:1.69,
    bmi  : function (){
        const x = this.mass/this.height**2;
        return x;
    }


}

const john = {
    fullName : 'John Smith',
    mass : 92,
    height: 1.95,
    bmi  : function (){
        const x = this.mass/this.height**2;
        return x;
    }
}

const mark_bmi  = mark.bmi() ;
const john_bmi = john.bmi()

console.log(mark_bmi  , john_bmi);

if(mark_bmi>john_bmi){
    console.log(`mark ${mark_bmi} is higher than john ${john_bmi}`);
}
else{
    console.log(`john ${john_bmi} is higher than mark ${mark_bmi}`)
}