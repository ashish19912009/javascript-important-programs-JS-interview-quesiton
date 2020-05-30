function swapNumb(a, b){ // a = 10, b = 8
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b -a;
    console.log(b); // b = -2
    a = a+ b;
    console.log(a); // a = 8
    b = a-b;
    console.log(b); // b = 10
    console.log('after swap: ','a: ', a, 'b: ', b);  
  }

  swapNumb(10, 8);

  function swapNumb1(a, b){
    console.log("a: " + a + " and b: " + b);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log("a: " + a + " and b: " + b);
  }

  swapNumb1(250, 189);