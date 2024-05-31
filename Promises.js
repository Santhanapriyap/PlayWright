function conditionalPromise(randomNo)
{
    return new Promise((resolve,rejects) => {
        setTimeout(() =>{
            if(randomNo===1)
                resolve({id:1});
            else
            rejects(new error('Rejected', randomNo));
        })
    }, 3000)
}

conditionalPromise(1)
    .then(user=>{
        console.log(`"Resolved successfully"`);
    })
    .catch(error=>{
        console.log(error);
    })