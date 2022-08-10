//Method borrowing helps to keep us from having to write the same code multiple times. 
    //Using the predefined JavaScript methods, call(), apply() and bind() are used to borrow methods in JavaScript.
    
    /**
     * Use .bind() when you want that function to later be called with a certain context, useful in events. 
     * Use .call() or .apply() when you want to invoke the function immediately, and modify the context.
     * 
     */
    //Suppose we have 2 objects and one of them have function and other dont
    /**
     * Object 1
     */
     const person1 = {
        fname: "Chetan",
        lname: "Patil",
        showName: function(age,a,b){
            console.log("extra param passed :",a,b);
            console.log(`His name is ${this.fname} ${this.lname} & he is ${age} year old`);
        }
    };
    person1.showName(18); /*Output: His name is Chetan Patil*/
    /**
     * Object 2 - not have function so, this function is not able to call showName
     */
    const person2 = {
        fname: "Korde",
        lname: "Bhau"
    };
    //person2.showName(21); //error- function not defined
    
    /**
     * Here we can use function borrowing
     * Call/apply call the function immediately, whereas bind returns a function that, when later executed.
     * All methods attach `this` into function (or object) and the difference is in the function invocation
     * /
     * 
    /**
     * CALL()
     * this method accepts parameter - first refer to this object and rest all takes as parameter for function
     * The call() method takes arguments separately.
     * /
    /*Using the call() method*/
    person1.showName.call(person2,19,"call",[1,2,3,4]); //Output: He is 22 years old with extra param 
    person1.showName.call({ fname: "Akshay", lname:"Korde call method" }, 20);//pass ontime object to call like person2
    //We can not store call function and later call as it imediately call the function 
    // var showFuncCall = person1.showName.call({ fname: "Akshay", lname:"Korde call method" });
    //showFuncCall(20);
    
    /**
     * BIND()
     * /
    /*Using the bind() method*/
    person1.showName.bind(person2,23,"bind",{a:"abc"}); 
    //above line - not get call as bind never call imediately .
    //we have to store it for later invocation
    const testBind = person1.showName.bind(person2,23,"bind",{a:"abc"}); 
    testBind();

    var showFuncBind = person1.showName.bind({ fname: "Akshay", lname:"Korde bind method" });
    showFuncBind(24);
    //But if we pass this object function as call back function,
    //'this' reference goes out of context foe the function and can not use valiable declare in object
    setTimeout(person1.showName, 3000); //output - His name is undefined undefined & he is undefined year old
    //to overcome this we have to bind objects with method
    let display = person1.showName.bind({fname: "set", lname:"timeout" });
    console.log(display);
    setTimeout(display(30),5000);
    
    /**
     * APPLY()
     * The apply() method takes arguments as an array.
     * /
    /*Using the apply() method*/ 
    person1.showName.apply(person2,[25,"abff",35]); //Output: He is 24 years old 
    