import Nav from "../components/public/Nav";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RSSFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchArticles = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/feeds`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Nav />
      </div>

      <div className='flex flex-col items-center justify-center flex-1 p-10 gap-10 dark:bg-gray-950'>
        <h1 className="text-4xl text-purple-1100 font-bold text-center" data-aos="fade-up">Tech News</h1>

        <div className='flex flex-row justify-center items-stretch gap-10 p-5 flex-wrap'>
          {loading ? (
            <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4'>
              <p className="text-lg text-slate-800 dark:text-slate-100 font-medium text-center">Loading articles...</p>
            </div>
          ) : error ? (
            <div data-aos="fade-up" className='flex flex-col justify-center gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4'>
              <p className="text-lg text-red-500 font-medium text-center">Error: {error}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Make sure the backend server is running at {process.env.REACT_APP_API_URL}</p>
            </div>
          ) : (
            articles.map((article, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className='flex flex-col justify-between gap-5 max-w-md w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-dark-purple-100 rounded-lg border border-purple-500 dark:border-dark-purple-500 shadow-lg shadow-purple-500 dark:shadow-dark-purple-500 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500 transition-transform duration-300'
              >
                {article.image_url && (
                  <img 
                    src={article.image_url} 
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg text-slate-800 dark:text-slate-100 font-bold text-center">
                    {article.title}
                  </h2>
                  <p className="text-slate-800 dark:text-slate-100 font-medium text-center line-clamp-3">
                    {article.description}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Published: {new Date(article.pub_date).toLocaleDateString()}
                  </div>
                </div>
                <a 
                  href={article.link}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='flex justify-center items-center'
                >
                  <button className='bg-purple-800 w-1/2 h-12 rounded-lg text-white hover:bg-purple-700 transition-colors duration-300'>
                    Read Article
                  </button>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RSSFeed;
