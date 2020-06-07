//using ES6
const array1 = [10,20,30,50,60,70,100,90];

const isLargeNumber = element => element >20;

console.log(array1.findIndex(isLargeNumber));

//using normal functions

const array2 = [10,20,30,50,60,70,100,90];
function find(array2)
{
    for(let i=0; i < array2.length;i++)
    {
        if(array2[i]>10)
        {
            return i+1;
            break;
        }
    }
}
console.log("Output using functions::",find(array2));