var actual =[101,202,303,404,403,405,606,1000];
var palindrome = actual.filter((item) => {
    var temp = item, reverse=0, reminder;
    while(temp > 0)
    {
        reminder = temp % 10;
        reverse = reverse*10 + reminder;
        temp = parseInt(temp/10);
    }
    if(reverse== item)
    {
        return item;
    }
});
console.log(palindrome);