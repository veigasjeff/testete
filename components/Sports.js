import React, { useEffect, useState } from "react";

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  // Fetch video data
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("/sports.json"); // Adjust the path as necessary
      const data = await response.json();
      setVideos(data.videos);
    };
    fetchVideos();
  }, []);

  // Get videos for the current page
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const pageVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Calculate total pages
  const totalPages = Math.ceil(videos.length / videosPerPage);

  // Load YouTube IFrame API and initialize players for visible videos
  useEffect(() => {
    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve();
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          tag.onload = () => {
            window.onYouTubeIframeAPIReady = resolve;
          };
          document.body.appendChild(tag);
        }
      });
    };

    loadYouTubeAPI().then(() => {
      pageVideos.forEach((video, index) => {
        if (video.source && video.source !== "#") {
          new window.YT.Player(`player-${index}`, {
            videoId: video.source,
            playerVars: {
              playsinline: 1,
              autoplay: 1,
              mute: 1,
              loop: 1,
              playlist: video.source,
            },
          });
        }
      });
    });
  }, [pageVideos]);

  return (
    <div className="videos-page">
      {/* <div
        className="videos-page "
        style={{
          textShadow: "1px 1px 0px #000",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        <h2  style={{
            textShadow: "1px 1px 0px #000",
            fontSize: "30px",
            textAlign: "center",
          }}>Sports News Section.</h2>
      </div> */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            textShadow: "1px 1px 0px #000",
            fontSize: "20px",
            textAlign: "center",
          }} >
          Previous
        </button>
        <span   style={{
          textShadow: "1px 1px 0px #000",
          fontSize: "20px",
          textAlign: "center",
        }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{
            textShadow: "1px 1px 0px #000",
            fontSize: "20px",
            textAlign: "center",
          }}  >
          Next
        </button>
      </div>
      <div className="video-grid">
        {pageVideos.map((video, index) => (
          <div key={`${video.source}-${index}`} className="video-card">
            <div className="video-content">
              <div className="thumbnail">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  style={{
                    width: "200px",
                    height: "150px",
                    boxShadow: "0 0 10px 0 #000",
                    filter:
                      "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
                  }}
                />
              </div>
              <div className="video-info font-bold">
                <h3
                  style={{
                    marginBottom: "10px",
                    textShadow: "1px 1px 0px #000",
                    fontSize: "30px",
                  }}
                >
                  {video.title}
                </h3>
                <p
                  style={{
                    marginBottom: "10px",
                    textShadow: "1px 1px 0px #000",
                    fontSize: "20px",
                  }}
                >
                  {video.description}
                </p>
                <div
                  style={{
                    marginBottom: "10px",
                    textShadow: "1px 1px 0px #000",
                    fontSize: "20px",
                  }}
                >
                  Published on {video.date} at {video.time} | Courtesy:{" "}
                  {video.courtesy}
                </div>
                {/* Conditional Rendering */}
                {video.description1 && <p>{video.description1}</p>}
                {video.image && (
                  <img
                    src={video.image}
                    alt={`${video.title} Image`}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: "10px",
                      borderRadius: "5px",
                    }}
                  />
                )}
                  {video.source && video.source !== "#" && (
              <div className="player-wrapper">
                <div id={`player-${index}`} className="video-player" />
              </div>
            )}
                {video.description2 && <p>{video.description2}</p>}
                {video.image1 && (
                  <img
                    src={video.image1}
                    alt={`${video.title} Image 1`}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: "10px",
                      borderRadius: "5px",
                    }}
                  />
                )}
              </div>
            </div>
            {/* {video.source && video.source !== "#" && (
              <div className="player-wrapper">
                <div id={`player-${index}`} className="video-player" />
              </div>
            )} */}
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            textShadow: "1px 1px 0px #000",
            fontSize: "20px",
            textAlign: "center",
          }} >
          Previous
        </button>
        <span   style={{
          textShadow: "1px 1px 0px #000",
          fontSize: "20px",
          textAlign: "center",
        }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{
            textShadow: "1px 1px 0px #000",
            fontSize: "20px",
            textAlign: "center",
          }}  >
          Next
        </button>
      </div>

        <style jsx>{`
        .videos-page {
          padding: 20px;
        }

        .video-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .video-card {
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          background-color: #fff;
        }

        .video-content {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 15px;
        }

        .thumbnail img {
          width: 150px;
          height: auto;
          border-radius: 5px;
        }

        .video-info {
          flex: 1;
        }

        .player-wrapper {
          margin-top: 10px;
          position: relative;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
        }

        .video-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .extra-content {
          margin-top: 15px;
        }

        .pagination {
          margin-top: 20px;
          text-align: center;
        }

        .pagination button {
          margin: 0 5px;
          padding: 10px 15px;
          border: none;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
          border-radius: 5px;
        }

        .pagination button:hover {
          background-color: #0056b3;
        }

        .pagination span {
          margin: 0 10px;
        }

        @media (max-width: 768px) {
          .video-content {
            flex-direction: column;
            align-items: stretch;
          }

          .thumbnail img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default VideosPage;
















