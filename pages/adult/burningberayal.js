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
              "@id": "https://uwatch4free.vercel.app/adult/burningberayal",
              name: "Burning Berayal - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Burning Berayal, a 2023 American erotic psychological thriller, marks Diego Freitas's feature directorial debut and features a stellar cast including Giovanna Lancellotti, Leandro Lima, Bruno Montaleone, and Louise D'Tuani. The film centers around a young couple whose relationship undergoes intense strain following an unexpected promotion within a cutthroat hedge fund firm. Premiering at the 2023 Sundance Film Festival on January 20, 'Burning Berayal' later hit select theaters on September 29 before its Netflix streaming release on October 6, 2023.",
              url: "https://uwatch4free.vercel.app/adult/burningberayal",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id":
          "https://uwatch4free.vercel.app/adult/burningberayal#collectionpage",
        url: "https://uwatch4free.vercel.app/adult/burningberayal",
        name: "Burning Berayal - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          "Burning Berayal, a 2023 American erotic psychological thriller, marks Diego Freitas's feature directorial debut and features a stellar cast including Giovanna Lancellotti, Leandro Lima, Bruno Montaleone, and Louise D'Tuani. The film centers around a young couple whose relationship undergoes intense strain following an unexpected promotion within a cutthroat hedge fund firm. Premiering at the 2023 Sundance Film Festival on January 20, 'Burning Berayal' later hit select theaters on September 29 before its Netflix streaming release on October 6, 2023.",
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

const burningberayal = () => {
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
            Watch Burning Berayal (2023) Full Movie Online Free | Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="Burning Berayal, Burning Berayal 2023 online, watch hindi movie Burning Berayal online, index of Burning Berayal movie, watch Burning Berayal 2023, Burning Berayal hd streaming online, Burning Berayal videos, action, drama, Burning Berayal cast, hindi movie, Burning Berayal action movie, Burning Berayal movie download, new release, new hindi movie, Uwatch4free, blockbuster movie, Uwatch4free movies"
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
            content="Watch Burning Berayal (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/adult/burningberayal"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/0NzyyWDh/Burning-berayal.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/0NzyyWDh/Burning-berayal.webp"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="720" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Burning Berayal (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/0NzyyWDh/Burning-berayal.webp"
          />
          <meta
            name="description"
            content="Watch Burning Berayal Full Movie Online on Uwatch4free™. You can also Watch Now Burning Berayal (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
          />
          <link
            rel="canonical"
            href="https://uwatch4free.vercel.app/adult/burningberayal"
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
            <h1>Burning Berayal</h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/0NzyyWDh/Burning-berayal.webp"
              alt="Burning Berayal Movie Logo"
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
            <strong>Relased: </strong>October 25, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> 1 h 38 Min. </span>
            <br></br>
            <strong>Genre:</strong> Adult, Hot, 18+
            <br></br>
            <strong>Language: </strong>English.
            <br></br>
            <strong>Country of Origin: </strong>Brazil.
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
              style={{ position: "relative", paddingBottom: "56.25%" }}
            >
              <meta
                itemprop="name"
                content="Burning Betrayal (2023) - Official Trailer | Uwatch4free™"
              />
              <meta
                itemprop="description"
                content="Burning Betrayal, a Brazilian mystery and thriller
                film directed by Diego Freitas, unfolds as a
                captivating narrative of love, betrayal, and the
                pursuit of redemption. Released on Netflix on
                October 25, 2023, the film stars Giovanna
                Lancellotti, Bruno Montaleone, and Leandro Lima,
                taking audiences on a journey through the vibrant
                backdrop of São Paulo, Brazil."
              />
              <meta itemprop="uploadDate" content="2023-11-21T20:18:50.000Z" />
              <meta
                itemprop="thumbnailUrl"
                content="https://s1.dmcdn.net/v/VQpJF1bPJlmgulBvq/x120"
              />
              <meta itemprop="duration" content="P141S" />
              <meta
                itemprop="embedUrl"
                content="https://geo.dailymotion.com/player/xjrxe.html?video=x8pu027"
              />
              <iframe
                src="https://geo.dailymotion.com/player/xjrxe.html?video=x8pu027"
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
                src="https://drive.google.com/file/d/1wZKO9SzAjMA-YKYecmde_N4S41ZzciEm/preview"
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
                            "Burning Betrayal," a Brazilian mystery and thriller
                            film directed by Diego Freitas, unfolds as a
                            captivating narrative of love, betrayal, and the
                            pursuit of redemption. Released on Netflix on
                            October 25, 2023, the film stars Giovanna
                            Lancellotti, Bruno Montaleone, and Leandro Lima,
                            taking audiences on a journey through the vibrant
                            backdrop of São Paulo, Brazil. The film introduces
                            us to Babi, portrayed by Giovanna Lancellotti, a
                            young woman whose world shatters when she discovers
                            her long-term partner's infidelity. The emotional
                            devastation prompts her decision to embark on a
                            journey of self-discovery, leaving her past behind
                            as she relocates to São Paulo, a city pulsating with
                            energy and opportunities. In the midst of her quest
                            for a fresh start, Babi encounters Marco, a
                            successful judge portrayed by Bruno Montaleone, who
                            is grappling with his own challenges. The
                            intricacies of their characters' lives weave
                            together, setting the stage for a passionate and
                            complex affair that becomes the focal point of
                            "Burning Betrayal." The choice of São Paulo as the
                            film's backdrop adds a dynamic layer to the
                            storytelling. The city becomes more than just a
                            setting; it becomes a character in itself,
                            influencing the characters' experiences and
                            providing a vivid canvas for the emotional and
                            dramatic events that unfold. The cinematography
                            captures the essence of São Paulo, immersing the
                            audience in its bustling streets, vibrant culture,
                            and contrasting landscapes. Giovanna Lancellotti's
                            portrayal of Babi is a standout, capturing the
                            vulnerability, strength, and resilience of a woman
                            navigating the aftermath of betrayal. The emotional
                            depth she brings to the character resonates, drawing
                            the audience into Babi's journey as she seeks solace
                            and a sense of self-worth in a new environment.
                            Bruno Montaleone, in the role of Marco, delivers a
                            compelling performance, infusing the character with
                            the gravitas and complexity required of a successful
                            judge facing personal turmoil. The chemistry between
                            Lancellotti and Montaleone is palpable, adding
                            authenticity to the on-screen relationship. Leandro
                            Lima's role, which threatens the newfound happiness
                            of Babi and Marco, introduces a layer of suspense
                            and conflict. The film adeptly explores themes of
                            trust, forgiveness, and the intricacies of human
                            relationships. The nuanced writing by Camila
                            Raffanti and Davi Kolb ensures that the characters
                            are multi-dimensional, navigating through a web of
                            emotions and choices. "Burning Betrayal" is more
                            than a tale of romantic entanglements; it's a story
                            of female empowerment. Babi's journey from
                            heartbreak to self-discovery is a testament to
                            resilience and the ability to find strength in
                            vulnerability. The film explores the transformative
                            power of starting anew and the pursuit of one's
                            desires beyond the constraints of societal
                            expectations. The success of "Burning Betrayal"
                            extends beyond its narrative and performances. It
                            emerged as a commercial triumph, capturing the
                            attention of audiences in Brazil and ranking among
                            the most-watched films on Netflix. Its success can
                            be attributed to its relatable themes, stellar
                            performances, and the universal appeal of stories
                            that delve into the complexities of human
                            relationships. In conclusion, "Burning Betrayal"
                            stands as a noteworthy addition to the Brazilian
                            film landscape, offering a compelling narrative that
                            transcends the boundaries of romance and thriller
                            genres. Diego Freitas' directorial vision, coupled
                            with the skilled performances of the cast, creates
                            an immersive experience that explores the human
                            condition in the face of love and betrayal. As the
                            characters navigate the labyrinth of emotions,
                            "Burning Betrayal" becomes a cinematic journey that
                            resonates with audiences, leaving a lasting
                            impression of passion, resilience, and the
                            indomitable spirit of those who dare to rewrite
                            their own stories.
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
                            <strong>Giovanna Lancellotti</strong>
                          </li> */}

                          <li>
                            <a
                              href="https://www.imdb.com/title/tt26787296/"
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
                          </li>*/}
                          <li>
                            <p></p>
                          </li> 
                          <div className="flex justify-center items-center">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://assets.my.rio2c.com/img/users/b288a33c-beed-42ad-8490-8e64921a40e9_thumbnail_500x500.png"
                                    alt="Diego Freitas Image"
                                    title="Diego Freitas."
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
                                    Diego Freitas
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BNzQxMzMwMzMtZGQxMC00NjAzLWJkNWQtOTM5N2IyMzNmM2Q3XkEyXkFqcGdeQXVyNjYzNDE4ODA@._V1_.jpg"
                                    alt="Giovanna Lancellotti Image"
                                    title="Giovanna Lancellotti."
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
                                    Giovanna Lancellotti
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://www.themoviedb.org/t/p/w500/hXtEv1SBKwsRV0TgWfxJwCY2tjx.jpg"
                                    alt="Leandro Lima Image"
                                    title="Leandro Lima."
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
                                    Leandro Lima
                                  </strong>
                                </div>
                              </div>

                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BMDc5OTQ0MzItNGVmMS00ZmRiLTg1ZDYtYWQxYzNkMDQ5MjVjXkEyXkFqcGdeQXVyMTU1ODIwMTM1._V1_.jpg"
                                    alt="Bruno Montaleone Image"
                                    title="Bruno Montaleone."
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
                                    Bruno Montaleone
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
                                    src="https://www.themoviedb.org/t/p/w500/3CydvKowBWvzGRZih50WiT4RT4s.jpg"
                                    alt="Louise D'Tuani Image"
                                    title="Louise D'Tuani."
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
                                    Louise D'Tuani
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://www.themoviedb.org/t/p/w500/dhkY9522Y9O1k9Usl2ihBBpuIky.jpg"
                                    alt="Drayson Menezzes Image"
                                    title="Drayson Menezzes."
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
                                    Drayson Menezzes
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>

                          <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-1.jpg"
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
                          <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-2.jpg"
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
                            <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-3.jpg"
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
                            <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-4.jpg"
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
                            <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-5.jpg"
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
                           <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-6.jpg"
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
                           <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-22.jpg"
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
                              <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-23.jpg"
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
                              <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-25.jpg"
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
                                <img
                            src="https://fs1.extraimage.org/picupto/2023/10/25/BurningBetrayal-26.jpg"
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
export default burningberayal;
