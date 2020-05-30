// Array
const arr = [-10, 7, 29, 30, 5, -10, -70];

function integerSort(a,b) {
    return a - b
}

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)

function computedProduct(arr) {

    arr.sort(integerSort);
    let product1 = 1, product2 = 1, len = arr.length - 1;

    for(var x = len ; x > len -3; x--)
        product1 *= arr[x]
    
    product2 = arr[0] * arr[1] * arr[len];

    if(product1 > product2)
        return product1;
    else
        return product2;
}       

console.log(computedProduct(arr));
