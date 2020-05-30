const fileName = 'ashish.php.html';

const abc = fileName.split('.');

console.log(abc);
// Output - [ 'ashish', 'php', 'html' ]
/**
 * 
 * Note: When the string is empty, split() returns an array containing one empty string, rather than an empty array. 
 * If the string and separator are both empty strings, an empty array is returned.
 * 
 */

const fileName2 = 'test.php.html';
console.log(fileName2.split('.').join('/'));

// Output - test/php/html

const fileName3 = 'yetanothertesting/testingmany/testingnone';
console.log(fileName3.split(''));