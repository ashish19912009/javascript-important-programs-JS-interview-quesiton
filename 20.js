
// array sorting

function arraysorting(arr) {

    for(var i = 0; i< arr.length; i++)
    {
        for(var e = i+1; e < arr.length; e++)
        {   
            if(arr[i] > arr[e])
                {
                    var temp = arr[e];
                    arr[e] = arr[i];
                    arr[i] = temp;
                }
        }
    }
   if(arr.length % 2)
    {
        console.log("mediam is : ",arr[(arr.length-1)/2])
    } else{
        const avg = (arr[((arr.length)/2)-1] + arr[((arr.length)/2)])/2;
        console.log("mediam is : ",avg);
    }
}

arraysorting([1,10,99,37,20,15,45,20,55,87]);

console.log("-----------ES-6 ------------");

const funcMedian = (arr) => {
    arr.sort((a,b) => a-b);
    if(arr.length%2)
        console.log(`Median is : ${arr[((arr.length-1)/2)]}`);
    else
        console.log(`Median is : ${(arr[((arr.length)/2)-1]+arr[(arr.length)/2])/2}`);
}
funcMedian([1,10,99,37,20,15,45,20,55,87]);