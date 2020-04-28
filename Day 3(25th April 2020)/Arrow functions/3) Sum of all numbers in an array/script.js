var actual =[1,2,3];
var titlecaps = actual.reduce((total, item) => {
   return item + total
},0)
console.log(titlecaps);