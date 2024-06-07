const prompt=require("prompt-sync")({sigint: true})
let a=112;
let b=88
console.log(a+b)
const c=a+b;
console.log(c);
let pr=parseInt(prompt("Enter a number "));
let pr1=parseInt(prompt("Enter another number "));
console.log("Sum = "+pr+pr1);
console.log("Sum = ",pr+pr1);
console.log("Sum = "+(pr+pr1));