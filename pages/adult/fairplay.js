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
        name: "Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free.",
        description:
          "Uwatch4free™ is a movie streaming site. Where you can find movies of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!",
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
          url: "https://uwatch4free.vercel.app/Dr.webp",
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
                "Uwatch4free™ is a movie streaming site. Where you can find movies of your interest in full HD quality updated on a daily basis. Watch Now or Download Now to Watch Later!",
              url: "https://uwatch4free.vercel.app/",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/adult/fairplay",
              name: "Fair Play - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Fair Play, a 2023 American erotic psychological thriller, marks Chloe Domont's feature directorial debut and features a stellar cast including Phoebe Dynevor, Alden Ehrenreich, Eddie Marsan, and Rich Sommer. The film centers around a young couple whose relationship undergoes intense strain following an unexpected promotion within a cutthroat hedge fund firm. Premiering at the 2023 Sundance Film Festival on January 20, 'Fair Play' later hit select theaters on September 29 before its Netflix streaming release on October 6, 2023.",
              url: "https://uwatch4free.vercel.app/adult/fairplay",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/adult/fairplay#collectionpage",
        url: "https://uwatch4free.vercel.app/adult/fairplay",
        name: "Fair Play - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          "Fair Play, a 2023 American erotic psychological thriller, marks Chloe Domont's feature directorial debut and features a stellar cast including Phoebe Dynevor, Alden Ehrenreich, Eddie Marsan, and Rich Sommer. The film centers around a young couple whose relationship undergoes intense strain following an unexpected promotion within a cutthroat hedge fund firm. Premiering at the 2023 Sundance Film Festival on January 20, 'Fair Play' later hit select theaters on September 29 before its Netflix streaming release on October 6, 2023.",
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

const fairplay = () => {
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
            Watch Fair Play (2023) Full Movie Online Free | Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="Fair Play, Fair Play 2023 online, watch hindi movie Fair Play online, index of Fair Play movie, watch Fair Play 2023, Fair Play hd streaming online, Fair Play videos, action, drama, Fair Play cast, hindi movie, Fair Play action movie, Fair Play movie download, new release, new hindi movie, Uwatch4free, blockbuster movie, Uwatch4free movies"
          />
          <meta property="og:locale" content="en_US" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="revisit-after" content="1 days" />
          <meta
            property="og:site_name"
            content="Uwatch4free™ | Watch Movies & TV-Series Online Free"
          />
          <meta property="og:type" content="movie" />
          <meta
            property="og:title"
            content="Watch Fair Play (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/adult/fairplay"
          />
          <meta
            property="og:image"
            content="/https://i.postimg.cc/V65q2h3r/Fair-Play-2023.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/V65q2h3r/Fair-Play-2023.webp"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="720" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Fair Play (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/V65q2h3r/Fair-Play-2023.webp"
          />
          <meta
            name="description"
            content="Watch Fair Play Full Movie Online on Uwatch4free™. You can also Watch Now Fair Play (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
          />
          <link
            rel="canonical"
            href="https://uwatch4free.vercel.app/adult/fairplay"
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
            <h1>FAIR PLAY</h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/V65q2h3r/Fair-Play-2023.webp"
              alt="Fair Play Movie Logo"
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
              // textShadow: "1px 0.5px 1px #fff",
              // backgroundColor: "#000",
            }}
          >
            <strong>Relased: </strong>September 29, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> 1 h 53 Min. </span>
            <br></br>
            <strong>Genre:</strong> Adult, Hot, 18+
            <br></br>
            <strong>Language: </strong>English.
            <br></br>
            <strong>Country of Origin: </strong>United States.
            <br></br>
            <strong>Original Network: </strong> Netflix.
            <br></br>
            <strong>Content Rating: </strong> United States: 18.
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
                content="Fair Play (2023) Official Trailer | Uwatch4free™"
              />
              {/* Add other meta tags */}
              <video
                className="embed-responsive-item rounded-2xl"
                controls
                autoPlay
                muted
                poster="https://www.heavenofhorror.com/wp-content/uploads/2023/10/fair-play-netflix-review-1200x720.jpg "
                controlsList="nodownload"
                width="150%"
                height="auto"
              >
                <source src="https://gdurl.com/W82D" type="video/mp4" />
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
                src="https://drive.google.com/file/d/1LzK2o1SINme6e3rXmNCdjZDX0j4QgbXX/preview"
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
                allowTransparency // use allowTransparency instead of allowtransparency
                allowFullScreen
              />
            </div>

            {/* Container for Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div className="container">
                <Tabs
                  defaultActiveKey="details"
                  id="myTabs"
                  className="justify-center font-bold animate-pulse "
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    fontSize: "20px",
                    // color: "#40D7BC",
                    // textShadow: "3px 5px 5px #000"
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
                            "Fair Play," a 2023 American erotic psychological
                            thriller, marks Chloe Domont's feature directorial
                            debut and features a stellar cast including Phoebe
                            Dynevor, Alden Ehrenreich, Eddie Marsan, and Rich
                            Sommer. The film centers around a young couple whose
                            relationship undergoes intense strain following an
                            unexpected promotion within a cutthroat hedge fund
                            firm. Premiering at the 2023 Sundance Film Festival
                            on January 20, "Fair Play" later hit select theaters
                            on September 29 before its Netflix streaming release
                            on October 6, 2023. Critics have lauded "Fair Play"
                            for its gripping and suspenseful narrative, with a
                            standout performance from Phoebe Dynevor. The film
                            holds a remarkable 94% approval rating on Rotten
                            Tomatoes based on 67 reviews, emphasizing its
                            compelling storyline and strong execution.
                            Metacritic also reflects positive feedback,
                            assigning the film a score of 79 out of 100,
                            indicating generally favorable reviews from
                            mainstream critics. Audiences have similarly
                            embraced "Fair Play," giving it a solid 7.4/10
                            rating on IMDb, reflecting the film's appeal to a
                            broader viewership. The film delves into themes of
                            ambition, power dynamics, and the darker facets of
                            relationships, offering a thought-provoking
                            exploration of how corporate culture can impact
                            individuals. As the narrative unfolds, it navigates
                            the complexities of ambition-driven decisions and
                            their consequences on personal relationships. Chloe
                            Domont's directorial finesse is evident in "Fair
                            Play," showcasing her ability to weave a suspenseful
                            thriller with a narrative that keeps audiences on
                            the edge of their seats. The strong performances
                            from the lead cast, particularly Phoebe Dynevor,
                            contribute to the film's overall impact. In
                            conclusion, "Fair Play" stands out as a well-crafted
                            and suspenseful thriller that has resonated with
                            both critics and audiences alike. For enthusiasts of
                            the genre, the film is a must-see, offering not only
                            an engaging plot but also a nuanced exploration of
                            human behavior in the context of ambition and
                            corporate pressures. Domont's debut marks a
                            promising entry into the world of psychological
                            thrillers, and "Fair Play" sets a high standard for
                            future works in the genre.
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
                            <strong>Phoebe Dynevor</strong>
                          </li> */}

                          <li>
                            <a
                              href="https://www.imdb.com/title/tt16304446/"
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
                              href="https://en.wikipedia.org/wiki/Fair_Play_(2023_film)"
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
                                    src="https://images.mubicdn.net/images/cast_member/436632/cache-200156-1486971406/image-w856.jpg"
                                    alt="Chloe Domont Image"
                                    title="Chloe Domont."
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
                                      textShadow: "5px 5px 5px #000",
                                    }}
                                  >
                                    Chloe Domont
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://images.mubicdn.net/images/cast_member/581102/cache-605249-1604355271/image-w856.jpg"
                                    alt="Phoebe Dynevor Image"
                                    title="Phoebe Dynevor."
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
                                    Phoebe Dynevor
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://resizing.flixster.com/kAXk2PLYMdPdCAeG-URhSYIqYyU=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/540210_v9_bc.jpg"
                                    alt="Alden Ehrenreich Image"
                                    title="Alden Ehrenreich."
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
                                    }}
                                  >
                                    Alden Ehrenreich
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://ntvb.tmsimg.com/assets/assets/213831_v9_bc.jpg"
                                    alt="Eddie Marsan Image"
                                    title="Eddie Marsan."
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
                                    Eddie Marsan
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
                                    src="https://ntvb.tmsimg.com/assets/assets/489512_v9_bc.jpg"
                                    alt="Rich Sommer Image"
                                    title="Rich Sommer."
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
                                    Rich Sommer
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://ntvb.tmsimg.com/assets/assets/651445_v9_bb.jpg"
                                    alt="Sebastian De Souza Image"
                                    title="Sebastian De Souza."
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
                                    Sebastian De Souza
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>

                          <img
                            src="https://fs1.extraimage.org/picupto/2023/10/06/Fair-Play-2023-www.hdmovies50.top-ORG-Hindi-Dual-Audio-1080p-HDRip-2.4GB-ESub.mkv_thumbs.jpg"
                            alt="Screenshot 1 Image"
                            title="Screenshot 1."
                            loading="lazy"
                            layout="responsive"
                            style={{
                              filter: `
                              contrast(1.05) 
                              saturate(1.05)
                              brightness(1.2)
                              hue-rotate(-5deg)
                            `,
                              marginTop: "20px",
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
                              color: "#000000",
                              fontSize: "32px",
                              textShadow: "3px 5px 5px #000",
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
                              textShadow: "1px 1px 1px #fff",
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
                              href="https://gdurl.com/Wikk/download"
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
                                Link 1{" "}
                                <i
                                  class="fa fa-download"
                                  aria-hidden="true"
                                ></i>{" "}
                              </button>
                            </a>
                          </div>
                          <h2
                            style={{
                              color: "#000000",
                              fontSize: "32px",
                              textShadow: "3px 5px 5px #000",
                            }}
                          >
                            {" "}
                            Download Movie
                          </h2>
                          <div class="button-container">
                            <a
                              href="https://sfastwish.com/f/21wwxiwgwhck"
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
                                Link 2{" "}
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
      </div>
      <Script src="../../propler/ads.js" defer />
      <Script src="../../propler/ads2.js" defer />
    </>
  );
};
export default fairplay;
