var array =["Guvi","1","2","Geek"]

function transformFirstAndLast(array)
{
    var my_new_Object ={};
    var key = array.shift() //removes the first element of the array
    var value = array.pop() //removes the last element of the array
    my_new_Object[key]=value
    console.log(my_new_Object)
}
transformFirstAndLast(array)