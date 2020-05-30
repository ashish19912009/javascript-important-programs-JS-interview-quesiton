const arr = [1,4,2,50,35,21,15,19,88];
// const arr = [1,2,3,4,5,6,7,8,9];
function bubbleSort(arr) {
    for(var i = 0; i<arr.length-1;i++)
        {
            let flag = 0;
            for(var j = 0; j < arr.length - i -1; j++)
                {
                    let temp = 0;
                    if(arr[j] > arr[j+1])
                        {
                            temp = arr[j];
                            arr[j] = arr[j+1]
                            arr[j+1] = temp
                            flag++;
                        }
                }
            if(flag === 0)
                break;
        }
    return arr;
}
console.log(bubbleSort(arr));

// Time Complexity

//      Best - Omega (n)
//      Worst - Big O(n^2)
//      Avg   - Theta (n^2)