/*Coding Challenge #2 */
/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.*/

/*Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100 */

function calcTip( billValue ) {
    var tip = 0
    if(billValue >= 50 && billValue <= 300){
        tip = 0.15*billValue
    } else {
        tip = 0.2*billValue
    }
    return tip
}
/*And now let's use arrays! So create an array 'bills' containing the test data
below */

var bills = [125, 555, 44]

/*Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before */
var tips = []
bills.map((value) => (
    tips.push(calcTip(value))
))
console.log("Coding Challenge #2");
console.log("Tips: ");
console.log(tips);

/*Bonus: Create an array 'total' containing the total values, so the bill + tip */
var total = []
tips.map((value, index) => (
    total.push(value + bills[index])
))
console.log("Total: ");
console.log(total);
