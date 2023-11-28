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
              "@id": "https://uwatch4free.vercel.app/movies/creator",
              name: "The Creator - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "The Creator, a 2023 American science fiction film directed by Gareth Edwards, presents audiences with a gripping narrative set in a post-apocalyptic world. The film, starring John David Washington, Gemma Chan, Ken Watanabe, Sturgill Simpson, Allison Janney, and introducing Madeleine Yuna Voyles in her film debut, explores themes of consciousness, artificial intelligence, and humanity's resilience in the face of existential threats.",
              url: "https://uwatch4free.vercel.app/movies/creator",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id":
          "https://uwatch4free.vercel.app/movies/creator#collectionpage",
        url: "https://uwatch4free.vercel.app/movies/creator",
        name: "The Creator - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          " The Creator, a 2023 American science fiction film directed by Gareth Edwards, presents audiences with a gripping narrative set in a post-apocalyptic world. The film, starring John David Washington, Gemma Chan, Ken Watanabe, Sturgill Simpson, Allison Janney, and introducing Madeleine Yuna Voyles in her film debut, explores themes of consciousness, artificial intelligence, and humanity's resilience in the face of existential threats.",
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
          ratingValue: "7.1",
          bestRating: "10",
          worstRating: "0",
          ratingCount: "1",
        },
      },
    ],
  },
]);

const creator = () => {
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
            Watch The Creator (2023) Full Movie Online Free |
            Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="the creator, the creator 2023 online, watch english movie the creator online, index of the creator movie, watch the creator 2023, the creator hd streaming online, the creator videos, action, drama, the creator cast, english movie, the creator action movie, the creator movie download, new release, new english movie, uwatch4free, blockbuster movie, uwatch4free movies"
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
            content="Watch The Creator (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/movies/creator"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/Hsmn9t17/Creator.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/Hsmn9t17/Creator.webp"
          />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch The Creator (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/Hsmn9t17/Creator.webp"
          />
          <meta
            name="description"
            content="Watch the creator Full Movie Online on Uwatch4free™. You can also Watch Now The Creator (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
          />
          <link rel="canonical" href="https://uwatch4free.vercel.app/movies/creator" />
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
            <h1>The Creator (2023) </h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/Hsmn9t17/Creator.webp"
              alt="The Creator Movie Logo"
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
            <span> 2 h 06 Min. </span>
            <br></br>
            <strong>Genre:</strong> Action, Thriller, Drama.
            <br></br>
            <strong>Language: </strong>English.
            <br></br>
            <strong>Country of Origin: </strong>United States.
            <br></br>
            <strong>Original Network: </strong>20th Century Studios.
            <br></br>
            <strong>Content Rating: </strong> United States:PG-13.
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
                content="The Creator (2023) - Official Trailer | Uwatch4free™"
              />
              <meta
                itemprop="description"
                content="The Creator, a 2023 American science fiction film directed by Gareth Edwards, presents audiences with a gripping narrative set in a post-apocalyptic world. The film, starring John David Washington, Gemma Chan, Ken Watanabe, Sturgill Simpson, Allison Janney, and introducing Madeleine Yuna Voyles in her film debut, explores themes of consciousness, artificial intelligence, and humanity's resilience in the face of existential threats."
              />
              <meta itemprop="uploadDate" content="2023-10-10T13:37:12.000Z" />
              <meta
                itemprop="thumbnailUrl"
                content="https://s2.dmcdn.net/v/VJgi91bCMcHqMDNVN/x120"
              />
              <meta itemprop="duration" content="P145S" />
              <meta
                itemprop="embedUrl"
                content="https://geo.dailymotion.com/player/xjrxe.html?video=x8opwy1"
              />
              <iframe
                src="https://geo.dailymotion.com/player/xjrxe.html?video=x8opwy1"
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
                src="https://drive.google.com/file/d/1EiJ7h7V8ETX2l7VWPASm5fnAEcDcxz6z/preview"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
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
                            // textShadow: "1px 0.5px 1px #fff",
                            // backgroundColor: "#000",
                          }}
                        >
                          <strong>
                            {" "}
                          The Creator, a 2023 American science fiction film directed by Gareth Edwards, presents audiences with a gripping narrative set in a post-apocalyptic world. The film, starring John David Washington, Gemma Chan, Ken Watanabe, Sturgill Simpson, Allison Janney, and introducing Madeleine Yuna Voyles in her film debut, explores themes of consciousness, artificial intelligence, and humanity's resilience in the face of existential threats. In the aftermath of a nuclear detonation in Los Angeles, The Creator plunges viewers into a world torn apart by war between humanity and artificial intelligence. The stakes are raised as the Creator, an elusive figure at the heart of the conflict, unveils a mysterious weapon with the potential to decisively end the war. To confront this existential threat, an ex-special forces agent, played by John David Washington, is recruited for a perilous mission: to hunt down and eliminate the Creator. One of the film's standout elements is its visionary direction by Gareth Edwards. Known for his work in visually ambitious films such as Monsters and Godzilla, Edwards brings his signature style to The Creator. The result is a visually stunning portrayal of a bleak and unforgiving world, perfectly complementing the narrative's post-apocalyptic backdrop. The cinematography, coupled with cutting-edge visual effects, immerses the audience in the harsh realities of a world on the brink. The cast, led by the talented John David Washington, delivers compelling performances that breathe life into the characters. Gemma Chan, Ken Watanabe, Sturgill Simpson, Allison Janney, and Madeleine Yuna Voyles contribute to the film's emotional depth and narrative richness. Washington's portrayal of the ex-special forces agent adds a layer of complexity to the character, as he grapples with the moral and existential challenges posed by the war and his mission. The Creator received generally positive reviews from critics, who lauded Edwards' direction, ambitious visuals, and the film's production values. The worldbuilding in the movie is particularly noteworthy, as it creates a convincing and immersive post-apocalyptic setting. However, some criticism was directed at the screenplay, suggesting that while the film excels in visual storytelling, the narrative might have benefited from additional depth and nuance. What sets The Creator apart is its exploration of profound themes. As the narrative unfolds, the film delves into questions surrounding the nature of consciousness, the ethical implications of artificial intelligence, and the indomitable spirit of humanity in the face of existential challenges. These thematic elements elevate The Creator beyond a conventional science fiction action film, providing audiences with food for thought long after the credits roll. The juxtaposition of human vulnerability against the backdrop of advanced technology creates a tension that defines the film's narrative core. It prompts reflection on the consequences of humanity's pursuit of technological advancement and the potential pitfalls of creating entities that rival or surpass human intelligence. This cautionary tale about the dangers of unchecked technological progress adds depth to the film, inviting viewers to contemplate the implications of the choices made by societies in the pursuit of innovation. In conclusion, The Creator stands as a thought-provoking and visually stunning addition to the science fiction genre. Gareth Edwards' directorial prowess, coupled with strong performances from the cast, contributes to a film that transcends traditional genre boundaries. While the screenplay may draw some critiques, the film's ambitious exploration of existential themes, combined with its striking visuals, makes it a memorable cinematic experience. The Creator invites audiences to contemplate the essence of humanity, the perils of artificial intelligence, and the resilience required to navigate a post-apocalyptic world. As a result, the film resonates as more than just a science fiction action thriller it becomes a canvas upon which profound questions about the future of humanity are painted.
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
                            <strong>Director : Maneesh Sharma</strong>
                          </li> */}

                          <li>
                            <a
                              href="https://www.imdb.com/title/tt11858890/"
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
                              href="https://en.wikipedia.org/wiki/The_Creator_(2023_film)"
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
                                    src="https://m.media-amazon.com/images/M/MV5BMjAyMjU1MjIzOF5BMl5BanBnXkFtZTcwNDY5ODYxNA@@._V1_FMjpg_UX1000_.jpg"
                                    alt=" Gareth Edwards Image"
                                    title="Gareth Edwards."
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
                                    Gareth Edwards
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://resizing.flixster.com/wXf1LfyUTgSeOGL95RW6XJ_YSKw=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/873014_v9_bb.jpg"
                                    alt="John David Washington Image"
                                    title="John David Washington."
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
                                    John David Washington
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BYTk0YzZiNzItOWJkOS00M2U5LTkxY2MtYzQ5NjA0ZDlhMDEyXkEyXkFqcGdeQXVyMTM0MTQ3MDc4._V1_.jpg"
                                    alt="Madeleine Yuna Voyles Image"
                                    title="Madeleine Yuna Voyles Jonas."
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
                                    Madeleine Yuna Voyles
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/565153_v9_bc.jpg"
                                    alt=" Gemma Chan Image"
                                    title="Gemma Chan."
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
                                    Gemma Chan
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
                                    src="https://ntvb.tmsimg.com/assets/assets/69106_v9_bb.jpg?w=270&h=360"
                                    alt="Allison Janney Image"
                                    title="Allison Janney."
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
                                    Allison Janney
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://resizing.flixster.com/yR3AOt_K8xAUbc7oNk0MY7KUFOE=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/36606_v9_ba.jpg"
                                    alt="Ken Watanabe Image"
                                    title="Ken Watanabe."
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
                                    Ken Watanabe
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            src="https://fs1.extraimage.org/picupto/2023/10/02/The-Creator-2023-www.hdmovies50.top-Hindi-Dubbed-Studio-DUB-1080p-HQ-S-Print-2.1GB.mkv_thumbs.jpg"
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
                              href="https://embedwish.com/f/cjb46odlv2v7"
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
                              href="https://doods.pro/d/hrtsnc8xqcsy"
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

export default creator;
