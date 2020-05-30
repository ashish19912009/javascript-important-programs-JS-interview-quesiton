var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// ES6 Version
console.log(Array.from(new Set(array)));

// ES5 Version
function uniqueArray(array) {
    var hashmap ={}
    var unique = []

    for(var i = 0; i < array.length; i++)
    {
        if(!hashmap.hasOwnProperty(array[i]))
        {
            hashmap[array[i]] = 1;
            unique.push(array[i])
        }
    }
    return unique;
}

console.log(uniqueArray(array));
