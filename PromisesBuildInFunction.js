/**there are three types of method we can use to combine all the promises 
 * 1. Promise.all([]); 2. Promise.allSettled([]); 3. Promise.any([]);
 * Both receive array param with prmises as item
 * Only difference is, Promises.all() return promises whether fullfill or reject,
 * but Promises.allSettled() method returns it's fullfill or reject with status as well
 * promise.any used to get any one of the promise resolved
*/

//https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke
//https://pythontutor.com/visualize.html#mode=edit

const promise1 = new Promise(function(resolve, reject) {
    const a = 3.14*2*10;
    resolve(`promise1 :- resolved peremeter of circul is - ${a}`)
})
const promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve(`promise2 :- reject `), 5000);
})

//1. Promise.all([])
Promise.all([promise1, promise2])
.then((result)=>{
    console.log(`Promise.all([]) result will bve an array -:`,typeof result);
    console.log(result);
})
.catch((err)=>{console.log(`Error: ${err}`)});

//2. Promise.allSettled([])
Promise.allSettled([promise1, promise2])
.then((result)=>{
    console.log(`Promise.allSettled([]) result will an array with status of promises :- `, typeof result);
    console.log(result);
})
.catch((err)=>{console.log(`Error: ${err}}`)});


// 3. using For-of loop
async function executePromise(){
    for( let promise of [promise1, promise2] ){
        try{
            const message = await promise;
            console.log("result in for of loop -",message);
            //promise.then(function(result){console.log("result in for of loo -", result); });
        }
        catch(e){
            console.log("error in for of loop ");
        }
    }
}
executePromise(); 

function abc(state){
    return new Promise((resolve, reject)=>{
        if(state){
            resolve("success");
        }else{
            reject("fail");
        }
    })
}
const promise = abc(true);//if false
//if true - promise get resolve and execute all then functions
//if false - then promise get reject and first catch block will execute and after that all then function(not next catch block)
promise.then(()=>{
    console.log("Success 1");
}).then(()=>{
    console.log("Success 2");
}).then(()=>{
    console.log("Success 3");
}).catch(()=>{
    console.log("error 1");
}).then(()=>{
    console.log("Success 4");
}).then(()=>{
    console.log("Success 5");
}).catch(()=>{
    console.log("error 2");
})

// promise.any
const api1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a')
    }, 10000);
})
const api2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('b')
    }, 1000);
})
const api3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('c')
    }, 1000);
    
})

const p = Promise.any([api1, api2, api3])
  p.then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });