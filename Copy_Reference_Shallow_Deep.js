/**
 * In javascript we can copy any object using 3 methods:
 * 1. Reference Copy - by default
 * 2. Shallow Copy - using Object.assign() constructor method of Object calls
 * 3. Deep Copy - Using JSON.stringify() & JSON.parse() constructor method
 * */

const sampleObject  = {
    name: 'John',
    age: 30,
    address: {  
        city: 'New York',
        country: 'USA'
    }
}

/***
 * Reference Copy 
 *  - This will copy exact object from parent but
 *  - This copied object will take same reference to parent one 
 *  - If we changed in any of the object it will reflect in other
 *  - Newly copied object does not store in difference memory space, it just refer to old object memory location
 *  - This is achieved by just assigning one object to other
*/
console.warn('\n-------Reference Copy -----------');
const refObject  = sampleObject;
console.log(`Before Sample Object is ${JSON.stringify(sampleObject)}, refObject is ${JSON.stringify(refObject)}`);
sampleObject.name = "Chetan";
refObject.age = 40;
console.log(`After Sample Object is ${JSON.stringify(sampleObject)}, refObject is ${JSON.stringify(refObject)}`);

/***
 * Shallow Copy 
 *  - This will copy exact object from parent but in another memory space
 *  - This copied object will take different memory space so it not related with parent in some aspect.
 *  - If we changed in any of the object it will NOT reflect in other in one condition ->
 *        - Parent should not have nested object (object inside object like person has address object with city state country)
 *        - The new object which we have copy from parent, wil use new memory space for not tested items but
 *        - For nested object it refers to parent's nested object
 *  - This is achieved by Object.assign(targetObj, sourceObj);
 *        - We can pass empty target Object.assign({}, sourceObj);
 *        - We can assign existing target Object with new items from source- 
 *          Object.assign({"name": "Chetan"},sourceObj)// this will not remove name property 
 *        - If target has same property and source has same then it will overwrite
*/
console.warn('\n-------Shallow Copy -----------');
const shallowObject  = Object.assign({},sampleObject);//OR  Object.assign(sampleObject);
console.log(`Before Sample Object is ${JSON.stringify(sampleObject)}, shallowObject is ${JSON.stringify(shallowObject)}`);
sampleObject.address.city = "Amravati";
shallowObject.name = "Nikhil"
console.log(`After Sample Object is ${JSON.stringify(sampleObject)}, shallowObject is ${JSON.stringify(shallowObject)}`);
const shallowObject2  = Object.assign({lname:"Patil"},sampleObject);//OR  Object.assign(sampleObject);
console.log('Shallow copy with existing object: ' + JSON.stringify((shallowObject2)));
/***
 * Deep Copy 
 *  - This will copy exact object from parent by modifying object to string then string to object again
 *  - This copied object will take completely new memory space 
 *  - If we changed in any of the object it will NOT AT ALL reflect in other
 *  - It will not refer for nested object as well like shallow copy.
 *  - This is achieved by JSON.stringify and JSON.parse
*/
console.warn('\n-------Deep Copy -----------');
const deepObject  = JSON.parse(JSON.stringify(sampleObject));
console.log(`Before Sample Object is ${JSON.stringify(sampleObject)}, deepObject is ${JSON.stringify(deepObject)}`);
sampleObject.address.city = "Nagpur";
deepObject.name = "Akshay";
console.log(`After Sample Object is ${JSON.stringify(sampleObject)}, deepObject is ${JSON.stringify(deepObject)}`);
