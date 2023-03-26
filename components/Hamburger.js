
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
    
      <nav className="w-full bg-gray-800 shadow">
        <div className=" px-4 justify-center mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
           
          <Image src='/logo.png' alt='Logo' width={750} height={121} className="rounded-3xl  "/>
              <a href="/">
                
              </a>
              </div> </div> </div>
               </nav>
     
    </div>
  );
}