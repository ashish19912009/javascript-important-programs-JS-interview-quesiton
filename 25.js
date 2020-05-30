
const usingBSearch = (n,start,end) => {
    let mid = (start+end)/2;
    let mul = (mid * mid);
    if((mul === n) || (Math.abs(mul - n) < 0.00001))
    {
        // return Math.round(mid);
        return mid;
        }
     else if(mul > n)
     {
        const root1 = usingBSearch(n,start,mid);
        return root1;
     } else {
        const root2 =  usingBSearch(n,mid,end);
        return root2;
     }
}

const findRoot = (n) => {
    let found = false;
    let i = 0;
    while(!found)
    {
        if(i*i === n)
        {
            found = true;
            return i;
        }
        else if(i*i > n) { 
            const getRoot = usingBSearch(n,i-1,i);
            // console.log(getRoot);
            
            found = true;
            return getRoot;
        }
        i++;
    }
}



const n = 3;
console.log(`Squre root of ${n} : ${findRoot(n)}`);