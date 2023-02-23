
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from 'next/link';
import {Carousel}  from "@components/BCarousel";


function Most() {
  const [showAd, setShowAd] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1000); // Display ad after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </Head>
      {showAd && !isClosed && (
        // ,Add your ad component here
        <>



<div class="flex bg-gray-500 bg-opacity-75 transition-opacity">
  <div className="carousel-inner relative w-full cursor-pointer m-10 overflow-hidden">



  
   <h2 className="text- sm-gray-500 bg-opacity-75  text-2xl py-15  title-font items-center justify-center mx-5 m-10 mb-1 font-bold md:text-2xl ">
    Latest Updated Bollywood Movies On 10 Feb 2023.
   </h2>
 
              <Carousel />
             

     
      {remainingTime > 0 && (
        <div>
          Ad will be skippable in {remainingTime} seconds...
        </div>
      )}
       {remainingTime <= 0 && (
        <Link href="../Bollywood/bollywood">
      <button onClick={handleClose} type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Skip Ad</button></Link>
       )}
      </div></div> 

  


          
        </>
      )}
    </div>
  );
}

export default Most;