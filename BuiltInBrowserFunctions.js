// the replace() string function takes a source string, and a target string and replaces the source string,
// with the target string, and returns the newly formed string
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);

//the join() function takes an array, joins all the array items together into a single string, 
//and returns this new string
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);

//Generate Random Number
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

//Anonymous functions
(function () {
    alert('hello');
  })
//call back function is also a anonymous function
textBox.addEventListener('keydown', function(event) {
console.log(`You pressed "${event.key}".`);
});
  
// parseFloat()
// The parseFloat() function parses a string argument and returns a floating point number.

// parseInt()
// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

// decodeURI()
// The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.
