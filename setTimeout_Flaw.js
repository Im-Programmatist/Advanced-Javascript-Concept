//We used settimeout browser api for delaying some functionality
/**
 * The setTimeout() is executed only once.

    If you need repeated executions, use setInterval() instead.

    Use the clearTimeout() method to prevent the function from starting.

    To clear a timeout, use the id returned from setTimeout():

    myTimeout = setTimeout(function, milliseconds);
    Then you can to stop the execution by calling clearTimeout():

    clearTimeout(myTimeout);
 */

/*Simple example of settimeout */
//1. settimeout returns identifier once run , we can clear timeout like interval using identifier
//2. we can pass param to unknown/anonymous function using extra param except timer value
//here 'timeout' is identifier 
const timeout = setTimeout(function(str1, str2) {
    console.log(str1 + " " + str2);
}, 3000, "Hi.", "welcome to code world!");
clearTimeout(timeout);

var setInt = setInterval(function () { console.log('SetInterval Hello' ); }, 1000);//repeat after 1 sec
var setTime = setTimeout(function () { console.log('setTimeout Hello' ); }, 1000);// only once run

/**
 * Flaw in setTimeout
 * 
 * SetTimeout is web api by browser, to hold the code block for perticular time
 * When timer end call back function must run and give the output 
 * but it could not immeditely push to call stack(execution context), 
 * firstly, it goes in call back queue and event loop continuesly chck that call stack is empty or not
 * once call stack get empty then only callback queue push call back function of setTimeout to call stack using event loop
 * 
 * Here is the flaw if setTimeout is for 3 sec and suppose call stack has many operations pushed in and pop out 
 * which take 10 sec then even setTimeout timer end at 3 and ready to execution of call back function, could not get space in call stack untill it get empty.
 * so we get output after 10 sec.  
 * (all execution is async for settimeout)
*/

var currenttime = new Date();
console.log(`start time ${currenttime.getMinutes()}:${currenttime.getSeconds()}`);
setTimeout(function(){
    console.log("setTimeout run after 3 sec.");
},3000);
//this setTimeout has 3 sec timer but it run after 10sec of while loop
var  startTime = new Date().getTime();
var endTime = startTime; 
console.log(startTime,endTime);
while(endTime < startTime + 10000 )
{
    endTime = new Date().getTime();
    console.log("while runs - ",`${new Date().getSeconds()}`);
}
var currenttime = new Date();
console.log(`start time ${currenttime.getMinutes()}:${currenttime.getSeconds()}`);
