// // pages/index.js
// import React from 'react';
// import Youtube from '../components/Youtube';

// const HomePage = () => {
//   const [currentDate, setCurrentDate] = useState("");

//   const getFormattedDate = () => {
//     const today = new Date();
//     const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
//     return today.toLocaleDateString("en-GB", options);
//   };

//   // Set the current date when the component mounts
//   useEffect(() => {
//     setCurrentDate(getFormattedDate());
//   }, []);
  
//   return (
//     <div>
     
//         <h1 className="title font-bold"  style={{ marginTop: "50px", textShadow: "1px 1px 0px #000", fontSize:"30px",  }}>
//            World News 24™ – Stay Informed, Stay Ahead </h1>
        //    <div
        //   className='shadow-lg flex items-center justify-center'
        //   role='navigation'
          
        // >
        //   <ul
        //     id='menu-header-menu'
        //     className='menu flex flex-wrap justify-center'
        //   >
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-35' className='menu-home active'>
        //         <a
        //           href='/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Home<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>

        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-284913' className='menu-softwarecategories'>
        //         <a href='../browsers/'>
        //           <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
        //             Browser<span className='p'></span>
        //           </h3>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-248' className='menu-operating-systems'>
        //         <a
        //           href='../desktop/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Desktop<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-11605' className='menu-3dcad'>
        //         <a
        //           href='../multimedia/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Multimedia<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-11610' className='menu-graphicdesign'>
        //         <a
        //           href='../graphic-design/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Graphic Design<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-196' className='menu-multimedia'>
        //         <a
        //           href='../network/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Network<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-161' className='menu-development'>
        //         <a
        //           href='../development/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Development<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-84' className='menu-antivirus'>
        //         <a
        //           href='../file-sharing/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           File Sharing<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-84' className='menu-antivirus'>
        //         <a
        //           href='../security/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Security<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-11606' className='menu-security'>
        //         <a
        //           href='../games/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Games<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-35' className='menu-home active'>
        //         <a
        //           href='../education'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Education<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-35' className='menu-home active'>
        //         <a
        //           href='../mobile'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Mobile<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-11606' className='menu-security'>
        //         <a
        //           href='../utilities/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Utilities<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-194' className='menu-tutorials'>
        //         <a
        //           href='../movies/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Movies<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //     <button className='border border-black p-2 m-1 hover:bg-orange-100'>
        //       <li id='menu-item-194' className='menu-tutorials'>
        //         <a
        //           href='../latest/'
        //           className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
        //         >
        //           Blog Post<span className='p'></span>
        //         </a>
        //       </li>
        //     </button>
        //   </ul>
        // </div>

//       <Youtube />
//     </div>
//   );
// };

// export default HomePage;


















import React, { useState, useEffect } from 'react';
import Youtube from '../components/Youtube';
import SocialSharing from "../components/SocialSharing";
import Head from "next/head";
import Script from "next/script";

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState("");

  const getFormattedDate = () => {
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return today.toLocaleString("en-GB", options); // We use toLocaleString to get both date and time
  };

  // Set the current date when the component mounts
  useEffect(() => {
    const date = getFormattedDate();
    setCurrentDate(date);
    const intervalId = setInterval(() => {
      setCurrentDate(getFormattedDate()); // Update every second for real-time
    }, 1000);
    
    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  const NewsSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "World News 24™ – Stay Informed, Stay Ahead.",
    "url": "https://worldsnews24.vercel.app",
    "sameAs": [
      "https://www.facebook.com/news24channel",
      "https://twitter.com/WorldNews24",
      "https://www.youtube.com/@News24thinkfirst",
      "https://www.instagram.com/WorldNews24official/"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://worldsnews24.vercel.app/logo.png",
      "width": "150",
      "height": "60"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "World News 24 Broadcast India Limited,FC-23",
      "addressLocality": "Sector 16A, Film City Mumbai",
      "addressRegion": "Mumbai, India",
      "postalCode": "400099",
      "addressCountry": "IN"
    }
  });

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://worldsnews24.vercel.app/author/watchnewsonline/',
        name: 'Dr Trailer',
        url: 'https://worldsnews24.vercel.app/author/watchnewsonline/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://worldsnews24.vercel.app/#organization',
        name: 'World News 24™ – Stay Informed, Stay Ahead.',
        url: 'https://worldsnews24.vercel.app/'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://worldsnews24.vercel.app/#website',
        url: 'https://worldsnews24.vercel.app/',
        name: 'World News 24™ – Stay Informed, Stay Ahead.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://worldsnews24.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://worldsnews24.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://worldsnews24.vercel.app/#webpage',
        url: 'https://worldsnews24.vercel.app/',
        name: 'News',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://worldsnews24.vercel.app/author/uwatchfreeonline/',
          name: 'Dr Trailer',
          url: 'https://worldsnews24.vercel.app/author/uwatchfreeonline/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://worldsnews24.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://worldsnews24.vercel.app/',
            url: 'https://worldsnews24.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id':
                'https://worldsnews24.vercel.app/author/watchnewsonline/',
              name: 'Dr Trailer',
              url: 'https://worldsnews24.vercel.app/author/watchnewsonline/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://worldsnews24.vercel.app/#organization',
              name: 'World News 24™ – Stay Informed, Stay Ahead.',
              url: 'https://worldsnews24.vercel.app/'
            }
          }
        ],
        "sameAs": [
          "https://www.facebook.com/news24channel",
          "https://twitter.com/WorldNews24",
          "https://www.youtube.com/@News24thinkfirst",
          "https://www.instagram.com/WorldNews24official/"
        ],
      }
    ]
  })

  return (
    <div>
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
        <meta
          name="keywords"
          content="latest news, live news, business news, news in India, online news, bollywood news, breaking news, current news, world news, sports news, india latest news, news headlines, news site, news website, top news, India news, entertainment news, national news, political news, Asian News International"
        />
        <meta
          property="og:description"
          content="World News 24™: Your trusted source for breaking news, global updates, and in-depth analysis from around the world. Stay informed 24/7 with real-time coverage of politics, business, technology, culture, and more."
        />
        <meta
          name="description"
          content="World News 24™: Your trusted source for breaking news, global updates, and in-depth analysis from around the world. Stay informed 24/7 with real-time coverage of politics, business, technology, culture, and more."
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
          content="World News 24™: Your trusted source for breaking news, global updates, and in-depth analysis from around the world. Stay informed 24/7 with real-time coverage of politics, business, technology, culture, and more."
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

      
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: NewsSchema }}
      />
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
      <div
        style={{
          display: "flex",
          justifyContent: "center",  // Centers the title
          alignItems: "center",  // Centers items vertically
          marginTop: "50px",
        }}
      >
        <h1
          className="title font-bold"
          style={{
            textShadow: "1px 1px 0px #000",
            fontSize: "30px",
            textAlign: "center",  // Ensures the title is centered
            flex: 1,  // Ensures title takes up all available space
            // color: "white",  // Ensures the title is visible
          }}
        >
          World News 24™ <br></br>
          
          Stay Informed, Stay Ahead.
        </h1>
        {/* <h2
          className="title font-bold"
          style={{
            textShadow: "1px 1px 0px #000",
            fontSize: "0px",
            textAlign: "center",  // Ensures the title is centered
            flex: 1,  // Ensures title takes up all available space
            // color: "white",  // Ensures the title is visible
          }}
        >
          Stay Informed, Stay Ahead.
        </h2> */}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",  // Align the date to the right
          marginTop: "20px",
          paddingRight: "20px", // Adds padding so it's not too close to the edge
        }}
      >
        <div
          style={{
            color: "white",  // Makes sure the date is visible
            fontSize: "18px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",  // Adds a background for contrast (optional)
            padding: "5px 10px",
            borderRadius: "5px",  // Optional: for better readability
          }}
        >
          {currentDate}
        </div>
      </div>
      <SocialSharing />
      <div
          className='shadow-lg flex items-center justify-center'
          role='navigation'
          
        >
          <ul
            id='menu-header-menu'
            className='menu flex flex-wrap justify-center'
          >
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Home<span className='p'></span>
                </a>
              </li>
            </button>

            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-284913' className='menu-softwarecategories'>
                <a href='../live-news/'>
                  <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                    Live News<span className='p'></span>
                  </h3>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-248' className='menu-operating-systems'>
                <a
                  href='../worldnews/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  World News<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11605' className='menu-3dcad'>
                <a
                  href='../politics/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Politics<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11610' className='menu-graphicdesign'>
                <a
                  href='../sport/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Sport <span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11610' className='menu-graphicdesign'>
                <a
                  href='../tech/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Technology <span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-196' className='menu-multimedia'>
                <a
                  href='../shopping/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Shopping<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-196' className='menu-multimedia'>
                <a
                  href='../health/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Health<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-161' className='menu-development'>
                <a
                  href='../business/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Business<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../crime/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Crime<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../auto/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Auto<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../entertainment/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Entertainment<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../documentary/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Documentary<span className='p'></span>
                </a>
              </li>
            </button>
           
          </ul>
        </div>

      <div
        className="shadow-lg flex items-center justify-center"
        role="navigation"
      >
        <ul
          id="menu-header-menu"
          className="menu flex flex-wrap justify-center"
        >
          {/* Your existing menu items here */}
        </ul>
      </div>

      <Youtube />
    </div>
  );
};

export default HomePage;
