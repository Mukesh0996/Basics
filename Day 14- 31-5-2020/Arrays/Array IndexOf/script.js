// using Array functions
const array1 =["one","two","three","four","five", "one"];

console.log(array1.indexOf("one",3));

console.log(array1.indexOf("one"))

//using normal functions
const array2 =["one","two","three","four","five", "one"];

console.log("using functions::::")
function check(array2)
{
    for(let i=0;i<array2.length;i++)
    {
        if(array2[i]==="one")
        {
            console.log(i);
            break;
        }
    }
    let start = 3
    for(let j = start;j< array2.length;j++)
    {
        if(array2[j]==="one")
        {
            console.log(j)
        }
    }
    
}

check(array2);