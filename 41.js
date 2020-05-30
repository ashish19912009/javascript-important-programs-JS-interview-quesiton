
function checkIfPrime(n){
    let d = 3;
    const limit = Math.sqrt(n);

    if(n === 2 || n === 3)
        return true;
    if(n % 2 === 0)
        return false;
    
    while(limit >= d)
        {
            console.log(d);
            if(n % d === 0)
                {
                    return false;
                }
            else
                d +=2;
        }
    return true;
}

console.log(checkIfPrime(137));