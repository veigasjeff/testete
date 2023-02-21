import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from "next/link";

function ATFAAds() {
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
     
      {showAd && !isClosed && (
        // Add your ad component here
        <>
           <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>


  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
   
    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          
          <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-Center">
    
            <h2 class="text-4xl font-bold leading-6 text-red-600" id="modal-title">Connecting To Server 
           </h2>
            <h3 class="text-2xl font-bold leading-6 text-center items-center text-gray-500 my-5"  id="modal-title"> 
            Retrieving File Pls Wait For 30 Sec...</h3> 
            <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
             
            <Image class=""  src='/adult-18.svg' alt='Logo' width={200} height={200}  loading="lazy"/>
            </div>
            <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h1 class="text-xl font-bold leading-6 text-red-600" id="modal-title">Are You Sure You Want to Continue?</h1>
              <div class="mt-2">
                <p class="text-lg font-bold text-gray-500">This Part of the Website Requires you to be 18 years of Age or Older.</p>
                </div>
            </div>
          </div>
            <div class="mt-2">
            <video class="w-full" controls autoPlay loop >
<source src="../../official-trailer.mp4" type="video/mp4" alt="Official Trailer">
</source>
</video>
            
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex flex flex-col items-center justify-center sm:flex-row-reverse sm:px-6">
      {remainingTime > 0 && (
        <div class="text-xl font-bold text-red-600">

          Connecting To Server in {remainingTime} seconds...
        </div>
      )}
       {remainingTime <= 0 && (
        <Link href="../../Adult/adult" >
      <button onClick={handleClose} type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ">Exit </button></Link>
    )}
   {remainingTime > 0 && (
        <div class="text-xl font-bold text-red-600">

      
        </div>
      )}
       {remainingTime <= 0 && (
   <Link href="../../Adult/Pamasahe-2023/Pamasahe" >
<button onClick={handleClose} type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ">Continue Yes </button></Link>
  )}
 
      </div>
      <div class="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-center">
              <div class="mt-2">
                <p class="text-lg font-bold text-gray-500">Please Verify your age to view this content, or click EXIT to Leave </p>
              </div> </div>
    </div>
  </div>
</div>
</div>
          
        </>
      )}
    </div>
  );
}

export default ATFAAds;