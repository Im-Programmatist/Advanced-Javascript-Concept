/*
Block Scope and Shadowing</title>
*/
/*
    Block {...} - means a group of statements in js used at a place where js required single statement. 
    Example, if(condition) expects any statement after if() but we can put block there and run it as single statement as js required by syntax
    if(true) - if we put this only then it gives syntax error as next statement is not their, if(cond){console.log("inside iff"); var a =10; cl(a)}
    if you have same name variable outside of block then it shadowing the var variable.
    incase of let variable it not get shadow , block variable store in block scope(also can see in insepect source debugger scope )
    we can shadow var variable in global scope in to block scope - 
    let a = 10; { var a = 100; } - this occures error, BUT var a = 10; { let a = 100; } - this wont get any error 
    because block scope also follow lexical scope (hierarchy) and let variable can not redeclare 
*/
    var d = 4000; // this value get shadow by block var d  
    let e = 5000; // this will not get shadow by block let e variable 

        //{block scope}
        {
            var a = 10;
            let b = 20;
            const c = 30;
            console.log('inside block var a : ', a);//store in memory heap in global execution scope
            console.log('inside block let b : ', b);//store in different memory called block scope with c
            console.log('inside block const c : ', c);//store in different memory called block scope

            //shadowing code
            var d = 40;
            let e = 50;
            console.log('inside block var d : ', d);
            console.log('inside block let e : ', e);
            //same with const like let
        }
        //shadowing testing 
        console.warn('shadowing testing '); 
        console.log('outside block d : ', d); //40 - must be 4000 but shadow by d variable present in block 
        //both block variable var a and global  variable a reffers same meory block in global execution context
        console.log('outside block e : ', e); // Not shadow by e present in block variable. 
        //stored in different memory than block e(block e will be in block scope memory and global let b variable will store in script memory )
        
        //block code testing
        console.warn('block scope  testing '); 
        console.log('outside block a : ', a); // It runs as it is var variable in global scope even put in block 
        console.log('outside block b : ', b); // error
        console.log('outside block c : ', c); // not run as pointer stop at b because it is let variable and not in scope
        
/*The time required to run this code in Google Chrome is considerably more than the time required to run it in Node.js. 
Explain why this is so, even though both use the v8 JavaScript Engine. */
{
    console.time("loop");
    for (let i = 0; i < 1000000; i += 1){
        // Do nothing
    }
    console.timeEnd("loop");
}
/**
 * Answer --->
 * 1. Within a web browser such as Chrome, declaring the variable i outside of any function’s scope makes it global and therefore binds it as a property of the window object. 
 * 2. running this code in a web browser requires repeatedly resolving the property i within the heavily populated window namespace in each iteration of the for loop.
 * 3. In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the window object) which therefore makes it much easier and faster to resolve.
 * 4. We can reduce run time by 50% if we use let instead of var in loop, let will be in local scope  so it will take same time in browser and node env
*/