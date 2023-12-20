//                                            the best code on earth
import React, { useState } from "react";
import Head from "next/head";
import VideoPlayer from "../../components/VideoPlayer";
import TrailerPlayer from "../../components/TrailerPlayer";
import styles from "../../styles/cover.module.css";
import tvshowData from "../../public/tvshow.json"; // Corrected import statement
import Rating from "@components/Rating";
import ShareButtons from "@components/ShareButtons";
import Adult from "@components/Adult";
import Script from "next/script";

const TvShow = ({ tvshow }) => {
  // Check if tvshow is undefined
  if (!tvshow) {
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
    marginTop: "15px",
  };

  // const ldJsonData = JSON.stringify({
  //   "@context": "https://schema.org",
  //   "@type": "TVSeries",
  //   name: tvshow.name,
  //   description: tvshow.synopsis,
  //   keywords: tvshow.keywords,
  //   image: tvshow.image,
  //   genre: tvshow.genre,
  //   startDate: tvshow.startDate,
  //   dateCreated: tvshow.dateCreated,
  //   director: tvshow.director,
  //   actor: tvshow.starring,
  //   contentRating: tvshow.contentRating,
  //   embedUrl: tvshow.embedUrl,
  //   aggregateRating: tvshow.aggregateRating,
  //   additionalProperty: tvshow.additionalProperties,
  //   trailer: tvshow.trailer && {
  //     "@type": "VideoObject",
  //     name: `${tvshow.name} Trailer`,
  //     description: `Watch the thrilling trailer of ${tvshow.name}.`,
  //     thumbnailUrl: tvshow.thumbnailUrl,
  //     embedUrl: tvshow.embedUrl,
  //     uploadDate: tvshow.uploadDate,
  //     duration: tvshow.duration,
  //   },
  //   actors:
  //     tvshow.actors &&
  //     tvshow.actors.map((actor) => ({
  //       "@type": "Person",
  //       name: actor.name,
  //     })),
  //   season:
  //     tvshow.season &&
  //     tvshow.season.map((season) => ({
  //       "@type": "TVSeason",
  //       name: season.name,
  //       numberOfEpisodes: season.episode.length,
  //       episodes: season.episode.map((episode, episodeIndex) => ({
  //         "@type": "TVEpisode",
  //         name: `Episode ${episodeIndex + 1}`,
  //         description: episode.description,
  //         episodeNumber: episode.episodeNumber,
  //         image: episode.image,
  //         url: episode.url,
  //       })),
  //     })),
  //   director: tvshow.director && {
  //     "@type": "Person",
  //     name: tvshow.director,
  //   },
  //   uploadDate: tvshow.uploadDate,
  //   contentRating: tvshow.contentRating,
  //   Originalnetwork: tvshow.originalNetwork,
  //   author: [
  //     {
  //       "@type": "Person",
  //       name: "DrTrailer",
  //       url: "https://uwatch4free.vercel.app/DrTrailer.jpg",
  //     },
  //   ],
  //   publisher: {
  //     "@type": "Organization",
  //     name: "Uwatchfree",
  //     logo: {
  //       "@type": "ImageObject",
  //       url: "https://uwatch4free.vercel.app/og_image.jpg",
  //     },
  //   },
  //   additionalProperty: {
  //     "@type": "PropertyValue",
  //     name: "Action Platform",
  //     value: ["Desktop Web Platform", "iOS Platform", "Android Platform"],
  //   },
  // });

  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: tvshow.name,
    description: tvshow.synopsis,
    keywords: tvshow.keywords,
    image: tvshow.image,
    genre: tvshow.genre,
    startDate: tvshow.startDate,
    dateCreated: tvshow.dateCreated,
    director: tvshow.director && {
      "@type": "Person",
      name: tvshow.director,
    },
    actor: tvshow.starring && tvshow.starring.map((actor) => ({
      "@type": "Person",
      name: actor.name,
    })),
    contentRating: tvshow.contentRating,
    embedUrl: tvshow.embedUrl,
    aggregateRating: tvshow.aggregateRating,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Action Platform",
        value: ["Desktop Web Platform", "iOS Platform", "Android Platform"],
      },
    ],
    trailer: tvshow.trailer && {
      "@type": "VideoObject",
      name: `${tvshow.name} Trailer`,
      description: `Watch the thrilling trailer of ${tvshow.name}.`,
      thumbnailUrl: tvshow.thumbnailUrl,
      embedUrl: tvshow.embedUrl,
      uploadDate: tvshow.uploadDate,
      duration: tvshow.duration,
    },
    season: tvshow.season && tvshow.season.map((season) => ({
      "@type": "TVSeason",
      name: season.name,
      numberOfEpisodes: season.episode.length,
      episodes: season.episode.map((episode, episodeIndex) => ({
        "@type": "TVEpisode",
        name: `Episode ${episodeIndex + 1}`,
        description: episode.description,
        episodeNumber: episode.episodeNumber,
        image: episode.image,
        url: episode.url,
      })),
    })),
    uploadDate: tvshow.uploadDate,
    Originalnetwork: tvshow.originalNetwork,
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
  });
  

  const [currentVideoUrl, setCurrentVideoUrl] = useState(tvshow.videoUrl);

  const loadVideo = (newVideoUrl) => {
    console.log("Setting iframe source:", newVideoUrl);
    setCurrentVideoUrl(newVideoUrl);
    console.log("New videoUrl set:", newVideoUrl);
  };

  const {
    title,
    synopsis,
    thumbnail,
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
    uploadDate,
  } = tvshow;

  const adult = tvshow.adult;

  // Extract episodes from the TV show data
  const apisodes = Object.keys(tvshow)
    .filter((key) => key.startsWith("epi-"))
    .map((key) => tvshow[key])
    .filter(Boolean);

  const generateServerButtons = () => {
    // Extract episodes from the TV show data
    const apisodes = Object.keys(tvshow)
      .filter((key) => key.startsWith("apisode-"))
      .map((key) => tvshow[key])
      .filter(Boolean);

    // Check if episodes is defined and is an array
    if (apisodes && Array.isArray(apisodes) && apisodes.length > 0) {
      // If episodes is defined and is an array, map through each episode
      return apisodes.map((apisode, index) => (
        <div className="button" key={index}>
          {apisode ? (
            // If episode URL is defined, display a clickable button
            <button
              className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              style={{ fontSize: "20px", textShadow: "2px 3px 5px #2b2 " }}
              onClick={() => loadVideo(apisode)}
            >
              Episode {index + 1}
            </button>
          ) : (
            // If episode URL is not defined, display a disabled button
            <div
              className="bg-black text-black font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
              style={{ fontSize: "20px", textShadow: "2px 3px 5px #2b2 " }}
            >
              Episode {index + 1}
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
          No episodes available
        </div>
      );
    }
  };

  // Extract episodes from the TV show data
  const episodes = Object.keys(tvshow)
    .filter((key) => key.startsWith("episode-"))
    .map((key) => tvshow[key])
    .filter(Boolean);

  const generateEpisodeButtons = () => {
    // Extract episodes from the TV show data
    const episodes = Object.keys(tvshow)
      .filter((key) => key.startsWith("episode-"))
      .map((key) => tvshow[key])
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
              Episode {index + 1}
            </button>
          ) : (
            // If episode URL is not defined, display a disabled button
            <div
              className="bg-black text-black font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
              style={{ fontSize: "20px", textShadow: "2px 3px 5px #2b2 " }}
            >
              Episode {index + 1}
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
          No episodes available
        </div>
      );
    }
  };

  const generateDownloadButtons = () => {
    // Extract download URLs from the TV show data
    const downloadUrls = Array.from(
      { length: 12 },
      (_, i) => tvshow[`downloadUrl-${i + 1}`]
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
              Episode {index + 1}
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

  const generateUploadButtons = () => {
    // Extract download URLs from the TV show data
    const uploadUrls = Array.from(
      { length: 12 },
      (_, i) => tvshow[`uploadUrl-${i + 1}`]
    ).filter(Boolean);

    // Check if downloadUrls is defined and is an array
    if (uploadUrls && Array.isArray(uploadUrls) && uploadUrls.length > 0) {
      // If downloadUrls is defined and is an array, map through each download URL
      return uploadUrls.map((uploadUrl, index) => (
        <div className="button" key={index}>
          {uploadUrl ? (
            // If download URL is defined, display a clickable button
            <button
              className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              style={{
                fontSize: "20px",
                textShadow: "2px 3px 5px #2b2 ",
                marginLeft: "10px",
              }}
              onClick={() => window.open(uploadUrl, "_blank")}
            >
              Episode {index + 1}
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
        {`Watch ${movie.title} | Uwatch4free™`}
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
          <meta property="og:url" content={thumbnail} />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:image:secure_url" content={thumbnail} />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={tag} />
          <meta name="twitter:image" content={thumbnail} />
          <meta name="description" content={type} />
          <meta name="google-site-verification" content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU" />
          <link rel="canonical" href={canonical} />
        </Head>
        {adult === "adult" && <Adult />}
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>

          {/* Container for the banner iframe */}
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

          <h2 className={styles.director}> Director: {director}</h2>
          <h2 className={styles.genre}> Genre: {genre}</h2>
          <h2 className={styles.starring}> Starring: {starring}</h2>
          <h2 className={styles.country}> Country: {country}</h2>
          <h2 className={styles.contentRating}>
            {" "}
            Content Rating: {contentRating}
          </h2>
          <h2 className={styles.language}> Language: {language}</h2>
          <h2 className={styles.Originalnetwork}>
            {" "}
            Original Network: {Originalnetwork}
          </h2>
          <h3 className={styles.synopsis}>Synopsis: {synopsis}</h3>
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
          <h2
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Watch Now
          </h2>

          {/* Video Player */}
          <div className={styles.playerWrapper}>
            <div className={styles.videoWrapper}>
              <VideoPlayer videoUrl={currentVideoUrl} />
            </div>
          </div>

          <h2
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Select Server 1{" "}
          </h2>

          <div>
            {/* ... (other code) */}
            <div className="button-container mt-5 flex flex-wrap justify-center gap-4">
              {generateEpisodeButtons()}
            </div>
            {/* ... (other code) */}
          </div>
          <h2
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Select Server 2{" "}
          </h2>

          <div>
            {/* ... (other code) */}
            <div className="button-container mt-5 flex flex-wrap justify-center gap-4">
              {generateServerButtons()}
            </div>
            {/* ... (other code) */}
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
          <h2
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            Official Trailer
          </h2>
          <div className={styles.videoPlayer}>
            <div className={styles.videoWrapper}>
              <TrailerPlayer embedUrl={tvshow.embedUrl} />
            </div>
          </div>

          <ShareButtons
            url="https://uwatchfree.vercel.app"
            title="Watch Movies & TV-Series Online Free"
            image="https://uwatchfree.vercel.app/og_image.jpg"
          />

          {/* Download button */}
          <h2
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            {" "}
            Download Server 1
          </h2>
          <div className="button-container mt-5 flex flex-wrap justify-center gap-4">
            {generateDownloadButtons()}
          </div>

          {/* Download button */}
          <h2
            className="flex flex-col text-center mb-8 text-white font-bold"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              textShadow: "2px 3px 5px #2b2 ",
            }}
          >
            {" "}
            Download Server 2
          </h2>
          <div className="button-container mt-5 flex flex-wrap justify-center gap-4">
            {generateUploadButtons()}
          </div>
        </div>
      </div>
      <Script src="../../propler/ads.js" defer />
      <Script src="../../propler/ads2.js" defer />
    </>
  );
};

export async function getStaticPaths() {
  const paths = tvshowData.map((tvshow) => ({
    params: { id: tvshow.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Find the TV show based on the id from the JSON data
  const tvshow = tvshowData.find((t) => t.id.toString() === params.id);

  return {
    props: {
      tvshow,
    },
  };
}

export default TvShow;
