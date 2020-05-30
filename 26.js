
const checkPerfect = (n) => {

    for(let i = 1; i * i <=n; i++)
    {
        if((n%i===0) && (n/i === i))
        {
            return `Perfect Square Root of ${i}`
        }
    }
  return 'not a perfect square root'
};

const n = 16;
console.log(`The number ${n} is ${checkPerfect(n)}`)