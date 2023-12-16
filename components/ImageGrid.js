// // components/ImageGrid.js
// import React from 'react';
// import MovieCard from './MovieCard';
// import TvshowCard from './TvshowCard';
// import styles from '../styles/ImageGrid.module.css'; // Import a CSS module for styling

// const ImageGrid = ({ movies, tvshows }) => {
//   return (
//     <div className={styles.imageGrid}>
//       <h2>Movies</h2>
//       <div className={styles.cardContainer}>
//         {movies && movies.map((movie) => (
//           <MovieCard key={movie.id} {...movie} />
//         ))}
//       </div>

//       <h2>TV Shows</h2>
//       <div className={styles.cardContainer}>
//         {tvshows && tvshows.map((tvshow) => (
//           <TvshowCard key={tvshow.id} {...tvshow} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGrid;




//   // // // ImageGrid.js
//   // import React from 'react';
//   // import MovieCard from './MovieCard';
//   // import TvshowCard from './TvshowCard';

//   // const ImageGrid = ({ data, type }) => {
//   //   return (
//   //     <div>
//   //       {data.map((item) => (
//   //         <React.Fragment key={item.id}>
//   //           {type === 'movie' ? <MovieCard movie={item} /> : <TvshowCard tvshow={item} />}
//   //         </React.Fragment>
//   //       ))}
//   //     </div>
//   //   );
//   // };

//   // export default ImageGrid;


// components/ImageGrid.js
// import React from 'react';
// import MovieCard from './MovieCard';
// import TvshowCard from './TvshowCard';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css'; // Import styles for react-tabs
// import styles from '../styles/ImageGrid.module.css';

// const ImageGrid = ({ movies, tvshows }) => {
//   return (
//     <div className={styles.imageGrid}>
//       <Tabs>
//         <TabList>
//           <Tab>Movies</Tab>
//           <Tab>TV Shows</Tab>
//         </TabList>

//         <TabPanel>
//           <h2>Movies</h2>
//           <div className={styles.cardContainer}>
//             {movies && movies.map((movie) => (
//               <MovieCard key={movie.id} {...movie} />
//             ))}
//           </div>
//         </TabPanel>

//         <TabPanel>
//           <h2>TV Shows</h2>
//           <div className={styles.cardContainer}>
//             {tvshows && tvshows.map((tvshow) => (
//               <TvshowCard key={tvshow.id} {...tvshow} />
//             ))}
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default ImageGrid;


// components/ImageGrid.js               the right one
// import React from 'react';
// import MovieCard from './MovieCard';
// import TvshowCard from './TvshowCard';
// import styles from '../styles/ImageGrid.module.css';

// const ImageGrid = ({ movies, tvshows }) => {
//   return (
    
//     <div className={styles.imageGrid}>
//      <h3 className="text-center mb-8 text-white font-bold" style={{ marginTop:'10px', fontSize:"30px", textShadow: "2px 3px 5px #2b2 " }}>MOVIES</h3>
   
//         {movies && movies.map((movie) => (
//           <MovieCard key={movie.id} {...movie} />
//         ))}
     

     
//       <div className={styles.imageGrid}>
//       <h3 className="text-center mb-8 text-white font-bold" style={{ marginTop:'10px', fontSize:"30px", textShadow: "2px 3px 5px #2b2 " }}>TV SHOW</h3>
//         {tvshows && tvshows.map((tvshow) => (
//           <TvshowCard key={tvshow.id} {...tvshow} />
//         ))}
//  </div>     
//     </div>
//   );
// };

// export default ImageGrid;


// components/ImageGrid.js
// components/ImageGrid.js
import React from 'react';
import MovieCard from './MovieCard';
import TvshowCard from './TvshowCard';
import styles from '../styles/ImageGrid.module.css';

const ImageGrid = ({ movies, tvshows }) => {
  return (
    <div className={styles.imageGrid}>
      {/* Movies */}
      {movies && movies.length > 0 && (
        <>
          <h2 className="text-center mb-8 text-white font-bold" style={{ fontSize: "30px", textShadow: "2px 3px 5px #2b2 " }}>Movies</h2>
          <div className={styles.cardContainer}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </>
      )}

      {/* TV Shows */}
      {tvshows && tvshows.length > 0 && (
        <>
          <h2 className="text-center mb-8 text-white font-bold" style={{ fontSize: "30px", textShadow: "2px 3px 5px #2b2 " }}>TV Shows</h2>
          <div className={styles.cardContainer}>
            {tvshows.map((tvshow) => (
              <TvshowCard key={tvshow.id} {...tvshow} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGrid;



