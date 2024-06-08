const prompt=require("prompt-sync")({sigint:true})
let age=prompt("Enter your age : ")
age=Number.parseInt(age)
if(age<0||age>130)
console.log("INVALID AGE")
else{
    if(age<18)
    console.log("You are not an Adult")
    else if(age>=18&&age<=70)
    console.log("Congratulations! You are eligible for driving license")
    else
    console.log("You are too old to drive")
}