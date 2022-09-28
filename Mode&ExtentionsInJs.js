/**Modes
 * *non-strict mode referred to as sloppy mode. 
 * *ES6 modules and classes are strict by default.
 * *Strict mode is enabled by default in js file
 * *Strict mode will throw reference error when found non declared variables and in some cases.
 * If we get value of this(global var) undefined then we are in strict mode
 * "use strict" - used to on strict mode and "non-strict" for no strict mode
 * To use non strict mode change extention to .cjs as it is not set mode by default strict like .js and .ejs
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
*/
