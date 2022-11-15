var arrSlice = ["hello", "world", "how", "are", "you", "!"];
//Slice,return separate array from given index(and up to which index) of parent array  
//It does not alter parent array
//We can pass one argument to slice as well
console.log('Slice with 1 argument ---> ',arrSlice.slice(4));//It will count 4th index and from that all the next item will return in resulting array
console.log(`Slice is of array ${arrSlice} is \t ---> ${arrSlice.slice(1,3)}`);//here 3 is outer limit index 3 will not get count in operation
console.log(arrSlice);

var arrSplice = ["hello", "world", "how", "are", "you", "!"];
//Splice,return separate array from given index(and up to which index) of parent array  
//It does alter parent array, it remove element from given index and return that removed item as array
//We can pass one argument to splice as well
//first argument as index fromwhich need to remove and 
//second argument how many item to remove 
console.log('Splice with 1 argument ---> ',arrSplice.splice(4));//It will count 4th index and from that index remove all next item from array
console.log('Splice with 1 argument ---> ',arrSplice.splice(3,1));
console.log('item from 4th index removed by splice and remaining parent array - ', arrSplice);
console.log(`Splice is of array ${arrSplice} is \t ---> ${arrSplice.splice(1,2)}`);//here 2 isno of item to remove from 1 index 
console.log('Removed item from index 1,3 and remaining array is -',arrSplice);