var a ={"name": "RajiniKanth", "age": 33, "hasPets" : false}
var loop =[]
for(i in a)
{
    var key = i
    loop.push([key,a[key]])
}
console.log(loop)