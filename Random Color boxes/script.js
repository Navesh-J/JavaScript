console.log("Script Initializing");
let box=document.getElementsByClassName("box");

Array.from(box).forEach(e=>{
    e.style.backgroundColor=getRandomColor();
    e.style.color=getRandomColor();
})

function getRandomColor(){
    let a=Math.ceil(0+Math.random()*255);
    let b=Math.ceil(0+Math.random()*255);
    let c=Math.ceil(0+Math.random()*255);
    return `rgb(${a},${b},${c})`;
}