/*31. Create a function that will return the number of words in a text*/
function wordCount(text) {
    return text.trim().split(/\s+/).length;
}
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
console.log("Number of words: "+wordCount(text));
/*32. Create a function that will capitalize the first letter of each word in a text*/
function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}
console.log("Capitalize the first letter: "+capitalizeWords(text));
/*33. Calculate the sum of numbers received in a comma delimited string*/
function sumFromCommaDelimitedString(str) {
    return str.split(',').reduce((sum, num) => sum + parseFloat(num), 0);
}
let number = '11,15,17,18.5,20'
console.log("Sum of numbers received in a comma delimited string: "+sumFromCommaDelimitedString(number));
/*34. Create a function that returns an array with words inside a text.*/
function wordsInText(text) {
    return text.match(/\b\w+\b/g);
}
console.log("Words in text: "+wordsInText(text));
/*35. Create a function to convert a CSV text to a “bi-dimensional” array*/
function csvToArray(csv) {
    return csv.split('\n').map(row => row.split(','));
}
const csvData = 
`name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago`
console.log("CSV to array: "+csvToArray(csvData));
