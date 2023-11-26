let cookieModel=document.querySelector(".cookie-consent-model")
let cancelCookieBtn=document.querySelector(".btn.Cancel")
let acceptCookieBtn=document.querySelector(".btn.Accept")

cancelCookieBtn.addEventListener("click",function(){
    cookieModel.classList.remove("active")
})

acceptCookieBtn.addEventListener("click",function(){
    cookieModel.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})
setTimeout(function(){
    let cookieAccepted=localStorage.getItem("cookieAccepted")
    if(cookieAccepted != "yes"){
    cookieModel.classList.add("active")
    }
},2000)