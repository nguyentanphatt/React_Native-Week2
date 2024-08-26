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
