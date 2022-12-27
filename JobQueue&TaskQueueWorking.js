const  JobAndTaskQueueWorkingPracticle = () =>{
    for(var i=0; i<3; i++) {
        setTimeout(() => {
            console.log(`i - `, i);
        },0); //Goes in task queue and event loop execute after micro queue
        const prom = new Promise((resolve, reject) => {
            resolve('test resolve');
        });//Goes in job queue and event loop give preference to this first(promise, process.nexttick, async function)

        prom.then((res) => {console.log(`1. then`,i);})
        .catch((err) => {console.log(`1. catch`,i);})
        .then(() => {console.log(`2. then`,i);})
        .then(() =>{console.log(`3. then`,i);})
        .catch((err) =>{console.log(`2. catch`,i);})
        console.log(`out i - `, i);
    }
};
JobAndTaskQueueWorkingPracticle();
