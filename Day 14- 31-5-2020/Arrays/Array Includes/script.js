const array1 = ["1", "2", "3"];

console.log(array1.includes("2"));

//using functions
const array2 = ["1", "2", "3"];
function find(array2)
{
    for(let i =0;i<array2.length;i++)
    {
        if(array2[i]== "2")
        {
            return true;
            break
        }  
    }
    return false
}
console.log(find(array2))
