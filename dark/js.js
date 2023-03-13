let btn = document.querySelector(".change")
const articlesContainer = document.querySelector('.articles');
btn.addEventListener("click",() => { document.body.classList.toggle("them");})


const articlesData = family
.map((article) => {
    const { title, date, snippet } = article;
     const formatDate = moment(date).format('MM/DD/YYYY'); 
 return `
<article class="post">
      <h2>${title}</h2>
      <div class="post-info">
        <span>${formatDate}</span>
      </div>
      <p>${snippet}</p>

</article>`;
})
.join(''); 



articlesContainer.innerHTML = articlesData;

