function myform() {   
    document.getElementById("btn").disabled = true;
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("msg").disabled = true;
    document.getElementById("send").style.visibility = "visible";
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var msg=document.getElementById("msg").value;
    var body="<span align='center'>Message Received<span> <br><br>Name : "+name +"<br><br>Email : "+email+"<br><br>Phone Number : " +phone+"<br><br>Message : "+msg;
    Email.send({
        SecureToken : "2823d84e-1217-4f31-9eab-5c7a9feb694b",
        To : `harshvardhanjoshi.eee1@bvp.edu.in,${email}`,
        From : "harshitjoshi001@gmail.com",
        Subject : "Email from "+ name,
        Body : body,
        Cc : email
    }).then(
    message => {
        if (message=='OK'){
            alert('Message received');
            document.getElementById("myForm").reset();
            document.getElementById("send").style.visibility = "hidden";
            document.getElementById("btn").disabled = false;
            document.getElementById("name").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("phone").disabled = false;
            document.getElementById("msg").disabled = false;
            
        }
        else{
            console.log(message);
            alert("Please try again later");
            document.getElementById("myForm").reset();
            document.getElementById("send").style.visibility = "hidden";
            document.getElementById("btn").disabled = false;
            document.getElementById("name").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("phone").disabled = false;
            document.getElementById("msg").disabled = false;     
        }
    }
    );
}