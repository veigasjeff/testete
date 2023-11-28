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
              "@id": "https://uwatch4free.vercel.app/movies/ganpath",
              name: "ganpath - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Ganapath (2023) is an Indian Hindi-language post-apocalyptic dystopian action film that explores the theme of a powerful criminal empire's dominance in a fear-stricken city of the future. Directed by Vikas Bahl and produced by Vashu Bhagnani, Jackky Bhagnani, and Deepshikha Deshmukh, this movie features a star-studded cast including Tiger Shroff, Kriti Sanon, and Amitabh Bachchan. The film is set in a dystopian future where the city is under the tight grip of a formidable criminal empire that has terrorized its inhabitants. In the midst of this bleak and fearful environment, Ganapath, portrayed by Tiger Shroff, emerges as a relentless and skilled vigilante. He embarks on a mission to dismantle the oppressive empire and become a symbol of hope for the people who have long lived under the shadow of fear.",
              url: "https://uwatch4free.vercel.app/movies/ganpath",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/movies/ganpath#collectionpage",
        url: "https://uwatch4free.vercel.app/movies/ganpath",
        name: "ganpath - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          " Ganapath (2023) is an Indian Hindi-language post-apocalyptic dystopian action film that explores the theme of a powerful criminal empire's dominance in a fear-stricken city of the future. Directed by Vikas Bahl and produced by Vashu Bhagnani, Jackky Bhagnani, and Deepshikha Deshmukh, this movie features a star-studded cast including Tiger Shroff, Kriti Sanon, and Amitabh Bachchan. The film is set in a dystopian future where the city is under the tight grip of a formidable criminal empire that has terrorized its inhabitants. In the midst of this bleak and fearful environment, Ganapath, portrayed by Tiger Shroff, emerges as a relentless and skilled vigilante. He embarks on a mission to dismantle the oppressive empire and become a symbol of hope for the people who have long lived under the shadow of fear.",
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
          ratingValue: "5.7",
          bestRating: "10",
          worstRating: "0",
          ratingCount: "1",
        },
      },
    ],
  },
]);

const ganpath = () => {
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
            Watch Ganpath (2023) Full Movie Online Free | Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="ganpath, ganpath 2023 online, watch hindi movie ganpath online, index of ganpath movie, watch ganpath 2023, ganpath hd streaming online, ganpath videos, action, drama, ganpath cast, hindi movie, ganpath action movie, ganpath movie download, new release, new hindi movie, uwatch4free, blockbuster movie, uwatch4free movies"
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
            content="Watch ganpath (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/movies/ganpath"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/VkLN3L6f/Ganpath.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/VkLN3L6f/Ganpath.webp"
          />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch ganpath (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/VkLN3L6f/Ganpath.webp"
          />
          <meta
            name="description"
            content="Watch ganpath Full Movie Online on Uwatch4free™. You can also Watch Now ganpath (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
          />
          <link rel="canonical" href="https://uwatch4free.vercel.app/movies/ganpath" />
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
            <h1>GANPATH (2023) </h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/VkLN3L6f/Ganpath.webp"
              alt="Ganpath Movie Logo"
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
            <strong>Relased: </strong>October 20, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> 2 h 08 Min. </span>
            <br></br>
            <strong>Genre:</strong> Action, Thriller, Drama.
            <br></br>
            <strong>Language: </strong>Hindi.
            <br></br>
            <strong>Country of Origin: </strong>India.
            <br></br>
            <strong>Original Network: </strong> PVR Inox Pictures.
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
                content="Tiger 3 (2023) Official Trailer | Uwatch4free™"
              />
              {/* Add other meta tags */}
              <video
                className="embed-responsive-item rounded-2xl"
                controls
                autoPlay
                muted
                poster="https://assets-in.bmscdn.com/discovery-catalog/events/et00300918-fhmgvzzluh-landscape.jpg"
                controlsList="nodownload"
                width="150%"
                height="auto"
              >
                <source src="https://gdurl.com/EczA" type="video/mp4" />
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
                src="https://drive.google.com/file/d/14BjacFt1NjLEJ15vfk-P9sdo-8giowWD/preview"
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
                          }}
                        >
                          <strong>
                            {" "}
                            Ganapath (2023) is an Indian Hindi-language
                            post-apocalyptic dystopian action film that explores
                            the theme of a powerful criminal empire's dominance
                            in a fear-stricken city of the future. Directed by
                            Vikas Bahl and produced by Vashu Bhagnani, Jackky
                            Bhagnani, and Deepshikha Deshmukh, this movie
                            features a star-studded cast including Tiger Shroff,
                            Kriti Sanon, and Amitabh Bachchan. The film is set
                            in a dystopian future where the city is under the
                            tight grip of a formidable criminal empire that has
                            terrorized its inhabitants. In the midst of this
                            bleak and fearful environment, Ganapath, portrayed
                            by Tiger Shroff, emerges as a relentless and skilled
                            vigilante. He embarks on a mission to dismantle the
                            oppressive empire and become a symbol of hope for
                            the people who have long lived under the shadow of
                            fear. Tiger Shroff plays the titular role of
                            Ganapath, a boxer who is compelled to leave his home
                            and journey to a dystopian city where he undergoes a
                            transformation into a vigilante. Kriti Sanon takes
                            on the character of Jassi, a strong and independent
                            woman who joins Ganapath in his mission, adding
                            depth to the narrative with her powerful portrayal.
                            Amitabh Bachchan, on the other hand, portrays
                            Dalapati, a mysterious and influential figure whose
                            role in the story is pivotal.Ganapath is set to hit
                            theaters on October 20, 2023, and has garnered
                            significant anticipation as one of the standout
                            Indian films of the year. The movie's intriguing
                            concept of a dystopian future and its action-packed
                            sequences have kept audiences eagerly awaiting its
                            release. In terms of critical reception, Ganapath
                            received a mixed bag of reviews from film critics.
                            Some critics applauded the film's well-choreographed
                            action sequences, impressive special effects, and
                            strong performances by the cast. However, others
                            voiced criticism over the predictable plotline,
                            perceived lack of originality, and reliance on
                            certain genre clich??s. The critical response to the
                            film highlights the diversity of opinions
                            surrounding its execution. Box office-wise, Ganapath
                            achieved remarkable success, grossing over 100 crore
                            worldwide. Its impressive earnings made it the
                            highest-grossing Hindi film of 2023, surpassing
                            other notable productions like Pathaan. This
                            commercial success solidified the film's appeal to a
                            wide audience. Looking ahead, the success of
                            Ganapath has paved the way for a sequel, aptly
                            titled Ganapath Part 2. Currently in development,
                            this sequel is highly anticipated by fans of the
                            original film and is expected to continue the story,
                            possibly exploring new dimensions of the dystopian
                            world and the characters introduced in the first
                            installment. Ganapath serves as a thrilling addition
                            to the world of Indian cinema, offering audiences a
                            gripping tale of rebellion against an oppressive
                            regime in a futuristic, dystopian setting. It
                            showcases a blend of compelling action and a
                            powerful message of hope, even in the darkest of
                            times, while setting the stage for an exciting
                            sequel in the near future.
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
                              href="https://www.imdb.com/title/tt13334578/"
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
                              href="https://en.wikipedia.org/wiki/Ganapath"
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
                                    src="https://static.toiimg.com/thumb/61468449.cms?width=170&height=240"
                                    alt=" Vikas Bahl Image"
                                    title="Vikas Bahl."
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
                                  {/* Director's name outside the circle */}
                                  <strong
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2"
                                    style={{
                                      color: "#40D7BC",
                                      fontSize: "14px",
                                      textShadow: "3px 5px 5px #000",
                                    }}
                                  >
                                    Vikas Bahl
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://www.bollywoodhungama.com/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-05-at-2.40.30-PM.jpeg"
                                    alt="Tiger Shroff Image"
                                    title="Tiger Shroff."
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
                                    Tiger Shroff
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/07/27/Pictures/bollywood-actress-kriti-sanon_514b062e-72c9-11e7-a1e4-b67c25a49489.jpg"
                                    alt="Kriti Sanon Image"
                                    title="Kriti Sanon Jonas."
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
                                    Kriti Sanon
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BNTk1OTUxMzIzMV5BMl5BanBnXkFtZTcwMzMxMjI0Nw@@._V1_.jpg"
                                    alt=" Amitabh Bachchan Image"
                                    title="Amitabh Bachchan."
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
                                    Amitabh Bachchan
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
                                    src="https://m.media-amazon.com/images/M/MV5BYTMzYmM1ZWYtMmQ1My00ZjI1LTk5ZDEtZmEwOWZjMWJlNDQyXkEyXkFqcGdeQXVyNzk2NTQzOTY@._V1_.jpg"
                                    alt="Adi Chugh Image"
                                    title="Adi Chugh."
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
                                    Adi Chugh
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BOWZhMjlhOTItZWFiZi00ODhkLThiODMtNmNhODcwNzRhYTdkXkEyXkFqcGdeQXVyMTUzNzAzMDc4._V1_.jpg"
                                    alt="Akram Arshad Image"
                                    title="Akram Arshad."
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
                                    Akram Arshad
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>

                          <img
                            src="https://i0.wp.com/boxofficeworldwide.com/wp-content/uploads/2021/08/tiger-shroff-s-ganapath-avatar-unveiled-1097456.jpg?fit=1200%2C666&ssl=1"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_19bf4c4c3eeb151aa8.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_2054b1909943bfd835.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_22d59c62ee89009363.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_23cc4d1d87293e6aa8.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_242b7e2445d2743560.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_266fb30b8ada9edcfa.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_27bc3883be0652dc3e.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_28696208273c50b6ca.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_29.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_30.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_32.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_33.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_34.jpg"
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
                            src="https://new2.imgpress.xyz/images/2023/10/20/Snapshot_35.jpg"
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
                                  saturate(1.05)
                                  brightness(1.2)
                                  hue-rotate(-5deg)
                            `,
                                }}
                              />{" "}
                            </Link>
                          </div>
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
                              href="https://ds2play.com/d/aem47udal2xs"
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

export default ganpath;
