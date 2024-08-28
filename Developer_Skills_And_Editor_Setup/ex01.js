/*Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..." */

/*Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets */
var temp = [17, 21, 23]
var temp2 = [12, 5, -5, 0, 4] 
function printForecast ( temp ){
    let str = "";
    for(let i = 0; i < temp.length; i++){
        str += `${temp[i]}ºC in ${i+1} days...`
    }
    console.log(str);
}
console.log("Data 1: ");
printForecast(temp)
console.log("Data 2: ");
printForecast(temp2)