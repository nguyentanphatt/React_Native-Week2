//Code challenge #1
//Mark and John are trying to compare their BMI (Body Mass Index), which is
//calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//and height in meter).

//Store Mark's and John's mass and height in variables
var markMass = 78
var markHeight = 1.69
var johnMass = 92
var johnHeight = 1.95
var markMass2 = 95
var markHeight2 = 1.88
var johnMass2 = 85
var johnHeight2 = 1.76
    //Calculate both their BMIs using the formula (you can even implement both versions)
calculatorBMI = (mass, height) => {
    return mass/height**2
}
var markBMI = calculatorBMI(markMass, markHeight)
var johnBMI = calculatorBMI(johnMass, johnHeight)
var markBMI2 = calculatorBMI(markMass2, markHeight2)
var johnBMI2 = calculatorBMI(johnMass2, johnHeight2)
//Create a Boolean variable 'markHigherBMI' containing information about
//whether Mark has a higher BMI than John.

var markHigerBMI = (markBMI > johnBMI) ? true : false
var markHigerBMI2 = (markBMI2 > johnBMI2) ? true : false
console.log("Code Challenge #1");
console.log("Data 1:");
console.log(markHigerBMI);
console.log("Data 2:");
console.log(markHigerBMI2);

//Coding Challenge #2

console.log("Code Challenge #2");
console.log("Data 1:");
if (markHigerBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John (${johnBMI.toFixed(2)})`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark (${markBMI.toFixed(2)})`);
}
console.log("Data 2:");
if (markHigerBMI2) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John (${johnBMI.toFixed(2)})`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark (${markBMI.toFixed(2)})`);
}

