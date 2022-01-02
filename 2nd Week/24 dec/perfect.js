let n = prompt();
let flag = 0;

for(let i=1; i<n; i++){
 if(n % i==0 && n/i==i){
   flag=1;
   break;
 }
}
if(flag==1){
  console.log(" A number is Perfect square");
}
else{
  console.log(" A number is not a perfect square");
}
