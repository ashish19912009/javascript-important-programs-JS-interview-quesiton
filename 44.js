function greatestCommonDivisor(a, b){
    if(b == 0)
      return a;
    else 
      return greatestCommonDivisor(b, a%b);
 }

 console.log(greatestCommonDivisor(75, 1024));