const check = (x,y) => {
    if(x === 50 || y === 50 || (x+y) === 50)
        return true;
    else
        return false;
}

console.log(check(50,60));
console.log(check(25,25));
console.log(check(60,60));

