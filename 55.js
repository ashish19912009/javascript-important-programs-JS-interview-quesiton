

function findMissingNumber(arr, lowerBond, upperBond) {

    let sumOfInteger = 0;
    let len = arr.length - 1;
    for(var x = 0; x <= len; x++)
        sumOfInteger += arr[x]

    // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
    // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
    // N is the upper bound and M is the lower bound

    let upperLimitSum = (upperBond * (upperBond + 1))/2;
    let lowerLimitSum = (lowerBond * (lowerBond - 1))/2;

    let ttlSum = upperLimitSum - lowerLimitSum;

    return ttlSum - sumOfInteger;
}

var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7, 8, 11];

var upperBound1 = 11;
var lowerBound1 = 1;

console.log(findMissingNumber(arrayOfIntegers, lowerBound1, upperBound1));
