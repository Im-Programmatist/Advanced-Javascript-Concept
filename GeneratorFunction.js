/**
 * function*
 * The function* declaration (function keyword followed by an asterisk) 
 * a generator function, which returns a Generator object.
 */

//Generators are functions that can be exited and later re-entered. 
//Their context (variable bindings) will be saved across re-entrances.

// A generator-function is defined like a normal function, but whenever it needs to generate a value, 
//it does so with the yield keyword rather than return. 
//The yield statement suspends function’s execution and sends a value back to caller, 
//but retains enough state to enable function to resume where it is left off.
//When resumed, the function continues execution immediately after the last yield run. 
function* generator(i) {
    yield i;
    yield i + 10;
    // we can do it.return() to finish the generator
    return;
}
const gen = generator(10);
console.log(gen.next().value);// expected output: 10
console.log(gen.next().value);// expected output: 20

async function* foo() {
    yield await Promise.resolve('a');
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
}

let str = '';

async function generate() {
    for await (const val of foo()) {
        console.log("val - ",val)
        str = str + val;
    }
    console.log(str);
}

generate();
// expected output: "abc"

function* getEvenNumber(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2 === 0) yield arr[i];
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = getEvenNumber(numbers);
console.log(filteredNumbers.next().value);
for(const a of filteredNumbers){
    console.log(a);
}