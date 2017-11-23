var num=[10,20,30,40];
var num1=[11,33,55,34];

function divide(number) 
{
    return number%2==0;
    
}
console.log(num.find(divide)+" "+"find value");
console.log(num1.findIndex(divide)+" "+"find index");