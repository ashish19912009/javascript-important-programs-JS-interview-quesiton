const arr1 = [1,2,3,4]

const arr2 = [3,4,5,6,7]

function getIntersection(arr1, arr2) {
    let hashMap = {};
    let retArr = [];

    arr1.forEach(element => {
        hashMap[element] = 1;
    });

    arr2.forEach(element => {
        if(hashMap[element] === 1)
            {
               retArr.push(element);
               hashMap[element]++; 
            }
    })
    return retArr;
}

console.log(getIntersection(arr1, arr2));