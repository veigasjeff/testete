import "@styles/globals.css";
import Footer from "../components/Footer";
import Hamburger from "../components/Hamburger";
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";


function Application({ Component, pageProps }) {
  return (
    <>


      <div className="center">
        <GoogleAnalytics measurementId="G-HNVB3X7H2R" />

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
