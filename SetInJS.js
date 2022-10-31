let resultSet = [];
console.log(`Result Using set - ${[...new Set(arr1)]}`);
var fruit = [
    {
        name:"chetan",
        age:29
    },
    {
        name:"korde",
        age:30
    },
    {
        name:"chetan",
        age:29
    }
]
console.log(fruit.reduce((acc, item)=>acc.add(item.name),new Set()));

var set = new Set();
var a = 1;
var b = 2;
set.add(a,b)
set.add(2);//not add as already has 2
set.add(3);
set.add(1);//not add as already has 1
console.log(set);