var odd = function(num)
{
    var i,j;
    var length = num.length;
    var sum=0, count=0,prime =[];
    for(i=0;i<length;i++)
    {   count =0;
        for(j=1;j<=num[i];j++)
        {
            if(num[i]%j==0)
            {
                count = count+1;
                if(count==3) // to minimise the execution steps when the number is no more a prime number
                {
                  break;
                }
            }
        }
        if(count==2)
        {
            prime.push(num[i])
        }
    }
    return prime;
}
var num =[10,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var result = odd(num)
console.log(result)