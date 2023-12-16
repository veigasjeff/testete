import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Header';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';
import Head from 'next/head';



function Application({ Component, pageProps }) {

  return ( 
    <>
      
     
     <div className="center">
   
        <GoogleAnalytics measurementId="G-K66D167PL8" />
     
     
        <PageTransition>  
          <Hamburger />
         
         <Component {...pageProps} />
          <Footer />
        </PageTransition>
     </div>
   </>
  );
}




export default Application;
