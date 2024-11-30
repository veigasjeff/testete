import React, { useState, useEffect } from "react";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import Head from "next/head";
import SocialSharing from "../components/SocialSharing";

import mainStyles from "@styles/styles.module.css";
// Helper function to create a slug from a title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
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
  const categories = [
    "news",
    "live",
    "politics",
    "sports",
    "entertainment",
    "fitness",
    "tech",
    "crime",
    "business",
    "shopping",
    "auto",
    "documentary",
  ];
  const allData = {};

  try {
    for (const category of categories) {
      const filePath = path.join(process.cwd(), "public", `${category}.json`);
      const jsonData = await fs.readFile(filePath, "utf-8");
      const parsedData = JSON.parse(jsonData);

      allData[category] = Array.isArray(parsedData) ? parsedData.slice(0, 3) : [];
    }
  } catch (error) {
    console.error(`Error loading data for category ${category}:`, error);
  }

  return {
    props: {
      allData,
    },
  };
}


const NewsSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "World News 24™ – Stay Informed, Stay Ahead.",
  url: "https://worldsnews24.vercel.app",
  sameAs: [
    "https://www.facebook.com/news24channel",
    "https://twitter.com/WorldNews24",
    "https://www.youtube.com/@News24thinkfirst",
    "https://www.instagram.com/WorldNews24official/",
  ],
  logo: {
    "@type": "ImageObject",
    url: "https://worldsnews24.vercel.app/logo.png",
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
      "@type": "Person",
      "@id": "https://gravatar.com/drtrailer2022",
      name: "Dr Trailer",
      url: "https://gravatar.com/drtrailer2022",
      image: {
        "@type": "ImageObject",
        "@id": "https://gravatar.com/drtrailer2022",
        url: "https://gravatar.com/drtrailer2022",
        caption: "Dr Trailer",
        inLanguage: "en-US",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://worldsnews24.vercel.app/#organization",
      name: "World News 24™ – Stay Informed, Stay Ahead.",
      url: "https://worldsnews24.vercel.app/",
    },
    {
      "@type": "WebSite",
      "@id": "https://worldsnews24.vercel.app/#website",
      url: "https://worldsnews24.vercel.app/",
      name: "World News 24™ – Stay Informed, Stay Ahead.",
      publisher: {
        "@type": "Organization",
        "@id": "https://worldsnews24.vercel.app/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://worldsnews24.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://worldsnews24.vercel.app/#webpage",
      url: "https://worldsnews24.vercel.app/",
      name: "News",
      datePublished: "2024-01-13T13:00:00+00:00",
      dateModified: "2024-01-13T13:13:00+00:00",
      about: {
        "@type": "Person",
        "@id": "https://gravatar.com/drtrailer2022",
        name: "Dr Trailer",
        url: "https://gravatar.com/drtrailer2022",
        image: {
          "@type": "ImageObject",
          "@id": "https://gravatar.com/drtrailer2022",
          url: "https://gravatar.com/drtrailer2022",
          caption: "Dr Trailer",
          inLanguage: "en-US",
        },
      },
      isPartOf: {
        "@id": "https://worldsnews24.vercel.app/#website",
      },
      inLanguage: "en-US",
      mainEntity: [
        {
          "@type": "Article",
          "@id": "https://worldsnews24.vercel.app/",
          url: "https://worldsnews24.vercel.app/",
          headline: "Movie",
          datePublished: "2024-01-13T13:00:00+00:00",
          dateModified: "2024-01-13T13:13:00+00:00",
          author: {
            "@type": "Person",
            "@id": "https://gravatar.com/drtrailer2022",
            name: "Dr Trailer",
            url: "https://gravatar.com/drtrailer2022",
            image: {
              "@type": "ImageObject",
              "@id": "https://gravatar.com/drtrailer2022",
              url: "https://gravatar.com/drtrailer2022",
              caption: "Dr Trailer",
              inLanguage: "en-US",
            },
          },
          publisher: {
            "@type": "Organization",
            "@id": "https://worldsnews24.vercel.app/#organization",
            name: "World News 24™ – Stay Informed, Stay Ahead.",
            url: "https://worldsnews24.vercel.app/",
          },
        },
      ],
      sameAs: [
        "https://www.facebook.com/news24channel",
        "https://twitter.com/WorldNews24",
        "https://www.youtube.com/@News24thinkfirst",
        "https://www.instagram.com/WorldNews24official/",
      ],
    },
  ],
});

const soap2daySchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://worldsnews24.vercel.app/",
      url: "https://worldsnews24.vercel.app/",
      name: "World News 24™ – Stay Informed, Stay Ahead.",
      isPartOf: { "@id": "https://worldsnews24.vercel.app/#website" },
      about: { "@id": "https://worldsnews24.vercel.app/#organization" },
      primaryImageOfPage: { "@id": "https://worldsnews24.vercel.app/#primaryimage" },
      image: { "@id": "https://worldsnews24.vercel.app/#primaryimage" },
      thumbnailUrl: "https://worldsnews24.vercel.app/og_image.jpg",
      datePublished: "2023-07-02T18:30:00+00:00",
      dateModified: "2024-09-24T05:11:20+00:00",
      breadcrumb: { "@id": "https://worldsnews24.vercel.app/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [
        { "@type": "ReadAction", target: ["https://worldsnews24.vercel.app/"] },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://worldsnews24.vercel.app/#primaryimage",
      url: "https://worldsnews24.vercel.app/og_image.jpg",
      contentUrl: "https://worldsnews24.vercel.app/og_image.jpg",
      width: 1280,
      height: 720,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://worldsnews24.vercel.app/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
    },
    {
      "@type": "WebSite",
      "@id": "https://worldsnews24.vercel.app/#website",
      url: "https://worldsnews24.vercel.app/",
      name: "World News 24™ – Stay Informed, Stay Ahead.",
      description: "",
      publisher: { "@id": "https://worldsnews24.vercel.app/#organization" },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://worldsnews24.vercel.app/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://worldsnews24.vercel.app/#organization",
      name: "World News 24™ – Stay Informed, Stay Ahead.",
      url: "https://worldsnews24.vercel.app/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://worldsnews24.vercel.app/#/schema/logo/image/",
        url: "https://worldsnews24.vercel.app/logo.png",
        contentUrl: "https://worldsnews24.vercel.app/logo.png",
        width: 280,
        height: 100,
        caption: "World News 24™ – Stay Informed, Stay Ahead.",
      },
      image: { "@id": "https://worldsnews24.vercel.app/#/schema/logo/image/" },
    },
  ],
});

export default function HomePage({ allData }) {
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

  useEffect(() => {
    const updateData = async () => {
      await fetch('/api/scrape'); // Trigger the scraper
    };

    // Trigger data update every hour
    const interval = setInterval(updateData, 3600000); // 1 hour in ms
    updateData(); // Initial data fetch on page load

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <>
    <Head>
    <title> World News 24™ – Stay Informed, Stay Ahead</title>

    <link
      rel="sitemap"
      type="application/xml"
      title="Sitemap"
      href="https://worldsnews24.vercel.app/sitemap.xml"
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
    <meta name="keywords" content="world news 24, world news, united kingdom, united states, australia, canada, europe, asia, japan, china, south america" />
    <meta
      property="og:description"
      content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, technology, culture, sports, and more—24/7."
    />
    <meta
      name="description"
      content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, technology, culture, sports, and more—24/7."
    />
    <link rel="canonical" href="https://worldsnews24.vercel.app/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content=" World News 24™ – Stay Informed, Stay Ahead "
    />
    <meta property="og:url" content="https://worldsnews24.vercel.app" />
    <meta
      property="og:site_name"
      content=" World News 24™ – Stay Informed, Stay Ahead "
    />
    <meta
      property="og:image"
      content="https://worldsnews24.vercel.app/og_image.jpg"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/jpg" />
    <meta
      name="application-name"
      content=" World News 24™ – Stay Informed, Stay Ahead "
    />
    <meta
      property="article:modified_time"
      content="2024-01-01T13:13:13+00:00"
    />
    <link
      rel="sitemap"
      type="application/xml"
      title="Sitemap"
      href="https://worldsnews24.vercel.app/sitemap.xml"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content=" World News 24™ – Stay Informed, Stay Ahead"
    />
    <meta
      name="twitter:description"
      content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, technology, culture, sports, and more—24/7."
    />
    <meta
      name="twitter:image"
      content="https://worldsnews24.vercel.app/og_image.jpg"
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
    <header className="flex flex-col sm:flex-row items-center justify-center sm:justify-between h-auto sm:h-[70vh] p-5 bg-blue-600" >
  {/* Hero Image Section */}
  <div
    className="w-full sm:w-[60%] h-[300px] sm:h-full bg-no-repeat bg-center bg-contain rounded-lg "
    style={{
      backgroundImage: "url(http://localhost:3000/og_image.jpg)",
      backgroundSize: "contain",  // Ensures the image remains proportionate
      backgroundPosition: "center", 
      filter:
      "contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
    }}
  ></div>

  {/* Hero Content Section */}
  <div className="w-full sm:w-[55%] flex flex-col items-center justify-center p-5 bg-blue-600 text-white text-center sm:ml-5 rounded-lg mt-5 sm:mt-0" >
    <h1 className="text-3xl sm:text-5xl font-bold mb-4 " 
             style={{ textShadow: "2px 2px 5px #000", }}> Welcome to World News 24™</h1>
    <p className="text-xl max-w-xl mb-4 text-shadow-lg"   style={{ textShadow: "2px 2px 5px #000", }}> 
      Your source for the latest updates across various categories.
    </p>
    <div className="mt-4 bg-black bg-opacity-50 px-4 py-2 rounded-md text-white inline-block">
      {currentDate}
    </div>
  </div>
</header>


      <div className="categories">
  {Object.keys(allData).map((category) => (
    <section key={category} className="category-section bg-gray-100 p-4 rounded-lg shadow-md"  style={{ marginBottom: "20px",}}> 
      <h2 className="category-title text-4xl font-semibold text-blue-500 mb-5"
        style={{ textShadow: "3px 5px 5px #000", marginBottom:'20px'}}>
        <Link href={`/${category}`} className="no-underline hover:no-underline">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      </h2>
      <div className="category-content flex flex-col gap-8">
        {allData[category].map((item, index) => (
          <div key={index} className="card bg-white p-4 rounded-lg shadow-md">
            <Link href={`/${category}/${generateSlug(item.title)}`} className="no-underline hover:no-underline">
              <div className="card-content flex flex-col md:flex-row gap-4">
                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  className="card-image w-full md:w-32 h-auto md:h-20 object-cover rounded-lg mb-4 md:mb-0"
                />
                <div className="card-text">
                  <h3 className="card-title text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="card-description text-gray-600 text-base">{item.description}</p>
                </div>
              </div>
            </Link>
            <small className="item-footer text-sm text-gray-500 mt-2">
              {item.date} - {item.time} | Courtesy: {item.courtesy}
            </small>
          </div>
        ))}
      </div>
      <Link href={`/${category}`} className="no-underline hover:no-underline">
            <div className="animate-pulse view-all text-red-500 text-2xl font-semibold mt-5 ">View All  {category.charAt(0).toUpperCase() + category.slice(1)} Articles →</div>
      </Link>
    </section>
  ))}
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
    color: "#333",
    
  },
  // hero: {
  //   textAlign: "center",
  //   padding: "40px 20px",
  //   backgroundColor: "#007bff", // Blue hero background
  //   color: "white",
  //   borderRadius: "8px",
  //   marginBottom: "40px",
  // },
  // heroTitle: {
  //   fontSize: "3rem",
  //   marginBottom: "10px",
  // },
  // heroDescription: {
  //   fontSize: "1.5rem",
  //   maxWidth: "800px",
  //   margin: "0 auto",
  // },
  // dateTime: {
  //   marginTop: "20px",
  //   fontSize: "1.2rem",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark background for date/time
  //   padding: "10px 15px",
  //   borderRadius: "5px",
  //   color: "white",
  //   display: "inline-block",
  // },
  categories: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  categorySection: {
    backgroundColor: "var(--section-bg-color)", // Dynamic section background
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)", // Subtle shadow
  },
  categoryTitle: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#007bff", // Blue color for category title
  },
  categoryContent: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  card: {
    backgroundColor: "var(--card-bg-color)", // Dynamic card background
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for cards
    overflow: "hidden",
  },
  cardContent: {
    display: "flex",
    gap: "20px",
  },
  cardImage: {
    width: "120px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0 0 10px",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#666", // Grey color for descriptions
  },
  itemFooter: {
    fontSize: "0.9rem",
    color: "#777", // Slightly lighter grey for footer text
    marginTop: "10px",
  },
  viewAll: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#007bff", // Blue color for "view all" link
    textDecoration: "none",
    marginTop: "20px",
  },
};



// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "'Poppins', sans-serif",
//     color: "var(--text-color)", // Dynamic text color
//     backgroundColor: "var(--background-color)", // Dynamic background color
//   },
//   hero: {
//     textAlign: "center",
//     padding: "40px 20px",
//     backgroundColor: "var(--primary-bg-color)", // Dynamic primary background
//     color: "var(--primary-text-color)", // Dynamic primary text color
//     borderRadius: "8px",
//     marginBottom: "40px",
//   },
//   heroTitle: {
//     fontSize: "3rem",
//     marginBottom: "10px",
//   },
//   heroDescription: {
//     fontSize: "1.5rem",
//     maxWidth: "800px",
//     margin: "0 auto",
//   },
//   dateTime: {
//     marginTop: "20px",
//     fontSize: "1.2rem",
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Remains static
//     padding: "10px 15px",
//     borderRadius: "5px",
//     color: "var(--primary-text-color)", // Dynamic text color for contrast
//     display: "inline-block",
//   },
//   categories: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "40px",
//   },
//   categorySection: {
//     backgroundColor: "var(--section-bg-color)", // Dynamic section background
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 10px 20px var(--card-shadow-color)", // Dynamic shadow
//   },
//   categoryTitle: {
//     fontSize: "2rem",
//     fontWeight: "600",
//     marginBottom: "20px",
//     color: "var(--link-color)", // Dynamic link color
//   },
//   categoryContent: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "30px",
//   },
//   card: {
//     backgroundColor: "var(--card-bg-color)", // Dynamic card background
//     padding: "15px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px var(--card-shadow-color)", // Dynamic shadow
//     overflow: "hidden",
//   },
//   cardContent: {
//     display: "flex",
//     gap: "20px",
//   },
//   cardImage: {
//     width: "120px",
//     height: "80px",
//     objectFit: "cover",
//     borderRadius: "8px",
//   },
//   cardText: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardTitle: {
//     fontSize: "1.25rem",
//     fontWeight: "600",
//     margin: "0 0 10px",
//     color: "var(--text-color)", // Dynamic text color
//   },
//   cardDescription: {
//     fontSize: "1rem",
//     color: "var(--text-secondary-color)", // Dynamic secondary text color
//   },
//   itemFooter: {
//     fontSize: "0.9rem",
//     color: "var(--text-secondary-color)", // Dynamic secondary text color
//     marginTop: "10px",
//   },
//   viewAll: {
//     fontSize: "1rem",
//     fontWeight: "600",
//     color: "var(--link-color)", // Dynamic link color
//     textDecoration: "none",
//     marginTop: "20px",
//   },
// };