
const math = {
    name: 'Ashish',
    factit: function factorial (n) {
        if(n > 1)
        {
            return n * factorial(n-1);
        } else{
            return 1;
        }
    }
}

console.log(math.factit(5));