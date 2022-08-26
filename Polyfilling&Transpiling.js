/**
 * Polyfilling & Transpiling
 * We can add new function or property to built in prototype called polifilling
 * We wil use The Prototypal Inheritance for polifill explanation.
 * We can create our own bind function (if not aware of bind function please check Borrowing FUnction Topic in project)
 */

/**
 * Polyfilling
 * A polyfill provides the functions and features that the developer expects the browser to offer by default. 
 * Basically, using polyfill wanted a term to describe reproducing an API using JavaScript (or Flash or whatever), 
 * if the browser does not have it natively
 */

//We can polyfill anything using prototype

var a = [1,2,3,4,5];
//we can apply foreach loop on array 
a.forEach((val)=>{
    console.log("value of array in foreach - ", val);
});
//Using polyfill we can access encapsulated built in property/functions and alter it for our use 
//Array.prototype.forEach = null
//THis leads to error for next foreach loop - Uncaught TypeError: a.forEach is not a function
//Previous loop will work fine but next comming foreach would not be run
// a.forEach((val)=>{
//     console.log("value of array in foreach - ", val);
// });

/**
 * Using polyfill we can add new method or properties to built in function and 
 * Can use through out the program easily
 */

var nameObj = {
    fname:"chetan",
    lname:"korde"
}
let printName = function() {
    //we have created file over the argument in this advanced js project
    //please refer if use of this argument not understand
    var arr = Array.from(arguments);
    var consoleName = `${this.fname} ${this.lname} `;
    arr.forEach((item)=>{
        consoleName += item+' ';
    });
    console.log(consoleName);
    
}
let printMyName = printName.bind(nameObj);

Function.prototype.myNameBind = function(...args){
    //this --> passing function (printName here)
    let objThis = this;
    params = args.slice(1);
    return function(...args2){
        //objThis.call(args[0],...params,...args2)
        //Call method takes separeted valye so we need to use apply method as it takes array as param
        objThis.apply(args[0],[...params,...args2]);
    }
}
let print2 = printName.myNameBind(nameObj,"Amravati","Maharashtra","India");
print2("Earth","Sun Solar System");//parameter for insider function

const arr = [1, 2, 3, 4, 5];
function myFunction(ele) {
    console.log(ele);
}
Array.prototype.myForEach = function (callback) {
    for (const i in this) {
        callback(this[i]);
    }
};  
arr.myForEach(myFunction);

/**
 *Prototype of Function and Array is in depth is Object
 //******THis is why everything in JS is Object 
 */
//this is default functionality provided by object
console.log(Array.prototype); //this will be array and properties in it 
//but if we find prototype of this array it will be object
console.log(Array.__proto__.__proto__);
console.log(Function.__proto__.__proto__);
console.log(Object.__proto__.__proto__); 
//Above all console will print same value

/**
 * Transpiling -
 * This process is commonly called “transpiling” a term for transforming + compiling. 
 * Babel (formerly 6to5): Transpiles ES6 and above into ES5
 * Traceur: Transpiles ES6, ES7, and beyond into ES5
 */
/**
 * Transpilers transform the code of a language into another form of the same language. 
 * Like ES6 have new function that not available in ES5 then transpiler translates a ES6 COde to ES5.
 * So a JavaScript transpiler converts a form of JS code to another form of JS
 */
//A polyfill will try to emulate certain APIs, so can use them as if they were already implemented. 
//A transpiler on the other hand will transform your code and replace the respective code section by other code, which can already be executed.
//The difference is that a compiler translates to something at a lower level of abstraction, 
//while a transpiler produces an output at a similar level of abstraction of the input.
