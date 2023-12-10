var a  = {};
var b = { name : 'Chetan' }
var c = { name : 'Korde' }
//var c = 'name';
var d = [1,2,3,4];
var e = [1,2,3,4];
var f = [];
var g = [];

Object.prototype.toString = function(){
    return this.name;
}

a[b] = 111;
a[c] = 222;
a[d] = 333;
a[e] = 444;
a[f] = 555;
a[f] = 666;
console.log(a[b]);
console.log(a[c]);
console.log(a[d]);
console.log(a[e]);
console.log(a[f]);//F if empty array which will be replace with f 
console.log(a[g]);
console.log('a', a);
console.log('type of a - ', typeof a);
for(let key in a ){
    console.log('key - ', key);
    // for(let test in key ){
    //     console.log('test - ', test);
    // }
}

console.log(b+'');// convert to string using ''; same as b.toString();
console.log(f.toString()); //empty string