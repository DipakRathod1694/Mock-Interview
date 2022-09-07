let a = [1,2,3,4,5,6]
let product =1;
for(var i=0;i<a.length;i++){
    if(a[i]%2==0){
        product*= a[i]
    }
}
console.log(product)