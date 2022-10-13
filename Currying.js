/**
 * Function Currying
 * 
 * Currying is a function that takes one argument at a time and returns a new function expecting 
   the next argument. It is a transformation of functions that translates a function 
   from callable as f(a, b, c) into callable as f(a)(b)(c).
 **/

/*Currying simply means evaluating functions with multiple arguments 
and decomposing them into a sequence of functions with a single argument.

Currying technique with the help of closures ---

Closure always contains the function definition along with the lexical environment of the parent, 
both things remain connected as a bundle. Hence, it does not matter where we invoke them, 
the all inner functions will always hold access to the variable of their parent.

As we have got the returned result as a function the next argument is ready to be passed, 
this process will continue till the second last function. 
Finally, the innermost return keyword returns the expected result.
*/

import _ from 'underscore';

const notCurry = (x, y, z) => x + y + z; // a regular function
const curry = x => y => z => x + y + z; // a curry function
console.log(notCurry(10,20,30), curry(40)(50)(60));

//currying applied on a familiar JavaScript method and generating new functions using it:
// JavaScript substring: str.substr(start[, length])
const curriedSubstring = start => length => str => str.substr(start, length);
const getSubstring = (start, length, str) => curriedSubstring (start) (length) (str);
const getFirstCharacters = (length, str) =>
curriedSubstring (0) (length) (str);
const getFirstCharacter = str => curriedSubstring (0) (1) (str);

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));

//we have a logging function log(date, importance, message) that formats and outputs the information.

function log(date, importance, message) {
    alert(`[${date.getHours()}: ${date.getMinutes()}] [${importance}] ${message}`);
}

var curried = _.curry(log);

// Normal Way : log(a, b, c)
log(new Date(), "DEBUGGING", "some message");
// Currying : log(a)(b)(c)
log(new Date())("DEBUGGING")("some message");

// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());

// use it
logNow("ERROR", "message"); // [HH:mm:yyyy] ERROR message

let debugNow = logNow("DEBUGGING");
debugNow("message"); // [HH:mm:yyyy] DEBUGGING message

//We didn’t lose anything after currying: log is still callable normally.
//We can easily generate partial functions such as for today’s logs.

