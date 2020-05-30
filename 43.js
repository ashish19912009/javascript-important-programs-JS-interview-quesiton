function fibonacci(n){
    var fibo = [0, 1];
    
    if (n <= 2) return 1;
  
    for (var i = 2; i <=n; i++ ){
     fibo[i] = fibo[i-1]+fibo[i-2];
    }
  
   return fibo;
  } 

  console.log(fibonacci(12))

  var temp = [0,1];

  function fibonacciReverse(n){
      if(n <=2)
      {
          return 1;
      }
        
        return fibonacciReverse(n-1) + fibonacciReverse(n-2)
  }
  console.log(fibonacciReverse(12))