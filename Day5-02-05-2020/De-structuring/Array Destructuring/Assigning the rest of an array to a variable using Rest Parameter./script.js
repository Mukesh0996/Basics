function f()
{
    return [1,2,3,4,5,6,7,8,9];

}

var [a,...b] = f()

console.log(a,b);