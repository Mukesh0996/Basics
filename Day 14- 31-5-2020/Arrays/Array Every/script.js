//using ES6
const array1 = [1,2,3,4,5,6,7,8,9];
const result = element => element < 10;

console.log(array1.every(result));


//using normal functions
const array2 = [1,2,3,4,5,6,7,8,9];

function check(array2)
{
for(let i=0;i<array2.length;i++)
{
if(array2[i] < 10)
{
   continue
}
else
{
    return false;
    break;
}
}
return true
}
console.log(check(array2));