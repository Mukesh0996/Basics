var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; 
var passRregex = /^[a-zA-Z0-9!@#$%^&*]{8}$/;
function check()
{
    var email = document.getElementById('email_value').value;
    var pswd = document.getElementById('p_value').value;   

    if(email=="")
    {
       alert("Enter a valid Email address or Phone Number") 
    }

    if(emailRegex.test(email))
    {
        alert("Valid email")
        check_Password(pswd);
    }

    if(phoneRegex.test(email))
    {
        alert("Valid phone number")
        check_Password(pswd);
    }

}

function check_Password(pswd)
{
    if(passRregex.test(pswd))
    {
        alert("Logging In....")
    }
    else
    {
        alert("Please enter a valid password")
    }
}