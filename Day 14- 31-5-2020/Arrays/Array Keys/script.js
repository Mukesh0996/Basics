// Using rray functions
const array1 =["one","two","three","four"];

const iterator = array1.keys();

for( let key of iterator)
{
    console.log(key);
}

// using normal functions
const array2 =["one","two","three","four"];
console.log("Using normal functions:::")
function printValue (array2)
{
    for(let i =0;i< array2.length;i++)
    {
        console.log(i);
    }

}
printValue (array2);