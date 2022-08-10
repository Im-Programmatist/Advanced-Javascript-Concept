//Keyed collections
// A Map object is a simple key/value map and can iterate its elements in insertion order.
const sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

/******Set object***********/
//Set objects are collections of values. You can iterate its elements in insertion order. 
//A value in a Set may only occur once; it is unique in the Set's collection.
const mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"

//*** Set Convert to Array ***/
console.log(Array.from(mySet));
mySet2 = new Set([1, 2, 3, 4]);
console.log([...mySet2]);
