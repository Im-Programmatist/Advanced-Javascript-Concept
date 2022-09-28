/*
Promises return only one value at  a time(using single then we can get the one result(resolved or reject)).
Obervavles can returns multiple values.
-Observables are functions that throw values. 
-Objects called observers subscribe to these values. 
-Observables are behaves like arrays so we can apply array methods(inbuilt) on observables.
-We use observer to thake value from observable and pass it to subscribe method.
-We use to pass multiple output through observables using next method and once done then using complete() method stop.
-We can cancle/unsubscribe pobservables using unsubscribe method. 
- next(x){}, error(err) { },complete() { } are callback emthods in observables

Observables are really just functions that throw values. 
Objects called observers define callback functions for next(), error(), and complete(). 
These observer objects are then passed as arguments to the observable function. 
The observable function calls the observer methods based on a certain behavior (AJAX HTTP request, event, etc). 
This allows the observer to "listen" for state changes emitted by the observable function.
*/
/*
Observables have surfaced through an evolution of handling async activity in JavaScript. 
While the Promise API has largely replaced the world of nested callbacks, observables demonstrate the next step 
forward in gracefully handling async activity and real-time events.
*/
/*
Unlike Promises, observables are not yet inherent to JavaScript. 
This is why Angular and React rely on the RxJS library for implementing observables. 
RxJs stands for "Reactive Extension for JavaScript". 
The RxJS library defines its own Observable class along with supporting methods for Reactive programming.
*/

/**** We have to invoke observable in JavaScript*****/
import { Observable, UnsubscriptionError } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';  

/*Promise*/
const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        //reject("Promise Rejected..!");
        resolve("Promise Resolved At First Time..!");//Only this line will sent to result and get in then function
        resolve("Promise Resolved At Second Time..!");//this will not sent in result
        resolve("Promise Resolved At Third Time..!");//also this will not sent in result
    },100);
});
/*calling promise*/
promise1.then((result)=>{
    console.log("Promise Result: - ",result);//Output :- first resolve method called
}).then((result)=>{
    console.log("Promise Result: - ",result);//Output :- undefined
}).catch((err)=>{
    console.log("Error in promise:", err);//if reject method passes for result
});

/*Observables*/
const observbls = new Observable(observer=>{
    setTimeout(()=>{
        //all observables will pass as result to subscribe methods 
        observer.next("Observables executes first time..!");
        observer.next("Observables executes second time..!");
        observer.next("Observables executes third time..!");
        observer.complete();
        observer.next("Observables executes fourth time..!");//should not run
    },100);
});
console.log('just before subscribe');
/*execute the observable by calling it's subscribe() method*/
const testUnscb = observbls.subscribe((result)=>{
    console.log("Observables result :- ",typeof(result), result);
});
/*unsubscribe observable*/
testUnscb.unsubscribe(); //due to this unsubscription of observables, above result will not print in outputs

/*apply filter map on observables*/
const testUnscb1 = observbls.pipe(
    filter((item) => item ==="Observables executes first time..!"), //here we can filter result
    map((item) => item+" ---Modified by filter and map"), //here we map the iterables and attached new string
    reduce((acc, item) => {acc['resultIs'] = item; return acc;},{})//here we reduces the iterable/array in one value and convert to object
);
const subscriber = testUnscb1.subscribe((result)=>{
    console.log("Filtered Observables- subscriber result :- ",typeof(result), result);
})  
// Subscriber 1
observbls.subscribe({
    next(x) { console.log('sub1: got value ' + x); },
    error(err) { console.error('sub1: something wrong occurred: ' + err); },
    complete() { console.log('sub1: done'); }
});

// Subscriber 2
observbls.subscribe({
    next(x) { console.log('sub2: got value ' + x); },
    error(err) { console.error('sub2: something wrong occurred: ' + err); },
    complete() { console.log('sub2: done'); }
});

console.log('just after subscribe');

/*
Wrapping Array to Observable
*/
const ArrayToObservableWrap = array => {
    return new Observable(observer => {
        for (let i of array) {
            observer.next(i);
        }
    });
};
const arrVal = [6, 7, 5, 4, 3, 2, 9];
const observable22 = ArrayToObservableWrap(arrVal);
console.log("observable22 ---", observable22);
observable22.subscribe((value) => {console.log('Subscriber1 (without timeout) : ' + value)});
observable22.subscribe(value => console.log('subscriber2 (without timeout) : ' + value));