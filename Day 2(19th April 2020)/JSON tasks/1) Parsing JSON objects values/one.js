var result = new XMLHttpRequest();

result.open('GET', 'one.json', true)

result.onload = function(){
    var values = [];
    var data = JSON.parse(this.response);
    for(var i in data)
    {
     values.push(data[i])
    }
    console.log(values)
}
result.send()