
import '@styles/globals.css'

import Footer from '../components/Footer';
import ShareThis from '../components/ShareThis';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";


function Application({ Component, pageProps }) {
 
  return ( 
    
  <div>
  
      <PageTransition>  
  <Hamburger />
  
  <Component {...pageProps} />

  <Footer />
  
   </PageTransition>
 
   <ShareThis />
   <script src="../../propler/chat.js" defer></script>
  </div>
  );
}

export default Application
