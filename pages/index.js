import Head from "next/head";
import ImageGrid from "../components/ImageGrid";
import moviesData from "../public/movies.json";
import tvshowData from "../public/tvshow.json"; // Change the variable name to `tvshowData`

import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://uwatch4free.vercel.app/og_image.jpg"
        />
        <meta
          property="og:image"
          content="https://uwatch4free.vercel.app/og_image.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://uwatch4free.vercel.app/og_image.jpg"
        />
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
