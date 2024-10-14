import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setArticles(data.articles);
    //     console.log(articles);
    //   });

    const getArticles = async () => {
      const response = await fetch(url);
      const data = await response.json();

      console.log("test", data);
      setArticles(data.articles);
    };

    getArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center" style={{ paddingTop: "20px" }}>
        Latest News
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
