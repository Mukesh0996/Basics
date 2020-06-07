//using array functions

const one = ['a','b','c','d','e'];
const two = ['f','g','h','i','j']

const result = one.concat(two);

console.log("Concat using array functions::::", result);

//using functions

const three = ['a','b','c','d','e','f'];
const four = ['g','h','i','j','k'];

function mergeArray(three, four)
{
    const result = three + "," + four;
    return result
}
console.log(mergeArray(three,four).split(","));