function sendMessage()
{
    var email = document.getElementById("email").value;
    var name = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(email.value == null)
    {
        window.alert("Please Enter an Email!");
    }

    if(name.value == null)
    {
        window.alert("Please Enter a Name!");
    }

    if(message.value == null)
    {
        window.alert("Please Enter a message about yourself or your company.");
    }
}