let a=1 , b=3;
[a,b] =[b,a]
console.log(a,b);

const arr =[1,2,3];
[ [arr[1]],[arr[2]] ] = [ [arr[2]],[arr[1]] ];
console.log(arr)