
var array = [{ name1: "value1", age:28 }, { name2: "value2", temp:32 }];

var obj = {};

array.forEach(item => {
    // console.log(Object.keys(item));
    for(key in item) {
        obj[key] = item[key]
    }
});

console.log(obj);

const obj1 = { name1: "value1", age: 28 };
// console.log(Object.values(obj1));   ------------> Try these as well
// console.log(Object.entries(obj1));  ------------> Try these as well

const arr = [];

    for(key in obj1) {
        arr.push(key);
        arr.push(obj[key]);
    }

    console.log(arr);