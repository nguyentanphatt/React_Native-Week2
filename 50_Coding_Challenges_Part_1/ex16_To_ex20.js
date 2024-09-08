/*16. Create a function that will return a Boolean specifying if a number is prime */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Check 7 is prime (true/false): "+isPrime(7));

/*17. Calculate the sum of digits of a positive integer number */
function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log("Sum of digits in a number 1234: "+sumOfDigits(1234));

/*18. Print the first 100 prime numbers */
function printPrimes(limit) {
    let count = 0;
    let num = 2;
    let primes = [];
    while (count < limit) {
        if (isPrime(num)) {
            primes.push(num);
            count++;
        }
        num++;
    }
    console.log(primes.join(', '));
}
console.log("First 100 prime number: ");
printPrimes(100);

/*19. Create a function that will return in an array the first “p” prime numbers greater than “n” */
function primeNumbersGreaterThan(n, p) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
}
console.log("5 prime number greater than 10: ");
console.log(primeNumbersGreaterThan(10, 5));

/*20. Rotate an array to the left 1 position */
function rotateLeft(arr) {
    arr.push(arr.shift());
    return arr;
}
console.log("Rotate left array (1, 2, 3, 4): ");
console.log(rotateLeft([1, 2, 3, 4]));
