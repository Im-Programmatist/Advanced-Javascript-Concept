//Map, reduce, and filter are all array methods in JavaScript. 
//Each one will iterate over an array and perform a transformation or computation. 
//Each will return a new array based on the result of the function.

/**
 * map creates a new array by transforming every element in an array individually. 
 * filter creates a new array by removing elements that don't belong. 
 * reduce , on the other hand, takes all of the elements in an array and reduces them into a single value. 
 * Just like map and filter , reduce is defined on Array.
*/

/**
 * Map
 * The map() method is used for creating a new array from an existing one, 
 * applying a function to each one of the elements of the first array.
 * Only array element is required , else index and aaray are not madetory
 */
{/*
    var new_array = arr.map(function callback(element, index, array) {
        // Return value for new_array
    }[, thisArg])

    map(function(element, index, array) { ... }, thisArg)
*/}

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]
const numbers2 = [1, 4, 9];
const roots = numbers2.map((num) => Math.sqrt(num));
// roots is now     [1, 2, 3]

/**Using map to reformat objects in an array**/
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];
const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

/**Using map generically**/
const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));
// charCodes now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

const elems = document.querySelectorAll('select option:checked');
const values = Array.prototype.map.call(elems, ({ value }) => value);

/**
 * Filter
 * The filter() method takes each element in an array and it applies a conditional statement against it.
 * If this conditional returns true, the element gets pushed to the output array. 
 * If the condition returns false, the element does not get pushed to the output array.
 * parameter re same as map only element is requeired
 * let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);
 */
 const numbers3 = [1, 2, 3, 4];
 const evens = numbers3.filter(item => item % 2 === 0);
 console.log(evens); // [2, 4]

 const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]

/**
 * Reduce
 * The reduce() method reduces an array of values down to just one value. 
 * To get the output value, it runs a reducer function on each element of the array.
Syntax
arr.reduce(callback[, initialValue]); OR
let newArray = arr.filter(callback(currentValue, accumulatedValue) {
  // return the accumulated value, given the current and previous  accumulated value
}, initialValue[, thisArg]);

The callback argument is a function that will be called once for every item in the array. 
This function takes four arguments, but often only the first two are used.

accumulator - the returned value of the previous iteration
currentValue - the current item in the array
index - the index of the current item
array - the original array on which reduce was called
The initialValue argument is optional. 
If provided, it will be used as the initial accumulator value in the first call to the callback function
*/
const numbers5 = [1, 2, 3, 4];
const sum = numbers5.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});
console.log(petCounts); 