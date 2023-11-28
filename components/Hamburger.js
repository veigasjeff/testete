import Link from 'next/link';
import { useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
  <nav className="w-full bg-black">
    <div className="px-4 mx-auto md:flex md:items-center md:justify-between md:px-8">
      <div className="flex flex-col items-center py-3 md:py-5">
 
          <div className="flex items-center flex-col animate-pulse">
            <Image src='/logo.png' alt='Logo' width={450} height={100} className="rounded-3xl" />   
            <p className="text-white mt-2 mr-10 text-center">Watch HD Quality Movies & TV Series Online Free.</p>
          </div>
     
            <button className="md:hidden" onClick={toggleNavbar}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {navbar ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:flex ${navbar ? 'block' : 'hidden'} md:w-auto md:items-center`}>
            <div className="md:flex-grow"></div>
            <div className="md:flex md:items-center">
              <a href="/">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold">
                  Home
                </div>
              </a>
              <a href="/movies/info">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold">
                  Movies
                </div>
              </a>
              <a href="/tvshows/info">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold">
                  TV Shows
                </div>
              </a>
              <a href="/adult/info">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold">
                  Adult
                </div>
              </a>
              <a href="/intro/contact">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold">
                  Contact
                </div>
              </a>
              {/* <a href="/intro/privacy">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold">
                  Privacy
                </div>
              </a>
              <a href="/intro/dmca">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 font-bold">
                  DMCA
                </div>
              </a>
              <a href="/intro/tearms">
                <div className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400  font-bold">
                  Tearms
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
