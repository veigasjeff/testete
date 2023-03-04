import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
      <title>uwatch4free™ | Watch now the Best TV shows and Movies</title>
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
	      <meta name="description" content="uwatch4free™ - Hollywood | Bollywood | Adult Watch now the Best TV shows and Movies" />
	     <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta name="keywords" content="uwatch4free,streaming,latest movies,online tv,latest free movies,watch latest movies online,latest full movies online" />
	     <meta property="og:locale" content="en_US" />
	     <meta property="og:site_name" content="uwatch4free™™ | Watch now the Best TV shows and Movies " />
	     <meta property="og:type" content="website" />
	     <meta property="og:image:height" content="1280"/>
	     <meta property="og:image:width" content="720"/>
	     <meta property="og:title" content="uwatch4free™ | Watch now the Best TV shows and Movies " />
	     <meta property="og:description" content="uwatch4free™ - Hollywood | Bollywood | Adult Watch now the Best TV shows and Movies " />
	     <meta property="og:url" content="https://uwatch4free.vercel.app/" />
	     <meta property="og:image:type" content="image/jpeg" />
	     <meta property="og:image" content="https://uwatch4free.vercel.app/og_image.jpg" />
	     <meta property="og:image:secure_url" content="https://uwatch4free.vercel.app/og_image.jpg" />
	     <meta name="twitter:card" content="summary_large_image" />
	     <meta name="twitter:title" content="uwatch4free™ " />
	     <meta name="twitter:description" content=" uwatch4free™ - Hollywood | Bollywood | Adult Watch now the Best TV shows and Movies " />
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

      </Head>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
           
          <Image src='/logo.png' alt='Logo' width={750} height={121} className="rounded-3xl "/>
              <a href="/">
                
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                <li className="text-white">
                <Link href="/">
                <button className="relative inline-flex items-center rounded-3xl justify-center p-0.5 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
             
                    <a>Home</a></button>
                  </Link>
                </li>
                <li className="text-white">
                <Link href="/../Hollywood/hollywood">
                <button className="relative inline-flex items-center rounded-3xl justify-center p-0.5 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
              
                    <a>Hollywood</a></button>
                  </Link>
                </li>
                <li className="text-white">
                <Link href="/../Bollywood/bollywood">
                <button className="relative inline-flex items-center rounded-3xl justify-center p-0.5  overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
               
                    <a>Bollywood</a></button>
                  </Link>
                </li>
                <li className="text-white">
                <Link href="/../Adult/adult">
                <button className="relative inline-flex items-center rounded-3xl justify-center p-0.5 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                  
                    <a>Adult</a></button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
  );
}