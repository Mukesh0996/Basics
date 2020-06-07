//using array functions
const array1 = ['one', 'two', 'three'];
console.log(array1.reverse());

//using normal functions
const array2 = ['one', 'two', 'three'];
function rev(array2)
{
    const result =[]
    for(let i =array2.length-1;i>=0;i--)
    {
        result.push(array2[i])
    }
    return result
}
console.log("The result is::",rev(array2));