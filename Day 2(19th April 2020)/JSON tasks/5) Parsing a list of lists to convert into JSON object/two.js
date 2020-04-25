var array =[["make","ford"],["model","Mustang"],["year",1964]]

function fromlisttobject(array)
{
    var new_object ={};
    while(array.length !=0)
    {
    var remove = array.shift();
    var key = remove[0];
    var value = remove[1];
    new_object[key] = value;
    }
    console.log(new_object);
}
fromlisttobject(array)