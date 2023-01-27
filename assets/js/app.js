const show = document.querySelectorAll(".show");
const password = document.querySelectorAll(".pwd");
const btnLogin = document.getElementById("btn-login");
let container = document.querySelector(".container");
const signUp = document.querySelector(".sig-link");
const login = document.querySelector(".log-bt");


btnLogin.addEventListener("click",(e)=>{
    e.preventDefault();
});

show.forEach((eye)=>{
    eye.addEventListener("click",()=>{
        password.forEach((pwd)=>{
           if (pwd.type == "password") {
               pwd.type ="text";
               eye.classList.replace("uil-eye-slash","uil-eye");
           }else{
               pwd.type ="password";
               eye.classList.replace("uil-eye","uil-eye-slash");
           };
        });
    });
});
signUp.addEventListener("click",()=>{
    container.classList.add("active");
});

login.addEventListener("click",()=>{
    container.classList.remove("active");
})