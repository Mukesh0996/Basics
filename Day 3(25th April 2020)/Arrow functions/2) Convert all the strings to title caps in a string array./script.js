var actual =["mukesh","kumar","guvi","geek"];
var titlecaps = actual.map((item) => {
    var first = item.charAt(0).toUpperCase();
    var rest  = item.slice(1,item.length)
    var final = first+ rest;
    return final;
})
console.log(titlecaps);