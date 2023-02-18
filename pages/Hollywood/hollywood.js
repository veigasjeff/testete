import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const hollywood = () => {
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
  "@context": "https://schema.org",
  
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://uwatch4free.vercel.app/Hollywood/hollywood"
    
  },
  "headline": "uwatch4free™ Hollywood | Watch now the Best TV shows and Movies",
  "image": "https://uwatch4free.vercel.app/logo.png",

  "datePublished": '2023-01-01T09:00:00.000Z',
  "dateModified": '2023-01-01T09:00:00.000Z',
  "author": [{
      "@type": "Person",
      "name": "uwatch4free",
      "url": "https://uwatch4free.vercel.app/Hollywood/hollywood"
    }],
  
  "publisher": {
      "@type": "Organization",
      "name": "uwatch4free",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uwatch4free.vercel.app/og_image.jpg"
      }
    },
  "description": "uwatch4free™ Hollywood | Watch now the Best TV shows and Movies"

};
const maxData   = {

  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Hollywood",
    "item": "https://hbomaxmovies.netlify.app/Hollywood/hollywood"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Bollywood",
    "item": "https://hbomaxmovies.netlify.app/Bollywood/bollywood"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Adult",
    "item": "https://hbomaxmovies.netlify.app/Adult/adult"
  }]
};
const searchData   = {
  "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.example.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://query.example.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      
  }
  };
const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};

  return (
  
    <div >
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(maxData) }}
  />
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(searchData) }}
  />
      <div class="bg-[#1a202c]">
      <Head>
        <title>uwatch4free™ Hollywood</title>
      
	<meta name="description" content="Watch
 now the Best TV shows and Movies " />
	<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="keywords" content="uwatch4free,streaming,latest movies,online tv,latest free movies,watch latest movies online,latest full movies online" />
	<meta name="revisit-after" content="1 days" />
	<meta property="og:locale" content="en_US" />
  <meta name="robots" content="index, follow" />
	<meta name="robots" content="index, follow, archive" />
	<link rel="icon" type="image/x-icon" href="favicon.ico" />
	<meta property="og:site_name" content="uwatch4free™ | Watch now the Best TV shows and Movies " />
	<meta property="og:type" content="website" />
	<meta property="og:image:height" content="1280"/>
	<meta property="og:image:width" content="720"/>
	<meta property="og:title" content="uwatch4free™ | Watch now the Best TV shows and Movies " />
	<meta property="og:description" content="Watch now the Best TV shows and Movies " />
	<meta property="og:url" content="https://uwatch4free.vercel.app/" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
	<meta property="og:image:secure_url" content="https://uwatch4free.vercel.app/og_image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="uwatch4free™ " />
	<meta name="twitter:description" content=" Watch now the Best TV shows and Movies " />
	<meta name="twitter:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
  <script async="async" data-cfasync="false" src="//ophoacit.com/1?z=5720166"></script>
  <script async="async" data-cfasync="false" src="//ophoacit.com/1?z=5720177"></script>
  <meta name="google-site-verification" content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg" />
  <link rel="alternate" hreflang="en-us" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-gb" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-ca" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-au" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-se" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-fr" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-dk" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="en-no" 
	href="https://uwatch4free.vercel.app/"/>
	<link rel="alternate" hreflang="x-default" 
	href="https://uwatch4free.vercel.app/"/>
      </Head>
       
      <main>
        <div>
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-white my-2 text-center md:text-4xl dark:text-white">uwatch4free™ Watch Latest Movies</h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/BlackPantherWaka-2023/BlackPantherWaka" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/black-panther-wakanda-forever-2022.webp' alt='BLACK PANTHER WAKANDA FOREVER - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">BLACK PANTHER WAKANDA FOREVER - 2023</h2>
            <p className="leading-relaxed text-white text-base">The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/BlackPantherWaka-2023/BlackPantherWaka"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/ExtraOrdinary-2023/ExtraOrdinaryP1" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/extraordinary-2023.webp' alt='EXTRAORDINARY - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">EXTRAORDINARY - 2023</h2>
            <p className="leading-relaxed text-white text-base">Jen, a young, self-aware woman who lives in a world where everyone has a superpower except her.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/ExtraOrdinary-2023/ExtraOrdinaryP1"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Fear-2023/Fear" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/fear-2023.webp' alt='FEAR - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">FEAR - 2023</h2>
            <p className="leading-relaxed text-white text-base">A much needed getaway and a celebration weekend turns into a nightmare due to the contagious airborne threat.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.5 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>HORROR, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/Fear-2023/Fear"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Imani-2023/Imani" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/imani-2023.webp' alt='IMANI - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IMANI - 2023</h2>
            <p className="leading-relaxed text-white text-base">Faith has it all as a mother and wife, but a year after what she believes was a car accident, Faith discovers that she is an Army special ops lieutenant.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.1 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/Imani-2023/Imani"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Kaleidoscope-2023/KaleidoscopeP1" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/kaleidoscope-2022.webp' alt='KALEIDOSCOPE - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KALEIDOSCOPE - 2023</h2>
            <p className="leading-relaxed text-white text-base">Centered around the largest heist ever attempted, the vengeance and betrayals that surround it. Kaleidoscope is a Eight Parts Episode.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, ACTION</strong>
       </div>
          
       <a href="../../Hollywood/Kaleidoscope-2023/KaleidoscopeP1"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/KnockAtTheCabin-2023/KnockAtTheCabin" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/knock-at-the-cabin-2023.webp' alt='KNOCK AT THE CABIN - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KNOCK AT THE CABIN - 2023</h2>
            <p className="leading-relaxed text-white text-base">While vacationing, a girl and her parents are taken hostage by armed strangers who demand that the family make a choice to avert the apocalypse.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>HORROR, MYSTERY</strong>
       </div>
          
       <a href="../../Hollywood/KnockAtTheCabin-2023/KnockAtTheCabin"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/LockwoodAndCo-2023/LockwoodAndCoP1" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/lockwood-and-co-2023.webp' alt='LOCKWOOD AND CO - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LOCKWOOD AND CO - 2023</h2>
            <p className="leading-relaxed text-white text-base">A tiny startup, run by two teenage boys and a newly arrived, supremely psychically gifted girl, a renegade trio destined to unravel a mystery of history.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          
       <a href="../../Hollywood/LockwoodAndCo-2023/LockwoodAndCoP1"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/NightTrain-2023/NightTrain" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/night-train-2023.webp' alt='NIGHT TRAIN - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">NIGHT TRAIN - 2023</h2>
            <p className="leading-relaxed text-white text-base">A single mom struggling to make ends meet as a Hollywood teamster evades capture by a ruthless FBI Agent.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.5 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/NightTrain-2023/NightTrain"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/PockerFace-2023/PockerFace" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/poker-face-2022.webp' alt='POKER FACE - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">POKER FACE - 2023</h2>
            <p className="leading-relaxed text-white text-base">A tech billionaire hosts a high-stakes poker game between friends, but the evening takes a turn when long-held secrets are revealed.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/PockerFace-2023/PockerFace"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TeenWolfTheMovie-2023/TeenWolfTheMovie" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/teen-wolf-the-movie-2023.webp' alt='TEEN WOLF THE MOVIE - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TEEN WOLF THE MOVIE - 2023</h2>
            <p className="leading-relaxed text-white text-base">A terrifying evil has emerged. The wolves howl once again, but only a Werewolf like Scott McCall, can gather both new allies.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.6 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, FANTASY</strong>
       </div>
          
       <a href="../../Hollywood/TeenWolfTheMovie-2023/TeenWolfTheMovie"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/The3rdGuest-2023/The3rdGuest" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/the-3rd-guest-2023.webp' alt='THE 3RD GUEST - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE 3RD GUEST - 2023</h2>
            <p className="leading-relaxed text-white text-base">A husband and wife ghost-hunting team, still mourning the loss of their daughter, encounter her in their latest assignment.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                2.4 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>DRAMA, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/The3rdGuest-2023/The3rdGuest"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheMummyResurrection-2023/TheMummyResurrection" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/the-mummy-resurrection-2022.webp' alt='THE MUMMY RESURRECTION - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE MUMMY RESURRECTION - 2023</h2>
            <p className="leading-relaxed text-white text-base">When an infamous "cursed" Egyptian sarcophagus falls into the hands of unscrupulous huckster Everett Randolph.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.1 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>HORROR, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/TheMummyResurrection-2023/TheMummyResurrection"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TheRig-2023/TheRigP1" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/the-rig-2023.webp' alt='THE RIG - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE RIG - 2023</h2>
            <p className="leading-relaxed text-white text-base">A group of workers on a remote Scottish oil rig are due to return to the mainland when a mysterious fog enshrouds them and supernatural forces take hold.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.8 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>DRAMA, SCI-FI</strong>
       </div>
          
       <a href="../../Hollywood/TheRig-2023/TheRigP1"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/TulsaKing-2023/TulsaKingP1" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/tulsa-king-2023.webp' alt='TULSA KING - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TULSA KING - 2023</h2>
            <p className="leading-relaxed text-white text-base">Following his release from prison, Mafia capo Dwight "The General" Manfredi is exiled to Tulsa, Oklahoma, where he builds a new criminal empire.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, DRAMA</strong>
       </div>
          
       <a href="../../Hollywood/TulsaKing-2023/TulsaKingP1"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/WakingKarma-2023/WakingKarma" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/waking-karma-2023.webp' alt='WAKING KARMA - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WAKING KARMA - 2023</h2>
            <p className="leading-relaxed text-white text-base">When high school senior Karma's estranged cult leader father traps her and her mother in a remote forest compound.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.3 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>HORROR, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/WakingKarma-2023/WakingKarma"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Transfusion-2023/Transfusion" >
         
 <Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/transfusion-2023.webp' alt='TRANSFUSION - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TRANSFUSION - 2023</h2>
            <p className="leading-relaxed text-white text-base">A former Special Forces operative thrust into the criminal underworld to keep his only son from being taken from him.Sam Worthington is a good actor.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
          
       <a href="../../Hollywood/Transfusion-2023/Transfusion"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Plane-2023/Plane">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/plane-2023.webp' alt='PLANE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font mb-3 font-bold md:text-lg ">PLANE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Palne is a action thriller Movies in which A pilot finds himself caught in a war zone after he's forced to land his commercial aircraft during a terrible storm</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
       <a href="../../Hollywood/Plane-2023/Plane">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Narvik-2023/Narvik">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/narvik-2022.webp' alt='NARVIK 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">NARVIK 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Norway, a supposedly neutral country during World War II, was a target for the Germans and British because of the minerals and raw goods contingents.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>DARAM, WAR</strong>
       </div>
       <a href="../../Hollywood/Narvik-2023/Narvik">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/OperationFortune-2023/OperationFortune">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/operation-fortune-ruse-de-uerre-2023.webp' alt='OPERATION FORTUNE... - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">OPERATION FORTUNE... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
       <a href="../../Hollywood/OperationFortune-2023/OperationFortune">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Babylon-2023/Babylon">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/babylon-2022.webp' alt='BABYLON - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">BABYLON - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in Hollywood.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>COMEDY, DRAMA</strong>
       </div>
       <a href="../../Hollywood/Babylon-2023/Babylon">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Devotion-2023/Devotion">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/devotion-2023.webp' alt='DEVOTION - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DEVOTION - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A pair of U.S. Navy fighter pilots risk their lives during the Korean War and become some of the Navy's most celebrated wingmen.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, WAR</strong>
       </div>
       <a href="../../Hollywood/Devotion-2023/Devotion">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Shahmaran-2023/Shahmaran">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/shahmaran-2023.webp' alt='SHAHMARAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHAHMARAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> When Sahsu goes to Adana for a lecture, it's the perfect chance to face her estranged grandfather. But soon, she finds herself in the midst of a legend.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADVENTURE, DRAMA</strong>
       </div>
       <a href="../../Hollywood/Shahmaran-2023/Shahmaran">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/JungE-2023/JungE">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/jung-e-2023.webp' alt='JUNG-E - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">JUNG-E - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
       <a href="../../Hollywood/JungE-2023/JungE">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheOldWay-2023/TheOldWay">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-old-way-2023.webp' alt='THE OLD WAY - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE OLD WAY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An old gunslinger and his daughter must face the consequences of his past, when the son of a man he murdered years ago arrives to take his revenge.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, WESTERN</strong>
       </div>
       <a href="../../Hollywood/TheOldWay-2023/TheOldWay">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/VikingsValhalla-2023/VikingsValhallaP1">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/vikings-valhalla-2023.webp' alt='VIKINGS VALHALLA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VIKINGS VALHALLA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follow-up series to 'Vikings' set 100 years later and focusing on the adventures of Leif Erikson, Freydis, Harald Hardrada, and the Norman King William the Conqueror.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
       <a href="../../Hollywood/VikingsValhalla-2023/VikingsValhallaP1">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Hunters-2023/Hunters">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/hunters-2023.webp' alt='HUNTERS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HUNTERS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In 1977 New York City, a troubled young Jewish man bent on revenge is taken in by a secret group of Nazi hunters fighting a clandestine war against the cabal of high-ranking Nazi.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, DRAMA</strong>
       </div>
       <a href="../../Hollywood/Hunters-2023/Hunters">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/GinnyAndGeorgia-2023/GinnyAndGeorgia">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/ginny-georgia-2023.webp' alt='GINNY & GEORGIA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">GINNY & GEORGIA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Ginny Miller, an angsty fifteen-year-old, often feels more mature than her thirty-year-old mother, the irresistible and dynamic Georgia Miller.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>COMEDY, DRAMA</strong>
       </div>
       <a href="../../Hollywood/GinnyAndGeorgia-2023/GinnyAndGeorgia">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/LastOfUs-2023/LastOfUs">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-last-of-us-2023.webp' alt='THE LAST OF US - 2023<' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LAST OF US - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                9.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, DRAMA</strong>
       </div>
       <a href="../../Hollywood/LastOfUs-2023/LastOfUs">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/YoungKindaichi-2023/YoungKindaichiP1">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-files-of-young-kindaichi-2023.webp' alt='THE FLIS OF KINDA... - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE FLIS OF KINDA... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follow Kindaichi Hajime, a high school student and a private detective with an IQ of 180 solves murder cases that are riddled with difficult clues with his friend.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, DRAMA</strong>
       </div>
       <a href="../../Hollywood/YoungKindaichi-2023/YoungKindaichiP1">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Againsttheice/againsttheice" >
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/against-the-ice-2022.webp' alt='AGAINST THE ICE - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AGAINST THE ICE - 2022</h2>
          <h3 className="leading-relaxed text-white text-base"> When a housewife with a personality disorder is taken hostage by a terrorist on the loose and a husband accused of cheating on his wife.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>DRAMA, MYSTERY</strong>
       </div>
       <a href="../../Hollywood/Againsttheice/againsttheice" >
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/PlayDead-2023/PlayDead">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/play-dead-2022.webp' alt='PLAY DEAD - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">PLAY DEAD - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Criminology student Chloe fakes her own death to break into a morgue, in order to retrieve a piece of evidence that ties her younger brother to a crime gone wrong.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>HORROR, DRAMA</strong>
       </div>
       <a href="../../Hollywood/PlayDead-2023/PlayDead">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheLastHeist-2022/TheLastHeist">
     
<Image className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-last-heist-2022.webp' alt='THE LAST HEIST - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LAST HEIST - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">The four thieves bounded by honor meet back at the local boozer, the place where it all began. Beneath the banter lies a dark secret that test the loyalty.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.3 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
       <a href="../../Hollywood/TheLastHeist-2022/TheLastHeist">
        <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>

         
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
      <a href="../Hollywood/hollywood" tabindex="-1" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 -l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
    </li>

    <li>
      <a href="../Hollywood/hollywood" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 -r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Last</a>
    </li>
  </ul>
</nav>
</div>
      </main>

      </div>
    </div>
  )
}
export default hollywood;