
import '@styles/globals.css'

import Footer from '../components/Footer';

import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";


function Application({ Component, pageProps }) {

  return ( 

      <PageTransition>  
  <Hamburger />

  
  <Component {...pageProps} />

  <Footer />

   </PageTransition>
  

  );
}

export default Application
