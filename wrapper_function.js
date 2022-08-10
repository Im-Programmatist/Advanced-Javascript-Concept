
/*
Wrapper Function
*/
/*
In programming languages such as JavaScript, a wrapper is a function that is intended to call 
one or more other functions, sometimes purely for convenience, and sometimes adapting them
 to do a slightly different task in the process.
*/
//In a programming language that does not support multiple inheritance of base classes, wrapper functions can be used to simulate it.


/*********There are two scenarios that come to mind for wrapping functions:*****/

//When you need to add some common functionality to many existing functions.
//When you are using function in a library that you want to add functionality to 
//and you don't want to alter the function itself.

//Limitation
/*
This wrapping is thorough, but there are always limitations in JavaScript. 
Specifically, it’s difficult to correctly wrap a function with a non-standard prototype, 
such as an object constructor. 
This is a use case better solved by inheritance.
*/

//simple function add
function add(x, y) {
    return x + y;
}
console.log(add(1,3)); // 4
//If we wanted to create another add function that also logs the arguments, 
//we could do so by wrapping the function:
function wrap(oldFunction) {
    // return a new function that will call the oldFunction
    // with all of the arguments passed to it
    return (...args) => {
      // log the arguments passed to the wrapped function
      console.log(args);
      // call the old function with all of the arguments
      return oldFunction(...args);
    }
  }
  
  // create the newly wrapped add function
  const newAdd = wrap(add);
  
  const sum = newAdd(1, 3); // [1, 3]
  console.log(sum); // 4
//Now the both functions newAdd and add, works same but newAdd console the passed argument
