
/*
Wrapper Function
*/
    var originalFunction = myFunction;
    window.myFunction = function(a, b, c) {
    /* work before the function is called */
        try {
            var returnValue = originalFunction.call(this, a, b, c);
            /* work after the function is called */
            return returnValue;
        }
        catch (e) {
            /* work in case there is an error */
            throw e;
        }
    }