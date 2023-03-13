
import '@styles/globals.css'

import Footer from '../components/Footer';
import ShareThis from '../components/ShareThis';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import Translate from '@components/Translate';




function Application({ Component, pageProps }) {
 


  return ( 
    

 
      <PageTransition>  
  <Hamburger />
<Translate />
  
  <Component {...pageProps} />

  <Footer />
  < ShareThis async defer />
   </PageTransition>
  
   

  );
}

export default Application
