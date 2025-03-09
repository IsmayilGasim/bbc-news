import Header from "./Header.js";
import TopNavBar from "./menu/TopNavBar";
import MainArticles from "./main-content/MainArticles";

import useGetCollectionData from "../api/useGetCollectionData.js";
import useGetNewsData from "../api/getNewsData.js";

function Layout() {
  const { data: articleTopicsList } = useGetCollectionData("article-topics");
  const topics = articleTopicsList ? Object.keys(articleTopicsList) : [];
  const newsData = useGetNewsData();
  console.log('layout.js')
  return (
    <>
      <Header articleTopics={topics} />
      <TopNavBar articleTopics={topics} />
      <MainArticles news={newsData} />
    </>
  );
}

export default Layout;
