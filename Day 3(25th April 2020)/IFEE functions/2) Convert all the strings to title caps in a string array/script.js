var str1=["mukesh","title","kumar","guvi","geek"];
(function(str1)
{
    var i,j, Caps="";
    var newArray =[];
    for(i=0;i<str1.length;i++)
    {  Caps = "";
        for(j=0;j<str1[i].length;j++)
        {
            if(j==0)
            {
                Caps = Caps + str1[i][j].toUpperCase();
            }
            else
            {
              Caps = Caps + str1[i][j];
            }
        }
       newArray.push(Caps);
    }
    console.log(newArray);
})(str1);