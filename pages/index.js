import Head from "next/head";
import ImageGrid from "../components/ImageGrid";
import moviesData from "../public/movies.json";
import tvshowData from "../public/tvshow.json"; // Change the variable name to `tvshowData`
import styles from "../styles/Home.module.css";


const Home = () => {
  return (
    <>
      <Head>
      <title>
            Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free.
          </title>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="revisit-after" content="1 days" />
          <meta
            name="facebook-domain-verification"
            content="13auzwhblf4oo4jn5vl6gcmebugsqb"
          />
          <meta property="fb:app_id" content="602176271414602" />
          <meta
            name="dailymotion-domain-verification"
            content="dmv6sg06w9r5eji88"
          />
          <meta
            name="monetag"
            content="076afbb772da1a62ef6f43756dfa5f65"
          ></meta>
          <meta name="google-site-verification" content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg" />
          <meta
            name="description"
            content="Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta
            name="keywords"
            content="uwatch4free,uwatch4free tv,streaming,latest movies,online tv,latest free movies,watch latest movies online"
          />
          <meta property="og:locale" content="en_US" />
          <meta property=" Content-Security-Policy: frame-ancestors 'self' Uwatch4free.vercel.app *.Uwatch4free.vercel.app;" />
          <meta
            property="og:site_name"
            content="Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Uwatch4free™ | Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta
            property="og:description"
            content="Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta property="og:url" content="/" />
          <meta property="og:image:type" content="image/jpg" />
          <meta
            property="og:image"
            content="https://uwatch4free.vercel.app/og_image.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="https://uwatch4free.vercel.app/og_image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta
            name="twitter:description"
            content=" Uwatch4free™ - Watch HD Quality Movies & TV Series Online Free. "
          />
          <meta
            name="twitter:image"
            content="https://uwatch4free.vercel.app/og_image.jpg"
          />

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="canonical" href="https://uwatch4free.vercel.app/" />
        </Head>
      <div className={styles.container}>
        <main>
          <h1
            className="text-center mb-8 text-white font-bold"
            style={{ fontSize: "30px", textShadow: "2px 3px 5px #2b2 " }}
          >
            {" "}
            Watch HD Quality Movies & TV Shows Online Free.
          </h1>
          <ImageGrid movies={moviesData} />
          <ImageGrid tvshows={tvshowData} />{" "}
          {/* Change the prop name to `tvshows` */}
        </main>
      </div>
    </>
  );
};

export default Home;
