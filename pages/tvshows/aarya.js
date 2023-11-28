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
              "@id": "https://uwatch4free.vercel.app/tvshows/aarya",
              name: "Aarya - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Aarya, the third installment in the iconic Indian Hindi-language action thriller franchise, is a cinematic extravaganza directed by Ram Madhvani and produced by the renowned Aditya Chopra under the banner of Yash Raj Films. This high-octane thriller features the formidable duo of Sushmita Sen and Katrina Kaif, with the addition of Sikandar Kher, elevating the stakes and intensity of the narrative.",
              url: "https://uwatch4free.vercel.app/tvshows/aarya",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/tvshows/aarya#collectionpage",
        url: "https://uwatch4free.vercel.app/tvshows/aarya",
        name: "Aarya - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          " Aarya, the third installment in the iconic Indian Hindi-language action thriller franchise, is a cinematic extravaganza directed by Ram Madhvani and produced by the renowned Aditya Chopra under the banner of Yash Raj Films. This high-octane thriller features the formidable duo of Sushmita Sen and Katrina Kaif, with the addition of Sikandar Kher, elevating the stakes and intensity of the narrative.",
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

const aarya = () => {
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
            Watch Aarya (2023) Full Movie Online Free | Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="Aarya, Aarya 2023 online, watch hindi movie Aarya online, index of Aarya movie, watch Aarya 2023, Aarya hd streaming online, Aarya videos, action, drama, Aarya cast, hindi movie, Aarya action movie, Aarya movie download, new release, new hindi movie, Uwatch4free, blockbuster movie, Uwatch4free movies"
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
            content="Watch Aarya (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/tvshows/aarya"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/wjfBH8yh/Aarya.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/wjfBH8yh/Aarya.webp"
          />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Aarya (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/wjfBH8yh/Aarya.webp"
          />
          <meta
            name="description"
            content="Watch Aarya Full Movie Online on Uwatch4free™. You can also Watch Now Aarya (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
          />
          <link
            rel="canonical"
            href="https://uwatch4free.vercel.app/tvshows/aarya"
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
            <h1>AARYA (2023)</h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/wjfBH8yh/Aarya.webp"
              alt="Aarya Movie Logo"
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
            <strong>Relased: </strong>June 19, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> Avg 45 Min. </span>
            <br></br>
            <strong>Genre:</strong> Crime, Thriller, Drama.
            <br></br>
            <strong>Language: </strong>Hindi.
            <br></br>
            <strong>Country of Origin: </strong>India.
            <br></br>
            <strong>Original Network: </strong> Hotstar.
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
              className="embed-responsive embed-responsive-16by9"
              style={{ marginBottom: "20px" }}
            >
              <meta
                itemprop="name"
                content="Aarya (2023) Official Trailer | Uwatch4free™"
              />
              {/* Add other meta tags */}
              <video
                className="embed-responsive-item rounded-2xl"
                controls
                autoPlay
                muted
                poster="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5539/705539-h"
                controlsList="nodownload"
                width="150%"
                height="auto"
              >
                <source src="https://gdurl.com/zczb" type="video/mp4" />
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
                src="https://drive.google.com/file/d/1OEBjwja9_1BpqDM9e7BbFtFoNL9VjkOd/preview"
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
                            "Aarya," the 2023 Indian web series, presents a
                            gripping narrative centered around Arya Samant,
                            portrayed by the talented Sushmita Sen. The
                            storyline unfolds as Arya, a seemingly ordinary
                            housewife, is thrust into a world of crime and
                            intrigue following the murder of her husband,
                            Sanjeev Samant, played by Chunky Pandey, who was
                            involved in drug smuggling. This unforeseen tragedy
                            propels Arya into the dark underbelly of her
                            husband's criminal enterprise, compelling her to not
                            only take charge of the illicit business but also to
                            protect her family. The series has garnered
                            widespread acclaim, earning praise for various
                            aspects, making it one of the most popular web
                            series in India. Sushmita Sen's portrayal of Arya
                            has been a focal point of admiration, with her
                            acting skills receiving accolades from both critics
                            and audiences alike. The nuanced and powerful
                            performance by Sen adds depth to the character,
                            allowing viewers to connect with Arya on an
                            emotional level. Another aspect of "Aarya" that has
                            received commendation is its well-crafted story and
                            screenplay. The narrative weaves a tale of suspense,
                            drama, and crime, keeping viewers on the edge of
                            their seats. The transformation of Arya from a
                            housewife to a formidable force in the criminal
                            world is portrayed with intricacy, showcasing the
                            character's evolution and resilience. The writing of
                            the series has been lauded for its ability to
                            maintain tension and deliver unexpected twists and
                            turns. Cinematography and direction also stand out
                            as strengths of "Aarya." The series employs visuals
                            to enhance the storytelling, capturing the essence
                            of the characters and the environments they
                            navigate. The skillful direction ensures that the
                            pacing of the series aligns with the unfolding
                            drama, maintaining a balance between suspenseful
                            moments and character development. What sets "Aarya"
                            apart is its focus on portraying the strength and
                            courage of Indian women. Arya, as the central
                            character, defies societal expectations and norms,
                            stepping into a world dominated by men to protect
                            her family. The series, through Arya's character,
                            challenges stereotypes and celebrates the resilience
                            of women. The success of "Aarya" is further
                            underlined by the release of its second season in
                            2021 and the third season in 2022. The continuation
                            of the story speaks to the audience's engagement and
                            the series' ability to sustain interest over
                            multiple seasons. In conclusion, "Aarya" emerges as
                            an entertaining and compelling web series that
                            combines stellar performances, a well-crafted
                            narrative, and a focus on empowering female
                            characters. Sushmita Sen's portrayal of Arya is a
                            standout element, contributing significantly to the
                            series' acclaim. As one of the most popular web
                            series in India, "Aarya" stands as a testament to
                            the evolving landscape of Indian digital content,
                            offering engaging stories that resonate with diverse
                            audiences.
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
                            <strong>Director : Ram Madhvani</strong>
                          </li> */}

                          <li>
                            <a
                              href="https://www.imdb.com/title/tt12448030/"
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
                              href="https://en.wikipedia.org/wiki/Aarya_(TV_series)"
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
                                    src="https://static.toiimg.com/thumb/61481702.cms?width=170&height=240"
                                    alt=" Ram Madhvani Image"
                                    title="Ram Madhvani."
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
                                    Ram Madhvani
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://static.toiimg.com/thumb/msid-98388743,width-1280,resizemode-4/98388743.jpg"
                                    alt="Sushmita Sen Image"
                                    title="Sushmita Sen."
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
                                    Sushmita Sen
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BODhlNmI3ZWItYTdjYy00MDgxLWI1M2EtYTZlNTdmZjAyOTVhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
                                    alt="Vikas Kumar Image"
                                    title="Vikas Kumar."
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
                                    Vikas Kumar
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BMDE0NWFhZWQtM2NhYy00NTYyLTgxNTAtZGQ5MWI0YjhkZDZjL2ltYWdlXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg"
                                    alt=" Sikandar Kher Image"
                                    title="Sikandar Kher."
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
                                    Sikandar Kher
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
                                    src="https://m.media-amazon.com/images/M/MV5BMWUzNGNlYzMtM2E3NC00NjE0LWEwYTYtMTZhY2ZkOTk3YTM2XkEyXkFqcGdeQXVyMjIwMDc1Mzk@._V1_.jpg"
                                    alt="Ankur Bhatia Image"
                                    title="Ankur Bhatia."
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
                                    Ankur Bhatia
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/maya-sarao-1043104-31-07-2018-04-32-27.jpg"
                                    alt="Maya Sarao Image"
                                    title="Maya Sarao."
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
                                    Maya Sarao
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>

                          <img
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP01.mkv_snapshot_04.08.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP01.mkv_snapshot_05.44.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP01.mkv_snapshot_10.12.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP01.mkv_snapshot_12.12.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP01.mkv_snapshot_18.24.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP01.mkv_snapshot_19.52.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP01.mkv_snapshot_33.00.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP02.mkv_snapshot_07.56.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP03.mkv_snapshot_20.52.000.jpg"
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
                            src="https://fs1.extraimage.org/picupto/2023/11/03/Aarya-2023-S03-EP04.mkv_snapshot_21.44.000.jpg"
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

export default aarya;
