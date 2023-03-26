import Head from 'next/head'
import React, { useEffect } from 'react'
import '@styles/styles.module.css'
import Translate from '@components/Translate';
import ShareThis from '@components/ShareThis';


export default function Home() {
 

const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};
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
      <div className="bg-gray-900 ">

      <Head>
        <title>Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free</title>
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
        <meta name="facebook-domain-verification" content="13auzwhblf4oo4jn5vl6gcmebugsqb" />
        <meta property="fb:app_id" content="602176271414602" />
	      <meta name="description" content="Uwatch4free™ - Watch Movies, TV-Series & Sports Live Online Free" />
	     <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta name="keywords" content="Uwatch4free,streaming,latest movies,online tv,latest free movies,watch latest movies online,latest full movies online" />
	     <meta property="og:locale" content="en_US" />   
       <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no"/>
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
       <meta name="google-site-verification" content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg" />
      
  <link rel="alternate" hreflang="en-us" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-gb" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-ca" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-au" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-se" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-fr" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-dk" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-no" 	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="x-default" 	href="https://uwatch4free.vercel.app/"/>

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest"></link>
  <link rel="canonical" href="https://uwatch4free.vercel.app/" />
  
      </Head>
    
     
<Translate />
      <main>
        <div>
        <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">

    <h1 className="mb-4 font-bold leading-none tracking-tight text-white my-2 text-center md:text-4xl dark:text-white"> Uwatch4free™ Watch Latest Movies</h1>

  
    <div class="flex container flex-wrap sm:-m-4 -mx-0 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Sports-2023/Sports">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/sports.webp' alt='TU JHOOTHI MAIN MAKKAAR - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SPORTS LIVE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Watch Movies, TV-Series & Sports Live Online Free.</h3>
                
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : SOCCER, CRICKET, TENNIS, GOLF, BASKETBALL, HOCKEY, BASEBALL, CYCLING, HANDBALL, HORSE RACING, ICE HOCKEY, VOLLEY BALL, BOXING, DARTS, RUGBY.     </div>
      <a href="../../Sports-2023/Sports">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/TheBlacklist-2023/TheBlacklist">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/the-blacklist-2023.webp' alt='LUCKY HANK S1 (2023) '  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE BLACKLIST S10 (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, who has eluded capture for decades.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
               8.0 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : CRIME, MYSTERY.
       </div>
       <a href="../../TvShows/TheBlacklist-2023/TheBlacklist">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/LuckyHank-2023/LuckyHank">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/lucky-hank.webp' alt='LUCKY HANK S1 (2023) '  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LUCKY HANK S1 (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">An English department chairman at an underfunded college, Professor Hank toes the line between midlife crisis & full-blown meltdown.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
               6.9 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : COMEDY, DRAMA.
       </div>
       <a href="../../TvShows/LuckyHank-2023/LuckyHank">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/Yellowjackets-2023/Yellowjackets">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/yellowjackets.webp' alt='YELLOWJACKETS S2 (2023) '  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">YELLOWJACKETS S2 (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">A wildly talented high school girl soccer team becomes the (un)lucky survivors of a plane crash deep in the Canadian wilderness.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
               7.9 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : HORROR, MYSTERY.
       </div>
       <a href="../../TvShows/Yellowjackets-2023/Yellowjackets">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/Succession-2023/Succession">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/succession.webp' alt='SUCCESSION S4 (2023)'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SUCCESSION S4 (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">The Roy family is known for controlling the biggest media and entertainment company in the world. when their father steps down from the company.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
               8.8 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ADVENTURE.
       </div>
       <a href="../../TvShows/Succession-2023/Succession">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/Ride-2023/Ride">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/ride.webp' alt='RIDE (2023)'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">RIDE (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">Nancy Travis, Beau Mirchoff, Tiera Skovbye, Tyler Jacob Moore. Follows the lives of the McMurrays as they struggle to keep their beloved ranch </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
               NA Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ADVENTURE.
       </div>
       <a href="../../TvShows/Ride-2023/Ride">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/NakedandAfraid-2023/NakedandAfraid">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/naked-and-afraid.webp' alt='NAKED AND AFRAID (2023)'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">NAKED AND AFRAID (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">It follows eight of the Naked and Afraid franchise's most battle-tested survivalists as they attempt to endure 21 days completely alone.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.0 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : REALITY TV, ADVENTURE.
       </div>
       <a href="../../TvShows/NakedandAfraid-2023/NakedandAfraid">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/TheEqualizer-2023/TheEqualizer">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/the-equalizer.webp' alt='THE EQUALIZER (2023)'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE EQUALIZER (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">An enigmatic figure who uses her extensive skills to help those with nowhere else to turn. Its a Action, Crime, Drama Series.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : ACTION , CRIME
       </div>
       <a href="../../TvShows/TheEqualizer-2023/TheEqualizer">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/AmericanIdol-2023/AmericanIdol">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/american-idol.webp' alt='AMERIICAN IDOL (2023)'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AMERIICAN IDOL (2023) </h2>
          <h3 className="leading-relaxed text-white text-base">Twelve American finalists (six men and six women) compete in a singing contest. Its a Game Show, Reality Tv Show, Music.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.2 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : REALITY TV, MUSIC.
       </div>
       <a href="../../TvShows/AmericanIdol-2023/AmericanIdol">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../TvShows/Lacasadelosfamosos-2023/Lacasadelosfamosos">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/La-casa-de-los-amosos.webp' alt='LA CASA DE LOS FAMOSOS - Season 3, Episode 59 (2023)'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LA CASA DE LOS FAMOSOS - S3, EP 59 </h2>
          <h3 className="leading-relaxed text-white text-base">Celebrities gathered and cut off from the outside world are recorded by cameras 24 hours a day, as they compete with one goal: to win.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.7 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : REALITY TV, TV SHOW.
       </div>
       <a href="../../TvShows/Lacasadelosfamosos-2023/Lacasadelosfamosos">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/ShazamFuryOfTheGods-2023/ShazamFuryOfTheGods">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/shazam-fury-of-the-gods-2023.webp' alt='SHAZAM FURY OF THE GODS - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHAZAM FURY OF THE GODS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The film continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!" is transformed into his adult Super.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.6 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : ACTION, ADVENTURE
       </div>
       <a href="../../Hollywood/ShazamFuryOfTheGods-2023/ShazamFuryOfTheGods">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MrsChatterjeeVsNorway-2023/MrsChatterjeeVsNorway">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/mrs-chatterjee-vs-norway-2023.webp' alt='HAPPY FAMILY CONDITION APPLY - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MRS CHATTERJEE vs NORWAY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An immigrant Indian mother's battle against the Norwegian foster care system and local legal machinery to win back the custody of her children.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : BIOGRAPHY, DRAMA
       </div>
       <a href="../../Bollywood/MrsChatterjeeVsNorway-2023/MrsChatterjeeVsNorway">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/HappyFamilyConditionsApply-2023/HappyFamilyConditionsApply">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/happy-family-conditions-apply-2023.webp' alt='HAPPY FAMILY CONDITION APPLY - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HAPPY FAMILY CONDITION APPLY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The Dholakia family's household have four generations living under one roof and navigate the many ups and downs of their lives together.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, COMEDY
       </div>
       <a href="../../Bollywood/HappyFamilyConditionsApply-2023/HappyFamilyConditionsApply">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Kabzaa-2023/Kabzaa">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/kabzaa-2023.webp' alt='AGILAN - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KABZAA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In 1947 a Gandhi follower and a freedom fighter were brutally attacked. The freedom fighter son gets trapped in the mafia world.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.8 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : ACTION, CRIME
       </div>
       <a href="../../Bollywood/Kabzaa-2023/Kabzaa">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Agilan-2023/Agilan">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/agilan-2023.webp' alt='AGILAN - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AGILAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">When a crane operator starts controlling illegal trades at the harbor, he winds up clashing with another gangster.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ACTION
       </div>
       <a href="../../Bollywood/Agilan-2023/Agilan">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/AngerTales-2023/AngerTales">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/anger-tales-2023.webp' alt='ANGER TAIES - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">ANGER TAIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A bald-headed young male, who suffers from low self-esteem, is constantly mocked. He is written off by people around him.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, FAMILY
       </div>
       <a href="../../Bollywood/AngerTales-2023/AngerTales">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/65-2023/SixtyFive">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/65 2023.webp' alt='65 - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">65 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An astronaut crash lands on a mysterious planet only to discover he's not alone. 65 Is a Action, Adventure, Drama Movie.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.6 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ACTION
       </div>
       <a href="../../Bollywood/65-2023/SixtyFive">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Christy-2023/Christy">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/christy-2023.webp' alt='CHRISTY - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHRISTY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Roy, a village boy who's a failure at studies, joins Christy's tuition. They become good friends, when Christy gets a job abroad, Roy's life changes.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.8 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ROMANCE
       </div>
       <a href="../../Bollywood/Christy-2023/Christy">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/SexLife-2023/SexLife">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/sex-life-2023.webp' alt='POP KAUN - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SEX LIFE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Billie steps out of her comfort zone for a night of fun. Sasha rekindles an old flame, and Cooper ignites a new passion.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.0 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ROMANCE
       </div>
       <a href="../../Bollywood/SexLife-2023/SexLife">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/RunBabyRun-2023/RunBabyRun">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/run-baby-run-2023.webp' alt='RUN BABY RUN - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">RUN BABY RUN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Sathya faces a race against time after becoming involved in a complex murder investigation. Run Baby Run is a Action Thriller movie.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : ACTION, THRILLER
       </div>
       <a href="../../Bollywood/RunBabyRun-2023/RunBabyRun">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/PopKaun-2023/PopKaun">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/pop-kaun-2023.webp' alt='POP KAUN - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">POP KAUN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A young boy who decides to find his real father. However, the journey turns into a rollercoaster ride that upends his life.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, COMEDY
       </div>
       <a href="../../Bollywood/PopKaun-2023/PopKaun">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/OutOfExile-2023/OutOfExile">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/out-of-exile-2023.webp' alt='OUT OF EXILE - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">OUT OF EXILE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A recently paroled thief tries to balance his life and mend a troubled family as a determined FBI agent hunts down him and his crew.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.9 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : CRIME, THRILLER
       </div>
       <a href="../../Hollywood/OutOfExile-2023/OutOfExile">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheSiege-2023/TheSiege">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/the-siege-2023.webp' alt='THE SIEGE - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE SIEGE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Walker is compromised and sent to a Reassignment Center, where he falls in with Elda and Juliet to survive.Its A Action Pack Movie</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.2 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : ACTION, THRILLER
       </div>
       <a href="../../Hollywood/TheSiege-2023/TheSiege">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Supercell-2023/Supercell">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/supercell-2023.webp' alt='SUPERCELL - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SUPERCELL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A teenage boy runs away to follow his fathers footsteps, legendary storm chaser Bill Brody. Supercell is a Action Adventure Movie.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ROMANCE
       </div>
       <a href="../../Hollywood/Supercell-2023/Supercell">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheMatchStickFlame-2023/TheMatchStickFlame">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/the-match-stick-flame-2023.webp' alt='THE MATCH-STICK FLAME 2 LUNADA BAY - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE MATCH-STICK FLAME 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">CA after hiding out for a year due to his father Match-Stick's death and was hunted down and killed by the Triad leader Mr. Tang. Dalton</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.2 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : CRIME, THRILLER
       </div>
       <a href="../../Hollywood/TheMatchStickFlame-2023/TheMatchStickFlame">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/SecretaryPart1-2023/SecretaryPart1">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/secretary-2023.webp' alt='SECRETARY PART 1 - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SECRETARY PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">he guilty pleasure of Ajay and Vinod consist of Vinod every night, narrating a new sexual encounter between his boss and her secretary. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
                <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/SecretaryPart1-2023/SecretaryPart1">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TuJhoothiMainMakkaar-2023/TuJhoothiMainMakkaar">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/tu-jhoothi-main-makkaar-2023.webp' alt='TU JHOOTHI MAIN MAKKAAR - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TU JHOOTHI MAIN MAKKAAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Madness ensues when a 'player' in the world of romantic relationships finds a girl who's a worthy opponent, that believes love is a battle of wits.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE : DRAMA, ROMANCE
       </div>
       <a href="../../Bollywood/TuJhoothiMainMakkaar-2023/TuJhoothiMainMakkaar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
    
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
      <a href="../../Bollywood/SatarchaSalman-2023/SatarchaSalman">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/satarcha-salman-2023.webp' alt='SATARCHA SALMAN - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SATARCHA SALMAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Arun always wanted to be an actor but could never fulfill his dream for which the village ridiculed him. Angry about his failure.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.2 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, FAMILY
       </div>
       <a href="../../Bollywood/SatarchaSalman-2023/SatarchaSalman">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/VictoriaEkRahasya-2023/VictoriaEkRahasya">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/victoria-ek-rahasya-2023.webp'  alt='VICTORIA EK RAHASYA - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VICTORIA EK RAHASYA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A couple arrives at Hotel Victoria and are greeted by the creepy owner who is the only occupant of the sprawling property. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.8 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, THRILLER
       </div>
       <a href="../../Bollywood/VictoriaEkRahasya-2023/VictoriaEkRahasya">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheLegend-2023/TheLegend">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-legend-2023.webp' alt='THE LEGEND - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LEGEND - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Saravanan, a foreign-educated researcher returns to his native place in India. His family runs colleges and hospitals.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/TheLegend-2023/TheLegend">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Raundal-2023/Raundal">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/raundal-2023.webp' alt='RAUNDAL - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">RAUNDAL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of a farmer from Maharashtra who knows to how to grow agricultural produce but finds it difficult to sell it.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Raundal-2023/Raundal">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/LoveAtFirstKiss-2023/LoveAtFirstKiss">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/love-at-first-kiss-2023.webp' alt='LOVE AT FIRST KISS - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LOVE AT FIRST KISS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follow the story of a 16-year-old who finds he can see the whole future of a romantic relationship when he kisses a girl for the first time.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.8 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, ROMANCE
       </div>
       <a href="../../Bollywood/LoveAtFirstKiss-2023/LoveAtFirstKiss">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/InCar-2023/InCar">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/incar-2023.webp' alt='INCAR - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">INCAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A kidnapped girl's terrifying journey of survival.InCar is a Drama Thriller Movie.Directed by Harsh Warrdhan.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/InCar-2023/InCar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Gulmohar-2023/Gulmohar">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/gulmohar-2023.webp' alt='GULMOHAR - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">GULMOHAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows the final four days of the Batra family living in their 31-year-old family home as they move to a new city.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Gulmohar-2023/Gulmohar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/LittleDixie-2023/LittleDixie" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/little-dixie-2023.webp' alt='LITTLE DIXIE - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LITTLE DIXIE - 2023</h2>
            <p className="leading-relaxed text-white text-base">Doc facilitates a fragile truce between the Governor and Cartel, trading prosecutorial leniency for finance. With no more truce.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.9 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
          
       <a href="../../Hollywood/LittleDixie-2023/LittleDixie" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>

        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Creed3-2023/Creed3" >
 
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/creed-III-2023.webp' alt='CREED III - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CREED III - 2023</h2>
            <p className="leading-relaxed text-white text-base">Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, just a fight.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.3 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :SPORTS, THRILLER
       </div>
          
       <a href="../../Hollywood/Creed3-2023/Creed3" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>

        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Ambush-2023/Ambush" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/ambush-2023.webp' alt='AMBUSH - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AMBUSH - 2023</h2>
            <p className="leading-relaxed text-white text-base">A group of young elite commandos, led by Captain Drummond are tasked with collecting highly classified information that can change the war.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.4 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, WAR
       </div>
          
       <a href="../../Hollywood/Ambush-2023/Ambush" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/MohanChabhiwalaP1-2023/MohanChabhiwalaP1">
     
        <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/mohan-chabhiwala-p1-2023.webp' alt='MOHAN CHABHIWALA P1 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">MOHAN CHABHIWALA P1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Mohan Chabhiwala is Ullu Web Series The plot revolves around a man who is a street vendor. He gets attracted to multiple women tries his luck.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/MohanChabhiwalaP1-2023/MohanChabhiwalaP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Nasha-2023/Nasha">
     
        <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/nasha-2023.webp' alt='NASHA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">NASHA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Nasha is an Indian web series that explores adult romance and love through a compelling storyline, sensuality, and taboo relationships.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Nasha-2023/Nasha">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/JungleCottage-2023/JungleCottage">
     
        <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/jungle-cottage-2023.webp' alt='JUNGLE COTTAGE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">JUNGLE COTTAGE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Jungle Cottage is a Wow Originals web series. Hindi Hot Web Series, Free Hindi Hot Web Series, Hot Hindi Sex Video, Hot Hindi Web Series.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/JungleCottage-2023/JungleCottage">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Selfiee-2023/Selfiee">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/selfiee-2023.webp' alt='SELFIEE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SELFIEE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">21-year old Vicky is diagnosed with mental health issues and starts having illusory images which he needs to break out his situation.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Selfiee-2023/Selfiee">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "> Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/OuterBanks-2023/OuterBanks">
     <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"   src='/outer-banks-2023.webp' alt='OUTER BANKS - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">OUTER BANKS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a treasure linked to his father's disappearance.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/OuterBanks-2023/OuterBanks">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Triptych-2023/Triptych">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"   src='/Triptych-2023.webp' alt='TRIPTYCH - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TRIPTYCH - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Triada Title Announcement (Latin America Market)
It follows Becca, a forensics expert who, when investigating a murder.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, MYSTERY
       </div>
       <a href="../../Bollywood/Triptych-2023/Triptych">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/WeHaveAGhost-2023/WeHaveAGhost" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/we-have-a-ghost-2023.webp' alt='WE HAVE A GHOST - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WE HAVE A GHOST - 2023</h2>
            <p className="leading-relaxed text-white text-base">A ghost named Ernest haunting their new home turns Kevin's family into overnight social sensations. But when Kevin & Ernest investigate.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.2 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, ADVENTURE
       </div>
          
       <a href="../../Hollywood/WeHaveAGhost-2023/WeHaveAGhost" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
       
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheBlacklist-2023/TheBlacklistP1" >
         

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-blacklist-2023.webp' alt='THE BLACKLIST SEASON 1 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE BLACKLIST SEASON 1 - 2023</h2>
            <p className="leading-relaxed text-white text-base">A new FBI profiler, Elizabeth, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.0 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, MYSTERY
       </div>
          
       <a href="../../Hollywood/TheBlacklist-2023/TheBlacklistP1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/LutherTheFallenSun-2023/LutherTheFallenSun" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/luther-the-fallen-sun-2023.webp' alt='LUTHER THE FALLEN SUN - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LUTHER THE FALLEN SUN - 2023</h2>
            <p className="leading-relaxed text-white text-base">Brilliant but disgraced detective John Luther breaks out of prison to hunt down a sadistic serial killer who is terrorising London.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.1 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
          
       <a href="../../Hollywood/LutherTheFallenSun-2023/LutherTheFallenSun" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/GandiIBaatS7-2023/GandiIBaatS7">
     
          <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/gandii-baat-s7-2023.webp' alt='GANDII BAAT - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">GANDII BAAT S7 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/GandiIBaatS7-2023/GandiIBaatS7">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/love-guru-s2-p2-2023.webp' alt='LOVE GURU S2 (PART 2) - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LOVE GURU S2 (PART 2) - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/KhidkiP1-2023/KhidkiP1">
     
        <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/khidki-p1-2023.webp' alt='KHIDKI PART 1 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">KHIDKI PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of the Khidki Part 1 web series revolves around the life of a young girl who enjoys living her life to the fullest. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/KhidkiP1-2023/KhidkiP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Lagaslas-2023/Lagaslas">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/lagaslas-2023.webp' alt='LAGASLAS - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LAGASLAS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A young man named Edmar falls madly in love with Karisma, a barrio lass. Will he still love her if he finds out Karisma's deepest darkest secret?</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Lagaslas-2023/Lagaslas">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Veronica-2023/Veronica">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/veronica-2030.webp' alt='Veronica - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">VERONICA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Built for pleasure, Veronica 2030 is a love android from the future - but there's a problem with the programming...</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.7 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Veronica-2023/Veronica">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/IruDhuruvam-2023/IruDhuruvam">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/iru-dhuruvam-2023.webp' alt='IRU DHURUVAM - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IRU DHURUVAM - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Six months after killing Sekar, Viktor has been off-duty to take care of Gayathri, who is rehabilitating. SI Kishore and his superior.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/IruDhuruvam-2023/IruDhuruvam">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/DieHart-2023/DieHart">
    
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/die-hart-2023.webp' alt='DIE HART - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DIE HART - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows a fictionalized version of Kevin Hart, as he tries to become an action movie star. He attends a school run by Ron Wilcox.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.6 Out of 10</h3>
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/DieHart-2023/DieHart">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Hunt-2023/Hunt">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/hunt-2023.webp' alt='HUNT - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HUNT - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An assistant police commissioner must tackle his inner demons and confront external enemies who are trying to keep him from solving a mystery.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME 
       </div>
       <a href="../../Bollywood/Hunt-2023/Hunt">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheHeadOfLoaquinmMurrieta-2023/TheHeadOfLoaquinmMurrieta" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-head-of-joaquin-murrieta-2023.webp' alt='THE HEAD OF JOAQUIN MURRIETA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE HEAD OF JOAQUIN MURRIETA - 2023</h2>
            <p className="leading-relaxed text-white text-base">Follows the adventures of Joaquín Murrieta and Carrillo as they unite to face a common enemy. The Head of Joaquin Murrieta is Westen Movie.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/TheHeadOfLoaquinmMurrieta-2023/TheHeadOfLoaquinmMurrieta" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/12DesparateHours-2023/DesparateHours" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/12-desperate-hours-2023.webp' alt='12 DESPERATE HOURS' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">12 DESPERATE HOURS - 2023</h2>
            <p className="leading-relaxed text-white text-base">It centers on Val who finds herself and her young children held hostage, when he forces his way into her house after committing murder that day.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.5 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, THRILLER
       </div>
          
       <a href="../../Hollywood/12DesparateHours-2023/DesparateHours" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
           
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/HoJaMukat-2023/HoJaMukat">
 
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/ho-ja-mukat-2023.webp' alt='HO JA MUKAT - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HO JA MUKAT - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">21-year old Vicky is diagnosed with mental health issues and starts having illusory images which he needs to break out his situation.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/HoJaMukat-2023/HoJaMukat">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Shehzada-2023/Shehzada">
  
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/shehzada-2023.webp' alt='SHEHZADA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHEHZADA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Bantu is hated by his father Valmiki since he was a toddler. Samara, his boss show him affection & love until he discovers the Jindals are his parents.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Shehzada-2023/Shehzada">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheNightManager-2023/TheNightManager">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-night-manager-2023.webp' alt='THE NIGHT MANAGER - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE NIGHT MANAGER - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows Jonathan, an ex-soldier, who must infiltrate an arms dealer's inner circle to avenge the death of his girlfriend.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/TheNightManager-2023/TheNightManager">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Vaathi-2023/Vaathi">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/vaathi-2023.webp' alt='VAATHI - 2023'  width={400} height={300} loading="lazy"/>
</div></a>

        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VAATHI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The life of a young man and his struggles against the privatization of education.Vaathi is a Action Dram Movies.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Vaathi-2023/Vaathi">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MrLocal-2023/MrLocal">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/mr-local-2023.webp' alt='MR.LOCAL - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MR.LOCAL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The film revolves around a carefree "local" guy, Manohar, who leads a happy life with his mother and sister. When he picks up frequent fights </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/MrLocal-2023/MrLocal">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheCheckPost-2023/TheCheckPost">
  
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"   src='/the-check-post-2023.webp' alt='THE CHECK POST - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE CHECK POST - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Check Post 1995 is a Telugu movie featuring Master Mahendran and Shagna in lead roles. The Check Post Ia remake of Telugu Movie.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/TheCheckPost-2023/TheCheckPost">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Lost-2023/Lost">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"   src='/lost-2023.webp' alt='LOST - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LOST - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An emotional thriller that represents a higher quest, a search for lost values of empathy and integrity. Lost is a Dram Movies.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Lost-2023/Lost">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MinusOne-2023/MinusOne">
   
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/minus-one-2023.webp' alt='MINUS ONE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MINUS ONE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Minus One - New Chapter is an ode to a relationship that spans several phases of life. Through the relationship of Varun and Ria.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>

       <a href="../../Bollywood/MinusOne-2023/MinusOne">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Amigos-2023/Amigos">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/amigos-2023.webp' alt='AMIGOS - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AMIGOS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Plot revolves around the 2 Doppelgangers, Siddharth an entrepreneur and Manjunath a software engineer of the Gangster Michael.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Amigos-2023/Amigos">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Christopher-2023/Christopher">
 
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/christopher-2023.webp' alt='CHRISTOPHER - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHRISTOPHER - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A maverick cop is forced to work outside the limits of law.The story weaves across the past & present while revealing the motives that shape his actions.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Christopher-2023/Christopher">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Dishkiyaoon-2023/Dishkiyaoon">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/dishkiyaoon-2023.webp' alt='DISHKIYAOON - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DISHKIYAOON - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Dishkiyaoon is a story of ambition, revenge and deception. It chronicles the life of Vicky Kartoos as he makes way top in the world of gangsters.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                NA Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Bollywood/Dishkiyaoon-2023/Dishkiyaoon">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Farzi-2023/Farzi">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/farzi-2023.webp' alt='FARZI - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">FARZI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An artist who gets pulled into the murky high stakes of a con job and a fiery task force officer on the mission to rid the country in a fast-paced.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Farzi-2023/Farzi">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/JaanbaazHindustanKe-2023/JaanbaazHindustanKe">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/jaanbaaz-hindustan-ke-2023.webp' alt='JAANBAAZ HINDUSTAN KE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">JAANBAAZ HINDUSTAN KE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A single mother and celebrated IPS officer, Kavya Iyer's bravery and psychological strength are tested when she becomes the lead investigator.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/JaanbaazHindustanKe-2023/JaanbaazHindustanKe">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/JagguAniJulite-2023/JagguAniJulite">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/jaggu-ani-juliet-2023.webp' alt='JAGGU ANI JULIET - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">JAGGU ANI JULIET - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Jaggu and Juliet is a contemporary, fun filled laugh riot that revolves around people, love, travel, fun and discovering a soul mate.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.7 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ROMANCE, DRAMA
       </div>
       <a href="../../Bollywood/JagguAniJulite-2023/JagguAniJulite">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Kranti-2023/Kranti">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/kranti-2023.webp' alt='KRANTI - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KRANTI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Protecting government schools and the hero is business man when he knows there family in trubel the was come and slove this case.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Kranti-2023/Kranti">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Michale-2023/Michale">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/michael-2023.webp' alt='MICHAEL - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MICHAEL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The gang fighting over places. A youngster decides to gain control of the area. Can he complete his dream of ruling over the place?</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Michale-2023/Michale">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MrTharak-2023/MrTharak">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/mr-tharak-2023.webp' alt='MR THARAK - 2023'  width={400} height={300} loading="lazy"/>
</div></a>

        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MR THARAK - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A scientist was doing research about the parallel universe. While testing it, the heavy power supply the lab blasted which led to consequences.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :FAMILY, MYSTERY
       </div>
       <a href="../../Bollywood/MrTharak-2023/MrTharak">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/RaftaRafta-2023/RaftaRafta">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/rafta-rafta-2023.webp' alt='RAFTA RAFTA - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">RAFTA RAFTA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A modern young couple finds themselves slowly learning about each other as they learn more about themselves.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ROMANCE, DRAMA
       </div>
       <a href="../../Bollywood/RaftaRafta-2023/RaftaRafta">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/ShivShastriBalboa-2023/ShivShastriBalboa">
     

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/shiv-shastri-balboa-2023.webp' alt='SHIV SHASTRI BALBOA - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHIV SHASTRI BALBOA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Shiv Shastri a retiree from India and a big Rocky movie fan moves to USA and ends up on an road trip through the American heartland.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Bollywood/ShivShastriBalboa-2023/ShivShastriBalboa">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/ZindagiShatranjHai-2023/ZindagiShatranjHai">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/zindagi-shatranj-hai-2023.webp' alt='ZINDAGI SHATRANJ HAI - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">ZINDAGI SHATRANJ HAI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A men whose wife not ready to accept him has a husband despite of the fact that everyone else was telling that he is her husband.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/ZindagiShatranjHai-2023/ZindagiShatranjHai">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MissionMajnu-2023/MissionMajnu">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/mission-maju-2023.webp' alt='MASSION MAJNU - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MASSION MAJNU - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/MassionMajnu-2023/MissionMajnu">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Pathaan-2023/Pathaan">
    
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"   src='/pathan-2023.webp' alt='PATHAAN - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">PATHAAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Pathaan is an Indian spy Story. An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.1 Out of 10</h3>
                 
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Bollywood/Pathaan-2023/Pathaan">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheY-2023/TheY">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-y-2023.webp' alt='THE Y - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">THE Y - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The Female Protagonist is a Mute. After her marriage the couple enters a new chapter of their life but face dilemma which they least expect. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :HORROR, THRILLER
       </div>
       <a href="../../Bollywood/TheY-2023/TheY">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TaazaKhabar-2023/TaazaKhabar">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/taaza-khabar-2023.webp' alt='TAAZA KHABAR - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">TAAZA KHABAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A Sanitation worker, how he stumbles upon magical powers which leads to a riveting new ride for the man, and how it stirs his humble life.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/TaazaKhabar-2023/TaazaKhabar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Suki-2023/Suki">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/suki-2023.webp' alt='SUKI - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">SUKI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Suki-2023/Suki">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/EroticaManila-2023/EroticaManila">

         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/erotica-manila-2023.webp' alt='EROTICA MANILA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">EROTICA MANILA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A man enters an adult film theatre, a writer gets a naughty massage, a porn star satisfies an intern, and a couple kill a man while making love.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/EroticaManila-2023/EroticaManila">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/MissBriganaza-2023/MissBriganaza">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/miss-briganaza-2023.webp' alt='WATCHMAN - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">MISS BRIGANAZA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Miss Briganaza (2023) is Hot Adult WoW Web series.Miss Briganaza (2023) stream on digital streaming platforms Wow. Hot Adult web Series.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/MissBriganaza-2023/MissBriganaza">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Watchman-2023/WatchmanP1">
  
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/watchman-part1-2023.webp' alt='WATCHMAN - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">WATCHMAN SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The plot revolves around new adventures and fantasies of flat security. Things take a new turn as events unfold around them.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Watchman-2023/WatchmanP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LaQuerida-2023/LaQuerida">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/la-querida-2023.webp' alt='LA QUERIDA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LA QUERIDA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A young couple's romance is cut short when the man learns that his woman is married. Hot Adult web Series on Viva Max.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LaQuerida-2023/LaQuerida">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LadyDoctor-2023/LadyDoctor">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/lady-doctor-2023.webp' alt='LADY DOCTOR - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LADY DOCTOR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The plot revolves around a female doctor. She gives special treatment to all her patients. Hot Adult web Series on Pime Shot.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LadyDoctor-2023/LadyDoctor">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Kaand-2023/KaandP1">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/kaand-2023.webp' alt='KAAD - 2023'   width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">KAAND SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Kaand web series very soon going to stream on digital streaming platforms Dreams Films app. Hot Adult web Series on Dreams Films.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Kaand-2023/KaandP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Ishqiya-2023/Ishqiya">
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/ishqiya-2023.webp' alt='ISHQIYA - 2023'   width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">ISHQIYA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Ishqiya 2023 Raven Movies Hindi Sex Web Series Raven Movies app is providing erotic content for the youth audience of India. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Ishqiya-2023/Ishqiya">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/FarebiYarr-2023/FarebiYarrP1">
    
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/farebi-yaar-part-1-2023.webp' alt='FAREBI YARR - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">FAREBI YARR SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> ULLU Originals Farebi Yaar Wife runs away with husband's best friend in this erotic web series Hot Adult web Series on ULLU Originals.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/FarebiYarr-2023/FarebiYarrP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Babuji-2023/BabujiP1">
     
         <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/babuJi-2023.webp' alt='BABUJI - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">BABUJI SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A man has two sons and their two wives. One day, babu ji gets hurt and becomes sick. And unable to see anything.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Babuji-2023/BabujiP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Pamasahe-2023/Pamasahe">
   
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/pamasahe-2022.webp' alt='PAMASAHE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">PAMASAHE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A penniless mother, with her infant child, takes on a journey by land and sea to find her husband in Manila. But this trip won't be free for she has to use her.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Pamasahe-2023/Pamasahe">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/ILoveyou-2023/ILoveyou">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/i-love-you-P2-2023.webp' alt='I LOVE YOU PART 2 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">I LOVE YOU PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the youngster roaming around the find his true love. He mts another lady and it inches close to his fantasy.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/ILoveyou-2023/ILoveyou">
      <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/PlanB-2023/PlanB">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/plan-b-2023.webp' alt='PLAN B 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">PLAN B 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Things take a turn when the woman is seen seducing another man, and the duo are seen mixing something into Kamini’s drink. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/PlanB-2023/PlanB">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LustDaries-2023/LustDaries">
    
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/lust-diaries-pehla-pyar-2023.webp' alt='LUST DARIES... - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LUST DARIES... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Lust Diaries Pehla Pyar 2023 WoW Hindi Shorts Web Series.Adult and Hot Movie Watch it Now Lust Diaries Pehla Pyar - 2023 </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LustDaries-2023/LustDaries">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Better-2023/BetterP1" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/better-2023.webp' alt='BETTER - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">BETTER - 2023</h2>
            <p className="leading-relaxed text-white text-base">A corrupt police detective has a painful moral awakening and decides to put right 20 years of wrongdoing. Better is a Action Adentue Series</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.5 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/Better-2023/BetterP1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheWeapon-2023/TheWeapon" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-weapon-2023.webp' alt='THE WEAPON - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE WEAPON - 2023</h2>
            <p className="leading-relaxed text-white text-base">Dallas is a one-man killing machine on a mysterious rampage. His attacks on biker gangs and holding Dallas's girlfriend hostage.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.5 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/TheWeapon-2023/TheWeapon" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/CarnivalRow-2023/CarnivalRowP1" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/carnival-row-2023.webp' alt='CARNIVAL ROW - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CARNIVAL ROW - 2023</h2>
            <p className="leading-relaxed text-white text-base">A human detective and a fairy rekindle a dangerous affair in a Victorian fantasy world, String of murders reveals an unimaginable monster.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/CarnivalRow-2023/CarnivalRowP1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/AntMan-2023/AntMan" >
 
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/ant-Man-and-the-wasp-2023.webp' alt='ANT-MAN AND THE Wasp - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">ANT-MAN AND THE Wasp... - 2023</h2>
            <p className="leading-relaxed text-white text-base">Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.4 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/AntMan-2023/AntMan" >
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheArk-2023/TheArkP1" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-ark-2023.webp' alt='THE ARK - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE ARK - 2023</h2>
            <p className="leading-relaxed text-white text-base">Follows the remaining crew of a spacecraft known as Ark One, who must become the best versions of themselves to stay on course.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.9 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/TheArk-2023/TheArkP1" >
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/MayfairWitches-2023/MayfairWitchesP1" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/mayfair-witches-2023.webp' alt='MAYFAIR WITCHES - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MAYFAIR WITCHES - 2023</h2>
            <p className="leading-relaxed text-white text-base">Follows a neurosurgeon who discovers she is the unlikely heir to a family of witches. She must contend with a sinister presence that has haunted.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/MayfairWitches-2023/MayfairWitchesP1" >
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/InFormTheCold-2023/InFormTheColdP1" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/in-from-the-cold-2023.webp' alt='IN FORM THE COLD - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IN FORM THE COLD - 2023</h2>
            <p className="leading-relaxed text-white text-base">Exposed as an ex-Russian spy, an American single mom must juggle family life and unique shape-shifting skills in a battle against an insidious enemy.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/InFormTheCold-2023/InFormTheColdP1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
             
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/BlackPantherWaka-2023/BlackPantherWaka" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/black-panther-wakanda-forever-2022.webp' alt='BLACK PANTHER WAKANDA FOREVER - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">BLACK PANTHER WAKANDA FOREVER - 2023</h2>
            <p className="leading-relaxed text-white text-base">The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/BlackPantherWaka-2023/BlackPantherWaka"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/ExtraOrdinary-2023/ExtraOrdinaryP1" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/extraordinary-2023.webp' alt='EXTRAORDINARY - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">EXTRAORDINARY - 2023</h2>
            <p className="leading-relaxed text-white text-base">Jen, a young, self-aware woman who lives in a world where everyone has a superpower except her.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/ExtraOrdinary-2023/ExtraOrdinaryP1"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Fear-2023/Fear" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/fear-2023.webp' alt='FEAR - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">FEAR - 2023</h2>
            <p className="leading-relaxed text-white text-base">A much needed getaway and a celebration weekend turns into a nightmare due to the contagious airborne threat.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.5 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, THRILLER
       </div>
          
       <a href="../../Hollywood/Fear-2023/Fear"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Imani-2023/Imani" >
    
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/imani-2023.webp' alt='IMANI - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IMANI - 2023</h2>
            <p className="leading-relaxed text-white text-base">Faith has it all as a mother and wife, but a year after what she believes was a car accident, Faith discovers that she is an Army special ops lieutenant.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.1 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
          
       <a href="../../Hollywood/Imani-2023/Imani"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Kaleidoscope-2023/KaleidoscopeP1" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/kaleidoscope-2022.webp' alt='KALEIDOSCOPE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KALEIDOSCOPE - 2023</h2>
            <p className="leading-relaxed text-white text-base">Centered around the largest heist ever attempted, the vengeance and betrayals that surround it. Kaleidoscope is a Eight Parts Episode.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, ACTION
       </div>
          
       <a href="../../Hollywood/Kaleidoscope-2023/KaleidoscopeP1"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/KnockAtTheCabin-2023/KnockAtTheCabin" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/knock-at-the-cabin-2023.webp' alt='KNOCK AT THE CABIN - 2023'width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KNOCK AT THE CABIN - 2023</h2>
            <p className="leading-relaxed text-white text-base">While vacationing, a girl and her parents are taken hostage by armed strangers who demand that the family make a choice to avert the apocalypse.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, MYSTERY
       </div>
          
       <a href="../../Hollywood/KnockAtTheCabin-2023/KnockAtTheCabin"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/LockwoodAndCo-2023/LockwoodAndCoP1" >
     
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/lockwood-and-co-2023.webp' alt='LOCKWOOD AND CO - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LOCKWOOD AND CO - 2023</h2>
            <p className="leading-relaxed text-white text-base">A tiny startup, run by two teenage boys and a newly arrived, supremely psychically gifted girl, a renegade trio destined to unravel a mystery of history.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
          
       <a href="../../Hollywood/LockwoodAndCo-2023/LockwoodAndCoP1"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/NightTrain-2023/NightTrain" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/night-train-2023.webp' alt='NIGHT TRAIN - 2023'   width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">NIGHT TRAIN - 2023</h2>
            <p className="leading-relaxed text-white text-base">A single mom struggling to make ends meet as a Hollywood teamster evades capture by a ruthless FBI Agent.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.5 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
          
       <a href="../../Hollywood/NightTrain-2023/NightTrain"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/PockerFace-2023/PockerFace" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/poker-face-2022.webp' alt='POKER FACE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">POKER FACE - 2023</h2>
            <p className="leading-relaxed text-white text-base">A tech billionaire hosts a high-stakes poker game between friends, but the evening takes a turn when long-held secrets are revealed.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
          
       <a href="../../Hollywood/PockerFace-2023/PockerFace"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TeenWolfTheMovie-2023/TeenWolfTheMovie" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/teen-wolf-the-movie-2023.webp' alt='TEEN WOLF THE MOVIE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TEEN WOLF THE MOVIE - 2023</h2>
            <p className="leading-relaxed text-white text-base">A terrifying evil has emerged. The wolves howl once again, but only a Werewolf like Scott McCall, can gather both new allies.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.6 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, FANTASY
       </div>
          
       <a href="../../Hollywood/TeenWolfTheMovie-2023/TeenWolfTheMovie"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/The3rdGuest-2023/The3rdGuest" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-3rd-guest-2023.webp' alt='THE 3RD GUEST - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE 3RD GUEST - 2023</h2>
            <p className="leading-relaxed text-white text-base">A husband and wife ghost-hunting team, still mourning the loss of their daughter, encounter her in their latest assignment.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                2.4 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, THRILLER
       </div>
          
       <a href="../../Hollywood/The3rdGuest-2023/The3rdGuest"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheMummyResurrection-2023/TheMummyResurrection" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-mummy-resurrection-2022.webp' alt='THE MUMMY RESURRECTION - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE MUMMY RESURRECTION - 2023</h2>
            <p className="leading-relaxed text-white text-base">When an infamous "cursed" Egyptian sarcophagus falls into the hands of unscrupulous huckster Everett Randolph.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.1 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, THRILLER
       </div>
          
       <a href="../../Hollywood/TheMummyResurrection-2023/TheMummyResurrection"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheRig-2023/TheRigP1" >
     
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-rig-2023.webp' alt='THE RIG - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE RIG - 2023</h2>
            <p className="leading-relaxed text-white text-base">A group of workers on a remote Scottish oil rig are due to return to the mainland when a mysterious fog enshrouds them and supernatural forces take hold.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.8 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, SCI-FI
       </div>
          
       <a href="../../Hollywood/TheRig-2023/TheRigP1"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TulsaKing-2023/TulsaKingP1" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/tulsa-king-2023.webp' alt='TULSA KING - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TULSA KING - 2023</h2>
            <p className="leading-relaxed text-white text-base">Following his release from prison, Mafia capo Dwight "The General" Manfredi is exiled to Tulsa, Oklahoma, where he builds a new criminal empire.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
          
       <a href="../../Hollywood/TulsaKing-2023/TulsaKingP1"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/WakingKarma-2023/WakingKarma" >

 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/waking-karma-2023.webp' alt='WAKING KARMA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WAKING KARMA - 2023</h2>
            <p className="leading-relaxed text-white text-base">When high school senior Karma's estranged cult leader father traps her and her mother in a remote forest compound.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.3 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, THRILLER
       </div>
          
       <a href="../../Hollywood/WakingKarma-2023/WakingKarma"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Transfusion-2023/Transfusion" >
         
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/transfusion-2023.webp' alt='TRANSFUSION - 2023' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TRANSFUSION - 2023</h2>
            <p className="leading-relaxed text-white text-base">A former Special Forces operative thrust into the criminal underworld being taken from him.Sam Worthington is a good actor.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, THRILLER
       </div>
          
       <a href="../../Hollywood/Transfusion-2023/Transfusion"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Plane-2023/Plane">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/plane-2023.webp' alt='PLANE - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font mb-3 font-bold md:text-lg ">PLANE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Palne is a action thriller Movies in which A pilot finds himself caught in a war zone commercial aircraft during a terrible storm</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Hollywood/Plane-2023/Plane">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Narvik-2023/Narvik">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/narvik-2022.webp' alt='NARVIK 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">NARVIK 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Norway, a supposedly neutral country during World War II, was a target for the Germans and British the minerals and raw goods contingents.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DARAM, WAR
       </div>
       <a href="../../Hollywood/Narvik-2023/Narvik">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Imli-2023/Imli">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/Imli-P2-2023.webp' alt='IMLI - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IMLI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of a young girl who comes to the village to become a dancer. She has a ambitions and wants to become a heroine in the films.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Imli-2023/Imli">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/TeekhiChutteny-2022/TeekhiChutteny">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/teekhi-chutney-part2-2022.webp' alt='TEEKHI CHUTENY PART 2 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TEEKHI CHUTENY PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Teekhi Chutney Part 2 is Hindi Romance, drama Web Series. Adult and Hot Movie Watch it Now Teekhi Chunteny Part 2 - 2023 </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/TeekhiChutteny-2022/TeekhiChutteny">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Darji-2022/Darji">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/darji-2022.webp' alt='DARJI - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DARJI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The Plot revolves around a gym trainer and all the female members in the gym. We meet the handsome guy Shaily who works as a gym instructor in gym.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Darji-2022/Darji">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/an-affair-to-forget-2022.webp' alt='AN AFFAIR TO FORGET - 2022' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AN AFFAIR TO FORGET - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">Wife seeks the help of a young woman to find out if her husband is having an affair. The plot thickens when the young woman falls for the husband instead.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/ChingariChaubey-2023/ChingariChaubey">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/chingari-chaubey-2023.webp' alt='CHINGARI CHAUBEY - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHINGARI CHAUBEY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the youngster roaming around the find his true love. He mts another lady and it inches close to his fantasy.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/ChingariChaubey-2023/ChingariChaubey">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/VirginBahus-2023/VirginBahus">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/virgin-bahus-2023.webp' alt='VIRGIN BAHUS - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VIRGIN BAHUS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the family with three marriages. The daughter in laws entered into a mood of confusion. watch Virgin Bahus - 2023</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/VirginBahus-2023/VirginBahus">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP1-2022/WalkManP1">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/walkman1-2022.webp' alt='WALKMAN PART 1 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/WalkManP1-2022/WalkManP1">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP2-2022/WalkManP2">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/walkman2-2022.webp' alt='WALKMAN PART 2 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/WalkManP2-2022/WalkManP2">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP3-2022/WalkManP3">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/walkman3-2022.webp' alt='WALKMAN PART 3 - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 3 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18 
       </div>
       <a href="../../Adult/WalkManP3-2022/WalkManP3">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
     
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Thunivu-2023/Thunivu">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/thunivu-2023.webp' alt='THUNIVU - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THUNIVU - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A mysterious mastermind - Daredevil and his team forms a plan and commits bank heist to find the corporate looted people's money.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Bollywood/Thunivu-2023/Thunivu">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Varisu-2023/Varisu">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/varisu-2023.webp' alt='VARISU - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VARISU - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Varisu is a family drama with lost of action scene Vijay Rajendran is a happy to-go lucky man. Things change when his father dies unexpectedly</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Varisu-2023/Varisu">
      <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TrailByFire-2023/TrailByFire">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/trial-by-fire-2023.webp' alt='TRAIL BY FIRE - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TRAIL BY FIRE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Difficult yet resilient journey of two parents - Neelam and Shekhar Krishnamoorthy, trying to seek justice over the last two decades.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
       <a href="../../Bollywood/TrailByFire-2023/TrailByFire">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MumbaiMafia-2023/MumbaiMafia">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/mumbai-mafia-2022.webp' alt='MUMBAI MAFIA... - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MUMBAI MAFIA... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In 1990s Mumbai, a crime boss and his network wield unchecked power over the city - the rise of 'encounter cops' who brazenly kill their targets.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.4 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
       <a href="../../Bollywood/MumbaiMafia-2023/MumbaiMafia">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Chhatriwali-2023/Chhatriwali">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/chhatriwali-2023.webp' alt='CHHATRIWALI - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHHATRIWALI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Sanya is an unemployed chemistry genius looking for a job. However, she also wants to use her knowledge of chemistry to help young minds.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Bollywood/Chhatriwali-2023/Chhatriwali">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
      <a href="../../Bollywood/Vaalvi-2023/Vaalvi">
   
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/vaalvi-2023.webp' alt='VAALVI 2023' width={400} height={300} loading="lazy"/>
</div></a>
      </div>
      <div className="flex-grow">
        <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VAALVI 2023</h2>
        <h3 className="leading-relaxed text-white text-base">Aniket and Avani, a couple, decide to end their lives together. A foolproof plan is made, but by Aniket and his girlfriend Devika. </h3>
      
        <p className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > IMDb RATING:    </p>
 
         <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.7 Out of 10</h3>
       
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DARAMA
       </div>
       <a href="../../Bollywood/Vaalvi-2023/Vaalvi">
      <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
       
      </div>
    </div>
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-indigo-500 mb-5 flex-shrink-0">
          <a href="../../Bollywood/DharaviBank-2022/DharaviBank">
    
 <div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/dharavi-bank-2022.webp' alt='DHARAVI BANK - 2022' width={400} height={300} loading="lazy"/>
</div></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DHARAVI BANK - 2022</h2>
            <p className="leading-relaxed text-white text-base">A 30,000 Crore crime nexus is being ruled by the unattainable Thalaivan right in the heart of Mumbai, in Dharavi. JCP Jayant is on a mission.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          
              <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
          
       <a href="../../Bollywood/DharaviBank-2022/DharaviBank"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Kantara-2022/Kantara">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"   src='/kantara-2022.webp' alt='KANTARA - 2022'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KANTARA - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">It involves culture of Kambla and Bhootha Kola. A human and nature conflict where Shiva is the rebellion who works against nature. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :SOCIAL, DARMA
       </div>
       <a href="../../Bollywood/Kantara-2022/Kantara">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Freddy-2022/Freddy">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/freddy-2022.webp' alt='FREDDY - 2022' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">FREDDY - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">The lines between love and obsession blur in this romantic thriller packed with unpredictable twists and sharp turns. Watch Freddy Today. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Bollywood/Freddy-2022/Freddy">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Dhokha-2022/Dhokha">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/dhokha-2022.webp' alt='DHOKHA - 2022' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DHOKHA - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">When a housewife with a personality disorder is taken hostage by a terrorist on the loose and a husband accused of cheating on his wife.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white  flex-row text-center items-center">
      GENRE :ACTION, MYSTERY
       </div>
       <a href="../../Bollywood/Dhokha-2022/Dhokha">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Kuttey-2023/Kuttey">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/kuttey-2023.webp' alt='KUTTEY - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KUTTEY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A van carrying crores of cash. One rainy night in the outskirts of Mumbai. Unaware of each other, three stray gangs cross paths on the hunt.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Kuttey-2023/Kuttey"> 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/OperationFortune-2023/OperationFortune">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/operation-fortune-ruse-de-uerre-2023.webp' alt='OPERATION FORTUNE... - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">OPERATION FORTUNE... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, THRILLER
       </div>
       <a href="../../Hollywood/OperationFortune-2023/OperationFortune">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Babylon-2023/Babylon">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/babylon-2022.webp' alt='BABYLON - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">BABYLON - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in Hollywood.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Hollywood/Babylon-2023/Babylon">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Devotion-2023/Devotion">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/devotion-2023.webp' alt='DEVOTION - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DEVOTION - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A pair of U.S. Navy fighter pilots risk their lives during the Korean War and become some of the Navy's most celebrated wingmen.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, WAR
       </div>
       <a href="../../Hollywood/Devotion-2023/Devotion">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Shahmaran-2023/Shahmaran">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/shahmaran-2023.webp' alt='SHAHMARAN - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHAHMARAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> When Sahsu goes to Adana for a lecture, it's the perfect chance to face her estranged grandfather. But soon, she finds herself in the midst of a legend.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ADVENTURE, DRAMA
       </div>
       <a href="../../Hollywood/Shahmaran-2023/Shahmaran">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/JungE-2023/JungE">
 
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/jung-e-2023.webp' alt='JUNG-E - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">JUNG-E - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
       <a href="../../Hollywood/JungE-2023/JungE">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheOldWay-2023/TheOldWay">
 
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-old-way-2023.webp' alt='THE OLD WAY - 2023'  width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE OLD WAY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An old gunslinger and his daughter must face the consequences of his past, when the son of a man he murdered years ago arrives to take his revenge.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, WESTERN
       </div>
       <a href="../../Hollywood/TheOldWay-2023/TheOldWay">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/VikingsValhalla-2023/VikingsValhallaP1">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/vikings-valhalla-2023.webp' alt='VIKINGS VALHALLA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VIKINGS VALHALLA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follow-up series to 'Vikings' set 100 years later and focusing on the adventures of Leif Erikson, Freydis, Harald Hardrada, Norman King William the Conqueror.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
       <a href="../../Hollywood/VikingsValhalla-2023/VikingsValhallaP1">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Hunters-2023/Hunters">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/hunters-2023.webp' alt='HUNTERS - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HUNTERS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In 1977 New York City, a troubled young Jewish man bent on revenge is taken in by a secret group of Nazi hunters fighting a clandestine war against the Nazi.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
       <a href="../../Hollywood/Hunters-2023/Hunters">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/GinnyAndGeorgia-2023/GinnyAndGeorgia">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/ginny-georgia-2023.webp' alt='GINNY & GEORGIA - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">GINNY & GEORGIA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Ginny Miller, an angsty fifteen-year-old, often feels more mature than her thirty-year-old mother, the irresistible and dynamic Georgia Miller.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Hollywood/GinnyAndGeorgia-2023/GinnyAndGeorgia">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/LastOfUs-2023/LastOfUs">

<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl"  src='/the-last-of-us-2023.webp' alt='THE LAST OF US - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LAST OF US - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                9.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Hollywood/LastOfUs-2023/LastOfUs">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
   
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Againsttheice/againsttheice" >
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/against-the-ice-2022.webp' alt='AGAINST THE ICE - 2022' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AGAINST THE ICE - 2022</h2>
          <h3 className="leading-relaxed text-white text-base"> When a housewife with a personality disorder is taken hostage by a terrorist on the loose and a husband accused of cheating on his wife.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.5 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, MYSTERY
       </div>
       <a href="../../Hollywood/Againsttheice/againsttheice" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/PlayDead-2023/PlayDead">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/play-dead-2022.webp' alt='PLAY DEAD - 2023' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">PLAY DEAD - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Criminology student Chloe fakes her own death to break into a morgue, in order to retrieve a piece of that ties her brother to a crime gone wrong.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, DRAMA
       </div>
       <a href="../../Hollywood/PlayDead-2023/PlayDead">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheLastHeist-2022/TheLastHeist">
     
<div className="rounded-3xl blur-invert drop-shadowrounded-3xl">
  <img className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl" src='/the-last-heist-2022.webp' alt='THE LAST HEIST - 2022' width={400} height={300} loading="lazy"/>
</div></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LAST HEIST - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">The four thieves bounded by honor meet back at the local boozer. Beneath the banter lies a dark secret that test the loyalty.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.3 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Hollywood/TheLastHeist-2022/TheLastHeist">
      <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
                
      </div>
      
  </section>
  </div>
  </div>
  <div className="container px-5 py-24 mx-auto items-center justify-center  flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
   </div>
      </main>
      < ShareThis async defer />
      </div>
    </div>
    
  )
}
