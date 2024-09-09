/*21. Rotate an array to the right 1 position */
function rotateRight(arr) {
    arr.unshift(arr.pop());
    return arr;
}
console.log("Rotate array to right by 1 position (1, 2, 3, 4): ");
console.log(rotateRight([1, 2, 3, 4]));
/*22. Reverse an array */
let arr = [5, 6, 7, 8]
console.log("Reverse array (5, 6, 7, 8): "+arr.reverse());
/*23. Reverse a string */
let str = 'hello world'
console.log("Reverse string ('hello world'): "+str.split('').reverse().join(''));

/*24. Create a function that will merge two arrays and return the result as a new array */
function mergeArrays(arr01, arr02){
    return [...arr01, ...arr02]
}
console.log("Merge 2 array (1, 2, 3)(7, 8, 9): "+mergeArrays([1, 2, 3],[7, 8, 9]));

/*26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second*/
function symmetricDifference(arr1, arr2) {
    return [...arr1.filter(x => !arr2.includes(x)), ...arr2.filter(x => !arr1.includes(x))];
}
console.log("Merge array but only have different number: "+symmetricDifference([1, 2, 3], [2, 3, 4]));