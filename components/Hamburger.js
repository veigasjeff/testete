import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
      <title>uwatch4free™</title>
        <meta name="robots" content="index, follow" />   
        <meta name="revisit-after" content="1 days" />  
      	<meta name="description" content="Watch now the Best TV shows and Movies " />
	      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="uwatch4free, watch movies online, watch free movies, free movies hd, free tv shows stream, best movies, watch online movies, movies streaming free, free movies, free full hd movies, latest free movies, watch series online"/>
        <meta http-equiv="content-language" content="en"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
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
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/../Hollywood/hollywood">
                    <a>Hollywood</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/../Bollywood/bollywood">
                    <a>Bollywood</a>
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/../Adult/adult">
                    <a>Adult</a>
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