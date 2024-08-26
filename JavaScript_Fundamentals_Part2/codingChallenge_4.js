/*Coding Challenge #4 */
/*Let's improve Steven's tip calculator even more, this time using loops! */
/*Create an array 'bills' containing all 10 test bill values */
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
/*Create empty arrays for the tips and the totals ('tips' and 'totals') */
tips = []
total = []
/*Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations! */
function calcTip( billValue ) {
    var tip = 0
    if(billValue >= 50 && billValue <= 300){
        tip = 0.15*billValue
    } else {
        tip = 0.2*billValue
    }
    return tip
}
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(bills[i] + tip);
  }

console.log("Total: "+total);
/*Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. */
function calcAverage(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    const average = sum / arr.length;
    return average;
}
console.log("Average: " + calcAverage(total));
