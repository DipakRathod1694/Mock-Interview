let a= [ 1,2,3,4,5,6,7,8,9]

let n=3;

for(var i=0;i<a.length;i++){
    a.shift(a[a.length-1])
    a.length--;
}
console.log(a)