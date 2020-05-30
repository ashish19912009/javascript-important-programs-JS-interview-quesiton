
function checkCallback(arr, callback) {
    arr.push(100);
    callback();
}

const arr = [1,2,3,4,5];

const fn = function(){
    console.log(arr);
};

checkCallback(arr, fn)