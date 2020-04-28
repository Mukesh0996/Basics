var actual =[10,2,3,5,7,11,13,17,19];
var primeArray = actual.filter((num)=>
{
var i, count=0;
for(i=1;i<=num;i++)
{
    if(num%i ==0)
    {
        count = count + 1;
    } 

}
if(count == 2)
    {
       return num;
    }
});
console.log(primeArray)