

/*Coding Challenge #3 */
/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter) */

/*For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith) */
const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
};
  
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
};

/*Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method */

Mark.calcBMI = function () {
    this.bmi = this.mass / this.height**2
    return this.bmi
}

John.calcBMI = function () {
    this.bmi = this.mass / this.height**2
    return this.bmi
}
console.log("Coding Challenge #3");
Mark.calcBMI()
John.calcBMI()
/*Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" */
if (Mark.bmi > John.bmi) {
    console.log(`${Mark.fullName}'s BMI (${Mark.bmi.toFixed(1)}) is higher than ${John.fullName}'s BMI (${John.bmi.toFixed(1)})`);
} else if (John.bmi > Mark.bmi) {
    console.log(`${John.fullName}'s BMI (${John.bmi.toFixed(1)}) is higher than ${Mark.fullName}'s BMI (${Mark.bmi.toFixed(1)})`);
} else {
    console.log("Both Mark and John have the same BMI.");
}


