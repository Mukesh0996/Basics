var flag = true
function change()
{
    if(flag === true)
    {
    var temp = document.getElementById('one').innerHTML
    var x = document.getElementById('one').innerHTML = document.getElementById('two').innerHTML;
    var b = document.getElementById('two').innerHTML = temp;
    flag = false;
    }
}