import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ShareButtons from '@components/ShareButtons';
import Marquee from '@components/Marquee';
import { Image } from 'cloudinary-react'
//import Ad from '../components/Ad';
import React, { useEffect, useState } from 'react';



const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};

export default function Home() {

  
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAd(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAdClose = () => {
    setShowAd(false);
  };


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('https://uwatch4free.vercel.app/movies.json');
      
      const data = await response.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
const schemaData   = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"CollectionPage",
      "@id":"https://uwatch4free.vercel.app/",
      "url":"https://uwatch4free.vercel.app/",
      "name":"Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free",
      "isPartOf":{
        "@id":"https://uwatch4free.vercel.app/#website"
      },
      "about":{
        "@id":"https://uwatch4free.vercel.app/#organization"
      },
      "description":"Uwatch4free™ - Watch Movies, TV-Series & Sports Live Online Free",
      "breadcrumb":{
        "@id":"https://uwatch4free.vercel.app/#breadcrumb"
      },
      "inLanguage":"en-US"
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://uwatch4free.vercel.app/#breadcrumb",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free"
        }
      ]
    },
    {
      "@type":"WebSite",
      "@id":"https://uwatch4free.vercel.app/#website",
      "url":"https://uwatch4free.vercel.app/",
      "name":"Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free",
      "description":"Uwatch4free™ - Watch Movies, TV-Series & Sports Live Online Free",
      "publisher":{
        "@id":"https://uwatch4free.vercel.app/#organization"
      },
      "potentialAction":[
        {
          "@type":"SearchAction",
          "target":{
            "@type":"EntryPoint",
            "urlTemplate":"https://uwatch4free.vercel.app/?s={search_term_string}"
          },
          "query-input":"required name=search_term_string"
        }
      ],
      "inLanguage":"en-US"
    },
    {
      "@type":"Organization",
      "@id":"https://uwatch4free.vercel.app/#organization",
      "name":"Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free",
      "url":"https://uwatch4free.vercel.app/",
      "logo":{
        "@type":"ImageObject",
        "inLanguage":"en-US",
        "@id":"https://uwatch4free.vercel.app/#/schema/logo/image/",
        "url":"https://uwatch4free.vercel.app/logo.png",
        "contentUrl":"https://uwatch4free.vercel.app/logo.png",
        "width":834,
        "height":135,
        "caption":"Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free"
      },
      "image":{
        "@id":"https://uwatch4free.vercel.app/#/schema/logo/image/"
      }
    }
  ]
};
  return (
  
    <div >
       <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
      <div className={styles.container}>
      <Head>
        <title>Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free</title>
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
        <meta name="facebook-domain-verification" content="13auzwhblf4oo4jn5vl6gcmebugsqb" />
        <meta property="fb:app_id" content="602176271414602" />
        <meta name='dailymotion-domain-verification' content='dmv6sg06w9r5eji88' />
        <meta name="monetag" content="076afbb772da1a62ef6f43756dfa5f65"></meta>
	  	 <meta name="google-site-verification" content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0" />
	      <meta name="description" content="Uwatch4free™ - Watch Movies, TV-Series & Sports Live Online Free" />
	     <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta name="keywords" content="uwatch4free,uwatchfree,streaming,latest movies,online tv,latest free movies,watch latest movies online" />
	     <meta property="og:locale" content="en_US" />   
       <meta property=" Content-Security-Policy: frame-ancestors 'self' uwatch4free.vercel.app *.uwatch4free.vercel.app;" />
       <meta property="og:site_name" content="Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free " />
	     <meta property="og:type" content="website" />
	     <meta property="og:title" content="Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free " />
	     <meta property="og:description" content="Uwatch4free™ - Watch Movies, TV-Series & Sports Live Online Free " />
	     <meta property="og:url" content="https://uwatch4free.vercel.app/" />
	     <meta property="og:image:type" content="image/jpeg" />
	     <meta property="og:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
	     <meta property="og:image:secure_url" content="https://uwatch4free.vercel.app/og_image.jpg" />
	     <meta name="twitter:card" content="summary_large_image" />
	     <meta name="twitter:title" content="Uwatch4free™ - Watch Movies, TV-Series & Sports Live Online Free " />
	     <meta name="twitter:description" content=" Uwatch4free™ - Watch Movies, TV-Series & Sports Live Online Free " />
	     <meta name="twitter:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
     
       <link rel="alternate" hrefLang="en-us" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="en-gb" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="en-ca" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="en-au" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="en-se" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="en-fr" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="en-dk" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="en-no" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hrefLang="x-default" 	href="https://uwatch4free.vercel.app/"/>
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest"></link>
  <link rel="canonical" href="https://uwatch4free.vercel.app/" />

      </Head>

     
      <main className={styles.main} >
          <section className={`${styles.movies} bg-gray-600  py-5`} >
       
    
          <ShareButtons url="https://uwatch4free.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatch4free.vercel.app/og_image.jpg" />
         
          
            <h1 className="text-center font-bold text-3xl  py-5" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Uwatch4free™ - High Definition Movies Tv Series & Sports Live. </h1>
          
            <div className="flex flex-wrap justify-center">
              {Array.isArray(movies) && movies.slice(1).map((movie, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={movie.title}>
                 <div className="relative overflow-hidden rounded-3xl border border-white shadow-md">
  <Image className="w-full h-full object-cover  rounded-3xl border border-white shadow-md"  loading="eager" src={movie.poster} alt={movie.title}  width={1000}  height={562.5} />

  <a href={movie['movie.watch']} className="absolute inset-0 flex items-center justify-center  "  >
   
  </a>
  <span className={`${movie.status === 'New Movie' || movie.badge === 'New Movie' ? 'bg-green-500 border border-white' : movie.status === 'Tv Series' || movie.badge === 'Tv Series' ? 'bg-yellow-500 border border-white' : movie.status === 'Tv Series UpDated' || movie.badge === 'Tv Series UpDated' ? 'bg-yellow-500 border border-white' : movie.status === 'Live Sports' || movie.badge === 'Live Sports' ? 'bg-red-500 border border-white' : movie.status === 'Tv Show' || movie.badge === 'Tv Show' ? movie.badge === 'blue' ? 'bg-blue-500 border border-white' : 'bg-blue-500 border border-white' : movie.status === 'Sports' || movie.badge === 'Sports' ? movie.badge === 'orange' ? 'bg-orange-500 border border-white' : 'bg-orange-500 border border-white' : ''} text-black font-bold py-2 px-4 rounded-3xl absolute top-0 right-0 m-1 animate-pulse ${movie.status === 'new' || movie.badge === 'new' ? '-slow' : ''}`}>
  {movie.status || movie.badge}
</span>
</div>
                  <div className="mt-4">
                  <h2 className="text-2xl font-bold leading-normal mb-2" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>
  {movie.title} 
</h2> 


                    <a href={movie.link} className="text-xl font-bold leading-normal mb-2 text-yellow-500 " target="_blank" style={{ textShadow: "2px 2px 4px #000" }}>IMDb Rating : {movie.rating}</a> 
                        
                    <p className={`${styles.yearRelease} text-xl font-bold leading-normal mb-2 text-white`} style={{ textShadow: "5px 5px 2px #000" }}>Year Release : {movie.yearRelease}</p>
                    <p className={`${styles.genre} text-xl font-bold leading-normal mb-2 text-white`} style={{ textShadow: "5px 5px 2px #000" }}>Genre : {movie.genre}</p>
                  </div> 
                </div>
              ))}
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}
