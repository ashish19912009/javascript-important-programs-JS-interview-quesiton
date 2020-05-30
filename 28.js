// Test Cases : 
// Prime Numbers : 1,3,5,7,11,13,17
// Non Prime Nukmbers : 2,4,6,8,9,10,12
const check = (abc) => {

    for(let i = 2; i <abc; i++)
        {
            if((abc%i === 0))
                {
                    return "Number is not prime"
                }
        }
    return "Number is prime"
}

let abc = 13;

console.log(check(abc));