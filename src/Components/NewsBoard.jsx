import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4f22fe55f0964b2dbfd2111281bb6237`;
    const fetchArticles = async () => {
       
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setArticles(data.articles);
      };
      fetchArticles();
    }, [category]);
  return (
    <div>
        <h2 className='text-center mt-2'>LATEST <span className='badge bg-danger '>NEWS</span></h2>

        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}
export default NewsBoard
