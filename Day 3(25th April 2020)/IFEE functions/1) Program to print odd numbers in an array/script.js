var num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
(function(num) {
    var i;
    var length = num.length;
    var oddnums =[];
    for(i=0;i<length;i++)
    {
        if(num[i] % 2 !=0)
        {
            oddnums.push(num[i])
        }
    }
    console.log(oddnums.join(" "))    
})(num);