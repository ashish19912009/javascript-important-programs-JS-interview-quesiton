
const leapYear = (year) => {
    return (year % 100 === 0 ) ? (year % 400 === 0) : (year % 4 === 0)
}

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(2007));
console.log(leapYear(2200));
console.log(leapYear(2400));

