const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);


console.log(!hasDriverLicense);

//  const shouldDrive = hasDriverLicense && hasGoodVision;
//  if(shouldDrive){
//     console.log("hritvik is able to drive");
//  }
//  else{
//     console.log("someone else should drive");
//  }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);


const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;
if (shouldDrive) {
   console.log("hritvik is able to drive");
}
else {
   console.log("someone else should drive");
}