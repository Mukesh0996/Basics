var result = new XMLHttpRequest();

result.open('GET', 'https://restcountries.eu/rest/v2/all', true)

result.onload = function(){
    var data = JSON.parse(this.response)
    for(var i in data){
    console.log("The country name is: "+data[i].name)
    console.log("The Captial of "+data[i].name+" is: "+data[i].capital)
    console.log("The Flag of "+data[i].name+" is: "+ data[i].flag)
    }
}
result.send()