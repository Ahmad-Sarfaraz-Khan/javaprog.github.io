let arr=[];
let i = prompt("Enter the number")
i = parseInt(i)
arr.push(i);
i = prompt("Enter the number")
i = parseInt(i)
arr.push(i);
i = prompt("Enter the number")
i = parseInt(i)
arr.push(i);
let max = Math.max(arr[0], arr[1], arr[2]);
alert(max);
if((arr[0] >= arr[1]) && (arr[0] >= arr[2])) {
  alert(arr[0]);
} else if ((arr[1] >= arr[0]) && (arr[1] >= arr[2])) {
  alert(arr[1]);
} else {
  alert(arr[2]);
}