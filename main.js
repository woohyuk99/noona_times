const API_KEY = `45db31da8f1e4247abfb1854c633e99b`;
let news = []
const getLatestNews = async () => {
    const url = new URL(
        `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`
    );
    const response = await fetch(url) // 비동기함수
    const data = await response.json()
    news = data.articles
    console.log("dddd" , news)
}
getLatestNews()