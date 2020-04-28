var num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
(function(num)
{
    var i;
    var length = num.length;
    var sum=0
    for(i=0;i<length;i++)
    {
        sum = sum+num[i]
    }
    console.log(sum)    
})(num);