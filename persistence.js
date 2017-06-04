'use strict';
//My solution
let persistence = (num) => {
    return `${num}`.length > 1
        ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b))
        : 0
};

/*let persistence = (num) => {
 let count = 0;
 if (!Array.isArray(num)) num = intToArray(num);

 while (num.length != 1) {
 count++;
 num = num.reduce(reducer);
 num = intToArray(num);
 }
 return count;

 }

 let intToArray = num => num.toString().split('');

 let reducer = ((p, c) => {
 if (c === undefined) {
 return p;
 } else {
 return p * c;
 }
 });*/

//Highest rated clever
/*const persistence = num => {
 return `${num}`.length > 1
 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
 : 0;
 };*/


//Darek Rossman solution
/*const persist = (num, times = 0) => {
 const arr = num.toString();
 return arr.length === 1 ?
 times : persist(arr.split('').reduce((a, b) => a * b), times += 1)
 }*/

console.log('\n' + persistence(39) + '\n');
console.log('\n' + persistence(999) + '\n');
console.log('\n' + persistence(4) + '\n');
console.log('\n' + persistence(47) + '\n');


