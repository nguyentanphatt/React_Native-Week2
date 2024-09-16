/*27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements*/
function distinctElements(arr) {
    return [...new Set(arr)];
}
console.log("Distinct Element of array [1,1,2,3,4,4]: "+ distinctElements([1,1,2,3,4,4]));
/*28. Calculate the sum of first 100 prime numbers and return them in an array*/
function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function first100Primes() {
    const primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
}

const sumFirst100Primes = first100Primes().reduce((acc, cur) => acc + cur, 0);
console.log("Sum of 100 first prime numbers: "+sumFirst100Primes);
/*29. Print the distance between the first 100 prime numbers*/
function primeDistances() {
    const primes = first100Primes();
    const distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }
    return distances;
}
console.log("Distance of 100 first prime numbers: "+primeDistances());

/*30. Create a function that will add two positive numbers of indefinite size. The numbers*/
function addLargeNumbers(a, b) {
    let carry = 0, result = [], i = a.length - 1, j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry) {
        let sum = (+a[i--] || 0) + (+b[j--] || 0) + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    
    return result.reverse().join('');
}
arr1 = '12345'
arr2 = '654321'
console.log("Sum of two positive numbers with indefinite size (12345, 654321): "+ addLargeNumbers(arr1, arr2));
