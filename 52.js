
Array.prototype.average = function() {
    const sum = this.reduce((prev, cur) => prev+cur);
    return sum / this.length;
}


console.log([1,2,3,4,5].average())