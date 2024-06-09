/* Create a Faulty Calculator 

this faulty calculator does following:
1. It takes 2 numbers as input
2. It performs wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> **

Perform wrong operation only 10% of the time*/

let prob=Math.random();
let a=parseFloat(prompt("Enter 1st number"));
let b=parseFloat(prompt("Enter 2nd number"));
let op=(prompt("Enter operator"));
console.log(prob);

if(prob>0.1)
{
    switch (op)
    {
        case '+': console.log(a+b)
        break;
        case '-': console.log(a-b)
        break;
        case '*': console.log(a*b)
        break;
        case '/': console.log(a/b)
        break;
        case '%': console.log(a%b)
        break;
        case '**': console.log(a**b)
        break;
        default:console.log("Enter a valid operator")
    }
}
else{
    switch (op)
    {
        case '+': console.log(a-b)
        break;
        case '-': console.log(a/b)
        break;
        case '*': console.log(a+b)
        break;
        case '/': console.log(a**b)
        break;
        case '%': console.log(a*b)
        break;
        case '**': console.log(a%b)
        break;
        default:console.log("Enter a valid operator")
    }
}
