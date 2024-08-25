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

//Coding Challenge #3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each
//other 3 times. The winner with the highest average score wins a trophy!

var dolphins = [96, 108, 89]
var koalas = [88, 91, 110]
//Calculate the average score for each team, using the test data below

const average = list => list.reduce((prev, curr) => prev + curr) / list.length;
console.log("Code Challenge #3");
console.log("Dolphins'average: " + average(dolphins));
console.log("Koalas'average: " +average(koalas));

//Compare the team's average scores to determine the winner of the competition,
//and print it to the console. Don't forget that there can be a draw, so test for that
//as well (draw means they have the same average score)
if (average(dolphins) === average(koalas)){
    console.log("Draw");
} else {
    (average(dolphins) > average(koalas)) ?
    console.log("Dolphins Win")
    :
    console.log("Koalas Win");
}

//Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
//team only wins if it has a higher score than the other team, and the same time a
//score of at least 100 points. Hint: Use a logical operator to test for minimum
//score, as well as multiple else-if blocks

var dolphinsBonus1 = [97, 112, 101]
var koalasBonus1 = [109, 95, 123]
var averageDolphinsBonus = average(dolphinsBonus1)
var averageKoalasBonus = average(koalasBonus1)
console.log("Bonus 1:");

if(averageDolphinsBonus > 100 && averageKoalasBonus > 100){
    if (averageDolphinsBonus == averageKoalasBonus) {
        console.log("Draw");
    } else {
        (averageDolphinsBonus > averageKoalasBonus) ? 
        console.log("Dolphins Win")
        :
        console.log("Koalas Win");
    }
} else if (averageDolphinsBonus < 100) {
    console.log("Koalas Win");
} else {
    console.log("Dolphins Win");
}

//Bonus 2: Minimum score also applies to a draw! So a draw only happens when
//both teams have the same score and both have a score greater or equal 100
//points. Otherwise, no team wins the trophy

var dolphinsBonus2 = [97, 112, 101]
var koalasBonus2 = [109, 95, 106]
var averageDolphinsBonus2 = average(dolphinsBonus2)
var averageKoalasBonus2 = average(koalasBonus2)
console.log(averageDolphinsBonus2 + " " +averageKoalasBonus2);
console.log("Bonus 2:");

if (averageDolphinsBonus2 >= 100 && averageKoalasBonus2 >= 100) {
    if (averageDolphinsBonus2 == averageKoalasBonus2) {
        console.log("Draw");
    } else {
        (averageDolphinsBonus2 > averageKoalasBonus2) ? 
        console.log("Dolphins Win")
        :
        console.log("Koalas Win");
    }
  } else {
    console.log("No one wins. Both teams must score at least 100 points.");
  }

//Code Challenge #4

//Steven wants to build a very simple tip calculator for whenever he goes eating in a
//restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
//300. If the value is different, the tip is 20%.

//Calculate the tip, depending on the bill value. Create a variable called 'tip' for
//this. It's not allowed to use an if/else statement � (If it's easier for you, you can
//start with an if/else statement, and then try to convert it to a ternary
//operator!)

var billValue = 275
var tip = (billValue >= 50 && billValue <= 300) ? 0.15*billValue : 0.2*billValue

//Print a string to the console containing the bill value, the tip, and the final value
//(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
//316.25”

console.log("Code Challenge #4");

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);


