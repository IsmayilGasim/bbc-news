import axios from "axios";
import { useEffect, useState } from "react";

function useGetNewsData(category) {
  const [news, setNews] = useState(null);
  console.log("category", category);

  let url;
  if (category) {
    url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API_KEY}&category=${category}`;
  } else {
    url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API_KEY}`;
  }
  useEffect(() => {
    axios.get(url).then((data) => {
      setNews(data.data.results);
      console.log("request count");
    });
  }, [category]);

  console.log("news data:", news);
  return news;
}

export default useGetNewsData;
