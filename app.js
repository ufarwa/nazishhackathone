import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const auth = getAuth();
const signin = ()=>{
    
console.log("test")
    let firstname= document.getElementById("firstname");
    
    let lastname= document.getElementById("lastname");
    
    let email= document.getElementById("email");
    
    let password= document.getElementById("password");

    

    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then((resolve)=>{
        alert("successfully signin")
     
    })
    .catch((reject)=>{
        alert("signin reject")
    })


}
let signin_btn=document.getElementById("signup-btn")
console.log(signin_btn)

if(signin_btn){
signin_btn.addEventListener("click",signin)

}else{
const login = ()=>{

    
    let email= document.getElementById("email");
    
    let password= document.getElementById("password");

    signInWithEmailAndPassword(auth,email.value,password.value)
    .then((resolve)=>{
        alert("successfully login ")
    })
    .catch((reject)=>{
        alert("login  reject")
    })


}
let login_btn=document.getElementById("login-btn")


login_btn.addEventListener("click",login)
}