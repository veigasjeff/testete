import React, { useState } from "react";
import Head from "next/head";
import VideoPlayer from "../../components/VideoPlayer";
import TrailerPlayer from "../../components/TrailerPlayer";
import styles from "../../styles/cover.module.css";
import moviesData from "../../public/movies.json";
import Rating from "@components/Rating";
import ShareButtons from "@components/ShareButtons";
import Adult from "@components/Adult";
import Script from "next/script";

const Movie = ({ movie }) => {
  // Check if movie is undefined
  if (!movie) {
    return <div>Loading...</div>;
  }

  const bannerIframeStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    margin: "0px",
    border: "0px",
    borderStyle: "none",
    marginBottom: "10px",
    marginTop: "10px",
  };

  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.name,
    description: movie.synopsis,
    keywords: movie.keywords,
    image: movie.image,
    genre: movie.genre,
    datePublished: movie.yearRelease,
    director: movie.director,
    actor: movie.starring,
    contentRating: movie.contentRating,
    dateCreated: movie.dateCreated,
    embedUrl: movie.embedUrl,
    aggregateRating: movie.aggregateRating,
    trailer: movie.trailer && {
      "@type": "VideoObject",
      name: `${movie.name} Trailer`,
      description: `Watch the thrilling trailer of ${movie.name}.`,
      thumbnailUrl: movie.thumbnailUrl,
      embedUrl: movie.embedUrl,
      uploadDate: movie.uploadDate,
      duration: movie.duration,
    },
    actors:
      movie.actors &&
      movie.actors.map((actor) => ({
        "@type": "Person",
        name: actor.name,
      })),
    author: [
      {
        "@type": "Person",
        name: "DrTrailer",
        url: "https://uwatch4free.vercel.app/DrTrailer.jpg",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Uwatchfree",
      logo: {
        "@type": "ImageObject",
        url: "https://uwatch4free.vercel.app/og_image.jpg",
      },
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Action Platform",
      value: ["Desktop Web Platform", "iOS Platform", "Android Platform"],
    },
  });

  const [currentVideoUrl, setCurrentVideoUrl] = useState(movie.videoUrl);

  const loadVideo = (newVideoUrl) => {
    console.log("Setting iframe source:", newVideoUrl);
    setCurrentVideoUrl(newVideoUrl);
    console.log("New videoUrl set:", newVideoUrl);
  };

  const {
    title,
    synopsis,
    thumbnail,
    embedUrl,
    director,
    starring,
    type,
    tag,
    canonical,
    keywords,
    country,
    genre,
    contentRating,
    Originalnetwork,
    language,
    title1,
    image1,
    alt1,
    title2,
    image2,
    alt2,
    title3,
    image3,
    alt3,
    title4,
    image4,
    alt4,
    title5,
    image5,
    alt5,
    title6,
    image6,
    alt6,
  } = movie;

  const adult = movie.adult;

  // Extract episodes from the TV show data
  const episodes = Object.keys(movie)
    .filter((key) => key.startsWith("episode-"))
    .map((key) => movie[key])
    .filter(Boolean);

  const generateServerButtons = () => {
    // Extract episodes from the TV show data
    const episodes = Object.keys(movie)
      .filter((key) => key.startsWith("episode-"))
      .map((key) => movie[key])
      .filter(Boolean);

    // Check if episodes is defined and is an array
    if (episodes && Array.isArray(episodes) && episodes.length > 0) {
      // If episodes is defined and is an array, map through each episode
      return episodes.map((episode, index) => (
        <div className="button" key={index}>
          {episode ? (
            // If episode URL is defined, display a clickable button
            <button
              className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              style={{ fontSize: "20px", textShadow: "2px 3px 5px #2b2 " }}
              onClick={() => loadVideo(episode)}
            >
              Server {index + 1}
            </button>
          ) : (
            // If episode URL is not defined, display a disabled button
            <div
              className="bg-black text-black font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
              style={{ fontSize: "20px", textShadow: "2px 3px 5px #2b2 " }}
            >
              Server {index + 1}
            </div>
          )}
        </div>
      ));
    } else {
      // Handle the case when episodes is not defined or not an array
      return (
        <div
          className="text-center mb-8 text-white font-bold"
          style={{ fontSize: "30px", textShadow: "2px 3px 5px #2b2 " }}
        >
          {" "}
          No server available
        </div>
      );
    }
  };

  const generateDownloadButtons = () => {
    // Extract download URLs from the TV show data
    const downloadUrls = Array.from(
      { length: 2 },
      (_, i) => movie[`downloadUrl-${i + 1}`]
    ).filter(Boolean);

    // Check if downloadUrls is defined and is an array
    if (
      downloadUrls &&
      Array.isArray(downloadUrls) &&
      downloadUrls.length > 0
    ) {
      // If downloadUrls is defined and is an array, map through each download URL
      return downloadUrls.map((downloadUrl, index) => (
        <div className="button" key={index}>
          {downloadUrl ? (
            // If download URL is defined, display a clickable button
            <button
              className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              style={{
                fontSize: "20px",
                textShadow: "2px 3px 5px #2b2 ",
                marginLeft: "10px",
              }}
              onClick={() => window.open(downloadUrl, "_blank")}
            >
              Download {index + 1}
            </button>
          ) : (
            // If download URL is not defined, display a disabled button
            <div
              className="bg-black text-black font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
              style={{
                fontSize: "20px",
                textShadow: "2px 3px 5px #2b2 ",
                marginLeft: "10px",
              }}
            >
              Download {index + 1}
            </div>
          )}
        </div>
      ));
    } else {
      // Handle the case when downloadUrls is not defined or not an array
      return (
        <div
          className="text-center mb-8 text-white font-bold"
          style={{ fontSize: "30px", textShadow: "2px 3px 5px #2b2 " }}
        >
          {" "}
          No download links available
        </div>
      );
    }
  };

  return (
    <>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJsonData }}
        />
        <Head>
          <title>
            {`Watch ${movie.title} Full Movie Online Free | Uwatch4free™`}
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta name="keywords" content={keywords} />
          <meta property="og:locale" content="en_US" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="revisit-after" content="1 days" />
          <meta property="og:site_name" content={tag} />
          <meta property="og:type" content="movie" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:image:secure_url" content={thumbnail} />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={tag} />
          <meta name="twitter:image" content={thumbnail} />
          <meta name="description" content={type} />
          <meta
            name="google-site-verification"
            content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
          />
          <link rel="canonical" href={canonical} />
        </Head>
        {adult === "adult" && <Adult />}
        <div className={styles.container}>
          <h1 className={styles.title}>{title} </h1>
          <div style={bannerIframeStyle}>
            <iframe
              scrolling="no"
              frameBorder="0"
              width="300"
              height="250"
              src="https://refbanners.com/I?tag=d_2915177m_9769c_&site=2915177&ad=9769"
            ></iframe>
          </div>
          {/* thumbnail */}
          <div className={styles.thumbnailWrapper}>
            <img
              className={`${styles.thumbnail} animate-pulse`}
              src={thumbnail}
              alt={title}
            />
          </div>

          <h2 className={styles.director}> Director : {director}</h2>
          <h2 className={styles.genre}> Genre: {genre}</h2>
          <h2 className={styles.starring}> Starring : {starring}</h2>
          <h2 className={styles.country}> Country : {country}</h2>
          <h2 className={styles.contentRating}>
            {" "}
            Content Rating : {contentRating}
          </h2>
          <h2 className={styles.language}> Language : {language}</h2>
          <h2 className={styles.Originalnetwork}>
            {" "}
            Original Network : {Originalnetwork}
          </h2>
          <h3 className={styles.synopsis}>Synopsis : {synopsis}</h3>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                  <img
                    src={image1}
                    alt={alt1}
                    title={title1}
                    className="object-cover w-full h-full rounded-full"
                    loading="lazy"
                    layout="responsive"
                    style={{
                      filter: `
                                    contrast(1.05) 
                                    saturate(1.2)
                                    brightness(1.5)
                                    hue-rotate(-5deg)
                                  `,
                    }}
                  />
                  <strong
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2"
                    style={{
                      color: "#40D7BC",
                      fontSize: "14px",
                      textShadow: "3px 5px 5px #000",
                    }}
                  >
                    {title1}
                  </strong>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                  <img
                    src={image2}
                    alt={alt2}
                    title={title2}
                    className="object-cover w-full h-full rounded-full"
                    loading="lazy"
                    layout="responsive"
                    style={{
                      filter: `
                                      contrast(1.05) 
                                      saturate(1.05)
                                      brightness(1.2)
                                      hue-rotate(-5deg)
                                  `,
                    }}
                  />
                  {/* Director's name outside the circle */}
                  <strong
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2"
                    style={{
                      color: "#40D7BC",
                      fontSize: "14px",
                      textShadow: "3px 5px 5px #000",
                    }}
                  >
                    {title2}
                  </strong>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                  <img
                    src={image3}
                    alt={alt3}
                    title={title3}
                    className="object-cover w-full h-full rounded-full"
                    loading="lazy"
                    layout="responsive"
                    style={{
                      filter: `
                                      contrast(1.05) 
                                      saturate(1.05)
                                      brightness(1.2)
                                      hue-rotate(-5deg)
                                  `,
                    }}
                  />
                  {/* Director's name outside the circle */}
                  <strong
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2"
                    style={{
                      color: "#40D7BC",
                      fontSize: "14px",
                      textShadow: "3px 5px 5px #000",
                    }}
                  >
                    {title3}
                  </strong>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                  <img
                    src={image4}
                    alt={alt4}
                    title={title4}
                    className="object-cover w-full h-full rounded-full"
                    loading="lazy"
                    layout="responsive"
                    style={{
                      filter: `
                                      contrast(1.05) 
                                      saturate(1.05)
                                      brightness(1.2)
                                      hue-rotate(-5deg)
                                  `,
                    }}
                  />
                  {/* Director's name outside the circle */}
                  <strong
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2"
                    style={{
                      color: "#40D7BC",
                      fontSize: "14px",
                      textShadow: "3px 5px 5px #000",
                    }}
                  >
                    {title4}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="mt-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                  <img
                    src={image5}
                    alt={alt5}
                    title={title5}
                    className="object-cover w-full h-full rounded-full"
                    loading="lazy"
                    layout="responsive"
                    style={{
                      filter: `
                                      contrast(1.05) 
                                      saturate(1.05)
                                      brightness(1.2)
                                      hue-rotate(-5deg)
                                  `,
                    }}
                  />
                  {/* Director's name outside the circle */}
                  <strong
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2"
                    style={{
                      color: "#40D7BC",
                      fontSize: "14px",
                      textShadow: "3px 5px 5px #000",
                    }}
                  >
                    {title5}
                  </strong>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                  <img
                    src={image6}
                    alt={alt6}
                    title={title6}
                    className="object-cover w-full h-full rounded-full"
                    loading="lazy"
                    layout="responsive"
                    style={{
                      filter: `
                                      contrast(1.05) 
                                      saturate(1.05)
                                      brightness(1.2)
                                      hue-rotate(-5deg)
                                  `,
                    }}
                  />
                  {/* Director's name outside the circle */}
                  <strong
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2"
                    style={{
                      color: "#40D7BC",
                      fontSize: "14px",
                      textShadow: "3px 5px 5px #000",
                    }}
                  >
                    {title6}
                  </strong>
                </div>
              </div>
            </div>{" "}
          </div>
          <div style={bannerIframeStyle}>
            <iframe
              scrolling="no"
              frameBorder="0"
              width="300"
              height="250"
              src="https://refbanners.com/I?tag=d_2915177m_9769c_&site=2915177&ad=9769"
            ></iframe>
          </div>
          <Rating />
          <h3
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Watch Now{" "}
          </h3>
          {/* Video Player */}
          <div className={styles.playerWrapper}>
            <div className={styles.videoWrapper}>
              <VideoPlayer videoUrl={currentVideoUrl} />
            </div>
          </div>
          <h3
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Select Server
          </h3>
          {/* ... (other code) */}
          <div className="button-container mt-5 flex flex-wrap justify-center gap-4">
            {generateServerButtons()}
          </div>
          <div style={bannerIframeStyle}>
            <iframe
              scrolling="no"
              frameBorder="0"
              width="300"
              height="250"
              src="https://refbanners.com/I?tag=d_2915177m_9769c_&site=2915177&ad=9769"
            ></iframe>
          </div>
          <h3
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Official Trailer
          </h3>
          <div className={styles.videoPlayer}>
            <div className={styles.videoWrapper}>
              <TrailerPlayer embedUrl={embedUrl} />
            </div>
          </div>

          <ShareButtons
            url="https://uwatchfree.vercel.app"
            title="Watch Movies & TV-Series Online Free"
            image="https://uwatchfree.vercel.app/og_image.jpg"
          />
          {/* Download button */}
          <h3
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Click to Download
          </h3>
          <div className="button-container mt-5 flex flex-wrap justify-center gap-4">
            {generateDownloadButtons()}
          </div>
        </div>
      </div>
      <Script src="../../propler/ads.js" defer />
      <Script src="../../propler/ads2.js" defer />
    </>
  );
};

export async function getStaticPaths() {
  const paths = moviesData.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = moviesData.find((m) => m.id.toString() === params.id);

  return {
    props: {
      movie,
    },
  };
}

export default Movie;
