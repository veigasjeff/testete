
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadTAR2({ movie }) {
  

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
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
  const [showPopup, setShowPopup] = useState(false);
  
  function togglePopup() {
    setShowPopup(!showPopup);
  }
  const schemaData   = {
    "@context": "https://schema.org",
    
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://uwatch4free.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP1"
      
    },
    "headline": " The Traitors S01  (2023) Full Movie Online Free | Uwatch4free™",
    "image": "https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682712/the-gifted-s02_ynhaoq.webp",
  
    "datePublished": '2023-01-01T09:00:00.000Z',
    "dateModified": '2023-01-01T09:00:00.000Z',
    "author": [{
        "@type": "Person",
        "name": "DrTrailer",
        "url": "https://uwatch4free.vercel.app/DrTrailer.png"
      }],
    
    "publisher": {
        "@type": "Organization",
        "name": "Uwatch4free",
        "logo": {
          "@type": "ImageObject",
          "url": "https://uwatch4free.vercel.app/og_image.jpg"
        }
      },
    "description": "Uwatch4free™  The Traitors S01  (2023) Full Movie Online Free | Watch Movies, TV-Series & Sports Live Online Free"
  
  };
  return (
    <div>
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
      <Head>
     <title>Watch  The Traitors S01  (2023) Full Movie Online Free | Uwatch4free™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="Uwatch4free,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch the watchful eye movie,index of the watchful eye movie,the watchful eye movie 2023,the watchful eye movie online,watch the watchful eye movie online free,the watchful eye tv series,the watchful eye movie download,the watchful eye movie free download,the watchful eye movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatch4free™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch  The Traitors S01  (2023) | Uwatch4free™" />
<meta property="og:url" content="https://uwatch4free.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP1
" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682712/the-gifted-s02_ynhaoq.webp" />
<meta property="og:image:secure_url" content="https://uwatch4free.vercel.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch  The Traitors S01  (2023) | Uwatch4free™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682712/the-gifted-s02_ynhaoq.webp" />
<meta name="description" content="Watch  The Traitors S01  Full Movie Online on Uwatch4free™, You can also download  The Traitors S01  (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="https://uwatch4free.vercel.app/Hollywood/TheTraitors-2023/" />
       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">



     
       <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://uwatch4free.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatch4free.vercel.app/og_image.jpg" />
<img src={movie.poster} alt={`Poster for ${movie.title}`} loading="lazy" className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl " />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
    <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
    {movie.name} Episode 1 (2023) </h2>
<a href={movie.down2link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 2 (2023) </h2>
<a href={movie.down2link2} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 3 (2023) </h2>
<a href={movie.down2link3} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 4 (2023) </h2>
<a href={movie.down2link4} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 5 (2023) </h2>
<a href={movie.down2link5} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 6 (2023) </h2>
<a href={movie.down2link6} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 7 (2023) </h2>
<a href={movie.down2link7} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 8 (2023) </h2>
<a href={movie.down2link8} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 9 (2023) </h2>
<a href={movie.down2link9} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 10 (2023) </h2>
<a href={movie.down2link10} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>



<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/TheTraitors-2023/TARSR1" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://uwatch4free.vercel.app/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'TAR');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadTAR2;
