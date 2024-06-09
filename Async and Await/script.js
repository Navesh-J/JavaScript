console.log("Loading script ...");
async function getData(){
    return new Promise((resolve , reject)=>{
     setTimeout(()=>{
         resolve(455);
     },3000);
    });
}

async function main(){
    console.log("Loading Modules");
    console.log("Loading images");
    console.log("Loading Data");
    let data = await getData();
    console.log(data);
    console.log("Data Fetched");
    console.log("Task - 1");
    console.log("Task - 2");
}
main();