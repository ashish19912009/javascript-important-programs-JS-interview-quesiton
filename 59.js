const arr1 = [1,2,3,4,5,6,7,8,9,10]

function getPair(arr1, val) {

    let sumLookUp = {}
    let output = []
    for(var i = 0; i <=arr1.length - 1; i++)
     {
         let targetValue = val - arr1[i];
         if(sumLookUp[targetValue])
            {
                output.push([arr1[i], targetValue])
            }
        sumLookUp[arr1[i]] = true;
     }
     return output;
}

console.log(getPair(arr1, 6));