function validation(){
    if(document.formfill.Username.value == ""){
        document.getElementById("result").innerHTML="Enter Username*"
        return false;
    }
    else if(document.formfill.Username.value.length < 3){
        document.getElementById("result").innerHTML="Username atleast 5 letter*"
        return false;
    }
    else if(document.formfill.Email.value == ""){
        document.getElementById("result").innerHTML="Enter E-mail*"
        return false;
    }
    else if(document.formfill.Password.value == ""){
        document.getElementById("result").innerHTML="Enter Password*"
        return false;
    }
    else if(document.formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password atleast 8 character*"
        return false;
    }
    else if(document.formfill.cPassword.value == ""){
        document.getElementById("result").innerHTML="Enter Confirm Password*"
        return false;
    }
    else if(document.formfill.Password.value != document.formfill.cPassword.value){
        document.getElementById("result").innerHTML="Password doen't match*"
        return false;
    }
    else if(document.formfill.Password.value == document.formfill.cPassword.value){
       popup.classList.add("open-slide")
       return false;
    }
    
}
var popup = document.getElementById('popup');

function CloseSlide(){
    popup.classList.remove("open-slide");
    
}