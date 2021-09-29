let formName=document.querySelector("#surname");
let formNamelimit=document.querySelector("#surname");
let formEmail=document.querySelector("#email");

let formMessage=document.querySelector('#message');


let nameAlert=document.querySelector("#name-alert");
let emailAlert=document.querySelector("#email-alert");
let messageAlert = document.querySelector('#message-alert')

let button=document.querySelector("#form-button");
button.style.background="grey";
button.disabled=true;

let checkName=false;
let checkNamelength=false;
let checkEmail=false;
let checkmessage=false;

formName.addEventListener("keyup", function(event){
    let name=event.target.value;
    nameAlert.style.display="block";
    
    let rgxName=/^[^\d]+$/;

    if(name.match(rgxName)){
        nameAlert.style.display="none";
        nameAlert.innerHTML="enter name only"
        checkName=true;
    }
    else if(name==""){
        nameAlert.style.display="none";
        checkName=false;
    }
    else{
        checkName=false;
    }

})

formNamelimit.addEventListener("keyup",function(e){
    let Namelimit = e.target.value
    let neamlen = Namelimit.length;
    if(neamlen < "4"){       
        namelength.innerHTML="minimum 4 number"
        checkNamelength=false;
    
     } else{
        namelength.innerHTML=""
        checkNamelength=true;
    }

})

formEmail.addEventListener("keyup", function(event){
    let email=event.target.value;
    emailAlert.style.display="block";

    let rgxEmail=/[a-z_0-9]+@[a-z]+\.(com|net|in)/;

    if(email.match(rgxEmail)){
        emailAlert.style.display="none";
        checkEmail=true;
    }
    else if(email==""){
        emailAlert.style.display="none";
        checkEmail=false;
    }
    else{
        checkEmail=false;
    }
})
formMessage.addEventListener("keyup",function(e){
    let message = e.target.value;
    let messageLength= message.length;
    if(messageLength <= "5"){
        messageAlert.innerHTML="enter minium 6 letters"
        checkmessage=false;
    }else{
        messageAlert.innerHTML=""
        checkmessage=true;
    }
})



setInterval(()=>{
   if(checkEmail && checkName && checkNamelength && checkmessage ){
       button.disabled=false;
       button.style.background="#5faee3";
   }else{
    button.disabled=true;
    button.style.background="grey";
   }
}, 100);


$("#submit-form").submit((e)=>{
    e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxP1NufY9b7p6Xl43reruHptPbjjFRmnPDEiLi7/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
    
            }
        })
})
       
  
    