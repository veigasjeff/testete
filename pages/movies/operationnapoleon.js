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
              "@id": "https://uwatch4free.vercel.app/movies/operationnapoleon",
              name: "Operation Napoleon - 2023 | Uwatch4free™ Full Movie Online Free",
              description:
                "Operation Napoleon (2023), directed by Óskar Thór Axelsson and starring Vivian Ólafsdóttir, is a gripping Icelandic thriller that combines elements of suspense, conspiracy, and adventure. Adapted from Arnaldur Indriðason's novel of the same name, the film takes viewers on a thrilling journey through the stunning landscapes of Iceland. The story revolves around Kristín, a lawyer played by Vivian Ólafsdóttir, who finds herself falsely accused of murdering her own client, a professor investigating a mysterious World War II German airplane discovered on Iceland's largest glacier. With her life hanging in the balance, Kristín has no choice but to go on the run, racing against time to uncover the truth behind the plane and the conspiracy surrounding it. ",
              url: "https://uwatch4free.vercel.app/movies/operationnapoleon",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id":
          "https://uwatch4free.vercel.app/movies/operationnapoleon#collectionpage",
        url: "https://uwatch4free.vercel.app/movies/operationnapoleon",
        name: "Operation Napoleon - 2023 | Uwatch4free™ Full Movie Online Free",
        description:
          " Operation Napoleon (2023), directed by Óskar Thór Axelsson and starring Vivian Ólafsdóttir, is a gripping Icelandic thriller that combines elements of suspense, conspiracy, and adventure. Adapted from Arnaldur Indriðason's novel of the same name, the film takes viewers on a thrilling journey through the stunning landscapes of Iceland. The story revolves around Kristín, a lawyer played by Vivian Ólafsdóttir, who finds herself falsely accused of murdering her own client, a professor investigating a mysterious World War II German airplane discovered on Iceland's largest glacier. With her life hanging in the balance, Kristín has no choice but to go on the run, racing against time to uncover the truth behind the plane and the conspiracy surrounding it. ",
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

const operationnapoleon = () => {
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
            Watch Operation Napoleon (2023) Full Movie Online Free |
            Uwatch4free™
          </title>
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="operation napoleon, operation napoleon 2023 online, watch english movie operation napoleon online, index of operation napoleon movie, watch operation napoleon 2023, operation napoleon hd streaming online, operation napoleon videos, action, drama, operation napoleon cast, english movie, operation napoleon action movie, operation napoleon movie download, new release, new english movie, uwatch4free, blockbuster movie, uwatch4free movies"
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
            content="Watch Operation Napoleon (2023) | Uwatch4free™"
          />
          <meta
            property="og:url"
            content="https://uwatch4free.vercel.app/movies/operationnapoleon"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/FsxRWJhC/Operation-Napoleon.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/FsxRWJhC/Operation-Napoleon.webp"
          />
          <meta property="og:image:width" content="303" />
          <meta property="og:image:height" content="430" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Watch Operation Napoleon (2023) | Uwatch4free™"
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/FsxRWJhC/Operation-Napoleon.webp"
          />
          <meta
            name="description"
            content="Watch Operation Napoleon Full Movie Online on Uwatch4free™. You can also Watch Now Operation Napoleon (2023) Or Download to Watch Later!"
          />
          <meta
            name="google-site-verification"
            content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg"
          />
          <link rel="canonical" href="https://uwatch4free.vercel.app/movies/operationnapoleon" />
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
            <h1>Operation Napoleon (2023) </h1>
          </div>

          {/* Container for Movie Logo */}
          <div
            class="animate-pulse"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <img
              src="https://i.postimg.cc/FsxRWJhC/Operation-Napoleon.webp"
              alt="Operation Napoleon Movie Logo"
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
            <strong>Relased: </strong>August 11, 2023.
            <br></br>
            <strong>Duration: </strong> <i class="fas fa-clock"></i>{" "}
            <span> 1 h 52 Min. </span>
            <br></br>
            <strong>Genre:</strong> Action, Thriller, Drama.
            <br></br>
            <strong>Language: </strong>English.
            <br></br>
            <strong>Country of Origin: </strong>United States.
            <br></br>
            <strong>Original Network: </strong>Saga Film.
            <br></br>
            <strong>Content Rating: </strong> United States:R.
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
                content="Operation Napoleon (2023) - Official Trailer | Uwatch4free™"
              />
              <meta
                itemprop="description"
                content="Operation Napoleon (2023), directed by Óskar Thór Axelsson and starring Vivian Ólafsdóttir, is a gripping Icelandic thriller that combines elements of suspense, conspiracy, and adventure. Adapted from Arnaldur Indriðason's novel of the same name, the film takes viewers on a thrilling journey through the stunning landscapes of Iceland. The story revolves around Kristín, a lawyer played by Vivian Ólafsdóttir, who finds herself falsely accused of murdering her own client, a professor investigating a mysterious World War II German airplane discovered on Iceland's largest glacier. With her life hanging in the balance, Kristín has no choice but to go on the run, racing against time to uncover the truth behind the plane and the conspiracy surrounding it."
              />
              <meta itemprop="uploadDate" content="2023-10-10T13:36:17.000Z" />
              <meta
                itemprop="thumbnailUrl"
                content="https://s1.dmcdn.net/v/VJgi71bHYQjASxy6H/x120"
              />
              <meta itemprop="duration" content="P164S" />
              <meta
                itemprop="embedUrl"
                content="https://geo.dailymotion.com/player/xjrxe.html?video=x8opwxz"
              />
              <iframe
                src="https://geo.dailymotion.com/player/xjrxe.html?video=x8opwxz"
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
                src="https://drive.google.com/file/d/1uE8rdXYI4XfD7ty1Twtth-ltI7RGlr09/preview"
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
                            Operation Napoleon (2023), directed by Óskar Thór
                            Axelsson and starring Vivian Ólafsdóttir, is a
                            gripping Icelandic thriller that combines elements
                            of suspense, conspiracy, and adventure. Adapted from
                            Arnaldur Indriðason's novel of the same name, the
                            film takes viewers on a thrilling journey through
                            the stunning landscapes of Iceland. The story
                            revolves around Kristín, a lawyer played by Vivian
                            Ólafsdóttir, who finds herself falsely accused of
                            murdering her own client, a professor investigating
                            a mysterious World War II German airplane discovered
                            on Iceland's largest glacier. With her life hanging
                            in the balance, Kristín has no choice but to go on
                            the run, racing against time to uncover the truth
                            behind the plane and the conspiracy surrounding it.
                            To clear her name and unravel the mysteries
                            concealed within the aircraft, Kristín forms an
                            unlikely alliance with a group of misfits. This
                            eclectic team includes a journalist, a former
                            soldier, and a pilot. Together, they embark on a
                            perilous journey filled with unexpected twists,
                            perilous adversaries, and high-stakes situations.
                            One of the film's strong points is its suspenseful
                            plot. As the story unfolds, it keeps viewers on the
                            edge of their seats, weaving a complex web of
                            intrigue, danger, and secrets. The stakes are high,
                            and Kristín and her team must overcome a series of
                            challenges to uncover the truth. Operation Napoleon
                            is also celebrated for its breathtaking visuals. The
                            Icelandic landscapes, with their glaciers and
                            mountains, serve as a stunning backdrop to the
                            unfolding drama. The cinematography captures the raw
                            beauty of the country and adds an extra layer of
                            depth to the film, immersing the audience in its
                            unique atmosphere. Furthermore, the performances in
                            the film have garnered praise, with Vivian
                            Ólafsdóttir delivering a standout portrayal as
                            Kristín. Her character's journey, from a framed
                            lawyer to a determined truth-seeker, provides the
                            emotional anchor for the film. Operation Napoleon
                            has achieved both critical acclaim and commercial
                            success in Iceland. It received nominations for
                            several awards at the Icelandic Film Awards,
                            including Best Picture and Best Actress, further
                            cementing its position as a significant achievement
                            in Icelandic cinema. For fans of thrilling and
                            suspenseful cinema, Operation Napoleon is a
                            must-watch. It is a well-crafted, exciting film with
                            a compelling narrative, memorable characters, and a
                            setting that is as much a character as the people
                            themselves. The film is a testament to the power of
                            storytelling in international cinema and an
                            opportunity for audiences to explore Iceland's
                            natural wonders while experiencing a suspenseful and
                            unforgettable journey. In conclusion, Operation
                            Napoleon (2023) is a remarkable Icelandic thriller
                            that excels in creating an atmosphere of tension and
                            mystery. With stunning visuals, a captivating plot,
                            and strong performances, it is a film that deserves
                            recognition and is sure to leave a lasting impact on
                            its viewers.
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
                              href="https://www.imdb.com/title/tt15485390/"
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
                              href="https://en.wikipedia.org/wiki/Operation_Napoleon"
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
                                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/_skar-th_r-axelsson-2011154-07-01-2021-03-10-51.jpg"
                                    alt=" Óskar Thór Axelsson Image"
                                    title="Óskar Thór Axelsson."
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
                                    Óskar Thór Axelsson
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://m.media-amazon.com/images/M/MV5BMWVhZjZmMDQtMzg4Zi00OWNkLTkzZGUtMjg4ZGM0MmM1OTk0XkEyXkFqcGdeQXVyMTU0NDg2NTY3._V1_.jpg"
                                    alt="Vivian Ólafsdóttir Image"
                                    title="Vivian Ólafsdóttir."
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
                                    Vivian Ólafsdóttir
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://ntvb.tmsimg.com/assets/assets/366015_v9_bc.jpg"
                                    alt="Jack Fox Image"
                                    title="Jack Fox Jonas."
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
                                    Jack Fox
                                  </strong>
                                </div>
                              </div>
                            
                             
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://ntvb.tmsimg.com/assets/assets/154288_v9_bb.jpg"
                                    alt=" Iain Glen Image"
                                    title="Iain Glen."
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
                                    Iain Glen
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
                                    src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/278223_v9_ba.jpg"
                                    alt="Wotan Wilke Möhring Image"
                                    title="Wotan Wilke Möhring."
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
                                    Wotan Wilke Möhring
                                  </strong>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-teal-500 rounded-full overflow-hidden relative">
                                  <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/64/Olafur_Darri_Olafsson_by_Gage_Skidmore.jpg"
                                    alt="Ólafur Darri Ólafsson Image"
                                    title="Ólafur Darri Ólafsson."
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
                                    Ólafur Darri Ólafsson
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            src="https://i.ytimg.com/vi/sEVqxkSxXMU/maxresdefault.jpg"
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
                            <a href="https://sfastwish.com/f/puyjyy8p9urm" target="_blank">
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
                            <a href="https://ds2play.com/d/grrcm90txh5k" target="_blank">
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

export default operationnapoleon;
