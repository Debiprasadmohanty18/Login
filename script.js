let signinbtn = document.getElementById("signinbtn");
let signupbtn = document.getElementById("signupbtn");
let heading = document.getElementById("heading");
let usernamefield = document.getElementById("username-field");

signinbtn.onclick = function (){
    heading.innerHTML = "Sign In";
    usernamefield.style.maxHeight = '0';
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}

signupbtn.onclick = function (){
    heading.innerHTML = "Sign Up";
    usernamefield.style.maxHeight = '50px';
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}
