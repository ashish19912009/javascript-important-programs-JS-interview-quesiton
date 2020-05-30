
const checkFibonacci = (n) => {

    let temp = (5*n*n) + 4;
    let temp1 = (5*n*n) - 4;

    let squrt1 = parseInt(Math.sqrt(temp));
    let squrt2 = parseInt(Math.sqrt(temp1));
    
    if(squrt1*squrt1 === temp || squrt2*squrt2 === temp1)
    {
        console.log(`${n} nos is Fibonacci number`);
    } else{
        console.log(`${n} nos is not Fibonacci number`);
    }
};

checkFibonacci(8);