/*
Elixer Scope CHain
*/

    //c is in lexical envirment of a and g is in lexical envirment of global execution context.
    // so c can access variable from global and a function.
        
    var g = 1000;
    function a(){
        var b = 10;
        console.log(g); //can access as it is in global env 
        c();
        function c(){
            console.log(b);
            console.log(g);//can access as it is in global env 
        }
    }
    a();
    console.log(b); //not works as this console is out of lexical env of a and c  it 