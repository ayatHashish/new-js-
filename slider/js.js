const slides = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".pre");
let count = 0

slides.forEach(function (slide,index) {
    slide.style.left=`${index * 100 }%`
    
})

nextBtn.addEventListener("click",()=> {
 count++;  
/*    console.log("nextBtn") */
   carousel()

})

prevBtn.addEventListener("click",()=> {
    count--;
    /* console.log("prev") */
    carousel()
   
   })



   prevBtn.style.display = "none";


   
   function carousel() {
    if (count < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
  
    
    if (count > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${count * 100}%)`;
    });
  }