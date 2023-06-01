/**
 * Enumerables:
    - Enumerables refer to properties in an object that can be iterated over using a for...in loop. 
    - Enumerables include all the properties of an object that are directly accessible and can be enumerated.
    - The for...in loop iterates over the enumerable properties of the person object (name, age, and city).
    - Enumerables are typically used with objects and are not specific to iteration order.
    - Example: Enumerating over the properties of an object using a for...in loop

 * Iterables: 
    - Iterables are objects that implement the iterable protocol., aallow them to be iterated over using the for...of loop  or other iterable-consumer methods.
    - They define a method called [Symbol.iterator] that returns an iterator object.
    - Iterators provide a way to traverse a collection one element at a time.
    - Iterables are used with various built-in JavaScript objects like arrays, strings, maps, sets, etc., and can define their own custom iteration behavior.
    - Example: Iterating over an array using a for...of loop.
*/

/**
 * Both Enumerables & Iterables Data Type In Javascript : 
 * In JavaScript, several data types are both enumerable and iterable, meaning they can be iterated over using various looping constructs and methods. 
 * Arrays: 
    - Arrays in JavaScript are both enumerable and iterable. 
    - They can be iterated over using the for...of loop, Array.forEach(), or other iterable-consumer methods.
 * Strings: 
    - Strings are also both enumerable and iterable. 
    - The characters of a string can be iterated over using the for...of loop or other iterable-consumer methods.
 * Maps: 
    - Maps in JavaScript are enumerable and iterable data structures that store key-value pairs. 
    - They can be iterated over using the for...of loop, Map.forEach(), or other iterable-consumer methods.
 * Sets: 
    - Sets are enumerable and iterable data structures that store unique values. 
    - They can be iterated over using the for...of loop or other iterable-consumer methods.
*/
/*Array*/
const array = [1, 2, 3];
for (let item of array) {
  console.log(item);
}
for (let index in array) {
    console.log(index + ': ' + array[index]);
}
/*String*/
const str = 'Hello';
for (let char of str) {
    console.log(char);
}
for (let index in str) {
    console.log(index + ': ' + str[index]);
}
/*Map*/
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
for (let [key, value] of map) {
  console.log(key + ': ' + value);
}
/*Sets*/
const set = new Set([1, 2, 3]);
for (let item of set) {
  console.log(item);
}

/**
 * Only Enumerable Datatype in Javascript: 
 * Objects :  by default, are not directly iterable. 
    - However, objects can still be enumerable, allowing iteration over their properties using for...in loops. 
    - To make objects iterable, you can define a custom [Symbol.iterator] method.
*/
const obj = { name: 'John', age: 30 };
for (let key in obj) {
  console.log(key + ': ' + obj[key]);
}
/*---If you want to travers through object prop using for...of*/
for (const key of Object.getOwnPropertyNames(obj)) {
    console.log(key)
    // console.log(`${key}: ${motorcycle[key]}`)
}// O/p - name, age(key provided)
/**
 * Only Iterables Datatypes in Javascript 
 * 1. Arguments object: 
    - The arguments object available within function scopes is iterable, but it is not enumerable. 
    - It allows you to access the arguments passed to a function as if it were an array.
   2. Generators: 
    - Generator functions in JavaScript produce iterable generator objects using the function* syntax. 
    - These generator objects can be iterated over, but they are not enumerable.
 */
/*Arguments*/
function myFunction() {
    for (let arg of arguments) {
        console.log(arg);
    }
}
myFunction('Hello', 'World');
/*Generators*/
function* myGenerator() {
    yield 'Hello';
    yield 'World';
}
const generator = myGenerator();
for (let value of generator) {
    console.log(value);
}

/**
 * Difference between enumerables and enumerators
 * Enumerables:
    - Enumerables refer to objects or collections that can be iterated over using various looping constructs 
    - like for...of loops, Array.forEach(), or by manually accessing their elements. 
    - Enumerables include arrays, strings, maps, sets, and objects with enumerable properties.
 */
const Enumerables = [1, 2, 3];
for (let item of Enumerables) {
    console.log(item);
}
/**
 * Enumerators:
    - Enumerates are less commonly use in js, generally we use for...of 
    - Enumerators allow you to manually control the iteration process and retrieve the elements one at a time. 
    - They provide more flexibility compared to the for...of loop, 
      as you can decide when to retrieve the next element and handle the iteration state accordingly.
    - Enumerators are objects that facilitate the iteration over enumerables by providing an interface to access the elements of the enumerable sequentially. 
    - Enumerators have a next() method that returns the next element in the iteration and tracks the iteration state.
    - Enumerators are typically obtained by invoking the [Symbol.iterator] method on an enumerable. 
    - The [Symbol.iterator] method returns an iterator object that implements the iterator protocol. 
    - The iterator object, in turn, has the next() method.
*/
const Enumerables2 = [1, 2, 3];
const iterator = Enumerables2[Symbol.iterator]();
console.log(iterator.next());  // { value: 1, done: false }
console.log(iterator.next());  // { value: 2, done: false }
console.log(iterator.next());  // { value: 3, done: false }
console.log(iterator.next());  // { value: undefined, done: true }
/* In this example, array is an enumerable object (an array). 
By invoking the [Symbol.iterator]() method on array, we obtain an iterator object (iterator). 
The iterator's next() method is then called to retrieve the next element in the iteration. 
The next() method returns an object with the value property containing the current element 
and the done property indicating if the iteration is complete. */

/**
 * Calling an iterator explicitly, We’ll iterate over a string in exactly the same way as for..of, but with direct calls.
 */
let strsample = "Hello";
// does the same as
// for (let char of str) alert(char);
let iteratorSample = strsample[Symbol.iterator]();
while (true) {
  let result = iteratorSample.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

/**
 * Convert Object To Array : -
 * We can convert enumerable to iterable using Array.from()
*/
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
}; //It is array like structure as it has index and length prop but not iterable
// Converting 
let arr = Array.from(arrayLike); // (*)
alert(arrayLike);
alert(arr.pop()); // World (method works)

/**
 * Does enumerators and iterators are same? as both allow us to traverse.
    ---> Enumerators is object that facilitated the iteration over enumerables
        with having next() method that returns the next element in the iteration and tracks the iteration state.
    ---> iterable is an object that implements the iterable protocol, allowing it to be iterated over using the for...of loop 
        or other iterable-consumer methods., must have a [Symbol.iterator] method that returns an iterator object.
    *** While enumerators are used to control the iteration process and provide the next element, 
        iterables define the overall iterable behavior and provide an iterator object.
*/
