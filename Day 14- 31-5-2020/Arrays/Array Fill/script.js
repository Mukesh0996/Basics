//using array functions

const array1 = [1, 2, 3, 4,5,6,7,8,90,100];

console.log("Result using fill() method::::",array1.fill(10,1,5))





// using function
const array2 =[1, 2, 3, 4,5,6,7,8,90,100]
function maipulate(array2)
{
    
   const replace = Number(prompt("Enter the number which you like to fill the array with:"));
   const start = Number(prompt("Enter the starting index:"))
   const end =  Number(prompt("Enter the ending index:"));
   console.log("The actual array is:::", array2);
   for(var i= start;i< end;i++)
   {
       array2[i] = replace
   }
   console.log("The array after filling is::", array2);
}
maipulate(array2)