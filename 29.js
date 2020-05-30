
const fibonacci = (n) => {

    if(n ==0)
    {
        console.log("Fibonacci is :", 0);
    }        
    else if(n == 1)
    {
        console.log("Fibonacci is :", 1);
    }
    else{

        let fn = [];
        fn[0] = 0;
        fn[1] = 1;
        for(i=2; i<=n; i++)
        {
            fn[i] = fn[i-1] + fn[i-2];
        }
        console.log("Fibonacci is :", fn[n]);
    }
};

fibonacci(9);