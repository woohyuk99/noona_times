//const API_KEY = "45db31da8f1e4247abfb1854c633e99b";
const API_KEY = `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines`;
const pageSize = 10
let page = 2
let category = ""
let keyword = ""
let newsList = []


const getLatestNews = async () => {
    const url = new URL(
        `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=${PAGE_SIZE}`

    );
    const response = await fetch(url) // 비동기함수
    const data = await response.json()
    newsList = data.articles
    render()
    console.log("dddd" , newsList)
}


const render = () =>{
    const newsHTML = newsList.map(
        (news) => `<div class="row news">
          <div class="col-lg-4">
            <img class="news-img-size"
              src=${news.urlToImage}
              alt=""
            />
          </div>
          <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <div>${news.source.name} * ${news.publishedAt}</div>
          </div>
        </div>`
    ) 
    

    document.getElementById('news-board').innerHTML = newsHTML
}
