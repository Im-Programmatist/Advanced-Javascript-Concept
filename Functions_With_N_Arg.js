/**
 *  function that accepts any number of arguments 
 */

/***** Arguments Object (ES5)******/
/*
In Javascript, arguments is a local JavaScript object variable that is available in all non-arrow functions. 
arguments is an Array-like object accessible inside functions that contain the values of 
the arguments passed to that function.
*/

function add()
{
    console.log("arguments : - ", arguments);
    var sum = 0 ;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(3,4,5));//12
console.log(add(3,10,5,20));//12



/***** Arguments Object (ES5)******/
/*
(The arguments object was not available in arrow functions.)
In Javascript, arguments is a local JavaScript object variable that is available in all non-arrow functions. 
arguments is an Array-like object accessible inside functions that contain the values of 
the arguments passed to that function.
*/

function add()
{
    console.log("arguments : - ", arguments);
    var sum = 0 ;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(3,4,5));//12
console.log(add(3,10,5,20));//

//Since the arguments object isn’t an array, 
//we first have to convert it into an array using the Array.from method before
//we can use the reduce method.

function add()
{
    let args = Array.from(arguments);
    console.log("arguments as array : - ", args);
    return args.reduce(function(accumelator, current){
        return accumelator + current;
    });
}
console.log(add(3,4,5));//12
console.log(add(3,10,5,20));//



/***** Rest Parameters (ES6)******/
/*
    The rest parameter provides an easier and cleaner way of working with an indefinite number of arguments.
    Using the rest parameter, which is the same syntax as the spread operator

*/
function add(...args)
{
    return args.reduce(function(accumelator, current){
        return accumelator + current;
    });
}
console.log(add(3,4,5));//12
console.log(add(3,10,5,20));//
/*
Difference between rest parameters and the arguments object is:
    All the array methods like map, sort, and filter can be applied directly on the rest parameters array 
    but not on the arguments object.
*/
