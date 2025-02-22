import axios from "axios";

function getNewsData(category) {
    category = "business";
    console.log("process",process.env.REACT_APP_NEWSDATA_API_KEY)
    const apiKey = process.env.REACT_APP_NEWSDATA_API_KEY;
   axios
    .get(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}`
    )
    .then((data) => {
        return console.log("data:",data.data.results);
    });
    axios.get("https://www.bbc.com/live").then((data)=>{
        console.log("bbc data", data)
    })
}

export default getNewsData;
