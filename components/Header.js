// import Link from 'next/link';
// import { useState } from 'react'; // Import useState hook
// import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


// export default function Home() {
//   const [navbar, setNavbar] = useState(false);

//   const toggleNavbar = () => {
//     setNavbar(!navbar);
//   };

//   return (
//     <div>
//   <nav className="w-full bg-black" >
//   <div className="px-4 mx-auto md:flex md:items-center md:justify-between md:px-8">
//           <div className="flex items-center py-3 md:py-5">
//             <div className="flex items-center flex-col">
//               <img src='/logo.png' alt='Logo' width={450} height={75} className="rounded-3xl" />
          
//             </div>
           
//             <button className="md:hidden" onClick={toggleNavbar}>
//               <svg
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {navbar ? (
//                   <path d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path d="M4 6h16M4 12h16m-7 6h7" />
//                 )}
//               </svg>
//             </button>
//           </div>
//           <div className={`md:flex ${navbar ? 'block' : 'hidden'} space-x-6 md:w-auto md:items-right`}>
//           {/* <div className={`md:flex md:items-center space-x-4 ${navbar ? 'block' : 'hidden'}`}> */}
//             <div className="md:flex-grow"></div>
//             <div className="md:flex md:items-center text-center">
//               <a href="/">
//                 <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
//                   Home
//                 </div>
//                 </a>
//               <a href="/intro/contact">
//               <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
//                   Contact
//                 </div>
//               </a>
//               <a href="/intro/privacy">
//               <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
//                  Privacy Policy
//                 </div>
//               </a>
//               <a href="/intro/tearms">
//               <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
//               Terms of Use
//                 </div>
//               </a>
//              <a href="/intro/dmca">
//              <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
//                  D.M.C.A
//                 </div>
//               </a>
//               <a href="/intro/cookiepolicy">
//              <div className=" px-px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl  hover:text-blue-800 block mt-4 md:inline-block md:mt-0  mr-4 font-bold" >
//              Cookie Policy
//                 </div>
//               </a>
//                   </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }








import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <nav className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 md:flex md:items-center md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-between py-4">
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                quality={90}
                className="rounded-xl"
              />
            </div>
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleNavbar}
            >
              <svg
                className="h-6 w-6"
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

          {/* Links Section */}
          <div
            className={`md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            {[
              { name: 'Home', href: '/' },
              { name: 'Contact', href: '/intro/contact' },
              { name: 'Privacy Policy', href: '/intro/privacy' },
              { name: 'Terms of Use', href: '/intro/tearms' },
              { name: 'D.M.C.A', href: '/intro/dmca' },
              { name: 'Cookie Policy', href: '/intro/cookiepolicy' },
            ].map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-white text-lg font-bold hover:text-blue-400 transition duration-300">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-4 py-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-blue-400 text-2xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-blue-500 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500 text-2xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white hover:text-red-500 text-2xl" />
          </a>
        </div>
      </nav>
    </div>
  );
}
