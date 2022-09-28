/**
 * *RxJS is Reactive Extension for Javascript.
 * https://github.com/ReactiveX/rxjs
 * RxJS is a JavaScript library that uses observables to work with reactive programming 
   that deals with asynchronous data calls, callbacks and event-based programs. 
 * RxJS can be used with other JavaScript libraries and frameworks.
 * 
 * 
 * *Features of RxJS 
 * 1. Observable - An observable is a function that creates an observer and attaches it to the source where values 
    are expected, for example, clicks, mouse events from a dom element or an Http request.
 * 2. Observer - It is an object with next(), error() and complete() methods, 
    that will get called when there is interaction to the with the observable 
 * 3. Subscription - When the observable is created, to execute the observable we need to subscribe to it. 
    It can also be used to cancel the execution.
 * 4. Operators - An operator is a pure function that takes in observable as input and the output is also an observable.
 * 5. Subject A subjec- t is an observable that can multicast i.e. talk to many observers. 
    Consider a button with an event listener, the function attached to the event using addlistener is called every time the user clicks on the button similar functionality goes for subject too.
 * 6. Schedulers - A scheduler controls the execution of when the subscription has to start and notified
 * 7. pipe() method is available on the observable created.
 * 
 * *Advantages of RxJS
 * *If your project consists of lots of async task handling than RxJS is a good choice.
 * *RxJS can be used with other Javascript libraries and frameworks. It is supported by javascript and also with typescript.
 * *RxJS is an awesome library when it comes to the handling of async tasks.
 * *RxJS offers a huge collection of operators in mathematical, transformation, filtering, utility, conditional, error handling, join categories that makes life easy when used with reactive programming.
 *
 * *Disadvantages
 * 1. Debugging the code with observables is little difficult.
 * 2. As you start to use Observables, you can end up your full code wrapped under the observables.
 * 
 * 
 * *Installation of RxJs Using NPM and CDN is possible 
 * 1. npm install ---save-dev rxjs
 * 2. CDN use in script tag - https://unpkg.com/rxjs@7.5.7/dist/bundles/rxjs.umd.min.js
 * 
 * *Use Of RxJS in your project
 * 1. Import RxJs and Operators
    import { rx } from 'rxjs;
    import { map } from 'rxjs/operators';
 *2. If import gives error then install ES6 module package
    $ npm install --save-dev esm 
    Run file using 
    $ node -r esm file_name.js
 * 3. CDN - <script src="https://unpkg.com/rxjs@7.5.7/dist/bundles/rxjs.umd.min.js"></script>
 *
 */

//import operators
import {mapTo, take, tap, map, max} from "rxjs/operators"
//import Methods to create Observables
import {from, of, fromEvent, interval} from 'rxjs';
//import of Observables
import { Observable, UnsubscriptionError } from 'rxjs'
//import { Observable } from 'rxjs/Observable'
//Import Subject
import { Subject } from 'rxjs'

let list1 = [1, 6, 15, 10, 58, 2, 40];
from(list1).pipe(max((a,b)=>{
        //here Linear Traversal Algorithm is used , first element in array consider as max then travers through 
        //each element and check whether current element is greater then our considered max then replace it 
        console.log(a,b,(a-b));
        return a-b})
    ).subscribe(x => console.log("The Max value is "+x)
);

//Observer is an object with callback functions, that will get called when there is interaction to the Observable
//using 'new' keyword
var observbl = new Observable((observer)=>{
    try{
        //Obervavles can returns multiple values.
        observer.next("First Observables");
        observer.next("Second Observables");
        observer.complete();
    }
    catch(e){
        observer.error(e);
    }

});
observbl.subscribe((result)=>{console.log(result);});

//Observables using create method
var obsblCreate = Observable.create(
    function(observer) {
        observer.next("Observable With create method");
    }
);
obsblCreate.subscribe(function(result) {
    console.log(result);
});

/* 
If you want to learn more about Observables & difference in observables and promises 
then a separate file is created in this repository
please check it out that on - Observables_Vs_Promises.mjs
*/ 