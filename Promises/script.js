console.log("Script is initializing...");

let prom= new Promise((resolve,reject) =>{
    let a=Math.random();
    console.log(a);
    if(a<0.5)
        reject("Site Under Maintenance ")
    else{
        setTimeout(() => {
            console.log("Completed");
            resolve("hello There")
        }, 1000);
    }
});

prom.then((a) =>{
    console.log(a);
}).catch((err) =>{
    console.log(err);
});