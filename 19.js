

function check (arr,e) {
    var hasOne = false;
    for(var i of arr)
    {
        if(i === e)
            if(hasOne)
                return false;
            else
                hasOne = true;
    }
    return hasOne;
}

function getDuplicate (arr) {
    var new_arr = [];
    for(var i in arr)
    {
        if(check(arr, arr[i]) === false)
        {
            new_arr.push(arr[i]);
        } 
    }
    console.log(new_arr);
}

getDuplicate([1,2,3,1,3]);
getDuplicate([1, 2, 3, 4, 5]);
getDuplicate([5, 5, 5, 5, 5]);
getDuplicate([10, 9, 10, 10, 9, 8]);

// ES-6 Way
console.log("-------- ES6 Type ------");
const checkInt = (arr,e) => {
        return arr.filter(el => el===e).length > 1;
}

const checkFunc = (arr) => {
    const temp =[];
    for(i of arr)
        // console.log(checkInt(arr,i));
        if(checkInt(arr,i) === true)
            {temp.push(i);}
    console.log(temp);
}

checkFunc([1,2,3,1,3]);
checkFunc([5, 5, 5, 5, 5]);
checkFunc([10, 9, 10, 10, 9, 8]);