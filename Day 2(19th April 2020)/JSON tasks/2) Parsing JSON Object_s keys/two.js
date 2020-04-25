var result = new XMLHttpRequest();

result.open('GET', 'two.json', true)

result.onload = function(){
    var values = [];
    var data = JSON.parse(this.response);
    for(var i in data)
    {
     values.push(i)
    }
    console.log(values)
}
result.send()