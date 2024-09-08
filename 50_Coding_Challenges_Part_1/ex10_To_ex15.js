/*10. Calculate the sum of numbers in an array of numbers */
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum array from 1 to 4: "+sumArray([1, 2, 3, 4]));

/*11. Calculate the average of the numbers in an array of numbers */
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
console.log("Average array from 1 to 4: "+averageArray([1, 2, 3, 4])); // Output: 2.5

/*12. Create a function that receives an array of numbers as 
argument and returns an array containing only the positive numbers */
function filterPositive(arr) {
    return arr.filter(num => num > 0);
}
console.log("Only positive number: "+filterPositive([-1, 0, 2, -3, 5]));

/*13. Find the maximum number in an array of numbers */
function maxNumber(arr) {
    return Math.max(...arr);
}
console.log("Max number: "+maxNumber([1, 5, 3, 9, 2]));

/*14. Print the first 10 Fibonacci numbers without recursion */
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
}
console.log("Fibonacci first 10 number: ");
fibonacci(10)

/*15. Create a function that will find the nth Fibonacci number using recursion */
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log("Fibonacci use recursive: "+fibonacciRecursive(10));
