const var_name = 'abc';

const n = 100;

console.log(var_name);
console.log(this[var_name]);

this[var_name] = n;

console.log(this[var_name]);
console.log(var_name);