var n = prompt("Enter a number: ");
{
for(i = 2; i <= n/2; i++)
{
if(n % i ==0)
{
break;
}
}
if(i > n/2)
alert("Is a Prime Number");
else
alert( "Is not a Prime Number");
}