
const binarySearch = (arr,searchElement) => {
    
    let n = arr.length - 1;
    let first = 0;

    while(1 <= n)
    {
    let mid = Math.ceil(first + (n - first)/2);
        if(arr[mid] === searchElement)
        {
            return mid;
        }
        if(arr[mid] < searchElement)
            {
              first = mid + 1;   
            }
        else
        {
             n = mid - 1;
        }
    }


};

console.log(`Position of Element is : `,binarySearch([10,15,27,49,66,70,90,120,110,115],27));