console.log("News API");

// API Key: cd5d0a792df0447c80004b5a1d9a8640
// grab news container
let newsDiv = document.querySelector("#news");

const URL = "http://newsapi.org/v2/top-headlines";
const source = "bbc-news";
const apiKey = "cd5d0a792df0447c80004b5a1d9a8640";

// create an AJAX get request
let xhr = new XMLHttpRequest();
xhr.open("GET", `${URL}?sources=${source}&apikey=${apiKey}`, true);

// when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    // console.log(json);
    let articles = json.articles;
    for (let news of articles) {
      // console.log(news);
      let string = `      
<div id="news">
<button
  class="btn btn-primary"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseExample"
  aria-expanded="false"
  aria-controls="collapseExample"
>
  ${news.title}
</button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    ${news.description}
  </div>
</div>
</div>`;
      newsDiv.innerHTML += string;
    }
  } else {
    console.log("Some error occured" + this.status);
  }
};
xhr.send();
