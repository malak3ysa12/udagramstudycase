function writeToFile(name, email, message){
    var fso = new CreateObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("\\messagesFolder\messages.txt", 8, false, 0);
    fh.WriteLine(name + ', ' + email + '\n' + message + '\n\n');
    fh.Close();
}

function sendMessage(name, email, message)				
{
    
    if((email == null || email =='') && (name == null || name =='') &&(message == null || message ==''))
    {
        window.alert('Please fill out all of the boxes below.');
    }
    else if((name == null || name ==''))
    {
        window.alert('Please enter a Name.');
    }
    else if((email == null || email ==''))
    {
        window.alert('Please enter an Email Address.');
    }
    else if((message == null || message ==''))
    {
        window.alert('Please enter a message with some info about you.');
    }
    else
    {
        //writeToFile(name, email, message);
        window.location.href = 'confirmation.html';
    }   
}		