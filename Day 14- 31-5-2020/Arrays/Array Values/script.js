// Using rray functions
const array1 =["one","two","three","four"];

const iterator = array1.values();

for( let value of iterator)
{
    console.log(value);
}

// using normal functions
const array2 =["one","two","three","four"];
function printValue (array2)
{
    for(let i =0;i< array2.length;i++)
    {
        console.log(array2[i]);
    }

}
printValue (array2);