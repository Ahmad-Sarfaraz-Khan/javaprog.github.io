 alert("Print all even numbers less than or equal to n")
let n = parseInt(prompt("Enter any number"))
let num=[]
for(let i=1; i<=n; i++)
{
  if(i % 2 === 0)
  {
    console.log(i);
    num.push(i)
   }
}
prompt("The output is ", num)
alert(num)
