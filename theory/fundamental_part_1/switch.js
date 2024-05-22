const day = 'monday';

// switch(day){
//     case 'monday'://day === 'monday'
//         console.log('plan course structure');
//         console.log('go to coding meetup');
//         break;//remove break to understand break
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples ');
//         break;
//     case 'friday':
//         console.log('record video');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("enjoy the weekend");
//         break;
//     default:
//         console.log('not a valid day');
// }

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');
}
else if (day === 'tuesday') {
    console.log('prepare theory videos');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples ');
}
else if (day === 'friday') {
    console.log('record video');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log("enjoy the weekend");
}
