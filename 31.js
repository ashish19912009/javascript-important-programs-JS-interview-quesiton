const primeFactor = (n) => {
    const temp = new Array();
    while(n%2 === 0)
    {
        n = n/2;
        temp.push(2);
    }

    for(let i=3; i<= Math.sqrt(n); i=i+2)
    {
        while(n%i ===0)
        {
            temp.push(i);
            n=n/i;
        }
    }
    if(n > 2)
    {
        temp.push(n);
    }
    console.log(temp);
};

primeFactor(12);