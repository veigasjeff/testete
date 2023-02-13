
import '@styles/globals.css'

import Footer from '../components/Footer';
import Header from '../components/Header';
import ShareThis from '../components/ShareThis';
import Hamburger from '../components/Hamburger';

function Application({ Component, pageProps }) {
  return ( 
  <div>
  <Hamburger />
  
  <Component {...pageProps} />
 
  <ShareThis />
  <Footer />

  </div>
  );
}

export default Application
