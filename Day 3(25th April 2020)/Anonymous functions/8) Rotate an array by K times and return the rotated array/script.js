 var actual =["mukesh","kumar","guvi", "geek","chennai","bangalore"];
 var rotate = function(actual)
 {
     var K = Number(prompt("Enter the number of times you wish to rotate the array"));
     var i=1;
     for(i=1;i<=K;i++)
     {
       var result = rotateByOne(actual,K);
     }
     console.log(result);
 }
 function rotateByOne(actual,K)
 {
     var j, temp, len=actual.length;
    temp = actual[0]
     for(j=0;j<len;j++)
     {
         actual[j]= actual[j+1];
     }
     actual[len-1]= temp;
     return actual;
 }
 rotate(actual);