
var today = new Date();

// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getFullYear()+1);
console.log(today.getTime());

var cmas = new Date(today.getFullYear(), 11,25);

if(cmas.getMonth === 11 && cmas.getDate() > 25)
{
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day = 1000*60*60*24;
// console.log(one_day);
// console.log(cmas);
console.log(Math.ceil((cmas.getTime() - today.getTime())/(one_day)),"Days left for next christmas !!!");