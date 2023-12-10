/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
*/

const object1 = {
    property1: 42
};
console.log(object1['property1']);
Object.defineProperty(object1, "property1", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 42,
})
object1['property1'] = 60;
const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
console.log(descriptor1.enumerable);
console.log(descriptor1.configurable);
console.log(descriptor1.writable);
console.log(descriptor1.value);
console.log(object1['property1']);
  