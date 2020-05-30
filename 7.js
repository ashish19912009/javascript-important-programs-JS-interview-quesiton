
 for(var i = 2014; i <= 2050; i++)
 {
     let abc = new Date(`01-01-${i}`);
     let temp = abc.getDay();
     if(temp === 0)
         console.log(`Is Sunday on : ${abc}`);
 }

// for(var i = 2014; i <= 2050; i++)
// {
//     var abc = new Date(i,0,1);
//     console.log(abc);
//        //  abc.getDay === 0 ? console.log(`Is Sunday on : ${abc}`) : null
// }