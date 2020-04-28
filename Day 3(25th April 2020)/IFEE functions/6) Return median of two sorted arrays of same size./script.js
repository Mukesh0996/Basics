var a =[9,8,7,6,5,4,3,2,1];
var b = [800,900,700,100,100,200,500,80,10];
var sort = (function(a,b)
{
var lena = a.length;
var lenb = b.length;
var final_array =[], median;
var i, finalarray_length;
if(lena==lenb)
{
for(i=0;i<lena;i++)
{
    for(j=i+1;j<lena;j++)
    {
        if(a[i] > a[j])
        {
            gtr = a[i];
            a[i] = a[j];
            a[j] = gtr;
        }
    }
}
for(i=0;i<lenb;i++)
{
    for(j=i+1;j<lenb;j++)
    {
        if(b[i] > b[j])
        {
            gtr = b[i];
            b[i] = b[j];
            b[j] = gtr;
        }
    }
}
final_array = a.concat(b);
finalarray_length = final_array.length;
median = finalarray_length/2;
return final_array[median];
}
})(a,b);

console.log("The value in the median is: "+sort);