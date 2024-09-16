/*36. Create a function that converts a string to an array of characters*/
function stringToCharArray(str) {
    return [...str];
}
let str = 'hello'
console.log("String to array: "+stringToCharArray(str));
/*37. Create a function that will convert a string in an array containing the ASCII codes of each character*/
function stringToAsciiArray(str) {
    return [...str].map(char => char.charCodeAt(0));
}
console.log("String to ASCII: "+stringToAsciiArray(str));
/*38. Create a function that will convert an array containing ASCII codes in a string*/
function asciiArrayToString(arr) {
    return String.fromCharCode(...arr);
}
let ascii = [104,101,108,108,111]
console.log("ASCII to String: "+asciiArrayToString(ascii));

/*39. Implement the Caesar cypher*/
function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, char => {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
    });
}
let shift = 3
console.log("Caesar Cipher: "+caesarCipher(str, shift));
/*40. Implement the bubble sort algorithm for an array of numbers*/
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
let number = [5, 1, 4, 2, 8, 6]
console.log("Bubble Sort: "+bubbleSort(number));
