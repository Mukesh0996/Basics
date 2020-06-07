// using Array functions
const one = [1,2,3,4,5];

const result = (accum, val) => accum + val;

console.log(one.reduce(result))

//using normal functions
console.log("using functions::")
const two = [1,2,3,4,5];
function check(two)
{
    let total = 0;
    for(let i =0;i<two.length;i++)
    {
        total = total + two[i]
    }
    return total;
}
console.log(check(two))