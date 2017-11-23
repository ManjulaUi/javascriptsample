var arr = [1,2,3,4,5,1];
var x = arr.entries();
var z= arr.keys();
for (let e of x)
{

    console.log(e);
    
}
console.log(z.next(1)+"  "+"checking keys");
console.log(arr.lastIndexOf(1)+"  "+"last index of ");