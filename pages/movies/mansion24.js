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
              "@id": "https://uwatch4free.vercel.app/movies/mansion24",
              name: "Mansion 24 - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Mansion 24 (2023) is an Indian Telugu-language horror thriller television series written by Mayukh Adithya and directed by Ohmkar. Produced by Ashwin Babu and Kalyan Chakravarthy under the banner of Oak Entertainment, it stars Varalaxmi Sarathkumar in the lead role. The series premiered on October 17, 2023, on Disney+ Hotstar. The storyline revolves around Amrutha (Varalaxmi Sarathkumar), a young woman determined to prove her missing father's innocence. Her quest takes her to an abandoned mansion with a chilling history. As she delves deeper into the mysteries of the mansion, she encounters eerie supernatural occurrences and must confront the terrifying secrets hidden within its walls.",
              url: "https://uwatch4free.vercel.app/movies/mansion24",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/movies/mansion24#collectionpage",
        url: "https://uwatch4free.vercel.app/movies/mansion24",
        name: "Mansion 24 - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          "Mansion 24 (2023) is an Indian Telugu-language horror thriller television series written by Mayukh Adithya and directed by Ohmkar. Produced by Ashwin Babu and Kalyan Chakravarthy under the banner of Oak Entertainment, it stars Varalaxmi Sarathkumar in the lead role. The series premiered on October 17, 2023, on Disney+ Hotstar. The storyline revolves around Amrutha (Varalaxmi Sarathkumar), a young woman determined to prove her missing father's innocence. Her quest takes her to an abandoned mansion with a chilling history. As she delves deeper into the mysteries of the mansion, she encounters eerie supernatural occurrences and must confront the terrifying secrets hidden within its walls.",
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
          ratingValue: "4.8",
          bestRating: "10",
          worstRating: "0",
          ratingCount: "1",
        },
      },
    ],
  },
]);

const mansion24 = () => {
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
            Watch Mansion 24 (2023) Full Movie Online Free | Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="mansion 24, mansion 24 2023 online, watch hindi movie mansion 24 online, index of mansion 24 movie, watch mansion 24 2023, mansion 24 hd streaming online, mansion 24 videos, action, drama, mansion 24 cast, hindi movie, mansion 24 action movie, mansion 24 movie download, new release, new hindi movie, Uwatch4free, blockbuster movie, Uwatch4free movies"
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
            content="Watch Mansion 24 (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/movies/mansion24"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/gc8rhTQW/Mansion24.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/gc8rhTQW/Mansion24.webp"
          />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Mansion 24 (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/gc8rhTQW/Mansion24.webp"
          />
          <meta
            name="description"
            content="Watch mansion 24 Full Movie Online on Uwatch4free™. You can also Watch Now Mansion 24 (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
          />
          <link
            rel="canonical"
            href="https://uwatch4free.vercel.app/movies/mansion24"
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
            <h1>MANSION 24 (2023)</h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/gc8rhTQW/Mansion24.webp"
              alt="Mansion 24 Movie Logo"
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
            <strong>Relased: </strong>October 17, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> 2 h 58 Min. </span>
            <br></br>
            <strong>Genre:</strong> Horror, Thriller, Action.
            <br></br>
            <strong>Language: </strong>Hindi.
            <br></br>
            <strong>Country of Origin: </strong>India.
            <br></br>
            <strong>Original Network: </strong> Disney+ Hotstar.
            <br></br>
            <strong>Content Rating: </strong> India: UA.
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
              style={{ position: "relative", paddingBottom: "56.25%" }}
            >
              <meta
                itemprop="name"
                content="Mansion 24 (2023) - Official Trailer | Uwatch4free™"
              />
              <meta
                itemprop="description"
                content="Mansion 24 (2023) is an Indian Telugu-language horror thriller television series written by Mayukh Adithya and directed by Ohmkar. Produced by Ashwin Babu and Kalyan Chakravarthy under the banner of Oak Entertainment, it stars Varalaxmi Sarathkumar in the lead role. The series premiered on October 17, 2023, on Disney+ Hotstar. The storyline revolves around Amrutha (Varalaxmi Sarathkumar), a young woman determined to prove her missing father's innocence. Her quest takes her to an abandoned mansion with a chilling history. As she delves deeper into the mysteries of the mansion, she encounters eerie supernatural occurrences and must confront the terrifying secrets hidden within its walls."
              />
              <meta itemprop="uploadDate" content="2023-10-24T00:51:48.000Z" />
              <meta
                itemprop="thumbnailUrl"
                content="https://s1.dmcdn.net/v/VLopG1bHl9kPGyBRR/x120"
              />
              <meta itemprop="duration" content="P144S" />
              <meta
                itemprop="embedUrl"
                content="https://geo.dailymotion.com/player/xjrxe.html?video=x8p1v4g"
              />
              <iframe
                src="https://geo.dailymotion.com/player/xjrxe.html?video=x8p1v4g"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                frameborder="0"
                muted
                width="100%"
                height="100%"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  overflow: "hidden",
                }}
              ></iframe>
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
                src="https://drive.google.com/file/d/1L0nIw-ksVRpaKYqRmIKimFkC7JEKmEqg/preview"
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
                backgroundColor: "#000",
              }}
            >
              <div className="container ">
                <Tabs
                  defaultActiveKey="details"
                  id="myTabs"
                  className="justify-center font-bold animate-pulse"
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
                            Mansion 24 (2023) is an Indian Telugu-language
                            horror thriller television series written by Mayukh
                            Adithya and directed by Ohmkar. Produced by Ashwin
                            Babu and Kalyan Chakravarthy under the banner of Oak
                            Entertainment, it stars Varalaxmi Sarathkumar in the
                            lead role. The series premiered on October 17, 2023,
                            on Disney+ Hotstar. The storyline revolves around
                            Amrutha (Varalaxmi Sarathkumar), a young woman
                            determined to prove her missing father's innocence.
                            Her quest takes her to an abandoned mansion with a
                            chilling history. As she delves deeper into the
                            mysteries of the mansion, she encounters eerie
                            supernatural occurrences and must confront the
                            terrifying secrets hidden within its walls. Mansion
                            24 (2023) has garnered acclaim for its atmospheric
                            visuals, suspenseful storytelling, and powerful
                            performances. It has earned a reputation as one of
                            the finest Telugu horror series in recent years. For
                            fans of horror and thriller genres, Mansion 24
                            (2023) is a must-watch. It also appeals to viewers
                            seeking a well-crafted Telugu series with a unique
                            and engaging premise. With a captivating lead
                            performance by Varalaxmi Sarathkumar, this series
                            promises a thrilling and spine-tingling experience
                            that will keep you on the edge of your seat.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="cast" title="CAST">
                    <div className="card bg-transparent rounded">
                      <div className="card-body">
                        <ul>
                          {/* <li>
                            <strong>Director : Ohmkar</strong>
                          </li> */}

                          <li>
                            <a
                              href="https://www.imdb.com/title/tt27577967/"
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
                              href="https://en.wikipedia.org/wiki/Mansion_24"
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
                                    src="https://m.media-amazon.com/images/M/MV5BMjFkM2Q3MzItZTRmNy00Mjc3LWIzYjctNTYxMjdiNmE0YjQyXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_FMjpg_UX1000_.jpg"
                                    alt=" Ohmkar Image"
                                    title="Ohmkar."
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
                                    Ohmkar
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://media0029.elcinema.com/uploads/_315x420_5d0b83d8681c014e4ee840f34dfe4d5ede68b24c1f8aba8a9c5d8f7232dc3380.jpg"
                                    alt="Varalaxmi Sarathkumar Image"
                                    title="Varalaxmi Sarathkumar."
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
                                    Varalaxmi Sarathkumar
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="/blank-profile-picture.jpg"
                                    alt="Chandu Kanuri Image"
                                    title="Chandu Kanuri."
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
                                    Chandu Kanuri
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/rao-ramesh-8665-04-03-2021-03-32-52.jpg"
                                    alt=" Rao Ramesh Image"
                                    title="Rao Ramesh."
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
                                    Rao Ramesh
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
                                    src="https://static.toiimg.com/thumb/71522969.cms?width=170&height=240"
                                    alt="Vidyullekha Raman Image"
                                    title="Vidyullekha Raman."
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
                                    Vidyullekha Raman
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jayaprakash-18756-24-03-2017-12-50-37.jpg"
                                    alt="V. Jayaprakash Image"
                                    title="V. Jayaprakash."
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
                                    V. Jayaprakash
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>

                     
                          <img
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-1.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-2.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-3.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-4.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-5.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-6.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-7.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-8.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-9.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-10.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-11.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-12.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-13.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-14.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-15.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-16.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-17.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-18.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-19.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-20.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-21.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/10/17/Mansion-22.jpg"
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
                  <Tab eventKey="download" title="DOWLOAD">
                    <div className="card bg-transparent rounded">
                      <div className="card-body">
                        <ul>
                          <h2
                            style={{
                              color: "#fff",
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
                              href="https://sfastwish.com/f/iv88u65mkt9t"
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
                              color: "#fff",
                              fontSize: "32px",
                              textShadow: "3px 5px 5px #000",
                            }}
                          >
                            {" "}
                            Download Movie
                          </h2>
                          <div class="button-container">
                            <a
                              href="https://ds2play.com/d/rnv2ygxh13jz"
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

export default mansion24;
