import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import '@styles/styles.module.css'

export default function Home() {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

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
      "name":"Uwatch4free™ | Watch Movies and TV-Series Online Free",
      "isPartOf":{
        "@id":"https://uwatch4free.vercel.app/#website"
      },
      "about":{
        "@id":"https://uwatch4free.vercel.app/#organization"
      },
      "description":"Uwatch4free™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free",
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
          "name":"Uwatch4free™ | Watch Movies and TV-Series Online Free"
        }
      ]
    },
    {
      "@type":"WebSite",
      "@id":"https://uwatch4free.vercel.app/#website",
      "url":"https://uwatch4free.vercel.app/",
      "name":"Uwatch4free™ | Watch Movies and TV-Series Online Free",
      "description":"Uwatch4free™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free",
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
      "name":"Uwatch4free™ | Watch Movies and TV-Series Online Free",
      "url":"https://uwatch4free.vercel.app/",
      "logo":{
        "@type":"ImageObject",
        "inLanguage":"en-US",
        "@id":"https://uwatch4free.vercel.app/#/schema/logo/image/",
        "url":"https://uwatch4free.vercel.app/logo.png",
        "contentUrl":"https://uwatch4free.vercel.app/logo.png",
        "width":834,
        "height":135,
        "caption":"Uwatch4free™ | Watch Movies and TV-Series Online Free"
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
      <div className="bg-[#1a202c] ">
      <Head>
        <title>Uwatch4free™ | Watch Movies and TV-Series Online Free</title>
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
	      <meta name="description" content="Uwatch4free™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free" />
	     <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta name="keywords" content="Uwatch4free,streaming,latest movies,online tv,latest free movies,watch latest movies online,latest full movies online" />
	     <meta property="og:locale" content="en_US" />   
<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
	     <meta property="og:site_name" content="Uwatch4free™ | Watch Movies and TV-Series Online Free " />
	     <meta property="og:type" content="website" />
	     <meta property="og:image:height" content="1280"/>
	     <meta property="og:image:width" content="720"/>
	     <meta property="og:title" content="Uwatch4free™ | Watch Movies and TV-Series Online Free " />
	     <meta property="og:description" content="Uwatch4free™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free " />
	     <meta property="og:url" content="https://uwatch4free.vercel.app/" />
	     <meta property="og:image:type" content="image/jpeg" />
	     <meta property="og:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
	     <meta property="og:image:secure_url" content="https://uwatch4free.vercel.app/og_image.jpg" />
	     <meta name="twitter:card" content="summary_large_image" />
	     <meta name="twitter:title" content="Uwatch4free™ " />
	     <meta name="twitter:description" content=" Uwatch4free™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free " />
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
       
      <main>
        <div>
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font ">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-white my-2 text-center md:text-4xl dark:text-white"> Uwatch4free™ Watch Latest Movies</h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/LittleDixie-2023/LittleDixie" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/little-dixie-2023.webp' alt='LITTLE DIXIE - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LITTLE DIXIE - 2023</h2>
            <p className="leading-relaxed text-white text-base">Doc facilitates a fragile truce between the Governor and Cartel, trading prosecutorial leniency for finance. With no more truce, Little Dixie.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.9 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
          
       <a href="../../Hollywood/LittleDixie-2023/LittleDixie" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>

        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Creed3-2023/Creed3" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/creed-III-2023.webp' alt='CREED III - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CREED III - 2023</h2>
            <p className="leading-relaxed text-white text-base">Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, just a fight.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.3 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>SPORTS, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/Creed3-2023/Creed3" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>

        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Ambush-2023/Ambush" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/ambush-2023.webp' alt='AMBUSH - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AMBUSH - 2023</h2>
            <p className="leading-relaxed text-white text-base">A group of young elite commandos, led by Captain Drummond are tasked with collecting highly classified information that can change the fate of the war.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.4 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, WAR</strong>
       </div>
          
       <a href="../../Hollywood/Ambush-2023/Ambush" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/MohanChabhiwalaP1-2023/MohanChabhiwalaP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/mohan-chabhiwala-p1-2023.webp' alt='MOHAN CHABHIWALA P1 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">MOHAN CHABHIWALA P1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Mohan Chabhiwala is Ullu Web Series The plot revolves around a man who is a street vendor. He gets attracted to multiple women and tries his luck.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/MohanChabhiwalaP1-2023/MohanChabhiwalaP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Nasha-2023/Nasha">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/nasha-2023.webp' alt='NASHA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">NASHA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Nasha is an Indian web series that explores adult romance and love through a compelling storyline, bold cinematography, sensuality, and taboo relationships.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Nasha-2023/Nasha">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/JungleCottage-2023/JungleCottage">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/jungle-cottage-2023.webp' alt='JUNGLE COTTAGE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">JUNGLE COTTAGE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Jungle Cottage is a Wow Originals web series. Hindi Hot Web Series, Free Hindi Hot Web Series, Hot Hindi Sex Video, Hot Hindi Web Series, Porn Web Series.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/JungleCottage-2023/JungleCottage">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Selfiee-2023/Selfiee">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/selfiee-2023.webp' alt='SELFIEE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SELFIEE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">21-year old Vicky is diagnosed with mental health issues and starts having illusory images which he needs to break out his situation.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/Selfiee-2023/Selfiee">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "> Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/OuterBanks-2023/OuterBanks">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/outer-banks-2023.webp' alt='OUTER BANKS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">OUTER BANKS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, DRAMA</strong>
       </div>
       <a href="../../Bollywood/OuterBanks-2023/OuterBanks">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Triptych-2023/Triptych">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/Triptych-2023.webp' alt='TRIPTYCH - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TRIPTYCH - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Triada Title Announcement (Latin America Market)
It follows Becca, a forensics expert who, when investigating a murder.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>DRAMA, MYSTERY</strong>
       </div>
       <a href="../../Bollywood/Triptych-2023/Triptych">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/WeHaveAGhost-2023/WeHaveAGhost" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/we-have-a-ghost-2023.webp' alt='WE HAVE A GHOST - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WE HAVE A GHOST - 2023</h2>
            <p className="leading-relaxed text-white text-base">Finding a ghost named Ernest haunting their new home turns Kevin's family into overnight social sensations. But when Kevin and Ernest investigate the mystery.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.2 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>COMEDY, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/WeHaveAGhost-2023/WeHaveAGhost" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
       
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheBlacklistS1-2023/TheBlacklistS1" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/the-blacklist-2023.webp' alt='THE BLACKLIST SEASON 1 - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE BLACKLIST SEASON 1 - 2023</h2>
            <p className="leading-relaxed text-white text-base">A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.0 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, MYSTERY</strong>
       </div>
          
       <a href="../../Hollywood/TheBlacklistS1-2023/TheBlacklistS1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/LutherTheFallenSun-2023/LutherTheFallenSun" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/luther-the-fallen-sun-2023.webp' alt='LUTHER THE FALLEN SUN - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LUTHER THE FALLEN SUN - 2023</h2>
            <p className="leading-relaxed text-white text-base">Brilliant but disgraced detective John Luther breaks out of prison to hunt down a sadistic serial killer who is terrorising London.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.1 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, DRAMA</strong>
       </div>
          
       <a href="../../Hollywood/LutherTheFallenSun-2023/LutherTheFallenSun" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/GandiIBaatS7-2023/GandiIBaatS7">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/gandii-baat-s7-2023.webp' alt='SUKI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">GANDII BAAT S7 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/GandiIBaatS7-2023/GandiIBaatS7">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/love-guru-s2-p2-2023.webp' alt='LOVE GURU S2 (PART 2) - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LOVE GURU S2 (PART 2) - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/KhidkiP1-2023/KhidkiP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/khidki-p1-2023.webp' alt='KHIDKI PART 1 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">KHIDKI PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of the Khidki Part 1 web series revolves around the life of a young girl who enjoys living her life to the fullest. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/KhidkiP1-2023/KhidkiP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Lagaslas-2023/Lagaslas">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/lagaslas-2023.webp' alt='LAGASLAS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LAGASLAS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A young man named Edmar falls madly in love with Karisma, a barrio lass. Will he still love her if he finds out Karisma's deepest darkest secret?</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Lagaslas-2023/Lagaslas">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Veronica-2023/Veronica">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/veronica-2030.webp' alt='Veronica - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">Veronica - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Built for pleasure, Veronica 2030 is a love android from the future - but there's a problem with the programming...</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.7 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Veronica-2023/Veronica">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/IruDhuruvam-2023/IruDhuruvam">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/iru-dhuruvam-2023.webp' alt='IRU DHURUVAM - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IRU DHURUVAM - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Six months after killing Sekar, Viktor has been off-duty to take care of Gayathri, who is rehabilitating. SI Kishore and his superior.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/IruDhuruvam-2023/IruDhuruvam">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/DieHart-2023/DieHart">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/die-hart-2023.webp' alt='DIE HART - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DIE HART - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows a fictionalized version of Kevin Hart, as he tries to become an action movie star. He attends a school run by Ron Wilcox.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.6 Out of 10</h3>
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/DieHart-2023/DieHart">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Hunt-2023/Hunt">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/hunt-2023.webp' alt='HUNT - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HUNT - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An assistant police commissioner must tackle his inner demons and confront external enemies who are trying to keep him from solving a mystery.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME </strong>
       </div>
       <a href="../../Bollywood/Hunt-2023/Hunt">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheHeadOfLoaquinmMurrieta-2023/TheHeadOfLoaquinmMurrieta" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/the-head-of-joaquin-murrieta-2023.webp' alt='THE HEAD OF JOAQUIN MURRIETA - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE HEAD OF JOAQUIN MURRIETA - 2023</h2>
            <p className="leading-relaxed text-white text-base">Follows the adventures of Joaquín Murrieta and Carrillo as they unite to face a common enemy. The Head of Joaquin Murrieta (2023) is Westen, Action Movie.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/TheHeadOfLoaquinmMurrieta-2023/TheHeadOfLoaquinmMurrieta" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/12DesparateHours-2023/DesparateHours" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/12-desperate-hours-2023.webp' alt='12 DESPERATE HOURS' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">12 DESPERATE HOURS - 2023</h2>
            <p className="leading-relaxed text-white text-base">It centers on Val who finds herself and her young children held hostage by Denny when he forces his way into her house after committing murder that day.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.5 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>DRAMA, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/12DesparateHours-2023/DesparateHours" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Better-2023/BetterP1" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/better-2023.webp' alt='BETTER - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">BETTER - 2023</h2>
            <p className="leading-relaxed text-white text-base">A corrupt police detective has a painful moral awakening and decides to put right 20 years of wrongdoing. Better is a Action Adentue Series</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.5 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/Better-2023/BetterP1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center  text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheWeapon-2023/TheWeapon" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/the-weapon-2023.webp' alt='THE WEAPON - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE WEAPON - 2023</h2>
            <p className="leading-relaxed text-white text-base">Dallas is a one-man killing machine on a mysterious rampage. His attacks on biker gangs and the Vegas mob boss who's holding Dallas's girlfriend hostage.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.5 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/TheWeapon-2023/TheWeapon" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/CarnivalRow-2023/CarnivalRowP1" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/carnival-row-2023.webp' alt='CARNIVAL ROW - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CARNIVAL ROW - 2023</h2>
            <p className="leading-relaxed text-white text-base">A human detective and a fairy rekindle a dangerous affair in a Victorian fantasy world, when a string of murders reveals an unimaginable monster.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/CarnivalRow-2023/CarnivalRowP1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/AntMan-2023/AntMan" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/ant-Man-and-the-wasp-2023.webp' alt='ANT-MAN AND THE Wasp - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">ANT-MAN AND THE Wasp... - 2023</h2>
            <p className="leading-relaxed text-white text-base">Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.4 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/AntMan-2023/AntMan" >
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/HoJaMukat-2023/HoJaMukat">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/ho-ja-mukat-2023.webp' alt='HO JA MUKAT - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HO JA MUKAT - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">21-year old Vicky is diagnosed with mental health issues and starts having illusory images which he needs to break out his situation.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/HoJaMukat-2023/HoJaMukat">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Shehzada-2023/Shehzada">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/shehzada-2023.webp' alt='SHEHZADA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHEHZADA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Bantu is hated by his father Valmiki since he was a toddler. Samara, his boss show him affection and love until he discovers that the Jindals are his parents.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/Shehzada-2023/Shehzada">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheNightManager-2023/TheNightManager">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-night-manager-2023.webp' alt='THE NIGHT MANAGER - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE NIGHT MANAGER - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows Jonathan, an ex-soldier, who must infiltrate an arms dealer's inner circle to avenge the death of his girlfriend.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/TheNightManager-2023/TheNightManager">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Vaathi-2023/Vaathi">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/vaathi-2023.webp' alt='VAATHI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VAATHI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The life of a young man and his struggles against the privatization of education.Vaathi is a Action Dram Movies.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/Vaathi-2023/Vaathi">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MrLocal-2023/MrLocal">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/mr-local-2023.webp' alt='MR.LOCAL - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MR.LOCAL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The film revolves around a carefree "local" guy, Manohar, who leads a happy life with his mother and sister.A hilarious turn when he picks up frequent fights </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, CRIME</strong>
       </div>
       <a href="../../Bollywood/MrLocal-2023/MrLocal">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Suki-2023/Suki">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/suki-2023.webp' alt='SUKI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">SUKI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Suki-2023/Suki">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/EroticaManila-2023/EroticaManila">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/erotica-manila-2023.webp' alt='EROTICA MANILA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">EROTICA MANILA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A man enters an adult film theatre, a writer gets a naughty massage, a porn star satisfies an intern, and a couple kill a man while making love.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/EroticaManila-2023/EroticaManila">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheArk-2023/TheArkP1" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/the-ark-2023.webp' alt='THE ARK - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE ARK - 2023</h2>
            <p className="leading-relaxed text-white text-base">Follows the remaining crew of a spacecraft known as Ark One, who must become the best versions of themselves to stay on course.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.9 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/TheArk-2023/TheArkP1" >
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/MayfairWitches-2023/MayfairWitchesP1" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/mayfair-witches-2023.webp' alt='MAYFAIR WITCHES - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MAYFAIR WITCHES - 2023</h2>
            <p className="leading-relaxed text-white text-base">Follows a neurosurgeon who discovers she is the unlikely heir to a family of witches. She must contend with a sinister presence that has haunted.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/MayfairWitches-2023/MayfairWitchesP1" >
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/InFormTheCold-2023/InFormTheColdP1" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/in-from-the-cold-2023.webp' alt='IN FORM THE COLD - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IN FORM THE COLD - 2023</h2>
            <p className="leading-relaxed text-white text-base">Exposed as an ex-Russian spy, an American single mom must juggle family life and unique shape-shifting skills in a battle against an insidious enemy.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 Out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/InFormTheCold-2023/InFormTheColdP1" >
       <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
                
      </div>
      
  </section>
  </div>
  </div>
  <div className="container px-5 py-24 mx-auto items-center justify-center  flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="/" tabindex="-1" >Home</a></button>
    </li>
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../../Page1" >1</a></button>
    </li>
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../../Page2" >2</a></button>
    </li>
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../../Page3" >3</a></button>
    </li>

  </ul>
</nav>
</div>
      </main>

      </div>
    </div>
    
  )
}
