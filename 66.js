const arr = [1,4,2,50,35,21,15,19,88];
// const arr = [1,2,3,4,5,6,7,8,9];

function minimum(arr, k, n){
    var MIN = arr[k];
    var LOC = k;
    for(var j = k+1; j < n-1; j++){
        if(MIN > arr[j])
            {
                MIN = arr[j];
                LOC = j;
                console.log(`MIN Val ${MIN}`)
            }
    }
    return LOC;
}

function selectionSort(arr) {
    let LOC, temp
    for(var i = 0; i < arr.length-2; i++) {
        LOC = minimum(arr,i,arr.length)
        console.log(LOC);
        temp = arr[i]
        arr[i] = arr[LOC];
        arr[LOC] = temp
    }
    return arr;
}

console.log(selectionSort(arr));

// Time Complexity

//      Best - Omega (n^2)
//      Worst - Big O(n^2)
//      Avg   - Theta (n^2)