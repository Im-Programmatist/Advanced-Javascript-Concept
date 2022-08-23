/***
     * The fill() method changes all elements in an array to a static value, 
     * from a start index (default 0) to an end index (default array.length)
     * syntax - fill(value, start, end)
     */
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));// expected output: [6, 6, 6, 6]

/**
 * The @@unscopables data property for Array.prototype 
 * This causes the Array properties introduced in ECMAScript 2015 to be ignored for 
 * with statement-binding purposes — allowing code that was written prior to 
 * ECMAScript 2015 to continue working as expected, rather than breaking.
*/
var keys = [];

with (Array.prototype) {
  keys.push('something');
}

console.log(Object.keys(Array.prototype[Symbol.unscopables]));
// ["at", "copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]

/**
 * The @@iterator method is part of The iterable protocol, 
 * that defines how to synchronously iterate over a sequence of values.
*/
const array2 = ['a', 'b', 'c'];
//const iterator1 = array2[Symbol.iterator]();
//console.log("iterator1 : ",iterator1);
for (const value of array2) {
  console.log(value);
}

/**
 * Array at
*/
let index = 2;
console.log(`Using an index of ${index} the item returned is ${array2.at(index)}`);

/**
 * Concat
 */
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const array3 = arr1.concat(arr2);
console.log(array3);

/**
 * copyWithin() method shallow copies part of an array to another location in the same array 
 * and returns it without modifying its length
*/
const alphaArr = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(alphaArr.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
console.log(alphaArr.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

/**
 * The entries() 
 * returns a new Array Iterator object that contains the key/value pairs for each index in the array.
*/
const ar = ['a', 'b', 'c'];
const iterator1 = ar.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]

/**
 * every() method tests whether all elements in the array pass the test implemented by the provided function. 
 * It returns a Boolean value.
*/
const isBelowThreshold = (currentValue) => currentValue < 40;
const arry1 = [1, 30, 39, 29, 10, 13];
console.log(arry1.every(isBelowThreshold));
// expected output: true

// comparing arrays to check for equality - method 1
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [1, 2, 3];

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

arrayEquals(a, b);
// false
arrayEquals(a, c);
// true

/**
 * The filter() method creates a shallow copy of a portion of a given array
*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

/**
 * find()
*/
const aray1 = [5, 12, 8, 130, 44];
const found = aray1.find(element => element > 10);
const isLargeNumber = (element) => element > 13;
console.log(aray1.findIndex(isLargeNumber));
//work in firefox nightly, not in edge and chrome
//const foundlast = aray1.findLast((element) => element > 45);
//console.log(foundlast);

/**
 * The Array.from() static method creates a new, 
 * shallow-copied Array instance from an iterable or array-like object.
*/
//from foo string to iterable array elements
console.log(Array.from('foo'));


/**
 * The Array.from() static method creates a new, 
 * shallow-copied Array instance from an iterable or array-like object.
*/
//from foo string to iterable array elements
console.log(Array.from('foo'));

/**
 * group()
 * works only in firefox nightly browser
*/
// const inventory = [
//     { name: 'asparagus', type: 'vegetables', quantity: 5 },
//     { name: 'bananas',  type: 'fruit', quantity: 0 },
//     { name: 'goat', type: 'meat', quantity: 23 },
//     { name: 'cherries', type: 'fruit', quantity: 5 },
//     { name: 'fish', type: 'meat', quantity: 22 }
// ];
// console.log(inventory.group(({ type }) => type));
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

/**
 * The Array.of() method creates a new Array instance from a variable number of arguments,
 * regardless of number or type of the arguments.
 */
Array.of(7); // [7]
Array(7); // array of 7 empty slots
 
/**
 * join
*/
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

/**
 * pop() method removes the last element from an array and returns that element.
 * push() method adds one or more elements to the end of an array and returns the new length of the array
*/
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
const newPushedArr = plants.push('tulsi');
console.log(newPushedArr);

/**
 * reverse() method reverses an array in place
*/
const arra1 = ['one', 'two', 'three'];
const reversed = arra1.reverse();
console.log('reversed:', reversed);

/**
 * unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
*/
const aay1 = [1, 2, 3];
console.log(aay1.unshift(4, 5));
console.log(array1); //[4,5,1,2,3]

/**
 * slice() method returns a shallow copy of a portion of an array into a new array object 
 * selected from start to end (end not included) where start and end represent the index of items in that array. 
 * The original array will not be modified.
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));

/**
 * some() method tests whether at least one element in the array passes the test implemented by the provided function. 
 * It returns true if, in the array, it finds an element for which the provided function returns true; 
 * otherwise it returns false. It doesn't modify the array.
 */
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));

/**
 * Compaire array variable with string representation
*/
console.warn("Compaire array variable with string representation -- ");
var aa = [3,6,12,24]; 
var bb = ["3","","6","12","24"];
var cc = "3,6,12,24";
console.log(aa==bb);//false
console.log(aa==cc);//True -- as array aa represents as aa.toString() while compairing with string cc
console.log(bb==cc);//false

//Compaire wioth object/variable type 
console.log(aa===bb);//false
console.log(aa===cc);//false 
console.log(bb===cc);//false
