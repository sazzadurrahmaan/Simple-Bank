const loginUser = document.getElementById("loginUser")
const loginPass = document.getElementById("loginPass")

document.getElementById("loginButton").addEventListener("click",function(){
   if(loginUser.value === "temp@gmail.com" && loginPass.value == 12500){
    window.location.assign("functional bank.html");
   }
   else{
    alert("user : temp@gmail.com && password:12500");
   }

})
