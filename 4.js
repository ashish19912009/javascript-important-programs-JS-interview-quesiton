const a = 5;
const b = 6;
const c = 7;

const sum = (a + b + c)/2;

const abc = Math.sqrt(sum*((sum-a) * (sum-b) * (sum-c)));
console.log(abc);