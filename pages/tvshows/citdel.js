import Head from "next/head";
import { Tab, Tabs, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Home.module.css";
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
        "url": "https://uwatch4free.vercel.app/",
        "name": "Watch4free tvshows™ | Watch tvshows and TV-Series Online Free",
        "description": "Watch4free tvshows™ is a movie streaming site. Where you can find tvshows of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://uwatch4free.vercel.app/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://uwatch4free.vercel.app/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Person",
        "@id": "https://uwatch4free.vercel.app/#person",
        "name": "Watch4free tvshows™",
        "image": {
          "@type": "ImageObject",
          "@id": "https://uwatch4free.vercel.app/#personImage",
          "url": "https://uwatch4free.vercel.app/wp-content/uploads/2023/06/Dr.webp",
          "width": 303,
          "height": 430,
          "caption": "Dr Trailer"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://uwatch4free.vercel.app/#breadcrumblist",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/",
              "name": "Home",
              "description": "Watch4free tvshows™ is a movie streaming site. Where you can find tvshows of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!",
              "url": "https://uwatch4free.vercel.app/"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/tvshows/citadel",
              "name": "Citadel - 2023 | Watch4free tvshows™ Full Movie Online Free",
              "description": "J   \"Citadel, the 2023 American spy thriller television series, stands as a remarkable addition to the world of espionage dramas. Created by the talented trio of Josh Appelbaum, Bryan Oh, and David Weil, this series boasts an ensemble cast featuring Richard Madden, Priyanka Chopra Jonas, Stanley Tucci, and Lesley Manville. Produced by Amazon Studios, AGBO, and Thematic Entertainment, Citadel has garnered both critical acclaim and a dedicated fan following.",
              "url": "https://uwatch4free.vercel.app/tvshows/citadel"
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/tvshows/citadel#collectionpage",
        "url": "https://uwatch4free.vercel.app/tvshows/citadel",
        "name": "Citadel - 2023 | Watch4free tvshows™ Full Movie Online Free",
        "description": "   Citadel, the 2023 American spy thriller television series, stands as a remarkable addition to the world of espionage dramas. Created by the talented trio of Josh Appelbaum, Bryan Oh, and David Weil, this series boasts an ensemble cast featuring Richard Madden, Priyanka Chopra Jonas, Stanley Tucci, and Lesley Manville. Produced by Amazon Studios, AGBO, and Thematic Entertainment, Citadel has garnered both critical acclaim and a dedicated fan following.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://uwatch4free.vercel.app/#website"
        },
        "breadcrumb": {
          "@id": "https://uwatch4free.vercel.app/#breadcrumblist"
        },
        "about": {
          "@id": "https://uwatch4free.vercel.app/#person"
        },
        "additionalProperty": {
          "@type": "PropertyValue",
          "name": "Action Platform",
          "value": ["Desktop Web Platform", "iOS Platform", "Android Platform"]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "7.8",
          "bestRating": "10",
          "worstRating": "0",
          "ratingCount": "1"
        }
      }
    ]
  }
]);

const citdel = () => {
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
            Watch Citadel (2023) Full Movie Online Free | Watch4free tvshows™
          </title>

          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="citadel, citadel 2023 online, watch hindi movie citadel online, index of citadel movie,watch citadel 2023, citadel hd streaming online, citadel videos, action, drama, citadel cast, hindi movie, citadel action movie, citadel movie download, new release, new hindi movie, Watch4free tvshows, blockbuster movie, Watch4free tvshows tvshows"
          />
          <meta property="og:locale" content="en_US" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="revisit-after" content="1 days" />
          <meta
            property="og:site_name"
            content="Watch4free tvshows™ | Watch tvshows & TV-Series Online Free"
          />
          <meta property="og:type" content="movie" />
          <meta
            property="og:title"
            content="Watch Citadel (2023) | Watch4free tvshows™"
          />
          <meta property="og:url" content="https://uwatch4free.vercel.app/tvshows/citdel" />
          <meta
            property="og:image"
            content="https://i.postimg.cc/HnhgCmQy/Citadel-2023.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/HnhgCmQy/Citadel-2023.webp"
          />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="400" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Citadel (2023) | Watch4free tvshows™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/HnhgCmQy/Citadel-2023.webp"
          />
          <meta
            name="description"
            content="Watch citadel Full Movie Online on Watch4free tvshows™, You can also Watch Now citadel (2023) Or Download To Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
          />
          <link rel="canonical" href="https://uwatch4free.vercel.app/tvshows/citdel" />
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
            <h1>CITADEL</h1>
          </div>

          {/* Container for Movie Logo */}
          <div class="animate-pulse" style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src="https://i.postimg.cc/HnhgCmQy/Citadel-2023.webp"
              alt="Citedel 3 Movie Logo"
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
            <strong>Relased: </strong>April 28, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> Avg 45 Min. </span>
            <br></br>
            <strong>Genre:</strong> Action, Thriller, Drama.
            <br></br>
            <strong>Language: </strong>English.
            <br></br>
            <strong>Country of Origin: </strong>United States.
            <br></br>
            <strong>Original Network: </strong> Amazon Prime Video.
            <br></br>
            <strong>Content Rating: </strong> United States:TV-14.
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
                content="Citadel (2023) Official Trailer | Watch4Freetvshows™"
              />
              {/* Add other meta tags */}
              <video
                className="embed-responsive-item rounded-2xl"
                controls
                autoPlay
                muted
                poster="https://www.koimoi.com/wp-content/new-galleries/2023/03/prime-video-debuts-exclusive-clip-for-landmark-spy-series-citadel-during-priyanka-chopra-jonas-sxsw-keynote-01.jpg"
                controlsList="nodownload"
                width="150%"
                height="auto"
              >
                <source src="https://gdurl.com/cgdk" type="video/mp4" />
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
                src="https://drive.google.com/file/d/1oQ2KE7i6TVP46grnm8ZcsOvgTTMTtPV8/preview"
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
                      "https://drive.google.com/file/d/1oQ2KE7i6TVP46grnm8ZcsOvgTTMTtPV8/preview"
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
                      "https://drive.google.com/file/d/1_CNQUELW6jPfqeoELKEWG76b0wgHmriR/preview"
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
                      "https://drive.google.com/file/d/15F0CFa_KBcWfdt0TEYgjkNf_iDQGoKOF/preview"
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
                      "https://drive.google.com/file/d/1jTGrVmzxwT0vR9FJhBGS9RZMowIYOlEl/preview"
                    )
                  }
                >
                  Episode 4
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
                      "https://drive.google.com/file/d/1p_ck4w10vbeYVLDUrCsYzGQuuhNOimv8/preview"
                    )
                  }
                >
                  Episode 5
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
                      "https://drive.google.com/file/d/1-Nu9ZUlfkYE2gKloUIeLPLysSbgFqSQC/preview"
                    )
                  }
                >
                  Episode 6
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
                <Tab eventKey="details"  title="SYNOPSIS">
                <div className="card bg-transparent rounded">
                      <div className="card-body">
                     
                      <p className="card-text"  style={{
                       color: "#40D7BC",
                        fontSize: "18px",
                   
                      }}>
                        <strong>
                          {" "}
                          Citadel, the 2023 American spy thriller television
                          series, stands as a remarkable addition to the world
                          of espionage dramas. Created by the talented trio of
                          Josh Appelbaum, Bryan Oh, and David Weil, this series
                          boasts an ensemble cast featuring Richard Madden,
                          Priyanka Chopra Jonas, Stanley Tucci, and Lesley
                          Manville. Produced by Amazon Studios, AGBO, and
                          Thematic Entertainment, Citadel has garnered both
                          critical acclaim and a dedicated fan following. At its
                          core, Citadel weaves a riveting narrative around a
                          group of spies hailing from diverse corners of the
                          globe. What sets their story apart is the compelling
                          twist: their memories have been meticulously wiped
                          clean. Stripped of their pasts, they find themselves
                          thrust into an uneasy alliance, compelled to cooperate
                          in a high-stakes mission???thwarting a formidable
                          criminal organization that threatens global security.
                          This premise unfolds across multiple international
                          backdrops, including the bustling streets of London,
                          the towering skyscrapers of New York City, and the
                          exotic landscapes of Morocco. The journey of Citadel
                          began with Amazon Studios' greenlighting of the series
                          in 2020. Under the deft direction of Newton Thomas
                          Sigel and Jessica Yu, the show's first season made its
                          highly anticipated debut on Prime Video on April 28,
                          2023. From the outset, Citadel made waves for its
                          gripping action sequences, elevating the spy thriller
                          genre with meticulously choreographed, heart-pounding
                          sequences that leave audiences on the edge of their
                          seats. While action may be at the forefront, it's the
                          performances of the cast that breathe life into the
                          series. Richard Madden, known for his role in Game of
                          Thrones, delivers a compelling portrayal, while
                          Priyanka Chopra Jonas, a global sensation, adds depth
                          and intrigue to her character. The formidable Stanley
                          Tucci and the ever-talented Lesley Manville round out
                          the ensemble with performances that are nothing short
                          of captivating. One of the hallmarks of Citadel is its
                          commitment to authenticity. The series embraces high
                          production values, with its globe-spanning narrative
                          brought to life through extensive location shooting.
                          This dedication to realism immerses viewers in a
                          visually stunning world that mirrors the diversity of
                          the story's international settings. At its core,
                          Citadel thrives on intrigue and suspense. The
                          storyline unfolds with intricate layers, and the plot
                          is rife with unexpected twists and turns. As viewers
                          follow the complex web of espionage and betrayal, they
                          are continually challenged to piece together the
                          puzzle, keeping them engrossed from episode to
                          episode. The series' impact has been profound, both
                          critically and commercially. Citadel quickly ascended
                          to become one of the most-watched original series on
                          Prime Video, underscoring its widespread appeal and
                          gripping storytelling. Excitingly, a second season of
                          Citadel is already in development, with a slated
                          premiere in 2024. This continuation promises to delve
                          even deeper into the enigmatic world of espionage,
                          expanding upon the intriguing characters and
                          high-stakes missions that have captured the
                          imaginations of fans. In summary, Citadel offers a
                          tantalizing blend of action, espionage, and suspense,
                          making it a must-watch for fans of the spy thriller
                          genre. With its stellar cast, top-notch production
                          values, and a storyline that keeps you guessing, it's
                          a series that has left an indelible mark on the
                          landscape of television. Whether you're a seasoned
                          enthusiast of espionage dramas or simply seeking a
                          thrilling and well-crafted series, Citadel delivers on
                          all fronts, promising an exhilarating ride through the
                          shadowy world of spies and covert operations.
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
                          <strong>Director : Newton Thomas Sigel</strong>
                        </li> */}

                        <li>
                          <a
                            href="https://www.imdb.com/title/tt9794044/"
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
                        <li>
                          <p></p>
                        </li>
                        <li>
                          <a
                            href="https://en.wikipedia.org/wiki/Citadel_(TV_series)"
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
                        </li>
                        <li>
                          <p></p>
                        </li>
                        <div className="flex justify-center items-center">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://m.media-amazon.com/images/M/MV5BMTczODc4Mjk1Ml5BMl5BanBnXkFtZTcwNTczMjQ1OA@@._V1_.jpg"
                                  alt="Newton Thomas Sigel Image"
                                  title="Newton Thomas Sigel."
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
                                  Newton Thomas Sigel
                                </strong>
                              </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://flxt.tmsimg.com/assets/600563_v9_bb.jpg"
                                  alt="Richard Madden Image"
                                  title="Richard Madden."
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
                                  Richard Madden
                                </strong>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://cdn.britannica.com/82/220482-050-17843B41/Priyanka-Chopra-2020.jpg"
                                  alt="Priyanka Chopra Jonas Image"
                                  title="Priyanka Chopra Jonas."
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
                                  Priyanka Chopra Jonas
                                </strong>
                              </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://flxt.tmsimg.com/assets/152560_v9_bc.jpg"
                                  alt=" Lesley Manville Image"
                                  title="Lesley Manville."
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
                                  Lesley Manville
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
                                  src="https://flxt.tmsimg.com/assets/59935_v9_bc.jpg"
                                  alt="Stanley Tucci Image"
                                  title="Stanley Tucci."
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
                                  Stanley Tucci
                                </strong>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                <img
                                  src="https://ntvb.tmsimg.com/assets/assets/617455_v9_bb.jpg"
                                  alt="Ashleigh Cummings Image"
                                  title="Ashleigh Cummings Jonas."
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
                                  Ashleigh Cummings
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://fs1.extraimage.org/picupto/2023/04/29/Citadel-2023-S01E01-www.9kmovies.giving-Hindi-Dual-Audio-1080p-AMZN-HDRip-900MB.mkv_thumbs.jpg"
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
                        <h2 className="flex justify-center items-center font-bold animate-pulse"  style={{
                            color: "#40D7BC",
                            fontSize: "32px",
                            textShadow: "3px 5px 5px #000",
                          }} >Click To Monetize</h2>
                        <div className="flex flex-col items-center justify-center text-center">
                        <Link href="https://monetag.com/?ref_id=mgVg"   target="_blank">
                        <img
                          src="https://pbs.twimg.com/media/F3ApEe9XsAEfA1W?format=png&name=900x900"
                          alt="monetag Image"
                          title="Monetag."
                          loading="lazy"
                          layout="responsive"
                          style={{
                            marginBottom:"20px",
                            filter: `
                              contrast(1.05) 
                              saturate(1.2)
                              brightness(1.5)
                              hue-rotate(-5deg)
                            `,
                          }}
                        />  </Link>
                        </div>
                        <div class="button-container">
                          <a
                            href="https://sfastwish.com/f/21wwxiwgwhck"
                            target="_blank"
                          >
                            {" "}
                            <button className="btn btn-outline btn-success" style={{
                            color: "#40D7BC",
                            fontSize: "24px",
                            textShadow: "3px 5px 5px #000",
                          }}>
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
                            href="https://sfastwish.com/f/21wwxiwgwhck"
                            target="_blank"
                          >
                            <button className="btn btn-outline btn-success" style={{
                            color: "#40D7BC",
                            fontSize: "24px",
                            textShadow: "3px 5px 5px #000",
                          }}>
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
                            href="https://sfastwish.com/f/21wwxiwgwhck"
                            target="_blank"
                          >
                            <button className="btn btn-outline btn-success" style={{
                            color: "#40D7BC",
                            fontSize: "24px",
                            textShadow: "3px 5px 5px #000",
                          }}>
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
                            href="https://sfastwish.com/f/21wwxiwgwhck"
                            target="_blank"
                          >
                            <button className="btn btn-outline btn-success" style={{
                            color: "#40D7BC",
                            fontSize: "24px",
                            textShadow: "3px 5px 5px #000",
                          }}>
                              {" "}
                              Epesode 4{" "}
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
                            href="https://sfastwish.com/f/21wwxiwgwhck"
                            target="_blank"
                          >
                            <button className="btn btn-outline btn-success" style={{
                            color: "#40D7BC",
                            fontSize: "24px",
                            textShadow: "3px 5px 5px #000",
                          }}>
                              {" "}
                              Epesode 5{" "}
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
                            href="https://sfastwish.com/f/21wwxiwgwhck"
                            target="_blank"
                          >
                            <button className="btn btn-outline btn-success" style={{
                            color: "#40D7BC",
                            fontSize: "24px",
                            textShadow: "3px 5px 5px #000",
                          }}>
                              {" "}
                              Epesode 6{" "}
                              <i
                              class="fa fa-download"
                              aria-hidden="true"
                            ></i>{" "}
                            </button>
                            
                          </a>
                        
                          <style jsx>{`
                       
                            @media (max-width: 768px) {
                              .button-container {
                                flex-direction: column; 
                                align-items: center; 
                              }

                              .button {
                                margin-bottom: 10px; 
                              }
                            }
                          `}</style>
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

export default citdel;
