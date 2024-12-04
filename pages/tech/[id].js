import React, { useEffect } from "react";
import path from "path";
import fs from "fs/promises";
import { useRouter } from "next/router";
import Head from "next/head";
import SocialSharing from "../../components/SocialSharing";
import GoogleTranslate from "../../components/GoogleTranslate";
// Helper function to create a slug from a title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
}

// This function generates the paths for static generation
export async function getStaticPaths() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'tech.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const techData = JSON.parse(jsonData);

    // Generate slugs and create paths for each tech item
    const paths = techData.map((techItem) => ({
      params: { id: generateSlug(techItem.title) }, // Use the slug as the dynamic route part
    }));

    return {
      paths,
      fallback: false, // Set to false to return 404 if the slug doesn't exist
    };
  } catch (error) {
    console.error("Error reading tech.json", error);
    return { paths: [], fallback: false };
  }
}

const NewsSchema = (techItem) => 
  JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsMediaOrganization",
        "@id": "http://localhost:3000/#organization",
        name: "World News 24™ – Stay Informed, Stay Ahead.",
        url: "http://localhost:3000",
        sameAs: [
          "https://www.facebook.com/news24channel",
          "https://twitter.com/WorldNews24",
          "https://www.youtube.com/@News24thinkfirst",
          "https://www.instagram.com/WorldNews24official/"
        ],
        logo: {
          "@type": "ImageObject",
          url: "http://localhost:3000/logo.png",
          width: 150,
          height: 60
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "World News 24 Broadcast India Limited, FC-23",
          addressLocality: "Sector 16A, Film City Mumbai",
          addressRegion: "Mumbai, India",
          postalCode: "400099",
          addressCountry: "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${techItem.siteurl}/#website`,
        url: techItem.siteurl,
        name: "World News 24™ – Stay Informed, Stay Ahead.",
        publisher: {
          "@type": "Organization",
          "@id": "http://localhost:3000/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "http://localhost:3000/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        inLanguage: "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${techItem.siteurl}/#webpage`,
        url: techItem.siteurl,
        name: "World News 24™ – Stay Informed, Stay Ahead.",
        isPartOf: {
          "@id": "http://localhost:3000/#website"
        },
        primaryImageOfPage: {
          "@id": "http://localhost:3000/#primaryimage"
        },
        image: {
          "@id": "http://localhost:3000/#primaryimage"
        },
        thumbnailUrl: "http://localhost:3000/og_image.jpg",
        datePublished: techItem.datePublished,
        dateModified: techItem.dateModified,
        breadcrumb: {
          "@id": "http://localhost:3000/#breadcrumb"
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [techItem.siteurl]
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${techItem.siteurl}/#article`,
        url: techItem.siteurl,
        headline: techItem.title,
        datePublished: techItem.datePublished,
        dateModified: techItem.dateModified,
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
            inLanguage: "en-US"
          }
        },
        publisher: {
          "@type": "Organization",
          "@id": "http://localhost:3000/#organization",
          name: "World News 24™ – Stay Informed, Stay Ahead.",
          url: "http://localhost:3000"
        },
        image: {
          "@id": "http://localhost:3000/#primaryimage"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "http://localhost:3000/#primaryimage",
        url: "http://localhost:3000/og_image.jpg",
        contentUrl: "http://localhost:3000/og_image.jpg",
        width: 1280,
        height: 720
      },
      {
        "@type": "BreadcrumbList",
        "@id": "http://localhost:3000/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "http://localhost:3000/"
          }
        ]
      }
    ]
  });

// Fetching specific tech data based on the dynamic slug (id)
export async function getStaticProps({ params }) {
  
  try {
    const filePath = path.join(process.cwd(), 'public', 'tech.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const techData = JSON.parse(jsonData);

    // Find the tech item based on the slug in the URL
    const techItem = techData.find((item) => generateSlug(item.title) === params.id);

    if (!techItem) {
      return { notFound: true }; // Return 404 if the tech item is not found
    }

    return {
      props: {
        techItem, // Pass the tech item as a prop to the page
      },
    };
  } catch (error) {
    console.error("Error fetching tech item", error);
    return { notFound: true };
  }
}

export default function techArticle({ techItem }) {
  const schemaData = NewsSchema(techItem); 
  const router = useRouter();

  // Handle navigation back to main news section
  const goBackToMain = () => {
    router.push('/tech');
  };

  useEffect(() => {
    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve();
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          tag.onload = () => {
            window.onYouTubeIframeAPIReady = resolve;
          };
          document.body.appendChild(tag);
        }
      });
    };

    loadYouTubeAPI().then(() => {
      // Initialize first video player
      if (techItem.source && techItem.source !== "#") {
        new window.YT.Player("player-0", {
          videoId: techItem.source,
          playerVars: {
            playsinline: 1,
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: techItem.source,
          },
        });
      }

      // Initialize second video player
      if (techItem.source1 && techItem.source1 !== "#") {
        new window.YT.Player("player-1", {
          videoId: techItem.source1,
          playerVars: {
            playsinline: 1,
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: techItem.source1,
          },
        });
      }
    });
  }, [techItem]);

  
  return (
    <>
 <Head>
      <title>World News 24™ – {techItem.title || "Default Title"}</title>

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
          content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, technology, culture, sports, and more—24/7."
        />
        <meta
          name="description"
          content="World News 24™: Your trusted source for breaking news, global updates, and real-time coverage of politics, business, technology, culture, sports, and more—24/7."
        />
        <link rel="canonical" href={techItem.siteurl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" World News 24™ – Stay Informed, Stay Ahead "
        />
        <meta property="og:url" content={techItem.siteurl} />

        <meta
          property="og:site_name"
          content=" World News 24™ – Stay Informed, Stay Ahead "
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
          href="http://localhost:3000/sitemap.xml"
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
          dangerouslySetInnerHTML={{ __html: schemaData }}
        />
      </Head>
      <SocialSharing />
      <GoogleTranslate />
    <div style={styles.container}>
   
       
       
  
        {/* Pagination Button to Return to Main Section */}
        <div style={styles.paginationContainer}>
        <button onClick={goBackToMain} style={styles.pageButton}>
          Back to Main Technology Section
        </button>
      </div>
      <h1 style={styles.title}>{techItem.title}</h1>
      <p style={styles.date}>
       Date: {techItem.date} - Time: {techItem.time}
      </p>
      <p style={styles.courtesy}>Courtesy: {techItem.courtesy}</p>

      {/* Description Section */}
      {techItem.description && <p style={styles.description}>{techItem.description}</p>}

      {/* Image Section */}
      {techItem.image && <img src={techItem.image} alt={techItem.title} 
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
      />}

      {/* first Description */}
      {techItem.description1 && <p style={styles.description1}>{techItem.description1}</p>}

      {/* First YouTube Video */}
      {techItem.source && techItem.source !== "#" && (
        <div style={styles.source}>
          <div id="player-0" style={styles.youtubePlayer}></div>
        </div>
      )}

      {/* Image 1 Section */}
      {techItem.image1 && <img src={techItem.image1} alt="Additional" style={styles.image} />}
      {techItem.description2 && <p style={styles.description2}>{techItem.description2}</p>}
      {/* Second YouTube Video */}
      {techItem.source1 && techItem.source1 !== "#" && (
        <div style={styles.source}>
          <div id="player-1" style={styles.youtubePlayer}></div>
        </div>
      )}
           {/* second Description */}
   
      {/* Embed MP3 Player and Podcast Indicator */}
      {(techItem.pod || techItem.mp3) && (
        <div style={styles.podcastContainer}>
          {/* Podcast Indicator and YouTube Player */}
          {techItem.pod && (
            <div style={styles.podcastWrapper}>
              <div style={styles.podcastIndicator}>
                <span role="img" className="animate-pulse" aria-label="Podcast" style={styles.podcastIcon}>🎙️</span>
                Podcast
              </div>
              <iframe
                width="50%"
                height="80"
                src={`https://www.youtube.com/embed/${new URL(techItem.pod).searchParams.get("v")}?list=${new URL(techItem.pod).searchParams.get("list")}&controls=1`}
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                style={styles.youtubeEmbed}
              />
            </div>
          )}
          
          {/* MP3 Player */}
          {techItem.mp3 && (
            <div style={styles.audioWrapper}>
              <div style={styles.podcastIndicator}>
                <span role="img" className="animate-pulse" aria-label="Podcast" style={styles.podcastIcon}>🎙️</span>
                Podcast
              </div>
              {/* <audio controls style={styles.audioPlayer}>
                <source src={techItem.mp3} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio> */}
                {/* MP3 Player */}
             <audio controls width="100%" height="50">
              <source src={techItem.mp3} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}
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
  marginBottom: "20px",
  color: "#007bff",
  fontWeight: "bold",
  textShadow: "1px 1px 0px #000",
},
date: {
  fontSize: "1.3rem",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.5rem",
  textShadow: "1px 1px 0px #000",
  color: "var(--text-secondary-color)", // Dynamic secondary text color
},
courtesy: {
  fontSize: "1.3rem",
  textAlign: "center",
  color: "var(--text-secondary-color)", // Dynamic secondary text color
  marginBottom: "30px",
  fontWeight: "bold",
  textShadow: "1px 1px 0px #000",
},
description: {
  fontSize: "1.5rem",
  lineHeight: "1.6",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "var(--text-secondary-color)", // Dynamic secondary text color
},
description1: {
  fontSize: "1.3rem",
  lineHeight: "1.6",
  marginBottom: "20px",
  fontWeight: "bold",
  textShadow: "1px 1px 0px #000",
  color: "var(--text-secondary-color)", // Dynamic secondary text color
},
description2: {
  fontSize: "1.3rem",
  lineHeight: "1.6",
  marginBottom: "20px",
  fontWeight: "bold",
  textShadow: "1px 1px 0px #000",
  color: "var(--text-secondary-color)", // Dynamic secondary text color
},
image: {
  width: "100%",
  maxWidth: "800px",
  margin: "20px auto",
  display: "block",
  borderRadius: "8px",
  boxShadow: "0 0 10px 0 #000",
  filter:
  "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
},
image1: {
  width: "100%",
  maxWidth: "800px",
  margin: "20px auto",
  display: "block",
  borderRadius: "8px",
  boxShadow: "0 0 10px 0 #000",
  filter:
  "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
},
source: {
  marginBottom: "40px",
},
youtubePlayer: {
  width: "100%",
  maxWidth: "800px",
  margin: "20px auto",
  display: "block",
  borderRadius: "8px",
  height: "450px",
  boxShadow: "0 0 10px 0 #000",
  filter:
    "contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
},
podcastContainer: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",  
  
},
podcastWrapper: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "10px",
},
podcastIndicator: {
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  fontWeight: "bold",
  marginRight:"15px",
  marginLeft:"15px"
  
},
podcastIcon: {
  fontSize: "36px",
  marginRight: "8px",
  
},
youtubeEmbed: {
  borderRadius: "5px",
  marginLeft: "10px",
  boxShadow: "0 0 10px 0 #000",
  filter:
    "contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)",
},
audioWrapper: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "20px",
},
audioPlayer: {
  width: "100%",
  maxWidth: "600px",
  display: "block",
  margin: "0 auto",
},
paginationContainer: { marginTop: "30px", textAlign: "center" },
pageButton: { backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer",  textShadow: "1px 1px 0px #000",  fontSize: "20px", fontWeight:"bold" },
};