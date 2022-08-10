/**
 * Temporal Dead Zone
 * 
 * In js we can have block scope {}
 * Before ES6 there was no other way to declare variables other than var.But ES6 has us let and const.
 * let and const declarations are both block-scoped,which means they are only accessible within the { }
 * var, on the other hand, doesn't have this restriction
 * 
 */
 
var x = 1;
var y = true;

let x_let = 1;
let y_let = true;

if (y) {
    var x = 2; 
}

if (y_let) {
	let x_let = 2; //it is not reachable out
    //this not alter value of global babyAgeLet
}

console.log(x); // Ah! This prints 2, 
console.log(x_let); // This prints 1 of global variable

/**
 * The final salient difference between let/const and var is ----
 * that if you access var before it's declared, it is undefined. 
 * But if you do the same for let and const, they throw a ReferenceError. 
 */
 console.log(varNumber); // undefined
 console.log(letNumber); //   throws a ReferenceError letNumber is not defined
 
 var varNumber = 1;
 let letNumber = 1;

/**
 * Why does the TDZ exist between the top of the scope and the variable declaration? 
 * What's the specific reason for that?
 * It's because of hoisting.
 * The JS engine that is parsing and executing your code has 2 steps to do:
    1. Parsing of the code into an Abstract Syntax Tree/executable byte code, and
    2. Run time execution.
    - Step 1 is where hoisting happens, and this is done by the JS engine. 
    - It essentially will move all your variable declarations to the top of their scope.

 * When variables get hoisted, var gets undefined initialized to its value by default in the process of hoisting. 
 * let and const also get hoisted, but don't get set to undefined when they get hoisted.
 * And that's the sole reason we have the TDZ. Which is why it happens with let and const but not var.
*/
let a = f(); // 1
const b = 2;
function f() { return b; } // 2, b is in the TDZ

/**
 * To try and access a variable before it is declared is the wrong way round, and shouldn't be possible.
 * What will be the variable let or const store before it's initialization , this is the question and it is bad practice
 * Always make sure you define your lets and consts at the top of your scope.
*/

{
    // x TDZ starts here (at the beginning of this block’s local scope)
    // x TDZ continues here
    // x TDZ continues here
    // x TDZ continues here
    console.log(x); // returns ReferenceError because x TDZ continues here
    // x TDZ continues here
    // x TDZ continues here
    let x = "Vegetable Fried Rice"; // x TDZ ends here
    // x TDZ does not exist here
    // x TDZ does not exist here
    // x TDZ does not exist here
}
/**
 * TDZ is - range between variable declaration and iniatialization for let and const 
*/