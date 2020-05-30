let text = 'w3resource';

// console.log(strings.data);

// let text = strings;

// console.log(text.substr(text.indexOf('r'),5)); - Get the string starting from first 
// occourance of r till next 5 letters.

// console.log(text[5]); - Prints letter postioned at 6th position of the array

for(let i =0; i < text.length; i++)
  {
    text = text[text.length - 1] + text.substring(0,text.length - 1);
    console.log(text);
  }