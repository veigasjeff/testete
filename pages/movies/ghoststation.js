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
              "@id": "https://uwatch4free.vercel.app/movies/ghoststation",
              name: "Ghost Station - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Ghost Station (2023) is a captivating South Korean supernatural mystery that takes audiences on a chilling journey into the unknown. Directed by Jeong Yong-ki and featuring a talented cast including Bo-ra Kim, Jae Hyun Kim, and Shin So-yul, the film promises a spine-tingling exploration of the supernatural and the mysteries it holds. The story revolves around a young journalist, played by Bo-ra Kim, and her partner, portrayed by Jae Hyun Kim.",
              url: "https://uwatch4free.vercel.app/movies/ghoststation",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/movies/ghoststation#collectionpage",
        url: "https://uwatch4free.vercel.app/movies/ghoststation",
        name: "Ghost Station - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          "Ghost Station (2023) is a captivating South Korean supernatural mystery that takes audiences on a chilling journey into the unknown. Directed by Jeong Yong-ki and featuring a talented cast including Bo-ra Kim, Jae Hyun Kim, and Shin So-yul, the film promises a spine-tingling exploration of the supernatural and the mysteries it holds. The story revolves around a young journalist, played by Bo-ra Kim, and her partner, portrayed by Jae Hyun Kim.",
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
          ratingValue: "4.3",
          bestRating: "10",
          worstRating: "0",
          ratingCount: "1",
        },
      },
    ],
  },
]);

const ghoststation = () => {
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
            Watch Ghost Station (2023) Full Movie Online Free | Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="ghost station, ghost station 2023 online, watch hindi movie ghost station online, index of ghost station movie, watch ghost station 2023, ghost station hd streaming online, ghost station videos, action, drama, ghost station cast, hindi movie, ghost station action movie, ghost station movie download, new release, new hindi movie, Uwatch4free, blockbuster movie, Uwatch4free movies"
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
            content="Watch Ghost Station (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/movies/ghoststation"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/XvZVL8Kf/Ghost-Station.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/XvZVL8Kf/Ghost-Station.webp"
          />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Ghost Station (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/XvZVL8Kf/Ghost-Station.webp"
          />
          <meta
            name="description"
            content="Watch Ghost Station Full Movie Online on Uwatch4free™. You can also Watch Now Ghost Station (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
          />
          <link
            rel="canonical"
            href="https://uwatch4free.vercel.app/movies/ghoststation"
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
            <h1>Ghost Station (2023)</h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/XvZVL8Kf/Ghost-Station.webp"
              alt="ghost station Movie Logo"
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
            <strong>Relased: </strong>May 24, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> 1 h 20 Min. </span>
            <br></br>
            <strong>Genre:</strong> Horror, Thriller, Action.
            <br></br>
            <strong>Language: </strong>Hindi Dubbed.
            <br></br>
            <strong>Country of Origin: </strong>South Korea.
            <br></br>
            <strong>Original Network: </strong> Contents Panda.
            <br></br>
            <strong>Content Rating: </strong> South Korea:15.
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
                content="Ghost Station (2023) - Official Trailer | Uwatch4free™"
              />
              <meta
                itemprop="description"
                content="Ghost Station (2023) is a captivating South Korean supernatural mystery that takes audiences on a chilling journey into the unknown. Directed by Jeong Yong-ki and featuring a talented cast including Bo-ra Kim, Jae Hyun Kim, and Shin So-yul, the film promises a spine-tingling exploration of the supernatural and the mysteries it holds. The story revolves around a young journalist, played by Bo-ra Kim, and her partner, portrayed by Jae Hyun Kim."
              />
              <meta itemprop="uploadDate" content="2023-09-29T21:03:12.000Z" />
              <meta
                itemprop="thumbnailUrl"
                content="https://s2.dmcdn.net/v/VHngq1b5upVKQxUV-/x120"
              />
              <meta itemprop="duration" content="P80S" />
              <meta
                itemprop="embedUrl"
                content="https://geo.dailymotion.com/player/xjrxe.html?video=x8ofagk"
              />
              <iframe
                src="https://geo.dailymotion.com/player/xjrxe.html?video=x8ofagk"
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
                src="https://drive.google.com/file/d/1yI75Hk8CKIG6Q5L2f0PNFYFvvG3lLGLn/preview"
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
                            Ghost Station (2023) is a captivating South Korean supernatural mystery
                      that takes audiences on a chilling journey into the unknown. Directed by Jeong Yong-ki and featuring a
                      talented cast including Bo-ra Kim, Jae Hyun Kim, and Shin So-yul, the film promises a spine-tingling
                      exploration of the supernatural and the mysteries it holds. The story revolves around a young
                      journalist, played by Bo-ra Kim, and her partner, portrayed by Jae Hyun Kim. They are drawn into a web
                      of perplexing enigmas as they embark on an investigation into a series of puzzling deaths. However,
                      the mystery deepens when they encounter a case where their own source was purportedly deceased at the
                      time of their interview. As they delve deeper into the shadows, they are confronted with an unsettling
                      and terrifying truth that defies explanation. With its intricate plot, Ghost Station is a
                      roller-coaster ride of suspense and intrigue. The film masterfully weaves a tapestry of suspense,
                      blending elements of supernatural horror with the intensity of a mystery thriller. As the protagonists
                      uncover layer after layer of secrets, the audience is kept on the edge of their seats, eagerly
                      anticipating each revelation. Bo-ra Kim's portrayal of the determined journalist adds a layer of
                      authenticity to the film. Her character's unwavering commitment to uncovering the truth forms the
                      backbone of the narrative, pulling viewers into her world of uncertainty and fear. Jae Hyun Kim
                      complements the dynamic with his portrayal of the partner, contributing a sense of camaraderie and
                      determination to the duo. Together, they navigate the dark and eerie landscape of the supernatural,
                      leading the audience on a suspenseful journey of discovery. Shin So-yul's role adds depth to the film,
                      contributing to the suspense as her character's fate becomes intertwined with the unfolding mysteries.
                      Her performance adds an emotional layer to the narrative, making the supernatural elements even more
                      potent. Ghost Station offers a unique blend of supernatural horror and mystery, tapping into the rich
                      vein of South Korean cinema known for its ability to merge genre elements with captivating
                      storytelling. While the film has received mixed reviews, with some applauding its atmospheric quality
                      and performances, and others expressing reservations about its narrative, its allure lies in its
                      ability to immerse viewers into a realm where the line between the natural and the supernatural blurs.
                      If you are a connoisseur of South Korean horror films, Ghost Station offers an opportunity to delve
                      into a world of enigma and terror. While opinions on the film may vary, its atmospheric qualities and
                      spine-chilling sequences promise an engaging cinematic experience for those seeking a supernatural
                      mystery that defies the conventional boundaries of reality.
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
                            <strong>Director : Yong-ki Jeong</strong>
                          </li> */}

                          <li>
                            <a
                              href="https://www.imdb.com/title/tt22505124/"
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
                          {/* <li>
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
                          </li> */}
                          <div className="flex justify-center items-center">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://images.mubicdn.net/images/cast_member/350423/cache-524514-1584603722/image-w856.jpg?size=160x"
                                    alt=" Yong-ki Jeong Image"
                                    title="Yong-ki Jeong."
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
                                    Yong-ki Jeong
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://www.themoviedb.org/t/p/w500/5Y6yKloeVDnMB6AkJcdpl8E2bKA.jpg"
                                    alt="Bo-ra Kim Image"
                                    title="Bo-ra Kim."
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
                                    Bo-ra Kim
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://www.themoviedb.org/t/p/w500/kPyOvJvq3GOeaFZb7I2J3SLln8a.jpg"
                                    alt="Jae Hyun Kim Image"
                                    title="Jae Hyun Kim."
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
                                    Jae Hyun Kim
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BYWY2NDY2NTItYTU4NS00YjJiLWE4MzUtMjI0NWI4ZDQwMzIxXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg"
                                    alt=" Shin So-yul Image"
                                    title="Shin So-yul."
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
                                    Shin So-yul
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
                                    src="https://i.mydramalist.com/RrqdYc.jpg"
                                    alt="Oh Jin-Seok Image"
                                    title="Oh Jin-Seok."
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
                                    Oh Jin-Seok
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://i.mydramalist.com/wwovgc.jpg"
                                    alt="Kang-il Kim Image"
                                    title="Kang-il Kim."
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
                                    Kang-il Kim
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>

                     
                          <img
                            src="https://fs1.extraimage.org/picupto/2023/08/05/The-Ghost-Station-2022-www.hdmovies50.top-Hindi-ORG-Dual-Audio-1080p-HDRip-ESub-1.6GB.mkv_thumbs.jpg"
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
                              href="https://embedwish.com/f/g3db8yl5oy1n"
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
                              href="https://doods.pro/d/yo9a8lgyozb3"
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

export default ghoststation;
