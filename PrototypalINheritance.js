/**
 * The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
 * It is a method by which an object can inherit the properties and methods of another object
 */

/**
 *Prototype of Function and Array is in depth is Object
 //******This is why everything in JS is Object 
 */
//this is default functionality provided by object
console.log(Array.prototype); //this will be array and properties in it 
//but if we find prototype of this array it will be object
console.log(Array.__proto__.__proto__);
console.log(Function.__proto__.__proto__);
console.log(Object.__proto__.__proto__); 
//Above all console will print same value

var arr = [1,2,3];
console.log(arr.__proto__, " -Is Same as- ",Array.prototype);
console.log(arr.__proto__.__proto__, "-arr.__proto__.__proto__ is same as object prototype -", Object.prototype);

//Prototype chain ---> arr.__proto__ ---> arr.__proto__.__proto__ --->Object prototype

/**
 * Prototypal Inheritance 
 */
var obj1 = {
    name: "abc",
    age:"20"
}
var obj2 = {
    name:"xyz"
}
obj2.__proto__ = obj1;
//Here we have inherited obj one property in obj1
console.log(obj1.__proto__, "- obj2 can access age now -", obj2.age , 
" Name has it's own property so it get overrride ", obj2.name); //obj

Function.prototype.mybind = function(){
    console.log("This method attached to prototype");
}
function fun(){
    console.log("Normal function...");
}
console.log("fun.__proto__.mybind : -",fun.__proto__.mybind);
console.log("fun.__proto__.mybind() : -",fun.__proto__.mybind());