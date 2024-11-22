// components/NewsSection.js
import React, { useState, useEffect } from 'react';

const NewsSection = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch the videos.json file
    fetch('/videos.json')
      .then((response) => response.json())
      .then((data) => setVideos(data.videos))
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  if (!videos.length) return <p>Loading news...</p>;

  // Main News (First Video)
  const mainNews = videos[0];

  // Other News Items
  const otherNews = videos.slice(1);

  return (
    <section>
      {/* Main News */}
      <div className="main-news">
        <iframe
          src={`https://www.youtube.com/embed/${mainNews.source}`}
          title={mainNews.title}
          allowFullScreen
        ></iframe>
        <div className="main-news-details">
          <h1>{mainNews.title}</h1>
          <p>{mainNews.description}</p>
          <p>
            <strong>{mainNews.date} - {mainNews.time}</strong>
          </p>
          <p>
            <em>Courtesy: {mainNews.courtesy}</em>
          </p>
        </div>
      </div>

      {/* Other News Grid */}
      <div className="news-grid">
        {otherNews.map((news, index) => (
          <div className="news-item" key={index}>
            <img src={news.thumbnail || news.image} alt={news.title} />
            <div className="news-details">
              <h2>{news.title}</h2>
              <p>{news.description}</p>
              <p>
                <strong>{news.date} - {news.time}</strong>
              </p>
              <p>
                <em>Courtesy: {news.courtesy}</em>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for styling */}
      <style jsx>{`
        .main-news {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }
        .main-news iframe {
          width: 60%;
          height: 300px;
        }
        .main-news-details {
          width: 40%;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .news-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 8px;
        }
        .news-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .news-details h2 {
          font-size: 1.2rem;
        }
        .news-details p {
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default NewsSection;
