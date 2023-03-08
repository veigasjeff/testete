

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
   <div class="bg-[#a0aec0]">
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
 
      <Link href="/" className="flex title-font items-center md:justify-start justify-center text-gray-900">
      <Image src='/logo.png' alt='Logo' width={400} height={60} /></Link>
   
      <p className="mt-2 mx-6 text-sm text-gray-500 px-5">Watch now the Best TV shows and Movies</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  
      <h2 className="title-font text-blue-600 tracking-widest text-sm mb-3 font-bold md:text-sm">HOLLYWOOD MOVIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">ACTION</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">DRAMA</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">THRILLER</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">ROMANCE</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    
        <h2 className="title-font text-blue-600 tracking-widest text-sm mb-3 font-bold md:text-sm">BOLLYWOOD MOVIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">ACTION </a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">DRAMA</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">THRILLER</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">ROMANCE</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-blue-600 tracking-widest text-sm mb-3 font-bold md:text-sm">ADULT MOVIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">GENERAL</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">HOT +18</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">PURE ADULT</a>
          </li>
          <li>
            <a className="text-gray-600 font-bold hover:text-blue-800">EROTICA</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-blue-600 tracking-widest text-sm mb-3 font-bold md:text-sm">ABOUT US</h2>
        <nav className="list-none mb-10">
          <li>
          <a href="../../../intro/contact" className="text-gray-600 font-bold hover:text-blue-800">Contact</a>
          </li>
          <li>
          <a href="../../../intro/privacy" className="text-gray-600 font-bold hover:text-blue-800">Privacy Policy</a>
          </li>
          <li>
          <a href="../../../intro/tearms" className="text-gray-600 font-bold hover:text-blue-800">Tearm of Use</a>
          </li>
          <li>
          <a href="../../../intro/dmca" className="text-gray-600 font-bold hover:text-blue-800">D.M.C.A</a>
          </li>
        </nav>
      </div>
    </div>
  </div>

  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 | Uwatch4free™ —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Watch now the Best TV shows and Movies</a>
      </p>
      
    </div>
  </div>
</footer>
</div>
    </>
  )
}
