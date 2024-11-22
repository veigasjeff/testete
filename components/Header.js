import Link from 'next/link';
import { useState } from 'react'; // Import useState hook
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
  <nav className="w-full bg-black" >
  <div className="px-4 mx-auto md:flex md:items-center md:justify-between md:px-8">
          <div className="flex items-center py-3 md:py-5">
            <div className="flex items-center flex-col">
              <img src='/logo.png' alt='Logo' width={250} height={75} className="rounded-3xl" />
          
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
          <div className={`md:flex ${navbar ? 'block' : 'hidden'} space-x-6 md:w-auto md:items-right`}>
          {/* <div className={`md:flex md:items-center space-x-4 ${navbar ? 'block' : 'hidden'}`}> */}
            <div className="md:flex-grow"></div>
            <div className="md:flex md:items-center text-center">
              <a href="/">
                <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
                  Home
                </div>
                </a>
              <a href="/intro/contact">
              <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
                  Contact
                </div>
              </a>
              <a href="/intro/privacy">
              <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
                 Privacy Policy
                </div>
              </a>
              <a href="/intro/tearms">
              <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
              Terms of Use
                </div>
              </a>
             <a href="/intro/dmca">
             <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
                 D.M.C.A
                </div>
              </a>
              <a href="/intro/cookiepolicy">
             <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
             Cookie Policy
                </div>
              </a>
                  </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
