import Head from "next/head";
import { Tab, Tabs, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Home.module.css";
import AdultSkipAds from "../../components/AdultSkipAds";
import Script from "next/script";
import Link from "next/link";
import Rating from "pages/Rating";

const ldJsonData = JSON.stringify([
  {
    "@context": "http://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://uwatch4free.vercel.app/#website",
        url: "https://uwatch4free.vercel.app/",
        name: "Uwatch4free™ | Watch HD Movies and TV-Series Online Free",
        description:
          "Uwatch4free™ is a movie streaming site. Where you can find tvshows of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!",
        inLanguage: "en-US",
        publisher: {
          "@id": "https://uwatch4free.vercel.app/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://uwatch4free.vercel.app/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": "https://uwatch4free.vercel.app/#person",
        name: "Uwatch4free™",
        image: {
          "@type": "ImageObject",
          "@id": "https://uwatch4free.vercel.app/#personImage",
          url: "https://uwatch4free.vercel.app/wp-content/uploads/2023/06/Dr.webp",
          width: 303,
          height: 430,
          caption: "Dr Trailer",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://uwatch4free.vercel.app/#breadcrumblist",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/",
              name: "Home",
              description:
                "Uwatch4free™ is a movie streaming site. Where you can find tvshows of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!",
              url: "https://uwatch4free.vercel.app/",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/adult/halohalox",
              name: "Halo Halo X - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Halo-Halo X opens its first episode, titled Extra Rider, with a glimpse into the challenging life of our protagonist, the Rider. Struggling to make ends meet, he turns to offering additional services to clients who book him for journeys, seeking financial relief in a world that seems indifferent to his hardships. The character of the Rider is introduced as a person caught in the web of economic struggles, where traditional means of income are insufficient.",
              url: "https://uwatch4free.vercel.app/adult/halohalox",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/adult/halohalox#collectionpage",
        url: "https://uwatch4free.vercel.app/adult/halohalox",
        name: "Halo Halo X - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          "Halo-Halo X opens its first episode, titled Extra Rider, with a glimpse into the challenging life of our protagonist, the Rider. Struggling to make ends meet, he turns to offering additional services to clients who book him for journeys, seeking financial relief in a world that seems indifferent to his hardships. The character of the Rider is introduced as a person caught in the web of economic struggles, where traditional means of income are insufficient.",
        inLanguage: "en-US",
        isPartOf: {
          "@id": "https://uwatch4free.vercel.app/#website",
        },
        breadcrumb: {
          "@id": "https://uwatch4free.vercel.app/#breadcrumblist",
        },
        about: {
          "@id": "https://uwatch4free.vercel.app/#person",
        },
        additionalProperty: {
          "@type": "PropertyValue",
          name: "Action Platform",
          value: ["Desktop Web Platform", "iOS Platform", "Android Platform"],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "7.8",
          bestRating: "10",
          worstRating: "0",
          ratingCount: "1",
        },
      },
    ],
  },
]);

const halohalox = () => {
  const loadVideo = (videoPage) => {
    const videoIframe = document.getElementById("videoIframe");

    console.log("Setting iframe source:", videoPage);

    videoIframe.src = videoPage;

    console.log("Iframe source set:", videoIframe.src);
  };

  return (
    <>
      <script
        type="application/ld+json"
        className="aioseo-schema"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
      <div className={styles.container}>
        <Head>
          <title>
            Watch Halo Halo X (2023) Full Movie Online Free | Uwatch4free™
          </title>

          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="halo halo x, halo halo x 2023 online, watch hindi movie halo halo x online, index of halo halo x movie,watch halo halo x 2023, halo halo x hd streaming online, halo halo x videos, action, drama, halo halo x cast, hindi movie, halo halo x action movie, halo halo x movie download, new release, new hindi movie, Uwatch4free, blockbuster movie, Uwatch4free tvshows"
          />
          <meta property="og:locale" content="en_US" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="revisit-after" content="1 days" />
          <meta
            property="og:site_name"
            content="Uwatch4free™ | Watch tvshows & TV-Series Online Free"
          />
          <meta property="og:type" content="movie" />
          <meta
            property="og:title"
            content="Watch Halo Halo X (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/adult/halohalox"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/cJP4gRcC/Halo-Halo-X.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/cJP4gRcC/Halo-Halo-X.webp"
          />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="400" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Halo Halo X (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/cJP4gRcC/Halo-Halo-X.webp"
          />
          <meta
            name="description"
            content="Watch Halo Halo X Full Movie Online on Uwatch4free™, You can also Watch Now Halo Halo X (2023) Or Download To Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
          <link
            rel="canonical"
            href="https://uwatch4free.vercel.app/adult/halohalox"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
        <AdultSkipAds />
        <div style={{ backgroundColor: "#000" }}>
          {/* Container for Live Stream heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#40D7BC",
              fontSize: "32px",
              textShadow: "1px 1px 1px #fff",
            }}
          >
            <h1>Halo Halo X (2023)</h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/cJP4gRcC/Halo-Halo-X.webp"
              alt="Halo Halo X Movie Logo"
              width={303} // Adjust this value based on the actual width of your image
              height={430} // Adjust this value based on the actual height of your image
              style={{
                borderRadius: "5%",
                border: "2px solid #40D7BC",
                display: "inline-block",
                filter:
                  "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
              }}
            />
          </div>
          <p
            className="card-text"
            style={{
              color: "#40D7BC",
              fontSize: "18px",
            }}
          >
            <strong>Relased: </strong>October 08, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> Avg 45 Min. </span>
            <br></br>
            <strong>Genre:</strong> Adult, HOT, 18+
            <br></br>
            <strong>Language: </strong>Filipino.
            <br></br>
            <strong>Country of Origin: </strong> Philippines.
            <br></br>
            <strong>Original Network: </strong> Viva Max.
            <br></br>
            <strong>Content Rating: </strong> Philippines: +18.
          </p>
          {/* Container for Watch Official Trailer heading */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2
              style={{
                marginTop: "10px",
                color: "#40D7BC",
                fontSize: "32px",
                textShadow: "1px 1px 1px #fff",
              }}
            >
              {" "}
              Watch Official Trailer{" "}
            </h2>
          </div>

          {/* Container for Video */}
          <div className="container mx-auto mt-8">
            <div
              itemscope
              itemtype="https://schema.org/VideoObject"
              className="embed-responsive embed-responsive-16by9"
              style={{ marginBottom: "20px" }}
            >
              <meta
                itemprop="name"
                content="Halo Halo X (2023) Official Trailer | Watch4Freetvshows™"
              />
              {/* Add other meta tags */}
              <video
                className="embed-responsive-item rounded-2xl"
                controls
                autoPlay
                muted
                poster="https://filebee.imgpress.xyz/images/2023/10/21/999a4366f56e.webp"
                controlsList="nodownload"
                width="150%"
                height="auto"
              >
                <source src="https://gdurl.com/DMRL5" type="video/mp4" />
                {/* Add other video sources if needed */}
              </video>
            </div>
            <Rating />
            {/* Container for Watch Movie heading */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h2
                style={{
                  marginTop: "10px",
                  color: "#40D7BC",
                  fontSize: "32px",
                  textShadow: "1px 1px 1px #fff",
                }}
              >
                {" "}
                Watch Movie{" "}
              </h2>
            </div>

            {/* Container for Responsive Iframe */}
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%", // You can adjust this percentage based on your needs
                height: 0,
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              <iframe
                src="https://drive.google.com/file/d/1HM6B3nC01PwOKDOKuFKe7TLPFVqXbiMI/preview"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%", // Make the width 100% to fill the container
                  height: "100%", // Make the height 100% to fill the container
                  filter: `
                contrast(1.05) 
                saturate(1.05)
                brightness(1.2)
                hue-rotate(-5deg)
              `,
                }}
                allow="autoplay"
                id="videoIframe"
                allowTransparency // use allowTransparency instead of allowtransparency
                allowFullScreen
              />
            </div>
            <h3
              className="mt-5 text-center animate-pulse"
              style={{
                color: "#40D7BC",
                fontSize: "32px",
                textShadow: "3px 5px 5px #fff",
              }}
            >
              <span>&#x1F4E1;</span> Select Episode
            </h3>

            <div className="button-container mt-5 flex flex-wrap justify-center gap-4">
              {/* Add your buttons with appropriate onClick handlers */}
              <div className="button">
                <button
                  className="btn btn-outline btn-warning font-bold"
                  style={{
                    color: "#000000",
                    fontSize: "20px",
                    textShadow: "3px 5px 5px #000",
                  }}
                  onClick={() =>
                    loadVideo(
                      "https://drive.google.com/file/d/1HM6B3nC01PwOKDOKuFKe7TLPFVqXbiMI/preview"
                    )
                  }
                >
                  Episode 1
                </button>
              </div>
              <div className="button">
                <button
                  className="btn btn-outline btn-warning font-bold"
                  style={{
                    color: "#000000",
                    fontSize: "20px",
                    textShadow: "3px 5px 5px #000",
                  }}
                  onClick={() =>
                    loadVideo(
                      "https://drive.google.com/file/d/1qlfES4SCWHsF3tctkdHbC0CRCTkxd2Q4/preview"
                    )
                  }
                >
                  Episode 2
                </button>
              </div>

              <div className="button">
                <button
                  className="btn btn-outline btn-warning font-bold"
                  style={{
                    color: "#000000",
                    fontSize: "20px",
                    textShadow: "3px 5px 5px #000",
                  }}
                  onClick={() =>
                    loadVideo(
                      "https://drive.google.com/file/d/1CXxgVqEzxSqXwS61Qdhc18PeAnenHjVF/preview"
                    )
                  }
                >
                  Episode 3
                </button>
              </div>
              <div className="button">
                <button
                  className="btn btn-outline btn-warning font-bold"
                  style={{
                    color: "#000000",
                    fontSize: "20px",
                    textShadow: "3px 5px 5px #000",
                  }}
                  onClick={() =>
                    loadVideo(
                      "https://drive.google.com/file/d/1WYw3-vX-SO4qdDX6AcKKEMt0s_ce0ssB/preview"
                    )
                  }
                >
                  Episode 4
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              backgroundColor: "#000",
            }}
          >
            <div className="container ">
              <Tabs
                defaultActiveKey="details"
                id="myTabs"
                className="justify-center font-bold  animate-pulse"
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontSize: "20px",
                  backgroundColor: "#000",
                }}
              >
                <Tab eventKey="details" title="SYNOPSIS">
                  <div className="card bg-transparent rounded">
                    <div className="card-body">
                      <p
                        className="card-text"
                        style={{
                          color: "#40D7BC",
                          fontSize: "18px",
                        }}
                      >
                        <strong>
                          {" "}
                          "Halo-Halo X" opens its first episode, titled "Extra
                          Rider," with a glimpse into the challenging life of
                          our protagonist, the Rider. Struggling to make ends
                          meet, he turns to offering additional services to
                          clients who book him for journeys, seeking financial
                          relief in a world that seems indifferent to his
                          hardships. The character of the Rider is introduced as
                          a person caught in the web of economic struggles,
                          where traditional means of income are insufficient.
                          His decision to offer "extra" services reflects the
                          desperation that often accompanies financial hardship,
                          and sets the stage for the exploration of deeper human
                          desires. The central plot takes an intriguing turn
                          when the Rider encounters a mysterious client, setting
                          the stage for a narrative filled with hidden motives
                          and unexplored secrets. The Client becomes a pivotal
                          figure, shrouded in mystery, and as the story unfolds,
                          viewers are drawn into a world where every character
                          harbors secrets that will gradually unravel. Amidst
                          the complexities of the main plot, a significant
                          character emerges — the Maid. A quiet and unassuming
                          woman, the Maid becomes a key player in the unfolding
                          drama. Her reserved nature hides a secret that will
                          not only alter the course of the narrative but also
                          impact the life of the struggling Rider. Themes of
                          desire and its consequences form the backbone of the
                          episode. The Rider, in his pursuit of financial
                          stability, becomes entangled in a web of desires that
                          transcend the purely economic. The narrative deftly
                          explores the dangers of succumbing to temptation,
                          depicting the ripple effects that such decisions can
                          have on the lives of individuals. At its core, "Extra
                          Rider" delves into the power of human connection. In a
                          world marked by financial struggles and hidden
                          desires, the characters find themselves interconnected
                          in unexpected ways. The quiet Maid, despite her
                          unassuming presence, holds a pivotal role in shaping
                          the destiny of the Rider. The episode unfolds as a
                          narrative mosaic, where desire, temptation, and human
                          connection intersect in unexpected and often poignant
                          ways. The character dynamics are carefully crafted to
                          keep the audience engaged, with each revelation adding
                          layers of complexity to the overarching story. The
                          cinematography and direction play crucial roles in
                          conveying the atmosphere and emotions of "Halo-Halo
                          X." The visual storytelling amplifies the tension and
                          sensuality of the plot, creating an immersive
                          experience for the audience. In conclusion, "Halo-Halo
                          X: Extra Rider" serves as a promising introduction to
                          a series that weaves together themes of desire,
                          temptation, and human connection. The characters, each
                          carrying their burdens and secrets, navigate a world
                          where economic struggles are entwined with deeper,
                          more complex desires. As the narrative unfolds,
                          viewers are invited to explore the intricate web of
                          relationships and the consequences of choices made in
                          the pursuit of fulfillment. The episode successfully
                          sets the stage for further exploration, leaving
                          audiences intrigued and eager for the revelations that
                          will shape the course of the series.
                        </strong>
                      </p>
                    </div>
                  </div>
                </Tab>

                <Tab eventKey="cast" title="CAST">
                  <div className="card bg-transparent rounded">
                    <div className="card-body ">
                      <ul>
                        {/* <li>
                          <strong>Director : Roman Perez Jr.</strong>
                        </li> */}

                        <li>
                          <a
                            href="https://www.imdb.com/title/tt29287568/"
                            target="_blank"
                          >
                            <button class="btn btn-outline btn-warning animate-pulse">
                              <strong
                                style={{
                                  color: "#000000",
                                  fontSize: "20px",
                                  textShadow: "3px 5px 5px #000",
                                }}
                              >
                                {" "}
                                Link to IDBM{" "}
                              </strong>{" "}
                            </button>
                          </a>
                        </li>
                        {/* <li>
                          <p></p>
                        </li>
                        <li>
                          <a
                            href="https://en.wikipedia.org/wiki/halo halo x_(TV_series)"
                            target="_blank"
                          >
                            <button class="btn btn-outline btn-warning animate-pulse">
                              <strong
                                style={{
                                  color: "#000000",
                                  fontSize: "20px",
                                  textShadow: "3px 5px 5px #000",
                                }}
                              >
                                {" "}
                                Link to WIKIPEDIA{" "}
                              </strong>{" "}
                            </button>
                          </a>
                        </li> */}
                        <li>
                          <p></p>
                        </li>
                        <div className="flex justify-center items-center">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://i.mydramalist.com/xDOvX_5c.jpg"
                                  alt="Roman Perez Jr. Image"
                                  title="Roman Perez Jr."
                                  className="object-cover w-full h-full rounded-full"
                                  loading="lazy"
                                  layout="responsive"
                                  style={{
                                    filter: `
                                contrast(1.05) 
                                saturate(1.2)
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
                                  Roman Perez Jr.
                                </strong>
                              </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://m.media-amazon.com/images/M/MV5BYTdhMmIzNTItNDFhNy00YjYwLWI3YTUtZWFhYTdjNGFjZTkzXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_FMjpg_UX1000_.jpg"
                                  alt="Archie Daguinod Image"
                                  title="Archie Daguinod."
                                  className="object-cover w-full h-full rounded-full"
                                  loading="lazy"
                                  layout="responsive"
                                  style={{
                                    filter: `
                                contrast(1.05) 
                                saturate(1.2)
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
                                  Archie Daguinod
                                </strong>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://m.media-amazon.com/images/M/MV5BOTI5MzZiMTItZjZmMi00YTA2LTkxOTgtYTBhODAyNTQ1ZjI4XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg"
                                  alt="Lodie Favo Image"
                                  title="Lodie Favo."
                                  className="object-cover w-full h-full rounded-full"
                                  loading="lazy"
                                  layout="responsive"
                                  style={{
                                    filter: `
                                contrast(1.05) 
                                saturate(1.2)
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
                                  Lodie Favo
                                </strong>
                              </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://i0.wp.com/peoplaid.com/wp-content/uploads/2021/08/Jela-Cuenca.jpg?fit=469%2C459&ssl=1"
                                  alt=" Jela Cuenca Image"
                                  title="Jela Cuenca."
                                  className="object-cover w-full h-full rounded-full"
                                  loading="lazy"
                                  layout="responsive"
                                  style={{
                                    filter: `
                                contrast(1.05) 
                                saturate(1.2)
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
                                  Jela Cuenca
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
                                  src="https://i.mydramalist.com/Xd866J_5c.jpg"
                                  alt="Ataska Mercado Image"
                                  title="Ataska Mercado."
                                  className="object-cover w-full h-full rounded-full"
                                  loading="lazy"
                                  layout="responsive"
                                  style={{
                                    filter: `
                                contrast(1.05) 
                                saturate(1.2)
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
                                  Ataska Mercado
                                </strong>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://i.mydramalist.com/4em1jd_5c.jpg"
                                  alt="Micaella Raz Image"
                                  title="Micaella Raz."
                                  className="object-cover w-full h-full rounded-full"
                                  loading="lazy"
                                  layout="responsive"
                                  style={{
                                    filter: `
                                contrast(1.05) 
                                saturate(1.2)
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
                                  Micaella Raz
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/10/08/HaloHalo-2.jpg"
                          alt="Screenshot 1 Image"
                          title="Screenshot 1."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginTop: "10px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.2)
                              brightness(1.5)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/10/08/HaloHalo-3.jpg"
                          alt="Screenshot 1 Image"
                          title="Screenshot 1."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginTop: "10px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.05)
                              brightness(1.2)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/10/08/HaloHalo-5.jpg"
                          alt="Screenshot 1 Image"
                          title="Screenshot 1."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginTop: "10px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.05)
                              brightness(1.2)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/10/08/HaloHalo-7.jpg"
                          alt="Screenshot 1 Image"
                          title="Screenshot 1."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginTop: "10px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.05)
                              brightness(1.2)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/10/08/HaloHalo-9.jpg"
                          alt="Screenshot 1 Image"
                          title="Screenshot 1."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginTop: "10px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.05)
                              brightness(1.2)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/10/08/HaloHalo-10.jpg"
                          alt="Screenshot 1 Image"
                          title="Screenshot 1."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginTop: "10px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.05)
                              brightness(1.2)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/10/08/HaloHalo-15.jpg"
                          alt="Screenshot 1 Image"
                          title="Screenshot 1."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginTop: "10px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.05)
                              brightness(1.2)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />
                      </ul>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="download" title="DOWNLOAD">
                  <div className="card bg-transparent rounded">
                    <div className="card-body">
                      <ul>
                        <h2
                          style={{
                            color: "#fff",
                            fontSize: "32px",
                            textShadow: "3px 5px 5px #fff",
                          }}
                        >
                          {" "}
                          Download Movie
                        </h2>
                        <h2
                          className="flex justify-center items-center font-bold animate-pulse"
                          style={{
                            color: "#40D7BC",
                            fontSize: "32px",
                            textShadow: "3px 5px 5px #000",
                          }}
                        >
                          Click To Monetize
                        </h2>
                        <div className="flex flex-col items-center justify-center text-center">
                          <Link
                            href="https://monetag.com/?ref_id=mgVg"
                            target="_blank"
                          >
                            <img
                              src="https://pbs.twimg.com/media/F3ApEe9XsAEfA1W?format=png&name=900x900"
                              alt="monetag Image"
                              title="Monetag."
                              loading="lazy"
                              layout="responsive"
                              style={{
                                marginBottom: "20px",
                                filter: `
                              contrast(1.05) 
                              saturate(1.2)
                              brightness(1.5)
                              hue-rotate(-5deg)
                            `,
                              }}
                            />{" "}
                          </Link>
                        </div>
                        <div class="button-container">
                          <a
                            href="#"
                            target="_blank"
                          >
                            {" "}
                            <button
                              className="btn btn-outline btn-success"
                              style={{
                                color: "#40D7BC",
                                fontSize: "24px",
                                textShadow: "3px 5px 5px #000",
                              }}
                            >
                              {" "}
                              Episode 1{" "}
                              <i
                                class="fa fa-download"
                                aria-hidden="true"
                              ></i>{" "}
                            </button>
                          </a>
                        </div>
                        <h2
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {" "}
                        </h2>
                        <div class="button-container">
                          <a
                            href="#"
                            target="_blank"
                          >
                            <button
                              className="btn btn-outline btn-success"
                              style={{
                                color: "#40D7BC",
                                fontSize: "24px",
                                textShadow: "3px 5px 5px #000",
                              }}
                            >
                              {" "}
                              Episode 2{" "}
                              <i
                                class="fa fa-download"
                                aria-hidden="true"
                              ></i>{" "}
                            </button>
                          </a>
                        </div>
                        <h2
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {" "}
                        </h2>
                        <div class="button-container">
                          <a
                            href="#"
                            target="_blank"
                          >
                            <button
                              className="btn btn-outline btn-success"
                              style={{
                                color: "#40D7BC",
                                fontSize: "24px",
                                textShadow: "3px 5px 5px #000",
                              }}
                            >
                              {" "}
                              Epesode 3{" "}
                              <i
                                class="fa fa-download"
                                aria-hidden="true"
                              ></i>{" "}
                            </button>
                          </a>
                        </div>
                        <h2
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {" "}
                        </h2>
                        <div class="button-container">
                          <a
                            href="#"
                            target="_blank"
                          >
                            <button
                              className="btn btn-outline btn-success"
                              style={{
                                color: "#40D7BC",
                                fontSize: "24px",
                                textShadow: "3px 5px 5px #000",
                              }}
                            >
                              {" "}
                              Epesode 4{" "}
                              <i
                                class="fa fa-download"
                                aria-hidden="true"
                              ></i>{" "}
                            </button>
                          </a>
                        </div>
                        </ul>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Script src="../../propler/ads.js" defer />
      <Script src="../../propler/ads2.js" defer />
    </>
  );
};

export default halohalox;
