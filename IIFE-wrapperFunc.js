/**
 * An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 * (function () {
        // …
    })();
    (() => {
        // …
    })();
 * Function in grouping operator will be private 
 */

// If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
(() => {
    // some initiation code
    let firstVariable = "test";
    let secondVariable = "and";
    console.log(firstVariable+' '+secondVariable);
})();

let firstVariable = "chetan";
let secondVariable = "patil";
console.log(firstVariable+' '+secondVariable);
const makeWithdraw = (balance) => ((copyBalance) => {
    console.log("balance & copyBalance", copyBalance);
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log('I will do bad things with your money');
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return 'Insufficient money';
      },
    };
})(balance);
  
const firstAccount = makeWithdraw(100);   // "I will do bad things with your money"
console.log(firstAccount.balance);        // undefined
console.log(firstAccount.withdraw(20));   // 80
console.log(firstAccount.withdraw(30));   // 50
console.log(firstAccount.doBadThings);    // undefined; this method is private
const secondAccount = makeWithdraw(20);   // "I will do bad things with your money"
console.log(secondAccount.withdraw(30));  // "Insufficient money"
console.log(secondAccount.withdraw(20));  // 0

/**
 * We can call function by imediate invoking  and want to keep private
*/
(function(){
  var name = "chetan";
  console.log("function in grouping operator and invoked imediately", name);
})();