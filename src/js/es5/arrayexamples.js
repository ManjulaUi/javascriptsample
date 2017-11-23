export var arr=["aa","bb","cc","dd"];

var arr1=["ee","ff","gg","hh"];

 var con1=arr.concat(arr1);

console.log(con1);

arr.forEach(function (element)
{
console.log(element);
});

console.log(arr.includes("aa")+"  "+"includes");

console.log(arr.indexOf("aa")+"  "+"indexof element");

console.log(Array.isArray(arr)+"  "+"checking arrar or not");

console.log(arr1.join("*")+"  "+"joining array with *");
