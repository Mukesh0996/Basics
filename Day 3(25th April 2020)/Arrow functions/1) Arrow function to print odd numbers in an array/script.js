var nums=[1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18,19,20];

const filteredItems = nums.filter((item) => {
 return item%2 != 0;
})
console.log(filteredItems);