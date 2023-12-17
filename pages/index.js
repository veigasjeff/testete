import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/styles.module.css";
import Script from "next/script";

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
          "Watch movies online on Uwatch4free, Download your favorite movies and TV-series in HD without registration. Watch the latest movies online.",
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
        name: "Uwatch4free",
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
            "@id": "https://uwatch4free.vercel.app/#listItem",
            position: 1,
            item: {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/",
              name: "Home",
              description:
                "Watch movies online on Uwatch4free, Download your favorite movies and TV-series in HD without registration. Watch the latest movies online.",
              url: "https://uwatch4free.vercel.app/",
            },
          },
          {
            "@type": "ListItem",
            "@id": "https://uwatch4free.vercel.app/#listItemMovies",
            position: 2,
            item: {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/2023/movies/",
              name: "Movies",
              description:
                "Watch a wide selection of movies online on Uwatch4free™.",
              url: "https://uwatch4free.vercel.app/movies/info/",
            },
          },
          {
            "@type": "ListItem",
            "@id": "https://uwatch4free.vercel.app/#listItemTVShows",
            position: 3,
            item: {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/tv-shows/",
              name: "TV Shows",
              description:
                "Watch popular TV shows online on Uwatch4free™.",
              url: "https://uwatch4free.vercel.app/tv-shows/info/",
            },
          },
          {
            "@type": "ListItem",
            "@id": "https://uwatch4free.vercel.app/#listItemAdultMovies",
            position: 4,
            item: {
              "@type": "WebPage",
              "@id": "https://uwatch4free.vercel.app/adult/",
              name: "Adult Movies",
              description: "Watch adult movies online on Uwatch4free™.",
              url: "https://uwatch4free.vercel.app/adult/info/",
            },
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://uwatch4free.vercel.app/#collectionpage",
        url: "https://uwatch4free.vercel.app/",
        name: "Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free.",
        description:
          "Watch movies online on Uwatch4free, Download your favorite movies and TV-series in HD without registration. Watch the latest movies online.",
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
      },
    ],
  },
]);

const Index = () => {
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
            Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free.
          </title>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="revisit-after" content="1 days" />
          <meta
            name="facebook-domain-verification"
            content="13auzwhblf4oo4jn5vl6gcmebugsqb"
          />
          <meta property="fb:app_id" content="602176271414602" />
          <meta
            name="dailymotion-domain-verification"
            content="dmv6sg06w9r5eji88"
          />
          <meta
            name="monetag"
            content="076afbb772da1a62ef6f43756dfa5f65"
          ></meta>
          <meta
            name="google-site-verification"
            content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
          />
          <meta
            name="description"
            content="Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="uwatch4free,uwatch4free tv,streaming,latest movies,online tv,latest free movies,watch latest movies online"
          />
          <meta property="og:locale" content="en_US" />
          <meta property=" Content-Security-Policy: frame-ancestors 'self' Uwatch4free.vercel.app *.Uwatch4free.vercel.app;" />
          <meta
            property="og:site_name"
            content="Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta
            property="og:description"
            content="Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta property="og:url" content="/" />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:image"
            content="https://i.postimg.cc/28bGwYXB/og-image.webp"
          />
          <meta
            property="og:image:secure_url"
            content="https://i.postimg.cc/28bGwYXB/og-image.webp"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta
            name="twitter:description"
            content=" Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/28bGwYXB/og-image.webp"
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
          <link rel="canonical" href="https://uwatch4free.vercel.app/" />
        </Head>

        <div style={{ backgroundColor: "#000" }}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
              {/* Image 1 */}
              <Link href="/movies/Tiger3">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/MT47wDSs/tiger.webp"
                      alt="Tiger 3 (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>
              {/* Image 2 */}
              <Link href="/adult/fairplay">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6 "
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full ">
                    <img
                      src="https://i.postimg.cc/V65q2h3r/Fair-Play-2023.webp"
                      alt="Fair Play (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              {/* Image 3 */}
              <Link href="/tvshows/citdel">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/HnhgCmQy/Citadel-2023.webp"
                      alt="Citadel (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              {/* Image 4 */}
              <Link href="/movies/apurva">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/rF8M3cCF/Apurva.webp"
                      alt="Apurva (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/movies/ganpath">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/VkLN3L6f/Ganpath.webp"
                      alt="Ganpath (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/movies/operationnapoleon">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/FsxRWJhC/Operation-Napoleon.webp"
                      alt="Operation Napoleon (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/movies/creator">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/Hsmn9t17/Creator.webp"
                      alt="Creator (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/tvshows/aarya">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/wjfBH8yh/Aarya.webp"
                      alt="Aarya (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/movies/mansion24">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/gc8rhTQW/Mansion24.webp"
                      alt="Mansion24 (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/movies/ghoststation">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/XvZVL8Kf/Ghost-Station.webp"
                      alt="Ghost Station (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/adult/halohalox">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/cJP4gRcC/Halo-Halo-X.webp"
                      alt="Halo Halo X (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              <Link href="/adult/burningberayal">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/0NzyyWDh/Burning-berayal.webp"
                      alt="Burning Berayal (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link>

              {/* <Link href="/adult/salakab">
                <div
                  className="group relative overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 mb-6"
                  style={{
                    position: "relative",
                    paddingTop: "5%",
                    filter:
                      "contrast(1.05) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src="https://i.postimg.cc/tRd9B76M/Salakab.webp"
                      alt="CITADEL (2023)"
                      width="300"
                      height="400"
                      style={{ borderRadius: "20px !important" }} // Add !important
                    />
                  </div>
                </div>
              </Link> */}

              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </div>
      <Script src="../../propler/ads.js" defer />
      <Script src="../../propler/ads2.js" defer />
    </>
  );
};

export default Index;
