import React, { useState, useEffect } from "react";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialSharing from "../../components/SocialSharing";
import Head from "next/head";
// Helper function to create a slug from a title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Function to format the current date and time
const getFormattedDate = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return today.toLocaleString("en-GB", options); // Adjust locale as needed
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "entertainment.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const entertainmentData = JSON.parse(jsonData);

  // Validate data
  const entertainmentArray = Array.isArray(entertainmentData) ? entertainmentData : [];
  return {
    props: {
      entertainmentData: entertainmentArray,
    },
  };
}

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "public", "entertainment.json");
//   const jsonData = await fs.readFile(filePath, "utf-8");

//   // Remove BOM if present
//   const cleanedData = jsonData.replace(/^\uFEFF/, ""); // Strip BOM
//   const entertainmentData = JSON.parse(cleanedData);

//   // Validate data
//   const entertainmentArray = Array.isArray(entertainmentData) ? entertainmentData : [];
//   return {
//     props: {
//       entertainmentData: entertainmentArray,
//     },
//   };
// }

export default function entertainment({ entertainmentData }) {
  const router = useRouter();

  // Handle navigation back to main news section
  const goBackToMain = () => {
    router.push("/");
  };

  const [currentDate, setCurrentDate] = useState("");

  // Set the current date and update it every second
  useEffect(() => {
    const date = getFormattedDate();
    setCurrentDate(date);

    const intervalId = setInterval(() => {
      setCurrentDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil((entertainmentData?.length || 0) / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currententertainmentItems = entertainmentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getVisiblePages = () => {
    const visiblePages = [];
    const start = Math.max(1, currentPage - 1); // One page before the current
    const end = Math.min(totalPages, currentPage + 1); // One page after the current
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  const NewsSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "World News 24™ – Entertainment Section.",
    url: "http://localhost:3000",
    sameAs: [
      "https://www.facebook.com/news24channel",
      "https://twitter.com/entertainment24",
      "https://www.youtube.com/@News24thinkfirst",
      "https://www.instagram.com/entertainment24official/",
    ],
    logo: {
      "@type": "ImageObject",
      url: "http://localhost:3000/logo.png",
      width: "150",
      height: "60",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "World News 24 Broadcast India Limited,FC-23",
      addressLocality: "Sector 16A, Film City Mumbai",
      addressRegion: "Mumbai, India",
      postalCode: "400099",
      addressCountry: "IN",
    },
  });

  const rankMathSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "http://localhost:3000/#organization",
        name: "World News 24™ – Entertainment Section.",
        url: "http://localhost:3000/",
      },
      {
        "@type": "WebSite",
        "@id": "http://localhost:3000/entertainment#website",
        url: "http://localhost:3000/entertainment",
        name: "World News 24™ – Entertainment Section.",
        publisher: {
          "@type": "Organization",
          "@id": "http://localhost:3000/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "http://localhost:3000/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "http://localhost:3000/entertainment#webpage",
        url: "http://localhost:3000/entertainment",
        name: "World News 24",
        datePublished: "2024-01-13T13:00:00+00:00",
        dateModified: "2024-01-13T13:13:00+00:00",
        isPartOf: {
          "@id": "http://localhost:3000/#website",
        },
        inLanguage: "en-US",
        mainEntity: [
          {
            "@type": "Article",
            "@id": "http://localhost:3000/entertainment",
            url: "http://localhost:3000/entertainment",
            headline: "World News 24™",
            datePublished: "2024-01-13T13:00:00+00:00",
            dateModified: "2024-01-13T13:13:00+00:00",
            publisher: {
              "@type": "Organization",
              "@id": "http://localhost:3000/#organization",
              name: "World News 24™ – Entertainment Section.",
              url: "http://localhost:3000/",
            },
          },
        ],
        sameAs: [
          "https://www.facebook.com/news24channel",
          "https://twitter.com/entertainment24",
          "https://www.youtube.com/@News24thinkfirst",
          "https://www.instagram.com/entertainment24official/",
        ],
      },
    ],
  });

  const soap2daySchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "http://localhost:3000/entertainment",
        url: "http://localhost:3000/entertainment",
        name: "World News 24™ – Stay Informed, Stay Ahead.",
        isPartOf: { "@id": "http://localhost:3000/#website" },
        about: { "@id": "http://localhost:3000/#organization" },
        primaryImageOfPage: {
          "@id": "http://localhost:3000/#primaryimage",
        },
        image: {
          "@id": "http://localhost:3000/#primaryimage",
        },
        thumbnailUrl: "http://localhost:3000/og_image.jpg",
        datePublished: "2023-07-02T18:30:00+00:00",
        dateModified: "2024-09-24T05:11:20+00:00",
        breadcrumb: {
          "@id": "http://localhost:3000/entertainment#breadcrumb",
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["http://localhost:3000/entertainment"],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "http://localhost:3000/#primaryimage",
        url: "http://localhost:3000/og_image.jpg",
        contentUrl: "http://localhost:3000/og_image.jpg",
        width: 1280,
        height: 720,
        caption: "World News 24™ – Stay Informed, Stay Ahead.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "http://localhost:3000/entertainment#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "entertainment",
            item: "http://localhost:3000/entertainment",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "http://localhost:3000/#website",
        url: "http://localhost:3000/",
        name: "World News 24™ – Stay Informed, Stay Ahead.",
        description:
          "Your trusted source for the latest global news and updates.",
        publisher: { "@id": "http://localhost:3000/#organization" },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "http://localhost:3000/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "http://localhost:3000/#organization",
        name: "World News 24™ – Stay Informed, Stay Ahead.",
        url: "http://localhost:3000/",
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": "http://localhost:3000/#logo",
          url: "http://localhost:3000/logo.png",
          contentUrl: "http://localhost:3000/logo.png",
          width: 280,
          height: 100,
          caption: "World News 24™ – Stay Informed, Stay Ahead.",
        },
        image: {
          "@id": "http://localhost:3000/#logo",
        },
      },
    ],
  });

  return (
    <>
      <Head>
        <title> World News 24™ – Entertainment Section.</title>

        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="http://localhost:3000/sitemap.xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="referrer" content="origin" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="world news 24, world news, united kingdom, united states, australia, canada, europe, asia, japan, china, south america"
        />
        <meta
          property="og:description"
          content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, Entertainment, culture, entertainment, and more—24/7."
        />
        <meta
          name="description"
          content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, Entertainment, culture, entertainment, and more—24/7."
        />
        <link rel="canonical" href="http://localhost:3000/entertainment" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" World News 24™ – Entertainment Section. "
        />
        <meta
          property="og:url"
          content="http://localhost:3000/entertainment"
        />
        <meta
          property="og:site_name"
          content=" World News 24™ – Entertainment Section. "
        />
        <meta
          property="og:image"
          content="http://localhost:3000/og_image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpg" />
        <meta
          name="application-name"
          content=" World News 24™ – Entertainment Section. "
        />
        <meta
          property="article:modified_time"
          content="2024-01-01T13:13:13+00:00"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="http://localhost:3000/sitemap.xml"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content=" World News 24™ – Entertainment Section."
        />
        <meta
          name="twitter:description"
          content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, Entertainment, culture, entertainment, and more—24/7."
        />
        <meta
          name="twitter:image"
          content="http://localhost:3000/og_image.jpg"
        />
        <meta
          name="google-site-verification"
          content="BZNZaUyoS1nXyRfa99f4VJ3ABKZUZhkKB0pZ3DU3L8s"
        />

        <meta
          name="facebook-domain-verification"
          content="du918bycikmo1jw78wcl9ih6ziphd7"
        />
        <meta
          name="dailymotion-domain-verification"
          content="dm3bs67ukdegz9qik"
        />
        <meta name="monetag" content="98a412cb5612b9188cd76b9744304b6c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: NewsSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: soap2daySchema }}
        />
      </Head>
      <SocialSharing />
      <div style={styles.container}>
        {/* Pagination Button to Return to Main Section */}
        <div style={styles.paginationContainer}>
        <button onClick={goBackToMain} style={styles.pageButton}>
          Back to Main Section
        </button>
      </div>
        <h1 style={styles.title}>World News 24™ Entertainment Section.</h1>
        <div style={styles.dateTime}>
          <div
            style={{
              color: "white", // Makes sure the date is visible
              fontSize: "18px",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a background for contrast (optional)
              padding: "5px 10px",
              marginBottom: "20px",
              borderRadius: "5px", // Optional: for better readability
            }}
          >
            {currentDate}
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-4 gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
            }`}
            disabled={currentPage === 1}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "1px 1px 0px #000",
              fontSize: "20px",
            }}
          >
            Previous
          </button>

          {/* Visible Page Buttons */}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
              }`}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "1px 1px 0px #000",
                fontSize: "20px",
              }}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
            }`}
            disabled={currentPage === totalPages}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "1px 1px 0px #000",
              fontSize: "20px",
            }}
          >
            Next
          </button>
        </div>

        {/* Current Page Info */}
        <div
          className="mt-4 text-center text-gray-700 text-xl"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
            textShadow: "1px 1px 0px #000",
          }}
        >
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
        </div>

        <ul style={styles.newsList}>
          {currententertainmentItems.map((entertainmentItem, index) => (
            <li key={index} style={styles.entertainmentItem}>
              <Link
                href={`/entertainment/${generateSlug(entertainmentItem.title)}`}
                className="no-underline hover:no-underline"
              >
                <div
                  style={styles.card}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <img
                    src={entertainmentItem.thumbnail || entertainmentItem.image}
                    alt={entertainmentItem.title}
                    // style={{
                    //   height: "200px",
                    //   width: "100%",
                    //   objectFit: "cover",
                    //   boxShadow: "0 0 10px 0 #000",
                    //   filter:
                    //     "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
                    // }}
                    style={{
                      // width: "300px", // Ensures the image is displayed at this width
                      // height: "400px", // Ensures the image is displayed at this height
                      // objectFit: "cover",
                      // margin: "auto",
                      // marginTop: "50px",
                      // marginBottom: "20px",
                      // borderRadius: "50px",
                      boxShadow: "0 0 10px 0 #000",
                      filter:
                        "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
                    }}
                    className="w-full sm:w-32 sm:h-20 object-cover rounded-md mb-4 sm:mb-0"
                  />
                  <div className="flex flex-col sm:text-left text-center">
                    <h2
                      style={styles.cardTitle}
                      className="text-xl font-semibold mb-2"
                    >
                      {entertainmentItem.title}
                    </h2>
                    <p
                      style={styles.cardDate}
                      className="text-gray-500 text-sm mb-2"
                    >
                     Date: {entertainmentItem.date} - Time {entertainmentItem.time}
                    </p>
                    <p style={styles.cardDescription} className="text-gray-600">
                      {entertainmentItem.description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-4 gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
            }`}
            disabled={currentPage === 1}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "1px 1px 0px #000",
              fontSize: "20px",
            }}
          >
            Previous
          </button>

          {/* Visible Page Buttons */}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
              }`}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "1px 1px 0px #000",
                fontSize: "20px",
              }}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
            }`}
            disabled={currentPage === totalPages}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "1px 1px 0px #000",
              fontSize: "20px",
            }}
          >
            Next
          </button>
        </div>

        {/* Current Page Info */}
        <div
          className="mt-4 text-center text-gray-700 text-xl"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
            textShadow: "1px 1px 0px #000",
          }}
        >
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    color: "var(--text-secondary-color)", // Dynamic secondary text color
  },
  title: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#007bff",
  },
  newsList: {
    listStyleType: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  entertainmentItem: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.1rem",
    textShadow: "1px 1px 0px #000",
  },
  card: {
    backgroundColor: "var(--card-bg-color)", // Dynamic card background
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    display: "flex",
    width: "100%",
    maxWidth: "800px",
    transition: "transform 0.3s ease",
  },
  cardImage: {
    width: "200px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  cardContent: {
    padding: "15px",
    flex: 1,
    color: "var(--text-secondary-color)", // Dynamic secondary text color
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "10px",
    fontWeight: "bold",
    textShadow: "1px 1px 0px #000",
    color: "var(--text-secondary-color)", // Dynamic secondary text color
  },
  cardDate: {
    fontSize: "1rem",
    color: "#777",
  },

  paginationContainer: {
    textAlign: "center",
    marginTop: "40px",
  },
  pagination: {
    marginBottom: "20px",
  },
  pageButton: {
    padding: "10px 20px",
    margin: "0 5px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  activePageButton: {
    backgroundColor: "#0056b3",
  },
  totalPages: {
    fontSize: "1.2rem",
    color: "#333",
    fontWeight: "600",
  },
  paginationContainer: { marginTop: "30px", textAlign: "center" },
  pageButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    textShadow: "1px 1px 0px #000",
    fontSize: "20px",
    margin: "0 5px",
    fontWeight: "bold",
  },
};






















// import React, { useState, useEffect } from "react";
// import path from "path";
// import fs from "fs/promises";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import SocialSharing from "../../components/SocialSharing";
// // Helper function to create a slug from a title
// function generateSlug(title) {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// }

// // Function to format the current date and time
// const getFormattedDate = () => {
//   const today = new Date();
//   const options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   };
//   return today.toLocaleString("en-GB", options); // Adjust locale as needed
// };

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "public", "entertainment.json");
//   const jsonData = await fs.readFile(filePath, "utf-8");

//   // Remove BOM if present
//   const cleanedData = jsonData.replace(/^\uFEFF/, ""); // Strip BOM
//   const entertainmentData = JSON.parse(cleanedData);

//   // Validate data
//   const entertainmentArray = Array.isArray(entertainmentData) ? entertainmentData : [];
//   return {
//     props: {
//       entertainmentData: entertainmentArray,
//     },
//   };
// }
// export default function entertainment({ entertainmentData }) {
//   const router = useRouter();

//   // Handle navigation back to main news section
//   const goBackToMain = () => {
//     router.push("/");
//   };

//   const [currentDate, setCurrentDate] = useState("");

//   // Set the current date and update it every second
//   useEffect(() => {
//     const date = getFormattedDate();
//     setCurrentDate(date);

//     const intervalId = setInterval(() => {
//       setCurrentDate(getFormattedDate());
//     }, 1000);

//     return () => clearInterval(intervalId); // Cleanup the interval on unmount
//   }, []);

//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = React.useState(1);

//   const totalPages = Math.ceil((entertainmentData?.length || 0) / itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const currententertainmentItems = entertainmentData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const getVisiblePages = () => {
//     const visiblePages = [];
//     const start = Math.max(1, currentPage - 1); // One page before the current
//     const end = Math.min(totalPages, currentPage + 1); // One page after the current
//     for (let i = start; i <= end; i++) {
//       visiblePages.push(i);
//     }
//     return visiblePages;
//   };

//   const visiblePages = getVisiblePages();

//   const NewsSchema = JSON.stringify({
//     "@context": "https://schema.org",
//     "@type": "NewsMediaOrganization",
//     name: "World News 24™ – entertainment Section.",
//     url: "http://localhost:3000",
//     sameAs: [
//       "https://www.facebook.com/news24channel",
//       "https://twitter.com/entertainment24",
//       "https://www.youtube.com/@News24thinkfirst",
//       "https://www.instagram.com/entertainment24official/",
//     ],
//     logo: {
//       "@type": "ImageObject",
//       url: "http://localhost:3000/logo.png",
//       width: "150",
//       height: "60",
//     },
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "World News 24 Broadcast India Limited,FC-23",
//       addressLocality: "Sector 16A, Film City Mumbai",
//       addressRegion: "Mumbai, India",
//       postalCode: "400099",
//       addressCountry: "IN",
//     },
//   });

//   const rankMathSchema = JSON.stringify({
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Organization",
//         "@id": "http://localhost:3000/#organization",
//         name: "World News 24™ – entertainment Section.",
//         url: "http://localhost:3000/",
//       },
//       {
//         "@type": "WebSite",
//         "@id": "http://localhost:3000/entertainment#website",
//         url: "http://localhost:3000/entertainment",
//         name: "World News 24™ – entertainment Section.",
//         publisher: {
//           "@type": "Organization",
//           "@id": "http://localhost:3000/#organization",
//         },
//         potentialAction: {
//           "@type": "SearchAction",
//           target: "http://localhost:3000/?s={search_term_string}",
//           "query-input": "required name=search_term_string",
//         },
//       },
//       {
//         "@type": "WebPage",
//         "@id": "http://localhost:3000/entertainment#webpage",
//         url: "http://localhost:3000/entertainment",
//         name: "World News 24",
//         datePublished: "2024-01-13T13:00:00+00:00",
//         dateModified: "2024-01-13T13:13:00+00:00",
//         isPartOf: {
//           "@id": "http://localhost:3000/#website",
//         },
//         inLanguage: "en-US",
//         mainEntity: [
//           {
//             "@type": "Article",
//             "@id": "http://localhost:3000/entertainment",
//             url: "http://localhost:3000/entertainment",
//             headline: "World News 24™",
//             datePublished: "2024-01-13T13:00:00+00:00",
//             dateModified: "2024-01-13T13:13:00+00:00",
//             publisher: {
//               "@type": "Organization",
//               "@id": "http://localhost:3000/#organization",
//               name: "World News 24™ – entertainment Section.",
//               url: "http://localhost:3000/",
//             },
//           },
//         ],
//         sameAs: [
//           "https://www.facebook.com/news24channel",
//           "https://twitter.com/entertainment24",
//           "https://www.youtube.com/@News24thinkfirst",
//           "https://www.instagram.com/entertainment24official/",
//         ],
//       },
//     ],
//   });

//   const soap2daySchema = JSON.stringify({
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "WebPage",
//         "@id": "http://localhost:3000/entertainment",
//         url: "http://localhost:3000/entertainment",
//         name: "World News 24™ – Stay Informed, Stay Ahead.",
//         isPartOf: { "@id": "http://localhost:3000/#website" },
//         about: { "@id": "http://localhost:3000/#organization" },
//         primaryImageOfPage: {
//           "@id": "http://localhost:3000/#primaryimage",
//         },
//         image: {
//           "@id": "http://localhost:3000/#primaryimage",
//         },
//         thumbnailUrl: "http://localhost:3000/og_image.jpg",
//         datePublished: "2023-07-02T18:30:00+00:00",
//         dateModified: "2024-09-24T05:11:20+00:00",
//         breadcrumb: {
//           "@id": "http://localhost:3000/entertainment#breadcrumb",
//         },
//         inLanguage: "en-US",
//         potentialAction: [
//           {
//             "@type": "ReadAction",
//             target: ["http://localhost:3000/entertainment"],
//           },
//         ],
//       },
//       {
//         "@type": "ImageObject",
//         inLanguage: "en-US",
//         "@id": "http://localhost:3000/#primaryimage",
//         url: "http://localhost:3000/og_image.jpg",
//         contentUrl: "http://localhost:3000/og_image.jpg",
//         width: 1280,
//         height: 720,
//         caption: "World News 24™ – Stay Informed, Stay Ahead.",
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": "http://localhost:3000/entertainment#breadcrumb",
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             name: "entertainment",
//             item: "http://localhost:3000/entertainment",
//           },
//         ],
//       },
//       {
//         "@type": "WebSite",
//         "@id": "http://localhost:3000/#website",
//         url: "http://localhost:3000/",
//         name: "World News 24™ – Stay Informed, Stay Ahead.",
//         description:
//           "Your trusted source for the latest global news and updates.",
//         publisher: { "@id": "http://localhost:3000/#organization" },
//         potentialAction: [
//           {
//             "@type": "SearchAction",
//             target: {
//               "@type": "EntryPoint",
//               urlTemplate:
//                 "http://localhost:3000/?s={search_term_string}",
//             },
//             "query-input": "required name=search_term_string",
//           },
//         ],
//         inLanguage: "en-US",
//       },
//       {
//         "@type": "Organization",
//         "@id": "http://localhost:3000/#organization",
//         name: "World News 24™ – Stay Informed, Stay Ahead.",
//         url: "http://localhost:3000/",
//         logo: {
//           "@type": "ImageObject",
//           inLanguage: "en-US",
//           "@id": "http://localhost:3000/#logo",
//           url: "http://localhost:3000/logo.png",
//           contentUrl: "http://localhost:3000/logo.png",
//           width: 280,
//           height: 100,
//           caption: "World News 24™ – Stay Informed, Stay Ahead.",
//         },
//         image: {
//           "@id": "http://localhost:3000/#logo",
//         },
//       },
//     ],
//   });

//   return (
//     <>
//       <Head>
//         <title> World News 24™ – entertainment Section.</title>

//         <link
//           rel="sitemap"
//           type="application/xml"
//           title="Sitemap"
//           href="http://localhost:3000/sitemap.xml"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/favicon-16x16.png"
//         />
//         <link rel="manifest" href="/site.webmanifest" />
//         <meta name="googlebot" content="index,follow" />
//         <meta name="revisit-after" content="1 days" />
//         <meta name="referrer" content="origin" />
//         <meta
//           name="robots"
//           content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
//         />
//         <meta
//           name="keywords"
//           content="world news 24, world news, united kingdom, united states, australia, canada, europe, asia, japan, china, south america"
//         />
//         <meta
//           property="og:description"
//           content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, entertainment, culture, sports, and more—24/7."
//         />
//         <meta
//           name="description"
//           content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, entertainment, culture, sports, and more—24/7."
//         />
//         <link rel="canonical" href="http://localhost:3000/entertainment" />
//         <meta property="og:locale" content="en_US" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content=" World News 24™ – entertainment Section. "
//         />
//         <meta
//           property="og:url"
//           content="http://localhost:3000/entertainment"
//         />
//         <meta
//           property="og:site_name"
//           content=" World News 24™ – entertainment Section. "
//         />
//         <meta
//           property="og:image"
//           content="http://localhost:3000/og_image.jpg"
//         />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:type" content="image/jpg" />
//         <meta
//           name="application-name"
//           content=" World News 24™ – entertainment Section. "
//         />
//         <meta
//           property="article:modified_time"
//           content="2024-01-01T13:13:13+00:00"
//         />
//         <link
//           rel="sitemap"
//           type="application/xml"
//           title="Sitemap"
//           href="http://localhost:3000/sitemap.xml"
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content=" World News 24™ – entertainment Section."
//         />
//         <meta
//           name="twitter:description"
//           content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, entertainment, culture, sports, and more—24/7."
//         />
//         <meta
//           name="twitter:image"
//           content="http://localhost:3000/og_image.jpg"
//         />
//         <meta
//           name="google-site-verification"
//           content="BZNZaUyoS1nXyRfa99f4VJ3ABKZUZhkKB0pZ3DU3L8s"
//         />

//         <meta
//           name="facebook-domain-verification"
//           content="du918bycikmo1jw78wcl9ih6ziphd7"
//         />
//         <meta
//           name="dailymotion-domain-verification"
//           content="dm3bs67ukdegz9qik"
//         />
//         <meta name="monetag" content="98a412cb5612b9188cd76b9744304b6c" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: NewsSchema }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: rankMathSchema }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: soap2daySchema }}
//         />
//       </Head>
//       <SocialSharing />
//       <div style={styles.container}>
//         {/* Pagination Button to Return to Main Section */}
//         <div style={styles.paginationContainer}>
//         <button onClick={goBackToMain} style={styles.pageButton}>
//           Back to Main Section
//         </button>
//       </div>
//         <h1 style={styles.title}>World News 24™ entertainment Section.</h1>
//         <div style={styles.dateTime}>
//           <div
//             style={{
//               color: "white", // Makes sure the date is visible
//               fontSize: "18px",
//               backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a background for contrast (optional)
//               padding: "5px 10px",
//               marginBottom: "20px",
//               borderRadius: "5px", // Optional: for better readability
//             }}
//           >
//             {currentDate}
//           </div>
//         </div>
//         {/* Pagination Controls */}
//         <div className="flex items-center justify-center mt-4 gap-2">
//           {/* Previous Button */}
//           <button
//             onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//             className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
//               currentPage === 1
//                 ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                 : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
//             }`}
//             disabled={currentPage === 1}
//             style={{
//               fontFamily: "Poppins, sans-serif",
//               fontWeight: "bold",
//               textAlign: "center",
//               textShadow: "1px 1px 0px #000",
//               fontSize: "20px",
//             }}
//           >
//             Previous
//           </button>

//           {/* Visible Page Buttons */}
//           {visiblePages.map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
//                 currentPage === page
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
//               }`}
//               style={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "1px 1px 0px #000",
//                 fontSize: "20px",
//               }}
//             >
//               {page}
//             </button>
//           ))}

//           {/* Next Button */}
//           <button
//             onClick={() =>
//               handlePageChange(Math.min(totalPages, currentPage + 1))
//             }
//             className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
//               currentPage === totalPages
//                 ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                 : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
//             }`}
//             disabled={currentPage === totalPages}
//             style={{
//               fontFamily: "Poppins, sans-serif",
//               fontWeight: "bold",
//               textAlign: "center",
//               textShadow: "1px 1px 0px #000",
//               fontSize: "20px",
//             }}
//           >
//             Next
//           </button>
//         </div>

//         {/* Current Page Info */}
//         <div
//           className="mt-4 text-center text-gray-700 text-xl"
//           style={{
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: "bold",
//             textAlign: "center",
//             marginBottom: "20px",
//             textShadow: "1px 1px 0px #000",
//           }}
//         >
//           <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         </div>

//         <ul style={styles.newsList}>
//           {currententertainmentItems.map((entertainmentItem, index) => (
//             <li key={index} style={styles.entertainmentItem}>
//               <Link
//                 href={`/entertainment/${generateSlug(entertainmentItem.title)}`}
//                 className="no-underline hover:no-underline"
//               >
//                 <div
//                   style={styles.card}
//                   className="flex flex-col sm:flex-row gap-4"
//                 >
//                   <img
//                     src={entertainmentItem.thumbnail || entertainmentItem.image}
//                     alt={entertainmentItem.title}
//                     // style={{
//                     //   height: "200px",
//                     //   width: "100%",
//                     //   objectFit: "cover",
//                     //   boxShadow: "0 0 10px 0 #000",
//                     //   filter:
//                     //     "contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(0deg)",
//                     // }}
//                     style={{
//                       // width: "300px", // Ensures the image is displayed at this width
//                       // height: "400px", // Ensures the image is displayed at this height
//                       // objectFit: "cover",
//                       // margin: "auto",
//                       // marginTop: "50px",
//                       // marginBottom: "20px",
//                       // borderRadius: "50px",
//                       boxShadow: "0 0 10px 0 #000",
//                       filter:
//                         "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
//                     }}
//                     className="w-full sm:w-32 sm:h-20 object-cover rounded-md mb-4 sm:mb-0"
//                   />
//                   <div className="flex flex-col sm:text-left text-center">
//                     <h2
//                       style={styles.cardTitle}
//                       className="text-xl font-semibold mb-2"
//                     >
//                       {entertainmentItem.title}
//                     </h2>
//                     <p
//                       style={styles.cardDate}
//                       className="text-gray-500 text-sm mb-2"
//                     >
//                    Date: {entertainmentItem.date} - Time {entertainmentItem.time}
//                     </p>
//                     <p style={styles.cardDescription} className="text-gray-600">
//                       {entertainmentItem.description}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Pagination Controls */}
//         <div className="flex items-center justify-center mt-4 gap-2">
//           {/* Previous Button */}
//           <button
//             onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//             className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
//               currentPage === 1
//                 ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                 : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
//             }`}
//             disabled={currentPage === 1}
//             style={{
//               fontFamily: "Poppins, sans-serif",
//               fontWeight: "bold",
//               textAlign: "center",
//               textShadow: "1px 1px 0px #000",
//               fontSize: "20px",
//             }}
//           >
//             Previous
//           </button>

//           {/* Visible Page Buttons */}
//           {visiblePages.map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
//                 currentPage === page
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
//               }`}
//               style={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 textShadow: "1px 1px 0px #000",
//                 fontSize: "20px",
//               }}
//             >
//               {page}
//             </button>
//           ))}

//           {/* Next Button */}
//           <button
//             onClick={() =>
//               handlePageChange(Math.min(totalPages, currentPage + 1))
//             }
//             className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
//               currentPage === totalPages
//                 ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                 : "bg-white text-blue-600 border-gray-300 hover:bg-blue-100"
//             }`}
//             disabled={currentPage === totalPages}
//             style={{
//               fontFamily: "Poppins, sans-serif",
//               fontWeight: "bold",
//               textAlign: "center",
//               textShadow: "1px 1px 0px #000",
//               fontSize: "20px",
//             }}
//           >
//             Next
//           </button>
//         </div>

//         {/* Current Page Info */}
//         <div
//           className="mt-4 text-center text-gray-700 text-xl"
//           style={{
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: "bold",
//             textAlign: "center",
//             marginBottom: "20px",
//             textShadow: "1px 1px 0px #000",
//           }}
//         >
//           <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//     color: "var(--text-secondary-color)", // Dynamic secondary text color
//   },
//   title: {
//     fontSize: "2.5rem",
//     textAlign: "center",
//     marginBottom: "40px",
//     color: "#007bff",
//   },
//   newsList: {
//     listStyleType: "none",
//     padding: "0",
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//   },
//   entertainmentItem: {
//     display: "flex",
//     justifyContent: "center",
//     fontWeight: "bold",
//     fontSize: "1.1rem",
//     textShadow: "1px 1px 0px #000",
//   },
//   card: {
//     backgroundColor: "var(--card-bg-color)", // Dynamic card background
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//     display: "flex",
//     width: "100%",
//     maxWidth: "800px",
//     transition: "transform 0.3s ease",
//   },
//   cardImage: {
//     width: "200px",
//     height: "150px",
//     objectFit: "cover",
//     borderRadius: "8px",
//   },
//   cardContent: {
//     padding: "15px",
//     flex: 1,
//     color: "var(--text-secondary-color)", // Dynamic secondary text color
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "600",
//     marginBottom: "10px",
//     fontWeight: "bold",
//     textShadow: "1px 1px 0px #000",
//     color: "var(--text-secondary-color)", // Dynamic secondary text color
//   },
//   cardDate: {
//     fontSize: "1rem",
//     color: "#777",
//   },

//   paginationContainer: {
//     textAlign: "center",
//     marginTop: "40px",
//   },
//   pagination: {
//     marginBottom: "20px",
//   },
//   pageButton: {
//     padding: "10px 20px",
//     margin: "0 5px",
//     fontSize: "1rem",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   activePageButton: {
//     backgroundColor: "#0056b3",
//   },
//   totalPages: {
//     fontSize: "1.2rem",
//     color: "#333",
//     fontWeight: "600",
//   },
//   paginationContainer: { marginTop: "30px", textAlign: "center" },
//   pageButton: {
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     textShadow: "1px 1px 0px #000",
//     fontSize: "20px",
//     margin: "0 5px",
//     fontWeight: "bold",
//   },
// };
