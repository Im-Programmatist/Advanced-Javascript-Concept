/**there are two types of method we can use to combine all the promises 
 * 1. Promise.all([]); 2. Promise.allSettled([])
 * Both receive array param with prmises as item
 * Only difference is, Promises.all() return promises whether fullfill or reject,
 * but Promises.allSettled() method returns it's status as well
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

