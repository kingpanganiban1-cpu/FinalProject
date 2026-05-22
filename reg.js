// Register shit
    
 
    let username;
    let email;
    let pass;
    let con_pass;
document.getElementById("regsub").onclick = function(event){

    event.preventDefault();

        username = document.getElementById("username").value;
        email = document.getElementById("email").value;
        pass = document.getElementById("password").value;
        con_pass = document.getElementById("confirm-password").value;
   

    if (username == "" || email == "" || pass == ""|| con_pass == " "){
        alert("punuin mo");
    }
    else if(pass !== con_pass){
        alert("di same pass boi")
    }
    else{
        window.location.href="login.html"
    }
    
console.log(username);
console.log(email);
console.log(pass);
console.log(con_pass);


}
