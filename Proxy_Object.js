/**
 * Proxy Objects - 
 * proxies (proxy object) are used to wrap an object 
 * and redefine various operations into the object such as reading, insertion, validation, etc. 
 * Proxy allows you to add custom behavior to an object or a function.
 * Proxy is the layer between object and operations on object ****
*/
/**
 * Syntax - new Proxy(target, handler);
 * new Proxy() - the constructor.
 * target - the object/function which you want to proxy
 * handler - can redefine the custom behavior of the object
 * Proxy provides two handler methods get() and set().
 */
/**
 * Uses ---->
 * Validation - key and perform an action based on that value. 
 * Read Only View of an Object -If we dont want to let others make changes in an object. so, we can use a proxy to make an object readable only.
 * Side Effects - You can use a proxy to call another function when a condition is met.
*/
let user = {
    age: 24,
    name: "Chetan",
    city: "Amravati"
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
        //return prop in obj ? o[prop] : "property does not exist";
    },
    set: function(obj, prop, value) {
        if(prop === "age" && ![15,20,25,30,35].includes(value)){
            throw new Error("Hello we can not allow age except 15,20,25,30,35");
        }
        else if(prop === "name" && !["chetan","patil","korde"].includes(value.toLowerCase())){
            throw new Error("Hello we can not allow name except chetan, patil & korde");
        }
        else{
            obj[prop] = value;
        }
        return;
    }
}

const proxy = new Proxy(user, handler);
console.log(proxy); //object { age: 24, name: "Chetan", city: "Amravati" }
console.log(proxy.name); // Chetan
console.log(proxy.age); // 24 
console.log(proxy.class); // property does not exist
proxy.name = "Akshay"; //Uncaught Error: Hello we can not allow name except chetan, patil &amp; korde"
proxy.age = 21; //Uncaught Error: Hello we can not allow age except 15,20,25,30,35"
console.log(proxy);

// setting new key/value
proxy.age = 25;
console.log(proxy); // Proxy {name: "Chetan", age: 25, city: "Amravati"}
//But user object is same as it is
console.log(user); // user {name: "Chetan", age: 24, city: "Amravati"} 

//validation
let user1 = {
    age: 20,
    name: "Akshay",
    city: "Akola"
}

const handler1 = {
    get: function(obj, prop) {
        //validation - check condition
        if (prop == 'name') {
            return obj[prop];
        } else if (prop == 'age')  {
            return 'Not allowed';
        }
    }
}
const proxy1 = new Proxy(user1, handler1);
console.log(proxy1.name); // Akshay
console.log(proxy1.age); // Not allowed

//ReadOnly 
let user2 = {
    age: 18,
    name: "Patil",
    city: "Nagpur"
}

const handler2 = {
    set: function (obj, prop, value) {
        if (obj[prop]) {
            
            // cannot change the student value
            console.log('Read only')
        }
    }
}
const proxy2 = new Proxy(user2, handler2);
proxy2.name = "Korde"; // Read Only
proxy2.age = 10; // Read Only
console.log(proxy2.name); // Patil - 
console.log(proxy2.age); // 18 -

//Side Effect
//You can use a proxy to call another function when a condition is met.
const myFunction = () => {
    console.log("execute this function")
};
const handler3 = {
    set: function (target, prop, value) {
        if (prop === 'name' && value === 'Patil') {
            // calling another function
            myFunction();
        }
        else {
            console.log('Can only access name property');
        }
    }
};
const proxy3 = new Proxy({}, handler3);

proxy3.name = 'Patil'; // execute this function
proxy3.age = 33; // Can only access name property
