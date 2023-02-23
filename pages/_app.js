
import '@styles/globals.css'

import Footer from '../components/Footer';
import ShareThis from '../components/ShareThis';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";


function Application({ Component, pageProps }) {
 
  return ( 
    
  <div>
     <script src="../../propler/ads.js" defer></script>
      <PageTransition>  
  <Hamburger />
  
  <Component {...pageProps} />

  <Footer />
  
   </PageTransition>
   <ShareThis />
  </div>
  );
}

export default Application
