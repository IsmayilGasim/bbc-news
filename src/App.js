import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Header from "./components/Header";
import TopNavBar from "./components/menu/TopNavBar";
import MainArticles from "./components/main-content/MainArticles";
import SideNavBar from "./components/menu/SideNavBar";
import useGetCollectionData from "../src/api/useGetCollectionData.js";

function App() {
  const { data: articleTopicsList } = useGetCollectionData("article-topics");
  const topics = articleTopicsList ? Object.keys(articleTopicsList) : [];

  return (
    <>

      <Header articleTopics={topics}/>
      <TopNavBar articleTopics={topics}/>
      <MainArticles />
    </>
  );
}

export default App;
