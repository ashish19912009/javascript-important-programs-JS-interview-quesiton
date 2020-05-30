
function decimalToBinary(num) {

    if(num >=1)
    {
        if(num % 2)
            return decimalToBinary((num-1)/2) + 1;
        else
            return decimalToBinary((num/2)) + 0;
    }
    else
        return '';
}

console.log(decimalToBinary(4));