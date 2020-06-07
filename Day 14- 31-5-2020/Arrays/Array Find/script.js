//using array functions

const array1 = [5, 12, 8, 130, 44];

const result = array1.find(val => val>10);
console.log(result);


// using function


const array2 = [5, 12, 8, 130, 44];
function find_val(array2)
{
    for(let i =0;i<array2.length;i++)
    {
        if(array2[i]> 10)
        {
            return array2[i]
            break;
        }
        
    }
}
console.log(find_val(array2))