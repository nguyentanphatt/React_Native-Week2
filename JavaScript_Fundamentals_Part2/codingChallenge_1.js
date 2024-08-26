//Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
*/
/*Create an arrow function 'calcAverage' to calculate the average of 3 scores */
var dolphinsScore = [44, 23, 71]
var koalasScore = [65, 54, 49]
const calcAverage = list => list.reduce((prev, curr) => prev + curr) / list.length;

/*Use the function to calculate the average for both teams */
var avgDolphins = calcAverage(dolphinsScore)
var avgKoalas = calcAverage(koalasScore)

/*Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)" */

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= avgKoalas*2){
        console.log("Dolphins Win")
    } else {
        console.log("Koalas Win");
        
    }
}
/*Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
Ignore draws this time */
console.log("Coding Challenge #1");
checkWinner()
