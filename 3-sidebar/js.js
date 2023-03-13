let btn = document.querySelector("button")
let nav = document.querySelector("nav")
let close = document.querySelector("i")

btn.addEventListener("click",function(){
nav.classList.toggle("editnav")})


close.addEventListener("click",function(){ nav.classList.toggle("editnav")})

