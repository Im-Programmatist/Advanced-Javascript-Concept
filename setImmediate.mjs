/**
 * setImmediate function is used to execute a function right after the current event loop finishes. 
 * The function executed after all the statements in the script are executed. 
 * It is the same as calling the setTimeout function with zero delays. 
 * Syntax - setImmediate(func, param0, param1, ..., paramN)
 */
function program(topic){
    console.log("Hi, topic is" + topic);
}
console.log("Before setImmediate call")
let timerID = setImmediate(program, " 75 indian independence"); //execute first among all setImmediate,as it put first 
console.log("After setImmediate call")
for(let i=0; i<10; i++){
    console.log("Loop: "+i);
}

console.log("\nline 1");

setTimeout(()=>{
    console.log("\nline 2 - settimeout");
},0) //even this setTimeout put before setImmediate still execute after setImmediate

setImmediate(()=>{
    console.log("\nline 3 -immediate");
}) //even this setImmediate put after setImmediate still execute before setTimeout 

setTimeout(()=>{
    console.log("\nline 4 - settimeout");
},0) //execute after all the line 

console.log("\nline 5"); //even at the end of programm this line get execute before all setImmediate and setTimeout