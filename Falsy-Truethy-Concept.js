/**
 * Actually, every single value in JavaScript can be transformed to a boolean value.
 * To do so, we can make use of the Boolean() function. Let's try it:
 * console.log(Boolean(100));
 * Here, we forced the value 100 to be converted to a Boolean, and the result is true.
 * But, why does 100 become true? That's where the concepts of truthy and falsy come in.
 * Every single value in JavaScript is considered either truthy or falsy. Truthy values result in the value true when coerced into a Boolean value. Falsy values result in the value false.
 * All of the following values are falsy:
    false
    null
    undefined
    0
    -0
    NaN
    An empty string ('')
*/