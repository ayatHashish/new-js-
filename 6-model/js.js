let btn = document.querySelector(".modal-btn")
let btnX = document.querySelector(".close-btn")
let overlay = document.querySelector(".modal-overlay")

btn.addEventListener("click" , function () 
{ overlay.classList.toggle("open-modal")});
   
btnX.addEventListener("click" , function () 
{overlay.classList.remove("open-modal")});


