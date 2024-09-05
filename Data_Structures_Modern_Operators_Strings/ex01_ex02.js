/*We're building a football betting app (soccer for my American friends)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data. */

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};
/*Create one player array for each team (variables 'players1' and
'players2') */
const players1 = game.players[0]
const players2 = game.players[1]

/*The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players */

const gk1 = players1[0]
const gk2 = players2[0]
const fieldPlayers1 = players1.slice(1)
const fieldPlayers2 = players2.slice(1)

/* Create an array 'allPlayers' containing all players of both teams (22
players)*/
const allPlayers = [...players1, ...players2]

/*During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic' */
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
/*Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2') */
const { team1, x: draw, team2} = game.odds
/*Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in) */
function printGoals(...players) {
    let totalGoals = 0
    for (const player of players) {
      const goals = game.scored.filter(scorer => scorer === player).length
      if (goals > 0) {
        console.log(`${player} scored ${goals} goal(s)`)
        totalGoals += goals
      } else {
        console.log(`${player} didn't score any goals.`)
      }
    }
    console.log(`Total number of goals scored by the selected players: ${totalGoals}`)
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored)
/*The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator */
const winter = team1 < team2 ? 'Team 1 win' : 'Team 2 win'
console.log(winter +"\n")
console.log("Ex02:")
/*Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski") */
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`)
});
/*Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember) */
const odds = Object.values(game.odds)
let averageOdd = 0
for (const odd of odds) {
  averageOdd += odd
}
averageOdd /= odds.length
console.log(`Average odd: ${averageOdd}`)
/**Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names � */
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`)
console.log(`Odd of draw: ${game.odds.x}`)
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`)
/*Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
} */
const scorers = {}

for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}

console.log(scorers);
