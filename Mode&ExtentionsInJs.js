/**Modes
 * *non-strict mode referred to as sloppy mode. 
 * *ES6 modules and classes are strict by default.
 * *Strict mode is enabled by default in js file
 * *Strict mode will throw reference error when found non declared variables and in some cases.
 * If we get value of this(global var) undefined then we are in strict mode
 * "use strict" - used to on strict mode and "non-strict" for no strict mode
 * To use non strict mode change extention to .cjs as it is not set mode by default strict like .js and .ejs
 * Duplicating a parameter name is not allowed in strict mode
 * Deleting a variable (or object) and a function is not allowed in strict mode
 * Using strict mode, don’t allow to use a variable without declaring it. x=10 is not allowed in strict mode.
 */
//this inside a function called in the global context 
//will not point to the global object can be used to detect strict mode:
function globalFun(){
    if(this===undefined){
        console.log("We are in strict mode!!");
    }else{
        console.log("We are in non-strict mode!!");
    }
}//funtion is in global context
globalFun();

/**Extentions
 * *Node.js's original module system is CommonJs (which uses require and module.exports).
 * *Node.js will treat .cjs files as CommonJS modules and .mjs files as ECMAScript modules. 
 * *It will treat .js files as whatever the default module system for the project is 
 * (which is CommonJS unless package.json says "type": "module",).
 * Uses of different extentions have performance benifits
 * *V8(JavaScript engine that powers Google Chrome) recommends the use of .mjs but it still depends on our situation
 * While CommonJS and ES6 modules share similar syntax, they work in fundamentally different ways: 
        ES6 modules are pre-parsed in order to resolve further imports before code is executed. 
        CommonJS modules load dependencies on demand while executing the code.

 * CommonJS uses the require('./file.js') syntax for importing other modules and the module.exports = syntax for exporting stuff from modules
 * ESM uses the import {stuff} from './file.js' syntax for importing and the export stuff syntax for exports
 * CommonJS files can use the .cjs extension to tell Node that they are in CommonJS
 * ESM files can use the .mjs extension to tell Node that they are in ESM
 * CommonJS imports are synchronous
 * ESM imports are asynchronous (which also allows for top-level await)
 * CommonJS works in Node but does not work in browsers
 * ESM is supported by all modern browsers and the latest versions of Node, but does not work at all in Node versions below 12
 * Tons of the core JavaScript ecosystem tooling was developed in Node and Node only recently supported ESM, so a huge fraction of existing Node projects are in CommonJS
*/

