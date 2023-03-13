
const button = document.querySelector ("button")
const color = document.querySelector ("span")
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


button.addEventListener("click", function() {
const randomf= getrandemColor ();
document.body.style.backgroundColor = colors[randomf]
color.textContent=colors[randomf]
})


function getrandemColor(){
 return Math.floor(Math.random() * colors.length);

}