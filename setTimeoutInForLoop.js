var colors = require('colors');

//Out put depends on the variable data type used in the iteration(i)
// & the variable used to pass in the console

//1. var is used as iterable and inside console
//So it will store in GEC not in block scope
//After call stack get empty event loop fetch settimeout callback function inside callstack 
//this function takes the reference of var 'a' or 'i' which is in global scope 
//As these assignment is reference not clone the last changed value of a will be get for all settimeout callback
var a = 0; 
for(var i = 1; i< 4; i++){
    a = i;
    setTimeout(()=>{
        //a: Output will be 3
        console.log('1**. Both iterable and inside console is used as var'.yellow);
        console.log(a); 
        //i: Output will be 4 as i++ last time and condition fails
        console.log(i);
    },0);
}

//2. iterable variable is let and console a will be var
var aa = 0; 
for(let i = 1; i< 4; i++){
    aa = i;
    setTimeout(()=>{
        console.log('2**. var is used as console and let as iterable '.green);
        //a: Output will be 3
        console.log(aa); 
        //i: Output will be 1,2,3 as it is in block scope 
        console.log(i);
    },0);
}

//3. Both iterable and console will be let variable 
//but a is in global scope
let aaa = 0; //It is not in block scope, it is in script scope(not in global scope exactly but outside block scope
for(let i = 1; i< 4; i++){
    aaa = i;
    setTimeout(()=>{
        console.log('3**.Both iterable and console will be let variable(a is in script scope, not in gs, and bs) '.blue);
        //a: Output will be 3
        console.log(aaa); 
        //i: Output will be 1,2,3 as it is in block scope 
        console.log(i);
    },0);
}

//4. Both iterable and console will be let variable 
//but a is in global scope
for(let i = 1; i< 4; i++){
    let aaaa = 0; // is in block scope
    aaaa = i;
    setTimeout(()=>{
        console.log('4**.Both iterable and console will be let variable(a is in block scope) '.red);
        //a: Output will be 1,2,3
        console.log(aaaa); 
        //i: Output will be 1,2,3 as it is in block scope 
        console.log(i);
    },0);
}

