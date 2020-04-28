var removeDuplicates = function(actual)
{
var length = actual.length;
var i,j, temp=[];
for(i=0;i<length;i++)
{
    for(j=i+1;j<length;j++)
    {
        if(actual[i]===actual[j])
        {
           temp.push(actual[i])
        }
    }
}
for(i=0;i<temp.length;i++)// for loop to eliminate more than one duplicate values since they wil not be captured in the above loops
{
    for(j=i+1;j<temp.length;j++)
    {
    if(temp[i]===temp[j])
        {
            temp.splice(j,1)
        }
    }
}
console.log(temp)
}
var actual = [1,"one", 2 , "two" , 3 , "three" , 1 , "one" , 2 ,"two" , 3 , "three", 2, "two"]
removeDuplicates(actual)