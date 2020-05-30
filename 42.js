function getPrimeFactor(n){
    var factors = [], 
        divisor = 3;
     
    while(n%2 === 0)
    {
        factors.push(2);
        n /= 2;
    }
    
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor+=2;
      }     
    }
    return factors;
  }

console.log(getPrimeFactor(1025));