let today = new Date();
console.log(today.getMonth());
console.log(today.toString());
let dd = today.getDate();
let mm = today.getMonth()+1;
let year = today.getFullYear();

if(dd < 10)
    dd = '0' + dd;

if(mm < 10)
    mm = '0' + mm;

console.log(`${dd}-${mm}-${year}`);
console.log(`${dd}/${mm}/${year}`);