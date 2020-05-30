
// Test Cases : 0, 1, 153, 370, 371, 407

let abc = 0;
let b = abc;
let d = 0;
let e = 0;
 while(parseInt(abc)>0)
 {
     e = abc%10;
     abc = parseInt(abc/10);
     d = d + (e*e*e);
 }
 if(d === b)
 {
    console.log("Given no is amstrong number");
 } else{
    console.log("Given no is not amstrong number");
 }