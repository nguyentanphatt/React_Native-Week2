//Code chanllege #1
//Mark and John are trying to compare their BMI (Body Mass Index), which is
//calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//and height in meter).

//Store Mark's and John's mass and height in variables
var markMass = 78
var markHeight = 1.69
var johnMass = 92
var johnHeight = 1.95
    //Calculate both their BMIs using the formula (you can even implement both versions)
calculatorBMI = (mass, height) => {
    return mass/height**2
}
var markBMI = calculatorBMI(markMass, markHeight)
var johnBMI = calculatorBMI(johnMass, johnHeight)
//Create a Boolean variable 'markHigherBMI' containing information about
//whether Mark has a higher BMI than John.

var markHigerBMI = (markBMI > johnBMI) ? true : false
console.log(markHigerBMI);

//Coding Challenge #2


