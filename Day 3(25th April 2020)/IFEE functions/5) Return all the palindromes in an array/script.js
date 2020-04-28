var nums =[101,2002,3003, 5005, 343, 455, 700, 800];
var findPalindrome = (function (nums)
{
    var i, reverse,reminder, palindrome=[], temp;
    for(i=0;i<nums.length;i++)
    {   
        reverse=0;
        temp = nums[i]
        while(temp > 0)
        {
            reminder = temp % 10;
            reverse = reverse* 10 + reminder;
            temp = parseInt(temp/10);
        }
        if(nums[i]==reverse)
        {
            palindrome.push(nums[i])
        }
    }
return palindrome;
})(nums);
console.log(findPalindrome);